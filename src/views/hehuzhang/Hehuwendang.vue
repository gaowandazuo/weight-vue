<!-- elint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="widget-header">
      <div class="name">
        <span :class="{ active: showIframe == 0 }" @click="changeIframe(0)">
          河湖文档库微件
        </span>
      </div>
    </div>
    <el-main>
      <div class="bar">
        <div class="bar-left">
          <span>河湖名称</span>
          <el-input v-model="HHNameValue" placeholder="请输入河湖名称" />
          <span>行政区</span>
          <el-select v-model="XZQValue" placeholder="请选择">
            <el-option
              v-for="(item, index) in ['三更罗镇']"
              :key="index"
              :label="item"
              :value="item"
            />
          </el-select>
          <span>问题类型</span>
          <el-select v-model="QTypeValue" placeholder="请选择">
            <el-option
              v-for="(item, index) in ['乱占']"
              :key="index"
              :label="item"
              :value="item"
            />
          </el-select>
          <span>问题状态</span>
          <el-select v-model="QStateValue" placeholder="请选择问题状态">
            <el-option
              v-for="(item, index) in ['未处理']"
              :key="index"
              :label="item"
              :value="item"
            />
          </el-select>
          <span>数据来源</span>
          <el-select v-model="DataSourceValue" placeholder="请选择数据来源">
            <el-option
              v-for="(item, index) in ['公众号']"
              :key="index"
              :label="item"
              :value="item"
            />
          </el-select>
          <el-button icon="el-icon-search" type="primary">搜索</el-button>
          <el-button icon="el-icon-search" type="primary">重置</el-button>
          <el-button icon="el-icon-search" type="primary" />
          新增
        </div>
      </div>
      <div class="table-box" style="padding-top: 15px">
        <el-table
          border
          :data="tableData"
          height="100%"
          stripe
          style="width: 100%"
        >
          <el-table-column
            align="center"
            label="序号"
            type="index"
            width="70"
          />
          <el-table-column align="center" label="河湖名称" prop="hhmc" />
          <el-table-column align="center" label="行政区" prop="xzq" />
          <el-table-column align="center" label="四乱分类" prop="slfl" />
          <el-table-column
            align="center"
            label="四乱类别"
            prop="sllb"
            show-overflow-tooltip
          />
          <el-table-column
            align="center"
            label="问题描述"
            prop="wtms"
            show-overflow-tooltip
          />
          <el-table-column
            align="center"
            label="问题上报时间"
            prop="sbsj"
            show-overflow-tooltip
          />
          <el-table-column align="center" label="状态" width="80">
            <template slot-scope="{ row }">
              <span style="color: red">{{ row.zt }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-main>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showIframe: 0,
        showTab: 0,
        HHNameValue: '',
        XZQValue: '',
        QTypeValue: '',
        QStateValue: '',
        DataSourceValue: '',

        tableData: [
          {
            hhmc: '万泉河三更罗镇段',
            xzq: '三更罗镇',
            slfl: '乱占',
            sllb: '围垦湖泊',
            wtms: '卫星图显示该塘于2018年修建完成，需核实是否批复允许项目',
            sbsj: '2021-12-13',
            zt: '未处理',
          },
          {
            hhmc: '万泉河三更罗镇段',
            xzq: '三更罗镇',
            slfl: '乱占',
            sllb: '围垦湖泊',
            wtms: '卫星图显示该塘于2016年修建完成，需核实是否批复允许项目',
            sbsj: '2021-12-13',
            zt: '未处理',
          },
          {
            hhmc: '万泉河三更罗镇段',
            xzq: '三更罗镇',
            slfl: '乱占',
            sllb: '围垦湖泊',
            wtms: '卫星图显示该塘于2018年修建完成，需核实是否批复允许项目',
            sbsj: '2021-12-13',
            zt: '未处理',
          },
          {
            hhmc: '龙尾河北大镇段',
            xzq: '北大镇',
            slfl: '乱建',
            sllb: '涉修建阻碍行洪的建筑物、构筑物',
            wtms: '河道管理范围内新建民房',
            sbsj: '2021-10-27',
            zt: '未处理',
          },
          {
            hhmc: '龙尾河万宁市段',
            xzq: '万宁市',
            slfl: '乱建',
            sllb: '涉河违法违规建设项目',
            wtms: '河道管理范围内建棚，为溪谷客栈',
            sbsj: '2021-08-20',
            zt: '未处理',
          },
          {
            hhmc: '龙尾河万宁市段',
            xzq: '万宁市',
            slfl: '乱建',
            sllb: '涉河违法违规建设项目',
            wtms: '河道管理范围内建棚，疑似为畜禽养殖棚',
            sbsj: '2021-08-20',
            zt: '未处理',
          },
        ],
      }
    },
    created() {},
    mounted() {},
    methods: {
      changeIframe(val) {
        this.showIframe = val
        switch (val) {
          case 0:
            break
        }
      },
      changeTab(val) {
        this.showTab = val
        switch (val) {
          case 0:
            break
        }
      },
    },
  }
</script>
<style type="text/css" scoped>
  .bar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 20px;
  }

  .bar-left {
    display: flex;
    align-items: center;
  }

  .bar-left span {
    width: 70px;
    margin-left: 25px;
    font-weight: bold;
  }

  .bar-left .el-select {
    width: 150px;
  }

  .bar-left .el-input {
    width: 150px;
  }

  .bar-left .el-button {
    padding: 8px 10px;
    margin-left: 25px;
    border-radius: 2px;
  }

  html {
    overflow: hidden;
  }
  body {
    margin: 0;
    background: #f0efed;
  }

  ::-webkit-scrollbar {
    width: 8px;
    /* 纵向滚动条宽度 */
    height: 6px;
    /*横向滚动条宽度*/
  }
  ::-webkit-scrollbar-thumb {
    background-color: #b8cbe2;
    border-radius: 8px;
    /* 滚动条圆角 */
  }

  /**表格**/
  .table-box {
    position: relative;
    width: 100%;
    padding: 10px;
  }
  .table-box table {
    width: calc(100% - 20px);
  }
  .table-box .scoll-div table {
    width: 100%;
  }
  .table-box table tr {
    height: 46px;
    line-height: 46px;
  }
  .table-box table tr .no_warp {
    display: block;
    margin: 0 auto;
  }
  .table-box table thead {
    font-size: 16px;
    color: #333;
    background: #f2f7fd;
  }
  .table-box table tr td {
    text-align: center;
  }
  .table-box table tr {
    transition: all 0.1s;
  }
  .table-box table tr:hover {
    background-color: rgba(244, 249, 255, 1);
  }
  .table-box table tbody tr {
    line-height: 20px;
    border-bottom: 1px solid #eaeaea;
  }
</style>
