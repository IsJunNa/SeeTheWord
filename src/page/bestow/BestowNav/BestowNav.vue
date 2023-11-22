<template>
    <div class="root">
        <!-- 导航栏 -->
        <div class="nav">
            <ul>
                <div class="left">
                    <li @click="makeActive('语言文化')">
                        <div class="owner" :class="{ 'active': activeOwner === '语言文化' }">语言文化
                        </div>
                        <div class="order">
                            <ul>
                                <li @click="addLiActive('语言文化', '汉字起源', 'ChineseOriginate')"
                                    :class="{ 'liActive': liActive === '汉字起源' }">汉字起源</li>
                                <li @click="addLiActive('语言文化', '经典文学', 'ClassicLiterature')"
                                    :class="{ 'liActive': liActive === '经典文学' }">经典文学</li>
                                <li @click="addLiActive('语言文化', '现代汉语', 'ModernTimesChinese')"
                                    :class="{ 'liActive': liActive === '现代汉语' }">现代汉语</li>
                            </ul>
                        </div>
                    </li>
                    <li @click="makeActive('表演艺术')">
                        <div class="owner" :class="{ 'active': activeOwner === '表演艺术' }">表演艺术
                        </div>
                        <div class="order">
                            <ul>
                                <li @click="addLiActive('表演艺术', '传统戏剧', 'TraditionalDrama')"
                                    :class="{ 'liActive': liActive === '传统戏剧' }">传统戏剧</li>
                                <li @click="addLiActive('表演艺术', '京剧艺术', 'PekingOpera')"
                                    :class="{ 'liActive': liActive === '京剧艺术' }">
                                    京剧艺术</li>
                                <li @click="addLiActive('表演艺术', '传统音乐', 'TraditionMusic')"
                                    :class="{ 'liActive': liActive === '传统音乐' }">传统音乐</li>
                            </ul>
                        </div>
                    </li>
                    <li @click="makeActive('社会风俗')">
                        <div class="owner" :class="{ 'active': activeOwner === '社会风俗' }">社会风俗
                        </div>
                        <div class="order">
                            <ul>
                                <li @click="addLiActive('社会风俗', '婚礼习俗', 'WeddingCustoms')"
                                    :class="{ 'liActive': liActive === '婚礼习俗' }">传统节庆</li>
                                <li @click="addLiActive('社会风俗', '茶文化', 'TeaCulture')"
                                    :class="{ 'liActive': liActive === '茶文化' }">
                                    茶文化</li>
                                <li @click="addLiActive('社会风俗', '礼仪习俗', 'EtiquetteCustoms')"
                                    :class="{ 'liActive': liActive === '礼仪习俗' }">礼仪习俗</li>
                            </ul>
                        </div>
                    </li>
                </div>
                <div class="logo">
                    <div class="a" @click="goHome('/HomeIndex')">
                        <img :src="require('@/assets/logo/logo.png')" title="点击返回首页">
                        首页
                    </div>
                </div>
                <div class="right">
                    <li @click="makeActive('礼仪文化')">
                        <div class="owner" :class="{ 'active': activeOwner === '礼仪文化' }">礼仪文化
                        </div>
                        <div class="order">
                            <ul>
                                <li @click="addLiActive('礼仪文化', '礼仪演变', 'EvolutionOfEtiquette')"
                                    :class="{ 'liActive': liActive === '礼仪演变' }">礼仪演变</li>
                                <li @click="addLiActive('礼仪文化', '家庭礼仪', 'FamilyEtiquette')"
                                    :class="{ 'liActive': liActive === '家庭礼仪' }">家庭礼仪</li>
                                <li @click="addLiActive('礼仪文化', '商务礼仪', 'BusinessEtiquette')"
                                    :class="{ 'liActive': liActive === '商务礼仪' }">商务礼仪</li>
                            </ul>
                        </div>
                    </li>
                    <li @click="makeActive('节庆文化')">
                        <div class="owner" :class="{ 'active': activeOwner === '节庆文化' }">节庆文化
                        </div>
                        <div class="order">
                            <ul>
                                <li @click="addLiActive('节庆文化', '春节传统', 'SpringFestival')"
                                    :class="{ 'liActive': liActive === '春节传统' }">春节传统</li>
                                <li @click="addLiActive('节庆文化', '现代节庆', 'ModernFestivals')"
                                    :class="{ 'liActive': liActive === '现代节庆' }">现代节庆</li>
                                <li @click="addLiActive('节庆文化', '节庆意义', 'HolidayMeaning')"
                                    :class="{ 'liActive': liActive === '节庆意义' }">节庆意义</li>
                            </ul>
                        </div>
                    </li>
                    <li @click="makeActive('手工艺术')">
                        <div class="owner" :class="{ 'active': activeOwner === '手工艺术' }">手工艺术
                        </div>
                        <div class="order">
                            <ul>
                                <li @click="addLiActive('手工艺术', '传统绘画', 'TraditonDraw')"
                                    :class="{ 'liActive': liActive === '传统绘画' }">传统绘画</li>
                                <li @click="addLiActive('手工艺术', '工艺传承', 'TraditionTechnology')"
                                    :class="{ 'liActive': liActive === '工艺传承' }">工艺传承</li>
                                <li @click="addLiActive('手工艺术', '陶瓷雕刻', 'CeramicsCarving')"
                                    :class="{ 'liActive': liActive === '陶瓷雕刻' }">陶瓷雕刻</li>
                            </ul>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BestowNav',
    data() {
        return {
            activeOwner: null,
            liActive: null,
            navName: ''
        };
    },
    methods: {
        // 导航栏选中样式
        makeActive(owner) {
            console.log(owner);
            // this.activeOwner = owner;
        },
        // 点击返回首页按钮
        goHome(link) {
            localStorage.setItem('JunNav', 'HomeIndex')
            this.$router.push(link)
        },
        // 导航栏小点选中样式
        addLiActive(order, owner, link) {
            this.activeOwner = order;
            this.liActive = owner;
            localStorage.setItem('JunTabname', order)
            localStorage.setItem('JunNavname', owner)
            this.$router.push("/" + link)
        }
    },
    mounted() {
        this.activeOwner = localStorage.getItem('JunTabname')
        this.liActive = localStorage.getItem('JunNavname')
    }
}
</script>

