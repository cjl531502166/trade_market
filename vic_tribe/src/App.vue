<template>
  <div
    id="app"
    class="wh-full"
  >
    <keep-alive>
      <transition name="van-fade">
        <router-view></router-view>
      </transition>
    </keep-alive>
  </div>
</template>
<style lang="scss">
@import "@/assets/scss/public.scss";
</style>

<script>
export default {
  name: "App"
};
</script>

