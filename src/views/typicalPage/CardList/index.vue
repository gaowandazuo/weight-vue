<template>
  <div>
    <g-banner :des="'列表的响应式卡片形式'" :title="'卡片列表'" />
    <div class="scrollable-page">
      <div v-show="!isEdit" class="list-container g-box">
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
        <div v-loading="listLoading">
          <el-row :gutter="20">
            <el-col
              v-for="(item, index) in list"
              :key="index"
              v-bind="responsive"
              :span="6"
            >
              <el-card>
                <div slot="header" class="card-header">
                  <img :src="item.img" />
                  <div class="header-wrap">
                    <div class="header-title">{{ item.title }}</div>
                    <div class="header-content">
                      <div class="header-content-item">
                        <span style="color: #a1a1a1">数据目录：</span>
                        <span>{{ item.dataDict }}</span>
                      </div>
                      <div class="header-content-item">
                        <span style="color: #a1a1a1">数据服务：</span>
                        <span>{{ item.dataServer }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <el-button plain type="success" @click="handleEdit">
                    修改
                  </el-button>
                  <el-button plain type="danger">删除</el-button>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>

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
      <div v-show="isEdit" class="g-box">
        <el-page-header @back="isEdit = false" />
        <step-form />
      </div>
    </div>
  </div>
</template>

<script>
  import stepForm from './components/stepForm'
  export default {
    name: 'List',
    components: { stepForm },
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
        responsive: {
          xs: 24,
          sm: 12,
          md: 12,
          lg: 8,
          xl: 6,
        },
        isEdit: false,
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
            img: require('@/assets/img/list-card-img.png'),
            title: '大坝基础信息表',
            dataDict: '水利信息资源目录',
            dataServer: '1',
          },
          {
            img: require('@/assets/img/list-card-img.png'),
            title: '大坝基础信息表',
            dataDict: '水利信息资源目录',
            dataServer: '1',
          },
          {
            img: require('@/assets/img/list-card-img.png'),
            title: '大坝基础信息表',
            dataDict: '水利信息资源目录',
            dataServer: '1',
          },
          {
            img: require('@/assets/img/list-card-img.png'),
            title: '大坝基础信息表',
            dataDict: '水利信息资源目录',
            dataServer: '1',
          },
          {
            img: require('@/assets/img/list-card-img.png'),
            title: '大坝基础信息表',
            dataDict: '水利信息资源目录',
            dataServer: '1',
          },
          {
            img: require('@/assets/img/list-card-img.png'),
            title: '大坝基础信息表',
            dataDict: '水利信息资源目录',
            dataServer: '1',
          },
          {
            img: require('@/assets/img/list-card-img.png'),
            title: '大坝基础信息表',
            dataDict: '水利信息资源目录',
            dataServer: '1',
          },
          {
            img: require('@/assets/img/list-card-img.png'),
            title: '大坝基础信息表',
            dataDict: '水利信息资源目录',
            dataServer: '1',
          },
          {
            img: require('@/assets/img/list-card-img.png'),
            title: '大坝基础信息表',
            dataDict: '水利信息资源目录',
            dataServer: '1',
          },
          {
            img: require('@/assets/img/list-card-img.png'),
            title: '大坝基础信息表',
            dataDict: '水利信息资源目录',
            dataServer: '1',
          },
          {
            img: require('@/assets/img/list-card-img.png'),
            title: '大坝基础信息表',
            dataDict: '水利信息资源目录',
            dataServer: '1',
          },
          {
            img: require('@/assets/img/list-card-img.png'),
            title: '大坝基础信息表',
            dataDict: '水利信息资源目录',
            dataServer: '1',
          },
          {
            img: require('@/assets/img/list-card-img.png'),
            title: '大坝基础信息表',
            dataDict: '水利信息资源目录',
            dataServer: '1',
          },
          {
            img: require('@/assets/img/list-card-img.png'),
            title: '大坝基础信息表',
            dataDict: '水利信息资源目录',
            dataServer: '1',
          },
          {
            img: require('@/assets/img/list-card-img.png'),
            title: '大坝基础信息表',
            dataDict: '水利信息资源目录',
            dataServer: '1',
          },
          {
            img: require('@/assets/img/list-card-img.png'),
            title: '大坝基础信息表',
            dataDict: '水利信息资源目录',
            dataServer: '1',
          },
          {
            img: require('@/assets/img/list-card-img.png'),
            title: '大坝基础信息表',
            dataDict: '水利信息资源目录',
            dataServer: '1',
          },
          {
            img: require('@/assets/img/list-card-img.png'),
            title: '大坝基础信息表',
            dataDict: '水利信息资源目录',
            dataServer: '1',
          },
          {
            img: require('@/assets/img/list-card-img.png'),
            title: '大坝基础信息表',
            dataDict: '水利信息资源目录',
            dataServer: '1',
          },
          {
            img: require('@/assets/img/list-card-img.png'),
            title: '大坝基础信息表',
            dataDict: '水利信息资源目录',
            dataServer: '1',
          },
          {
            img: require('@/assets/img/list-card-img.png'),
            title: '大坝基础信息表',
            dataDict: '水利信息资源目录',
            dataServer: '1',
          },
        ]
        this.list = list
        this.total = 100
        this.listLoading = false
      },
      handleEdit() {
        this.isEdit = true
      },
    },
  }
</script>

<style lang="scss" scoped>
  .list-container {
    .card-header {
      display: flex;
      padding-bottom: 18px;
      border-bottom: 1px solid #e4e4e4;
      img {
        object-fit: contain;
      }
      .header-wrap {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        padding-left: 18px;
        line-height: 32px;
        .header-title {
          font-size: 18px;
          font-weight: bold;
        }
        .header-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .header-content-item {
            margin-right: 10px;
          }
        }
      }
    }
    :deep() {
      .el-card {
        background: url('~@/assets/img/list-card-bg.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .el-card__header {
        padding: 18px 15px 0;
        border-bottom: 0;
      }
      .is-plain {
        background: unset;
      }
    }
  }
</style>
