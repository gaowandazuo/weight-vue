<template>
  <div class="index-container">
    <el-row :gutter="20">
      <vab-draggable
        ref="draggable"
        v-bind="dragOptions"
        :list="cardList"
        @end="onEnd"
      >
        <slot></slot>
      </vab-draggable>
    </el-row>
  </div>
</template>

<script>
  import VabDraggable from 'vuedraggable'
  export default {
    name: 'VabHomeLayout',
    components: {
      VabDraggable,
    },
    data() {
      return {
        cardList: [],
        dragOptions: {
          animation: 600,
          group: 'description',
        },
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        const savedComponentOrder = localStorage.getItem('componentOrder')
        if (savedComponentOrder) {
          const componentOrder = JSON.parse(savedComponentOrder)

          this.cardList = componentOrder.map((key, index) => {
            return this.getComponentByKey(key)
          })
          // 更新视图
          this.$slots.default = this.cardList
        } else {
          this.cardList = this.$slots.default
        }
      },
      getComponentByKey(key) {
        return this.$slots.default.filter((VNode) => {
          return key == VNode.key
        })[0]
      },
      onEnd() {
        const componentOrder = this.cardList.map((item) => item.key)
        localStorage.setItem('componentOrder', JSON.stringify(componentOrder))
      },
    },
  }
</script>

<style lang="scss" scoped>
  .index-container {
    padding: 0 !important;
    background: $base-color-background !important;
  }
</style>
