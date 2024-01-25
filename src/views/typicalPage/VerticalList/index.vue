<template>
  <div>
    <g-banner :des="'列表的基础展示形式'" :title="'基础列表'" />
    <div class="list-container g-box">
      <vab-query-form>
        <vab-query-form-top-panel :span="24">
          <el-form :inline="true" :model="queryForm" @submit.native.prevent>
            <el-form-item>
              <el-input
                v-model.trim="queryForm.title"
                clearable
                placeholder="资源名称"
              />
            </el-form-item>
            <el-form-item>
              <el-button
                icon="el-icon-search"
                type="primary"
                @click="queryData"
              >
                查询
              </el-button>
            </el-form-item>
          </el-form>
        </vab-query-form-top-panel>
      </vab-query-form>
      <div class="scrollable-page">
        <ul v-loading="listLoading">
          <li v-for="(item, index) in list" :key="index" class="list-item">
            <div class="list-item-meta">
              <div class="list-item-meta-avatar">
                <el-image :src="item.img" />
              </div>
              <div class="list-item-meta-content">
                <div class="list-item-meta-title">
                  {{ item.title }}
                </div>
                <div class="list-item-meta-description">
                  数据目录:{{ item.dataDict }}
                </div>
                <div class="list-item-meta-description">
                  数据源:{{ item.dataOrigin }}
                </div>
                <div class="list-item-meta-description">
                  代办环节:{{ item.todo }}
                </div>
              </div>
              <div class="list-item-meta-content">
                <div class="list-item-meta-description">
                  资源描述:{{ item.description }}
                </div>
                <div class="list-item-meta-description">
                  上次更新:{{ item.time }}
                </div>
              </div>
              <div class="list-item-meta-content">
                <div class="list-item-meta-item">
                  <span style="margin-right: 10px">审核状态</span>
                  <el-tag type="success">已审核</el-tag>
                </div>
              </div>
              <div
                class="list-item-meta-content"
                style="margin-right: 40px; text-align: right"
              >
                <el-button plain type="primary">审核</el-button>
              </div>
            </div>
          </li>
        </ul>
        <el-pagination
          background
          :current-page="queryForm.pageNo"
          :layout="layout"
          :page-size="queryForm.pageSize"
          :total="total"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'List',
    data() {
      return {
        list: [],
        listLoading: true,
        layout: 'total, sizes, prev, pager, next, jumper',
        total: 0,
        queryForm: {
          pageNo: 1,
          pageSize: 10,
          title: '',
        },
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      handleSizeChange(val) {
        this.queryForm.pageSize = val
        this.fetchData()
      },
      handleCurrentChange(val) {
        this.queryForm.pageNo = val
        this.fetchData()
      },
      queryData() {
        this.queryForm.pageNo = 1
        this.fetchData()
      },
      async fetchData() {
        this.listLoading = true
        // const {
        //   data: { list, total },
        // } = await getList(this.queryForm)
        let list = [
          {
            img: require('@/assets/img/list-img.png'),
            title: '数据大坝基础信息表',
            dataDict: '水库大坝',
            dataOrigin: '水利对象基础库',
            todo: '单次审批',
            description: '无',
            time: '2023-07-03',
          },
          {
            img: require('@/assets/img/list-img.png'),
            title: '数据大坝基础信息表',
            dataDict: '水库大坝',
            dataOrigin: '水利对象基础库',
            todo: '单次审批',
            description: '无',
            time: '2023-07-03',
          },
          {
            img: require('@/assets/img/list-img.png'),
            title: '数据大坝基础信息表',
            dataDict: '水库大坝',
            dataOrigin: '水利对象基础库',
            todo: '单次审批',
            description: '无',
            time: '2023-07-03',
          },
          {
            img: require('@/assets/img/list-img.png'),
            title: '数据大坝基础信息表',
            dataDict: '水库大坝',
            dataOrigin: '水利对象基础库',
            todo: '单次审批',
            description: '无',
            time: '2023-07-03',
          },
          {
            img: require('@/assets/img/list-img.png'),
            title: '数据大坝基础信息表',
            dataDict: '水库大坝',
            dataOrigin: '水利对象基础库',
            todo: '单次审批',
            description: '无',
            time: '2023-07-03',
          },
          {
            img: require('@/assets/img/list-img.png'),
            title: '数据大坝基础信息表',
            dataDict: '水库大坝',
            dataOrigin: '水利对象基础库',
            todo: '单次审批',
            description: '无',
            time: '2023-07-03',
          },
          {
            img: require('@/assets/img/list-img.png'),
            title: '数据大坝基础信息表',
            dataDict: '水库大坝',
            dataOrigin: '水利对象基础库',
            todo: '单次审批',
            description: '无',
            time: '2023-07-03',
          },
          {
            img: require('@/assets/img/list-img.png'),
            title: '数据大坝基础信息表',
            dataDict: '水库大坝',
            dataOrigin: '水利对象基础库',
            todo: '单次审批',
            description: '无',
            time: '2023-07-03',
          },
          {
            img: require('@/assets/img/list-img.png'),
            title: '数据大坝基础信息表',
            dataDict: '水库大坝',
            dataOrigin: '水利对象基础库',
            todo: '单次审批',
            description: '无',
            time: '2023-07-03',
          },
          {
            img: require('@/assets/img/list-img.png'),
            title: '数据大坝基础信息表',
            dataDict: '水库大坝',
            dataOrigin: '水利对象基础库',
            todo: '单次审批',
            description: '无',
            time: '2023-07-03',
          },
          {
            img: require('@/assets/img/list-img.png'),
            title: '数据大坝基础信息表',
            dataDict: '水库大坝',
            dataOrigin: '水利对象基础库',
            todo: '单次审批',
            description: '无',
            time: '2023-07-03',
          },
          {
            img: require('@/assets/img/list-img.png'),
            title: '数据大坝基础信息表',
            dataDict: '水库大坝',
            dataOrigin: '水利对象基础库',
            todo: '单次审批',
            description: '无',
            time: '2023-07-03',
          },
        ]
        this.list = list
        this.total = 100
        this.listLoading = false
      },
    },
  }
</script>

<style lang="scss" scoped>
  .list-container {
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      outline: none;

      .list-item {
        padding: $base-padding;
        border-bottom: 1px solid $base-border-color;

        &-meta {
          display: flex;
          flex: 1 1;
          align-items: center;

          &-avatar {
            margin-right: 16px;

            :deep() {
              .el-image {
                width: 61px;
                height: 61px;
              }
            }
          }

          &-content {
            flex: 1 0;
            width: 0;
            color: rgba(0, 0, 0, 0.85);
          }

          &-title {
            margin-top: 11px;
            margin-bottom: 4px;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.85);
          }

          &-description {
            font-size: 14px;
            line-height: 25px;
            color: rgba(0, 0, 0, 0.45);
          }

          &-item {
            display: inline-block;
            margin-left: 40px;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.45);
            vertical-align: middle;

            > span {
              line-height: 30px;
            }

            > p {
              margin-top: 4px;
              margin-bottom: 0;
            }
          }

          :deep() {
            .el-progress {
              margin-top: 21px;
            }
          }
        }
      }
    }
  }
</style>
