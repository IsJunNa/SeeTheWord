<!-- 轮播图组件 -->
<template>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="1500">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">

            <div class="carousel-item active">
                <img :src="active.img" class="d-block w-100" :title="active.title">
                <div class="carousel-caption d-none d-md-block">
                    <h3>{{ active.title }}</h3>
                </div>
            </div>

            <div class="carousel-item" v-for="item in rotationList" :key="item.id">
                <img :src="item.img" class="d-block w-100" :title="item.title">
                <div class="carousel-caption d-none d-md-block">
                    <h3>{{ item.title }}</h3>
                </div>
            </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'HomeRotation',
    data() {
        return {
            active: { img: require("@/assets/rotation/1.jpg"), title: '习近平：在二十届中央审计委员会第一次会议上的讲话', id: '1' },
            rotationList: [
                { img: require("@/assets/rotation/2.jpg"), title: '牢记殷殷嘱托 奋力谱写新时代新征程工会工作新篇章', id: '2' },
                { img: require("@/assets/rotation/3.jpg"), title: '更好发挥审计在推进党的自我革命中的独特作用', id: '3' },
                { img: require("@/assets/rotation/4.jpg"), title: '习近平会见希腊总理米佐塔基斯', id: '4' },
            ]

        }
    },
}
</script>

<style lang="less" scoped>
.root {
    background-color: red;

    #carouselExampleCaptions {
        margin: 0 100px;

        img {
            height: 500px;
        }

        h3 {
            font-weight: bold;
        }
    }
}
</style>