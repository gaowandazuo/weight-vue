<template>
  <div>
    <el-form ref="form" label-width="100px" :model="form" :rules="rules">
      <el-form-item label="付款账户" prop="payAccount">
        <el-input v-model="form.payAccount" />
      </el-form-item>
      <el-form-item label="收款账户" prop="gatheringAccount">
        <el-input v-model="form.gatheringAccount" />
      </el-form-item>
      <el-form-item label="收款人姓名" prop="gatheringName">
        <el-input v-model="form.gatheringName" />
      </el-form-item>
      <el-form-item label="转账金额" prop="price">
        <el-input v-model="form.price" />
      </el-form-item>
    </el-form>
    <div class="pay-button-group">
      <el-button type="primary" @click="handleSubmit">下一步</el-button>
    </div>
    <el-alert :closable="false">
      <h3>转账到支付宝</h3>
      <p>生活好，支付宝。生活好，支付宝。生活好，支付宝。生活好，支付宝。</p>
      <h3>转账到微信</h3>
      <p>
        微不可挡，万众一信。微不可挡，万众一信。微不可挡，万众一信。微不可挡，万众一信。
      </p>
    </el-alert>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          payAccount: 'XXXXXXXXXXXXXXXX',
          gatheringAccount: 'sunzhengjun@inspur.com',
          gatheringName: 'sunzhengjun',
          price: '100',
        },
        rules: {
          payAccount: [
            { required: true, message: '请选择付款账户', trigger: 'blur' },
          ],
          gatheringAccount: [
            { required: true, message: '请输入收款账户', trigger: 'blur' },
            { type: 'email', message: '账户名应为邮箱格式', trigger: 'blur' },
          ],
          gatheringName: [
            { required: true, message: '请输入收款人姓名', trigger: 'blur' },
          ],
          price: [
            { required: true, message: '请输入转账金额', trigger: 'blur' },
            { pattern: /^(\d+)((?:\.\d+)?)$/, message: '请输入合法金额数字' },
          ],
        },
      }
    },
    methods: {
      handleSubmit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.$emit('change-step', 1, this.form)
          }
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .pay-button-group {
    display: block;
    margin: 20px auto;
    text-align: center;
  }
</style>
