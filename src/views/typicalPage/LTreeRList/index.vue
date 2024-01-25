<template>
  <div id="tree-table-con" class="g-treetable-page">
    <g-banner :des="'更契合业务场景的列表'" :title="'左树右列表'" />
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
      v-show="pageType == 'list'"
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
    <div v-show="pageType == 'list'" ref="tableCon" class="table-con g-box-2">
      <vab-common-search
        :search-factors.sync="searchFactors"
        @isRowsCollapse="handleRowsCollapse"
      >
        <el-button icon="el-icon-search" type="primary">查询</el-button>
      </vab-common-search>
      <div class="toolbar">
        <div class="pull-left">查询结果共{{ 100 }}条</div>
        <el-dropdown class="pull-right" @command="addType">
          <el-button type="primary">
            新增
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">弹框新增</el-dropdown-item>
            <el-dropdown-item command="b">单页新增</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="clearfix"></div>
      </div>
      <div class="scrollable-page">
        <div style="padding: 0 15px">
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column
              v-if="columnVisible[0]"
              align="center"
              label="序号"
              type="index"
              width="50"
            />
            <el-table-column
              v-if="columnVisible[1]"
              align="center"
              label="指标名称"
            >
              <div slot-scope="scope" class="consumer-name">
                <el-button type="text" @click="handleDetail(scope.row)">
                  {{ scope.row.indicatorName }}
                </el-button>
              </div>
            </el-table-column>
            <el-table-column
              v-if="columnVisible[2]"
              align="center"
              label="指标编码"
              prop="indicatorCode"
            />
            <el-table-column
              v-if="columnVisible[3]"
              align="center"
              label="指标领域"
              prop="catalogName"
            />
            <el-table-column
              v-if="columnVisible[4]"
              align="center"
              label="指标维度"
              prop="indicatorDimension"
            />
            <el-table-column
              v-if="columnVisible[5]"
              align="center"
              label="数据类型"
              prop="indicatorDataType"
            />
            <el-table-column
              v-if="columnVisible[6]"
              align="center"
              label="状态"
            >
              <div slot-scope="scope">
                <div
                  v-if="scope.row.status == 1"
                  class="status-column green"
                  style="width: 82px"
                >
                  <vab-icon icon="checkbox-circle-fill" />
                  <span>已发布</span>
                </div>
                <div
                  v-if="scope.row.status == 0"
                  class="status-column orange"
                  style="width: 82px"
                >
                  <vab-icon icon="arrow-up-circle-fill" />
                  <span>已编制</span>
                </div>
              </div>
            </el-table-column>
            <el-table-column align="center" label="操作" width="140">
              <div slot-scope="{ row }" class="g-operation-column">
                <el-button type="text" @click="handleEdit(row)">修改</el-button>
                <el-button type="text" @click="handleDelete(row)">
                  删除
                </el-button>
                <el-button type="text">更多</el-button>
              </div>
            </el-table-column>
            <el-table-column align="right" fixed="right" width="50">
              <div slot="header" class="g-more-column">
                <el-dropdown :hide-on-click="false" trigger="click">
                  <i class="el-icon-more"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                      <el-checkbox v-model="columnVisible[0]">序号</el-checkbox>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <el-checkbox v-model="columnVisible[1]">
                        指标名称
                      </el-checkbox>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <el-checkbox v-model="columnVisible[2]">
                        指标编码
                      </el-checkbox>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <el-checkbox v-model="columnVisible[3]">
                        指标领域
                      </el-checkbox>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <el-checkbox v-model="columnVisible[4]">
                        指标维度
                      </el-checkbox>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <el-checkbox v-model="columnVisible[5]">
                        数据类型
                      </el-checkbox>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <el-pagination
        v-show="total >= 10"
        background
        class="pull-right"
        :current-page="currentPage"
        :hide-on-single-page="false"
        layout="total, sizes, prev, pager, next, jumper"
        :page-size="pageSize"
        :page-sizes="[5, 10, 25]"
        :pager-count="5"
        style="padding: 0 15px 15px"
        :total="total"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      />
    </div>
    <div class="clearfix"></div>
    <!-- 新增修改对话框 -->
    <el-dialog
      :before-close="handleHandlerClose"
      destroy-on-close
      :title="dialogTitle"
      :visible.sync="handlerDialogVisible"
    >
      <step-form />
    </el-dialog>
    <!-- 详情对话框 -->
    <el-dialog
      :before-close="handleDetailClose"
      title="详情"
      :visible.sync="detailDialogVisible"
      width="40%"
    >
      <template slot="title">
        <div class="g-form-title" style="margin-bottom: 0">指标详情</div>
      </template>
      <row-detail ref="rowDetail" />
    </el-dialog>
    <!-- 单页新增页面 -->
    <div v-show="pageType == 'edit'" class="step-form-container g-box">
      <div class="backBtn" @click="goBack()">
        <i class="el-icon-back"></i>
        返回
      </div>
      <step-form />
    </div>
  </div>
