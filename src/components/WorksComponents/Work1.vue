<template>
    <div id="work1">
        <!--<button @click="toHomePage">Back</button>-->
        <!--<BackHomeButton></BackHomeButton>-->
        <div id="work1_about">
            <img src="../../../static/work1/about@2x.png" alt="about"/>
        </div>
        <div id="work1_research">
            <img src="../../../static/work1/research@2x.png" alt="research"/>
        </div>
        <div id="work1_user_exp">
            <img src="../../../static/work1/userExperience@2x.png" alt="user experience"/>
        </div>
        <div id="work1_user_interface">
            <img src="../../../static/work1/userInterface@2x.png" alt="user interface"/>
            <ul>
                <li v-for="video in videos">
                    <video :src="video.src" :id="video.id" preload="auto" class="video" @ended="endVideo" loop></video>
                    <img :src="iphone_src" alt="iPhoneXS" :id="video.bg_id" class="video_bg"/>
                    <!--<img :src="control_src" :id="video.ctl_id" @click.prevent="playVideo" class="video_control"/>-->
                </li>
            </ul>

        </div>
        <div id="work1_menu">
            <!--<button>-->
            <div id="work1_home_btn0">
                <BackHomeButton :home_color="home_color_class"></BackHomeButton>
            </div>
            <!--</button>-->
            <div id="work1_about_btn0" class="menu" @click.prevent="locateAbout" @mouseover.prevent="menuMouseOver"
                 @mouseout.preventt="menuMouseOut">
                <!--<img :src="select_menu_img_src" class="menu_rectangle"/>-->
                <div class="menu_rec" id="rec1"></div>
                <p id="work1_about_btn">ABOUT</p>
            </div>
            <div id="work1_research_btn0" class="menu" @click.prevent="locateResearch"
                 @mouseover.prevent="menuMouseOver"
                 @mouseout.preventt="menuMouseOut">
                <!--<img :src="menu_img_src" class="menu_rectangle"/>-->
                <div class="menu_rec" id="rec2"></div>
                <p id="work1_research_btn">RESEARCH</p>
            </div>
            <div id="work1_usrexp_btn0" class="menu" @click.prevent="locateUsrExp" @mouseover.prevent="menuMouseOver"
                 @mouseout.preventt="menuMouseOut">
                <!--<img :src="menu_img_src" class="menu_rectangle"/>-->
                <div class="menu_rec" id="rec3"></div>
                <p id="work1_usrexp_btn">EXPERIENCE</p>
            </div>
            <div id="work1_usritf_btn0" class="menu" @click.prevent="locateUsrItf" @mouseover.prevent="menuMouseOver"
                 @mouseout.preventt="menuMouseOut">
                <!--<img :src="menu_img_src" class="menu_rectangle"/>-->
                <div class="menu_rec" id="rec4"></div>
                <p id="work1_usritf_btn">INTERFACE</p>
            </div>
        </div>
        <FBButtons :cur_work_num="work_num"></FBButtons>
    </div>
</template>

