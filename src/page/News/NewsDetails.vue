<template>
    <div class="root">
        <div class="root">
            <!-- 提示框 -->
            <div class="alert alert-success" v-if="flagColor" role="alert" v-show="flag">{{ flagTitle }}</div>
            <div class="alert alert-danger" v-else role="alert" v-show="flag">{{ flagTitle }}</div>
            <div class="loadingBox" v-if="this.loging">
                <div class="loading"></div>
                <h4>加载中</h4>
            </div>
            <!-- 头部模块 -->
            <div class="header">
                <div>
                    <router-link to="/HomeIndex" class="a">返回</router-link>
                </div>
                <div>{{ title }}</div>
            </div>
            <!-- 主体模块 -->
            <div class="bodyer">
                <!-- 新闻标题 -->
                <div class="title">{{ newDetails.title }}</div>
                <!-- 发布时间 -->
                <div class="time">{{ newDetails.updateTime }}</div>
                <!-- 新闻内容 -->
                <div class="content" v-html="newDetails.content"></div>
            </div>
            <!-- 底部模块 -->
            <div class="footer">
                <hr>
                <!-- 发表评论 -->
                <div class="lssueComment">
                    <div class="content">
                        <div>我要评论:</div>
                        <input type="text" placeholder="善语结善缘,恶言伤人心" v-model="commentContent">
                    </div>
                    <div class="button"><input type="button" value="发表" @click="clickLssueComment"></div>
                </div>
                <!-- 评论列表 -->
                <div class="comment" v-for="item, index in newComments" :key="index">
                    <div>
                        <div class="username">{{ item.userName }}:</div>
                        <div class="content">{{ item.content }}</div>
                    </div>
                    <div>
                        <div class="time">{{ item.commentDate }}</div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
    name: 'NewsDetails',
    data() {
        return {
            // 服务器地址
            URL: 'http://124.93.196.45:10001/',
            // 新闻详情数据
            newDetails: [],
            // 新闻标题宣传内容
            title: '',
            // 保存所有新闻标题宣传的数组
            titleList: ["当新闻河流汹涌澎湃，真相犹如河水澄澈见底",
                "新闻是世界之镜，映照真实和虚幻的景象",
                "每一篇新闻都是一个未知之地，等待我们的探索和解码",
                "新闻如同交织的思绪，引领我们穿越时光的漫漫长河",
                "真相是新闻的明珠，照亮黑暗中的迷途者",
                "在新闻的迷宫中，真相是唯一的指南针",
                "新闻如同琴弦，奏响着时代的旋律和挑战的和弦",
                "每一则新闻都是一个谜题，等待记者的解锁和诠释",
                "新闻如同画布，绘制着人类历史的伟大画卷",
                "真相是新闻的灵魂，永不被假象所掩盖",
                "在新闻的天空中，真相是明亮的北斗星",
                "新闻如同大地，承载着丰富的信息和故事",
                "每一篇新闻都是一个窗户，让我们窥视世界的多彩风景",
                "新闻如同诗歌，抒发着人类的情感和渴望",
                "真相是新闻的核心，不容忽视和篡改",
                "在新闻的海洋中，真相是闪烁的灯塔",
                "新闻如同历史的一页，记录着人类的兴衰和荣辱",
                "每一则新闻都是一个章节，构成了我们时代的故事",
                "新闻如同火炬，照亮黑夜中的前行之路",
                "真相是新闻的理想，值得我们永远追寻"],
            // 新闻评论列表
            newComments: [],
            // 评论内容
            commentContent: '',
            // 控制提示框显示隐藏
            flag: false,
            // 控制提示框内容
            flagTitle: '',
            // 控制提示框颜色
            flagColor: false,
            // 控制loging显示
            loging: true
        }
    },
    methods: {
        // 获取新闻详情
        getNewDetails() {
            axios({
                url: this.URL + '/prod-api/press/press/' + this.$route.params.id
            }).then(res => {
                this.newDetails = res.data.data
                this.newDetails.content = this.newDetails.content.replaceAll('<img src="', '<img src="http://124.93.196.45:10001')
                document.title = this.newDetails.title
                this.loging = false
            })
        },
        // 动态随机新闻宣传内容
        newTitle() {
            let random = Math.floor(Math.random() * 20)
            this.title = this.titleList[random]
            setInterval(() => {
                const random = Math.floor(Math.random() * 20)
                this.title = this.titleList[random]
            }, 3000)
        },
        // 获得新闻评论
        async getNewComments() {
            await axios({
                url: this.URL + `/prod-api/press/comments/list?newsId=${this.$route.params.id}`,
            }).then(res => {
                res.data.rows.map(item => this.newComments.unshift(item))
                this.newComments = this.newComments.slice(0, 500);
            })
        },
        // 发表新闻评论
        async clickLssueComment() {
            // 未登录则弹出警告框，并跳转至登录页
            if (!localStorage.getItem('JunToken')) {
                this.flagColor = false
                this.flag = true
                this.flagTitle = '请先完成登录'
                setTimeout(() => {
                    this.flag = false
                    localStorage.setItem('JunNav', 'UserIndex')
                    this.$router.push('/UserIndex')
                }, 1500)
                // 登录则发表评论
            } else {
                await axios({
                    url: this.URL + '/prod-api/press/pressComment',
                    headers: {
                        'Authorization': localStorage.getItem('JunToken')
                    },
                    method: 'POST',
                    data: {
                        newsId: this.$route.params.id,
                        content: this.commentContent
                    }
                }).then(() => {
                    this.getNewComments()
                    this.flagColor = true
                    this.flag = true
                    this.flagTitle = '发布成功'
                    this.commentContent = ''
                    setTimeout(() => {
                        this.flag = false
                    }, 1500)
                })
            }
        },
    },
    mounted() {
        this.getNewDetails()
        this.newTitle()
        this.getNewComments()
    },
}
</script>