<style lang="less" scoped>
.root {
    width: 100%;
    // overflow: hidden;
    display: flex;
    justify-content: space-between;
    background: linear-gradient(to bottom, rgb(160, 157, 157), rgba(0, 0, 0, 0));

    li {
        list-style: none;
    }

    position: relative;
    z-index: 1;

    // 导航栏
    .nav {
        ul {
            display: flex;
            justify-content: center;
            width: 100vw;

            .logo {
                width: 6vw;

                .a {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    font-size: 20px;
                    color: white;
                    font-weight: bold;
                    text-decoration: none;

                    img {
                        width: 80px;
                        height: 80px;
                        margin-top: 10px;
                    }
                }
            }

            .left,
            .right {
                display: flex;
                justify-content: center;
                width: 47vw;

                .active {
                    background-color: rgb(150, 141, 143);
                }

                li {
                    cursor: pointer;

                    .owner {
                        padding: 40px 20px 40px 20px;
                        margin: 0 40px;
                        clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%);
                        font-size: 20px;
                        color: rgb(240, 240, 240);
                        font-weight: bold;
                    }

                    .owner:hover {
                        background-color: rgb(150, 141, 143);
                    }

                    .order {
                        z-index: 999;
                        top: 100px;
                        width: 120px;
                        position: absolute;
                        display: none;
                        padding: 40px 0 20px;
                        margin: 0 40px;
                        clip-path: polygon(0 12%, 100% 0, 100% 100%, 0 100%);
                        background-color: rgba(93, 91, 90, 0.5);

                        ul {
                            display: block;
                            font-size: 16px;
                            color: white;
                            line-height: 40px;

                            li {
                                font-weight: bold;
                                cursor: pointer;
                            }

                            li:hover {
                                color: black;
                            }

                            .liActive {
                                color: black;
                            }
                        }
                    }
                }

                li:hover {
                    .owner {
                        background-color: rgb(150, 141, 143);
                    }

                    .order {
                        display: block;
                    }
                }

            }
        }

    }
}

::-webkit-scrollbar {
    width: 0 !important;
    height: 0;
}
</style>