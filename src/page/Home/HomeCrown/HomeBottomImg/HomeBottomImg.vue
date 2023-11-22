<!-- 底部宣传图组件 -->
<template>
    <div class="navimg">
        <img :src="require('@/assets/other/navimg.jpg')">
    </div>
</template>

<script>
export default {
    name: 'HomeBottomImg'
}
</script>

<style lang="less" scoped>
.navimg {
    display: flex;

    img {
        height: 103px;
        width: 100%;
    }
}
</style>