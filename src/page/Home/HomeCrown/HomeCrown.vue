<!-- 首页顶层模块 -->
<template>
    <div class="root">
        <!-- 顶部宣传图 -->
        <HomeTopImg></HomeTopImg>
        <!-- 底部宣传图 -->
        <HomeBottomImgVue></HomeBottomImgVue>
        <!-- 滚动热点 -->
        <HomeExerciseTextVue></HomeExerciseTextVue>
    </div>
</template>

<script>
import HomeTopImg from './HomeTopImg/HomeTopImg.vue';
import HomeBottomImgVue from './HomeBottomImg/HomeBottomImg.vue';
import HomeExerciseTextVue from './HomeExerciseText/HomeExerciseText.vue';


export default {
    name: 'HomeCrown',
    components: { HomeTopImg, HomeBottomImgVue, HomeExerciseTextVue }
}
</script>

<style lang="less" scoped>
.root {
    width: 100%;
    background-color: #f2e5e5f3;
    position: absolute;
    top: 100%;
    z-index: 2;
}
</style>