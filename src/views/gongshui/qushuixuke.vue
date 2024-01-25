<template>
  <div lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta content="IE=9; IE=8; IE=EDGE" http-equiv="X-UA-Compatible" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <title>浪潮智慧水利</title>
      <link href="./css/main.css" rel="stylesheet" />
    </head>

    <body>
      <div class="mian">
        <div class="widget-header">
          <div class="name">
            <span :class="{ active: showIframe == 0 }" @click="changeIframe(0)">
              取水许可
            </span>
          </div>
        </div>
        <div class="card-content-wrap">
          <div class="card-top-wrap">
            <div class="top-item">
              许可水量
              <span class="num-text">37.98</span>
              亿m³
            </div>
            <div class="top-item">
              计划水量
              <span class="num-text">40.3</span>
              亿m³
            </div>
            <div class="top-item">
              有效取水许可证
              <span class="num-text">275</span>
              亿m³
            </div>
          </div>
          <div class="card-bottom-wrap">
            <div id="fasfasdfa"></div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
  export default {
    data() {
      return { showIframe: 0 }
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
        let echartDom = echarts.init(document.getElementById('fasfasdfa'))
        let echartDomOption = {
          color: ['#0993ff', '#7fc7ff', '#28caa5'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          legend: {
            right: 0,
            y: 'center', // 垂直居中
            orient: 'vertical',
            itemGap: 80,
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          },
          xAxis: {
            type: 'value',
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            boundaryGap: [0, 0.01],
          },
          yAxis: {
            type: 'category',
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            data: ['瞻洲市', '三亚市', '海口市', '全省'],
          },
          series: [
            {
              name: '可分配水量',
              type: 'bar',
              data: [18203, 23489, 29034, 104970],
            },
            {
              name: '许可水量',
              type: 'bar',
              data: [19325, 23438, 31000, 121594],
            },
            {
              name: '计划水量',
              type: 'bar',
              data: [13325, 20438, 21000, 100594],
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

  #fasfasdfa {
    width: 100%;
    height: 100%;
  }
</style>
