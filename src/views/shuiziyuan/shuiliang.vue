<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mian">
    <div class="widget-header">
      <div class="name">
        <span :class="{ active: showIframe == 0 }" @click="changeIframe(0)">
          水量
        </span>
      </div>
    </div>
    <div class="card-content-wrap flip flip-box">
      <!-- 蓄水 -->
      <div class="title-style title-gong-style">
        <span class="title-text-style">蓄水</span>
      </div>
      <div class="wrap">
        <div class="left">
          <img
            class="image-style"
            src="../../assets/shuiziyuan_images/icon-xsl.png"
          />
          <div style="margin-top: 10px">
            <div>当前蓄水量</div>
            <span id="storage" class="text"></span>
            <span class="company">31.57亿m³</span>
          </div>
        </div>
        <div class="right">
          <img
            class="image-style"
            src="../../assets/shuiziyuan_images/icon-kgs.png"
          />
          <div style="margin-top: 10px">
            <div>可供水天数</div>
            <span id="watersupplyone" class="text"></span>
            <span class="company">248天</span>
          </div>
        </div>
      </div>
      <!-- 供水 -->
      <div class="title-style title-gong-style">
        <span class="title-text-style">供水</span>
      </div>
      <div class="wrap" style="background-color: #ffffff">
        <div class="left-style">
          <div style="margin: 0 auto">
            <div>全市总供水量</div>
            <div>
              <span id="provincesupplyone" class="text"></span>
              <span class="company">12.47亿m³</span>
            </div>
          </div>
        </div>
        <div class="right-style">
          <img
            src="../../assets/shuiziyuan_images/icon-957.png"
            style="float: left"
          />
          <div>
            <div>比上年同期</div>
            <div>
              <img
                id="provincesupplyimg"
                src="../../assets/shuiziyuan_images/11.png"
                style="float: left"
              />
              <span id="provincesupplytwo" class="text-red-style text"></span>
              <span class="company">1.56亿m³</span>
            </div>
          </div>
        </div>
      </div>
      <div class="line-style"></div>
      <div class="wrap" style="background-color: #ffffff">
        <div class="left-style">
          <div style="margin: 0 auto">
            <div>全市总用水量</div>
            <span id="urbansupplyone" class="text"></span>
            <span class="company">12.05亿m³</span>
          </div>
        </div>
        <div class="right-style">
          <img
            src="../../assets/shuiziyuan_images/icon-957.png"
            style="float: left"
          />
          <div>
            <div>比上年同期</div>
            <div>
              <img
                id="urbansupplyimg"
                src="../../assets/shuiziyuan_images/11.png"
                style="float: left"
              />
              <span id="urbansupplytwo" class="text-red-style text"></span>
              <span class="company">11.52万m³</span>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap wrap-style">
        <img class="images" src="../../assets/shuiziyuan_images/3.png" />
        <div class="left left-text">
          <div>
            <span id="totalwater" class="text"></span>
            <span class="company">12.47亿m³</span>
            <div>取水口供水量</div>
          </div>
        </div>
        <div class="right right-text">
          <img
            id="totalwaterimg"
            class="arrow-style"
            src="../../assets/shuiziyuan_images/icon-up.png"
          />
          <div>
            <div>比上年同期</div>
            <span id="comparetotalwater" class="text"></span>
            <span class="company">1.59亿m³</span>
          </div>
        </div>
      </div>
      <div class="wrap wrap-style">
        <img class="images" src="../../assets/shuiziyuan_images/111.png" />
        <div class="left left-text">
          <div>
            <span id="tankfarmtotal" class="text"></span>
            <span class="company">7.3亿m³</span>
            <div>水厂供水量</div>
          </div>
        </div>
        <div class="right right-text">
          <img
            id=" 
            tankfarmimg"
            class="arrow-style"
            src="../../assets/shuiziyuan_images/icon-up.png"
          />
          <div>
            <div>比上年同期</div>
            <span id="tankfarmcompare" class="text"></span>
            <span class="company">11%</span>
          </div>
        </div>
      </div>
      <div class="wrap wrap-style">
        <img class="images" src="../../assets/shuiziyuan_images/5.png" />
        <div class="left left-text">
          <div>
            <span id="queryRegisteredConone" class="text"></span>
            <span class="company">10.95亿m³</span>
            <div>二供供水量</div>
          </div>
        </div>
        <div class="right right-text">
          <img
            id="queryRegisteredConimg"
            class="arrow-style"
            src="../../assets/shuiziyuan_images/icon-up.png"
          />
          <div>
            <div>比上年同期</div>
            <span id="queryRegisteredContwo" class="text"></span>
            <span class="company">2.56亿m³</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as echarts from 'echarts'

  export default {
    data() {
      return {
        showIframe: 0,
      }
    },
    mounted() {
      this.chart()
    },
    methods: {
      changeIframe(val) {
        this.showIframe = val
        switch (val) {
          case 0:
            break
        }
      },
      chart() {
        let datetime = new Date()
        let month = datetime.getMonth() + 1
        let myChart = echarts.init(document.getElementById('chart1'))
        let url = 'water/waterstorage'
        let storagenew = []
        let storageold = []

        // eslint-disable-next-line no-undef
        $.ajax({
          type: 'GET',
          // eslint-disable-next-line no-undef
          url: webPath + url,
          success: function (result) {
            let m = document.getElementById('storagethree').innerText
            storagenew = [
              33.64, 33.27, 33.39, 32.91, 33.65, 33.72, 33.67, 33.59,
            ]
            storagenew.push(m, 0, 0, 0)
            for (let i = 0; i < result.data.data.length; i++) {
              storageold.push(result.data.data[i]['DNTQ'])
            }
            let option = {
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow',
                },
              },
              legend: {
                data: ['今年蓄水', '常年同期'],
                top: 0,
                right: 0,
              },

              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
              },
              xAxis: [
                {
                  type: 'category',
                  data: [
                    '1月',
                    '2月',
                    '3月',
                    '4月',
                    '5月',
                    '6月',
                    '7月',
                    '8月',
                    '9月',
                    '10月',
                    '11月',
                    '12月',
                  ],
                },
              ],
              yAxis: [
                {
                  name: '(单位:亿m³)',
                  type: 'value',
                  axisLabel: {
                    formatter: '{value}',
                  },
                },
              ],
              series: [
                {
                  name: '今年蓄水',
                  type: 'bar',
                  itemStyle: {
                    normal: { color: '#48a9f8' },
                  },
                  data: storagenew,
                },
                {
                  name: '常年同期',
                  type: 'bar',
                  itemStyle: {
                    normal: { color: '#8073c5' },
                  },
                  data: storageold,
                },
              ],
            }
            myChart.setOption(option)
          },
        })
      },
    },
  }
