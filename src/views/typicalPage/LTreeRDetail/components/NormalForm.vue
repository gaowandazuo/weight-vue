<template>
  <div class="g-normal-descriptions">
    <el-descriptions :column="1" size="medium">
      <el-descriptions-item label="资源名称">
        流域基础信息表
      </el-descriptions-item>
      <el-descriptions-item label="资源分类">基础对象</el-descriptions-item>
      <el-descriptions-item label="所属目录">
        基础数据/江河湖泊/流域
      </el-descriptions-item>
      <el-descriptions-item label="注册人">
        <el-tag size="small">YSYH</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="变更时间">
        2023-07-03 18:41:01
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {}
    },
    methods: {},
  }
</script>
<style lang="scss" scoped>
  :deep() {
    .el-descriptions__body .el-descriptions__table .el-descriptions-item__cell {
      line-height: 2.5;
    }
  }
</style>
