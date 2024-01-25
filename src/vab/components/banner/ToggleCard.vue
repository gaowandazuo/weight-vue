<template>
  <el-card v-show="theme.layout != 'pure'" class="toggle-card">
    <template #header>
      <div class="card-header">
        <!-- <div class="card-title">{{ cardTitle }}</div> -->
        <div class="card-title">{{ title }}</div>
        <div class="card-toggle" @click="toggleCard">
          <div v-show="cardOpen">
            收起
            <vab-icon icon="arrow-up-s-line" />
          </div>
          <div v-show="!cardOpen">
            展开
            <vab-icon icon="arrow-down-s-line" />
          </div>
        </div>
      </div>
    </template>
    <el-collapse-transition>
      <div v-show="cardOpen" :class="`card-body ${type}`">
        <div class="tag-text">
          <slot>
            {{ des }}
          </slot>
        </div>
      </div>
    </el-collapse-transition>
  </el-card>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'ToggleCard',
    props: {
      title: {
        type: [String, Number],
        required: true,
      },
      des: {
        type: String,
        required: true,
      },
      cardTitle: {
        type: String,
        default: '',
      },
      cardContent: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: 'common',
      },
    },
    data() {
      return {
        cardOpen: true,
      }
    },
    computed: {
      ...mapGetters({
        theme: 'settings/theme',
      }),
    },
    methods: {
      toggleCard() {
        this.cardOpen = !this.cardOpen
      },
    },
  }
