<!-- 背景组件 -->
<template>
    <div class="root">
        <video autoplay loop muted>
            <source :src="require('@/assets/background/国旗.mp4')" type="video/mp4">
        </video>
    </div>
</template>

<script>
export default {
    name: 'HomeBackground'
}
</script>

<style lang="less" scoped>
.root {
    video {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        z-index: -1;
    }
}
</style>