<!-- 新闻预览组件 -->
<template>
    <div class="root">
        <!-- 新闻预览 -->
        <div v-if="flag == 'res'">
            <div class="news" v-for="(tab, index) in newTab" :key="index">
                <div class="new">
                    <h4 class="title" :id="tab.name">{{ tab.name }}</h4>
                    <router-link :to="'/NewsDetails/' + item.id" class="newcontent" v-for="item in filteredNewsList(tab.id)"
                        :key="item.id">
                        <div v-if="item.cover == 'http://124.93.196.45:10001/null'">
                            <img :src="require('@/assets/other/err.png')" alt="Error Image" />
                        </div>
                        <div class="box1" v-else>
                            <img :src="item.cover" :alt="item.title" />
                        </div>
                        <p>{{ item.title }}</p>
                        <div class="box2">
                            <span>评论数: {{ item.commentNum }}</span>
                            <span>点赞数: {{ item.likeNum }}</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="err" v-else-if="flag === 'err'" @click="clickErr">
            <h1>加载新闻列表失败，请检查网络后重试</h1>
            <h4>点击重试</h4>
        </div>
        <div class="loadingBox" v-else>
            <div class="loading"></div>
            <h4>正在努力加载新闻列表</h4>
        </div>
        <PageFooter></PageFooter>
    </div>
</template>

<script>
import axios from 'axios'
import PageFooter from '@/components/PageFooter/PageFooter.vue';
export default {
    name: 'HomeNews',
    data() {
        return {
            // 新闻数据
            newsList: [],
            // 新闻分类
            newTab: [],
            // 请求服务器地址
            URL: 'http://124.93.196.45:10001/',
            // 控制新闻显示与隐藏
            flag: 'loading'
        }
    },
    components: { PageFooter },
    methods: {
        // 获得新闻分类数据
        getNewTab() {
            axios({
                url: this.URL + '/prod-api/press/category/list'
            }).then(res => {
                this.newTab = res.data.data
            }).catch(() => {
                this.flag = 'err'
            })
        },
        // 获得新闻列表数据
        getNew() {
            axios({
                url: this.URL + '/prod-api/press/press/list',
            }).then(res => {
                this.newsList = res.data.rows
                this.newsList.splice(1, 2)
                this.newsList.map(item => {
                    item.cover = this.URL + item.cover
                })
                this.flag = 'res'
            }).catch(() => {
                this.flag = 'err'
            })
        },
        // 点击重新加载新闻数据
        clickErr() {
            this.flag = 'loading'
            this.getNewTab()
            this.getNew()
        }
    },
    mounted() {
        this.getNewTab()
        this.getNew()
    },
    computed: {
        // 过滤掉与类别不相符的新闻
        filteredNewsList() {
            return (tabId) => {
                return this.newsList.filter(item => tabId == item.type);
            };
        }
    },
}
</script>

<style lang="less" scoped>
.root {
    position: relative;

    .news {
        display: flex;
        padding: 0 30px;
        justify-content: space-between;

        .new {
            margin: 20px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;

            .title {
                font-size: 25px;
                margin-right: 90%;
                padding: 10px;
                border-bottom: 5px solid red;
            }

            .newcontent {
                width: 30%;
                height: 200px;
                background-color: rgb(255, 255, 255);
                margin: 20px;
                border-radius: 20px;
                text-align: center;
                color: black;
                text-decoration: none;

                div:nth-child(1) {
                    width: 100%;
                    height: 70%;
                    overflow: hidden;
                    border-radius: 20px 20px 5px 5px;

                    img {
                        width: 100%;
                        height: 100%;
                        transition: all .6s;
                    }
                }

                p {
                    font-size: 20px;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    margin-bottom: 0;
                }

                .box2 {
                    color: rgb(132, 128, 128);
                    padding: 0 10px;
                    display: flex;
                    justify-content: space-between;
                }
            }

            .newcontent:hover {
                box-shadow: 5px 5px 30px 5px rgb(59, 57, 57);

                img {
                    transform: scale(1.5);
                }
            }
        }
    }

    .loadingBox {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 300px;
        margin-left: 50px;

        h4 {
            font-weight: bold;
            position: relative;
            top: 50px;
            left: -30px;
            margin-top: 10px;
        }

        .loading {
            display: block;
            position: relative;
            width: 6px;
            height: 10px;
            animation: rectangle infinite 1s ease-in-out -0.2s;
            background-color: #000;
            left: 90px;
        }


        .loading:before,
        .loading:after {
            position: absolute;
            width: 6px;
            height: 10px;
            content: "";
            background-color: #000;
        }

        .loading:before {
            left: -14px;
            animation: rectangle infinite 1s ease-in-out -0.4s;
        }

        .loading:after {
            right: -14px;
            animation: rectangle infinite 1s ease-in-out;
        }

        @keyframes rectangle {

            0%,
            80%,
            100% {
                height: 20px;
                box-shadow: 0 0 #000;
            }

            40% {
                height: 30px;
                box-shadow: 0 -20px #000;
            }
        }
    }

    .err {
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
}
</style>