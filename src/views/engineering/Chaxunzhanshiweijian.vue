<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="main">
    <div class="widget-header">
      <div class="name">
        <span class="active">查询展示微件</span>
      </div>
    </div>
    <div class="widget-main">
      <el-table v-show="!isDetail" ref="mytable" :data="tableData" stripe>
        <el-table-column align="center" label="序号" type="index" width="60" />
        <el-table-column label="项目名称" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button size="small" type="text" @click="handleClick(scope.row)">
              {{ scope.row.projectName }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column align="center" label="项目类型" prop="projectType" />
        <el-table-column
          align="center"
          label="项目审批文号"
          prop="projectApproval"
        />
        <el-table-column align="center" label="行政区域" prop="region" />
        <el-table-column align="center" label="创建时间" prop="time" />
      </el-table>
      <el-descriptions v-show="isDetail" border :column="2" title="基本信息">
        <template slot="extra">
          <el-button size="small" type="primary" @click="handleBack">
            返回
          </el-button>
        </template>
        <el-descriptions-item label="单位名称">
          {{ tableData[formIndex].dwmc }}
        </el-descriptions-item>
        <el-descriptions-item label="组织机构代码">
          {{ tableData[formIndex].zzjgdm }}
        </el-descriptions-item>
        <el-descriptions-item label="项目名称">
          {{ tableData[formIndex].projectName }}
        </el-descriptions-item>
        <el-descriptions-item label="行政区域">
          {{ tableData[formIndex].region }}
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions
        v-show="isDetail"
        border
        :column="2"
        style="margin-top: 10px"
        title="水务建设项目信息"
      >
        <el-descriptions-item label="项目审批单位">
          {{ tableData[formIndex].xmspdw }}
        </el-descriptions-item>
        <el-descriptions-item label="项目审批文号">
          {{ tableData[formIndex].projectApproval }}
        </el-descriptions-item>
        <el-descriptions-item label="项目审批时间">
          {{ tableData[formIndex].time }}
        </el-descriptions-item>
        <el-descriptions-item label="建设单位">
          {{ tableData[formIndex].dwmc }}
        </el-descriptions-item>
        <el-descriptions-item label="建设内容" :span="2">
          {{ tableData[formIndex].jsnr }}
        </el-descriptions-item>
        <el-descriptions-item label="设计单位">
          {{ tableData[formIndex].sjdw }}
        </el-descriptions-item>
        <el-descriptions-item label="施工单位">
          {{ tableData[formIndex].sgdw }}
        </el-descriptions-item>
        <el-descriptions-item label="监理单位">
          {{ tableData[formIndex].jldw }}
        </el-descriptions-item>
        <el-descriptions-item label="完成招标时间">
          {{ tableData[formIndex].wczbsj }}
        </el-descriptions-item>
        <el-descriptions-item label="开工时间">
          {{ tableData[formIndex].kgsj }}
        </el-descriptions-item>
        <el-descriptions-item label="竣工验收时间">
          {{ tableData[formIndex].jgyssj }}
        </el-descriptions-item>
        <el-descriptions-item label="项目投资（万元）">
          {{ tableData[formIndex].xmtz }}
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isDetail: false,
        formIndex: 0,
        tableData: [
          {
            i: 0,
            projectName: '海口市观澜湖北区区外排水工程（第一期）', //
            projectType: '水利建设工程', //
            projectApproval: '无', //
            region: '2', //
            time: '2022-04-09 15:18:20',
            dwmc: '',
            zzjgdm: '',

            xmspdw: '海口市发展和改革委员会',
            xmspsj: '1900-01-19',
            jsdw: '海口市松涛灌区水利工程管理处',
            jsnr: '海口市观澜湖北区区外排水工程（第一期）',
            sjdw: '河北省水利水电勘察设计研究院',
            sgdw: '海南省水利水电建筑安装公司',
            jldw: '海南金华宇工程监理有限公司',
            wczbsj: '',
            kgsj: '1900-01-19',
            jgyssj: '1900-01-19',
            xmtz: '5900',
          },
          {
            i: 1,
            projectName: '海口市永庄水源应急工程项目',
            projectType: '水利建设工程',
            projectApproval: '无',
            region: '2',
            time: '2022-04-09 15:18:20',
            dwmc: '',
            zzjgdm: '',

            xmspdw: '海口市发展和改革委员会',
            xmspsj: '',
            jsdw: '海口市松涛灌区水利工程管理处',
            jsnr: '海口市永庄水源应急工程项目',
            sjdw: '河北省水利水电勘察设计研究院',
            sgdw: '海南第一建设工程有限公司',
            jldw: '海南世佳工程勘察设计咨询有限公司',
            wczbsj: '',
            kgsj: '1900-01-19',
            jgyssj: '1900-01-19',
            xmtz: '4004.93',
          },
          {
            i: 2,
            projectName: '南渡江海口市综合治理东山仔至新村段防洪工程',
            projectType: '水利建设工程',
            projectApproval: '无',
            region: '2',
            time: '2022-04-09 15:18:20',
            dwmc: '',
            zzjgdm: '',

            xmspdw: '海南省水务厅',
            xmspsj: '',
            jsdw: '海口市堤防工程建设管理中心',
            jsnr: '南渡江海口市综合治理东山仔至新村段防洪工程',
            sjdw: '黄河勘测规划设计有限公司',
            sgdw: '珠珊建设集团有限公司',
            jldw: '海南金华宇工程监理有限公司',
            wczbsj: '',
            kgsj: '1900-01-19',
            jgyssj: '1900-01-19',
            xmtz: '15703.56',
          },
          {
            i: 3,
            projectName: '南渡江海口市综合治理新村至东苍村段防洪工程',
            projectType: '水利建设工程',
            projectApproval: '无',
            region: '2',
            time: '2022-04-09 15:18:20',
            dwmc: '',
            zzjgdm: '',

            xmspdw: '海南省水务厅',
            xmspsj: '',
            jsdw: '海口市堤防工程建设管理中心',
            jsnr: '南渡江海口市综合治理新村至东苍村段防洪工程',
            sjdw: '黄河勘测规划设计有限公司',
            sgdw: '海南琼威建筑工程有限公司',
            jldw: '海南金华宇工程监理有限公司',
            wczbsj: '',
            kgsj: '1900-01-19',
            jgyssj: '1900-01-19',
            xmtz: '12088.43 ',
          },
          {
            i: 4,
            projectName: '南渡江海口市综合治理东苍村至溪头村段防洪工程',
            projectType: '水利建设工程',
            projectApproval: '无',
            region: '2',
            time: '2022-04-09 15:18:20',
            dwmc: '',
            zzjgdm: '',

            xmspdw: '海南省水务厅',
            xmspsj: '',
            jsdw: '海口市堤防工程建设管理中心',
            jsnr: '南渡江海口市综合治理东苍村至溪头村段防洪工程',
            sjdw: '黄河勘测规划设计有限公司',
            sgdw: '江西中联建设集团有限公司',
            jldw: '海南金华宇工程监理有限公司',
            wczbsj: '',
            kgsj: '1900-01-19',
            jgyssj: '1900-01-19',
            xmtz: '9335.76 ',
          },
        ],
      }
    },
    mounted() {
      // 数据请求和处理逻辑
    },
    methods: {
      handleClick(row) {
        this.isDetail = true
        this.formIndex = row.i
      },
      handleBack() {
        this.isDetail = false
      },
    },
  }
</script>

<style scoped>
  .widget-main {
    display: flex;
    padding: 10px;
  }
</style>
