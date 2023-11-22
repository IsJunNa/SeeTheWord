<!-- 顶部宣传图组件 -->
<template>
    <div class="navimg">
        <img :src="require('@/assets/other/topNav.jpg')">
        <!-- 轮播图组件 -->
        <HomeRotationVue></HomeRotationVue>
    </div>
</template>

<script>
import HomeRotationVue from '@/page/Home/HomeCrown/HomeRotation/HomeRotation.vue';
export default {
    name: 'HomeTopImg',
    components: { HomeRotationVue }
}
</script>

<style lang="less" scoped>
.navimg {
    img {
        width: 100%;
        height: 100%;
    }
}
</style>