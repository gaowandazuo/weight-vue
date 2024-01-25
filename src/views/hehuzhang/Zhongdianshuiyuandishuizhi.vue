<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta content="IE=9; IE=8; IE=EDGE" http-equiv="X-UA-Compatible" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <title>重点水源地水质</title>
    </head>
    <body>
      <div id="app" class="mian">
        <div class="widget-header">
          <div class="name">
            <span :class="{ active: showIframe == 0 }" @click="changeIframe(0)">
              重点水源地水质
            </span>
          </div>
        </div>
        <div class="widget-main">
          <div v-for="(item, i) in swd" :key="i" class="nr-box">
            <div class="name">赤田水库水源地</div>
            <div class="sz">
              <div class="sz-box">
                <p>PH值: {{ item.ph }}</p>
                <p>水温：{{ item.sw }}</p>
              </div>
              <div class="sz-box">
                <p>电导率: {{ item.ddl }}</p>
                <p>浊度: {{ item.zd }}</p>
              </div>
              <div class="sz-box">
                <p>溶解氧: {{ item.rjy }}</p>
                <p>化学需氧气量: {{ item.hxxyql }}</p>
              </div>
              <div class="sz-box">
                <p>测量时间</p>
                <p>{{ item.time }}</p>
              </div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
    </body>
  </html>
</template>

<script>
  export default {
    data() {
      return {
        showIframe: 0,
        showTab: 0,
        swd: [
          {
            ph: '8.01',
            ddl: '602',
            rjy: '5.74',
            sw: '32.5',
            zd: '27',
            hxxyql: '4.9',
            time: '2021.10.21 8:00',
          },
          {
            ph: '8.01',
            ddl: '602',
            rjy: '5.74',
            sw: '32.5',
            zd: '27',
            hxxyql: '4.9',
            time: '2021.10.21 8:00',
          },
          {
            ph: '8.01',
            ddl: '602',
            rjy: '5.74',
            sw: '32.5',
            zd: '27',
            hxxyql: '4.9',
            time: '2021.10.21 8:00',
          },
        ],
      }
    },
    created() {},
    mounted() {
      //this.chart()
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
        var option = {
          color: ['rgb(40, 202, 165)'],
          grid: {
            top: 50,
          },
          xAxis: {
            type: 'category',
            data: ['水区1', '水区2', '水区3', '水区4', '水区5'],
          },
          legend: {
            show: true,
            orient: 'vertical',
            icon: 'rect',
            top: 20,
            width: 20,
            itemWidth: 10, // 设置宽度
            itemHeight: 10, // 设置高度
            data: ['2021-08-28'],
          },
          yAxis: {
            nameTextStyle: {
              fontSize: 16,
            },
            type: 'value',
            axisTick: {
              // y轴刻度线
              show: false,
            },
            splitLine: {
              // 网格线
              show: true,
              lineStyle: {
                color: ['#ccc'],
                type: 'solid',
              },
            },
            splitArea: { show: false }, // 保留网格区域
            axisLabel: {
              show: true,
              textStyle: {
                color: 'rgb(161, 161, 161)',
              },
              // 这里重新定义就可以
              formatter: function (value) {
                var texts = []
                if (value === 0 || value === '0') {
                  texts.push('Ⅰ类')
                } else if (value === 50 || value === '50') {
                  texts.push('Ⅱ类')
                } else if (value === 100 || value === '100') {
                  texts.push('Ⅲ类')
                } else if (value === 150 || value === '150') {
                  texts.push('Ⅳ类')
                } else if (value === 200 || value === '200') {
                  texts.push('V类')
                } else if (value === 250 || value === '250') {
                  texts.push('劣V类')
                }
                return texts
              },
            },
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: 'rgba(0, 0, 0)', // 左边线的颜色
              },
            },
          },
          series: [
            {
              name: '2021-08-28',
              data: [120, 200, 150, 80, 70, 110, 220],
              type: 'bar',
              barWidth: 20,
            },
          ],
        }
        myChart.setOption(option)
      },
    },
  }
</script>

<style scoped>
  .clear {
    clear: both;
  }
  .nr-box {
    width: 100%;
    height: auto;
    border-bottom: 1px dashed #ddd;
  }
  .nr-box .name {
    height: 36px;
    margin-top: 10px;
    font-size: 16px;
    font-weight: bolder;
    line-height: 36px;
    color: #000;
  }
  .sz {
    width: 100%;
    height: auto;
  }
  .sz-box {
    float: left;
    width: 25%;
    height: auto;
  }
  .sz-box p {
    font-size: 14px;
    line-height: 24px;
    color: #9e9e9e;
  }
  .widget-main {
    padding: 10px 40px;
  }
</style>
