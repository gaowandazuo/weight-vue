<template>
  <div>
    <vue-markdown
      ref="vueMarkdown"
      class="markdown-body md"
      :source="source"
      toc
      :toc-first-level="1"
      toc-id="mdTocContainer"
    />
    <div id="mdTocContainer" class="md-toc"></div>
  </div>
</template>
<script>
  import VueMarkdown from 'vue-markdown'
  import axios from 'axios'
  import hljs from 'highlight.js'

  export default {
    name: 'VabMarkdownViewer',
    components: {
      VueMarkdown,
    },
    props: {
      src: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        source: '',
      }
    },
    watch: {
      '$route.hash': {
        handler(hash) {
          let element = document.getElementById('app')

          console.log(element)
          setTimeout(() => {
            element.scrollTop -= 120
          }, 100)
        },
      },
    },
    async mounted() {
      await this.getMd()
      this.$nextTick(() => {
        const blocks = document.querySelectorAll('pre code:not(.hljs)')
        Array.prototype.forEach.call(blocks, hljs.highlightBlock)
      })
    },
    methods: {
      async getMd() {
        await axios
          .get(this.src)
          .then((response) => {
            this.source = response.data
          })
          .catch((error) => {
            console.error(error)
          })
      },
    },
  }
</script>
<style lang="scss" scoped>
  .md {
    padding: 50px;
    :deep() {
      pre {
        background-color: rgb(34, 34, 34);
      }
    }
  }
  .md-toc {
    position: fixed;
    top: 150px;
    right: 45px;
    z-index: 999;
    max-width: 400px;
    padding-right: 30px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);
  }
</style>
