<template>
  <div class="authorization">
    <vab-chart
      :init-options="initOptions"
      :option="option"
      theme="vab-echarts-theme"
    />
    <div class="bottom">
      <span>
        数据更新数:
        <vab-count
          :decimals="countConfig.decimals"
          :duration="countConfig.duration"
          :end-val="countConfig.endVal"
          :prefix="countConfig.prefix"
          :separator="countConfig.separator"
          :start-val="countConfig.startVal"
          :suffix="countConfig.suffix"
        />
        <el-tag class="card-footer-tag" type="success">倒计时 {{ n }}s</el-tag>
      </span>
    </div>
  </div>
</template>

<script>
  import VabChart from '@/extra/VabChart'
  import VabCount from '@/extra/VabCount'
  import _ from 'lodash'

  export default {
    components: {
      VabChart,
      VabCount,
    },
    beforeRouteLeave(to, from, next) {
      clearInterval(this.timer)
      next()
    },
    data() {
      return {
        timer: null,
        n: 5,
        countConfig: {
          startVal: 0,
          endVal: _.random(1000, 20000),
          decimals: 0,
          prefix: '',
          suffix: '',
          separator: ',',
          duration: 8000,
        },
        initOptions: {
          renderer: 'svg',
        },
        // 授权数
        option: {
          tooltip: {
            trigger: 'axis',
            extraCssText: 'z-index:1',
          },
          grid: {
            top: '5%',
            left: '2%',
            right: '4%',
            bottom: '0%',
            containLabel: true,
          },
          xAxis: [
            {
              type: 'category',
              data: ['0时', '4时', '8时', '12时', '16时', '20时', '24时'],
              axisTick: {
                alignWithLabel: true,
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
            },
          ],
          series: [
            {
              name: '授权数',
              type: 'bar',
              barWidth: '60%',
              data: [10, 52, 20, 33, 39, 33, 22],
              itemStyle: {
                borderRadius: [2, 2, 0, 0],
                color: new VabChart.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  ['#88D1FF', '#1890FF'].map((color, offset) => ({
                    color,
                    offset,
                  }))
                ),
              },
            },
          ],
        },
      }
    },
    mounted() {
      this.timer = setInterval(() => {
        if (this.n > 0) {
          this.n--
        } else {
          this.option.series[0].type = _.sample(
            _.pull(['line', 'bar', 'scatter'], [this.option.series[0].type])
          )
          this.n = 5
        }
      }, 1000)
    },
  }
</script>
<style lang="scss" scoped>
  .authorization {
    height: 20vh;
    margin-top: 3vh;
  }
</style>
