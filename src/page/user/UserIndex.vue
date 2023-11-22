<template>
    <div class="root">
        <PageNav></PageNav>
        <HomeBackground></HomeBackground>
        <UserDetailsVue></UserDetailsVue>
    </div>
</template>

<script>
import PageNav from '@/components/PageNav/PageNav.vue';
import HomeBackground from '../Home/HomeBottom/HomeBackground/HomeBackground.vue';
import UserDetailsVue from './UserDetails/UserDetails.vue';
export default {
    name: 'UserIndex',
    components: { PageNav, HomeBackground, UserDetailsVue },
    mounted() {
        document.title = '个人中心'
        localStorage.setItem('JunNav', 'UserIndex')
    }
}
</script>

<style lang="less" scoped></style>