<!-- 首页看世界模块 -->
<template>
    <div class="root">
        <el-backtop top="100" :right="15"></el-backtop>
        <!-- 顶层组件 -->
        <HomeCrownVue></HomeCrownVue>
        <!-- 底层组件 -->
        <HomeBottomVue></HomeBottomVue>
    </div>
</template>

<script>
import HomeBottomVue from './HomeBottom/HomeBottom.vue'
import HomeCrownVue from './HomeCrown/HomeCrown.vue'
export default {
    name: 'HomeIndex',
    components: { HomeBottomVue, HomeCrownVue },
    mounted() {
        localStorage.setItem('JunNav', 'HomeIndex')
        document.title = '看世界'
        localStorage.removeItem('JunNavname')
        localStorage.removeItem('JunTabname')
        if (!window.firstOpenDialogFlag) {
            window.firstOpenDialogFlag = true;
            this.open()
        }
    },
    methods: {
        // 首次进入页面显示提示框
        open() {
            const msg = '网站部分功能调用接口,需要联网加载!🥳<br>网站部分功能调用接口,需要联网加载!🥳<br>网站部分功能调用接口,需要联网加载!🥳<br><br>网站已部署服务器可通过 http://www.zhujunpeng.love 访问'
            localStorage.setItem('JunNav', 'HomeIndex')
            this.$alert(msg, '提示', {
                confirmButtonText: '我知道啦！',
                center: true,
                showClose: false,
                dangerouslyUseHTMLString: true
            });
        }
    }
}
</script>
<style lang="less" scoped></style>