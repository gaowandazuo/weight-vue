<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app" class="main">
    <div class="widget-header">
      <div class="name">
        <span :class="{ active: showIframe === 0 }" @click="changeIframe(0)">
          工程进度
        </span>
      </div>
    </div>
    <div class="widget-main">
      <div class="half-box">
        <el-table ref="mytable" :data="tableData" stripe>
          <el-table-column
            align="center"
            label="序号"
            type="index"
            width="60"
          />
          <el-table-column align="center" label="政区" prop="region" />
          <el-table-column align="center" label="在建项目" prop="projects" />
          <el-table-column align="center" label="进度正常">
            <el-table-column
              align="center"
              label="数量"
              prop="normalQuantity"
            />
            <el-table-column
              align="center"
              label="占比"
              prop="normalProportion"
            />
          </el-table-column>
          <el-table-column align="center" label="进度异常">
            <el-table-column
              align="center"
              label="数量"
              prop="abnormalQuantity"
            />
            <el-table-column
              align="center"
              label="占比"
              prop="abnormalProportion"
            />
          </el-table-column>
        </el-table>
      </div>
      <div class="half-box">
        <div id="myChart" class="chart-box"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showIframe: 0,
        showTab: 0,
        centerPoint: ['50%', '50%'],
        tableData: [
          {
            region: '海口市',
            projects: '大型',
            normalQuantity: '12',
            normalProportion: '23%',
            abnormalQuantity: '12',
            abnormalProportion: '23%',
          },
          {
            region: '东方市',
            projects: '大型',
            normalQuantity: '14',
            normalProportion: '21%',
            abnormalQuantity: '14',
            abnormalProportion: '21%',
          },
          {
            region: '琼海市',
            projects: '大型',
            normalQuantity: '23',
            normalProportion: '18%',
            abnormalQuantity: '21',
            abnormalProportion: '18%',
          },
          {
            region: '琼海市',
            projects: '大型',
            normalQuantity: '21',
            normalProportion: '24%',
            abnormalQuantity: '21',
            abnormalProportion: '24%',
          },
          {
            region: '海口市',
            projects: '大型',
            normalQuantity: '15',
            normalProportion: '65%',
            abnormalQuantity: '15',
            abnormalProportion: '65%',
          },
          {
            region: '海口市',
            projects: '大型',
            normalQuantity: '12',
            normalProportion: '23%',
            abnormalQuantity: '12',
            abnormalProportion: '23%',
          },
          {
            region: '东方市',
            projects: '大型',
            normalQuantity: '14',
            normalProportion: '21%',
            abnormalQuantity: '14',
            abnormalProportion: '21%',
          },
          {
            region: '琼海市',
            projects: '大型',
            normalQuantity: '23',
            normalProportion: '18%',
            abnormalQuantity: '21',
            abnormalProportion: '18%',
          },
          {
            region: '琼海市',
            projects: '大型',
            normalQuantity: '21',
            normalProportion: '24%',
            abnormalQuantity: '21',
            abnormalProportion: '24%',
          },
          {
            region: '海口市',
            projects: '大型',
            normalQuantity: '15',
            normalProportion: '65%',
            abnormalQuantity: '15',
            abnormalProportion: '65%',
          },
        ],
      }
    },
    created() {},
    mounted() {
      this.initCharts()
    },
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
      initCharts() {
        const echarts = require('echarts')
        const myChart = echarts.init(document.getElementById('myChart'))
        var option = {
          color: ['#09BCFF', '#00D4B5', '#FF6666', '#009EF7'],
          legend: {
            top: 'middle',
            right: '1%',
            orient: 'vertical',
            itemGap: 20,
            icon: 'circle',
          },
          series: [
            {
              name: '异常分析',
              type: 'pie',
              radius: ['20%', '50%'],
              // center: ['40%', '70%'],
              center: [this.centerPoint[0], this.centerPoint[1]],
              label: {
                show: true,
                formatter: '{b} {c}个，{d}%',
                position: 'outer',
                alignTo: 'labelLine',
                bleedMargin: 0,
              },
              labelLine: {
                show: true,
                length: 0,
                //length2: 0
              },
              data: [
                {
                  value: 25,
                  name: '天气因素',
                },
                {
                  value: 15,
                  name: '设备故障',
                },
                {
                  value: 30,
                  name: '人员缺勤',
                },
                {
                  value: 30,
                  name: '资金未到位',
                },
              ],
            },
          ],
          graphic: {
            elements: [
              {
                type: 'image',
                style: {
                  image: './images/yichang.png',
                  width: 30,
                  height: 30,
                },
                left: 'center',
                top: 'center', //image左上角在中心点
              },
            ],
          },
        }

        myChart.setOption(option)
      },
    },
  }
</script>

<style scoped>
  .half-box {
    float: left;
    width: 50%;
    height: 100%;
  }
  .widget-main {
    padding: 10px;
  }
</style>
