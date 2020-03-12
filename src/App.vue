<template>
    <div id="app">
        <keep-alive>
        <component :is="componentName" @func="getMsgFromComp"></component>
        </keep-alive>
        <hr>
        <div id="bottom">
            <!--<div id="hr">-->
            <!--<hr>-->
            <!--</div>-->
            <div id="email">
                <p>yaralee.tj@gmail.com</p>
            </div>
            <div id="link-logos">
                <a href="https://github.com/YaraLEE" id="githubLink" target="_blank" title="github"><img :src="GithubUrl" alt="githubAddress"
                                                id="githubLogo"/></a>
                <a href="https://www.instagram.com/yara_loves_running/" id="instagramLink" target="_blank" title="instagram"><img :src="CameraLogoUrl" alt="cameraAddress"
                                                   id="instagramLogo"/></a>
            </div>
        </div>
        <img :src="TopUrl" alt="fixed-logo" id="fixed-logo" @click.prevent="toTop" title="top"/>
    </div>
</template>

<script>

    import Homepage from './components/Homepage'
    import Work1 from './components/WorksComponents/Work1'
    import Work2 from './components/WorksComponents/Work2'
    import Work3 from './components/WorksComponents/Work3'
    import Work4 from './components/WorksComponents/Work4'
    import Work5 from './components/WorksComponents/Work5'
    import Work6 from './components/WorksComponents/Work6'
    import Work7 from './components/WorksComponents/Work7'
    import Work8 from './components/WorksComponents/Work8'
    import GithubUrl from '../static/logos/github-logo.png'
    import CameraLogoUrl from '../static/logos/camera-logo.png'
    import TopUrl from '../static/logos/icon_top@2x.png'


    export default {
        name: 'App',
        components: {
            Homepage,
            Work1,
            Work2,
            Work3,
            Work4,
            Work5,
            Work6,
            Work7,
            Work8
        },
        data() {
            return {
                componentName: 'Homepage',
                // index: 'Homepage'
                GithubUrl,
                CameraLogoUrl,
                TopUrl
            }
        },
        methods: {
            getMsgFromComp: function (msg) {
                // console.log(msg);
                // this.$router.push('/work1');
                if (msg.indexOf('Work')!==1 || msg.indexOf('Homepage'))
                this.componentName = msg;
            },
            goBack(){
                this.componentName='Homepage';
                // console.log('go back');
            },
            toTop(){
                // scrollTo(0,0);
                var timer=null;
                cancelAnimationFrame(timer);
                timer = requestAnimationFrame(function fn() {
                    var oTop=document.body.scrollTop || document.documentElement.scrollTop;
                    if(oTop>0){
                        scrollBy(0,-50);
                        timer=requestAnimationFrame(fn);
                    }else{
                        cancelAnimationFrame(timer);
                    }
                })
            }
        },
        // created(){
        //     if(sessionStorage.getItem("store")){
        //         this.$store.replaceState(Object.assign({},this.$store.state.JSON.parse(sessionStorage.getItem("store"))))
        //     }
        //     window.addEventListener("beforeunload",()=>{
        //         sessionStorage.setItem('store',JSON.stringify(this.$store.state));
        //     })
        // },
        mounted(){
            if(window.history && window.history.pushState){
                // history.pushState(null,null,document.URL);
                window.addEventListener('popstate',this.goBack);
            }
        }
    }
</script>

<style>
    @media screen and (min-width:1140px) and (max-width: 1920px){

    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*margin-top: 60px;*/
        margin:0;
        padding:0;
        scroll-behavior: smooth;
        /*position: relative;*/
        /*background-color: rgba(255,255,255,0.3);*/
    }

    div#bottom {
        /*position: absolute;*/
        width: 900px;
        height: 140px;
        margin-left: auto;
        margin-right: auto;
        /*bottom: -150px;*/
        /*position: absolute;*/
        /*bottom:64px;*/
    }

    div#bottom div {
        display: inline-block;
    }

    a#githubLink, a#instagramLink {
        width: 25px;
    }

    img#githubLogo, img#instagramLogo {
        width: 25px;
        height: 24px;
        margin-left: 24px;
    }

    div#email {
        font-weight: bold;
        font-family: Rubik-Medium, Sana, sans-serif;
        color: #333333;
        font-size: 16px;
        letter-spacing: 0.15px;
        line-height: 24px;
        float: left;
        width: 175px;
        height: 60px;
        margin-left: 8px;
        margin-top: 32px;
    }

    div#link-logos {
        float: right;
        width: 200px;
        height: 60px;
        margin-right: 8px;
        text-align: right;
        margin-top: 48px;
    }

    img#fixed-logo {
        position: fixed;
        width:80px;
        height:78px;
        right:2%;
        bottom:5%;
        box-shadow: palevioletred;
    }
    img#fixed-logo:hover{
        cursor: pointer;
        transform:scale(1.1,1.1);
    }
    hr{
        /*width:120%;*/
        margin:0;
    }
</style>
