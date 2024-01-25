<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app">
    <div class="widget-header">
      <div class="name">
        <span :class="{ active: showIframe == 0 }" @click="changeIframe(0)">
          巡河动态
        </span>
      </div>
    </div>
    <div class="widget-main">
      <div class="chart-box">
        <div class="info-search">
          <div class="search-box">
            <span class="search-name">年份</span>
            <el-select v-model="year" placeholder="请选择">
              <el-option
                v-for="item in yearl"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="search-box">
            <span class="search-name">政区</span>
            <el-select v-model="position" placeholder="请选择">
              <el-option
                v-for="item in positionl"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
        <div id="map" class="map"></div>
      </div>
      <div class="info-box">
        <div v-if="isShow" class="info-table" style="z-index: 10">
          <div class="close-btn" @click="isShow = false">X</div>
          <div class="info-search">
            <div class="search-box">
              <span class="search-name">年份</span>
              <el-select v-model="year1" placeholder="请选择">
                <el-option
                  v-for="item in yearl"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div class="search-box">
              <span class="search-name">政区</span>
              <el-select v-model="position1" placeholder="请选择">
                <el-option
                  v-for="item in positionl"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </div>
          <div class="info-search">
            <div class="search-box">
              <span class="search-name">记录方式</span>
              <el-select v-model="recording" placeholder="请选择">
                <el-option
                  v-for="item in recordingMethod"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div class="search-box">
              <span class="search-name">处理状态</span>
              <el-select v-model="processing" placeholder="请选择">
                <el-option
                  v-for="item in processingStatus"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </div>
          <el-table :data="tableData" height="125px" stripe style="width: 100%">
            <el-table-column
              align="center"
              label="序号"
              type="index"
              width="100"
            />
            <el-table-column align="center" label="时间" prop="sj" />
            <el-table-column align="center" label="河湖名称" prop="name" />
            <el-table-column align="center" label="记录方式" prop="type" />
            <el-table-column align="center" label="问题" prop="wt" />
            <el-table-column align="center" label="处理状态" prop="zt" />
          </el-table>
          <el-pagination
            :current-page="currentPage"
            layout="total, sizes, prev, pager, next, jumper"
            :page-size="2"
            :total="2"
          />
        </div>
        <div class="all-xx">
          <div class="all-box">
            <img src="../../assets/images/icon-all1.png" />
            <span class="name">巡河次数</span>
            <span class="num">
              <font>2</font>
              次
            </span>
          </div>
          <div class="all-box">
            <img src="../../assets/images/icon-all2.png" />
            <span class="name">巡河里程</span>
            <span class="num">
              <font>12</font>
              千米
            </span>
          </div>
          <div class="all-box">
            <img src="../../assets/images/icon-all3.png" />
            <span class="name">正在巡河</span>
            <span class="num">
              <font>2</font>
              人
            </span>
          </div>
        </div>
        <div class="fl-xx">
          <div class="fl-box">
            <div class="fl-info">
              <p class="num">
                <span>6</span>
                个
              </p>
              <p class="name">巡河事件</p>
            </div>
            <div id="chart1" class="fl-chart"></div>
          </div>
          <div class="fl-box">
            <div class="fl-info">
              <p class="num">
                <span>8</span>
                个
              </p>
              <p class="name">群众举报</p>
            </div>
            <div id="chart2" class="fl-chart"></div>
          </div>
        </div>
        <div class="bl-xx">
          <div class="bl-box" @click="handleClick('待受理')">
            <div class="bl-img">
              <img src="../../assets/images/icon-bl1.png" />
            </div>
            <div class="bl-info">
              <p class="num">
                <span>3</span>
                个
              </p>
              <p class="name">待受理</p>
            </div>
          </div>
          <div class="bl-box" @click="handleClick('办理中')">
            <div class="bl-img">
              <img src="../../assets/images/icon-bl2.png" />
            </div>
            <div class="bl-info">
              <p class="num">
                <span>5</span>
                个
              </p>
              <p class="name">办理中</p>
            </div>
          </div>
          <div class="bl-box" @click="handleClick('已办结')">
            <div class="bl-img">
              <img src="../../assets/images/icon-bl3.png" />
            </div>
            <div class="bl-info">
              <p class="num">
                <span>6</span>
                个
              </p>
              <p class="name">已办结</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import hainan from '@/assets/460000.json'
  // import 'echarts/map/js/china.js'

  // import 'echarts/map/js/province/hainan.js'
  import hainan from 'echarts/map/json/province/hainan.json'
  import axios from 'axios'
  export default {
    data() {
      return {
        showIframe: 0,
        showTab: 0,
        yearl: [
          { value: '2021', label: '2021年' },
          { value: '2020', label: '2020年' },
          { value: '2019', label: '2019年' },
          { value: '2018', label: '2018年' },
        ],
        year: '2021',
        year1: '2021',
        positionl: [
          { value: '0', label: '澄迈县' },
          { value: '1', label: '澄迈县' },
          { value: '2', label: '澄迈县' },
          { value: '3', label: '澄迈县' },
        ],
        position: '0',
        position1: '0',
        recordingMethod: [{ value: '0', label: '巡河事件' }],
        recording: '0',
        processingStatus: [
          { value: '0', label: '待受理' },
          { value: '1', label: '办理中' },
          { value: '2', label: '已办结' },
        ],
        processing: '0',
        tableData: [
          {
            sj: '2021-08-07 12:12',
            name: '松涛水库',
            type: '巡河事件',
            wt: '漂浮物',
            zt: '待受理',
          },
          {
            sj: '2021-08-07 10:20',
            name: '松涛水库',
            type: '巡河事件',
            wt: '漂浮物',
            zt: '待受理',
          },
        ],
        currentPage: 1,
        isShow: false,
      }
    },
    created() {},
    mounted() {
      this.chart(33, 'chart1', '#69adff')
      this.chart(50, 'chart2', '#00cb90')
      this.map()
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
      handleClick(state) {
        this.isShow = true
        this.tableData.forEach((item) => {
          item.zt = state
        })
      },
      map() {
        const echarts = require('echarts')
        echarts.registerMap('hainan', hainan)
        var myChart = echarts.init(document.getElementById('map'))
        var mapSelect = [
          //默认选中区域
          {
            name: '海口市',
            selected: true,
          },
        ]
        // console.log('hainan', hainan)
        // let uploadedDataURL = '460000.json'
        // axios.get(uploadedDataURL, {}).then((res) => {

        var option = {
          tooltip: {
            show: true,
            trigger: 'item',
            axisPointer: {
              type: 'shadow',
            },
          },
          grid: {
            height: '100%',
            width: '100%',
          },
          geo: {
            map: 'hainan',
            label: {
              show: true,
            },
            regions: mapSelect,
            top: 'center',
            left: 'center',
            roam: false,
            zoom: 1,
            itemStyle: {
              areaColor: 'rgb(210, 241, 255)',
              borderColor: 'rgb(3, 151, 255)',
              shadowColor: 'rgb(210, 241, 255)',
              shadowBlur: 10,
              borderWidth: 2,
            },
          },

          series: [
            {
              name: 'hainan',
              type: 'map',
              top: 'center',
              left: 'center',
              label: {
                normal: {
                  show: true,
                  position: 'inner',
                },
                emphasis: {
                  show: true,
                },
              },
              itemStyle: {
                normal: {
                  areaColor: 'rgb(209, 241, 254)',
                  borderColor: 'rgb(61, 171, 254)',
                  borderWidth: 2,
                  label: {
                    show: true,
                    color: 'rgb(93, 107, 112)',
                    fontSize: '90%',
                  },

                  emphasis: {
                    label: {
                      show: true,
                    },
                  },
                },
              },

              select: {
                itemStyle: {
                  areaColor: '#41cafc',
                },
              },
              //鼠标移入
              emphasis: {
                itemStyle: {
                  areaColor: 'rgb(255, 215, 147)',
                  //color: 'rgb(255,255,255)'
                },
              },
              markPoint: {
                symbol: 'pin',
              },
              data: [
                {
                  name: '儋州市',
                  value: 321.05,
                },
                {
                  name: '海口市',
                  value: 321.05,
                },
                {
                  name: '文昌市',
                  value: 321.05,
                },
                {
                  name: '乐东黎族自治县',
                  value: 321.05,
                },
                {
                  name: '三亚市',
                  value: 321.05,
                },
                {
                  name: '琼中黎族苗族自治县',
                  value: 321.05,
                },
                {
                  name: '东方市',
                  value: 321.05,
                },
                {
                  name: '万宁市',
                  value: 321.05,
                },
                {
                  name: '澄迈县',
                  value: 321.05,
                },
                {
                  name: '白沙黎族自治县',
                  value: 321.05,
                },
                {
                  name: '琼海市',
                  value: 321.05,
                },
                {
                  name: '昌江黎族自治县',
                  value: 321.05,
                },
                {
                  name: '临高县',
                  value: 321.05,
                },
                {
                  name: '陵水黎族自治县',
                  value: 321.05,
                },
                {
                  name: '屯昌县',
                  value: 321.05,
                },
                {
                  name: '定安县',
                  value: 321.05,
                },
                {
                  name: '保亭黎族苗族自治县',
                  value: 321.05,
                },
                {
                  name: '五指山市',
                  value: 321.05,
                },
              ],
            },
          ],
        }
        myChart.setOption(option)
        myChart.on('click', (params) => {
          console.log(params)
          option.geo.regions = [
            {
              name: params.name,
              selected: true,
            },
          ]
          myChart.clear()
          myChart.setOption(option)
          //逻辑控制
        })
        // })
      },
      chart(val, id, color) {
        const echarts = require('echarts')
        var myChart = echarts.init(document.getElementById(id))
        let noramlSize = 16
        var datas = {
          value: val,
          company: '%',
          //  ringColor: ['#69ACFE']
        }
        var option = {
          title: {
            text: datas.value + datas.company + '\n' + '办结率',
            x: 'center',
            y: 'center',
            textStyle: {
              fontWeight: 'normal',
              color: '#000',
              fontSize: '16',
            },
          },
          color: ['#DEDEDE'],
          legend: {
            show: false,
            data: [],
          },

          series: [
            {
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              radius: ['50%', '60%'],
              itemStyle: {
                normal: {
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                },
              },
              hoverAnimation: false,
              data: [
                {
                  value: datas.value,
                  name: '',
                  itemStyle: {
                    normal: {
                      color: color,
                      label: {
                        show: false,
                      },
                      labelLine: {
                        show: false,
                      },
                    },
                  },
                },
                {
                  name: '',
                  value: 100 - datas.value,
                },
              ],
            },
          ],
        }
        myChart.setOption(option)
      },
    },
  }
