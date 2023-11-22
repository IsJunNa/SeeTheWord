<template>
    <div class="root">
        <PageNavVue></PageNavVue>
        <LoginBackground></LoginBackground>
        <LoginFrame></LoginFrame>
    </div>
</template>

<script>
import PageNavVue from '@/components/PageNav/PageNav.vue'
import LoginBackground from '@/page/Login/LoginBackground/LoginBackground.vue'
import LoginFrame from './LoginFrame/LoginFrame.vue';
export default {
    name: 'UserLogin',
    components: { PageNavVue, LoginBackground, LoginFrame },
    mounted() {
        document.title = '请先完成登录'
         localStorage.setItem('JunNav', 'UserIndex')
    }
}
</script>

<style lang="less" scoped></style>