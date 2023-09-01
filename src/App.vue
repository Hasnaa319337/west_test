<template>
  <div>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
mounted(){
    this.$router.afterEach((to) => {
      if (to.path === '/') {
        document.body.style.background = 'rgb(221 221 221 / 38%)';
      } else {
        document.body.style.background = '#fff';
      }
    });
  }
}
</script>

<style></style>
