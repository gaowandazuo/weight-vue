<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app" class="main">
    <div class="widget-header">
      <div class="name">
        <span :class="{ active: showIframe == 0 }" @click="changeIframe(0)">
          项目管理
        </span>
      </div>
    </div>
    <div class="card-content-wrap">
      <!-- 项目进度 -->
      <div class="bg_box">
        <div class="left">
          <div id="main" style="width: 100%; height: 100%"></div>
        </div>
        <div class="right">
          <!-- 头部 -->
          <div class="top_box">
            <div class="bottom">
              <span>工程</span>
            </div>
          </div>
          <div id="tu" style="width: 100%; height: 100%"></div>
        </div>
      </div>
      <!-- 表格区域 -->
      <div class="table_box">
        <el-table
          border
          :data="tableData"
          :header-row-style="tableRowClassName"
          style="width: 100%"
        >
          <el-table-column
            align="center"
            label="项目名称"
            prop="projectName"
            width="180"
          />
          <el-table-column
            align="center"
            label="投标名称"
            prop="bidName"
            width="180"
          />
          <el-table-column
            align="center"
            label="招投标情况"
            prop="bidCondition"
            width="220"
          />
          <el-table-column
            align="center"
            label="参建单位"
            prop="unit"
            width="180"
          />
          <el-table-column
            align="center"
            label="人员到岗情况"
            prop="personnelOn"
            width="220"
          />
          <el-table-column
            align="center"
            label="督察检察情况"
            prop="inspection"
          />
          <el-table-column
            align="center"
            label="完成进度"
            prop="fulfillment"
            width="180"
          />
          <el-table-column
            align="center"
            label="验收审批情况"
            prop="acceptance"
          />
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sum: 0,
        data: [
          { value: 7, name: '施工中' },
          { value: 5, name: '施工完' },
          { value: 2, name: '延期' },
          { value: 1, name: '未开工' },
        ],
        tableData: [
          {
            projectName: '水厂二期工程',
            bidName: '标段1',
            bidCondition: '已完成招投标',
            unit: '兴眉科技',
            personnelOn: '13',
            inspection: '正常',
            fulfillment: '30%',
            acceptance: '进行中',
          },
          {
            projectName: '水厂二期工程',
            bidName: '标段1',
            bidCondition: '已完成招投标',
            unit: '兴眉科技',
            personnelOn: '13',
            inspection: '正常',
            fulfillment: '30%',
            acceptance: '进行中',
          },
          {
            projectName: '水厂二期工程',
            bidName: '标段1',
            bidCondition: '已完成招投标',
            unit: '兴眉科技',
            personnelOn: '13',
            inspection: '正常',
            fulfillment: '30%',
            acceptance: '进行中',
          },
          {
            projectName: '水厂二期工程',
            bidName: '标段1',
            bidCondition: '已完成招投标',
            unit: '兴眉科技',
            personnelOn: '13',
            inspection: '正常',
            fulfillment: '30%',
            acceptance: '进行中',
          },
          {
            projectName: '水厂二期工程',
            bidName: '标段1',
            bidCondition: '已完成招投标',
            unit: '兴眉科技',
            personnelOn: '13',
            inspection: '正常',
            fulfillment: '30%',
            acceptance: '进行中',
          },
          {
            projectName: '水厂二期工程',
            bidName: '标段1',
            bidCondition: '已完成招投标',
            unit: '兴眉科技',
            personnelOn: '13',
            inspection: '正常',
            fulfillment: '30%',
            acceptance: '进行中',
          },
        ],
      }
    },
    created() {
      this.getSum()
    },
    mounted() {
      this.getEcharts()
      this.getEcharts1()
    },
    methods: {
      getSum() {
        if (this.data) {
          this.data.forEach((item) => {
            this.sum = this.sum + item.value
          })
        }
      }, //获取总数据
      getEcharts() {
        // 基于准备好的dom，初始化echarts实例
        const echarts = require('echarts')
        var myChart = echarts.init(document.getElementById('main'))
        window.addEventListener('resize', function () {
          myChart.resize()
        })
        var _zr = myChart.getZr()

        // 指定图表的配置项和数据
        let option = {
          tooltip: {
            trigger: 'item',
          },
          color: ['#48a9f9', '#00ccb4', '#fdba50', '#747474'], //修改图表颜色
          grid: {
            left: '0%',
            right: '10%',
            containLabel: true,
          },
          legend: {
            top: 'center',
            right: '10%',
            orient: 'vertical',
            itemGap: 10, //图例间距
            itemWidth: 25,
            itemHeight: 15,
            icon: 'circle',
            formatter: (name) => {
              let data = this.data
              let total = 0
              let target
              for (let i = 0, j = data.length; i < j; i++) {
                total += data[i].value
                if (data[i].name == name) {
                  target = data[i].value
                }
              }
              let arr = [
                '{a|' + name + '  }',
                '{b|  ' + target + '}',
                '{c|  ' + '个}',
              ]
              return arr.join('')
            },
            textStyle: {
              rich: {
                a: {
                  width: 60,
                  fontSize: 16,
                },
                b: {
                  width: 40,
                  fontSize: 14,
                },
                c: {
                  width: 10,
                  fontSize: 14,
                },
              },
            },
            data: [
              {
                name: '施工中',
                textStyle: {
                  fontSize: 12,
                  fontWeight: 'bolder',
                },
                icon: 'image:../../assets/images/icon1.png', //格式为'image://+icon文件地址'，
              },
              {
                name: '施工完',
                textStyle: {
                  fontSize: 12,
                  fontWeight: 'bolder',
                },
                icon: 'image:../../assets/images/icon2.png',
              },
              {
                name: '延期',
                textStyle: {
                  fontSize: 12,
                  fontWeight: 'bolder',
                },
                icon: 'image:../../assets/images/icon3.png',
              },
              {
                name: '未开工',
                textStyle: {
                  fontSize: 12,
                  fontWeight: 'bolder',
                },
                icon: 'image:../../assets/images/icon4.png',
              },
            ],
          },
          // 设置环形中间的数据
          graphic: {
            elements: [
              {
                type: 'rect',
                // z: 100,
                right: '35%',
                top: '84%',
                shape: {
                  width: _zr.getWidth() / 2.5,
                  height: 40,
                  r: 20,
                },
                style: {
                  fill: '#f6f6f6',
                  radius: 10,
                },
              },
              {
                type: 'text',
                right: '50%',
                top: '86%',
                z: 20,
                zlevel: 100,
                style: {
                  width: 100,
                  textAlign: 'center',
                  text: '项目总数：' + `${this.sum}`,
                  font: '20px Microsoft YaHei',
                },
              },
            ],
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              top: 'middle',
              width: '80%',
              height: '80%',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: true,
                position: 'center',
                fontSize: 35, //中心文字大小
                formatter: () => {
                  let str = `${this.sum}` + '\n' + '总数'
                  return str
                },
              },
              labelLine: {
                show: false,
              },
              data: this.data,
            },
          ],
        }
        myChart.setOption(option)
      },
      //工程进度
      getEcharts1() {
        const echarts = require('echarts')

        console.log('echarts', echarts)
        console.log('js', document.getElementById('main'))
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('tu'))
        window.addEventListener('resize', function () {
          myChart.resize()
        })
        // 指定图表的配置项和数据
        let option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          legend: {
            show: false,
          },
          grid: {
            left: '14%',
            right: '10%',
            top: '4%',
            bottom: '10%',
            containLabel: true,
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
          },
          yAxis: {
            type: 'category',
            data: [
              '水厂二期工程',
              '水厂二期工程',
              '水厂二期工程',
              '水厂二期工程',
              '水厂二期工程',
              '水厂二期工程',
            ],
          },
          series: [
            {
              name: '2011',
              type: 'bar',
              data: [10, 20, 29, 49, 74, 63],
              itemStyle: {
                normal: {
                  borderRadius: [0, 16, 16, 0],
                  color: '#6BBAF8', // 设置柱子的颜色为红色
                },
              },
            },
            {
              name: '2012',
              type: 'bar',
              data: [19, 23, 31, 12, 41, 68],
              itemStyle: {
                normal: {
                  borderRadius: [0, 16, 16, 0],
                  color: '#30C7B5', // 设置柱子的颜色为红色
                },
              },
            },
          ],
        }
        myChart.setOption(option)
      },
      tableRowClassName({ row, rowIndex }) {
        console.log('res', row, rowIndex)
        if (rowIndex === 0) {
          return 'warning-row'
        }
        return ''
      },
    },
  }
