/* 每个页面顶端的banner 参数： title(string, number): 标题 des(string): 描述 */
<template>
  <div class="title-banner">
    <div class="title">
      <img src="@/assets/img/icon-service.png" />
      <div class="text">
        <h3>{{ title }}</h3>
        <p>{{ des }}</p>
      </div>
      <div class="clearfix"></div>
    </div>
    <slot name="tabs"></slot>
  </div>
</template>
<script>
  export default {
    name: 'Banner',
    props: {
      title: {
        type: [String, Number],
        required: true,
      },
      des: {
        type: String,
        required: true,
      },
    },
  }
</script>
<style lang="scss" scoped>
  .title-banner {
    position: relative;
    z-index: 1;
    margin-bottom: 15px;
    overflow: hidden;
    user-select: none;
    border-radius: 10px;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);
    .title {
      box-sizing: border-box;
      height: 120px;
      padding: 20px;
      color: white;
      color: white;
      background: url('~@/assets/img/service-list-title-back.png');
      background-repeat: no-repeat;
      background-position: right;
      background-size: cover;
      img,
      .text {
        float: left;
      }
      img {
        width: 70px;
      }
      .text {
        margin-left: 20px;
      }
      h3 {
        margin-top: 8px;
        margin-bottom: 10px;
        font-size: 22px;
        font-weight: normal;
        color: white;
      }
      p {
        font-size: 12px;
      }
    }
  }
  @media (max-width: 1400px) {
    .title-banner {
      margin-bottom: 10px;
      .title {
        height: 90px;
        padding: 5px 20px;
        h3 {
          font-size: 20px;
        }
        img {
          width: 50px;
          margin-top: 10px;
        }
      }
    }
  }
</style>
