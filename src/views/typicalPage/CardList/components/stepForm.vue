<template>
  <div class="step-form-container">
    <el-row :gutter="20">
      <el-col
        :lg="{ span: 10, offset: 7 }"
        :md="{ span: 20, offset: 2 }"
        :sm="{ span: 20, offset: 2 }"
        :xl="{ span: 10, offset: 7 }"
        :xs="24"
      >
        <el-steps :active="active" align-center class="steps">
          <el-step description="填写转账信息" title="第1步" />
          <el-step description="确认转账信息" title="第2步" />
          <el-step description="完成" title="第3步" />
        </el-steps>
        <step1 v-if="active === 0" @change-step="handleSetStep" />
        <step2
          v-if="active === 1"
          :info-data="form"
          @change-step="handleSetStep"
        />
        <step3
          v-if="active === 2"
          :info-data="form"
          @change-step="handleSetStep"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Step1 from './Step1'
  import Step2 from './Step2'
  import Step3 from './Step3'

  export default {
    name: 'StepForm',
    components: { Step1, Step2, Step3 },
    data() {
      return {
        active: 0,
        form: {},
      }
    },
    methods: {
      handleSetStep(active, form) {
        this.active = active
        if (form) this.form = Object.assign(this.form, form)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .step-form-container {
    :deep() {
      .el-steps {
        margin: $base-margin auto $base-margin * 2 auto;

        .el-step__head.is-process {
          color: $base-color-blue;
          border-color: $base-color-blue;

          .el-step__icon.is-text {
            color: $base-color-blue;
            background: mix($base-color-white, $base-color-blue, 90%);
            border: 1px solid;
          }

          .el-step__line {
            height: 1px;
            background: $base-color-blue;
          }
        }

        .el-step__title.is-process {
          color: $base-color-blue;
        }

        .el-step__description.is-process {
          color: $base-color-blue;
        }

        .el-step__head.is-finish {
          .el-step__icon.is-text {
            color: $base-color-white;
            background: $base-color-blue;
          }

          .el-step__line {
            height: 1px;
            background: $base-color-blue;
          }
        }

        .el-step__head.is-wait {
          .el-step__icon.is-text {
            border: 1px solid;
          }

          .el-step__line {
            height: 1px;
            background: #c0c4cc;
          }
        }
      }
    }
  }
</style>
