<template>
  <el-drawer
    append-to-body
    custom-class="vab-drawer"
    direction="rtl"
    size="280px"
    :title="translateTitle('主题配置')"
    :visible.sync="drawerVisible"
  >
    <el-scrollbar>
      <el-form ref="form" label-position="left" :model="theme">
        <el-form-item>
          <template slot="label">
            {{ translateTitle('布局') }}
            <el-tooltip
              :content="
                translateTitle(
                  '布局配置仅在电脑视窗下生效，手机视窗时将默认锁定为纵向布局'
                )
              "
              effect="dark"
              placement="top"
            >
              <vab-icon icon="question-line" />
            </el-tooltip>
          </template>
          <el-select v-model="theme.layout" :disabled="device === 'mobile'">
            <el-option
              key="column"
              :label="translateTitle('分栏')"
              value="column"
            />
            <el-option
              key="comprehensive"
              :label="translateTitle('综合')"
              value="comprehensive"
            />
            <el-option
              key="vertical"
              :label="translateTitle('纵向')"
              value="vertical"
            />
            <el-option
              key="horizontal"
              :label="translateTitle('横向')"
              value="horizontal"
            />
            <el-option
              key="common"
              :label="translateTitle('常规')"
              value="common"
            />
            <el-option
              key="float"
              :label="translateTitle('浮动')"
              value="float"
            />
            <el-option
              key="pure"
              :label="translateTitle('纯净')"
              value="pure"
            />
          </el-select>
        </el-form-item>
        <el-form-item :label="translateTitle('主题')">
          <el-select v-model="theme.themeName" @change="updateTheme">
            <el-option
              key="blue-black"
              :label="translateTitle('蓝黑')"
              value="blue-black"
            />
            <el-option
              key="blue-white"
              :label="translateTitle('蓝白')"
              value="blue-white"
            />
            <el-option
              key="blue-pure"
              :label="translateTitle('纯蓝')"
              value="blue-pure"
            />
            <el-option
              key="green-black"
              :label="translateTitle('绿黑')"
              value="green-black"
            />
            <el-option
              key="green-white"
              :label="translateTitle('绿白')"
              value="green-white"
            />
            <!-- <el-option
              key="red-black"
              :label="translateTitle('红黑（非内置）')"
              value="red-black"
            />
            <el-option
              key="red-white"
              :label="translateTitle('红白（非内置）')"
              value="red-white"
            /> -->
            <el-option
              key="ocean"
              :label="translateTitle('渐变')"
              value="ocean"
            />
          </el-select>
        </el-form-item>
        <el-form-item class="vab-item-custom">
          <template slot="label">
            {{ translateTitle('菜单背景') }}
            <el-tooltip
              :content="
                translateTitle(
                  '支持纵向布局、分栏布局、综合布局、常规布局，不支持横向布局、浮动布局'
                )
              "
              effect="dark"
              placement="top"
            >
              <vab-icon icon="question-line" />
            </el-tooltip>
          </template>
          <el-radio-group
            v-model="theme.background"
            :disabled="
              theme.layout === 'float' || theme.layout === 'horizontal'
            "
            @change="updateTheme"
          >
            <el-radio-button class="none" label="none" />
            <el-radio-button class="vab-background" label="vab-background" />
          </el-radio-group>
        </el-form-item>
        <el-form-item :label="translateTitle('标签')">
          <el-switch v-model="theme.showTabs" />
        </el-form-item>
        <el-form-item>
          <template slot="label">
            {{ translateTitle('标签图标') }}
            <el-tooltip
              :content="translateTitle('标签开启时生效')"
              effect="dark"
              placement="top"
            >
              <vab-icon icon="question-line" />
            </el-tooltip>
          </template>
          <el-switch v-model="theme.showTabsIcon" :disabled="!theme.showTabs" />
        </el-form-item>
        <el-form-item>
          <template slot="label">
            {{ translateTitle('标签风格') }}
            <el-tooltip
              :content="translateTitle('标签开启时生效')"
              effect="dark"
              placement="top"
            >
              <vab-icon icon="question-line" />
            </el-tooltip>
          </template>
          <el-select v-model="theme.tabsBarStyle" :disabled="!theme.showTabs">
            <el-option
              key="card"
              :label="translateTitle('卡片')"
              value="card"
            />
            <el-option
              key="smart"
              :label="translateTitle('灵动')"
              value="smart"
            />
            <el-option
              key="smooth"
              :label="translateTitle('圆滑')"
              value="smooth"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <template slot="label">
            {{ translateTitle('分栏风格') }}
            <el-tooltip
              :content="translateTitle('分栏布局时生效')"
              effect="dark"
              placement="top"
            >
              <vab-icon icon="question-line" />
            </el-tooltip>
          </template>
          <el-select
            v-model="theme.columnStyle"
            :disabled="theme.layout !== 'column'"
          >
            <el-option
              key="vertical"
              :label="translateTitle('纵向')"
              value="vertical"
            />
            <el-option
              key="horizontal"
              :label="translateTitle('横向')"
              value="horizontal"
            />
            <el-option
              key="card"
              :label="translateTitle('卡片')"
              value="card"
            />
            <el-option
              key="arrow"
              :label="translateTitle('箭头')"
              value="arrow"
            />
          </el-select>
        </el-form-item>
        <el-form-item :label="translateTitle('头部固定')">
          <el-switch
            v-model="theme.fixedHeader"
            :disabled="theme.layout === 'common'"
          />
        </el-form-item>
        <el-form-item :label="translateTitle('国际化')">
          <el-switch v-model="theme.showLanguage" />
        </el-form-item>
        <el-form-item :label="translateTitle('进度条')">
          <el-switch v-model="theme.showProgressBar" />
        </el-form-item>
        <el-form-item :label="translateTitle('刷新')">
          <el-switch v-model="theme.showRefresh" />
        </el-form-item>
        <el-form-item :label="translateTitle('搜索')">
          <el-switch v-model="theme.showSearch" />
        </el-form-item>
        <el-form-item :label="translateTitle('通知')">
          <el-switch v-model="theme.showNotice" />
        </el-form-item>
        <el-form-item :label="translateTitle('全屏')">
          <el-switch v-model="theme.showFullScreen" />
        </el-form-item>
      </el-form>
    </el-scrollbar>
    <div class="el-drawer__footer">
      <el-button type="primary" @click="handleSaveTheme">
        {{ translateTitle('保存') }}
      </el-button>
      <el-button @click="setDefaultTheme">
        {{ translateTitle('恢复默认') }}
      </el-button>
    </div>
  </el-drawer>
