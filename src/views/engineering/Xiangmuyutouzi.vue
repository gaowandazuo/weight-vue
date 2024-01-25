<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="widget-header">
      <div class="name">
        <span :class="{ active: showIframe === 0 }" @click="changeIframe(0)">
          项目与投资
        </span>
      </div>
    </div>
    <div id="chart" class="chart-box"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showIframe: 0,
        showTab: 0,
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
        const echarts5 = require('echarts5')
        const myChart = echarts5.init(document.getElementById('chart'))
        console.log(myChart)
        var option = {
          tooltip: {
            trigger: 'axis',
            formatter: function (params) {
              let str = params[0].name + '</br>'
              str += params[0].seriesName + ' : ' + params[0].value + '</br>'
              str += params[1].seriesName + ' : ' + params[1].value + '</br>'
              return str
            },
          },
          legend: {
            data: [
              '项目数',
              {
                name: '项目数增长率',
                itemStyle: {
                  opacity: 0,
                },
              },
              '投资额',
              {
                name: '投资额增长率',
                itemStyle: {
                  opacity: 0,
                },
              },
            ],
          },
          xAxis: [
            {
              type: 'category',
              data: ['2017', '2018', '2019', '2020', '2021'],
            },
          ],
          yAxis: [
            {
              type: 'value',
              name: '数量（个）',
            },
            {
              type: 'value',
              name: '投资额（万）',
            },
          ],
          series: [
            {
              name: '项目数',
              type: 'bar',
              barMaxWidth: 15,
              barMinWidth: 10,
              data: [90, 40, 50, 70, 50],
              itemStyle: {
                color: '#00CDA2',
              },
            },
            {
              name: '项目数增长率',
              type: 'line',
              //showSymbol: false,
              symbol: 'none',
              xAxisIndex: 1,
              data: [90, 40, 50, 70, 50],
              itemStyle: {
                color: '#00CDA2',
              },
              markPoint: {
                data: [],
              },
            },
            {
              name: '投资额',
              type: 'bar',
              barMaxWidth: 15,
              barMinWidth: 10,
              yAxisIndex: 1,
              data: [135, 110, 150, 85, 130],
              itemStyle: {
                color: '#FF9A00',
              },
            },
            {
              name: '投资额增长率',
              type: 'line',
              //showSymbol: false,
              symbol: 'none',
              yAxisIndex: 1,
              xAxisIndex: 1,
              data: [135, 110, 150, 85, 130],
              itemStyle: {
                color: '#FF9A00',
              },
              markPoint: {
                data: [],
              },
            },
          ],
        }

        ///////////////////////////////////////增长率箭头1/////////////////////////////////////////////////
        var [, ...a] = option.series[1].data
        //计算差值
        var DValue1 = a.map(
          (v, i) =>
            option.series[1].data[i] - (option.series[1].data[i] - v) / 2
        )
        //上下偏移距离
        var PlusMinus1 = a.map(
          (v, i) =>
            (10 * (option.series[1].data[i] - v)) /
            Math.abs(option.series[1].data[i] - v)
        )
        //计算标注坐标
        var GrowthRate1 = a.map(
          (v, i) => (v - option.series[1].data[i]) / option.series[1].data[i]
        )

        option.series[1].markPoint.data = option.series[1].data
          .map((x, i) => {
            return {
              coord: [i * 100, 0],
              symbol:
                'path://M507.733333 213.333333v725.333334h42.666667V204.8l145.066667 145.066667 29.866666-29.866667L533.333333 128 341.333333 320l29.866667 29.866667L507.733333 213.333333z',
              symbolSize: [4, 10],
              symbolRotate: 180,
              value: 0,
              label: {
                show: true,
                position: 'left',
                distance: 2,
                fontSize: 10,
                formatter: '{c}%',
              },
            }
          })
          .slice(1)
        option.series[1].markPoint.data.forEach((item, i) => {
          //标注坐标
          item.coord[1] = DValue1[i] - PlusMinus1[i]
          if (PlusMinus1[i] < 0) {
            item.symbolRotate = 0
          }
          //增长率，保留两位小数
          item.value = Math.floor(GrowthRate1[i] * 100)
        })

        ////////////////////////////////////增长率箭头2////////////////////////////////////////////////
        var [, ...b] = option.series[3].data
        //计算差值
        var DValue2 = b.map(
          (v, i) =>
            option.series[3].data[i] - (option.series[3].data[i] - v) / 2
        )
        //上下偏移距离
        var PlusMinus2 = b.map(
          (v, i) =>
            (-15 * (option.series[3].data[i] - v)) /
            Math.abs(option.series[3].data[i] - v)
        )
        //计算标注坐标
        var GrowthRate2 = b.map(
          (v, i) => (v - option.series[3].data[i]) / option.series[3].data[i]
        )

        option.series[3].markPoint.data = option.series[3].data
          .map((x, i) => {
            return {
              coord: [i * 100, 0],
              symbol:
                'path://M507.733333 213.333333v725.333334h42.666667V204.8l145.066667 145.066667	29.866666-29.866667L533.333333 128 341.333333 320l29.866667 29.866667L507.733333 213.333333z',
              symbolSize: [4, 10],
              symbolRotate: 0,
              value: 0,
              label: {
                show: true,
                position: 'left',
                distance: 2,
                fontSize: 10,
                formatter: '{c}%',
              },
            }
          })
          .slice(1)
        option.series[3].markPoint.data.forEach((item, i) => {
          //标注坐标
          item.coord[1] = DValue2[i] - PlusMinus2[i]
          if (PlusMinus2[i] < 0) {
            item.symbolRotate = 180
          }
          //增长率，保留两位小数
          item.value = Math.floor(GrowthRate2[i] * 100)
        })

        /////////////////////////////////隐藏的x轴,用于两条线偏移////////////////////////////////////
        option.xAxis[1] = {
          type: 'value',
          max: option.xAxis[0].data.length * 100,
          show: false,
          axisPointer: {
            type: 'none',
          },
        }
        option.series[1].data = option.series[1].data.map((x, i) => [
          40 + i * 100,
          x,
        ])
        option.series[3].data = option.series[3].data.map((x, i) => [
          60 + i * 100,
          x,
        ])
        myChart.setOption(option)
      },
    },
  }
</script>

<style scoped>
  .widget-main {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  .chart-box {
    width: 80%;
    /* height: 100%; */
    height: 500px;
  }
</style>
