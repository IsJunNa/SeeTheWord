<!-- 滚动热点组件 -->
<template>
    <div class="root">
        <div class="marquee">
            <div class="title">热点</div>
            <marquee>
                <h4>中国妇女第十三次全国代表大会在京开幕 习近平等党和国家领导人到会祝贺</h4>
            </marquee>
        </div>
        <!-- 新闻列表 -->
        <HomeNews></HomeNews>
    </div>
</template>

<script>
import HomeNews from '@/page/Home/HomeCrown/HomeNews/HomeNews.vue';
export default {
    name: 'HomeExerciseText',
    components: { HomeNews }
}
</script>

<style lang="less" scoped>
.root {
    position: relative;

    .marquee {
        display: flex;
        background-color: #f2f1f1;
        position: sticky;
        top: 0px;
        z-index: 999;

        .title {
            text-align: center;
            width: 100px;
            line-height: 45px;
            font-size: 20px;
            color: white;
            background-color: rgb(197, 58, 58);
        }

        h4 {
            font-size: 25px;
            line-height: 40px;
        }
    }
}
</style>