<template>
  <el-form-item class="item" :label="label" :title="label">
    <template v-if="type == 'input'">
      <el-input
        v-model="search[type]"
        class="g-search-input"
        v-bind="otherAttrOptions"
      />
    </template>
    <template v-if="type == 'select'">
      <el-select v-model="search[type]" v-bind="otherAttrOptions">
        <el-option
          v-for="item in selectOption"
          :key="item.value"
          :label="item.name"
          :value="item.value"
        />
      </el-select>
    </template>
  </el-form-item>
</template>

<script>
  export default {
    name: 'SearchItem',
    props: {
      type: { type: String, default: 'input' },
      label: { type: String, default: '查询名称' },
      value: { type: String, default: '值' },
      selectOption: {
        type: Array,
        default: () => {
          return []
        },
      },
      otherAttrOptions: {
        type: Object,
        default: () => {
          return {}
        },
      },
    },
    data() {
      return {
        search: {
          input: null,
          select: null,
        },
      }
    },
    computed: {},
    watch: {
      search: {
        handler(newValue) {
          this.$emit('update:value', newValue[this.type])
        },
        deep: true,
        immediate: true,
      },
    },
    created() {
      //todo value更改数据类型的情况，如el-select value为[]时
      this.search[this.type] = this.value
    },
  }
</script>

<style lang="scss" scoped>
  .item {
    margin-left: 10px;
  }
  :deep() {
    .el-form-item__label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>
