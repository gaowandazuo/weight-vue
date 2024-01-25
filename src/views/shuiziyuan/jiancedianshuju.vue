<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mian">
    <div class="widget-header">
      <div class="name">
        <span :class="{ active: showIframe == 0 }" @click="changeIframe(0)">
          检测点数据
        </span>
      </div>
    </div>
    <div class="widget-main">
      <div class="widget-left">
        <div id="container"></div>
        <div class="mapControl">
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="水位监测点" />
            <el-checkbox label="流速监测点" />
            <el-checkbox label="流量监测点" />
            <el-checkbox label="水质监测点" />
          </el-checkbox-group>
        </div>
      </div>
      <div class="widget-right">
        <div class="right-top">
          <el-date-picker
            v-model="value1"
            end-placeholder="结束日期"
            range-separator="至"
            start-placeholder="开始日期"
            type="datetimerange"
          />
          <el-button type="primary">搜索</el-button>
          <el-button type="warning">导出</el-button>
        </div>
        <div id="jcdsjEcharts"></div>
      </div>
    </div>
  </div>
</template>
<script src="https://webapi.amap.com/maps?v=2.0&key=9f55a661e75fcfe82c2d075219f43013"></script>
<script type="text/javascript"></script>
<script>
  import AMapLoader from '@amap/amap-jsapi-loader'
  export default {
    data() {
      return { showIframe: 0, value1: '', checkList: ['水位监测点'], map: null }
    },
    mounted() {
      this.initEcharts()
      this.initMap()
      setTimeout(() => {
        this.initMap()
      }, 1500)
    },
    methods: {
      changeIframe(val) {
        this.showIframe = val
        switch (val) {
          case 0:
            break
        }
      },
      clearMarker() {
        if (marker) {
          marker.setMap(null)
          marker = null
        }
      },
      initMap() {
        AMapLoader.load({
          key: '9f55a661e75fcfe82c2d075219f43013',
          version: '2.0',
          plugins: [''],
        })
          .then((AMap) => {
            if (typeof AMap !== 'undefined') {
              this.map = new AMap.Map('container', {
                viewMode: '2D',
                zoom: 11,
                center: [105.72, 34.58],
              })
            } else {
              console.error(
                'AMap is not defined. Make sure AMap API is loaded successfully.'
              )
            }
          })
          .catch((e) => {
            console.log(e)
          })
        var marker = new AMap.Marker({
          position: [105.7, 34.59],
          size: new AMap.Size(25, 34),
          image:
            'https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
        })
        var marker1 = new AMap.Marker({
          position: [105.77, 34.59],
          size: new AMap.Size(25, 34),
          image:
            'https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
        })
        var marker2 = new AMap.Marker({
          position: [105.73, 34.56],
          size: new AMap.Size(25, 34),
          image:
            'https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
        })
        map.add([marker, marker1, marker2])
      },
      initEcharts() {
        const echarts = require('echarts')
        let echartDom = echarts.init(document.getElementById('jcdsjEcharts'))
        let echartDomOption = {
          grid: {
            top: '15%',
            left: '8%',
            right: '10%',
            bottom: '12%',
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#666',
              },
            },
          },
          legend: {
            data: ['水位(m)', '流速(L/s)', '流量(L/s)', 'COD(mg/L)'],
            selected: {
              '水位(m)': false,
              '流速(L/s)': false,
              '流量(L/s)': false,
              'COD(mg/L)': true,
            },
            selectedMode: 'single',
            textStyle: {
              color: '#666',
            },
            top: 40,
          },
          xAxis: [
            {
              type: 'category',
              data: [
                '8-18 10:05',
                '8-18 10:05',
                '8-18 10:05',
                '8-18 10:05',
                '8-18 10:05',
                '8-18 10:05',
              ],
              boundaryGap: 0,
              axisPointer: {
                type: 'shadow',
              },
              axisLine: {
                lineStyle: {
                  color: '#E1EBFF',
                },
              },
              axisLabel: {
                textStyle: {
                  color: '#666',
                },
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
              name: '数值',
              nameTextStyle: {
                color: '#666',
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#E1EBFF',
                },
              },
              splitNumber: 5,
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#E1EBFF',
                },
              },
              axisLabel: {
                textStyle: {
                  color: '#666',
                },
              },
            },
            {
              type: 'value',
              name: '降雨量',
              nameTextStyle: {
                color: '#666',
              },
              max: function (value) {
                return Math.ceil(value.max * 3)
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#E1EBFF',
                },
              },
              splitNumber: 5,
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#E1EBFF',
                },
              },
              axisLabel: {
                textStyle: {
                  color: '#666',
                },
              },
            },
          ],
          series: [
            {
              name: 'COD(mg/L)',
              type: 'line',
              // smooth:true,
              showSymbol: false,
              z: 1,
              lineStyle: {
                color: 'rgba(254,185,79, 1)',
              },
              itemStyle: {
                color: 'rgba(254,185,79, 1)',
              },
              areaStyle: {
                //区域填充样式
                normal: {
                  //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: 'rgba(254,185,79, 1)',
                      },
                      {
                        offset: 0.7,
                        color: 'rgba(254,185,79, 0)',
                      },
                    ],
                    false
                  ),
                  shadowBlur: 0, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                },
              },
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' m'
                },
              },
              data: [0, 6000, 6100, 6200, 5800, 6000, 7000],
            },
            {
              name: '流量(L/s)',
              type: 'line',
              // smooth:true,
              showSymbol: false,
              z: 1,
              lineStyle: {
                color: 'rgba(241,68,76, 1)',
              },
              itemStyle: {
                color: 'rgba(241,68,76, 1)',
              },
              areaStyle: {
                //区域填充样式
                normal: {
                  //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: 'rgba(241,68,76, 1)',
                      },
                      {
                        offset: 0.7,
                        color: 'rgba(241,68,76, 0)',
                      },
                    ],
                    false
                  ),
                  shadowBlur: 0, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                },
              },
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' m'
                },
              },
              data: [0, 6000, 6100, 6200, 5800, 6000, 7000],
            },
            {
              name: '流速(L/s)',
              type: 'line',
              // smooth:true,
              showSymbol: false,
              z: 1,
              lineStyle: {
                color: 'rgba(245,62,254, 1)',
              },
              itemStyle: {
                color: 'rgba(245,62,254, 1)',
              },
              areaStyle: {
                //区域填充样式
                normal: {
                  //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: 'rgba(245,62,254, 1)',
                      },
                      {
                        offset: 0.7,
                        color: 'rgba(245,62,254, 0)',
                      },
                    ],
                    false
                  ),
                  shadowBlur: 0, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                },
              },
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' m'
                },
              },
              data: [0, 6000, 6100, 6200, 5800, 6000, 7000],
            },
            {
              name: '水位(m)',
              type: 'line',
              // smooth:true,
              showSymbol: false,
              z: 1,
              lineStyle: {
                color: 'rgba(25,254,217, 1)',
              },
              itemStyle: {
                color: 'rgba(25,254,217, 1)',
              },
              areaStyle: {
                //区域填充样式
                normal: {
                  //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: 'rgba(25,254,217, 1)',
                      },
                      {
                        offset: 0.7,
                        color: 'rgba(25,254,217, 0)',
                      },
                    ],
                    false
                  ),
                  shadowBlur: 0, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                },
              },
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' m'
                },
              },
              data: [0, 6000, 6100, 6200, 5800, 6000, 7000],
            },
            {
              name: '降雨量',
              type: 'line',
              // smooth:true,
              z: 2,
              lineStyle: {
                color: 'rgb(109,183,243)',
              },
              showSymbol: false,
              itemStyle: {
                color: 'rgb(109,183,243)',
              },
              areaStyle: {
                //区域填充样式
                normal: {
                  //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: 'rgb(109,183,243)',
                      },
                      {
                        offset: 0.7,
                        color: 'rgba(109,183,243, 0)',
                      },
                    ],
                    false
                  ),
                  shadowBlur: 0, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                },
              },
              yAxisIndex: 1,
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' m3/s'
                },
              },
              data: [0.2, 0.3, 0.5, 0.7, 0.6, 0.1],
            },
          ],
        }
        echartDom.setOption(echartDomOption)
      },
    },
  }
</script>

<style scoped>
  #jcdsjEcharts {
    width: 99%;
    height: calc(100% - 42px);
  }

  .widget-main {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 500px;
    padding: 20px;
    overflow: auto;
  }

  .widget-left {
    position: relative;
    width: 50%;
    padding: 20px;
  }

  .widget-right {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .right-top {
    align-self: flex-end;
    margin-right: 20px;
  }

  #container {
    width: 100%;
    height: 100%;
  }

  .mapControl {
    position: absolute;
    bottom: 40px;
    left: 40px;
    z-index: 999;
    padding: 20px;
    background-color: #e5eff8;
  }

  .el-checkbox-group {
    display: flex;
    flex-direction: column;
  }

  .el-checkbox + .el-checkbox {
    margin-top: 10px;
  }

  .amap-logo,
  .amap-copyright {
    display: none !important;
  }
</style>
