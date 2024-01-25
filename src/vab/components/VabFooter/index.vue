<template>
  <footer
    v-show="theme.showFooter && theme.layout != 'pure'"
    class="vab-footer"
  >
    Copyright
    <vab-icon icon="copyright-line" />
    {{ fullYear }} {{ title }}
  </footer>
</template>

<script>
  import { title } from '@/config'
  import { mapGetters } from 'vuex'
  export default {
    name: 'VabFooter',
    data() {
      return {
        fullYear: new Date().getFullYear(),
        title,
      }
    },
    computed: {
      ...mapGetters({
        theme: 'settings/theme',
      }),
    },
  }
</script>

<style lang="scss" scoped>
  .vab-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 55px;
    padding: 0 20px 0 20px;
    color: rgba(0, 0, 0, 0.45);
    background: #fff;
    border-top: 1px dashed #dcdfe6;

    i {
      margin: 0 5px;
    }
  }
</style>
