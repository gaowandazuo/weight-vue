<template>
  <div id="vab-app-main" class="vab-app-main">
    <section :style="{ 'min-height': height }">
      <vab-router-view />
    </section>
    <vab-footer />
  </div>
</template>

<script>
  import { showFooter } from '@/config'
  import { mapGetters } from 'vuex'
  export default {
    name: 'VabAppMain',
    data() {
      return {
        showFooter,
      }
    },
    computed: {
      ...mapGetters({
        theme: 'settings/theme',
      }),
      height() {
        if (this.theme.layout == 'pure') {
          return 'calc( 100vh - 20px * 2)'
        } else {
          return showFooter
            ? 'calc( 100vh - 60px - 50px - 20px * 2 - 55px )'
            : 'calc( 100vh - 60px - 50px - 20px * 2 )'
        }
      },
    },
  }
</script>
