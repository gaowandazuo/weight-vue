<template>
  <div shadow="hover">
    <vab-chart
      :init-options="initOptions"
      :option="option"
      style="height: 283px"
      theme="vab-echarts-theme"
    />
  </div>
</template>

<script>
  import axios from 'axios'
  import VabChart from '@/extra/VabChart'
  import _ from 'lodash'

  export default {
    components: {
      VabChart,
    },
    data() {
      return {
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
        // 中国地图
        option: {},
      }
    },
    created() {
      this.getMap()
    },
    methods: {
      async getMap() {
        const { data } = await axios({
          url: 'json/china.json',
          method: 'get',
        })
        VabChart.registerMap('china', data)
        this.option = {
          title: {
            text: '2023年全国项目分布',
            subtext: '',
          },
          tooltip: {
            trigger: 'item',
          },
          dataRange: {
            min: 0,
            max: 20,
            text: ['高', '低'],
            splitNumber: 0,
          },
          series: [
            {
              name: '2023年全国项目分布',
              type: 'map',
              roam: false,
              map: 'china',
              selectedMode: 'multiple',
              emphasis: {
                label: {
                  show: true,
                },
              },
              data: [
                { name: '西藏', value: 6 },
                { name: '青海', value: 6 },
                { name: '宁夏', value: 2 },
                { name: '海南', value: 2 },
                { name: '甘肃', value: 5 },
                { name: '贵州', value: 5 },
                { name: '新疆', value: 6 },
                { name: '云南', value: 8 },
                { name: '重庆', value: 1 },
                { name: '吉林', value: 1 },
                { name: '山西', value: 1 },
                { name: '天津', value: 1 },
                { name: '江西', value: 1 },
                { name: '广西', value: 1 },
                { name: '陕西', value: 3 },
                { name: '黑龙江', value: 2 },
                { name: '内蒙古', value: 3 },
                { name: '安徽', value: 0 },
                { name: '北京', value: 6 },
                { name: '福建', value: 0 },
                { name: '上海', value: 1 },
                { name: '湖北', value: 9 },
                { name: '湖南', value: 5 },
                { name: '四川', value: 2 },
                { name: '辽宁', value: 2 },
                { name: '河北', value: 2 },
                { name: '河南', value: 2 },
                { name: '浙江', value: 3 },
                { name: '山东', value: 18, selected: true },
                { name: '江苏', value: 4 },
                { name: '广东', value: 5 },
              ],
            },
          ],
        }
      },
    },
  }
</script>
