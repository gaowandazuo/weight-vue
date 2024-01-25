<template>
  <div class="weight-box">
    <div class="widget-header">
      <div class="name">
        <span :class="{ active: showIframe === 0 }" @click="changeIframe(0)">
          项目建设情况
        </span>
      </div>
    </div>
    <div class="widget-main">
      <div id="myChart" class="chart-box"></div>
    </div>
  </div>
</template>
<script>
  import * as echarts5 from 'echarts5'
  import axios from 'axios'
  export default {
    name: 'Index',
    data() {
      return {
        showIframe: 0,
        sanData: [
          // 散点数据
          {
            name: '万宁市',
            value: [10, 1],
            LngAndLat: [110.33, 18.8868],
          },
          {
            name: '三亚市',
            value: [10, 1],
            LngAndLat: [109.4301, 18.414],
          },
          {
            name: '东方市',
            value: [10, 1],
            LngAndLat: [108.9112, 19.0388],
          },
          {
            name: '临高县',
            value: [10, 1],
            LngAndLat: [109.7392, 19.8194],
          },
          {
            name: '乐东黎族自治县',
            value: [10, 1],
            LngAndLat: [109.085, 18.7051],
          },
          {
            name: '五指山市',
            value: [10, 1],
            LngAndLat: [109.5584, 18.8555],
          },
          {
            name: '保亭黎族苗族自治县',
            value: [10, 1],
            LngAndLat: [109.6667, 18.648],
          },
          {
            name: '儋州市',
            value: [10, 1],
            LngAndLat: [109.3811, 19.5881],
          },
          {
            name: '定安县',
            value: [10, 1],
            LngAndLat: [110.3701, 19.502],
          },
          {
            name: '屯昌县',
            value: [10, 1],
            LngAndLat: [110.0708, 19.3852],
          },
          {
            name: '文昌市',
            value: [10, 1],
            LngAndLat: [110.7894, 19.8008],
          },
          {
            name: '昌江黎族自治县',
            value: [10, 1],
            LngAndLat: [109.0211, 19.2311],
          },
          {
            name: '海口市',
            value: [10, 1],
            LngAndLat: [110.4605, 19.8378],
          },
          {
            name: '澄迈县',
            value: [10, 1],
            LngAndLat: [110.0265, 19.7305],
          },
          {
            name: '琼中黎族苗族自治县',
            value: [10, 1],
            LngAndLat: [109.8904, 19.1039],
          },
          {
            name: '琼海市',
            value: [10, 1],
            LngAndLat: [110.4368, 19.25],
          },
          {
            name: '白沙黎族自治县',
            value: [10, 1],
            LngAndLat: [109.4015, 19.2482],
          },
          {
            name: '陵水黎族自治县',
            value: [10, 1],
            LngAndLat: [110.0089, 18.6216],
          },
        ],
      }
    },
    mounted() {
      setTimeout(this.initCharts(), 500)
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
      convertData(data) {
        // 处理数据函数
        var res = []
        for (var i = 0; i < data.length; i++) {
          // data = 0

          var geoCoord = data[i].LngAndLat
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
            })
          }
        }
        return res
      },
      initCharts() {
        var myChart = echarts5.init(document.getElementById('myChart'))
        //表格宽度根据
        myChart.showLoading()
        var option
        axios.get('/json/hn.json').then((res) => {
          myChart.hideLoading()
          echarts5.registerMap('cityBoundaries', {
            geoJSON: res.data.cityBoundaries,
          })
          echarts5.registerMap('provincialBoundaries', {
            geoJSON: res.data.provincialBoundaries,
          })
          echarts5.registerMap('river', {
            geoJSON: res.data.river,
          })

          option = {
            legend: {
              orient: 'vertical',
              left: '6%',
              bottom: '6%',
              itemGap: 20,
              itemHeight: 25,
              itemWidth: 25,
              textStyle: {
                padding: [0, 0, 20, 0],
                rich: {
                  a: {
                    padding: 0,
                  },
                },
              },
              icon: 'pin',
              data: ['在建', '已建'],
            },
            tooltip: {
              trigger: 'item',
            },
            //animation: false,
            geo: {
              name: '省界',
              type: 'map',
              map: 'provincialBoundaries',
              aspectScale: 1,
              z: 1,
              //roam: true,
              center: [109.7012, 19.1996],
              silent: true,
              itemStyle: {
                borderColor: '#0090FF',
                borderWidth: 10,
                borderJoin: 'round',
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 15,
              },
            },
            series: [
              {
                name: '市界',
                type: 'map',
                map: 'cityBoundaries',
                aspectScale: 1,
                z: 2,
                //roam: true,
                center: [109.7012, 19.1996],
                label: {
                  show: true,
                  fontSize: 14,
                },
                silent: true,
                itemStyle: {
                  areaColor: '#fff',
                  borderColor: 'rgba(0, 0, 0, 0.2)',
                  borderJoin: 'round',
                },
                data: [],
                markPoint: {
                  symbol: 'circle',
                  label: {
                    show: true,
                  },
                },
              },
              {
                name: '三大水系',
                type: 'map',
                map: 'river',
                aspectScale: 1,
                zoom: 0.65,
                z: 3,
                //roam: true,
                center: [109.7012, 19.1996],
                silent: true,
                itemStyle: {
                  areaColor: 'rgba(0,214,245,0.4)',
                  borderColor: 'rgba(0,214,245,0.4)',
                  borderWidth: 5,
                  borderJoin: 'round',
                },
              },
              {
                name: '在建',
                type: 'scatter',
                silent: true,
                coordinateSystem: 'geo',
                geoIndex: 0,
                data: this.convertData(this.sanData),
                symbol: 'pin',
                symbolSize: 25,
                itemStyle: {
                  color: '#FFBE00',
                },
                label: {
                  show: true,
                  fontSize: 14,
                  formatter: function (params) {
                    return params.value[2]
                  },
                },
              },
              {
                name: '已建',
                type: 'scatter',
                silent: true,
                coordinateSystem: 'geo',
                geoIndex: 0,
                data: this.convertData(this.sanData),
                symbol: 'pin',
                symbolSize: 25,
                symbolOffset: ['-70%', 0],
                itemStyle: {
                  color: '#00DEA8',
                },
                label: {
                  show: true,
                  fontSize: 14,
                  formatter: function (params) {
                    return params.value[3]
                  },
                },
              },
            ],
          }

          myChart.setOption(option)
        })
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
    height: 500px;
    margin: 0 auth;
  }
</style>
