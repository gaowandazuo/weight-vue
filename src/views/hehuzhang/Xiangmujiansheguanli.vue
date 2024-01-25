<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app">
    <div class="widget-header">
      <div class="name">
        <span :class="{ active: showIframe == 0 }" @click="changeIframe(0)">
          项目建设管理
        </span>
      </div>
      <div class="tool"></div>
    </div>
    <div class="widget-main">
      <div class="widget-box">
        <div class="chart-wrap">
          <div class="chart-item">
            <div class="chart-title">项目进度</div>
            <div class="progress-wrap">
              <div class="progress-left">
                <div class="progress-chart">
                  <div id="progressChart" class="chart-box"></div>
                </div>
                <div class="progress-footer">
                  项目总数:
                  <span style="font-size: 17px">15</span>
                  个
                </div>
              </div>
              <div class="progress-right">
                <div class="progress-legend">
                  <img src="../../assets/images/sgz.png" />
                  <div>施工中</div>
                  <div>
                    <span style="margin-right: 10px; font-size: 24px">7</span>
                    个
                  </div>
                </div>
                <div class="progress-legend">
                  <img src="../../assets/images/sgw.png" />
                  <div>施工完</div>
                  <div>
                    <span style="margin-right: 10px; font-size: 24px">5</span>
                    个
                  </div>
                </div>
                <div class="progress-legend">
                  <img src="../../assets/images/yq.png" />
                  <div>延期</div>
                  <div>
                    <span style="margin-right: 10px; font-size: 24px">2</span>
                    个
                  </div>
                </div>
                <div class="progress-legend">
                  <img src="../../assets/images/wkg.png" />
                  <div>未开工</div>
                  <div>
                    <span style="margin-right: 10px; font-size: 24px">1</span>
                    个
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="divider"></div>

          <div class="chart-item">
            <div class="chart-title">项目分类</div>
            <div class="tool-bar">
              <el-select v-model="value" size="mini">
                <el-option
                  v-for="(item, index) in ['2020', '2021', '2022']"
                  :key="index"
                  :label="item"
                  :value="item"
                />
              </el-select>
              <div>
                <el-radio v-model="radio" label="1">政区</el-radio>
                <el-radio v-model="radio" label="2">类型</el-radio>
              </div>
            </div>
            <div class="classify-chart">
              <div id="classifyChart" class="chart-box"></div>
            </div>
          </div>

          <div class="divider"></div>

          <div class="chart-item">
            <div class="chart-title">异常分析</div>
            <div class="abnormal-chart">
              <div id="abnormalChart" class="chart-box"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  const echarts = require('echarts')
  export default {
    data() {
      return {
        showIframe: 0,
        charts: [],
      }
    },
    created() {},
    mounted() {
      // 项目进度
      var progressChart = echarts.init(document.getElementById('progressChart'))
      this.charts.push(progressChart)
      var progressOptions = {
        series: [
          {
            name: '项目进度',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              formatter: ['{a|15}', '{b|总数}'].join('\n'),
              rich: {
                a: {
                  fontSize: 25,
                },
                b: {
                  fontSize: 15,
                },
              },
              position: 'center',
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: 7,
                name: '施工中',
              },
              {
                value: 5,
                name: '施工完',
              },
              {
                value: 2,
                name: '延期',
              },
              {
                value: 1,
                name: '未开工',
              },
            ],
          },
        ],
      }
      progressChart.setOption(progressOptions)

      // 项目分类
      var classifyChart = echarts.init(document.getElementById('classifyChart'))
      this.charts.push(classifyChart)
      var classifyOptions = {
        grid: {
          left: '2%',
          right: '13%',
          bottom: 0,
          top: 20,
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        xAxis: [
          {
            type: 'value',
            boundaryGap: [0, 0.01],
            name: '（万元）',
            min: 0,
            max: 12000,
            interval: 3000,
          },
          {
            type: 'value',
            boundaryGap: [0, 0.01],
            name: '（个）',
            min: 0,
            max: 4,
            interval: 1,
          },
        ],
        yAxis: {
          type: 'category',
          data: [
            '琼海市',
            '澄迈县',
            '海口市',
            '定安县',
            '儋州市',
            '东方市',
            '三亚市',
          ],
          inverse: true,
        },
        series: [
          {
            name: '项目个数',
            type: 'bar',
            data: [1, 1, 3, 1, 3, 2, 4],
            xAxisIndex: 1,
            itemStyle: {
              color: '#4BACF6',
              borderRadius: [0, 12, 12, 0],
            },
          },
          {
            name: '投资额',
            type: 'bar',
            data: [2000, 1500, 4000, 500, 1800, 800, 6000],
            xAxisIndex: 0,
            itemStyle: {
              color: '#1CC2AE',
              borderRadius: [0, 12, 12, 0],
            },
          },
        ],
      }
      classifyChart.setOption(classifyOptions)

      // 异常分析
      var abnormalChart = echarts.init(document.getElementById('abnormalChart'))
      this.charts.push(abnormalChart)
      var abnormalOptions = {
        color: ['#49AAF9', '#00D1BB', '#FBA721', '#7C73BB'],
        legend: {
          icon: 'circle',
          bottom: 10,
          left: 'center',
          data: ['设备故障', '天气因素', '人员缺勤', '资金未到位'],
        },
        series: [
          {
            name: '项目进度',
            type: 'pie',
            radius: [0, '60%'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              formatter: '{d}%',
            },
            labelLine: {
              show: true,
              length2: 40,
              lineStyle: {
                width: 2,
                type: [5, 10],
                dashOffset: 5,
                cap: 'round',
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 2,
              },
            },
            data: [
              {
                value: 60,
                name: '设备故障',
              },
              {
                value: 25,
                name: '天气因素',
              },
              {
                value: 10,
                name: '人员缺勤',
              },
              {
                value: 5,
                name: '资金未到位',
              },
            ],
          },
          {
            name: 'decoration',
            type: 'pie',
            color: ['#52D6FF', 'rgba(255,255,255,0)'],
            radius: ['67%', '65%'],
            hoverAnimation: false,
            lable: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: new Array(81).fill(10).map(() => {
              return {
                name: '',
                value: 20,
              }
            }),
          },
        ],
      }
      abnormalChart.setOption(abnormalOptions)

      window.addEventListener('resize', this.resizeCharts)
    },
    methods: {
      changeIframe(val) {
        this.showIframe = val
        switch (val) {
          case 0:
            break
        }
      },
      beforeDestroy() {
        window.removeEventListener('resize', this.resizeCharts)
      },
      resizeCharts() {
        this.charts.forEach(function (item) {
          item.resize()
        })
      },
    },
  }
