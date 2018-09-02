<template>
  <div class="base">
    <h1>选择排序</h1>
    <p>
        排序中每次交换获得xt一点好感度
    </p>

    <router-link :to="{name}">进入 {{name}} Demo</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    name () {
      return this.$route.name.split('_').pop()
    }
  }
}
</script>

<style scoped>
  .base {
      text-align: left;
      max-width: 800px;
      margin: auto;
  }
</style>
