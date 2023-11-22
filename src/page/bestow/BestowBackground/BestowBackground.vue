<template>
    <div class="root">
        <video autoplay loop muted>
            <source :src="require('@/assets/background/水墨中国龙.mp4')" type="video/mp4">
        </video>
    </div>
</template>

<script>
export default {
    name: 'BestowBackground'
}
</script>

<style lang="less" scoped>
.root {
    opacity: 0.3;

    video {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        z-index: -1;
        opacity: 1;
    }
}

::-webkit-scrollbar {
    width: 0 !important;
    height: 0;
}
</style>