</script>

<style type="text/css" scoped>
  .widget-main {
    box-sizing: border-box;
    padding: 0 10px;
  }
  .chart-wrap {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

  .chart-wrap .chart-item {
    width: 30%;
    height: 100%;
  }

  .chart-wrap .chart-item .chart-title {
    height: 30px;
    padding: 20px;
    font-size: 20px;
    font-weight: bold;
  }

  .chart-wrap .chart-item .tool-bar {
    display: flex;
    justify-content: space-between;
    height: 30px;
  }

  .chart-wrap .chart-item .tool-bar .el-select {
    width: 75px;
  }

  .chart-wrap .chart-item .tool-bar .el-input__inner {
    font-size: 13px;
    border: 0;
  }

  .progress-wrap {
    display: flex;
    width: 100%;
    height: calc(100% - 100px);
  }

  .progress-wrap .progress-left {
    width: 65%;
  }

  .progress-wrap .progress-left .progress-chart {
    width: 100%;
    height: calc(100% - 50px);
  }

  .progress-wrap .progress-left .progress-footer {
    width: 60%;
    height: 24px;
    padding: 13px 0;
    margin: 0 auto;
    text-align: center;
    background-color: #f1f1f1;
    border-radius: 20px;
  }

  .progress-wrap .progress-right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 35%;
  }

  .progress-wrap .progress-right .progress-legend {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .classify-chart {
    width: 100%;
    height: calc(100% - 130px);
  }

  .abnormal-chart {
    width: 100%;
    height: calc(100% - 100px);
  }

  .divider {
    width: 3px;
    height: 100%;

    background-color: #f1f1f1;
  }
</style>
