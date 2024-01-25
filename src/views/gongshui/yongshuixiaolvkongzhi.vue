<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="mian">
      <div class="widget-header">
        <div class="name">
          <span :class="{ active: showIframe == 0 }" @click="changeIframe(0)">
            用水效率控制
          </span>
        </div>
      </div>
      <div class="card-content-wrap">
        <div class="list-wrap">
          <div
            v-for="(item, index) in listData"
            :key="index"
            class="list-item-wrap"
          >
            <div class="list-icon">
              <img alt="" :src="item.icon" />
            </div>
            <div class="list-des">
              {{ item.des }}
            </div>
            <div class="list-num">
              {{ item.num }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showIframe: 0,
        listData: [
          {
            icon: require('../../../src/assets/gongshui_images/黄.png'),
            des: '2025年万元GDP用水量(m3/万元)',
            num: '70.27',
          },
          {
            icon: require('../../../src/assets/gongshui_images/蓝.png'),
            des: '2025年万元GDP用水量(m3/万元)',
            num: '70.27',
          },
          {
            icon: require('../../../src/assets/gongshui_images/绿.png'),
            des: '2025年万元GDP用水量(m3/万元)',
            num: '70.27',
          },
        ],
      }
    },
    mounted() {},
    methods: {
      changeIframe(val) {
        this.showIframe = val
        switch (val) {
          case 0:
            break
        }
      },
    },
  }
</script>
<style scoped>
  .list-wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: scroll;
  }

  .list-item-wrap {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    height: 30%;
    line-height: 40px;
  }

  .list-item-wrap + .list-item-wrap {
    margin-top: 20px;
  }
  .list-num {
    font-size: 20px;
    font-weight: 600;
  }
  .card-content-wrap {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
</style>
