<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <head>
      <meta charset="UTF-8" />
      <meta content="IE=9; IE=8; IE=EDGE" http-equiv="X-UA-Compatible" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <title>浪潮智慧水利</title>
    </head>

    <body>
      <div class="mian">
        <div class="widget-header">
          <div class="name">
            <span :class="{ active: showIframe == 0 }" @click="changeIframe(0)">
              生态流量
            </span>
          </div>
        </div>
        <div class="card-content-wrap">
          <div class="table-top">
            <div class="top-item">
              河流名称：
              <el-select v-model="value1" placeholder="请选择">
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div class="top-item">
              月份：
              <el-select v-model="value2" placeholder="请选择">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </div>
          <div class="table-box">
            <el-table :data="listData" height="100%" stripe style="width: 100%">
              <el-table-column label="断面" prop="section" width="150" />
              <el-table-column label="流量(m³/s)" prop="traffic" />
              <el-table-column label="目标值(m³/s)" prop="target" />
              <el-table-column
                label="日均流量满足控制指标的月(年)百分比"
                prop="percentage"
              />
            </el-table>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showIframe: 0,
        value1: '111',
        options1: [
          {
            value: '111',
            label: '昌化江',
          },
        ],
        value2: '111',
        options2: [
          {
            value: '111',
            label: '9月',
          },
        ],
        listData: [
          {
            section: '毛杨站',
            traffic: '10.34',
            target: '10.34',
            percentage: '80%',
          },
          {
            section: '毛杨站',
            traffic: '10.34',
            target: '10.34',
            percentage: '80%',
          },
          {
            section: '毛杨站',
            traffic: '10.34',
            target: '10.34',
            percentage: '80%',
          },
          {
            section: '毛杨站',
            traffic: '10.34',
            target: '10.34',
            percentage: '80%',
          },
          {
            section: '毛杨站',
            traffic: '10.34',
            target: '10.34',
            percentage: '80%',
          },
          {
            section: '毛杨站',
            traffic: '10.34',
            target: '10.34',
            percentage: '80%',
          },
          {
            section: '毛杨站',
            traffic: '10.34',
            target: '10.34',
            percentage: '80%',
          },
          {
            section: '毛杨站',
            traffic: '10.34',
            target: '10.34',
            percentage: '80%',
          },
          {
            section: '毛杨站',
            traffic: '10.34',
            target: '10.34',
            percentage: '80%',
          },
        ],
      }
    },
    mounted() {},
    methods: {
      changeIframe(val) {
        this.showIframe = val
        switch (val) {
          case 0:
            break
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .card-content-wrap {
    padding: 0px 20px;
  }

  .table-top {
    display: flex;
    margin: 20px 0px;
  }

  .top-item + .top-item {
    margin-left: 20px;
  }

  .table-box {
    width: 100%;
    height: calc(100% - 100px);
  }
</style>
