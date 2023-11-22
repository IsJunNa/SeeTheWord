<template>
    <div class="root">
        <BestowBackgroung></BestowBackgroung>
        <BestowNav></BestowNav>
        <div class="content animate__animated animate__backInUp">
            <h1>礼仪风俗</h1>
            <p>一、宴会礼仪</p>
            <p>宴会礼仪在中国文化中占有重要地位，不仅在家庭聚会中表现出来，也在商务宴请、正式宴会等场合中具有重要意义。以下是一些关于宴会礼仪的要点：</p>
            <p>敬酒仪式： 在宴会上，主人通常会主持敬酒仪式。客人需要接受主人的敬酒，通常是以小杯干酒或白酒的形式，然后回敬。敬酒时要站起，表示尊重和感激。</p>
            <p>吃饭礼仪： 在宴会中，吃饭时也有特定的礼仪。人们应当用筷子，不用手直接夹取食物，不要大声喧哗，要等长辈或主人开始吃饭后才动筷子。同时，表示饭量充足和感谢主人的方式是保持碗中有少量的食物。</p>
            <p>礼物赠送： 在宴会结束时，客人通常会赠送礼物表示感谢，这是一种传统的礼仪。礼物的选择应该根据宴会性质和主人的品味来决定。</p>
            <p>二、传统婚礼礼仪</p>
            <p>中国的传统婚礼礼仪是非常重要的一部分，虽然在现代社会中有所变化，但仍然保留着古老的礼仪和风俗。以下是一些传统婚礼礼仪的要点：</p>
            <p>聘礼与嫁妆： 新郎会送聘礼给新娘的家庭，表示婚姻的诚意。新娘的家庭则会准备嫁妆，包括衣物、首饰、家居用品等。这些礼物代表了双方家庭的祝福和尊重。</p>
            <p>过门仪式： 婚礼当天，新娘会在嫁妆的陪伴下，穿过新郎家门的门槛，象征着她的新生活的开始。这个仪式充满了喜庆和期望。</p>
            <p>敬茶仪式： 敬茶仪式是婚礼中的一部分，新娘和新郎会分别向双方父母敬茶，表示对他们的感恩和尊敬。这是一种传统的礼节，体现了尊长敬老的价值观。</p>
            <p>喜酒宴席： 婚礼后通常会举行盛大的宴席，邀请亲朋好友共同庆祝。在宴席上，有特定的坐席次序和礼仪，如新人敬酒、父母致辞等。宴席上会有丰富的食物和喜庆的氛围，人们会唱歌跳舞，祝愿新人幸福美满。</p>
            <p>这些婚礼礼仪和风俗不仅是庆祝爱情的仪式，还承载了家庭、社会和文化价值观的传承。尊重长辈、亲情关系的重要性以及对新生活的祝福都在这一仪式中得以表达。</p>
            <p>三、传统礼仪</p>
            <p>除了宴会和婚礼礼仪之外，中国还有许多其他传统礼仪和风俗，如敬长辈、拜神祭祖、悼念先人等。这些礼仪反映了尊重、感恩和家庭传统的重要性，是中国文化中不可或缺的一部分。</p>
            <p>四、名人拜谒</p>
            <p>在中国文化中，名人拜谒是一种表达尊重和崇敬的方式。人们会前往名人的墓地或纪念馆，献花、点烛、行礼，以示对名人的尊敬。这种礼仪体现了对历史和文化传统的珍视。</p>
            <p>这些是中国非物质文化遗产中的一些礼仪文化的重要方面。这些礼仪和风俗在中国文化中扮演着重要的角色，反映了尊重、感恩、传统价值观以及家庭和社会关系的重要性。</p>
        </div>
    </div>
</template>

<script>
import BestowNav from '@/page/bestow/BestowNav/BestowNav.vue'
import BestowBackgroung from '@/page/bestow/BestowBackground/BestowBackground.vue'
export default {
    name: 'EtiquetteCustoms',
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
}
</style>