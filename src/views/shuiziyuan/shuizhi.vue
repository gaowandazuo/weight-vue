<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mian">
    <div class="widget-header">
      <div class="name">
        <span :class="{ active: showIframe == 0 }" @click="changeIframe(0)">
          水质
        </span>
      </div>
    </div>
    <div class="card-content-wrap">
      <div class="info-search">
        <div class="search-box">
          <span class="search-name">年份</span>
          <el-select v-model="yearVal" placeholder="请选择">
            <el-option
              v-for="item in year"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              @click.native="selectChanged(item)"
            />
          </el-select>
        </div>
      </div>
      <div class="chart-line">
        <div id="chart1" class="chart-box"></div>
        <div id="chart2" class="chart-box"></div>
        <div class="chart-tb">
          <p class="wdb">
            未达标
            <span>{{ offlist.length }}</span>
          </p>
          <p class="db">
            达标
            <span>{{ onlist.length }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import * as echarts from 'echarts'

  export default {
    name: 'App',
    data() {
      return {
        onelist: [],
        twolist: [],
        threelist: [],
        fourlist: [],
        fivelist: [],
        onlist: [],
        offlist: [],
        showIframe: 0,
        showTab: 0,
        year: [
          {
            value: '2022',
            label: '2022年',
          },
          {
            value: '2021',
            label: '2021年',
          },
          {
            value: '2020',
            label: '2020年',
          },
        ],
        yearVal: '2022',
        chartData1: {
          2020: [18, 42, 3, 1, 1],
          2021: [18, 43, 2, 1, 1],
          2022: [19, 43, 1, 1, 1],
        },
        chartData2: {
          2020: 0.87,
          2021: 0.88,
          2022: 0.91,
        },
      }
    },
    mounted() {
      this.chart1()
      this.chart2()
    },
    methods: {
      changeIframe(val) {
        this.showIframe = val
        switch (val) {
          case 0:
            break
        }
      },
      selectChanged(data) {
        this.yearVal = data.value
        this.onelist = []
        this.twolist = []
        this.threelist = []
        this.fourlist = []
        this.fivelist = []
        this.onlist = []
        this.offlist = []
        this.chart1()
        this.chart2()
      },
      chart1() {
        const myChart = echarts.init(document.getElementById('chart1'))
        const option = {
          color: ['rgb(45, 131, 234)'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          xAxis: {
            name: '(类型)',
            type: 'category',
            data: ['Ⅰ类', 'Ⅱ类', 'Ⅲ类', 'Ⅳ类', 'Ⅴ类'],
          },
          legend: {
            icon: 'rect',
            itemWidth: 10,
            itemHeight: 10,
            show: true,
            data: ['水功能区个数'],
          },
          yAxis: {
            name: '(个)',
            type: 'value',
          },
          series: [
            {
              name: '水功能区个数',
              data: this.chartData1[this.yearVal],
              type: 'bar',
              barWidth: 30,
            },
          ],
        }
        myChart.setOption(option)
      },
      chart2() {
        const fontSize = (res) => {
          // eslint-disable-next-line no-unused-vars
          let docEl = document.documentElement
          let clientWidth =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth
          if (!clientWidth) return
          let fontSize = 100 * (clientWidth / 1920)
          return res * fontSize
        }
        const myChart = echarts.init(document.getElementById('chart2'))
        const data = this.chartData2[this.yearVal]
        const colorList = [
          [
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#5EBEFD',
              },
              {
                offset: 1,
                color: '#3FE4FE',
              },
            ]),
            '#E4EBFD',
          ],
        ]
        var option = {
          color: ['#E4EBFD', '#293041', '#fcfa3c', '#f44061', '1b6783'],
          title: [
            {
              text: data * 100 + '%',
              left: '50%',
              top: 'center',
              textAlign: 'center',
              textStyle: {
                fontSize: fontSize(0.5),
                fontWeight: 'bold',
                color: '#fff',
              },
            },
          ],
          /*   legend: {
                         orient: 'vertical',
                          right: '20%',
                          top:'center',
                           data:['未达标','已达标']
                     },*/
          series: [
            {
              name: '内圆2',
              type: 'pie',
              radius: ['0%', '50%'],
              hoverAnimation: false,
              label: {
                show: true,
                position: 'center',
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '30',
                  fontWeight: 'bold',
                },
              },
              itemStyle: {
                color: 'rgba(37, 178, 250)',
              },
              // eslint-disable-next-line no-dupe-keys
              label: {
                show: true,
                position: 'center',
              },
              data: [{ value: data }],
            },
            {
              name: '未达标',
              type: 'gauge',
              splitNumber: 30,
              radius: '95%',
              center: ['50%', '50%'],
              startAngle: 90,
              endAngle: -269,
              detail: {
                show: false,
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: [
                    [data, colorList[0][0]],
                    [1, colorList[0][1]],
                  ],
                },
              },
              axisTick: {
                show: false,
              },
              splitLine: {
                show: true,
                length: 22,
                lineStyle: {
                  color: 'auto',
                  width: 2.5,
                },
              },
              axisLabel: {
                show: false,
              },
              pointer: {
                show: false,
              },
              data: [
                {
                  value: data * 100,
                },
              ],
            },
          ],
        }
        myChart.setOption(option)
      },
    },
  }
</script>

<style scoped>
  .chart-line {
    width: 1200px;
    height: calc(500px - 60px);
  }
  .chart-box {
    float: left;
    height: 100%;
  }

  .chart-box#chart1 {
    width: 60%;
  }

  .chart-box#chart2 {
    width: calc(40% - 120px);
  }

  .chart-tb {
    display: flex;
    flex-direction: column;
    justify-content: center;
    float: left;
    width: 120px;
    height: 100%;
  }

  .chart-tb p {
    position: relative;
    padding-left: 10px;
    margin: 0 0 10px 0;
  }

  .chart-tb p:before {
    position: absolute;
    top: 8px;
    left: -5px;
    display: block;
    width: 8px;
    height: 8px;
    content: '';
    border-radius: 50%;
  }

  .chart-tb p.wdb:before {
    background: #dbe4fc;
  }

  .chart-tb p.db:before {
    background: #25b1fa;
  }

  .chart-tb p span {
    margin-left: 15px;
  }
</style>
