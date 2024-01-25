<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="main">
    <div class="widget-header">
      <div class="name">
        <span :class="{ active: showIframe == 0 }" @click="changeIframe(0)">
          工程运行管理
        </span>
      </div>
    </div>
    <div class="widget-main">
      <!-- 项目进度 -->
      <div class="bg_box">
        <div class="flex">
          <span>名称</span>
          <el-input v-model="form.name" />
        </div>

        <el-button
          class="left_button"
          icon="el-icon-search"
          size="small"
          type="primary"
        >
          搜索
        </el-button>
        <el-button class="left_button" size="small">重置</el-button>
      </div>
      <!-- 表格区域 -->
      <div class="table_box">
        <el-table
          border
          :data="tableData"
          :header-row-style="tableRowClassName"
          style="width: 100%"
        >
          <el-table-column align="center" label="序号" prop="id" width="80" />
          <el-table-column align="center" label="名称" prop="Name" />

          <el-table-column
            align="center"
            label="到岗人员"
            prop="personnelOn"
            width="220"
          />

          <el-table-column align="center" label="运行状况" prop="run" />
          <el-table-column align="center" label="代办事项" prop="acceptance" />
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
        form: {
          name: '',
        },
        tableData: [
          {
            id: 1,
            Name: '水厂二期工程',

            personnelOn: '13',
            run: '正常',

            acceptance: '进行中',
          },
          {
            id: 2,
            Name: '水厂二期工程',

            personnelOn: '13',
            run: '正常',

            acceptance: '进行中',
          },
          {
            id: 3,
            Name: '水厂二期工程',

            personnelOn: '13',
            run: '正常',

            acceptance: '进行中',
          },
          {
            id: 4,
            Name: '水厂二期工程',

            personnelOn: '13',
            run: '正常',

            acceptance: '进行中',
          },

          {
            id: 5,
            Name: '水厂二期工程',

            personnelOn: '13',
            run: '正常',

            acceptance: '进行中',
          },
          {
            id: 6,
            Name: '水厂二期工程',

            personnelOn: '13',
            run: '正常',

            acceptance: '进行中',
          },
          {
            id: 7,
            Name: '水厂二期工程',

            personnelOn: '13',
            run: '正常',

            acceptance: '进行中',
          },
          {
            id: 8,
            Name: '水厂二期工程',

            personnelOn: '13',
            run: '正常',

            acceptance: '进行中',
          },
          {
            id: 9,
            Name: '水厂二期工程',

            personnelOn: '13',
            run: '正常',

            acceptance: '进行中',
          },
          {
            id: 10,
            Name: '水厂二期工程',

            personnelOn: '13',
            run: '正常',

            acceptance: '进行中',
          },
          {
            id: 11,
            Name: '水厂二期工程',

            personnelOn: '13',
            run: '正常',

            acceptance: '进行中',
          },
        ],
      }
    },
    created() {},
    mounted() {},
    methods: {
      changeIframe(val) {
        this.showIframe = val
        switch (val) {
          case 0:
            break
        }
      },
      tableRowClassName({ row, rowIndex }) {
        console.log('res', row, rowIndex)
        if (rowIndex === 0) {
          return 'warning-row'
        }
        return ''
      },
    },
  }
</script>

<style scoped>
  .widget-main {
    height: 500px;
  }

  .name img {
    margin-right: 10px;
  }

  /* 项目管理微件css */
  .bg_box {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 5px 10px;
    margin: 10px 0px;
    background: white;
  }

  .left_button {
    margin-left: 40px !important;
  }

  .flex {
    display: flex;
  }
  .flex span {
    width: 50px;
    margin-left: 20px;
    line-height: 40px;
  }
  .table_box {
    width: 100%;
    margin-top: 20px;
    overflow: auto;
  }
</style>
