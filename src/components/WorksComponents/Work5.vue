<template>
    <div id="work5">
        <div id="work5_about">
            <img src="../../../static/work5/about@2x.png" alt="about"/>
        </div>
        <div id="work5_user_exp">
            <img src="../../../static/work5/exerperience@2x.png" alt="user experience"/>
        </div>
        <div id="work5_user_interface">
            <img src="../../../static/work5/interface@2x.png" alt="user interface"/>
        </div>
        <div id="work5_menu">
            <div id='back_nome_btn0'>
                <BackHomeButton :home_color="home_color_class"></BackHomeButton>
            </div>
            <div @click.prevent="locateAbout" id="work5_about_btn0" class="menu" @mouseover.prevent="menuMouseOver"
                 @mouseout.preventt="menuMouseOut">
                <!--<img :src="select_menu_img_src" class="menu_rectangle"/>-->
                <div class="menu_rec" id="rec1"></div>
                <p id="work5_about_btn" >ABOUT</p></div>
            <div @click.prevent="locateUsrExp" id="work5_usrexp_btn0" class="menu" @mouseover.prevent="menuMouseOver"
                 @mouseout.preventt="menuMouseOut">
                <!--<img :src="menu_img_src" class="menu_rectangle"/>-->
                <div class="menu_rec" id="rec2"></div>
                <p id="work5_usrexp_btn" >EXPERIENCE</p></div>
            <div  @click.prevent="locateUsrItf" id="work5_usritf_btn0" class="menu" @mouseover.prevent="menuMouseOver"
                  @mouseout.preventt="menuMouseOut">
                <!--<img :src="menu_img_src" class="menu_rectangle"/>-->
                <div class="menu_rec" id="rec3"></div>
                <p id="work5_usritf_btn">INTERFACE</p></div>
        </div>
        <FBButtons :cur_work_num="work_num"></FBButtons>
    </div>
</template>

