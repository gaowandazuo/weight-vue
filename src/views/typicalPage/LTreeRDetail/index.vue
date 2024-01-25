<template>
  <div id="tree-table-con" class="g-treetable-page">
    <g-banner :des="'两种详情页'" :title="'左数右详情'" />
    <!-- 右键菜单组件 -->
    <right-menu ref="rm" :menu-visible="menuVisible">
      <li class="menu-item">
        <i class="el-icon-plus" type="primary"></i>
        新增同级节点
      </li>
      <li class="menu-item">
        <i class="el-icon-caret-bottom" type="primary"></i>
        新增下级节点
      </li>
      <li class="menu-item">
        <i class="el-icon-caret-bottom" type="primary"></i>
        编辑标题
      </li>
      <li class="menu-item">
        <i class="el-icon-delete-solid" type="danger"></i>
        删除节点
      </li>
    </right-menu>
    <div
      class="tree-con g-box"
      :style="'height:' + tableHeight + ';overflow: scroll'"
    >
      <el-tree
        id="guide-1"
        :data="treeData"
        @node-click="handleNodeClick"
        @node-contextmenu="showRightMenu"
      >
        <span slot-scope="{ node }">
          <i class="el-icon-folder-opened" style="margin-right: 5px"></i>
          <span>{{ node.label }}</span>
        </span>
      </el-tree>
    </div>
    <div ref="tableCon" class="table-con g-box-2">
      <el-tabs type="border-card" @tab-click="handleTabClick">
        <el-tab-pane label="普通描述信息">
          <normal-form />
        </el-tab-pane>
        <el-tab-pane label="分节描述信息">
          <multiple-form />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="clearfix"></div>
    <!-- 新增修改对话框 -->
  </div>
</template>
<script>
  // import { getNormalTableData } from '@/api/normal-table'
  import RightMenu from './components/RightMenu'
  import MultipleForm from './components/MultipleForm.vue'
  import NormalForm from './components/NormalForm.vue'

  export default {
    components: {
      RightMenu,
      MultipleForm,
      NormalForm,
    },
    data() {
      return {
        // 【页面类型】
        pageType: 'list',
        // 【右键菜单】
        menuVisible: false,

        // 表格自适应高度
        tableHeight: 'auto',
        // 【tree】
        treeNode: {},
        treeData: [
          {
            label: '水旱灾害防御(1)',
            children: [
              { label: '雨情(1)' },
              { label: '河道/潮汐水情(0)' },
              { label: '水库/湖泊水情(0)' },
              { label: '地下水水情(0)' },
              { label: '工情(0)' },
              { label: '旱情(0)' },
              { label: '气象信息(0)' },
            ],
          },
          {
            label: '水资源管理与调配(0)',
            children: [
              { label: '水源(0)' },
              { label: '供水(0)' },
              { label: '用水(0)' },
              { label: '业务管理(0)' },
            ],
          },
          { label: '测试(0)' },
          { label: '指标(0)' },
        ],
      }
    },
    created() {
      this.loadNormalFormData()
    },
    methods: {
      // 【tree】
      handleNodeClick(value) {
        this.loadNormalFormData()
      },
      showRightMenu(event, object, node, element) {
        this.treeNode = object
        this.$refs.rm.handleShow(event)
      },
      loadNormalFormData() {
        this.$nextTick(() => {
          this.tableHeight = this.$refs.tableCon.offsetHeight + 'px'
        })
      },
      handleTabClick() {
        this.$nextTick(() => {
          this.tableHeight = this.$refs.tableCon.offsetHeight + 'px'
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
  ::v-deep .el-tree-node__content {
    height: 35px;
  }
  ::v-deep .el-tabs {
    min-height: 50vh;
  }
</style>
