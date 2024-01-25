<template>
  <vab-markdown-viewer :src="`${publicPath}/doc/Menu.md`" />
</template>
<script>
  import { publicPath } from '@/config'
  export default {
    data() {
      return {
        publicPath,
      }
    },
  }
</script>
