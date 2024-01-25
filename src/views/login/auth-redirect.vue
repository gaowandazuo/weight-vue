<script>
  import store from '@/store'
  import oauth2 from '@/utils/oauth2'
  import NProgress from 'nprogress'
  import { toLoginRoute } from '@/utils/routes'

  export default {
    name: 'AuthRedirect',
    created() {
      // start progress bar
      NProgress.start()
      const urlObj = new URL(window.location.href)

      const code = urlObj.searchParams.get('code')
      const state = urlObj.searchParams.get('state')
      const redirect = urlObj.searchParams.get('redirect')

      const path = this.$route.path

      if (code && state) {
        // 已认证
        oauth2.removeState()
        // 重定向跳转地址
        const redirect = localStorage.getItem('redirect')
        localStorage.removeItem('redirect')
        // 当前认证的全路径
        const fullPath = window.location.href
        store
          .dispatch('user/oauth2Callback', fullPath)
          .then(() => {
            if (path === redirect) {
              this.$router.push({ path: '/' })
            } else {
              // if is logged in, redirect to the home page
              this.$router.push({ path: redirect || '/' })
            }
            NProgress.done()
          })
          .catch(() => {
            store.dispatch('user/logout').then(() => {
              this.$router.push(toLoginRoute())
            })
          })
      } else {
        const my_redirect = decodeURIComponent(redirect || '/')
        localStorage.setItem('redirect', my_redirect)
        // 未认证
        this.$router.push({ path: '/sso/oauth2' })
      }
    },
    methods: {
      getOtherQuery(query) {
        return Object.keys(query).reduce((acc, cur) => {
          if (cur !== 'redirect') {
            acc[cur] = query[cur]
          }
          return acc
        }, {})
      },
    },
    render: function (h) {
      return h() // avoid warning message
    },
  }
</script>
