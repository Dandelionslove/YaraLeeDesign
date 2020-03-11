<template>
    <div>
        <div id="select">
            <p id="resume_lang" @click="exchangeResumeType"><span id="en">EN</span>
                /
                <span id="ch">CH</span>
            </p>
            <a :href="resumeUrl" target="_blank">Download</a>
        </div>
        <div>
            <img id="resume_img" alt="resume" :src="resumeSrc"/>
        </div>
    </div>
</template>

<script>
    import resumeEnSrc from "../../static/resume/img_resume_en@2x.png"
    import resumeChSrc from '../../static/resume/img_resume_ch@2x.png'

    export default {
        name: "Resume",
        data() {
            return {
                resumeType: 0, // 0 : en, 1 : ch
                resumeEnSrc,
                resumeChSrc,
                resumeSrc: resumeEnSrc,
                // resumeEnUrl:'http://127.0.0.1:8080/static/resume/download_resume_en.pdf',
                resumeEnUrl:'../../static/resume/TongjiUniversity_YaraLee_resume_EN.pdf',
                resumeChUrl:'../../static/resume/同济大学_李圆圆_中文简历.pdf',
                resumeUrl:'../../static/resume/TongjiUniversity_YaraLee_resume_EN.pdf'
            }
        },
        methods: {
            exchangeResumeType:function(e){
                if(this.resumeType === 1){
                    this.resumeType = 0;
                    this.resumeUrl = this.resumeEnUrl;
                    this.resumeSrc = this.resumeEnSrc;
                    let en_span = document.getElementById('en');
                    let ch_span = document.getElementById('ch');
                    if (!en_span.classList.contains('en_select')) {
                        en_span.classList.add('en_select');
                        ch_span.classList.remove('ch_select');
                    }
                }
                else{
                    this.resumeType=1;
                    this.resumeUrl = this.resumeChUrl;
                    this.resumeSrc = this.resumeChSrc;
                    let en_span = document.getElementById('en');
                    let ch_span = document.getElementById('ch');
                    if (!ch_span.classList.contains('ch_select')) {
                        ch_span.classList.add('ch_select');
                        en_span.classList.remove('en_select');
                    }
                }
                e.preventDefault();
            }
        },
        mounted: function () {
            document.getElementById('en').classList.add('en_select');
            let path=window.location.href;

        },
        beforeRouteLeave(to,from,next){
            to.meta.keepAlive = true;
            next();
        }
    }
</script>

<style scoped>
    div#select {
        margin: 20px auto;
    }

    p#resume_lang {
        color: #979797;
        font-size: 16px;
    }

    p#resume_lang:hover
    {
        cursor: pointer;
    }

    /*span#en:hover, span#ch:hover {*/
        /*color: #ffe300;*/
        /*font-size: 24px;*/
        /*font-weight: bold;*/
    /*}*/

    div p {
        display: inline;
    }

    div#select {
        /*position:absolute;*/
        text-align: right;
        margin-right:20px;
    }
    div#select a{
        color:#000;
        margin-left:30px;
    }

    p#download {
        position: relative;
        right: -10px;
    }

    .en_select, .ch_select {
        color: #ffe300;
        font-size: 24px;
        font-weight: bold;
    }

    img#resume_img{
        width:100%;
        height:100%;
    }

</style>
