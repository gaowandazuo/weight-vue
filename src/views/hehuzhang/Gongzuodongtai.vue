<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app" class="mian">
    <div class="widget-header">
      <div class="name">
        <span :class="{ active: showIframe === 0 }" @click="changeIframe(0)">
          工作动态
        </span>
      </div>
    </div>
    <div class="widget-main">
      <div class="news-list">
        <a
          v-for="(item, index) in newsList"
          :key="index"
          :href="item.href"
          target="_blank"
        >
          <span class="info">{{ item.bt }}</span>
          <span class="time">{{ item.fbsj }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showIframe: 0,
        showTab: 0,
        newsList: [
          {
            bt: '沈晓明在巡查万泉河时强调 严格落实河长制 加强水环境治理 努力实现河畅水清岸绿景美',
            fbsj: '2022-01-02',
            href: 'https://mp.weixin.qq.com/s?__biz=MzI4NTY4Mjc2MA==&mid=2247495063&idx=1&sn=b7365186f6ea73885c70d74aaf63cf08&chksm=ebead0b0dc9d59a61ac7f649c258408466707a7c1741015ae7f92da7015d557db150cdbc8c4d#rd',
          },
          {
            bt: '省政协主席毛万春带队到松涛调研',
            fbsj: '2022-01-02',
            href: 'https://mp.weixin.qq.com/s?__biz=MzI4NTY4Mjc2MA==&mid=2247495063&idx=2&sn=68e59cb94222d7e649ac99cbd03c04ed&chksm=ebead0b0dc9d59a6f5f7927f12c1a704346bdd162003ee84f39d7629ed46f1e90628f2808b77#rd',
          },
          {
            bt: '2022年元旦 东方市第一总河湾长、市委书记田丽霞到小洲塘巡河',
            fbsj: '2022-01-01',
            href: 'https://mp.weixin.qq.com/s?__biz=MzI4NTY4Mjc2MA==&mid=2247495041&idx=1&sn=daa6400b26e4838d07fe8dda8ea6a7d9&chksm=ebead0a6dc9d59b092b298e31f94158d93e9a8906f388c245e9a4dfb6ee1ace5fc2ffefc7282#rd',
          },
          {
            bt: '绿水 “青行” 之旅————海南幸福河湖验收纪实（七）琼海：深挖河湖文化 打造特色幸福河湖',
            fbsj: '2021-12-30',
            href: 'https://mp.weixin.qq.com/s?__biz=MzI4NTY4Mjc2MA==&mid=2247495031&idx=1&sn=c60ba7b07867790de1838791286f23ef&chksm=ebead050dc9d594681521f036ad6e4355028b03cc6583b294a795b01347dd1a9bb4a43c1cf52#rd',
          },
          {
            bt: '省政协主席毛万春到昌化江（昌江段）开展巡河调研',
            fbsj: '2021-12-17',
            href: 'https://mp.weixin.qq.com/s?__biz=MzI4NTY4Mjc2MA==&mid=2247495004&idx=1&sn=0415cee58a2936ac0049566aa4b56ef7&chksm=ebead07bdc9d596dad071a4cdbc0f176a084cdd666c457c9aca9332d856f212e2f90c58c3f8d#rd',
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
      changeTab(val) {
        this.showTab = val
        switch (val) {
          case 0:
            break
        }
      },
    },
  }
</script>

<style scoped>
  .news-list {
    width: 100%;
    height: calc(100% - 30px);
    margin-top: 20px;
    overflow: hidden;
  }

  .news-list a {
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    height: 36px;
    padding: 0 20px;
    line-height: 36px;
    color: #585858;
  }

  .news-list a .info {
    display: inline-block;
    width: calc(100% - 150px);
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: keep-all;
    white-space: nowrap;
  }

  .news-list a .info:hover {
    color: #0979ff;
  }

  .news-list a:before {
    position: absolute;
    top: 15px;
    left: 0;
    width: 8px;
    height: 8px;
    content: '';
    background: #6cb3f5;
    border-radius: 50%;
  }

  .news-list a .time {
    display: inline-block;
    float: left;
    width: 100px;
  }
</style>