</script>

<style scoped>
  .widget-main {
    box-sizing: border-box;
    padding: 0 10px;
  }
  .chart-box,
  .info-box {
    position: relative;
    float: left;
    width: 50%;
    height: 100%;
  }
  .map {
    width: 100%;
    height: calc(100% - 60px);
  }
  .info-search {
    width: 100%;
    height: 40px;
    margin: 10px 0;
  }
  .search-box {
    float: left;
    width: auto;
    height: 40px;
    margin-right: 20px;
    line-height: 40px;
  }
  .search-name {
    margin-right: 10px;
  }
  .all-xx {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 33.33%;
  }
  .all-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 33%;
    height: 60px;
  }
  .all-box span {
    margin: 0 5px;
  }
  .all-box span.name {
    font-size: 16px;
    color: #333;
  }
  .all-box span.num {
    font-size: 14px;
    color: #666;
  }
  .all-box span.num font {
    font-size: 24px;
    font-weight: bolder;
    color: #333;
  }
  .fl-xx {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    width: 100%;
    height: 33.33%;
  }
  .fl-box {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    width: 40%;
    height: 100%;
  }
  .fl-info {
    float: left;
    width: 70px;
    height: 100px;
  }
  .fl-info .num {
    font-size: 14px;
    font-weight: bolder;
    color: #666;
  }
  .fl-info .num span {
    font-size: 24px;
    font-weight: bolder;
    color: #333;
  }
  .fl-info .name {
    font-size: 16px;
    color: #333;
  }
  .fl-chart {
    float: left;
    width: calc(100% - 70px);
    height: 100%;
  }

  .bl-xx {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 33.33%;
  }
  .bl-box {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    width: 30%;
    height: 90px;
    margin: 0 10px;
    cursor: pointer;
    background: #f0f6fb;
    border-radius: 3px;
  }
  .bl-img {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 100%;
  }
  .bl-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 100%;
    margin-left: 5%;
  }
  .bl-info .num {
    font-size: 14px;
    color: #666;
  }
  .bl-info .num span {
    margin-right: 10px;
    font-size: 24px;
    font-weight: bolder;
    color: #333;
  }
  .bl-info p {
    margin: 0 0 5px 0;
  }
  .bl-info .name {
    font-size: 16px;
    color: #333;
  }

  .info-table {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 300px;
    padding: 30px 10px 0 10px;
    background: #fff;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  }
  .el-input {
    width: 120px;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    right: 20px;
    color: #666;
    cursor: pointer;
  }
</style>
