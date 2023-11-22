<template>
    <div class="root">
        <!-- 提示框 -->
        <div class="alert alert-success" v-if="flagColor" role="alert" v-show="flag">{{ flagTitle }}</div>
        <div class="alert alert-danger" v-else role="alert" v-show="flag">{{ flagTitle }}</div>
        <div class="box">
            <div>
                <p class="title">修改个人资料</p>
                <img :src="require('@/assets/nav/userLogo.png')">
                <p>昵称 : <input type="text" v-model="user.nickName" @change="changeUser"></p>
                <p>
                    性别：<select name="sex" @change="changeUser" v-model="user.sex">
                        <option value="0">男</option>
                        <option value="1">女</option>
                    </select>
                </p>
                <p>账户 : <input type="text" disabled v-model="user.userName"></p>
                <p>手机 : <input type="text" v-model="user.phonenumber" @change="changeUser"></p>
                <p>邮箱 : <input type="text" v-model="user.email" @change="changeUser"></p>
                <button type="button" class="btn btn-danger btn-block" @click="clickOutLogin">退出登录</button>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'UserDetails',
    data() {
        return {
            URL: 'http://124.93.196.45:10001/',
            // 用户信息
            user: {},
            // 控制提示框显示隐藏
            flag: false,
            // 控制提示框内容
            flagTitle: '',
            // 控制提示框颜色
            flagColor: false
        }
    },
    methods: {
        // 判断是否登录
        loginBollean() {
            if (!localStorage.getItem('JunToken')) this.$router.push('/UserLogin')
        },
        // 点击退出登录
        clickOutLogin() {
            localStorage.removeItem('JunToken')
            localStorage.setItem('JunNav', 'HomeIndex')
            this.$router.push('/HomeIndex')
        },
        // 获取用户信息
        getUser() {
            axios({
                url: this.URL + '/prod-api/api/common/user/getInfo',
                headers: {
                    Authorization: localStorage.getItem('JunToken')
                }
            }).then(res => {
                this.user = res.data.user
            })
        },
        // 修改用户信息
        changeUser() {
            axios({
                url: this.URL + '/prod-api/api/common/user',
                method: 'PUT',
                data: {
                    email: this.user.email,
                    nickName: this.user.nickName,
                    phonenumber: this.user.phonenumber,
                    sex: this.user.sex,
                },
                headers: {
                    Authorization: localStorage.getItem('JunToken')
                }
            }).then(res => {
                if (res.data.code == 200) {
                    console.log(res);
                    this.flagColor = true
                    this.flag = true
                    this.flagTitle = '修改成功'
                    setTimeout(() => {
                        this.flag = false
                    }, 2000)
                } else {
                    this.flagColor = false
                    this.flag = true
                    this.flagTitle = res.data.msg
                    setTimeout(() => {
                        this.flag = false
                    }, 2000)
                }
            })
        },
    },
    mounted() {
        this.loginBollean()
        this.getUser()
    },
}
</script>

<style lang="less" scoped>
.alert {
    width: 25%;
    margin: 50px 38%;
    position: fixed;
    z-index: 2;
    text-align: center;
}

.box {
    display: flex;
    width: 70%;
    height: 80%;
    margin: 0 auto;
    z-index: 1;
    position: relative;
    top: 5vh;

    div {
        width: 50vw;
        height: 80vh;
        background-color: #cbc1c1b7;
        border-radius: 10px;
    }

    div:nth-child(1) {
        border-right: 2px solid #000;
        box-shadow: 0 1px 20px 2px black;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
            font-size: 20px;
            margin: 25px;
            color: rgb(101, 105, 105);
        }

        img {
            width: 80px;
            height: 80px;
            margin-bottom: 30px;
            border-radius: 50px;
        }

        input,
        select {
            width: 220px;
            background-color: #ece6e6;
            border: 0;
            border-radius: 5px;
            padding-left: 5px;
            margin: 1vh;
        }

        select {
            height: 25px;
            margin-left: 15px;
        }
    }

    div:nth-child(2) {
        border-left: 2px solid #000;
        box-shadow: 5px 2px 20px 2px black;
    }

}
</style>