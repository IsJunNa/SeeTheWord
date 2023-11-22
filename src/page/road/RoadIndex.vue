<template>
    <div class="root">
        <RoadOneVue class="RoadOneVue"></RoadOneVue>
    </div>
</template>

<script>

import RoadOneVue from './RoadOne/RoadOne.vue';
export default {
    name: 'RoadIndex',
    components: { RoadOneVue },
    mounted() {
        document.title = '传承之路'
        localStorage.setItem('JunNav', 'RoadIndex')
    }
}
</script>

<style lang="less" scoped>
.root {
    position: relative;
    height: 100vh;
    overflow: auto;
    scroll-snap-type: y mandatory;
    height: 100vh;
    scroll-snap-type: y mandatory;

    .RoadOneVue {
        scroll-snap-align: start;
    }
}
</style>