</script>

<style scoped>
  .widget-header {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    padding: 0 20px 0 15px;
    font-size: 18px;
    font-weight: bolder;
  }
  .name {
    display: flex;
    align-items: center;
  }

  .name img {
    margin-right: 10px;
  }
  .active {
    color: #479bfc;
    background: #dbeefe;
  }
  .bg_box {
    display: flex;
    width: 100%;
    height: 50%;
    background: white;
  }

  .left {
    width: 50%;
    /* background-color: wheat; */
    border-right: 1px solid rgba(0, 0, 0, 0.415);
  }

  .right {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
  }

  .top_box {
    width: 100%;
    height: 30px;
    padding: 0px 20px;
    /* background-color: wheat; */
    font-size: 16px;
    font-weight: 700;
  }

  .bottom {
    display: flex;
    align-items: center;
    width: 80%;
    padding: 5px 0px;
    border-bottom: 2px solid;
    /* border-image: linear-gradient(90deg, #7fbfff, #fcfcfc28); */
    border-image: -webkit-linear-gradient(to right, #7fbfff, #fcfcfc00) 1;
    border-image: -moz-linear-gradient(to right, #7fbfff, #fcfcfc00) 1;
    border-image: -o-linear-gradient(to right, #7fbfff, #fcfcfc00) 1;
    border-image: linear-gradient(to right, #7fbfff, #fcfcfc00) 1;
  }

  .bottom img {
    background: wheat;
  }

  .bottom span {
    color: blue;
  }

  .table_box {
    width: 100%;
    margin-top: 20px;
  }

  /* 项目管理微件css结束 */
</style>
