<template>
  <div id="row-detail">
    <table border="1" class="g-form-detail-item">
      <tr>
        <td>指标名称</td>
        <td>{{ row.indicatorName }}</td>
      </tr>
      <tr>
        <td>指标编码</td>
        <td>{{ row.indicatorCode }}</td>
      </tr>
      <tr>
        <td>指标领域</td>
        <td>{{ row.catalogName }}</td>
      </tr>
      <tr>
        <td>指标维度</td>
        <td>{{ row.indicatorDimension }}</td>
      </tr>
      <tr>
        <td>数据类型</td>
        <td>{{ row.indicatorDataType }}</td>
      </tr>
      <tr>
        <td>状态</td>
        <td>{{ row.status | statusFormatter }}</td>
      </tr>
      <tr>
        <td>是否启用</td>
        <td>{{ row.isEnable | isEnableFormatter }}</td>
      </tr>
    </table>
    <div class="clearfix"></div>
  </div>
</template>
<script>
  export default {
    filters: {
      statusFormatter(value) {
        return ['草稿', '已发布'][value]
      },
      isEnableFormatter(value) {
        return value ? '启用' : '禁用'
      },
    },
    data() {
      return {
        row: {},
      }
    },
    methods: {
      load(row) {
        this.row = row
      },
    },
  }
</script>
<style lang="scss">
  #row-detail {
    padding: 20px;
    table.g-form-detail-item td:nth-child(2n + 1) {
      width: 140px;
    }
  }
</style>
