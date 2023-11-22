<template>
    <div class="top">
        <a href="#今日要闻">
            <div>今日要闻</div>
        </a>
        <a href="#专题聚焦">
            <div>专题聚焦</div>
        </a>
        <a href="#政策解读">
            <div>政策解读</div>
        </a>
        <a href="#经济发展">
            <div>经济发展</div>
        </a>
        <a href="#文化旅游">
            <div>文化旅游</div>
        </a>
        <a href="#科技创新">
            <div>科技创新</div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'HomeAnchorPoint',
    methods: {
        topDisplay() {
            window.addEventListener('scroll', () => {
                let n = document.documentElement.scrollTop
                if (n > 1200) document.querySelector('.top').style.display = 'block'
                else document.querySelector('.top').style.display = 'none'
            })
        },
    },
    mounted() {
        this.topDisplay()
    }
}
</script>

<style lang="less" scoped>
.top {
    z-index: 99;
    position: fixed;
    bottom: 20%;
    right: 0;
    z-index: 4;
    border-radius: 10px 0 0 10px;
    display: none;

    a {
        text-align: center;
        color: white;
        text-align: center;
        text-decoration: none;

        div {
            width: 40px;
            margin: 15px 0;
            background-color: rgb(199, 48, 48);
            border-radius: 5px 0 0 5px;
        }

    }
}
</style>