<script>
    import BackHomeButton from '../BackHomeButton'
    import FBButtons from '../FBButtons'

    export default {
        name: "Work5",
        components: {BackHomeButton,FBButtons},
        data(){
            return{
                select_menu_img_src:'../../../static/work5/Rectangle.png',
                menu_img_src:'../../../static/work5/Rectangle0.png',
                home_img_src: '../../static/work5/back.png',
                home_color_class:'work5_color',
                work_num:5
            }
        },
        methods: {
            locateAbout: function (e) {
                // window.location.hash = "#work5_about";
                document.querySelector('#work5_about').scrollIntoView();
                this.menuChange(0);
            },
            locateUsrExp: function (e) {
                // window.location.hash = "#work5_user_exp";
                document.querySelector('#work5_user_exp').scrollIntoView();
                this.menuChange(1);
            },
            locateUsrItf: function (e) {
                // window.location.hash = "#work5_user_interface";
                document.querySelector('#work5_user_interface').scrollIntoView();
                this.menuChange(2);
            },
            menuChange:function (select_menu_num) {
                let part_array = [];
                part_array.push(document.getElementById('work5_about_btn0'));
                part_array.push(document.getElementById('work5_usrexp_btn0'));
                part_array.push(document.getElementById('work5_usritf_btn0'));
                for (let i = 0; i < part_array.length; i++) {
                    if (i === select_menu_num) {
                        part_array[i].classList.remove('menu_unselect');
                        // part_array[i].querySelector('img').src = this.select_menu_img_src;
                        let j = i + 1;
                        part_array[i].querySelector('div.menu_rec').classList.add('rec' + j + '_select');
                        part_array[i].querySelector('div.menu_rec').classList.remove('menu_rec_unselect');
                    }
                    else {
                        part_array[i].classList.add('menu_unselect');
                        // part_array[i].querySelector('img').src = this.menu_img_src;
                        let j = i + 1;
                        part_array[i].querySelector('div.menu_rec').classList.remove('rec' + j + '_select');
                        part_array[i].querySelector('div.menu_rec').classList.add('menu_rec_unselect');
                    }
                }
            },
            windowScroll:function () {
                if (!document.getElementById('work5_about')) {
                    return;
                }
                let about = document.getElementById('work5_about');
                let usr_exp = document.getElementById('work5_user_exp');
                let usr_itf = document.getElementById('work5_user_interface');
                let documentClientHeight = document.documentElement.clientHeight || window.innerHeight;
                let tops = [];
                let bottoms = [];
                tops.push(about.getBoundingClientRect().top);
                tops.push(usr_exp.getBoundingClientRect().top);
                tops.push(usr_itf.getBoundingClientRect().top);
                bottoms.push(about.getBoundingClientRect().bottom);
                bottoms.push(usr_exp.getBoundingClientRect().bottom);
                bottoms.push(usr_itf.getBoundingClientRect().bottom);
                for (let i = 0; i < tops.length; i++) {
                    if (tops[i] >= documentClientHeight / 4 && tops[i] <= documentClientHeight / 2.0) {
                        this.menuChange(i);
                        break;
                    }
                    if (bottoms[i] <= documentClientHeight && bottoms[i] >= documentClientHeight / 5.0 * 2) {
                        this.menuChange(i);
                        break;
                    }
                }
            },
            menuMouseOver: function (e) {
                let id = e.target.id;
                // console.log(id);
                let rec=null;
                if (id == 'rec1' || id == 'work5_about_btn') {
                    rec = document.querySelector('div#rec1');
                    rec.classList.add('rec1_hover');
                }
                else if(id=='rec2' || id=='work5_usrexp_btn'){
                    rec = document.querySelector('div#rec2');
                    rec.classList.add('rec2_hover');
                }
                else if(id=='rec3' || id=='work5_usritf_btn'){
                    rec = document.querySelector('div#rec3');
                    rec.classList.add('rec3_hover');
                }
                return false;
            },
            menuMouseOut: function (e) {
                let id = e.target.id;
                let rec=null;
                if (id == 'rec1' || id == 'work5_about_btn') {
                    rec = document.querySelector('div#rec1');
                    rec.classList.remove('rec1_hover');
                }
                else if(id=='rec2' || id=='work5_usrexp_btn'){
                    rec = document.querySelector('div#rec2');
                    rec.classList.remove('rec2_hover');
                }
                else if(id=='rec3' || id=='work5_usritf_btn'){
                    rec = document.querySelector('div#rec3');
                    rec.classList.remove('rec3_hover');
                }
            }
        },
        mounted(){
            document.querySelector('#work5_about').scrollIntoView();
            this.menuChange(0);
            window.addEventListener('scroll',this.windowScroll);

        },
        beforeRouteLeave(to, from, next) {
            sessionStorage.clear();
            next();
        }
    }
</script>

<style scoped>
    div#work5{
        font-family: 'Rubik';
        /*size: 14px;*/
        font-size: medium;
        font-size: 14px;

    }
    div#work5_about, div#work5_user_exp, div#work5_user_interface {
        width: 100%;
        position: relative;
        padding: 0;
        margin: 0;
        margin-top:-8px;
    }

    div img {
        width: 100%;
        height: 100%;
    }

    div#work5_menu {
        position: fixed;
        /*top: 50%;*/
        /*left: 5%;*/
        text-align:left;
        top:120px;
        left:24px;
    }
    div.menu{
        color:rgba(36,211,255,1);
        margin-top:30px;
        margin-bottom: 0px;
        margin-left:0px;
        margin-right:0px;
        padding:0px;
    }

    div.menu p {
        display: inline-block;
        /*font-size: 12px;*/
        margin: 2px;
        padding: 0;
    }

    div.menu:hover {
        cursor: pointer;
        /*cursor: url('../../../static/logos/greyCircle.png') 16 16, pointer;*/
        font-weight: bold;
    }

    div.menu_unselect {
        /*color: #3c3c3c;*/
        color:rgba(36,211,255,0.3);
    }

    img.menu_rectangle {
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }

    div.menu_rec {
        width: 16px;
        display: inline-block;
        height: 20px;
        background-color: rgba(36,211,255,1);
        vertical-align: middle;
        transition: width 1s;
    }

    div.menu_rec_unselect {
        background-color: rgba(36,211,255,0.3);
        width: 16px;
    }

    div.rec1_select, div.rec2_select, div.rec3_select {
        width: 76px;
    }
    div.rec1_hover{
        width:116px;
    }

    div.rec2_hover {
        width: 1166px;
    }

    div.rec3_hover {
        width: 116px;
    }

</style>
