<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app" class="main">
    <div class="widget-header">
      <div class="name">
        <span class="active">填报微件</span>
      </div>
    </div>
    <div class="widget-main">
      <div class="form-wrap">
        <el-form ref="ruleForm" label-width="30%" :model="form" :rules="rules">
          <el-form-item label="单位名称" prop="nameUnit">
            <el-input v-model="form.nameUnit" />
          </el-form-item>
          <el-form-item label="项目名称" prop="projectName">
            <el-input v-model="form.projectName" />
          </el-form-item>
          <el-form-item label="行政区域">
            <el-input v-model="form.addvnm" />
          </el-form-item>
          <el-form-item label="项目审批文号">
            <el-input v-model="form.projectApprovalNumber" />
          </el-form-item>
          <el-form-item label="建设单位" prop="constructionUnit">
            <el-input v-model="form.constructionUnit" />
          </el-form-item>
          <el-form-item label="设计单位" prop="designUnit">
            <el-input v-model="form.designUnit" />
          </el-form-item>
          <el-form-item label="监理单位">
            <el-input v-model="form.supervisionUnit" />
          </el-form-item>
          <el-form-item label="开工时间">
            <el-date-picker
              v-model="form.startTime"
              placeholder="选择日期时间"
              type="datetime"
            />
          </el-form-item>
          <el-form-item label="项目投资（万元）" prop="projectInvestment">
            <el-input v-model="form.projectInvestment" type="number" />
          </el-form-item>
          <el-form-item label="组织机构代码">
            <el-input v-model="form.organizationCode" />
          </el-form-item>
          <el-form-item label="项目类型">
            <el-input v-model="form.projectType" />
          </el-form-item>
          <el-form-item label="项目审批单位">
            <el-input v-model="form.itemType" />
          </el-form-item>
          <el-form-item label="项目审批时间">
            <el-date-picker
              v-model="form.projectApprovalTime"
              placeholder="选择日期时间"
              type="datetime"
            />
          </el-form-item>
          <el-form-item label="建设内容">
            <el-input v-model="form.constructionContent" />
          </el-form-item>
          <el-form-item label="施工单位">
            <el-input v-model="form.developmentUnit" />
          </el-form-item>
          <el-form-item label="完成招标时间">
            <el-date-picker
              v-model="form.biddingTime"
              placeholder="选择日期时间"
              type="datetime"
            />
          </el-form-item>
          <el-form-item label="竣工验收时间">
            <el-date-picker
              v-model="form.acceptanceTime"
              placeholder="选择日期时间"
              type="datetime"
            />
          </el-form-item>
        </el-form>
      </div>
      <div class="button-wrap">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  var form = {
    projectName: '',
    projectType: '',
    projectApprovalNumber: '',
    addvnm: '',
    time: '',
    nameUnit: '',
    organizationCode: '',
    itemType: '',
    projectApprovalTime: '',
    constructionUnit: '',
    constructionContent: '',
    designUnit: '',
    developmentUnit: '',
    supervisionUnit: '',
    biddingTime: '',
    startTime: '',
    acceptanceTime: '',
    projectInvestment: '',
    status: '0',
  }
  export default {
    data() {
      return {
        form: {
          projectName: '',
          projectType: '',
          projectApprovalNumber: '',
          addvnm: '',
          time: '',
          nameUnit: '',
          organizationCode: '',
          itemType: '',
          projectApprovalTime: '',
          constructionUnit: '',
          constructionContent: '',
          designUnit: '',
          developmentUnit: '',
          supervisionUnit: '',
          biddingTime: '',
          startTime: '',
          acceptanceTime: '',
          projectInvestment: '',
          status: '0',
        },
        rules: {
          nameUnit: [
            { required: true, message: '请输入单位名称', trigger: 'blur' },
          ],
          projectName: [
            { required: true, message: '请输入项目名称', trigger: 'blur' },
          ],
          constructionUnit: [
            { required: true, message: '请输入建设单位', trigger: 'blur' },
          ],
          designUnit: [
            { required: true, message: '请输入设计单位', trigger: 'blur' },
          ],
          projectInvestment: [
            { required: true, message: '请输入项目投资金额', trigger: 'blur' },
          ],
        },
      }
    },
    computed: {},
    mounted() {},
    methods: {
      submitForm() {
        this.$refs['ruleForm'].validate((valid) => {
          if (valid) {
            if (this.form.startTime) {
              this.form.startTime = this.frontOneHour(
                'yyyy-MM-dd hh:mm:ss',
                this.form.startTime
              )
            }
            if (this.form.biddingTime) {
              this.form.biddingTime = this.frontOneHour(
                'yyyy-MM-dd hh:mm:ss',
                this.form.biddingTime
              )
            }
            if (this.form.projectApprovalTime) {
              this.form.projectApprovalTime = this.frontOneHour(
                'yyyy-MM-dd hh:mm:ss',
                this.form.projectApprovalTime
              )
            }
            if (this.form.acceptanceTime) {
              this.form.acceptanceTime = this.frontOneHour(
                'yyyy-MM-dd hh:mm:ss',
                this.form.acceptanceTime
              )
            }

            // eslint-disable-next-line no-undef
            axios
              .post(
                '/engineeringconstruction/engineeringservice/CreditManageService/insertCreditManageInfo',
                this.form
              )
              // eslint-disable-next-line no-unused-vars
              .then((response) => {
                this.$message({
                  showClose: true,
                  message: '提交成功',
                  type: 'success',
                })
                this.$refs['ruleForm'].resetFields()
              })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      frontOneHour(fmt, currentTime) {
        var o = {
          'M+': currentTime.getMonth() + 1, // 月份
          'd+': currentTime.getDate(), // 日
          'h+': currentTime.getHours(), // 小时
          'm+': currentTime.getMinutes(), // 分
          's+': currentTime.getSeconds(), // 秒
          'q+': Math.floor((currentTime.getMonth() + 3) / 3), // 季度
          S: currentTime.getMilliseconds(), // 毫秒
        }
        if (/(y+)/.test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            (currentTime.getFullYear() + '').substr(4 - RegExp.$1.length)
          )
        for (var k in o) {
          if (new RegExp('(' + k + ')').test(fmt))
            fmt = fmt.replace(
              RegExp.$1,
              RegExp.$1.length === 1
                ? o[k]
                : ('00' + o[k]).substr(('' + o[k]).length)
            )
        }
        return fmt
      },
      resetForm() {
        //this.$refs['ruleForm'].resetFields()
        this.form = JSON.parse(JSON.stringify(form))
      },
    },
  }
</script>

<style scoped>
  .form-wrap {
    display: flex;
    padding-top: 10px;
  }

  form.el-form {
    width: 100%;
  }

  .el-form-item {
    float: left;
    width: 50%;
  }

  .button-wrap {
    width: 160px;
    margin: 10px auto;
  }
  .widget-main {
    background: #fff;
  }
  .el-date-editor.el-input {
    width: 100%;
  }
</style>
