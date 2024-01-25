<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="xmzjd" class="main">
    <div class="widget-header">
      <div class="name">
        <span :class="{ active: showIframe === 0 }" @click="changeIframe(0)">
          项目进度
        </span>
      </div>
    </div>
    <div class="scrollable-page">
      <div class="widget-main">
        <div class="top-wrap">
          <div class="top-item">
            <img alt="" src="../../assets/images/27.png" />
            <div class="top-right">
              <div class="top-title">
                项目总进度:
                <span>25.79%</span>
              </div>
              <div>提前: 0.00%</div>
            </div>
          </div>
          <div class="top-item">
            <img alt="" src="../../assets/images/28.png" />
            <div class="top-right">
              <div class="top-title">
                项目总数:
                <span>262</span>
              </div>
              <div>提前: 0.00%</div>
            </div>
          </div>
          <div class="top-item">
            <img alt="" src="../../assets/images/29.png" />
            <div class="top-right">
              <div class="top-title">
                项目资金:
                <span>65.07亿</span>
              </div>
              <div>提前: 0.00%</div>
            </div>
          </div>
          <div class="top-item">
            <img alt="" src="../../assets/images/30.png" />
            <div class="top-right">
              <div class="top-title">
                年流量控制率:
                <span>86.31%</span>
              </div>
              <div>提前: 0.00%</div>
            </div>
          </div>
        </div>
        <div class="sift-wrap">
          <div class="sift-right">
            名称：
            <el-input v-model="input" placeholder="请输入项目名称" />
            片区筛选：
            <el-input v-model="input1" placeholder="请输入片区筛选" />
            项目大类：
            <el-input v-model="input2" placeholde r="请输入项目大类" />
          </div>
          <el-button type="primary">全部</el-button>
          <el-button type="primary">查询</el-button>
        </div>
        <el-table
          class="table"
          :data="tableData"
          stripe
          style="width: 100%; overflow: auto"
        >
          <el-table-column
            align="center"
            label="序号"
            type="index"
            width="50"
          />
          <el-table-column align="center" label="项目名称" prop="name" />
          <el-table-column align="center" label="运行阶段">
            <template slot-scope="scope">
              <el-tag type="success">{{ scope.row.phase }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column align="center" label="进度" prop="rate" />
          <el-table-column align="center" label="项目类型" prop="type" />
          <el-table-column align="center" label="建设性质">
            <template slot-scope="scope">
              <el-tag>{{ scope.row.nature }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column align="center" label="项目分级">
            <template slot-scope="scope">
              <el-tag type="info">{{ scope.row.grade }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="总投资(万元)"
            prop="investment"
          />
          <el-table-column align="center" label="开工时间" prop="time" />
          <el-table-column align="center" label="建设单位" prop="company" />
          <el-table-column align="center" label="所属片区" prop="area" />
          <el-table-column align="center" label="负责人" prop="person" />
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showIframe: 0,
        input: '',
        input1: '',
        input2: '',
        tableData: [
          {
            name: '卫生学校排洪渠综合整治项目',
            phase: '完工',
            rate: '100%',
            type: '管网及泵站',
            nature: '新建',
            grade: '一般',
            investment: '300',
            time: '2022-01-11',
            company: '中国水利水电第三工程局有限公司',
            area: '片区7',
            person: '任佩光',
          },
          {
            name: '安宁小学排洪渠综合整治项目',
            phase: '完工',
            rate: '100%',
            type: '管网及泵站',
            nature: '新建',
            grade: '一般',
            investment: '236',
            time: '2022-01-11',
            company: '-',
            area: '片区7',
            person: '任佩光',
          },
          {
            name: '卫生学校排洪渠综合整治项目',
            phase: '完工',
            rate: '100%',
            type: '管网及泵站',
            nature: '新建',
            grade: '一般',
            investment: '223',
            time: '2022-01-11',
            company: '-',
            area: '片区7',
            person: '任佩光',
          },
          {
            name: '卫生学校排洪渠综合整治项目',
            phase: '完工',
            rate: '100%',
            type: '管网及泵站',
            nature: '新建',
            grade: '一般',
            investment: '123',
            time: '2022-01-11',
            company: '-',
            area: '片区7',
            person: '任佩光',
          },
          {
            name: '卫生学校排洪渠综合整治项目',
            phase: '完工',
            rate: '100%',
            type: '管网及泵站',
            nature: '新建',
            grade: '一般',
            investment: '567',
            time: '2022-01-11',
            company: '-',
            area: '片区7',
            person: '任佩光',
          },
          {
            name: '卫生学校排洪渠综合整治项目',
            phase: '完工',
            rate: '100%',
            type: '管网及泵站',
            nature: '新建',
            grade: '一般',
            investment: '232',
            time: '2022-01-11',
            company: '-',
            area: '片区7',
            person: '任佩光',
          },
          {
            name: '卫生学校排洪渠综合整治项目',
            phase: '完工',
            rate: '100%',
            type: '管网及泵站',
            nature: '新建',
            grade: '一般',
            investment: '343',
            time: '2022-01-11',
            company: '-',
            area: '片区7',
            person: '任佩光',
          },
          {
            name: '卫生学校排洪渠综合整治项目',
            phase: '完工',
            rate: '100%',
            type: '管网及泵站',
            nature: '新建',
            grade: '一般',
            investment: '123',
            time: '2022-01-11',
            company: '-',
            area: '片区7',
            person: '任佩光',
          },
          {
            name: '卫生学校排洪渠综合整治项目',
            phase: '完工',
            rate: '100%',
            type: '管网及泵站',
            nature: '新建',
            grade: '一般',
            investment: '543',
            time: '2022-01-11',
            company: '-',
            area: '片区7',
            person: '任佩光',
          },
        ],
      }
    },
    mounted() {},
    methods: {
      changeIframe(index) {
        this.showIframe = index
      },
    },
  }
</script>

<style scoped>
  .widget-main {
    display: flex;
    flex-direction: column;
  }

  .top-wrap {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100px;
  }

  .top-item {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 23%;
    height: 100%;
  }

  .top-item img {
    width: 25%;
  }

  .top-right {
    display: flex;
    flex-direction: column;
    width: 65%;
  }

  .top-title {
    padding-bottom: 10px;
    font-size: 18px;
  }

  .top-title span {
    font-size: 20px;
    font-weight: 600;
  }

  .sift-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-left: 20px;
    margin: 20px 0px;
  }

  .sift-right {
    display: flex;
    align-items: center;
  }

  .el-input {
    width: 200px;
    padding: 0px 20px 0px 10px;
  }
  .widget-main {
    padding: 20px;
  }

  .danger {
    color: #f56c6c;
  }
</style>
