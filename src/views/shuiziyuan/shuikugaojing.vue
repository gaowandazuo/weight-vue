<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app">
    <div class="widget-header">
      <div class="name">
        <span :class="{ active: showIframe === 0 }" @click="changeIframe(0)">
          水库告警
        </span>
      </div>
    </div>
    <div class="widget-main">
      <div class="container main bg-color">
        <div class="box-top-style">
          <div class="box-top-left">
            全省1106座水库当前库容123亿m³，占总库容75%，占正常库容56%，可纳洪库容24亿m³，告警水库8座，自动溢流水库10座
          </div>
          <div id="reservoirEcharts" class="charts"></div>
        </div>

        <div class="table_style">
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column
              align="center"
              label="序号"
              type="index"
              width="60"
            />
            <el-table-column align="center" label="水库" prop="reservoir" />
            <el-table-column align="center" label="类型" prop="type" />
            <el-table-column align="center" label="政区" prop="region" />
            <el-table-column align="center" label="状态" prop="state" />
            <el-table-column
              align="center"
              label="水位-水势"
              prop="waterPotential"
            />
          </el-table>
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
        showTab: 0,
        tableData: [
          {
            reservoir: '松涛水库',
            type: '大型',
            region: '屯昌',
            waterPotential: '105.56',
            state: '超汛限0.1',
            automaticOverflow: '',
          },
          {
            reservoir: '松涛水库',
            type: '大型',
            region: '琼海',
            waterPotential: '100.44',
            state: '超汛限0.1',
            automaticOverflow: '',
          },
          {
            reservoir: '松涛水库',
            type: '大型',
            region: '海口',
            waterPotential: '89.37',
            state: '超汛限0.1',
            automaticOverflow: '',
          },
          {
            reservoir: '松涛水库',
            type: '大型',
            region: '屯昌',
            waterPotential: '75.3',
            state: '超汛限0.1',
            automaticOverflow: '',
          },
          {
            reservoir: '松涛水库',
            type: '大型',
            region: '屯昌',
            waterPotential: '105.56',
            state: '超汛限0.1',
            automaticOverflow: '',
          },
        ],
        checkList: ['选中且禁用', '复选框 A'],
      }
    },
    created() {},
    mounted() {
      this.getEcharts()
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
      tableRowClassName({ row, column, rowIndex, columnIndex }) {
        if ((rowIndex + 1) % 2 === 0) {
          return 'warning-row'
        }
        return ''
      },
      handleClass() {
        return 'text-align: center;background:#f3f8fe;'
      },
      getEcharts() {
        // var _charts = [];
        // window.onresize = function() {
        // 	_charts.forEach(function(item) {
        // 		item.resize();
        // 	})
        // };
        // 初始化图表标签
        const echarts = require('echarts')

        var reservoirEcharts = echarts.init(
          document.getElementById('reservoirEcharts')
        )
        // _charts.push(reservoirEcharts);
        // eslint-disable-next-line no-undef
        let data = [
          {
            name: '有水闸水库告警',
            value: 3,
            percentage: '(大型1座 中型2座)',
          },
          {
            name: '无闸水库告警',
            value: 5,
            percentage: '(中型2座 小（一）型1座 小（二）型2座)',
          },
          {
            name: '无用水库自动溢流',
            value: 10,
            percentage: '(中型4座 小（一）型3座 小（二）型3座)',
          },
        ]
        // eslint-disable-next-line no-undef
        let objData = array2obj(data, 'name')
        let tot = 18

        function array2obj(array, key) {
          var resObj = {}
          for (var i = 0; i < array.length; i++) {
            resObj[array[i][key]] = array[i]
          }
          return resObj
        }
        var option = {
          color: ['#ff0303', '#ff5252', '#fbdc37'],
          legend: {
            show: true,
            icon: 'circle',
            top: 'center',
            right: '0%',
            data: ['有水闸水库告警', '无闸水库告警', '无用水库自动溢流'],
            width: 20,
            padding: [0, 5],
            itemGap: 25,
            formatter: function (name) {
              // eslint-disable-next-line no-undef
              var text = objData[name].percentage
              var result =
                '{title|' +
                name +
                ' ' +
                // eslint-disable-next-line no-undef
                objData[name].value +
                '座' +
                '\n' +
                text.slice(0, 15) +
                '\n' +
                text.slice(15) +
                '}'
              return result
            },

            textStyle: {
              rich: {
                title: {
                  fontSize: 14,
                  // lineHeight: 15,
                  color: '#777777',
                },
              },
            },
          },
          title: [
            {
              text: ['{b|' + tot + '}', '{a|座}'].join('\t\t'),
              x: '25%',
              y: 'center',
              textStyle: {
                rich: {
                  a: {
                    fontWeight: '400',
                    color: 'rgba(0, 0, 0, 1)',
                    fontSize: 14,
                    align: 'center',
                    textAlign: 'right',
                  },
                  b: {
                    fontWeight: '500',
                    color: 'rgba(0, 0, 0, 1)',
                    fontSize: 20,
                  },
                },
              },
            },
          ],
          series: [
            {
              type: 'pie',
              center: ['30%', '50%'],
              radius: ['20%', '50%'],
              label: {
                show: true,
                position: 'outside',
                formatter: ' {c} ',
              },
              labelLine: {
                //引导线设置
                normal: {
                  show: true, //引导线显示
                  length: 5,
                  length2: 5,
                },
              },
              // eslint-disable-next-line no-undef
              data: data,
            },
          ],
        }
        this.$nextTick(() => {
          reservoirEcharts.setOption(option)
        })
      },
    },
  }
</script>

<style scoped>
  .wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .main {
    height: 100%;
    padding: 1rem;
  }

  .flex-1 {
    display: flex;
    flex: 1;

    flex-direction: column;
  }

  .margin-right-2 {
    margin-right: 2%;
  }
  .margin-left-2 {
    margin-left: 2%;
  }

  .margin-right-10 {
    margin-right: 10%;
  }
  .margin-left-10 {
    margin-left: 10%;
  }

  .flex-2 {
    display: flex;
    flex: 2;

    flex-direction: column;
    margin: 0 2%;
  }

  .box-title {
    height: 2em;
    margin-bottom: 1em;
    font-size: 1.4em;
  }

  .box {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
  }
  .box-item {
    flex-basis: 32%;
  }
  .box-top-style {
    display: flex;
    align-items: center;
    height: 50%;
  }
  .row_style {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.15rem;
  }
  .box-top-left {
    display: flex;
    align-items: center;
    width: 32%;
    height: 80%;
    padding: 1rem;
    font-size: 14px;
    line-height: 1.6rem;
    color: #666666;
    background-color: #f5f5f5;
    border: 1px solid #f5f5f5;
    border-radius: 10px;
  }
  .charts {
    /* width: 400px;
    height: 200px; */
    width: 68%;
    height: 100%;
    /* background-color: #e75353; */
  }
  .selected_check_style {
    display: flex;
    float: right;
  }
  .check_text {
    margin-right: 1rem;
  }
  .table_style {
    height: 40%;
  }
  .progressStyle {
    display: inline-block;
    width: 70%;
    padding-right: 4px;
    vertical-align: middle;
  }

  .el-table .cell {
    font-size: 12px;
  }
  .el-table .warning-row {
    background: #f3f8fe;
  }
</style>
