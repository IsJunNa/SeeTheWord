<template>
    <div class="root">
        <BestowBackgroung></BestowBackgroung>
        <BestowNav></BestowNav>
        <div class="content animate__animated animate__backInUp">
            <h1>现代节庆</h1>
            <p>当今时代，各类节庆活动内容丰富、形式多样。但从其活动的举办时间历史长短上⼤致可分为传统节庆和现代节庆。</p>
            <p>传统节庆，顾名思义，此类节庆在于具有历史传统，是在⼈类历史发展过程中产⽣、延续和传承下来的节庆活动。如春节、圣诞节等。对现今社会的⼈们来讲，已经将传统节庆活动视为约定俗成的社会⾏为。⽽现代节庆，主要现代的⼈们节庆是“节⽇庆典”的简称，是出现历史较短，并常常是仅有⼏年、⼗⼏年的历史。传播地域范围也较⼩。
            </p>
            <p>同时，在国外，对相关事件及事件旅游(Event & Event Tourism)的研究中，也常常把我们常称之为节⽇(festival)和特殊事件(special
                event)等合并在⼀起，作为⼀个研究整体来进⾏探讨，英⽂中简称为FSE(Festivals & Special Events)，中⽂可翻译为“节⽇和特殊事件”，或称为“节事”，但“节事”⼀词不是现代汉语的标准同语。
            </p>
            <p>还有⼀种分分类⽅法是以⼴义和狭义来分，把传统节⽇特点突出的节⽇界定为“狭义的节庆”，⽽把具有传统节⽇特点的各类现代群体性、公众性的社会活动界定为“⼴义的节庆”。</p>
            <p>⼴义的节庆活动，之所以⼴义，是因为他概括了⾮常⼴泛的内容和形式，特别是指那些经过事先策划的各类活动。在国外,常常称其为Event（事件）。</p>
            <p>⼴义的节庆类活动（特别是事先经过策划设计，不像传统节⽇已经形成了历史传统），主要包括７⼤类：</p>
            <p>⼀是⽂化庆典类。主要包括⽂化背景或主题的节⽇、宗教事件、⼤型展演、历史纪念活动等。</p>
            <p>⼆是⽂艺娱乐类。主要包括⾳乐会、⽂艺类表演、⽂艺展览、⽂化展览、⽂化⽂艺颁奖等。</p>
            <p>三是会展商贸会展类。主要包括展览会/展销会、博览会、会议、⼴告促销、募捐/筹资活动。</p>
            <p>四是体育赛事类。主要包括职业⽐赛、业余竞赛，各类运动会等。</p>
            <p>五是教育科学类。主要包括研讨会、专题学术会议、学术讨论会，学术⼤会等。</p>
            <p>六是休闲事件类。主要包括娱乐类的游戏和趣味体育活动、娱乐性事件和⽐赛等。</p>
            <p>七是政治/政府事件类。主要包括政治⼈物就职典礼、正式的授职/授勋仪式、⼤型观礼活动、群众集会等。</p>
        </div>
    </div>
</template>

<script>
import BestowNav from '@/page/bestow/BestowNav/BestowNav.vue'
import BestowBackgroung from '@/page/bestow/BestowBackground/BestowBackground.vue'
export default {
    name: 'ModernFestivals',
    data() {
        return {
            navName: ''
        }
    },
    components: { BestowNav, BestowBackgroung },
    mounted() {
        this.navName = localStorage.getItem('JunNavname')
    },
}
</script>

<style lang="less" scoped>
.root {

    .content {
        margin: 20px 50px;
        text-align: center;

        h1 {
            font-size: 40px;
            font-weight: bold;
            margin: 20px;
            padding-left: 50px;

        }

        p {
            font-size: 20px;
            text-align: left;
            text-indent: 2em;
        }
    }
}</style>