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
            <div class="center">
              <div>年份：</div>
              <div>
                <el-dropdown @command="handleCommand">
                  <el-button plain size="mini">
                    {{ disYear }}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="2020">2020</el-dropdown-item>
                    <el-dropdown-item command="2021">2021</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
            <div class="center">
              <div>耗水量：</div>
              <div>
                <template v-if="disYear === '2021'">58.45亿m³</template>
                <template v-else-if="disYear === '2020'">50.38亿m³</template>
              </div>
            </div>
            <div class="bottom">
              <div>同比增减：</div>
              <div>
                <template v-if="disYear === '2021'">
                  增加8.07亿m³
                  <img src="../../assets/gongshui_images/icon-up.png" />
                </template>
                <template v-else-if="disYear === '2020'">
                  下降7.24亿m³
                  <img src="../../assets/gongshui_images/icon-down.png" />
                </template>
              </div>
            </div>
          </div>
          <div id="haoshuiChartsTop" class="right-wrap"></div>
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
        disYear: '2021',
      }
    },
    mounted() {
      this.initEcharts()
      const echartDomElement = document.getElementById('haoshuiChartsTop')
      // 设置居中样式
      if (echartDomElement) {
        echartDomElement.style.margin = 'auto' // 设置水平居中
        echartDomElement.style.display = 'flex' // 使用 Flex 布局
        echartDomElement.style.justifyContent = 'center' // 设置水平居中
        echartDomElement.style.alignItems = 'center' // 设置垂直居中
      }
    },
    methods: {
      changeIframe(val) {
        this.showIframe = val
        switch (val) {
          case 0:
            break
        }
      },
      handleCommand(command) {
        this.disYear = command
        this.initEcharts()
      },
      initEcharts() {
        const echarts = require('echarts')

        let echartDom = echarts.init(
          document.getElementById('haoshuiChartsTop')
        )
        let datas
        if (this.disYear === '2021') {
          datas = [
            { value: 1.15, name: '人工生态环境' },
            { value: 1.21, name: '城镇公共用水' },
            { value: 6.37, name: '城乡居民生活' },
            { value: 8.25, name: '林牧渔畜' },
            { value: 11.19, name: '工业' },
            { value: 30.28, name: '农田灌溉' },
          ]
        } else if (this.disYear === '2020') {
          datas = [
            { value: 1.03, name: '人工生态环境' },
            { value: 1.36, name: '城镇公共用水' },
            { value: 5.62, name: '城乡居民生活' },
            { value: 5.8, name: '林牧渔畜' },
            { value: 10.52, name: '工业' },
            { value: 26.04, name: '农田灌溉' },
          ]
        }
        echartDom.setOption(this.echartDomOption(datas))
      },
      echartDomOption(data) {
        const echarts = require('echarts')

        return {
          color: [
            new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: 'rgba(255, 207, 149, 1)',
              },
              {
                offset: 1,
                color: 'rgba(253, 174 ,80, 1)',
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: 'rgba(155 ,235, 225, 1)',
              },
              {
                offset: 1,
                color: 'rgba(25, 210, 186, 1)',
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: 'rgba(162, 214 ,255, 1)',
              },
              {
                offset: 1,
                color: 'rgba(106, 190 ,255, 1)',
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: 'rgba(119 ,212 ,255, 1)',
              },
              {
                offset: 1,
                color: 'rgba(23 ,181, 255, 1)',
              },
            ]),

            new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: 'rgba(223,209,255, 1)',
              },
              {
                offset: 1,
                color: 'rgba(205,180,255, 1)',
              },
            ]),

            new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: 'rgba(204,179,255, 1)',
              },
              {
                offset: 1,
                color: 'rgba(159, 121, 238, 1)',
              },
            ]),
          ],
          tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0,0,0,0.6)', //设置背景图片 rgba格式
            color: '#fff',
            borderWidth: '1', //边框宽度设置1
            borderColor: 'rgba(0,0,0,0.6)', //设置边框颜色
            textStyle: {
              color: '#fff', //设置文字颜色
            },
          },
          series: [
            {
              type: 'funnel',
              left: '0%',
              right: '55%',
              top: '10%',
              bottom: '10%',
              minSize: '0%',
              maxSize: '80%',
              width: '55%',
              gap: 5,
              sort: 'ascending',
              label: {
                show: true,
                // position: 'inside',
                // formatter: "{b}  ({c}万)",
                formatter: function (params) {
                  return params.name + params.percent + '%'
                },
                color: '#8F919B',
                fontSize: 13,
                position: 'right',
              },
              labelLine: {
                length: 50,
                lineStyle: {
                  width: 1,
                  type: 'solid',
                  color: '#8F919B',
                },
              },
              data: data,
            },
          ],
        }
      },
    },
  }
</script>

<style scoped>
  .card-content-wrap {
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    overflow: auto;
  }

  .card-top-wrap,
  .card-bottom-wrap {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .left-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 120px;
    height: 400px;
    font-size: 0.8em;
  }

  .top {
    font-weight: 600;
  }

  .bottom,
  .center {
    width: 100%;
    line-height: 2;
  }

  .bottom img {
    margin-left: 10px;
  }

  .bottom div,
  .center div {
    width: 80%;
  }

  .right-wrap {
    width: 300px;
    height: 400px;
  }

  .el-dropdown {
    font-size: 1em !important;
    color: #000 !important;
    cursor: pointer;
  }
</style>