</script>
<style scoped>
  body {
    background: #fff;
  }
  .wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 110px;
    background-color: rgb(241, 244, 249);
  }

  .left {
    display: flex;
    justify-content: center;
    float: left;
    width: 200px;
    height: auto;
  }
  .left-style {
    display: flex;
    align-items: center;
    justify-content: left;
    float: left;
    width: 140px;
  }
  .right {
    position: relative;
    left: 1%;
    display: flex;
    justify-content: center;
    width: 49%;
    height: auto;
    overflow: hidden;
    zoom: 1;
  }
  .right-style {
    position: relative;
    left: 1%;
    display: flex;
    align-items: center;
    justify-content: left;
    width: 250px;
    height: auto;
    overflow: hidden;
    zoom: 1;
  }

  .title-text-style {
    font-size: 20px;
    font-weight: 600;
    border-bottom: 3px solid rgb(19, 152, 240);
  }

  .title-style {
    text-align: center;
  }

  .title-gong-style {
    margin-top: 15px;
    border-bottom: 1px solid rgb(244, 244, 244);
  }

  .image-style {
    float: left;
  }

  .text {
    font-size: 24px;
  }

  .company {
    font-weight: 600;
  }

  .wrap-style {
    justify-content: space-between;
    height: 75px;
    margin-top: 30px;
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
    border-bottom-left-radius: 60px;
  }

  .arrow-style {
    float: left;
    height: 20px;
    margin-top: 2%;
    margin-right: 2%;
  }

  .line-style {
    width: 92%;
    height: 1px;
    margin-left: 4%;
    text-align: center;
    border-bottom: 2px dashed rgb(241, 241, 241);
  }

  .text-red-style {
    color: rgb(229, 0, 0);
  }

  .images {
    position: relative;
    top: -2px;
    height: 80%;
    margin-left: 10px;
  }

  .left-text {
    position: relative;
    left: 20px;
    display: flex;
    justify-content: left;
  }

  .right-text {
    position: relative;
    display: flex;
    justify-content: left;
    width: 140px;
  }
  .card-content-wrap {
    height: 500px;
    overflow: auto;
  }
</style>
