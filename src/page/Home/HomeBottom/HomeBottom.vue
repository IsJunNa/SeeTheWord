<!-- 首页底部模块 -->
<template>
    <div class="root">
        <!-- 背景图 -->
        <HomeBackground></HomeBackground>
        <!-- 动态诗词 -->
        <HomePoetryVue></HomePoetryVue>
        <!-- 导航栏 -->
        <PageNav></PageNav>
    </div>
</template>

<script>
import PageNav from '@/components/PageNav/PageNav.vue'
import HomeBackground from './HomeBackground/HomeBackground.vue'
import HomePoetryVue from './HomePoetry/HomePoetry.vue'
export default {
    name: 'HomeBottom',
    components: { PageNav, HomeBackground, HomePoetryVue }
}
</script>

<style lang="less" scoped>
.root {
    position: fixed;
    width: 100%;
    background-size: cover;
    background-position: center;
    height: 100vh;
    z-index: 1;
}
</style>