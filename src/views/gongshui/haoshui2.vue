<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="mian">
      <div class="widget-header">
        <div class="name">
          <span :class="{ active: showIframe == 0 }" @click="changeIframe(0)">
            耗水
          </span>
        </div>
      </div>
      <div class="card-content-wrap">
        <div class="card-top-wrap">
          <div class="left-wrap">
            <div class="top">耗水量</div>
            <div class="center">
              <div>2020年</div>
              <div>21.33亿m³</div>
            </div>
            <div class="bottom">
              <div>比上年</div>
              <div>下降0.51亿m³</div>
            </div>
          </div>
          <div id="haoshuiChartsTop" class="right-wrap"></div>
        </div>
        <div class="card-bottom-wrap">
          <div class="left-wrap">
            <div class="top">综合耗水率</div>
            <div class="center">
              <div>2020年</div>
              <div>46.4%</div>
            </div>
            <div class="bottom">
              <div>比上年</div>
              <div>下降0.1</div>
            </div>
          </div>
          <div id="haoshuiChartsBottom" class="right-wrap"></div>
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
      this.initEcharts2()
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

        let echartDom = echarts.init(
          document.getElementById('haoshuiChartsTop')
        )
        let echartDomOption = {
          grid: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          },
          gridContent: {
            containLabel: true, // 意思就是图表的大小是包含标签的, 如果标签数值过大的话,会缩小图表
          },
          series: [
            {
              name: '漏斗图',
              type: 'funnel',
              left: 0,
              top: 60,
              bottom: 60,
              width: '60%',
              min: 0,
              max: 100,
              minSize: '0%',
              maxSize: 0, // 设为 0，表示最大宽度为0，这样此层只会显示label
              //并且由于宽度为0，漏斗图是居中显示的，所以label线条的起始位置都是中间
              sort: 'ascending',
              z: 1,
              gap: 2,
              label: {
                show: true,
                position: 'right',
              },
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1,
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
              labelLine: {
                length: 200, // label拉线的长度根据自己的场景进行设置即可
                lineStyle: {
                  width: 1,
                  type: 'solid',
                },
              },
              data: [
                { value: 3, name: '生态' },
                { value: 7, name: '生活' },
                { value: 25, name: '工业' },
                { value: 65, name: '农业' },
              ],
            },
            {
              type: 'funnel',
              left: '10%',
              top: 60,
              bottom: 60,
              width: '80%',
              min: 0,
              max: 100,
              minSize: '0%',
              maxSize: '100%',
              sort: 'ascending',
              gap: 2,
              label: {
                show: false,
                position: 'outside',
              },
              labelLine: {
                length: 10,
                lineStyle: {
                  width: 1,
                  type: 'solid',
                },
              },
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1,
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
              emphasis: {
                label: {
                  fontSize: 20,
                },
              },
              data: [
                { value: 3, name: '生态' },
                { value: 7, name: '生活' },
                { value: 25, name: '工业' },
                { value: 65, name: '农业' },
              ],
            },
          ],
        }
        echartDom.setOption(echartDomOption)
      },
      initEcharts2() {
        const echarts = require('echarts')

        let echartDom = echarts.init(
          document.getElementById('haoshuiChartsBottom')
        )
        let echartDomOption = {
          grid: {
            top: 100,
            bottom: 100,
            left: 100,
            right: 100,
          },
          series: [
            {
              name: '漏斗图',
              type: 'funnel',
              left: 160,
              top: 60,
              bottom: 60,
              width: '60%',
              min: 0,
              max: 100,
              minSize: '0%',
              maxSize: 0, // 设为 0，表示最大宽度为0，这样此层只会显示label
              //并且由于宽度为0，漏斗图是居中显示的，所以label线条的起始位置都是中间
              sort: 'ascending',
              z: 1,
              gap: 2,
              label: {
                show: true,
                position: 'right',
              },
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1,
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
              labelLine: {
                length: 200, // label拉线的长度根据自己的场景进行设置即可
                lineStyle: {
                  width: 1,
                  type: 'solid',
                },
              },
              data: [
                { value: 3, name: '生态' },
                { value: 7, name: '生活' },
                { value: 25, name: '工业' },
                { value: 65, name: '农业' },
              ],
            },
            {
              type: 'funnel',
              left: '10%',
              top: 60,
              bottom: 60,
              width: '80%',
              min: 0,
              max: 100,
              minSize: '0%',
              maxSize: '100%',
              sort: 'ascending',
              gap: 2,
              label: {
                show: false,
                position: 'outside',
              },
              labelLine: {
                length: 10,
                lineStyle: {
                  width: 1,
                  type: 'solid',
                },
              },
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1,
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
              emphasis: {
                label: {
                  fontSize: 20,
                },
              },
              data: [
                { value: 3, name: '生态' },
                { value: 7, name: '生活' },
                { value: 25, name: '工业' },
                { value: 65, name: '农业' },
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
    flex-direction: row;
    padding: 20px 50px;
  }

  .card-top-wrap .card-bottom-wrap {
    display: flex;
    width: 100%;
    height: 50%;
    /* justify-content: space-around; */
  }

  .left-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    width: 40%;
    height: 100%;
  }

  .top {
    font-weight: 600;
  }

  .bottom,
  .center {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  .bottom div,
  .center div {
    width: 100%;
  }

  .right-wrap {
    width: 400px;
    height: 400px;
    overflow: auto;
  }
</style>
