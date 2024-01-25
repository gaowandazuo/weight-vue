<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app" class="main">
    <div class="widget-header">
      <div class="name">
        <span :class="{ active: showIframe === 0 }" @click="changeIframe(0)">
          设备运行
        </span>
      </div>
    </div>
    <div class="widget-main">
      <el-table
        :data="tableData"
        :span-method="objectSpanMethod"
        stripe
        style="width: 100%"
      >
        <el-table-column align="center" label="序号" type="index" width="60" />
        <el-table-column align="center" label="水库" prop="reservoir" />
        <el-table-column align="center" label="类型" prop="type" />
        <el-table-column align="center" label="政区" prop="region" />
        <el-table-column align="center" label="设备类型" prop="equipmentType" />
        <el-table-column align="center" label="总数" prop="total" />
        <el-table-column align="center" label="正常数" prop="normalNumber" />
        <el-table-column align="center" label="异常数" prop="differentConstant">
          <template slot-scope="scope">
            <span class="different_constant">
              {{ scope.row.differentConstant }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="正常率"
          prop="normalRate"
          width="60"
        />
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showIframe: 0,
        showTab: 0,
        tableData: [
          {
            index: 1,
            reservoir: '松涛水库',
            type: '大型',
            region: '儋州市',
            equipmentType: '雨量站',
            total: 8,
            normalNumber: 6,
            differentConstant: 2,
            normalRate: '32%',
          },
          {
            index: 2,
            reservoir: '松涛水库',
            type: '大型',
            region: '儋州市',
            equipmentType: '水位站',
            total: 10,
            normalNumber: 8,
            differentConstant: 2,
            normalRate: '25%',
          },
          {
            index: 3,
            reservoir: '松涛水库',
            type: '大型',
            region: '儋州市',
            equipmentType: '流量站',
            total: 12,
            normalNumber: 9,
            differentConstant: 3,
            normalRate: '30%',
          },
          {
            index: 4,
            reservoir: '松涛水库',
            type: '大型',
            region: '儋州市',
            equipmentType: '摄像头',
            total: 12,
            normalNumber: 10,
            differentConstant: 1,
            normalRate: '10%',
          },
          {
            index: 1,
            reservoir: '红岭水库',
            type: '大型',
            region: '琼中市',
            equipmentType: '雨量站',
            total: 11,
            normalNumber: 10,
            differentConstant: 1,
            normalRate: '10%',
          },
          {
            index: 5,
            reservoir: '红岭水库',
            type: '大型',
            region: '琼中市',
            equipmentType: '水位站',
            total: 10,
            normalNumber: 9,
            differentConstant: 3,
            normalRate: '30%',
          },
          {
            index: 6,
            reservoir: '红岭水库',
            type: '大型',
            region: '琼中市',
            equipmentType: '流量站',
            total: 12,
            normalNumber: 10,
            differentConstant: 2,
            normalRate: '20%',
          },
          {
            index: 7,
            reservoir: '红岭水库',
            type: '大型',
            region: '琼中市',
            equipmentType: '摄像头',
            total: 12,
            normalNumber: 10,
            differentConstant: 1,
            normalRate: '10%',
          },
          {
            index: 8,
            reservoir: '大隆水库',
            type: '大型',
            region: '三亚市',
            equipmentType: '雨量站',
            total: 11,
            normalNumber: 10,
            differentConstant: 1,
            normalRate: '10%',
          },
          {
            index: 9,
            reservoir: '大隆水库',
            type: '大型',
            region: '三亚市',
            equipmentType: '水位站',
            total: 10,
            normalNumber: 9,
            differentConstant: 3,
            normalRate: '30%',
          },
          {
            index: 10,
            reservoir: '大隆水库',
            type: '大型',
            region: '三亚市',
            equipmentType: '流量站',
            total: 12,
            normalNumber: 10,
            differentConstant: 2,
            normalRate: '20%',
          },
          {
            index: 11,
            reservoir: '大隆水库',
            type: '大型',
            region: '三亚市',
            equipmentType: '摄像头',
            total: 12,
            normalNumber: 10,
            differentConstant: 1,
            normalRate: '10%',
          },
        ],
        checkList: ['选中且禁用', '复选框 A'],
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
      objectSpanMethod({ rowIndex, columnIndex }) {
        if (
          columnIndex === 0 ||
          columnIndex === 1 ||
          columnIndex === 2 ||
          columnIndex === 3
        ) {
          if (rowIndex % 4 === 0) {
            return {
              rowspan: 4,
              colspan: 1,
            }
          } else {
            return {
              rowspan: 0,
              colspan: 0,
            }
          }
        }
      },
    },
  }
</script>

<style scoped>
  .widget-main {
    padding: 10px;
  }
  .widget-header .tools {
    float: right;
    width: auto;
    margin-top: 20px;
  }
  .check_text,
  .el-checkbox-group {
    float: left;
    margin-right: 20px;
  }
  .different_constant {
    color: red;
  }
</style>
