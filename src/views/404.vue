<template>
  <view>
    <view class="wrap">
      <view class="text">正在建设中, 尽情期待哦 ～</view>
      <img class="img" :src="require('@/assets/404.png')" alt="404img" />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  font-size: 48rpx;
  color: skyblue;
  padding-top: 250rpx;

  .text {
    text-align: center;
    height: 100rpx;
    line-height: 100rpx;
    margin-bottom: 120rpx;
  }
  .img {
    width: 100%;
    height: auto;
    margin-left: 80rpx;
  }
}
</style>