<script>
    import BackHomeButton from '../BackHomeButton'
    import FBButtons from '../FBButtons'

    export default {
        name: "work1",
        components: {
            BackHomeButton,
            FBButtons
        },
        data() {
            return {
                control_src: '../../../static/work1/play.png',
                iphone_src: '../../../static/work1/iPhoneXS@1x.png',
                video_num: 11,
                videos: [
                    // {id:'work1_video1', src:'../../../static/work1/videos/work01_video_1.mp4',ctl_id:'control_1'},
                ],
                home_img_src: "../../static/work1/back.png",
                select_menu_img_src: "../../../static/work1/Rectangle.png",
                menu_img_src: "../../../static/work1/Rectangle0.png",
                home_color_class: 'work1_color',
                work_num: 1
            }
        },
        methods: {
            locateAbout: function (e) {
                // window.location.hash = '#work1_about';
                document.querySelector('#work1_about').scrollIntoView();
                this.menuChange(0);
            },
            locateResearch: function (e) {
                // window.location.hash = "#work1_research";
                document.querySelector('#work1_research').scrollIntoView();
                this.menuChange(1);
            },
            locateUsrExp: function (e) {
                // window.location.hash = "#work1_user_exp";
                document.querySelector('#work1_user_exp').scrollIntoView();
                this.menuChange(2);

            },
            locateUsrItf: function (e) {
                // window.location.hash = "#work1_user_interface";
                document.querySelector('#work1_user_interface').scrollIntoView();
                this.menuChange(3);

                let v1 = document.getElementById('work1_video1');
                let c1 = document.getElementById('control_1');
                v1.currentTime = 0;
                c1.classList.remove('control_click');
            },
            playVideo: function (e) {
                let id = e.target.id;
                //console.log(id); control_1
                let v_num = id.substring(id.indexOf('_') + 1);
                // console.log(v_num);
                let v = document.getElementById('work1_video' + v_num);
                let c = document.getElementById('control_' + v_num);
                v.currentTime = 0;
                c.classList.add('control_click');
                v.play();
            },
            endVideo: function (e) {
                let id = e.target.id;
                let v_num = id.slice(id.length - 1);
                let v = document.getElementById('work1_video' + v_num);
                // let c = document.getElementById('control_' + v_num);
                v.currentTime = 0;
                // c.classList.remove('control_click');
                var replay=self.setInterval(function () {
                    v.play();
                },3000);
            },
            menuChange: function (select_menu_num) {
                let about = document.querySelector('#work1_about_btn0');
                let research = document.querySelector('#work1_research_btn0');
                let usr_exp = document.querySelector('#work1_usrexp_btn0');
                let usr_itf = document.querySelector('#work1_usritf_btn0');
                let part_array = [about, research, usr_exp, usr_itf];
                for (let i = 0; i < part_array.length; i++) {
                    if (i === select_menu_num) {
                        part_array[i].classList.remove('menu_unselect');
                        // part_array[i].querySelector('img').src=this.select_menu_img_src;
                        let j = i + 1;
                        part_array[i].querySelector('div.menu_rec').classList.add('rec' + j + '_select');
                        part_array[i].querySelector('div.menu_rec').classList.remove('menu_rec_unselect');
                    }
                    else {
                        part_array[i].classList.add('menu_unselect');
                        // part_array[i].querySelector('img').src=this.menu_img_src;
                        let j = i + 1;
                        part_array[i].querySelector('div.menu_rec').classList.remove('rec' + j + '_select');
                        part_array[i].querySelector('div.menu_rec').classList.add('menu_rec_unselect');
                    }
                }
            },
            windowScroll: function () {
                if (!document.getElementById('work1_about')) {
                    return;
                }
                let about = document.getElementById('work1_about');
                let research = document.getElementById('work1_research');
                let usr_exp = document.getElementById('work1_user_exp');
                let usr_ift = document.getElementById('work1_user_interface');
                // console.log('scroll');
                let documentClientHeight = document.documentElement.clientHeight || window.innerHeight;
                let tops = [];
                let bottoms = [];
                let top1 = about.getBoundingClientRect().top;
                let bottom1 = about.getBoundingClientRect().bottom;
                tops.push(top1);
                bottoms.push(bottom1);
                let top2 = research.getBoundingClientRect().top;
                let bottom2 = research.getBoundingClientRect().bottom;
                tops.push(top2);
                bottoms.push(bottom2);
                let top3 = usr_exp.getBoundingClientRect().top;
                let bottom3 = usr_exp.getBoundingClientRect().bottom;
                tops.push(top3);
                bottoms.push(bottom3);
                let top4 = usr_ift.getBoundingClientRect().top;
                let bottom4 = usr_ift.getBoundingClientRect().bottom;
                tops.push(top4);
                bottoms.push(bottom4);
                for (let i = 0; i < tops.length; i++) {
                    if (tops[i] >= documentClientHeight / 4 && tops[i] <= documentClientHeight / 2.0) {
                        this.menuChange(i);
                        break;
                    }
                    if (bottoms[i] <= documentClientHeight && bottoms[i] >= documentClientHeight - documentClientHeight / 5.0) {
                        this.menuChange(i);
                        break;
                    }
                }
                // console.log(documentClientHeight);
                // console.log(tops);
                // console.log(bottoms);
            },
            goBack() {

            },
            menuMouseOver: function (e) {
                let id = e.target.id;
                // console.log(id);
                let rec=null;
                if (id == 'rec1' || id == 'work1_about_btn') {
                    rec = document.querySelector('div#rec1');
                    rec.classList.add('rec1_hover');
                }
                else if (id == 'rec2' || id == 'work1_research_btn') {
                    rec = document.querySelector('div#rec2');
                    rec.classList.add('rec2_hover');
                }
                else if(id=='rec3' || id=='work1_usrexp_btn'){
                    rec = document.querySelector('div#rec3');
                    rec.classList.add('rec3_hover');
                }
                else if(id=='rec4' || id=='work1_usritf_btn'){
                    rec = document.querySelector('div#rec4');
                    rec.classList.add('rec4_hover');
                }
                return false;
            },
            menuMouseOut: function (e) {
                let id = e.target.id;
                let rec=null;
                if (id == 'rec1' || id == 'work1_about_btn') {
                    rec = document.querySelector('div#rec1');
                    rec.classList.remove('rec1_hover');
                }
                else if (id == 'rec2' || id == 'work1_research_btn') {
                    rec = document.querySelector('div#rec2');
                    rec.classList.remove('rec2_hover');
                }
                else if(id=='rec3' || id=='work1_usrexp_btn'){
                    rec = document.querySelector('div#rec3');
                    rec.classList.remove('rec3_hover');
                }
                else if(id=='rec4' || id=='work1_usritf_btn'){
                    rec = document.querySelector('div#rec4');
                    rec.classList.remove('rec4_hover');
                }
                return false;
            }
        },
        mounted() {
            for (let i = 1; i <= this.video_num; i++) {
                let v = document.getElementById('work1_video' + i);
                v.currentTime = 0;
                // v.pause();
                v.play();
            }
            document.querySelector('#work1_about').scrollIntoView();
            // document.querySelector('#work1_about_btn0').classList.add('menu_select');
            this.menuChange(0);
            // document.querySelector('#work1_research_btn0').classList
            window.addEventListener('scroll', this.windowScroll);
            window.addEventListener('popstate', this.goBack, false);

        },
        created() {
            let id_pre = 'work1_video';
            let src_pre = '../../../static/work1/videos/work01_video_';
            for (let i = 1; i <= this.video_num; i++) {
                let id = id_pre + i;
                let src = src_pre + i + '.mp4';
                let ctl_id = 'control_' + i;
                let bg_id = 'bg_' + i;
                this.videos.push({id: id, src: src, ctl_id: ctl_id, bg_id: bg_id});
            }
        }
    }
