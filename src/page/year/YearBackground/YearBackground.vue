<template>
    <div class="root">
        <video autoplay loop muted>
            <source :src="require('@/assets/background/抗日战争胜利日动画壁纸版.mp4')" type="video/mp4">
        </video>
    </div>
</template>

<script>
export default {
    name: 'YearBackground',
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
        opacity: 0.8;
    }
}
</style>