<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app">
    <div class="mian">
      <div class="widget-header">
        <div class="name">
          <span :class="{ active: showIframe == 0 }" @click="changeIframe(0)">
            用水
          </span>
        </div>
      </div>
      <div class="card-content-wrap">
        <div class="card-top-wrap">
          <div class="top-item">
            用水量
            <span class="num-text">{{ output }}亿m³</span>
          </div>
          <div class="top-item">
            比上年同期
            <span class="num-text">{{ sameTerm }}亿m³</span>
          </div>
        </div>
        <div class="card-bottom-wrap">
          <div id="yongshuiEcharts"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showIframe: 0,
        output: 37.08,
        sameTerm: 0.5,
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
        let echartDom = echarts.init(document.getElementById('yongshuiEcharts'))
        let echartDomOption = {
          color: ['#0993ff', '#66bcff', '#3adfca', '#ff9b26'],
          tooltip: {
            trigger: 'item',
          },
          legend: {
            // orient: 'vertical',
            x: '10%', // 水平居右
            y: 'center', // 垂直居中
            icon: 'circle', // 图例icon为方块
            width: 200,
            textStyle: {
              fontSize: '20px',
              width: 60,
              // overflow: 'break',
            },
            formatter: function (name) {
              var data = echartDomOption.series[0].data
              var total = 0
              var tarValue
              for (var i = 0; i < data.length; i++) {
                // eslint-disable-next-line no-unused-vars
                total += data[i].value
                if (data[i].name == name) {
                  tarValue = data[i].value
                }
              }
              var v = tarValue
              return name + '\n' + v + '亿m³'
            },
            itemGap: 20,
          },
          series: [
            {
              type: 'pie',
              center: ['70%', '50%'],
              avoidLabelOverlap: false,
              label: {
                // show: false,
                // position: 'center'
              },
              emphasis: {
                label: {
                  // show: true,
                  show: false,
                  fontSize: 40,
                  fontWeight: 'bold',
                },
              },
              labelLine: {
                // show: false
              },
              itemStyle: {
                normal: {
                  color: (list) => {
                    // 注意 ！！！！！ 这里的数组一定要和实际的类目长度相等或大于，不然会缺少颜色报错
                    var colorList = [
                      {
                        colorStart: '#488BFF',
                        colorEnd: '#9abffd',
                      },
                      {
                        colorStart: '#26CEBA',
                        colorEnd: '#8efaed',
                      },
                      {
                        colorStart: '#FFC069',
                        colorEnd: '#fadfba',
                      },
                      {
                        colorStart: ' #FD6865',
                        colorEnd: '#f8b2b1',
                      },
                    ]
                    const echarts = require('echarts')
                    return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                      {
                        //左、下、右、上
                        offset: 0,
                        color: colorList[list.dataIndex]['colorStart'],
                      },
                      {
                        offset: 1,
                        color: colorList[list.dataIndex]['colorEnd'],
                      },
                    ])
                  },
                },
              },
              data: [
                { value: 42, name: '农业' },
                { value: 3, name: '工业' },
                { value: 0.4, name: '生活' },
                { value: 0.4, name: '生态' },
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

  #yongshuiEcharts {
    width: 100%;
    height: 100%;
  }
</style>
