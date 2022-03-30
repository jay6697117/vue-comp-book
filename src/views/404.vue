<template>
  <div class="wrap">
    <div class="text">正在建设中, 尽情期待哦 ～</div>
    <button class="btn" @click="$router.replace({ path: '/' })">返回首页</button>
    <img class="img" :src="require('@/assets/404.png')" alt="404img" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="css" scoped>
.wrap {
  font-size: 24px;
  color: purple;
}

.wrap .text {
  text-align: center;
  height: 50px;
  line-height: 50px;
  margin-bottom: 20px;
}

.wrap .btn {
  display: block;
  width: 200px;
  text-align: center;
  margin: 0 auto 20px;
  padding: 5px;
}
.wrap .img {
  display: block;
  width: 400px;
  height: auto;
  margin: 0 auto;
}
</style>
