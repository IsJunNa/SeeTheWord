<template>
    <div class="root">
        <BestowBackgroung></BestowBackgroung>
        <BestowNav></BestowNav>
        <BestowDetails></BestowDetails>
    </div>
</template>

<script>
import BestowNav from '@/page/bestow/BestowNav/BestowNav.vue'
import BestowBackgroung from '@/page/bestow/BestowBackground/BestowBackground.vue'
import BestowDetails from '@/page/bestow/BestowDetails/BestowDetails.vue'

export default {
    name: 'BestowIndex',
    components: { BestowNav, BestowBackgroung, BestowDetails },
    mounted() {
        document.title = '遗韵生辉'
        localStorage.setItem('JunNav', 'BestowIndex')
    }
}
</script>

<style lang="less" scoped>
::-webkit-scrollbar {
    width: 0 !important;
    height: 0;
}
</style>