<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta content="IE=9; IE=8; IE=EDGE" http-equiv="X-UA-Compatible" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <title>清河行动</title>
    </head>
    <body>
      <div id="app" class="main">
        <div class="widget-header">
          <div class="name">
            <span
              :class="{ active: showIframe === 0 }"
              @click="changeIframe(0)"
            >
              清河行动
            </span>
          </div>
        </div>
        <div class="widget-main">
          <div class="info-search">
            <div class="search-box">
              <span class="search-name">年份</span>
              <el-select v-model="yearVal" placeholder="请选择">
                <el-option
                  v-for="item in year"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </div>
          <div id="chart" class="chart-box"></div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showIframe: 0,
        showTab: 0,
        year: [
          {
            year: '2021',
            label: '2021年',
          },
          {
            value: '2020',
            label: '2020年',
          },
          {
            value: '2019',
            label: '2019年',
          },
        ],
        yearVal: '2021',
      }
    },
    created() {},
    mounted() {
      this.chart()
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
      chart() {
        const echarts = require('echarts')
        var myChart = echarts.init(document.getElementById('chart'))
        var data = [
          {
            value: 123,
            name: '乱占',
          },
          {
            value: 100,
            name: '乱堆',
          },
          {
            value: 80,
            name: '乱采',
          },
          {
            value: 50,
            name: '乱建',
          },
          {
            value: 40,
            name: '其他',
          },
        ]
        var option = {
          backgroundColor: '#fff',
          tooltip: {
            show: true,
            trigger: 'item',
            formatter: '{b}: {c} ({d}%)',
          },
          legend: [
            {
              orient: 'vertical',
              left: '73%',
              icon: 'circle',
              itemWidth: 10,
              itemHeight: 10,
              top: 'center',
              data: ['乱建', '其他'],
              formatter: function (name) {
                var data = option.series[0].data
                var total = 0
                var tarValue
                for (var i = 0; i < data.length; i++) {
                  total += data[i].value
                  if (data[i].name == name) {
                    tarValue = data[i].value
                  }
                }
                var v = tarValue
                var p = Math.round((tarValue / total) * 100)
                return `${name}` + '\xa0' + '\xa0' + '\xa0' + `${v}`
              },
            },
            {
              orient: 'vertical',
              left: '60%',
              icon: 'circle',
              itemWidth: 10,
              itemHeight: 10,
              top: 'center',
              data: ['乱占', '乱堆'],
              formatter: function (name) {
                var data = option.series[0].data
                var total = 0
                var tarValue
                for (var i = 0; i < data.length; i++) {
                  total += data[i].value
                  if (data[i].name == name) {
                    tarValue = data[i].value
                  }
                }
                var v = tarValue
                var p = Math.round((tarValue / total) * 100)
                return `${name}` + '\xa0' + '\xa0' + '\xa0' + `${v}`
              },
            },
            {
              orient: 'vertical',
              left: '85%',
              icon: 'circle',
              itemWidth: 10,
              itemHeight: 10,
              top: 'center',
              data: ['乱采'],
              formatter: function (name) {
                var data = option.series[0].data
                var total = 0
                var tarValue
                for (var i = 0; i < data.length; i++) {
                  total += data[i].value
                  if (data[i].name == name) {
                    tarValue = data[i].value
                  }
                }
                var v = tarValue
                var p = Math.round((tarValue / total) * 100)
                return `${name}` + '\xa0' + '\xa0' + '\xa0' + `${v}`
              },
            },
          ],
          series: [
            {
              type: 'pie',
              selectedMode: 'single',
              radius: ['45%', '94%'],
              color: [
                'rgb(44, 158, 247)',
                'rgb(94, 185, 255)',
                'rgb(16, 208, 183)',
                'rgb(253, 173, 78)',
                'rgb(244, 113, 118)',
              ],
              center: ['30%', '50%'],
              label: {
                normal: {
                  position: 'inner',
                  formatter: '{d}%',

                  textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 14,
                  },
                },
              },
              labelLine: {
                normal: {
                  show: false,
                },
              },
              data: data,
            },
          ],
        }
        myChart.setOption(option)
      },
    },
  }
</script>
<style scoped>
  .chart-box {
    width: 100%;
    height: calc(100% - 60px);
  }
</style>
