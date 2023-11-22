<template>
    <!-- 底部链接 -->
    <div class="root">
        <div class="footer">
            <div class="title">
                <p>友情链接</p>
            </div>
            <ul>
                <li> <a href="http://www.people.cn/" target="_blank">人民网</a> </li>
                <li> <a href="http://www.news.cn/" target="_blank">新华网</a> </li>
                <li> <a href="http://www.cctv.com.cn/" target="_blank">央视网</a> </li>
                <li> <a href="http://www.gmw.cn/" target="_blank">光明网</a> </li>
                <li> <a href="http://www.ce.cn" target="_blank">中国经济网</a> </li>
                <li> <a href="http://world.chinadaily.com.cn" target="_blank">中国日报网</a> </li>
                <li> <a href="http://www.chinanews.com" target="_blank">中国新闻网</a> </li>
                <li> <a href="http://www.youth.cn" target="_blank">中国青年网</a> </li>
                <li> <a href="http://www.china.com.cn" target="_blank">中国网</a> </li>
                <li> <a href="http://www.dangjian.cn" target="_blank">党建网</a> </li>
                <li> <a href="https://www.cntheory.com" target="_blank">理论网</a> </li>
                <li> <a href="http://www.cssn.cn" target="_blank">中国社会科学网</a> </li>
                <li> <a href="http://www.rmlt.com.cn" target="_blank">人民论坛网</a> </li>
                <li> <a href="http://www.71.cn" target="_blank">宣讲家网</a> </li>
                <li> <a href="http://www.gongwei.org.cn" target="_blank">旗帜网</a> </li>
                <li> <a href="https://www.theorychina.org.cn" target="_blank">理论中国网</a> </li>
                <li> <a href="https://www.ccpph.com.cn" target="_blank">中国理论网</a> </li>
                <li> <a href="http://www.81.cn" target="_blank">中国军网</a> </li>
                <li> <a href="http://www.cac.gov.cn" target="_blank">网信网</a> </li>
                <li> <a href="http://www.12371.cn" target="_blank">共产党员网</a> </li>
                <li> <a href="http://www.wenming.cn" target="_blank">中国文明网</a> </li>
                <li> <a href="http://www.gov.cn/" target="_blank">中国政府网</a> </li>
                <li> <a href="http://www.npc.gov.cn/" target="_blank">全国人大</a> </li>
                <li> <a href="http://www.cppcc.gov.cn/" target="_blank">全国政协</a> </li>
                <li> <a href="http://news.12371.cn/dzybmbdj/zzb" target="_blank">中组部</a> </li>
                <li> <a href="http://www.ccdi.gov.cn" target="_blank">中央纪委国家监委</a> </li>
                <li> <a href="http://www.zytzb.gov.cn/html/index.html" target="_blank">统战部</a> </li>
                <li> <a href="https://www.idcpc.org.cn" target="_blank">中联部</a> </li>
                <li> <a href="http://www.chinapeace.gov.cn" target="_blank">中央政法委</a> </li>
                <li> <a href="http://www.scopsr.gov.cn" target="_blank">中央编制办</a> </li>
                <li> <a href="http://www.nrta.gov.cn" target="_blank">国家广电总局</a> </li>
                <li> <a href="http://www.cipg.org.cn" target="_blank">外文局</a> </li>
                <li> <a href="http://www.ccps.gov.cn" target="_blank">中央党校（国家行政学院）</a> </li>
                <li> <a href="http://www.dswxyjy.org.cn" target="_blank">中国共产党历史和文献网</a> </li>
                <li> <a href="http://www.cass.cn" target="_blank">中国社会科学院</a> </li>
                <li> <a href="http://www.zgjx.cn" target="_blank">中国记协</a> </li>
                <li> <a href="http://hrczh.cass.cn" target="_blank">中国历史研究院</a> </li>
                <li> <a href="http://cpc.people.com.cn" target="_blank">中国共产党新闻网</a> </li>
            </ul>
            <div class="go">
                <div><a href="http://www.zhujunpeng.love" target="_blank">©2023-www.zhujunpeng.love</a></div>
                <div><a href="https://beian.miit.gov.cn/" target="_blank">湘ICP备2023023578号-1</a></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageFooter'
}
</script>

<style lang="less" scoped>
.root {
    .footer {
        width: 100%;
        background-color: #d74339;
        border-radius: 20px 20px 0 0;
        color: white;

        .title {
            text-align: center;
            display: flex;
            justify-content: center;

            p {
                font-size: 20px;
                font-weight: bold;
            }
        }

        ul {

            li {
                list-style: none;
                display: inline-block;
                margin: 0 10px;

                a {
                    color: white;
                    text-decoration: none;
                }
            }
        }

        .go {
            font-size: 18px;
            color: white;
            text-align: center;
            display: flex;
            justify-content: center;

            div {
                margin: 15px 20px;

                a {
                    color: white;
                    text-decoration: none;
                }
            }
        }
    }
}
</style>