<template>
    <div id="work6">
        <div id="work6_about">
            <img :src="AboutUrl" alt="about"/>
        </div>
        <div id="work6_research">
            <img :src="ResearchUrl" alt="research"/>
            <ul>
                <li v-for="video in videos">
                    <video :src="video.src" :id="video.id" preload="auto" class="video" @ended="endVideo"
                           controls></video>
                    <!--<img :src="control_src" :id="video.ctl_id" @click.prevent="playVideo" class="video_control" />-->
                </li>
            </ul>
        </div>
        <div id="work6_concept">
            <img :src="ConceptUrl" alt="concept"/>
        </div>
        <div id="work6_product">
            <img :src="ProductUrl" alt="product"/>
            <video :src="video_4.src" :id="video_4.id" preload="auto" class="video" @ended="endVideo" controls></video>
            <!--<img :src="control_src" :id="video_4.ctl_id" @click.prevent="playVideo" class="video_control" />-->
        </div>
        <div id="work6_menu">
            <div id="back_nome_btn0" >
                <BackHomeButton :home_color="home_color_class"></BackHomeButton>
            </div>
            <div @click.prevent="locateAbout" id="work6_about_btn0" class="menu" @mouseover.prevent="menuMouseOver"
                 @mouseout.preventt="menuMouseOut">
                <!--<img :src="select_menu_img_src" class="menu_rectangle"/>-->
                <div class="menu_rec" id="rec1"></div>
                <p id="work6_about_btn">ABOUT</p>
            </div>
            <div @click.prevent="locateResearch" id="work6_research_bt0" class="menu" @mouseover.prevent="menuMouseOver"
                 @mouseout.preventt="menuMouseOut">
                <!--<img :src="menu_img_src" class="menu_rectangle"/>-->
                <div class="menu_rec" id="rec2"></div>
                <p id="work6_research_btn">RESEARCH</p>
            </div>
            <div @click.prevent="locateConcept" id="work6_concept_btn0" class="menu" @mouseover.prevent="menuMouseOver"
                 @mouseout.preventt="menuMouseOut">
                <!--<img :src="menu_img_src" class="menu_rectangle"/>-->
                <div class="menu_rec" id="rec3"></div>
                <p id="work6_concept_btn">CONCEPT</p>
            </div>
            <div @click.prevent="locateProduct" id="work6_product_btn0" class="menu" @mouseover.prevent="menuMouseOver"
                 @mouseout.preventt="menuMouseOut">
                <!--<img :src="menu_img_src" class="menu_rectangle"/>-->
                <div class="menu_rec" id="rec4"></div>
                <p id="work6_product_btn">PRODUCT</p>
            </div>
        </div>
        <FBButtons :cur_work_num="work_num"></FBButtons>
    </div>
</template>

