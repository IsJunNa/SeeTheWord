<template>
    <div class="root">
        <BestowBackgroung></BestowBackgroung>
        <BestowNav></BestowNav>
        <div class="content  animate__animated animate__backInUp">
            <h1>经典文学</h1>
            <p>中国非遗文化中的经典文学是中国文化宝库中的一颗璀璨明珠，承载着丰富的历史、哲学、道德和文学内涵。这些文学作品代表了中国古代文学的高度成就，它们的影响远远超出了文学领域，成为中华文明的瑰宝。</p>
            <p>首先，我们不得不提到《诗经》。这是中国古代最早的一部诗歌集，包括了300多首诗篇，反映了周朝早期的生活、风俗和道德观念。这些古老的诗歌歌颂了自然之美、人情之深，被誉为“中华文化的摇篮”。它不仅是文学作品，还是汉字的源头，具有独特的历史地位。
            </p>
            <p>《论语》是儒家经典之一，记载了孔子及其弟子的言行，强调了礼仪、道德、政治等方面的教义。它对中国的思想、文化和社会产生了深远的影响。不仅是古代士人的行事准则，也是当代中国社会价值观的重要组成部分。</p>
            <p>《庄子》则代表了中国古代道家哲学的精华，探讨了自然、道德、人生等哲学问题，被认为是东方哲学的重要经典之一。其以幽默、寓意深远的寓言故事闻名，启发人们对生活和人生的深刻思考。</p>
            <p>《红楼梦》是中国古代四大名著之一，是一部经典文学巨著，通过描述贾府的兴衰、贾母、林黛玉、贾宝玉等众多人物的命运，深刻反映了封建社会的沉浮变化，以及人性、情感的复杂。它是中国小说史上的巅峰之作，也是中华文化的杰出代表之一。
            </p>
            <p>这些经典文学作品之所以成为非遗文化的一部分，是因为它们不仅具有文学价值，还承载了中国古代智慧、哲学和道德观念。通过传承和弘扬这些文学作品，我们能够更好地理解中国古代文化，感受到它的博大精深，同时也能够从中汲取智慧，指导当代社会的发展和进步。这些经典文学作品不仅是中国非遗文化的重要组成部分，也是中华文明的瑰宝，它们的价值将永远闪耀在中国文化的天空中。
            </p>
        </div>
    </div>
</template>

<script>
import BestowNav from '@/page/bestow/BestowNav/BestowNav.vue'
import BestowBackgroung from '@/page/bestow/BestowBackground/BestowBackground.vue'
export default {
    name: 'ChineseOriginate',
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