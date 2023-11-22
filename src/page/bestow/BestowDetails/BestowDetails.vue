<template>
    <div class="root">
        <!-- 路由出口 -->
        <div class="title">
            <h1>截止至2023年7月，国家级非物质文化遗产共</h1>
        </div>
        <div class="nuber">
            <div>
                <div class="num">{{ num1 }}</div>
                <div class="title">批次</div>
            </div>
            <div>
                <div class="num">{{ num2 }}</div>
                <div class="title">类别</div>
            </div>
            <div>
                <div class="num">{{ num3 }}</div>
                <div class="title">项目</div>
            </div>
            <div>
                <div class="num">{{ num4 }}</div>
                <div class="title">子项</div>
            </div>
        </div>
        <div class="content">
            <p>建立非物质文化遗产代表性项目名录，对保护对象予以确认，以便集中有限资源，对体现中华民族优秀传统文化，具有历史、文学、艺术、科学价值的非物质文化遗产项目进行重点保护，是非物质文化遗产保护的重要基础性工作之一。联合国教科文组织《保护非物质文化遗产公约》（以下简称《公约》）要求“各缔约国应根据自己的国情”拟订非物质文化遗产清单。建立国家级非物质文化遗产名录，是我国履行《公约》缔约国义务的必要举措。《中华人民共和国非物质文化遗产法》明确规定：“国家对非物质文化遗产采取认定、记录、建档等措施予以保存，对体现中华民族优秀传统文化，具有历史、文学、艺术、科学价值的非物质文化遗产采取传承、传播等措施予以保护。”“国务院建立国家级非物质文化遗产代表性项目名录，将体现中华民族优秀传统文化，具有重大历史、文学、艺术、科学价值的非物质文化遗产项目列入名录予以保护。
            </p>
            <p>国务院先后于2006年、2008年、2011年、2014年和2021公布了五批国家级项目名录（前三批名录名称为“国家级非物质文化遗产名录”，《中华人民共和国非物质文化遗产法》实施后，第四批名录名称改为“国家级非物质文化遗产代表性项目名录”），共计1557个国家级非物质文化遗产代表性项目（以下简称“国家级项目”），按照申报地区或单位进行逐一统计，共计3610个子项。为了对传承于不同区域或不同社区、群体持有的同一项非物质文化遗产项目进行确认和保护，从第二批国家级项目名录开始，设立了扩展项目名录。扩展项目与此前已列入国家级非物质文化遗产名录的同名项目共用一个项目编号，但项目特征、传承状况存在差异，保护单位也不同。
            </p>
            <p>国家级名录将非物质文化遗产分为十大门类，其中五个门类的名称在2008年有所调整，并沿用至今。十大门类分别为：民间文学，传统音乐，传统舞蹈，传统戏剧，曲艺，传统体育、游艺与杂技，传统美术，传统技艺，传统医药，民俗。每个代表性项目都有一个专属的项目编号。编号中的罗马数字代表所属门类，如传统音乐类国家级项目“侗族大歌”的项目编号为“Ⅱ-28”
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BestowDetails',
    data() {
        return {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0
        };
    },
    mounted() {
        this.startCounting();
    },
    methods: {
        startCounting() {
            let targetNum1 = 5; // 设置目标值
            let targetNum2 = 15;
            let targetNum3 = 1557;
            let targetNum4 = 3610;
            let count1 = 0;
            let count2 = 0;
            let count3 = 0;
            let count4 = 0;
            // 批次
            let timer1 = setInterval(() => {
                count1++;
                if (count1 >= targetNum1) {
                    count1 = targetNum1;
                    clearInterval(timer1);
                }
                this.num1 = count1;
            }, 200);
            // 类别
            let timer2 = setInterval(() => {
                count2++;
                if (count2 >= targetNum2) {
                    count2 = targetNum2;
                    clearInterval(timer2);
                }
                this.num2 = count2;
            }, 100);
            // 项目
            let timer3 = setInterval(() => {
                count3 = count3 + 2
                if (count3 >= targetNum3) {
                    count3 = targetNum3;
                    clearInterval(timer3);
                }
                this.num3 = count3;
            }, 1);
            // 子项
            let timer4 = setInterval(() => {
                count4 = count4 + 5
                if (count4 >= targetNum4) {
                    count4 = targetNum4;
                    clearInterval(timer4);
                }
                this.num4 = count4;
            }, 1);
        }
    }


};
</script>

<style lang="less" scoped>
.root {
    opacity: 1;
    padding: 20px 100px;
    text-align: center;

    .title {
        h1 {
            font-size: 40px;
            font-weight: bold;
        }
    }

    .nuber {
        margin-top: 5vh;
        display: flex;
        justify-content: space-around;

        .num {
            font-size: 80px;
            font-weight: bold;
        }

        .title {
            font-size: 20px;
            font-weight: bold;
        }
    }

    .content {
        margin-top: 5vh;

        h1 {
            font-size: 40px;
            font-weight: bold;
        }

        p {
            font-size: 20px;
            text-align: left;
            text-indent: 2em;
        }
    }
}

::-webkit-scrollbar {
    width: 0 !important;
    height: 0;
}
</style>
