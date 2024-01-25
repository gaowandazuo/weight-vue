<template>
  <div class="scrollable-page">
    <vab-home-layout>
      <vab-home-card
        key="1"
        info-tag="360搜索"
        :responsive="{ lg: 16, xl: 16 }"
        title="iframe示例"
        url="http://10.110.60.147/landing/"
        :vertical-grid="4"
      />

      <vab-home-card
        key="2"
        icon="line-chart-line"
        info-tag="日"
        title="访问量"
        :vertical-grid="2"
      >
        <access />
      </vab-home-card>

      <vab-home-card key="3" :vertical-grid="2">
        <authorization />
      </vab-home-card>

      <vab-home-card
        key="4"
        :responsive="{ lg: 16, xl: 16 }"
        :vertical-grid="2"
      >
        <china-map />
      </vab-home-card>

      <vab-home-card key="5" :vertical-grid="2">
        <template #header>
          <div style="text-align: center">排名</div>
        </template>
        <rank />
      </vab-home-card>
    </vab-home-layout>
  </div>
</template>

<script>
  import Access from './components/Access'
  import Authorization from './components/Authorization'
  import Rank from './components/Rank'
  import ChinaMap from './components/ChinaMap'
  export default {
    name: 'Index',
    components: { Access, Authorization, Rank, ChinaMap },
    data() {
      return {}
    },
  }
</script>

<style lang="scss" scoped>
  .scrollable-page {
    max-height: 600px; /* 设置最大高度 */
    overflow-y: auto; /* 启用垂直滚动条 */
  }
</style>