</template>
<script>
  // import { getNormalTableData } from '@/api/normal-table'
  import RightMenu from './components/RightMenu'
  import RowDetail from './components/row-detail'
  import stepForm from './components/stepForm'

  export default {
    components: {
      RowDetail,
      RightMenu,
      stepForm,
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
        // 查询条件数据驱动，用于展开折叠
        searchFactors: [
          {
            label: '指标名称',
            value: '',
            type: 'input',
            // el-input原生属性
            otherAttrOptions: {
              placeholder: '请输入指标名称',
            },
          },

          {
            label: '指标领域（查询名超长测试）',
            value: '',
            type: 'input',
            // el-input原生属性
            otherAttrOptions: {
              placeholder: '请输入指标领域',
            },
          },
          {
            label: '状态',
            value: '1',
            type: 'select',
            selectOption: [
              {
                name: '已发布',
                value: '1',
              },
              {
                name: '已编制',
                value: '0',
              },
            ],
          },
          {
            label: '指标维度',
            value: '',
            type: 'input',
            // el-input原生属性
            otherAttrOptions: {
              placeholder: '请输入指标维度',
            },
          },
          {
            label: '指标编码',
            value: '',
            type: 'input',
            // el-input原生属性
            otherAttrOptions: {
              placeholder: '请输入指标编码',
            },
          },
        ],

        queryMode: true,

        // 【表格】
        columnVisible: [true, true, true, true, true, true, true],
        tableData: [
          {
            externalDataId: '94e96b3f2a424eca9e824b5898a70ebf',
            indicatorName: '松涛水库水位计量指标',
            catalogId: 31,
            catalogName: '水旱灾害防御',
            indicatorCode: 'STSK_W_INDEX',
            indicatorOwner: '张二海',
            indicatorDimension: '时间维度',
            measurementRule: 'sum',
            indicatorDataSource: '省水务局',
            indicatorDescription: '获取时间范围内水库水位',
            indicatorType: '原子指标',
            indicatorDataType: '接口地址',
            indicatorInterface: '52',
            multipleSelection: null,
            indicatorDataBase: '',
            indicatorDataTable: '',
            indicatorSql: '',
            indicatorSqlParamArray: '"[]"',
            createTime: '2023-06-29T14:29:03',
            userName: '演示用户',
            userId: 'YSYH',
            updateTime: '2023-06-29T14:29:03',
            status: 1,
          },
          {
            externalDataId: 'f6fc139ab79b4028978201398a1a4b88',
            indicatorName: '松涛水库实时库容',
            catalogId: 31,
            catalogName: '水旱灾害防御',
            indicatorCode: 'STSK_RZ_INDEX',
            indicatorOwner: '徐强强',
            indicatorDimension: '时间维度',
            measurementRule: '时间区间内累计库容',
            indicatorDataSource: '省水务局水位监测',
            indicatorDescription: '获取当前时间内库容属性',
            indicatorType: '原子指标',
            indicatorDataType: '接口地址',
            indicatorInterface: '49',
            multipleSelection: null,
            indicatorDataBase: '',
            indicatorDataTable: '',
            indicatorSql: '',
            indicatorSqlParamArray: '[]',
            createTime: '2023-06-29T14:25:54',
            userName: '演示用户',
            userId: 'YSYH',
            updateTime: '2023-06-29T14:29:20',
            status: 0,
          },
          {
            externalDataId: '94e96b3f2a424eca9e824b5898a70ebf',
            indicatorName: '松涛水库水位计量指标',
            catalogId: 31,
            catalogName: '水旱灾害防御',
            indicatorCode: 'STSK_W_INDEX',
            indicatorOwner: '张二海',
            indicatorDimension: '时间维度',
            measurementRule: 'sum',
            indicatorDataSource: '省水务局',
            indicatorDescription: '获取时间范围内水库水位',
            indicatorType: '原子指标',
            indicatorDataType: '接口地址',
            indicatorInterface: '52',
            multipleSelection: null,
            indicatorDataBase: '',
            indicatorDataTable: '',
            indicatorSql: '',
            indicatorSqlParamArray: '"[]"',
            createTime: '2023-06-29T14:29:03',
            userName: '演示用户',
            userId: 'YSYH',
            updateTime: '2023-06-29T14:29:03',
            status: 1,
          },
          {
            externalDataId: 'f6fc139ab79b4028978201398a1a4b88',
            indicatorName: '松涛水库实时库容',
            catalogId: 31,
            catalogName: '水旱灾害防御',
            indicatorCode: 'STSK_RZ_INDEX',
            indicatorOwner: '徐强强',
            indicatorDimension: '时间维度',
            measurementRule: '时间区间内累计库容',
            indicatorDataSource: '省水务局水位监测',
            indicatorDescription: '获取当前时间内库容属性',
            indicatorType: '原子指标',
            indicatorDataType: '接口地址',
            indicatorInterface: '49',
            multipleSelection: null,
            indicatorDataBase: '',
            indicatorDataTable: '',
            indicatorSql: '',
            indicatorSqlParamArray: '[]',
            createTime: '2023-06-29T14:25:54',
            userName: '演示用户',
            userId: 'YSYH',
            updateTime: '2023-06-29T14:29:20',
            status: 0,
          },
          {
            externalDataId: '94e96b3f2a424eca9e824b5898a70ebf',
            indicatorName: '松涛水库水位计量指标',
            catalogId: 31,
            catalogName: '水旱灾害防御',
            indicatorCode: 'STSK_W_INDEX',
            indicatorOwner: '张二海',
            indicatorDimension: '时间维度',
            measurementRule: 'sum',
            indicatorDataSource: '省水务局',
            indicatorDescription: '获取时间范围内水库水位',
            indicatorType: '原子指标',
            indicatorDataType: '接口地址',
            indicatorInterface: '52',
            multipleSelection: null,
            indicatorDataBase: '',
            indicatorDataTable: '',
            indicatorSql: '',
            indicatorSqlParamArray: '"[]"',
            createTime: '2023-06-29T14:29:03',
            userName: '演示用户',
            userId: 'YSYH',
            updateTime: '2023-06-29T14:29:03',
            status: 1,
          },
          {
            externalDataId: 'f6fc139ab79b4028978201398a1a4b88',
            indicatorName: '松涛水库实时库容',
            catalogId: 31,
            catalogName: '水旱灾害防御',
            indicatorCode: 'STSK_RZ_INDEX',
            indicatorOwner: '徐强强',
            indicatorDimension: '时间维度',
            measurementRule: '时间区间内累计库容',
            indicatorDataSource: '省水务局水位监测',
            indicatorDescription: '获取当前时间内库容属性',
            indicatorType: '原子指标',
            indicatorDataType: '接口地址',
            indicatorInterface: '49',
            multipleSelection: null,
            indicatorDataBase: '',
            indicatorDataTable: '',
            indicatorSql: '',
            indicatorSqlParamArray: '[]',
            createTime: '2023-06-29T14:25:54',
            userName: '演示用户',
            userId: 'YSYH',
            updateTime: '2023-06-29T14:29:20',
            status: 0,
          },
          {
            externalDataId: '94e96b3f2a424eca9e824b5898a70ebf',
            indicatorName: '松涛水库水位计量指标',
            catalogId: 31,
            catalogName: '水旱灾害防御',
            indicatorCode: 'STSK_W_INDEX',
            indicatorOwner: '张二海',
            indicatorDimension: '时间维度',
            measurementRule: 'sum',
            indicatorDataSource: '省水务局',
            indicatorDescription: '获取时间范围内水库水位',
            indicatorType: '原子指标',
            indicatorDataType: '接口地址',
            indicatorInterface: '52',
            multipleSelection: null,
            indicatorDataBase: '',
            indicatorDataTable: '',
            indicatorSql: '',
            indicatorSqlParamArray: '"[]"',
            createTime: '2023-06-29T14:29:03',
            userName: '演示用户',
            userId: 'YSYH',
            updateTime: '2023-06-29T14:29:03',
            status: 1,
          },
          {
            externalDataId: 'f6fc139ab79b4028978201398a1a4b88',
            indicatorName: '松涛水库实时库容',
            catalogId: 31,
            catalogName: '水旱灾害防御',
            indicatorCode: 'STSK_RZ_INDEX',
            indicatorOwner: '徐强强',
            indicatorDimension: '时间维度',
            measurementRule: '时间区间内累计库容',
            indicatorDataSource: '省水务局水位监测',
            indicatorDescription: '获取当前时间内库容属性',
            indicatorType: '原子指标',
            indicatorDataType: '接口地址',
            indicatorInterface: '49',
            multipleSelection: null,
            indicatorDataBase: '',
            indicatorDataTable: '',
            indicatorSql: '',
            indicatorSqlParamArray: '[]',
            createTime: '2023-06-29T14:25:54',
            userName: '演示用户',
            userId: 'YSYH',
            updateTime: '2023-06-29T14:29:20',
            status: 0,
          },
          {
            externalDataId: '94e96b3f2a424eca9e824b5898a70ebf',
            indicatorName: '松涛水库水位计量指标',
            catalogId: 31,
            catalogName: '水旱灾害防御',
            indicatorCode: 'STSK_W_INDEX',
            indicatorOwner: '张二海',
            indicatorDimension: '时间维度',
            measurementRule: 'sum',
            indicatorDataSource: '省水务局',
            indicatorDescription: '获取时间范围内水库水位',
            indicatorType: '原子指标',
            indicatorDataType: '接口地址',
            indicatorInterface: '52',
            multipleSelection: null,
            indicatorDataBase: '',
            indicatorDataTable: '',
            indicatorSql: '',
            indicatorSqlParamArray: '"[]"',
            createTime: '2023-06-29T14:29:03',
            userName: '演示用户',
            userId: 'YSYH',
            updateTime: '2023-06-29T14:29:03',
            status: 1,
          },
          {
            externalDataId: 'f6fc139ab79b4028978201398a1a4b88',
            indicatorName: '松涛水库实时库容',
            catalogId: 31,
            catalogName: '水旱灾害防御',
            indicatorCode: 'STSK_RZ_INDEX',
            indicatorOwner: '徐强强',
            indicatorDimension: '时间维度',
            measurementRule: '时间区间内累计库容',
            indicatorDataSource: '省水务局水位监测',
            indicatorDescription: '获取当前时间内库容属性',
            indicatorType: '原子指标',
            indicatorDataType: '接口地址',
            indicatorInterface: '49',
            multipleSelection: null,
            indicatorDataBase: '',
            indicatorDataTable: '',
            indicatorSql: '',
            indicatorSqlParamArray: '[]',
            createTime: '2023-06-29T14:25:54',
            userName: '演示用户',
            userId: 'YSYH',
            updateTime: '2023-06-29T14:29:20',
            status: 0,
          },
        ],
        currentPage: 1,
        pageSize: 10,
        total: 100,

        // 【对话框】
        handlerDialogVisible: false,
        dialogTitle: '新增',

        // 【对话框】
        detailDialogVisible: false,
      }
    },
    created() {
      this.loadNormalTableData()
    },
    methods: {
      // 【tree】
      handleNodeClick(value) {
        this.loadNormalTableData()
      },
      showRightMenu(event, object, node, element) {
        this.treeNode = object
        this.$refs.rm.handleShow(event)
      },
      loadNormalTableData() {
        this.$nextTick(() => {
          this.tableHeight = this.$refs.tableCon.offsetHeight + 'px'
        })
        // getNormalTableData()
        //   .then((result) => {
        //     this.tableData = result.data.list
        //     this.$nextTick(() => {
        //       this.tableHeight = this.$refs.tableCon.offsetHeight + 'px'
        //     })
        //   })
        //   .catch(() => {
        //     this.tableHeight = 'auto'
        //   })
      },

      handleRowsCollapse() {
        this.$nextTick(() => {
          this.tableHeight = this.$refs.tableCon.offsetHeight + 'px'
        })
      },
      handleSizeChange() {},
      handleCurrentChange() {},
      // 点击新增按钮
      handleNew() {
        this.handlerDialogVisible = true
        this.dialogTitle = '新增'
        // this.$nextTick(() => {
        //   this.$refs.rowHandler.init('add')
        // })
      },
      // 点击名称查看详情
      handleDetail(row) {
        this.detailDialogVisible = true
        this.$nextTick(() => {
          this.$refs.rowDetail.load(row)
        })
      },
      // 删除
      handleDelete({ consumerId }) {
        this.$confirm('即将删除一条数据', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        })
          .then(() => {
            this.$message.success('删除成功')
          })
          .catch(() => {})
      },
      // 点击修改按钮
      handleEdit(row) {
        this.handlerDialogVisible = true
        this.dialogTitle = '修改'
        // this.$nextTick(() => {
        //   this.$refs.rowHandler.init('edit', row)
        // })
      },
      // 关闭对话框
      handleHandlerClose() {
        this.handlerDialogVisible = false
      },
      // 对话框内提交成功
      load() {
        this.loadNormalTableData()
        this.handleHandlerClose()
      },
      // 关闭详情对话框
      handleDetailClose() {
        this.detailDialogVisible = false
      },
      addType(type) {
        switch (type) {
          case 'a':
            this.handleNew()
            break
          case 'b':
            this.pageType = 'edit'
            break
        }
      },
      goBack() {
        this.pageType = 'list'
      },
    },
  }
</script>

<style lang="scss" scoped>
  .backBtn {
    cursor: pointer;
  }
  ::v-deep .el-tree-node__content {
    height: 35px;
  }
  .toolbar {
    padding: 0 15px;
    .pull-left {
      line-height: 32px;
    }
    margin-bottom: 10px;
  }
  .scrollable-page {
    max-height: 100vh; /* 设置最大高度为视窗高度 */
    overflow-y: auto; /* 启用垂直滚动条 */
  }
</style>
