<template>
    <div id="homepage">
        <div id="top">
            <div id="liLogo">
                <img src="../../static/logos/11-homepage-combined-shape-1@2x.png" alt="" id="liLogo-1"/>
                <img src="../../static/logos/11-homepage-combined-shape-2@2x.png" alt="" id="liLogo-2"/>
            </div>
            <div>
                <BriefIntro :show_msg="msg"></BriefIntro>
            </div>
            <div id="menu">
                <a href="" @click.prevent="toWork" class="_menu">work</a>
                <a href="" @click.prevent="toResume" class="_menu">resume</a>
                <a href="" @click.prevent="toAbout" class="_menu">about</a>
            </div>
        </div>
        <div id="middle">
            <keep-alive :include="includeComps">
                <component :is="componentName"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    import Work from './Work.vue'
    import Resume from './Resume'
    import About from './About'
    import BriefIntro from './BriefIntro'

    export default {
        name: "Homepage",
        data() {
            return {
                slideAnimation: '',
                componentName: 'Work',
                includeComps: [
                    'Work',
                    'Resume',
                    'About',
                    'BriefIntro'
                ],
                msg:0   //0:work, 1:resume/about
            }
        },
        watch: {},
        mounted() {
            document.getElementsByClassName('_menu')[0].classList.add('click');
        },
        methods: {
            toWork: function (e) {
                this.componentName = 'Work';
                // var menus = document.getElementsByClassName('_menu');
                // for(let i=0;i<menus.length;i++)
                // {
                //   menus[i].classList.remove('click');
                // }
                this.removeClickStyle();
                e.target.classList.add("click");
                this.msg=0;
            },
            toResume: function (e) {
                this.componentName = 'Resume';
                this.removeClickStyle();
                e.target.classList.add("click");
                this.msg=1;
            },
            toAbout: function (e) {
                this.componentName = 'About';
                this.removeClickStyle();
                e.target.classList.add("click");
                this.msg=1;
            },
            removeClickStyle: function () {
                var menus = document.getElementsByClassName('_menu');
                for (let i = 0; i < menus.length; i++) {
                    menus[i].classList.remove('click');
                }
            }
        },
        components: {
            BriefIntro,
            Work,
            Resume,
            About
        }
    }
</script>

<style scoped>
    div#top {
        overflow: hidden;
        margin-top:60px;
    }

    div#top div {
        display: inline-block;
    }

    img#liLogo-1 {
        width: 30px;
        height: 54px;
    }

    img#liLogo-2 {
        width: 23px;
        height: 10px;
    }

    div#liLogo {
        width: 72px;
        height: 72px;
        margin: 8px;
        float: left;
    }

    span#designerName {
        font-weight: bold;
    }

    div#briefIntro {
        width: 456px;
        /*height: 84px;*/
        text-align: left;
        margin-left: 53px;
        float: left;
    }

    div#briefIntro p {
        font-family: Rubik-Regular, sans-serif;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0.44px;
        line-height: 28px;
    }

    div#menu {
        margin-left: 70px;
        margin-top: 40px;
        margin-right: 8px;
        float: right;
    }

    div#menu a {
        width: 36px;
        height: 20px;
        font-weight: bold;
        color: #333333;
        text-decoration: none;
        font-family: Rubik-Medium, sans-serif;
        font-size: 14px;
        letter-spacing: 0.44px;
        line-height: 20px;
        margin-left:10px;
        margin-right:10px;
    }

    div#menu a:hover {
        cursor: pointer;
    }

    div#menu a.click {
        border-bottom: #ffe300 solid 4px;
    }

    div#middle {
        margin-top: 88px;
        /*width:880px;*/
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 80px;
        /*text-align:center;*/
    }

    div#homepage {
        position: relative;
        height: 100%;
        width: 900px;
        margin-left: auto;
        margin-right: auto;
    }


</style>
