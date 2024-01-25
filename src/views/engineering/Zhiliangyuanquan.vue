<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app" class="mian">
    <div class="widget-header">
      <div class="name">
        <span :class="{ active: showIframe == 0 }" @click="changeIframe(0)">
          质量与安全
        </span>
      </div>
    </div>
    <div class="widget-main">
      <el-table ref="mytable" :data="tableData" stripe>
        <el-table-column align="center" label="序号" type="index" width="60" />
        <el-table-column align="center" label="项目名称" prop="projectName" />
        <el-table-column align="center" label="项目编号" prop="projectNumber" />
        <el-table-column
          align="center"
          label="标段名称"
          prop="bidSectionName"
        />
        <el-table-column align="center" label="缺陷名称" prop="defectName" />
        <el-table-column
          align="center"
          label="缺陷描述"
          prop="defectDescription"
        />
        <el-table-column
          align="center"
          label="缺陷位置"
          prop="defectLocation"
        />
        <el-table-column align="center" label="处理情况">
          <template slot-scope="scope">
            <span :style="`color:${scope.row.treatment ? 'red' : 'green'}`">
              {{ scope.row.treatment ? '已处理' : '未处理' }}
            </span>
          </template>
        </el-table-column>
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
            projectName: '松涛水库改建',
            projectNumber: '20211012',
            bidSectionName: '三标段',
            defectName: '测试',
            defectDescription: '缺陷描述缺陷描述',
            defectLocation: '位置',
            treatment: true,
          },
          {
            projectName: '松涛水库改建',
            projectNumber: '20211012',
            bidSectionName: '三标段',
            defectName: '测试',
            defectDescription: '缺陷描述缺陷描述',
            defectLocation: '位置',
            treatment: true,
          },
          {
            projectName: '松涛水库改建',
            projectNumber: '20211012',
            bidSectionName: '二标段',
            defectName: '测试',
            defectDescription: '缺陷描述缺陷描述',
            defectLocation: '位置',
            treatment: true,
          },
          {
            projectName: '松涛水库改建',
            projectNumber: '20211012',
            bidSectionName: '二标段',
            defectName: '测试',
            defectDescription: '缺陷描述缺陷描述',
            defectLocation: '位置',
            treatment: false,
          },
          {
            projectName: '松涛水库改建',
            projectNumber: '20211012',
            bidSectionName: '一标段',
            defectName: '测试',
            defectDescription: '缺陷描述缺陷描述',
            defectLocation: '位置',
            treatment: true,
          },
          {
            projectName: '松涛水库改建',
            projectNumber: '20211012',
            bidSectionName: '二标段',
            defectName: '测试',
            defectDescription: '缺陷描述缺陷描述',
            defectLocation: '位置',
            treatment: true,
          },
          {
            projectName: '松涛水库改建',
            projectNumber: '20211012',
            bidSectionName: '二标段',
            defectName: '测试',
            defectDescription: '缺陷描述缺陷描述',
            defectLocation: '位置',
            treatment: true,
          },
          {
            projectName: '松涛水库改建',
            projectNumber: '20211012',
            bidSectionName: '一标段',
            defectName: '测试',
            defectDescription: '缺陷描述缺陷描述',
            defectLocation: '位置',
            treatment: true,
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

<style scoped>
  .widget-main {
    padding: 10px;
  }
</style>
