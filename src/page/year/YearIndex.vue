<template>
    <div class="root">
        <YearBackground></YearBackground>
        <PageNav class="PageNav"></PageNav>
        <YearCRollVue></YearCRollVue>
    </div>
</template>

<script>
import PageNav from '@/components/PageNav/PageNav.vue';
import YearBackground from '@/page/year/YearBackground/YearBackground.vue'
import YearCRollVue from './YearCRoll/YearCRoll.vue';
export default {
    name: 'YearIndex',
    components: { PageNav, YearBackground, YearCRollVue },
    mounted() {
        document.title = '红色岁月'
        localStorage.setItem('JunNav', 'YearIndex')
    }
}
</script>

<style lang="less" scoped>
.root {
    overflow: auto;

    .PageNav {
        background: linear-gradient(to bottom, rgb(142, 138, 138), rgba(0, 0, 0, 0));
    }
}
</style>