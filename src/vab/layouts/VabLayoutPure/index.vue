<template>
  <!-- 纯净布局 -->
  <div class="vab-layout-pure">
    <vab-tabs v-show="false" />
    <vab-app-main />
  </div>
</template>

<script>
  export default {
    name: 'VabLayoutPure',
  }
</script>

<style lang="scss" scoped>
  .vab-layout-pure {
    padding: 20px;
  }
</style>
