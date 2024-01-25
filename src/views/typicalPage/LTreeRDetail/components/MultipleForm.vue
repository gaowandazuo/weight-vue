<template>
  <div>
    <div class="scrollable-page">
      <div class="g-form-block">
        <div class="g-form-title">基本信息</div>
        <el-descriptions :column="2" size="medium">
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
      <div class="g-form-block">
        <div class="g-form-title">数据源信息</div>
        <el-descriptions :column="2" size="medium">
          <el-descriptions-item label="数据源名称">
            水利对象基础库
          </el-descriptions-item>
          <el-descriptions-item label="数据源编码">
            slattbase
          </el-descriptions-item>
          <el-descriptions-item label="数据源类型">
            基础数据库
          </el-descriptions-item>
          <el-descriptions-item label="数据库类型">
            <el-tag size="small">mysql</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="实例名">
            bz_basicdata
          </el-descriptions-item>
          <el-descriptions-item label="IP地址">
            10.110.60.46
          </el-descriptions-item>
          <el-descriptions-item label="是否连通">
            <span>已连通</span>
            <el-button icon="el-icon-refresh-right" size="mini">
              重新测试是否已联通
            </el-button>
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <div class="g-form-block">
        <div class="g-form-title">数据基本信息</div>
        <el-descriptions :column="2" size="medium">
          <el-descriptions-item label="最新数据总量">80条</el-descriptions-item>
          <el-descriptions-item label="前一次更新日期">
            2023.07.10 19:24:30
          </el-descriptions-item>
          <el-descriptions-item label="前一次更新数量">
            10条
          </el-descriptions-item>
          <el-descriptions-item label="最后更新日期">
            2023.07.10 19:24:30
          </el-descriptions-item>
          <el-descriptions-item label="最后更新数量">10条</el-descriptions-item>
        </el-descriptions>
      </div>
      <div class="g-form-block">
        <div class="g-form-title">基本信息</div>
        <el-descriptions :column="2" size="medium">
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
    </div>
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
  .scrollable-page {
    max-height: 100vh; /* 设置最大高度为视窗高度 */
    overflow-y: auto; /* 启用垂直滚动条 */
  }
</style>
