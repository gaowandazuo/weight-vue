<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app" class="main">
    <div class="widget-header">
      <div class="name">
        <span :class="{ active: showIframe === 0 }" @click="changeIframe(0)">
          资金管理
        </span>
      </div>
    </div>
    <div class="widget-main">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column align="center" label="序号" type="index" width="60" />
        <el-table-column align="center" label="政区" prop="region" />
        <el-table-column align="center" label="合同总额（万）" prop="amount" />
        <el-table-column
          align="center"
          label="已拨付（万）"
          prop="appropriated"
        />
        <el-table-column align="center" label="拨付进度">
          <template slot-scope="scope">
            <el-progress
              class="progressStyle"
              color="#00CDA2"
              :percentage="scope.row.progress"
              :show-text="false"
            />
            <span>{{ scope.row.progress }}%</span>
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
        tableData: [
          {
            region: '海口市',
            amount: '46万',
            appropriated: '21万',
            progress: '48',
          },
          {
            region: '东方市',
            amount: '32万',
            appropriated: '20万',
            progress: '62',
          },
          {
            region: '琼海市',
            amount: '36万',
            appropriated: '24万',
            progress: '66',
          },
          {
            region: '琼海市',
            amount: '23万',
            appropriated: '19万',
            progress: '82',
          },
          {
            region: '屯昌县',
            amount: '14万',
            appropriated: '12万',
            progress: '85',
          },
        ],
      }
    },
    methods: {
      changeIframe(index) {
        this.showIframe = index
      },
    },
  }
</script>

<style scoped>
  .progressStyle {
    display: inline-block;
    width: 60%;
    padding-right: 4px;
    vertical-align: middle;
  }
  .widget-main {
    padding: 10px;
  }
</style>
