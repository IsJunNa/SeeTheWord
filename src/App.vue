<template>
  <div id="app">
    <!-- 页面过渡动画 -->
    <transition name="slide">
      <div v-show="showBox" class="yellow-box">
        <h1>别眨眼,马上就到</h1>
        <div class="c1"></div>
        <div class="c2"></div>
        <div class="c3"></div>
        <div class="c4"></div>
        <div class="c5"></div>
        <div class="c6"></div>
        <div class="c7"></div>
        <div class="c8"></div>
        <div class="c9"></div>
        <div class="c10"></div>
      </div>
    </transition>
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // 控制过渡动画的显示与隐藏
      showBox: false
    };
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      this.showBox = true;
      setTimeout(() => {
        this.showBox = false;
        next();
      }, 1000);// 过渡动画时间
    });
  }
};
</script>

<style lang="less">
@keyframes Jun {
  0% {
    transform: translateX(-130vw);
  }

  50% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(130vw);
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 1s;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}

.yellow-box {
  position: fixed;
  top: 0;
  left: 0vw;
  width: 100vw;
  height: 100vh;
  background-color: #ffd03f;
  z-index: 9999;
  animation: Jun 2s forwards;

  h1 {
    text-align: center;
    line-height: 100vh;
    z-index: 999999;
    position: absolute;
    left: 40%;
    font-weight: bold;
    font-size: 40px;
  }

  div {
    position: fixed;
    width: 100vw;
    height: 10vh;
    background-color: #ffd03f;
    z-index: 9999;
  }

  div:nth-child(1) {
    top: 10vh;
    left: -20vw;
    width: 140vw;
  }

  div:nth-child(2) {
    top: 10vh;
    left: -30vw;
    width: 160vw;
  }

  div:nth-child(3) {
    top: 20vh;
    left: -15vw;
    width: 130vw;
  }

  div:nth-child(4) {
    top: 30vh;
    left: -10vw;
    width: 120vw;
  }

  div:nth-child(5) {
    top: 40vh;
    left: -20vw;
    width: 140vw;
  }

  div:nth-child(6) {
    top: 50vh;
    left: -30vw;
    width: 160vw;
  }

  div:nth-child(7) {
    top: 60vh;
    left: -10vw;
    width: 120vw;
  }

  div:nth-child(8) {
    top: 70vh;
    left: -20vw;
    width: 140vw;
  }

  div:nth-child(9) {
    top: 80vh;
    left: 0vw;
    width: 100vw;
  }

  div:nth-child(10) {
    top: 90vh;
    left: -10vw;
    width: 120vw;
  }
}

//滚动条样式
// ::-webkit-scrollbar {
//   width: 8px;
// }
// ::-webkit-scrollbar-track {
//   background-color: rgb(192, 238, 239);
// }
// ::-webkit-scrollbar-thumb {
//   background-image: -webkit-linear-gradient(90deg, #12c2e9, #c471ed, #f64f59);
//   border-radius: 4px;
// }
// ::-webkit-scrollbar-thumb:hover {
//   background-color: rgb(237, 92, 116);
// }


* {
  margin: 0;
  padding: 0;
  user-select: none;
  font-family: YouYuan;
}

// 隐藏滚动条
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
</style>
