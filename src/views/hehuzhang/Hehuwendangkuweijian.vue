<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="widget-header">
      <div class="name">
        <span class="active">河湖文档库微件</span>
      </div>
    </div>
    <div class="widget-main">
      <div class="bar">
        <div class="bar-left">
          <span>河段行政区</span>
          <el-select v-model="hdValue" placeholder="请选择河段行政区">
            <el-option
              v-for="(item, index) in ['海南省']"
              :key="index"
              :label="item"
            />
          </el-select>
          <span>河流分类</span>
          <el-select v-model="RCValue" placeholder="请选择河流分类">
            <el-option
              v-for="(item, index) in ['省级']"
              :key="index"
              :label="item"
              :value="item"
            />
          </el-select>
          <span>河流名称</span>
          <el-input v-model="RNValue" placeholder="请输入河流名称" />
          <el-button icon="el-icon-search" type="primary">搜索</el-button>
          <el-button icon="el-icon-search" type="primary">重置</el-button>
        </div>
        <div class="bar-right">
          <el-button icon="el-icon-upload2">导出</el-button>
        </div>
      </div>
      <div class="table-box" style="padding-top: 15px">
        <el-table
          border
          :data="tableData"
          height="100%"
          stripe
          style="width: 100%"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column
            align="center"
            label="序号"
            type="index"
            width="70"
          />
          <el-table-column
            align="center"
            label="河流名称"
            prop="hlmc"
            show-overflow-tooltip
          />
          <el-table-column align="center" label="河流长度（km）" prop="hlcd" />
          <el-table-column align="center" label="河流分类" prop="hlfl" />
          <el-table-column align="center" label="行政区" prop="xzq" />
          <el-table-column
            align="center"
            label="河流起点所在位置"
            prop="hlqd"
            show-overflow-tooltip
          />
          <el-table-column
            align="center"
            label="河流重点所在位置"
            prop="hlzd"
            show-overflow-tooltip
          />
          <el-table-column
            align="center"
            label="流经地区"
            prop="ljdq"
            show-overflow-tooltip
          />
          <el-table-column
            align="center"
            label="河流流域面积（km²）"
            prop="lymj"
          />
          <el-table-column align="center" label="关联河长名称" prop="hzmc" />
          <el-table-column align="center" fixed="right" label="操作" width="80">
            <!-- eslint-disable-next-line vue/no-unused-vars -->
            <template slot-scope="{ row }">
              <el-button style="color: #5191ec" type="text">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hdValue: '',
        RCValue: '',
        RNValue: '',
        tableData: [
          {
            hlmc: '南渡江',
            hlcd: '352.55',
            hlfl: '省级',
            xzq: '海南省',
            hlqd: '昌江县王下乡霸王岭',
            hlzd: '海口市美兰区灵山镇东河村旁',
            ljdq: '海口（72.63）、定安（13.68）',
            lymj: '7066',
            hzmc: '毛万春',
          },
          {
            hlmc: '昌化江',
            hlcd: '243.49',
            hlfl: '省级',
            xzq: '海南省',
            hlqd: '五指山市水满乡方龙村旁',
            hlzd: '东方市四更镇旦场园村旁',
            ljdq: '昌江（64.39）、东方（99.18）',
            lymj: '4990',
            hzmc: '刘平治',
          },
          {
            hlmc: '万泉河',
            hlcd: '178.14',
            hlfl: '省级',
            xzq: '海南省',
            hlqd: '琼中县营根镇五指山保护区',
            hlzd: '琼海市博鳌镇鳌村旁',
            ljdq: '琼海（97.97）、万宁（28.54）',
            lymj: '3692',
            hzmc: '李军',
          },
          {
            hlmc: '新吴溪',
            hlcd: '113.71',
            hlfl: '省级',
            xzq: '海南省',
            hlqd: '屯昌县枫木镇国营南吕农场',
            hlzd: '定安县定城镇罗温村旁',
            ljdq: '海口（3.47）、澄迈（11.86）',
            lymj: '1298',
            hzmc: '何西庆',
          },
          {
            hlmc: '定安河',
            hlcd: '99.62',
            hlfl: '省级',
            xzq: '海南省',
            hlqd: '琼中县红毛镇国营新伟农场',
            hlzd: '琼海市石壁镇下郎村旁',
            ljdq: '琼海（21.76）、琼中（77.87）',
            lymj: '1224',
            hzmc: '闫希军',
          },
        ],
      }
    },
    created() {},
    mounted() {},
    methods: {},
  }
</script>

<style type="text/css" scoped>
  .badge {
    position: absolute;
    top: -5px;
    right: -10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: auto;
    min-width: 20px;
    height: 20px;
    padding: 0px 5px;
    font-size: 12px;
    line-height: 20px;
    color: #d41414;
    text-align: center;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 0 5px 0px rgb(91 186 255 / 65%);
  }

  .bar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 20px;
  }

  .bar-left {
    display: flex;
    align-items: center;
  }

  .bar-left span {
    width: 70px;
    margin-left: 25px;
    font-weight: bold;
  }

  .bar-left .el-select {
    width: 150px;
  }

  .bar-left .el-input {
    width: 150px;
  }

  .bar-left .el-button {
    padding: 8px 10px;
    margin-left: 25px;
    border-radius: 2px;
  }

  .bar-right {
    display: flex;
    align-items: center;
  }

  .bar-right span {
    font-weight: bold;
  }

  .bar-right .el-button {
    padding: 8px 10px;
    border-radius: 2px;
  }
</style>