</script>
<style lang="scss" scoped>
  // 默认字体
  $fontFamily: 'Microsoft YaHei', '微软雅黑', -apple-system, BlinkMacSystemFont,
    'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', Arial,
    sans-serif;

  // 反馈页面文字
  $fontSizeExtraLarge: 22px;
  // 大标题
  $fontSizeLarge: 18px;
  // 模块标题
  $fontSizeMedium: 16px;
  // 小标题 正文
  $fontSizeRegular: 14px;
  // 辅助文字
  $fontSizeSmall: 12px;
  // 极少数场景
  $fontSizeMini: 10px;

  // 默认行高
  $lineHeight: 1.5715;
  // 组件行高
  $lineHeightWidget: 48px;
  // 默认的圆角
  $radiusRegular: 4px;
  // 默认小圆角
  $radiusSmall: 2px;
  // 对话框圆角
  $dialogRadius: 6px;

  // 横向内边距
  $paddingHorizontal: 16px;
  // 纵向内边距
  $paddingVertical: 16px;
  // 纵向内边距
  $paddingRegular: 16px;
  // 公共 - 内间隔
  $paddingMini: 8px;

  // 公共 - 外间隔
  $marginSmall: 8px;
  $marginMini: 4px;

  // 高度 - 行内元素高度
  $heightInlineLarge: 38px;
  $heightInlinePrimary: 32px;
  $heightInlineMini: 28px;

  // 头部高度
  $headerHeight: 48px;
  // 副头部高度
  $subheaderHeight: 52px;
  // footer高度
  $footerHeight: 40px;
  // 侧边栏菜单的宽度
  $sidebarWidth: 224px;
  // 侧边图标栏宽度（仅图标时的状态，收起的情况下，mix模式下也使用此宽度作为图标栏）
  $sidebarCollapseWidth: 64px;
  // mix模式下侧边栏菜单的宽度
  $sidebarMixWidth: 180px;
  // 菜单的高度
  $menuHeight: 36px;
  // runtime-layout, 菜单的高度
  $runtimeMenuHeight: 42px;
  // 菜单每级的缩进距离
  $menuIndent: 24px;
  // 动画时间
  $transitionTime: 0.33s;

  // 表单页面最大宽度
  $maxFormPageWidth: 1024px;
  // 表单页面最小宽度
  $minFormPageWidth: 375px;

  // tab页, 页签栏, 成员高度
  $tabItemHeightCommon: 43px;

  // 媒体查询屏幕宽度边界，我们使用自顶向下，PC优先的布局
  // 小屏幕移动设备
  $screen_es_max: 575.9px;
  // 中等屏幕移动设备/平板电脑
  $screen_xs_max: 767.9px;
  // 小屏幕桌面显示器
  $screen_sm_max: 991.9px;
  // 中等屏幕桌面显示器
  $screen_md_max: 1199.9px;
  // 较大屏幕桌面显示器
  $screen_lg_max: 1919.9px;

  // 组件高度
  $compHeightBig: 32px;
  $compHeightCommon: 28px;

  // qiankun相关设置，需与主应用约定一致
  $qiankunHeaderHeight: 60px;
  :export {
    fontFamily: $fontFamily;
    paddingHorizontal: $paddingHorizontal;
    paddingVertical: $paddingVertical;
    sidebarWidth: $sidebarWidth;
    sidebarCollapseWidth: $sidebarCollapseWidth;
    menuIndent: $menuIndent;
    radiusRegular: $radiusRegular;
    transitionTime: $transitionTime;
  }

  // 表格
  $td-even-color: #f4f7fa;
  @mixin text-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  // 默认颜色
  // 主题色
  $colorPrimary: #3164f6;
  // 主题色 - Hover Active
  $colorPrimaryActive: #2750c4;
  // 主题色
  $colorComplementary: #12a6cb;
  // 主题色 - 黄色
  $colorComplementaryYellow: #ff7d00;
  // 主题色 - Hover Active
  $colorComplementaryActive: #0c738d;
  // 主题色 - 浅
  $colorPrimaryLighten: #eff7fa;
  // 主题色 - 深
  $colorPrimaryDarken: #335ed5;
  // 成功颜色
  $colorSuccess: #17a576;
  // 成功颜色 - Hover Active
  $colorSuccessActive: #12845e;
  // 成功颜色 - Hover Active
  $colorSuccessActive: #17a576;
  // 成功颜色 - 浅
  $colorSuccessLighten: #f0f9eb;
  // 警告颜色
  $colorWarning: #ff7d00;
  // 警告颜色 - Hover Active
  $colorWarningActive: #cc6400;
  // 警告颜色 - 浅
  $colorWarningLighten: #fdf6ec;
  // 错误颜色
  $colorDanger: #f53f3f;
  // 错误颜色 - Hover Active
  $colorDangerActive: #c43232;
  // 错误颜色 - 浅
  $colorDangerLighten: #ffeff0;
  // 信息颜色
  $colorInfo: #4c4e5d;
  // 主要文本
  $colorTextPrimary: #3e464c;
  // 常规文本
  $colorTextRegular: #4a535c;
  // 次要文本
  $colorTextSecondary: #8492a6;
  // 次要文本
  $colorTextInfo: #b6c2cd;
  // 反色文本
  $colorTextInverse: #ffffff;
  // 反色次要文本
  $colorTextInverseSecondary: #e1e1e1;
  // 主要背景色
  $bgColorPrimary: #ffffff;
  // 主要背景色 - 反色
  $bgColorInverse: #000000;
  // 主要背景色 - 选中/悬浮颜色
  $bgColorPrimaryActive: #f2f5f8;
  // 主要边框
  $borderColorPrimary: #d5dee7;
  // 主要边框颜色
  $borderColorLight: #ebeef5;
  // 主要边框颜色
  $borderColorLighter: #f2f6fc;
  // 主要阴影
  $shadowPrimary: 0 0 10px 0 rgba(82, 63, 105, 0.1);
  // 主要阴影
  $cardShadowPrimary: 0 3px 6px 1px #e4ebf1;
  // 主体部分背景色
  $bodyBgColor: #e4ebf1;
  // 头部背景色
  $headerBgColor: #1c2127;
  // 头部文字颜色
  $headerTextColor: #b0b0b4;
  // 头部悬浮/选中文字色
  $headerActiveTextColor: #ffffff;
  // 头部悬浮/选中背景色
  $headerActiveBgColor: #4c4e5d;
  // 头部Logo颜色
  $headerLogoColor: $colorPrimary;
  // 头部Logo文字颜色
  $headerLogoTextColor: #ffffff;
  // 头部阴影
  $headerShadow: 0 10px 30px 0 rgba(82, 63, 105, 0.05);
  // 侧边栏背景色
  $sidebarBgColor: #2e3840;
  // 侧边栏Logo颜色
  $sidebarLogoColor: $colorPrimary;
  // 侧边栏Logo文字颜色
  $sidebarLogoTextColor: #ffffff;
  // 侧边栏阴影
  $sidebarShadow: 0 0 28px 0 rgba(82, 63, 105, 0.05);
  // 侧边栏mix状态下图标栏背景色
  $sidebarMixBgColor: #2e3840;
  // 侧边栏mix状态下侧边栏图标颜色
  $sidebarMixLogoColor: #b0b0b4;
  // 侧边栏mix状态下图标栏文字颜色
  $sidebarMixTextColor: #b0b0b4;
  // 侧边栏mix状态下图标栏悬浮、选中背景色
  $sidebarMixActiveBgColor: #20272c;
  // 侧边栏mix状态下图标栏悬浮、选中文字色
  $sidebarMixActiveTextColor: #ffffff;
  // 侧边栏mix状态下二级菜单栏背景色
  $sidebarMixSubBgColor: #394650;
  // 侧边栏mix状态下二级菜单栏文字色
  $sidebarMixSubTextColor: #b0b0b4;
  // 侧边栏mix状态下二级菜单栏边框色
  $sidebarMixSubBorderColor: #65687f;
  // 侧边栏mix状态下二级菜单栏选中背景色
  $sidebarMixSubActiveBgColor: $colorPrimary;
  // 侧边栏mix状态下二级菜单栏选中文字色
  $sidebarMixSubActiveTextColor: #ffffff;
  // 菜单文字色
  $sidebarMenuTextColor: #b0b0b4;
  // 菜单悬浮/选中文字色
  $sidebarMenuActiveTextColor: #ffffff;
  // 菜单悬浮/选中背景色
  $sidebarMenuActiveBgColor: #20272c;
  // 菜单分割线
  $sidebarDivider: #4c4e5d;
  // 表格表头背景色
  $tableHeaderBgColor: #f4f7fa;
  // 表格hover背景色
  $tableHoverBgColor: #e8f3ff;
  // 弹出面板背景色
  $popBgColor: #ffffff;
  // 遮罩背景色
  $maskBgColor: rgba(0, 0, 0, 0.5);
  // 按钮 - 文字类按钮 - 默认颜色
  $buttonTextDefaultColor: #86909c;

  // 选择类按钮 - active颜色
  $optionBtnActiveColor: $colorPrimary;
  // runtime - 主要背景色
  $runtimeCommonBgColor: #ffffff;
  // 子标题下划线颜色
  $subHeaderBorderColor: #c9cdd4;

  // tab item - 选中背景色
  $tabItemActiveBgColor: #ecf1f5;

  // 侧边栏(菜单栏)相关样式 :: START
  // 菜单项 - 默认颜色
  $menuItemDefaultColor: rgb(225, 225, 225, 0.8);
  // 菜单项 - 激活颜色
  $menuItemActiveColor: rgb(225, 225, 225, 1);
  // 侧边栏(菜单栏)相关样式 :: END
  // 运行态, 侧边栏相关样式 :: START
  // 运行态 - 侧边栏 - 标题 - 边框颜色
  $runtimeAsideTitleBorderColor: rgba(228, 235, 241, 0.2);
  // 运行态 - 侧边栏 - 标题 - 次要文本颜色
  $runtimeAsideTitleSubColor: rgb(225, 225, 225, 0.4);
  // 运行态, 菜单栏相关样式 :: END
  // 运行态, sub-header 相关样式 :: START
  $runtimeSubHeaderOptBtnBgColor: #f4f7fa;
  // 运行态, sub-header 相关样式 :: END

  // 并行分支主色调
  $parallelMainColor: #5f75cc;

  .card-header {
    display: flex;
    justify-content: space-between;
  }
  .toggle-card {
    margin-bottom: 15px !important;

    .card-title {
      display: inline-block;
      padding: 0 16px;
      font-size: $fontSizeSmall;
      line-height: 33px;
      vertical-align: middle;
      background: $tabItemActiveBgColor;
      border-bottom: 2px solid $colorTextRegular;
    }

    ::v-deep {
      .card-toggle {
        font-size: $fontSizeRegular;
        font-weight: normal;
        cursor: pointer;

        &:before {
          display: none;
        }
      }

      .el-card__header {
        height: 36px;
        padding: 0 16px 0 0 !important;
        line-height: 36px;
        background: $tableHeaderBgColor;
        border-bottom: none !important;
      }

      .el-card__body {
        padding: 0;
      }

      .card-body {
        padding: $paddingVertical $paddingHorizontal;
        color: $colorTextSecondary;
        background-repeat: no-repeat;
        background-position: right, center;
        background-size: 10rem auto;

        &.common {
          background-image: url('~@/assets/img/toogle_card.png');
        }

        &.dict {
          background-image: url('~@/assets/img/dictionary-bg.png');
        }

        &.position {
          background-image: url('~@/assets/img/position-bg.png');
        }

        .tag-text {
          margin-right: 148px;
        }
      }
    }
  }
</style>