<script>
    import BackHomeButton from '../BackHomeButton'
    import FBButtons from '../FBButtons'
    import AboutUrl from '../../../static/work6/about@2x.png'
    import ResearchUrl from '../../../static/work6/research@2x.png'
    import ConceptUrl from '../../../static/work6/concept@2x.png'
    import ProductUrl from '../../../static/work6/product@2x.png'
    import Video1Url from '../../../static/work6/videos/opportunity1.mp4'
    import Video2Url from '../../../static/work6/videos/opportunity2.mp4'
    import Video3Url from '../../../static/work6/videos/opportunity3.mp4'
    import Video4Url from '../../../static/work6/videos/opportunity4.mp4'


    export default {
        name: "Work6",
        data() {
            return {
                videos: [
                    // {id:"work6_video1",src:'',ctl_id:''}
                ],
                video_4: {},
                control_src: '../../../static/work6/play.png',
                video_num: 4,
                // home_img_src: '../../static/work6/back.png',
                // select_menu_img_src: "../../../static/work6/Rectangle.png",
                // menu_img_src: "../../../static/work6/Rectangle0.png",
                home_color_class:'work6_color',
                work_num:6,
                AboutUrl,
                ResearchUrl,
                ConceptUrl,
                ProductUrl,
                VideosUrl:[Video1Url,Video2Url,Video3Url,Video4Url],
            }
        },
        components: {BackHomeButton,FBButtons},
        methods: {
            locateAbout: function (e) {
                // window.location.hash="#work6_about";
                document.querySelector('#work6_about').scrollIntoView();
                this.menuChange(0);
            },
            locateResearch: function (e) {
                // window.location.hash="#work6_research";
                document.querySelector('#work6_research').scrollIntoView();
                this.menuChange(1);
            },
            locateConcept: function (e) {
                // window.location.hash="#work6_concept";
                document.querySelector('#work6_concept').scrollIntoView();
                this.menuChange(2);

            },
            locateProduct: function (e) {
                // window.location.hash="#work6_product";
                document.querySelector('#work6_product').scrollIntoView();
                this.menuChange(3);

            },
            endVideo: function (e) {
                let id = e.target.id;
                let v_num = id.slice(id.length - 1);
                let v = document.getElementById('work6_video' + v_num);
                // let c = document.getElementById('control6_'+v_num);
                v.currentTime = 0;
                // c.classList.remove('control_click');
            },
            playVideo: function (e) {
                let id = e.target.id;
                let v_num = id.substring(id.indexOf('_') + 1);
                let v = document.getElementById('work6_video' + v_num);
                // let c = document.getElementById('control6_'+v_num);
                if (v.currentTime == v.duration) {
                    v.currentTime = 0;
                }
                // c.classList.add('control_click');
                v.play();
            },
            menuChange:function(select_menu_num){
                let part_array=[];
                part_array.push(document.getElementById('work6_about_btn0'));
                part_array.push(document.getElementById('work6_research_bt0'));
                part_array.push(document.getElementById('work6_concept_btn0'));
                part_array.push(document.getElementById('work6_product_btn0'));
                for(let i=0;i<part_array.length;i++){
                    if(i===select_menu_num){
                        part_array[i].classList.remove('menu_unselect');
                        // part_array[i].querySelector('img').src=this.select_menu_img_src;
                        let j = i + 1;
                        part_array[i].querySelector('div.menu_rec').classList.add('rec' + j + '_select');
                        part_array[i].querySelector('div.menu_rec').classList.remove('menu_rec_unselect');
                    }
                    else{
                        part_array[i].classList.add('menu_unselect');
                        // part_array[i].querySelector('img').src=this.menu_img_src;
                        let j = i + 1;
                        part_array[i].querySelector('div.menu_rec').classList.remove('rec' + j + '_select');
                        part_array[i].querySelector('div.menu_rec').classList.add('menu_rec_unselect');
                    }
                }
            },
            windowScroll:function () {
                if(!document.getElementById('work6_about')){
                    return;
                }
                let about=document.getElementById('work6_about');
                let research=document.getElementById('work6_research');
                let concept=document.getElementById('work6_concept');
                let product=document.getElementById('work6_product');
                let documentClientHeight=document.documentElement.clientHeight||window.innerHeight;
                let tops=[];
                let bottoms=[];
                tops.push(about.getBoundingClientRect().top);
                tops.push(research.getBoundingClientRect().top);
                tops.push(concept.getBoundingClientRect().top);
                tops.push(product.getBoundingClientRect().top);
                bottoms.push(about.getBoundingClientRect().bottom);
                bottoms.push(research.getBoundingClientRect().bottom);
                bottoms.push(concept.getBoundingClientRect().bottom);
                bottoms.push(product.getBoundingClientRect().bottom);
                for(let i=0;i<tops.length;i++){
                    if(tops[i]>=documentClientHeight/4&&tops[i]<=documentClientHeight/2.0){
                        this.menuChange(i);
                        break;
                    }
                    if(bottoms[i]<=documentClientHeight&&bottoms[i]>=documentClientHeight/5.0*2){
                        this.menuChange(i);
                        break;
                    }
                }
                // console.log(tops);
                // console.log(bottoms);
                // console.log(documentClientHeight);
            },
            beforeRouteLeave(to, from, next) {
                sessionStorage.clear();
                next();
            },
            menuMouseOver: function (e) {
                let id = e.target.id;
                // console.log(id);
                let rec=null;
                if (id == 'rec1' || id == 'work6_about_btn') {
                    rec = document.querySelector('div#rec1');
                    rec.classList.add('rec1_hover');
                }
                else if (id == 'rec2' || id == 'work6_research_btn') {
                    rec = document.querySelector('div#rec2');
                    rec.classList.add('rec2_hover');
                }
                else if(id=='rec3' || id=='work6_concept_btn'){
                    rec = document.querySelector('div#rec3');
                    rec.classList.add('rec3_hover');
                }
                else if(id=='rec4' || id=='work6_product_btn'){
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
                else if(id=='rec3' || id=='work6_concept_btn'){
                    rec = document.querySelector('div#rec3');
                    rec.classList.remove('rec3_hover');
                }
                else if(id=='rec4' || id=='work6_product_btn'){
                    rec = document.querySelector('div#rec4');
                    rec.classList.remove('rec4_hover');
                }
            }
        },
        created() {
            let id_pre = 'work6_video';
            let src_pre = '../../../static/work6/videos/opportunity';
            for (let i = 1; i <= this.video_num; i++) {
                let id = id_pre + i;
                // let src = src_pre + i + '.mp4';
                let src = this.VideosUrl[i-1];
                let ctl_id = "control6_" + i;
                if (i === this.video_num) {
                    this.video_4 = {id: id, src: src, ctl_id: ctl_id};
                    break;
                }
                this.videos.push({id: id, src: src, ctl_id: ctl_id});
            }
        },
        mounted() {
            for (let i = 0; i < this.videos.length; i++) {
                let v = document.getElementById(this.videos[i].id);
                v.currentTime = 0;
                v.pause();
            }
            let v = document.getElementById(this.video_4.id);
            v.currentTime = 0;
            v.pause();
            document.querySelector('#work6_about').scrollIntoView();
            document.getElementById('work6_about_btn0').classList.add('menu_select');
            window.addEventListener('scroll',this.windowScroll);
        }
    }
</script>

<style scoped>
    div#work6{
        font-family: 'Rubik';
        /*size: 14px;*/
        font-size: medium;
        font-size: 14px;

    }
    div#work6_about, div#work6_research, div#work6_concept, div#work6_product {
        width: 100%;
        position: relative;
        padding: 0;
        margin: 0;
        margin-top:-10px;
    }

    div img {
        width: 100%;
        height: 100%;
    }

    div#work6_menu {
        position: fixed;
        /*top: 50%;*/
        /*left: 5%;*/
        text-align: left;
        top:120px;
        left:24px;
    }

    ul li {
        list-style: none;
    }
    div.menu{
        color:rgba(4,5,243,1);
        margin-top:30px;
        margin-bottom: 0px;
        margin-left:0px;
        margin-right:0px;
        padding:0px;
    }
    div.menu_unselect{
        color:rgba(4,5,243,0.3);
    }
    div.menu p{
        display:inline-block;
        /*font-size:12px;*/
        margin:2px;
        padding:0;
    }
    img.menu_rectangle{
        width:16px;
        height:16px;
        vertical-align: middle;
    }
    div.menu:hover{
        cursor: pointer;
        font-weight:bold;
        /*cursor: url('../../../static/logos/greyCircle.png') 16 16, pointer;*/
    }
    div.menu_rec {
        width: 16px;
        display: inline-block;
        height: 20px;
        background-color: rgba(4,5,243,1);
        vertical-align: middle;
        transition: width 1s;
    }

    div.menu_rec_unselect {
        background-color: rgba(4,5,243,0.3);
        width: 16px;
    }

     div.rec1_select, div.rec2_select, div.rec3_select, div.rec4_select {
        width: 76px;
    }
    div.rec1_hover{
        width:116px;
    }

    div.rec2_hover {
        width: 116px;
    }

    div.rec3_hover {
        width: 116px;
    }

    div.rec4_hover {
        width: 116px;
    }

    video.video {
        position: absolute;
        width: 40%;
        height: 7%;
        /*border:1px solid red;*/
        z-index: 10;
    }

    video:hover {
        cursor: pointer;
    }

    img.video_control {
        position: absolute;
        width: 50px;
        height: 50px;
        z-index: 11;
    }

    img.control_click {
        display: none;
    }

    img.video_control:hover {
        cursor: pointer;
        width: 52px;
        height: 52px;
    }

    video#work6_video1 {
        top: 63.2%;
        right: 30.5%;
    }

    img#control6_1 {
        top: 66%;
        right: 48.5%;
    }

    video#work6_video2 {
        top: 77.3%;
        right: 30.5%;
    }

    img#control6_2 {
        top: 80.2%;
        right: 48.5%;
    }

    video#work6_video3 {
        top: 90%;
        right: 30.5%;
    }

    img#control6_3 {
        top: 93%;
        right: 48.5%;
    }

    video#work6_video4 {
        bottom: 19%;
        right: 30.5%;
    }

    img#control6_4 {
        bottom: 22%;
        right: 48.5%;
    }

</style>
