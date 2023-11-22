// 引入Vue和VueRouter
import Vue from "vue";
import VueRouter from "vue-router";

// 映入路由组件
import HomeIndex from '@/page/Home/HomeIndex.vue';
import BestowIndex from '@/page/bestow/BestowIndex.vue';
import RoadIndex from '@/page/road/RoadIndex.vue';
import UserIndex from '@/page/user/UserIndex.vue';
import YearIndex from '@/page/year/YearIndex.vue';
import NewsDetails from '@/page/News/NewsDetails.vue'
import UserLogin from '@/page/Login/UserLogin.vue'
import ChineseOriginate from '@/page/bestow/details/Language/ChineseOriginate/ChineseOriginate.vue'
import ClassicLiterature from '@/page/bestow/details/Language/ClassicLiterature/ClassicLiterature.vue'
import ModernTimesChinese from '@/page/bestow/details/Language/ModernTimesChinese/ModernTimesChinese.vue'
import TraditionalDrama from '@/page/bestow/details/Perform/TraditionalDrama/TraditionalDrama.vue'
import PekingOpera from '@/page/bestow/details/Perform/PekingOpera/PekingOpera.vue'
import TraditionMusic from '@/page/bestow/details/Perform/TraditionMusic/TraditionMusic.vue'
import EtiquetteCustoms from '@/page/bestow/details/Custom/EtiquetteCustoms/EtiquetteCustoms.vue'
import TeaCulture from '@/page/bestow/details/Custom/TeaCulture/TeaCulture.vue'
import WeddingCustoms from '@/page/bestow/details/Custom/WeddingCustoms/WeddingCustoms.vue'
import EvolutionOfEtiquette from '@/page/bestow/details/Etiquette/EvolutionOfEtiquette/EvolutionOfEtiquette.vue'
import FamilyEtiquette from '@/page/bestow/details/Etiquette/FamilyEtiquette/FamilyEtiquette.vue'
import BusinessEtiquette from '@/page/bestow/details/Etiquette/BusinessEtiquette/BusinessEtiquette.vue'
import SpringFestival from '@/page/bestow/details/Holiday/SpringFestival/SpringFestival.vue'
import ModernFestivals from '@/page/bestow/details/Holiday/ModernFestivals/ModernFestivals.vue'
import HolidayMeaning from '@/page/bestow/details/Holiday/HolidayMeaning/HolidayMeaning.vue'
import TraditonDraw from '@/page/bestow/details/Art/TraditonDraw/TraditonDraw.vue'
import TraditionTechnology from '@/page/bestow/details/Art/TraditionTechnology/TraditionTechnology.vue'
import CeramicsCarving from '@/page/bestow/details/Art/CeramicsCarving/CeramicsCarving.vue'
import XiQuWenHua from '@/page/road/Detalis/XiQuWenHua/XiQuWenHua.vue'
import GuWanQiWu from '@/page/road/Detalis/GuWanQiWu/GuWanQiWu.vue'
import YiShuZhenPin from '@/page/road/Detalis/YiShuZhenPin/YiShuZhenPin.vue'
import MinJianYiShu from '@/page/road/Detalis/MinJianYiShu/MinJianYiShu.vue'
import MuBanShuiYin from '@/page/road/Detalis/MuBanShuiYin/MuBanShuiYin.vue'


// 使用VueRouter
Vue.use(VueRouter)

// 重写push方法，防止编程式导航多次点击时报错
let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}

// 重写Replace方法
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}

// 暴露路由
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/HomeIndex'
        },
        {
            path: '/HomeIndex',
            component: HomeIndex,
        },
        {
            path: '/BestowIndex',
            component: BestowIndex,
        },
        {
            path: '/RoadIndex',
            component: RoadIndex,
        },
        {
            path: '/UserIndex',
            component: UserIndex,
        },
        {
            path: '/YearIndex',
            component: YearIndex,
        },
        {
            path: '/NewsDetails/:id',
            component: NewsDetails,
        },
        {
            path: '/UserLogin',
            component: UserLogin,
        },
        {
            path: '/ChineseOriginate',
            component: ChineseOriginate,
        },
        {
            path: '/ClassicLiterature',
            component: ClassicLiterature,
        },
        {
            path: '/ModernTimesChinese',
            component: ModernTimesChinese,
        },
        {
            path: '/TraditionalDrama',
            component: TraditionalDrama,
        },
        {
            path: '/PekingOpera',
            component: PekingOpera,
        },
        {
            path: '/TraditionMusic',
            component: TraditionMusic,
        },
        {
            path: '/EtiquetteCustoms',
            component: EtiquetteCustoms,
        },
        {
            path: '/TeaCulture',
            component: TeaCulture,
        },
        {
            path: '/WeddingCustoms',
            component: WeddingCustoms,
        },
        {
            path: '/EvolutionOfEtiquette',
            component: EvolutionOfEtiquette,
        },
        {
            path: '/FamilyEtiquette',
            component: FamilyEtiquette,
        },
        {
            path: '/BusinessEtiquette',
            component: BusinessEtiquette,
        },
        {
            path: '/SpringFestival',
            component: SpringFestival,
        },
        {
            path: '/ModernFestivals',
            component: ModernFestivals,
        },
        {
            path: '/HolidayMeaning',
            component: HolidayMeaning,
        },
        {
            path: '/TraditonDraw',
            component: TraditonDraw,
        },
        {
            path: '/TraditionTechnology',
            component: TraditionTechnology,
        },
        {
            path: '/CeramicsCarving',
            component: CeramicsCarving,
        },
        {
            path: '/GuWanQiWu',
            component: GuWanQiWu,
        },
        {
            path: '/XiQuWenHua',
            component: XiQuWenHua,
        }
        ,
        {
            path: '/YiShuZhenPin',
            component: YiShuZhenPin,
        }
        ,
        {
            path: '/MinJianYiShu',
            component: MinJianYiShu,
        }
        ,
        {
            path: '/MuBanShuiYin',
            component: MuBanShuiYin,
        }
        
    ]
})