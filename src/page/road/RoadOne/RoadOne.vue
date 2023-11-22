<template>
    <div class="root" style="overflow:-Scroll;overflow-x:hidden;">
        <PageNav class="PageNav"></PageNav>
        <div class="content">
            <div class="left">
                <img src="../../../assets/road/l1.jpg">
                <div class="title">传承之路</div>
            </div>
            <div class="box">
                <ul>
                    <li @click="goToDetails('戏曲文化')">
                        <img src="../../../assets/road/r1.jpg" />
                        <div class="title">
                            <div>戏曲文化</div>
                            <p>点击了解更多</p>
                        </div>
                    </li>
                    <li @click="goToDetails('古玩器物')">
                        <img src="../../../assets/road/r2.jpg" />
                        <div class="title">
                            <div>古玩器物</div>
                            <p>点击了解更多</p>
                        </div>
                    </li>
                    <li @click="goToDetails('艺术珍品')">
                        <img src="../../../assets/road/r3.jpg" />
                        <div class="title">
                            <div>艺术珍品</div>
                            <p>点击了解更多</p>
                        </div>
                    </li>
                    <li @click="goToDetails('民间艺术')">
                        <img src="../../../assets/road/r4.jpg" />
                        <div class="title">
                            <div>民间艺术</div>
                            <p>点击了解更多</p>
                        </div>
                    </li>
                    <li @click="goToDetails('木版水印')">
                        <img src="../../../assets/road/r5.jpg" />
                        <div class="title">
                            <div>木版水印</div>
                            <p>点击了解更多</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import 'animate.css';
import PageNav from '@/components/PageNav/PageNav.vue';
export default {
    name: 'RoadOne',
    components: { PageNav },
    methods: {
        goToDetails(title) {
            switch (title) {
                case '戏曲文化':
                    this.$router.push('/XiQuWenHua')
                    break;
                case '古玩器物':
                    this.$router.push('/GuWanQiWu')
                    break;
                case '艺术珍品':
                    this.$router.push('/YiShuZhenPin')
                    break;
                case '民间艺术':
                    this.$router.push('/MinJianYiShu')
                    break;
                case '木版水印':
                    this.$router.push('/MuBanShuiYin')
                    break;
            }






        }
    }
}
</script>

<style lang="less" scoped>
.root {
    position: absolute;

    .PageNav {
        background: linear-gradient(to bottom, rgb(73, 73, 73), rgba(0, 0, 0, 0));
        z-index: 999;
        width: 100%;
    }

    .content {
        display: flex;

        .left {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                height: 100vh;
            }

            .title {
                position: absolute;
                z-index: 999;
                color: rgb(207, 200, 200);
                display: flex;
                font-size: 50px;
                font-weight: bold;
                width: 30px;
            }
        }

        .box {
            margin: 0;
            padding: 0;
            height: 100vh;

            ul {
                width: 100%;
                height: 100%;
                overflow: hidden;
                transition: all .3s;
                margin: 0;
                padding: 0;
                perspective: 1000px;

                &:hover li {
                    width: 15%;
                }

                li {
                    position: relative;
                    float: left;
                    list-style-type: none;
                    width: 20%;
                    height: 100vh;
                    display: flex;
                    justify-content: left;
                    align-items: center;
                    transform: scale(1);
                    transform: translateZ(0);
                    transition: all .5s ease-in-out;

                    p {
                        transition: all 3s;
                        display: none;
                        top: 100%;
                        left: 5%;
                        position: absolute;
                        font-size: 25px;
                    }

                    img {
                        height: 100%;
                    }

                    &:hover {
                        width: 35%;
                        transform: translateZ(100px);

                        div {
                            top: 70%;
                            width: 100%;
                            font-size: 50px;
                            font-weight: bold;
                            left: 25%;

                            p {
                                display: block;
                            }
                        }
                    }

                    .title {
                        position: absolute;
                        z-index: 999;
                        color: white;
                        display: flex;
                        margin-left: 20px;
                        font-size: 35px;
                        width: 30px;
                    }
                }
            }
        }
    }
}
</style>