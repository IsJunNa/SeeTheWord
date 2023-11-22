<template>
    <div class="root">
        <!-- 提示框 -->
        <div class="loginalert">
            <div class="alert alert-success" v-if="flagColor" role="alert" v-show="flag">{{ flagTitle }}</div>
            <div class="alert alert-danger" v-else role="alert" v-show="flag">{{ flagTitle }}</div>
        </div>
        <!-- 注册框 -->
        <div class="dowebok">
            <!-- 注册模块 -->
            <div class="form-container sign-up-container">
                <form>
                    <h1>注册</h1>
                    <input type="text" placeholder="昵称" v-model="nickName">
                    <input type="text" placeholder="账号" v-model="userName">
                    <input type="text" placeholder="联系电话" v-model="phonenumber">
                    <input type="password" placeholder="密码" v-model="password">
                    <button @click="clickSignup" type="button">注册</button>
                </form>
            </div>
            <!-- 登录模块 -->
            <div class="form-container sign-in-container">
                <form>
                    <h1>登录</h1>
                    <input type="text" placeholder="账号" v-model="userName">
                    <input type="password" placeholder="密码" v-model="password">
                    <button @click="clickSignin" type="button">登录</button>
                </form>
            </div>
            <!-- 中间页 -->
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>已有帐号？</h1>
                        <p>请登录🚀</p>
                        <button class="ghost" type="button" @click="goSignIn">登录</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>没有帐号？</h1>
                        <p>立即注册吧😃</p>
                        <button class="ghost" type="button" @click="goSignUp">注册</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LoginFrame',
    data() {
        return {
            // 服务器地址
            URL: 'http://124.93.196.45:10001/',
            // 账号
            userName: '',
            // 密码
            password: '',
            // 昵称
            nickName: '',
            // 手机号
            phonenumber: '',
            // 控制提示框显示隐藏
            flag: false,
            // 控制提示框内容
            flagTitle: '',
            // 控制提示框颜色
            flagColor: false
        }
    },
    methods: {
        // 注册
        clickSignup() {
            axios({
                url: this.URL + '/prod-api/api/register',
                method: 'post',
                data: {
                    nickName: this.nickName,
                    userName: this.userName,
                    password: this.password,
                    phonenumber: this.phonenumber
                }
            }).then(res => {
                if (res.data.code == 200) {
                    this.flagColor = true
                    this.flag = true
                    this.flagTitle = '注册成功'
                    setTimeout(() => {
                        this.goSignIn()
                        this.flagColor = false
                        this.flag = false
                    }, 1000)
                } else {
                    this.flag = true
                    this.flagTitle = res.data.msg
                    setTimeout(() => {
                        this.flag = false
                    }, 2000)
                }
            })
        },
        // 登录
        clickSignin() {
            axios({
                url: this.URL + '/prod-api/api/login',
                method: 'post',
                data: {
                    username: this.userName,
                    password: this.password
                }
            }).then(res => {
                if (res.data.code == 200) {
                    this.flagColor = true
                    this.flag = true
                    this.flagTitle = '登录成功'
                    localStorage.setItem('JunToken', res.data.token)
                    setTimeout(() => {
                        localStorage.setItem('JunNav', 'HomeIndex')
                        this.$router.push('/HomeIndex')
                        this.flagColor = false
                        this.flag = false
                    }, 1000)
                } else {
                    this.flag = true
                    this.flagTitle = res.data.msg
                    setTimeout(() => {
                        this.flag = false
                    }, 2000)
                }
            })
        },
        // 切换注册
        goSignUp() {
            document.querySelector('.dowebok').classList.add('right-panel-active')
        },
        // 切换登录
        goSignIn() {
            document.querySelector('.dowebok').classList.remove('right-panel-active')
        }
    },
    mounted() {
    }
}
</script>

<style lang="less" scoped>
.root {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;

    .loginalert {
        position: absolute;
        z-index: 999;
        top: 30vh;
    }

    .form-container {
        position: absolute;
        top: 0;
        height: 100%;
        transition: all .6s ease-in-out;
    }

    button {
        border-radius: 20px;
        border: 1px solid #ff4b2b;
        background: #ff4b2b;
        color: #fff;
        font-size: 12px;
        font-weight: bold;
        padding: 12px 45px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform 80ms ease-in;
        cursor: pointer;
    }

    button:active {
        transform: scale(.95);
    }

    button:focus {
        outline: none;
    }

    button.ghost {
        background: transparent;
        border-color: #fff;
    }

    .dowebok {
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22);
        position: relative;
        overflow: hidden;
        width: 768px;
        max-width: 100%;
        min-height: 480px;

        .form-container form {
            background: #fff;
            display: flex;
            flex-direction: column;
            padding: 0 50px;
            height: 100%;
            justify-content: center;
            align-items: center;
            text-align: center;

            input {
                background: #eee;
                border: none;
                padding: 12px 15px;
                margin: 8px 0;
                width: 100%;
                outline: none;
            }

            h1 {
                font-weight: bold;
                margin: 0;
            }
        }

        .overlay-container {
            position: absolute;
            top: 0;
            left: 50%;
            width: 50%;
            height: 100%;
            overflow: hidden;
            transition: transform .6s ease-in-out;
            z-index: 100;

            .overlay {
                background: #ff416c;
                background: linear-gradient(to right, #ff4b2b, #ff416c) no-repeat 0 0 / cover;
                color: #fff;
                position: relative;
                left: -100%;
                height: 100%;
                width: 200%;
                transform: translateY(0);
                transition: transform .6s ease-in-out;

                .overlay-panel {
                    position: absolute;
                    top: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 0 40px;
                    height: 100%;
                    width: 50%;
                    text-align: center;
                    transform: translateY(0);
                    transition: transform .6s ease-in-out;
                }
            }

            p {
                font-size: 14px;
                line-height: 20px;
                letter-spacing: .5px;
                margin: 20px 0 30px;
            }
        }

        .sign-in-container {
            left: 0;
            width: 50%;
            z-index: 2;
        }

        .sign-up-container {
            left: 0;
            width: 50%;
            z-index: 1;
            opacity: 0;
        }
    }

    .overlay-right {
        right: 0;
        transform: translateY(0);
    }

    .overlay-left {
        transform: translateY(-20%);
    }

    .dowebok.right-panel-active .sign-in-container {
        transform: translateY(100%);
    }

    .dowebok.right-panel-active .overlay-container {
        transform: translateX(-100%);
    }

    .dowebok.right-panel-active .sign-up-container {
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
    }

    .dowebok.right-panel-active .overlay {
        transform: translateX(50%);
    }

    .dowebok.right-panel-active .overlay-left {
        transform: translateY(0);
    }

    .dowebok.right-panel-active .overlay-right {
        transform: translateY(20%);
    }
}
</style>