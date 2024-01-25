<template>
  <vab-markdown-viewer :src="`${publicPath}/doc/ConfigCenter.md`" />
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