<style lang="less" scoped>
.root {
    .alert {
        width: 25%;
        margin: 20% 38%;
        position: fixed;
        z-index: 2;
        text-align: center;
    }

    .header {
        width: 100%;
        height: 50px;
        background-color: #cc3333;
        display: flex;
        justify-content: space-between;
        position: sticky;
        top: 0;

        div:nth-child(1) {
            color: white;
            font-size: 25px;
            line-height: 50px;
            margin: 0 20px;

            a {
                color: white;
                text-decoration: none;
            }
        }

        div:nth-child(2) {
            color: white;
            font-size: 18px;
            line-height: 50px;
            margin: 0 20px;
        }
    }

    .bodyer {
        margin: 0 100px;

        .title {
            text-align: center;
            font-weight: bold;
            font-size: 30px;
            margin: 20px;
        }

        .time {
            text-align: right;
            margin: 10px;
            font-size: 18px;
            color: rgb(87, 92, 92);
        }

        .content {
            font-size: 20px;

            p {
                line-height: 40px;
                text-indent: 2em;
            }
        }

        margin-bottom: 80px;
    }

    .footer {

        .lssueComment {
            display: flex;
            margin: 80px 0;
            display: flex;
            justify-content: center;

            .content {
                margin-left: 20px;
                width: 90%;
                height: 40px;
                display: flex;
                justify-content: center;

                div {
                    font-size: 22px;
                    font-weight: bold;
                    margin: 20px;
                    display: flex;
                    align-items: center;
                    color: #626060;
                }

                input {
                    width: 80%;
                    height: 100%;
                    border: 0;
                    background-color: #d6d6d6;
                    border-radius: 5px;
                    font-size: 20px;
                    padding-left: 10px;
                }
            }

            .button {
                margin: 0 20px 0 10px;
                width: 10%;
                height: 40px;

                input {
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                    border: 0;
                    background-color: #a9a7a7;
                    color: white;
                    font-size: 20px;
                    cursor: pointer;
                    font-weight: bold;
                }
            }
        }

        .comment {
            margin: 20px;
            display: flex;
            justify-content: space-between;
            background-color: #f7f5f5;
            padding: 10px;
            border-radius: 3px;

            div:nth-child(1) {
                display: flex;

                div {
                    margin: 0 5px;
                }
            }
        }
    }
}

.loadingBox {
    position: absolute;
    top: 50%;
    left: 50%;

    h4 {
        font-weight: bold;
        position: relative;
        top: 10px;
        left: -25px;
        margin-top: 10px;
    }

    .loading {
        display: block;
        position: relative;
        width: 6px;
        height: 10px;

        animation: rectangle infinite 1s ease-in-out -0.2s;
        background-color: #000;
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
</style>