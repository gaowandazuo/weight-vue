<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mian">
    <div class="widget-header">
      <div class="name">
        <span :class="{ active: showIframe == 0 }" @click="changeIframe(0)">
          最美河湖长
        </span>
      </div>
    </div>
    <div class="widget-main">
      <el-carousel :autoplay="false" indicator-position="outside">
        <el-carousel-item v-for="(item, index) in picList" :key="index">
          <div class="list-box">
            <div v-for="(item1, index1) in item" :key="index1" class="zm-box">
              <div class="zm-img">
                <img :src="item1.img" />
              </div>
              <div class="zm-info">
                <p>{{ item1.name }}</p>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showIframe: 0,
        showTab: 0,
        picList: [
          [
            {
              name: '张三',
              img: require('../../../src/assets/images/img-p-1.png'),
            },
            {
              name: '李四',
              img: require('../../../src/assets/images/img-p-2.png'),
            },
            {
              name: '王五',
              img: require('../../../src/assets/images/img-p-3.png'),
            },
          ],
          [
            {
              name: '张三',
              img: require('../../../src/assets/images/img-p-1.png'),
            },
            {
              name: '李四',
              img: require('../../../src/assets/images/img-p-2.png'),
            },
            {
              name: '王五',
              img: require('../../../src/assets/images/img-p-3.png'),
            },
          ],
          [
            {
              name: '张三',
              img: require('../../../src/assets/images/img-p-1.png'),
            },
            {
              name: '李四',
              img: require('../../../src/assets/images/img-p-2.png'),
            },
            {
              name: '王五',
              img: require('../../../src/assets/images/img-p-3.png'),
            },
          ],
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
  /* 样式 */
  body .el-carousel__indicator--horizontal {
    width: 10px;
    height: 10px;
    padding: 0;
    margin: 0 5px;
    background: #add8fd;
    border-radius: 50%;
  }
  body .el-carousel__indicator--horizontal.is-active {
    background: #5bb2fc;
  }
  .el-carousel__indicators--outside button {
    display: none;
  }

  .list-box {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
    height: 240px;
  }
  .zm-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 33%;
    height: 100%;
    margin-top: 20px;
    text-align: center;
  }
</style>
