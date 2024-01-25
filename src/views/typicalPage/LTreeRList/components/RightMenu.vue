<template>
  <ul v-show="menuShow" id="menu" class="menu">
    <!-- 放<li>标签 -->
    <slot></slot>
  </ul>
</template>
<script>
  export default {
    props: {
      menuVisible: Boolean, // eslint-disable-line
    },
    data() {
      return {
        menuShow: this.menuVisible,
      }
    },
    methods: {
      handleShow(MouseEvent) {
        this.menuShow = false
        this.menuShow = true
        var menu = document.querySelector('#menu')
        menu.style.left = MouseEvent.clientX + 'px'
        menu.style.top = MouseEvent.clientY + 'px'
        document.addEventListener('click', this.foo)
      },
      foo() {
        this.menuShow = false
        document.removeEventListener('click', this.foo)
      },
    },
  }
</script>
<style lang="scss" scoped>
  .menu {
    position: fixed;
    z-index: 15;
    width: 150px;
    height: auto;
    padding-inline-start: 20px;
    user-select: none;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 7px #aaa;
  }
  .menu-item {
    display: block;
    padding-left: 5px;
    font-size: 12px;
    line-height: 26px;
  }
  li:hover {
    color: white;
    cursor: default;
    background-color: #409eff;
    transition: all 0.1s ease;
  }
</style>
