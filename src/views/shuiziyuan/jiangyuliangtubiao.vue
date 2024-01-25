<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mian">
    <div class="widget-header">
      <div class="name">
        <span :class="{ active: showIframe == 0 }" @click="changeIframe(0)">
          降雨量图表
        </span>
      </div>
    </div>
    <div class="widget-main">
      <div id="jyltbEcharts"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showIframe: 0,
      }
    },
    mounted() {
      this.initEcharts()
    },
    methods: {
      changeIframe(val) {
        this.showIframe = val
        switch (val) {
          case 0:
            break
        }
      },
      initEcharts() {
        const echarts = require('echarts')
        let echartDom = echarts.init(document.getElementById('jyltbEcharts'))
        let echartDomOption = {
          xAxis: [
            {
              type: 'category',
              axisLabel: {
                color: '#000',
                textStyle: {
                  fontSize: 14,
                },
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#788eb0',
                },
              },
              axisTick: {
                show: false,
              },
              splitLine: {
                show: false,
                lineStyle: {
                  color: '#788eb0',
                },
              },
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            },
          ],
          yAxis: [
            {
              type: 'value',
              name: '单位/mm',
              nameTextStyle: {
                color: '#000',
                fontSize: 14,
                padding: [0, 0, 0, -30],
              },
              min: 0,
              axisLabel: {
                textStyle: {
                  color: '#000',
                  fontSize: 14,
                },
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: 'gray',
                },
              },
            },
          ],
          series: [
            {
              name: '次数',
              type: 'line',
              symbol: 'circle',
              symbolSize: 8,
              itemStyle: {
                color: '#2096fe',
                lineStyle: {
                  color: '#2096fe',
                  width: 3,
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: 'RGBA(32, 150, 254, 0.2)',
                    },
                    {
                      offset: 1,
                      color: 'RGBA(32, 150, 254, 0.8)',
                    },
                  ]),
                },
              },
              data: [45, 39, 60, 1, 40, 80, 0],
            },
          ],
        }
        echartDom.setOption(echartDomOption)
      },
    },
  }
</script>

<style scoped>
  #jyltbEcharts {
    width: 100%;
    height: 500px;
  }
</style>
