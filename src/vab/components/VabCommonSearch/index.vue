<template>
  <div>
    <el-form
      class="g-search-header"
      label-position="right"
      label-width="80px"
      style="padding-bottom: 0"
    >
      <template v-for="(item, i) in searchFactors">
        <SearchItem
          v-show="i <= 2 || isRowsCollapse"
          :key="i"
          :label="item.label"
          :other-attr-options="item.otherAttrOptions || {}"
          :select-option="item.selectOption || []"
          :type="item.type"
          :value.sync="item.value"
        />
      </template>

      <div
        class="operate"
        :style="{ 'margin-left': isRowsCollapse ? '90px' : '10px' }"
      >
        <slot></slot>
      </div>

      <span
        v-show="searchFactors.length > 2"
        class="collapse-button"
        @click="handleCollapse"
      >
        <vab-icon
          :icon="isRowsCollapse ? 'arrow-up-s-line' : 'arrow-down-s-line'"
        />

        {{ isRowsCollapse ? '收起' : '展开' }}
      </span>
    </el-form>
  </div>
</template>

<script>
  import SearchItem from './components/SearchItem.vue'
  export default {
    name: 'VabCommonSearch',
    components: {
      SearchItem,
    },
    props: {
      // 浅拷贝，响应变化
      searchFactors: {
        type: Array,
        default: () => {
          return []
        },
      },
    },
    data() {
      return {
        isRowsCollapse: false,
      }
    },
    computed: {},
    created() {},
    methods: {
      // 筛选条件超出一行折叠
      handleCollapse() {
        this.isRowsCollapse = !this.isRowsCollapse
        this.$emit('isRowsCollapse', this.isRowsCollapse)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .collapse-button {
    height: 20px;
    margin: 8px 0 0 10px;
    color: #333333;
    cursor: pointer;
    &:hover {
      color: #3163f6;
    }
  }
  .operate {
    margin-left: 10px;
    :deep() {
      .el-button {
        height: 30px;
        padding: 8px 15px;
        margin-top: 1px;
      }
    }
  }
</style>