</script>

<style scoped>
    div#work1 {
        font-family: 'Rubik';
        /*size: 14px;*/
        font-size: medium;
        font-size: 14px;
    }

    div#work1_home_btn0 {
        /*font-size:24px;*/
    }

    div#work1_about, div#work1_research, div#work1_user_exp, div#work1_user_interface {
        width: 100%;
        position: relative;
        padding: 0;
        margin: 0;
        margin-top: -8px;
        z-index:-1;
    }
    div#work1_user_interface{
        margin-bottom: -260px;
        /*z-index: -10;*/
    }

    div img {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }

    div#work1_menu {
        position: fixed;
        /*top: 50%;*/
        /*left: 5%;*/
        text-align: left;
        top: 120px;
        left: 24px;
    }

    div.menu:hover {
        /*cursor: url('../../../static/logos/greyCircle.png') 12 12, pointer;*/
        cursor:pointer;
        font-weight: bold;
    }

    div.menu {
        color: #413a92;
        margin-top: 30px;
        margin-bottom: 0px;
        margin-left: 0px;
        margin-right: 0px;
        padding: 0px;
    }

    div.menu_select {
        color: rgba(65, 58, 146, 1);
    }

    div.menu_unselect {
        color: rgba(65, 58, 146, 0.3);

    }

    div.menu_rec {
        width: 16px;
        display: inline-block;
        height: 20px;
        background-color: rgba(65, 58, 146, 1);
        vertical-align: middle;
        transition: width 1s;
    }

    div.menu_rec_unselect {
        background-color: rgba(65, 58, 146, 0.3);
        width: 16px;
    }

    div.rec1_select, div.rec2_select, div.rec3_select, div.rec4_select  {
        width: 76px;
    }
    div.rec1_hover
    {
        width:116px;
    }


    div.rec2_hover{
        width: 116px;
    }

    div.rec3_hover {
        width: 116px;
    }

    div.rec4_hover {
        width: 116px;
    }

    div.menu p {
        display: inline-block;
        margin: 2px;
        padding: 0;
    }

    img.menu_rectangle {
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }

    div#work1_user_interface {
        top: 0;
        right: 0;
    }

    li {
        list-style: none;
    }

    video.video {
        width: 33%;
        height: 3.3%;
        position: absolute;
    }

    /*video.video:hover {*/
        /*cursor: pointer;*/
    /*}*/

    img.video_bg {
        position: absolute;
        width: 15%;
        height: 3.5%;
    }

    img.video_control {
        width: 50px;
        height: 50px;
        position: absolute;
    }

    img.video_control:hover {
        cursor: pointer;
        width: 52px;
        height: 52px;
    }

    img.control_click {
        display: none;
    }

    video#work1_video1 {
        top: 3.9%;
        right: 22%;
        /*z-index: 100;*/
        /*border:1px solid red;*/
    }

    img#bg_1 {
        top: 3.8%;
        right: 31%;
    }

    img#control_1 {
        top: 5.4%;
        right: 36%;
    }

    video#work1_video2 {
        top: 22.2%;
        right: 22%;
    }

    img#bg_2 {
        top: 22.1%;
        right: 31%;
    }

    img#control_2 {
        top: 23.5%;
        right: 36%;
    }

    img#bg_3 {
        top: 25.9%;
        right: 53.5%;
    }

    video#work1_video3 {
        top: 26%;
        right: 44.5%;
    }

    img#control_3 {
        top: 27.5%;
        right: 58.5%;
    }

    img#bg_4 {
        top: 30%;
        right: 31%;
    }

    video#work1_video4 {
        top: 30.1%;
        right: 22%;
    }

    img#control_4 {
        top: 31.5%;
        right: 36%;
    }

    img#bg_5 {
        top: 33.8%;
        right: 53.5%;
    }

    video#work1_video5 {
        top: 33.9%;
        right: 44.5%;
    }

    img#control_5 {
        top: 35.3%;
        right: 58.5%;
    }

    img#bg_6 {
        top: 42.4%;
        right: 53.5%;
    }

    video#work1_video6 {
        top: 42.5%;
        right: 44.5%;
    }

    img#control_6 {
        top: 43.9%;
        right: 58.5%;
    }

    img#bg_7 {
        top: 46.2%;
        right: 31%;
    }

    video#work1_video7 {
        top: 46.3%;
        right: 22%;
    }

    img#control_7 {
        top: 47.8%;
        right: 36%;
    }

    img#bg_8 {
        top: 50.3%;
        right: 53.5%;
    }

    video#work1_video8 {
        top: 50.4%;
        right: 44.5%;
    }

    img#control_8 {
        top: 51.8%;
        right: 58.5%;
    }

    img#bg_9 {
        top: 60.8%;
        right: 31%;
    }

    video#work1_video9 {
        top: 60.9%;
        right: 22%;
    }

    img#control_9 {
        top: 62.3%;
        right: 36%;
    }

    img#bg_10 {
        top: 64.8%;
        right: 53.5%;
    }

    video#work1_video10 {
        top: 64.9%;
        right: 44.5%;
    }

    img#control_10 {
        top: 66.3%;
        right: 58.5%;
    }

    img#bg_11 {
        top: 70.8%;
        right: 42.3%;
    }

    video#work1_video11 {
        top: 70.9%;
        right: 33.3%;
    }

    img#control_11 {
        top: 72.3%;
        right: 47.5%;
    }


</style>
