<!-- 动态诗词组件 -->
<template>
    <div class="root">
        <div class="title">
            <div class="box">
                <span>{{ title }}</span>
                <span class="select">|</span>
            </div>
        </div>
        <div class="down"><img :src="require('@/assets/other/down.png')" alt=""></div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'HomePoetry',
    data() {
        return {
            // 保存所有诗词的数组
            titleArr: ['此去泉台招旧部，旌旗十万斩阎罗—— 陈毅',
                '南国烽烟正十年，此头须向国门悬—陈毅',
                '后死诸君多努力，捷报飞来当纸钱—陈毅',
                '投身革命即为家，血雨腥风应有涯—陈毅',
                '取义成仁今日事，人间遍种自由花—陈毅',
                '我寄横刀向天笑，去留肝胆两昆仑—谭嗣同',
                '当年忠贞为国酬，何曾怕断头？如今天下红遍，江山靠谁守—毛泽东',
                '横眉冷对千夫指，俯首甘为孺子牛—鲁迅',
                '为有牺牲多壮志，敢叫日月换新天—毛泽东',
                '多少事，从来急；天地转，光阴迫一万年太久，只争朝夕—毛泽东',
                '四万万人齐下泪，天涯何处是神州—谭嗣同',
                '诗界千年靡靡风，兵魂销尽国魂空—梁启超',
                '集中什九从军乐，亘古男儿一放翁—梁启超',
                '为有牺牲多壮志，敢叫日月换新天—毛泽东',
                '红旗卷起农奴㦸，黑手高悬霸主鞭—毛泽东',
                '今日长缨在手，何时缚住苍龙—毛泽东',
                '忠肝不洒中原泪， 壮志坚持北伐心—朱德',
                '百战新师惊贼胆， 三年苦斗献吾身—朱德',
                '神州尚有英雄在， 堪笑法西意气浮—朱德',
                '恨不抗日死，留作今日羞—吉鸿昌',
                '一寸山河一寸血，十万青年十万军',
                '男儿欲报国恩重，死到沙场是善终— 李家钰',
                '千万头颅共一心，岂肯苟全惜此身—阚维雍',
                '人死留名豹留皮，断头不做降将军— 俗语'
            ],
            // 动态诗词内容
            title: '',
        }
    },
    methods: {
        // 生成随机数
        random(num) {
            return Math.floor(Math.random() * num)
        },
        // 标题动态诗句
        async titleTrnds() {
            while (true) {
                if (this.title.length <= 0) {
                    const newTitle = this.titleArr[this.random(this.titleArr.length)];
                    await this.addTitleChar(newTitle, 0);
                    await new Promise((resolve) => setTimeout(resolve, 2000));
                } else if (this.title.length >= this.titleArr.reduce((max, title) => title.length > max ? title.length : max, 0)) {
                    await new Promise((resolve) => setTimeout(resolve, 2000));
                    this.title = this.title.slice(0, -1);
                } else {
                    await new Promise((resolve) => setTimeout(resolve, 100));
                    this.title = this.title.slice(0, -1);
                }
            }
        },
        // 动态添加新诗词
        async addTitleChar(newTitle, index) {
            if (index < newTitle.length) {
                this.title += newTitle[index];
                await new Promise((resolve) => setTimeout(resolve, 200));
                await this.addTitleChar(newTitle, index + 1);
            }
        },
    },
    mounted() {
        // 初始化title的内容
        this.title = this.titleArr[this.random(this.titleArr.length)]
        // 调用动态标题的方法
        this.titleTrnds()
    }
}
</script>

<style lang="less" scoped>
.root {
    h1 {
        color: white;
        margin-top: 20%;
        text-align: center;
        font-weight: bold;
        font-size: 30px;

    }


    .title {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        margin-top: 20%;

        .box {
            display: inline-block;
            padding: 20px;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 20px;
            color: white;
            font-size: 20px;
            line-height: 20px;
            letter-spacing: 3px;

            @keyframes select {
                from {
                    opacity: 1;
                }

                to {
                    opacity: 0;
                }
            }

            .select {
                animation: select 500ms infinite;
            }
        }
    }

    .down {
        display: flex;
        justify-content: center;
        position: relative;
        top: 40%;
        animation: Jun 2s infinite;

        img {
            width: 40px;
            height: 40px;
            opacity: 0.6;
        }
    }

    @keyframes Jun {
        0% {
            top: 40%;
        }

        50% {
            top: 30%;
        }

        100% {
            top: 40%;
        }
    }
}
</style>