<template>
  <el-col v-bind="responsive">
    <el-card
      :body-style="{
        height: title || showHeader ? 'calc(100% - 53px)' : '100%',
      }"
      shadow="hover"
      :style="{ height }"
    >
      <template v-if="title || showHeader" #header>
        <slot v-if="showHeader" name="header"></slot>
        <template v-else>
          <vab-icon :icon="icon" />
          {{ title }}
          <el-tag v-show="infoTag" class="card-header-tag">
            {{ infoTag }}
          </el-tag>
        </template>
      </template>
      <el-scrollbar style="height: 100%">
        <slot v-if="!url"></slot>
        <div v-else class="iframe-container">
          <iframe frameborder="0" :src="url" />
        </div>
      </el-scrollbar>
    </el-card>
  </el-col>
</template>

<script>
  export default {
    name: 'VabHomeCard',
    props: {
      icon: { type: String, default: '' },
      title: { type: String, default: '' },
      infoTag: { type: String, default: '' },
      responsive: {
        type: Object,
        default: () => {
          return { lg: 8, md: 12, sm: 24, xl: 8, xs: 24 }
        },
      },
      url: { type: String, default: '' },
      verticalGrid: { type: Number, default: 2 },
    },
    data() {
      return {
        showHeader: false,
      }
    },
    computed: {
      height() {
        return `calc(${this.verticalGrid * 15}vh + ${
          (this.verticalGrid - 1) * 20
        }px)`
      },
    },
    created() {
      this.setShowSlots()
    },
    beforeUpdate() {
      this.setShowSlots()
    },
    methods: {
      setShowSlots() {
        this.showHeader = this.$slots.header?.[0]
      },
      getRandomId() {
        return Number(
          Math.random().toString().substr(3, length) + Date.now()
        ).toString(36)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .iframe-container {
    iframe {
      width: 100%;
      height: $base-keep-alive-height;
    }
  }

  :deep() {
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
    .el-scrollbar__bar.is-horizontal {
      visibility: hidden;
    }
    .el-card {
      .el-card__header {
        position: relative;

        .card-header-tag {
          position: absolute;
          top: 15px;
          right: $base-margin;
        }

        > div > span {
          display: flex;
          align-items: center;

          i {
            margin-right: 3px;
          }
        }
      }

      .el-card__body {
        position: relative;

        .echarts {
          width: 100%;
          height: 127px;
        }

        .card-footer-tag {
          position: absolute;
          right: $base-margin;
          bottom: 15px;
        }
      }
    }

    .bottom {
      padding-top: 20px;
      margin-top: 5px;
      color: #595959;
      text-align: left;
      border-top: 1px solid $base-border-color;
    }
  }
</style>