</template>

<script>
  import { translateTitle } from '@/utils/i18n'
  import { mapActions, mapGetters } from 'vuex'
  import _ from 'lodash'

  export default {
    name: 'VabThemeDrawer',
    data() {
      return {
        drawerVisible: false,
      }
    },
    computed: {
      ...mapGetters({
        theme: 'settings/theme',
        device: 'settings/device',
      }),
    },
    created() {
      this.$baseEventBus.$on('theme', () => {
        this.handleOpenTheme()
      })
      this.$baseEventBus.$on('random-theme', () => {
        this.randomTheme()
      })
    },
    methods: {
      translateTitle,
      ...mapActions({
        saveTheme: 'settings/saveTheme',
        resetTheme: 'settings/resetTheme',
        updateTheme: 'settings/updateTheme',
      }),
      handleOpenTheme() {
        this.drawerVisible = true
      },
      async setDefaultTheme() {
        await this.resetTheme()
        this.drawerVisible = false
      },
      async handleSaveTheme() {
        await this.saveTheme()
        this.drawerVisible = false
      },
      async randomTheme() {
        const loading = this.$baseColorfullLoading(0)
        // 随机换肤重置移除主题，防止代码更新影响样式
        await this.resetTheme()
        const themeNameArray = [
          'blue-black',
          'blue-white',
          'blue-pure',
          'ocean',
          'green-black',
          'green-white',
          'red-black',
          'red-white',
        ]
        this.theme.themeName = _.sample(
          _.pull(themeNameArray, [this.theme.themeName])
        )
        const columnStyleArray = ['vertical', 'horizontal', 'card', 'arrow']
        this.theme.columnStyle = _.sample(
          _.pull(columnStyleArray, [this.theme.columnStyle])
        )
        const backgroundArray = ['none', 'vab-background']
        this.theme.background = _.sample(
          _.pull(backgroundArray, [this.theme.background])
        )
        const tabsBarStyleArray = ['card', 'smart', 'smooth']
        this.theme.tabsBarStyle = _.sample(
          _.pull(tabsBarStyleArray, [this.theme.tabsBarStyle])
        )
        const showTabsIconArray = [true, false]
        this.theme.showTabsIcon = _.sample(
          _.pull(showTabsIconArray, [this.theme.showTabsIcon])
        )
        if (this.device === 'desktop') {
          const layoutArray = [
            'horizontal',
            'vertical',
            'column',
            'comprehensive',
            'common',
            'float',
          ]
          this.theme.layout = _.sample(_.pull(layoutArray, [this.theme.layout]))
        } else this.theme.layout = 'vertical'
        await this.updateTheme()
        await this.saveTheme()
        setTimeout(() => {
          loading.close()
        }, 1000)
      },
    },
  }
</script>

<style lang="scss">
  .vab-drawer {
    .el-drawer__body {
      .el-scrollbar__wrap {
        height: calc(100vh - 100px);
        padding: $base-padding;

        .el-divider--horizontal {
          margin: $base-margin * 2 0 $base-margin * 2 0;
        }

        .el-form-item {
          display: flex;
          align-items: center;

          .el-form-item__label {
            flex: 1 1;
          }

          .el-form-item__content {
            flex: 0 0 auto;
          }

          @font-face {
            font-family: 'remixicon';
            font-display: swap;
          }

          &.vab-item-custom {
            display: block !important;
          }

          .el-radio-button {
            display: block;
            float: left;
            width: 80px;
            height: 80px;
            margin: 10px;
            cursor: pointer;
            border-radius: 5px;

            &.is-disabled {
              cursor: not-allowed;
              opacity: 0.6;
            }

            &.is-active {
              box-shadow: 0 0 2px 2px #1890ff;
            }

            .el-radio-button__orig-radio,
            .el-radio-button__inner {
              display: none;
            }

            &.none {
              font-family: 'remixicon', sans-serif !important;
              font-size: 16px;
              font-weight: 580;
              line-height: 80px;
              text-align: center;
              background: #f7f7f7 none;
              background-size: cover;

              &:before {
                content: '\eace';
              }
            }

            &.vab-background {
              background: url(~@/assets/theme_images/background-1.png);
              background-size: cover;
            }
          }
        }

        .el-form-item--small.el-form-item {
          .el-input__inner {
            width: 115px;
          }
        }
      }

      .el-drawer__footer {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: $base-z-index + 1;
        padding: #{$base-padding/2};
        background: $base-color-white;
        border-top: 1px solid $base-border-color;
      }
    }
  }
</style>
