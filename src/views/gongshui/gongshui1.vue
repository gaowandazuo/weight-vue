<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <head>
      <title>浪潮智慧水利</title>
    </head>

    <body>
      <div class="mian">
        <div class="widget-header">
          <div class="name">
            <span :class="{ active: showIframe == 0 }" @click="changeIframe(0)">
              供水
            </span>
          </div>
        </div>
        <div class="card-content-wrap">
          <div class="card-top-wrap">
            <div class="top-item">
              供水量
              <span class="num-text">{{ output }}</span>
              亿m³
            </div>
            <div class="top-item">
              比上年同期
              <span class="num-text">{{ sameTerm }}</span>
              亿m³
            </div>
          </div>
          <div class="card-bottom-wrap">
            <div id="gogshuiEcharts"></div>
          </div>
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
        output: 123,
        sameTerm: 12,
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

        let echartDom = echarts.init(document.getElementById('gogshuiEcharts'))
        let echartDomOption = {
          color: ['#0993ff', '#3adfca', '#ff9b26'],
          tooltip: {
            trigger: 'item',
          },
          legend: {
            orient: 'vertical',
            x: '100px', // 水平居右
            y: 'center', // 垂直居中
            icon: 'circle', // 图例icon为方块
            textStyle: {
              fontSize: '40px',
            },
            formatter: function (name) {
              var data = echartDomOption.series[0].data
              var total = 0
              var tarValue
              for (var i = 0; i < data.length; i++) {
                total += data[i].value
                if (data[i].name == name) {
                  tarValue = data[i].value
                }
              }
              var v = tarValue
              return name + '     ' + v + 'm³'
            },
            itemGap: 80,
          },
          series: [
            {
              type: 'pie',
              radius: ['40%', '70%'],
              center: ['70%', '50%'],
              avoidLabelOverlap: false,
              label: {
                show: true,
                position: 'outside',
                fontSize: 20, // 调整文字大小为30像素
              },
              emphasis: {
                label: {
                  show: true,
                },
              },
              labelLine: {
                show: false,
              },
              data: [
                { value: 42, name: '地表水' },
                { value: 3, name: '地下水' },
                { value: 0.4, name: '其他水源' },
              ],
            },
          ],
        }
        echartDom.setOption(echartDomOption)
      },
    },
  }
</script>
<style scoped>
  .card-content-wrap {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  .num-text {
    margin-right: 5px;
    margin-left: 10px;
    font-size: 24px;
  }

  .card-top-wrap {
    display: flex;
  }

  .top-item {
    height: 40px;
    margin-left: 40px;
    line-height: 40px;
  }

  .card-bottom-wrap {
    width: 100%;
    height: calc(100% - 40px);
  }

  #gogshuiEcharts {
    width: 100%;
    height: 100%;
  }
</style>
