<template>
    <div class="root">
        <BestowBackgroung></BestowBackgroung>
        <BestowNav></BestowNav>
        <div class="content animate__animated animate__backInUp">
            <h1>家庭礼仪</h1>
            <p>礼仪，是人类为维系社会正常生活而要求人们共同遵守的最起码的道德行为规范，在人们长期共同生活和相互交往中逐渐形成，并且以风俗、习惯和传统等方式固定下来。对一个人来说，礼仪是一个人的思想道德水平、文化修养、交际能力的外在表现;对一个社会来说，礼仪是一个国家社会文明程度、道德风尚和生活习惯的反映。重视、开展礼仪教育已成为道德实践的一个重要内容。
            </p>
            <p>家庭礼仪，是家庭生活中亲子关系以及兄弟姐妹、亲戚朋友、邻里之间关系的礼仪规范。从小懂得孝敬父母，关爱长辈，不仅能培养自己的良好品德，还能给我们的家庭生活带来和谐、幸福和欢乐。</p>
            <p>一、孝敬尊重长辈</p>
            <p>父母给了我们生命，他们的辛勤养育之恩，我们终生难以回报。孝敬父母，尊敬长辈，是我们做人的本分，也是中华民族的传统美德。那作为子女，我们对父母长辈要讲究哪些礼仪呢？</p>
            <p>1、听从父母教诲，不随便顶撞，不对父母产生敌对情绪；</p>
            <p>2、体谅和理解父母，对父母要和颜悦色；</p>
            <p>3、不让父母为自己的行为担忧；</p>
            <p>4、对父母要主动问候，主动关心父母的身体状况；</p>
            <p>5、主动参与家务劳动，做自己力所能及的事情；</p>
            <p>6、关心父母起居、健康，牢记父母的生日；</p>
            <p>7、与老人相处要有耐心。俗话说：“树老根多，人老话多。”用耐心和爱心去对待身边的老人。</p>
            <p>二、礼让同辈</p>
            <p>家庭的幸福，兄弟姐妹之间的和睦相处起到重要作用。同辈间相处要相互尊重、相互关心、照顾，相互谅解，相互帮助，谦让有礼。</p>
            <p>三、待客和访客的礼仪</p>
            <p>（一）待客礼仪</p>
            <p>家里有客人来访时，应提前做好准备：居室要收拾干净整洁，准备相应的待客物品，如茶具、茶、开水、饮料、水果等；同时主人的仪容仪表也要干净整齐，修饰得体。</p>
            <p>礼貌待客的具体做法：</p>
            <p>1、迎接客人，热情相待；</p>
            <p>2、问候寒喧，见到客人要面带微笑，热情招呼；</p>
            <p>3、敬茶：在给客人上茶时要上热茶，茶以七分满为最佳；同时注意上茶的顺序：先客人后主人，先主宾后次宾，先女士后男士，先长辈后晚辈；</p>
            <p>4、陪客人交谈；</p>
            <p>5、当客人离席或准备告辞时，主人应婉言相留。</p>
            <p>（二）做客礼仪</p>
            <p>走亲访友是最常见的一种交际形式。在走亲访友之前应做好必要的准备，应提前预约，不要贸然拜访；若接到别人邀请做客的电话或信件，要认真考虑能否前行，一旦应邀，就要守时守约；要去做客时，要注意自己的仪容仪表，服装应整洁、庄重，仪态端庄大方。
            </p>
            <p>做客的基本仪礼要求：</p>
            <p>1、提前预约，不“突袭”，时间选择不宜在三餐或对方睡觉的时间；</p>
            <p>2、做客要注意仪表、仪容；</p>
            <p>3、不能猛敲门或连续按铃；</p>
            <p>4、前往他人家里做客时，进门后为尊重主人，须遵守“五除”：摘下自己的帽子、围巾、手套、墨镜并脱下外套；</p>
            <p>5、吃东西、喝水要斯文；</p>
            <p>6、不做不受人欢迎的行为，如来回走动，乱翻抽屉箱柜，索要物品，乱摸东西，擅自乱串房间等。</p>
            <p>四、邻里相处礼仪</p>
            <p>“远亲不如近邻”，好的邻里关系对人的成长和社会稳定起着重要作用。邻里相处要注意：</p>
            <p>1、不打扰左邻右舍。早出晚归进出居室要保持安静，不要大声喧哗和说笑，尊重邻居的生活习惯；</p>
            <p>2、要以礼相待，相互体谅帮助。邻里平时见面要相互打招呼，相互照顾，当他们遇到困难时要给予帮助；</p>
            <p>3、处理好住房公用部位的使用，力求平等合理，照顾各方利益；</p>
            <p>4、要相互信任，友好相处，邻里相处友好是第一位；</p>
            <p>5、与邻居同龄人相处，尽量避免发生纠纷，不要使双方家长为难。</p>
        </div>
    </div>
</template>

<script>
import BestowNav from '@/page/bestow/BestowNav/BestowNav.vue'
import BestowBackgroung from '@/page/bestow/BestowBackground/BestowBackground.vue'
export default {
    name: 'FamilyEtiquette',
    data() {
        return {
            navName: '',
            TabName: ''
        }
    },
    components: { BestowNav, BestowBackgroung },
    mounted() {
        this.TabName = localStorage.getItem('JunTabname')
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
}
</style>