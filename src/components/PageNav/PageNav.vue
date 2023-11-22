<template>
    <div class="root">
        <div class="nav">
            <div class="left">
                <div @click="goHome">
                    <img src="../../assets/logo/logo.png">
                </div>
            </div>
            <div class="right">
                <div @click="clickNav('/HomeIndex', 'HomeIndex')" v-if="name != 'HomeIndex'">
                    <img :src="require('@/assets/nav/indexLogo.png')">
                    <div>看世界</div>
                </div>
                <div @click="clickNav('/HomeIndex', 'HomeIndex')" v-else>
                    <img :src="require('@/assets/nav/indexLogo_H.png')">
                    <div style="color: #000000;">看世界</div>
                </div>
                <p></p>

                <div @click="clickNav('/RoadIndex', 'RoadIndex')" v-if="name != 'RoadIndex'">
                    <img :src="require('@/assets/nav/roadLogo.png')">
                    <div>传承之路</div>
                </div>
                <div @click="clickNav('/RoadIndex', 'RoadIndex')" v-else>
                    <img :src="require('@/assets/nav/roadLogo_H.png')">
                    <div style="color: #000000;">传承之路</div>
                </div>
                <p></p>

                <div @click="clickNav('/YearIndex', 'YearIndex')" v-if="name != 'YearIndex'">
                    <img :src="require('@/assets/nav/yearLogo.png')">
                    <div>红色岁月</div>
                </div>
                <div @click="clickNav('/YearIndex', 'YearIndex')" v-else>
                    <img :src="require('@/assets/nav/yearLogo_H.png')">
                    <div style="color: #000000;">红色岁月</div>
                </div>
                <p></p>

                <div @click="clickNav('/BestowIndex', 'BestowIndex')" v-if="name != 'BestowIndex'">
                    <img :src="require('@/assets/nav/bestowLogo.png')">
                    <div>遗韵生辉</div>
                </div>
                <div @click="clickNav('/BestowIndex', 'BestowIndex')" v-else>
                    <img :src="require('@/assets/nav/bestowLogo_H.png')">
                    <div style="color: #000000;">遗韵生辉</div>
                </div>
                <p></p>

                <div @click="clickNav('/UserIndex', 'UserIndex')" v-if="name != 'UserIndex'">
                    <img :src="require('@/assets/nav/userLogo.png')">
                    <div>个人中心</div>
                </div>
                <div @click="clickNav('/UserIndex', 'UserIndex')" v-else>
                    <img :src="require('@/assets/nav/userLogo_H.png')">
                    <div style="color: #000000;">个人中心</div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageNav',
    data() {
        return {
            name: 'HomeIndex'
        }
    },
    methods: {
        clickNav(link, name) {
            localStorage.setItem('JunNav', name)
            this.name = localStorage.getItem('JunNav')
            this.$router.push(link)
        },
        goHome() {
            this.$router.push('/HomeIndex')
            localStorage.setItem('JunNav', 'HomeIndex')
        }
    },
    mounted() {
        setInterval(() => {
            this.name = localStorage.getItem('JunNav')
        }, 1)
    }
}
</script>

<style lang="less" scoped>
// 导航栏样式
.root {
    .nav {
        background-color: #a9212100;
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        transition: 2s;

        .left {
            div {
                img {
                    height: 40px;
                    margin: 7px 30px;
                }
            }
        }

        .right {
            display: flex;
            align-items: center;

            div {
                color: rgb(152, 21, 21);
                text-decoration: none;
                display: flex;
                margin: 0 30px;
                font-weight: bold;
                cursor: pointer;

                img {
                    width: 30px;
                    height: 30px;
                    margin-right: 10px;
                }

                div {
                    font-size: 20px;
                    font-weight: bold;
                    margin: 0;
                }

            }
        }

    }

    // 鼠标移入导航栏
    .nav:hover {
        background-color: rgba(255, 254, 254, 0.5);
    }
}
</style>