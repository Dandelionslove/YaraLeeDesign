<template>
  <div id="works">
    <div id="left-part">
      <ul>
        <li v-for="work in leftWorks" @mouseenter="ActiveWork" @mouseleave="DisactiveWork" @click="ClickWork" >
          <!--<router-link :to="{name:work.name, params:{id:work.name}}">-->
            <img :src="work.url" :alt="work.name" :class="work.name" :id="work.id"/>
          <!--</router-link>-->
        </li>
      </ul>
    </div>
    <div id="right-part">
      <ul>
        <li v-for="work in rightWorks" @mouseenter="ActiveWork"
            @mouseleave="DisactiveWork" @click="ClickWork">
          <img :src="work.url" :alt="work.name" :class="work.name" :id="work.id"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import Work1 from './WorksComponents/Work1'
// import Work2 from './WorksComponents/Work2'
// import Work3 from './WorksComponents/Work3'
// import Work4 from './WorksComponents/Work4'
// import Work5 from './WorksComponents/Work5'
// import Work6 from './WorksComponents/Work6'
// import Work7 from './WorksComponents/Work7'
// import Work8 from './WorksComponents/Work8'
import Work1Url from '../../static/works/1.png'
import Work2Url from '../../static/works/2.png'
import Work3Url from '../../static/works/3.png'
import Work4Url from '../../static/works/4.png'
import Work5Url from '../../static/works/5.png'
import Work6Url from '../../static/works/6.png'
import Work7Url from '../../static/works/7.png'
import Work8Url from '../../static/works/8.png'
import Work1ActiveUrl from '../../static/works/1-active.png'
import Work2ActiveUrl from '../../static/works/2-active.png'
import Work3ActiveUrl from '../../static/works/3-active.png'
import Work4ActiveUrl from '../../static/works/4-active.png'
import Work5ActiveUrl from '../../static/works/5-active.png'
import Work6ActiveUrl from '../../static/works/6-active.png'
import Work7ActiveUrl from '../../static/works/7-active.png'
import Work8ActiveUrl from '../../static/works/8-active.png'


  export default {
    name: "Work",
    data() {
      return {
        works: [],
        leftWorks: [
          {name: 'Work1', url: Work1Url, activeUrl: Work1ActiveUrl, type:'APP Design',id:'work1'},
          {name: 'Work2', url: Work2Url, activeUrl: Work2ActiveUrl, type:'App Redesign',id:'work2'},
          {name: 'Work3', url: Work3Url, activeUrl: Work3ActiveUrl, type:'Product Design',id:'work3'},
          {name: 'Work4', url: Work4Url, activeUrl: Work4ActiveUrl, type:'Product Design',id:'work4'},
        ],
        rightWorks: [
          {name: 'Work5', url: Work5Url, activeUrl: Work5ActiveUrl, type:'Mini Program Design',id:'work5'},
          {name: 'Work6', url: Work6Url, activeUrl: Work6ActiveUrl, type:'Product Design',id:'work6'},
          {name: 'Work7', url: Work7Url, activeUrl: Work7ActiveUrl, type:'Product Design',id:'work7'},
          {name: 'Work8', url: Work8Url, activeUrl: Work8ActiveUrl, type:'Product Design',id:'work8'}
        ],
        timer: null,
        isMouseHover: false
      }
    },
    created:function(){
      this.works = this.leftWorks.concat(this.rightWorks);
    },
    methods: {
      ActiveWork: function (e) {   // mouse enter
        e.stopPropagation();
        var workname = e.target.childNodes[0].getAttribute('class');
        // var works = this.leftWorks.concat(this.rightWorks);
        for (let i = 0; i < this.works.length; i++) {
          if (this.works[i].name === workname) {
            e.target.childNodes[0].setAttribute('src', this.works[i].activeUrl);
            // console.log(e.target.parentNode);
            let infoDiv = e.target.childNodes[1];
            infoDiv.style.display = "block";
            break;
          }
        }
        return false;
      },
      DisactiveWork: function (e) {
        e.stopPropagation();
        var workname = e.target.childNodes[0].getAttribute('class');
        for (let i = 0; i < this.works.length; i++) {
          if (this.works[i].name === workname) {
            e.target.childNodes[0].setAttribute('src', this.works[i].url);
            let infoDiv = e.target.childNodes[1];
            infoDiv.style.display = "none";
            break;
          }
        }
        return false;
      },
      ClickWork: function(e){
          // console.log(e.target.className);
          e.preventDefault();
          var workName = e.target.className;
          // 控制作品是否跳转
          if(workName.indexOf('3')!=-1 || workName.indexOf('4')!=-1 || workName.indexOf('7')!=-1 || workName.indexOf('8')!=-1){
              console.log('no');
              return;
          }
          this.$parent.$emit('func',workName);
          // return false;
      },
      CreateWorkInfoDiv: function (workElement, typeInfo, nameInfo) {
        let imgParent = workElement.parentNode;
        let infoDivForWork = document.createElement('div');
        infoDivForWork.classList.add('workInfo');
        infoDivForWork.style.display = "none";
        infoDivForWork.setAttribute('pointer-events', 'inherit');
        imgParent.appendChild(infoDivForWork);
        infoDivForWork.style.position = 'absolute';
        infoDivForWork.style.bottom = '6px';
        infoDivForWork.style.left = '0px';
        infoDivForWork.style.fontSize = '14px';
        infoDivForWork.style.color = '#333333';
        infoDivForWork.style.fontWeight = 'bold';
        // infoDivForWork.style.backgroundColor = 'rgba(0,0,0,0.1)';
        infoDivForWork.style.height = '115px';
        infoDivForWork.style.width = '432px';
        infoDivForWork.style.margin = '0px';
        infoDivForWork.style.backgroundImage = 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))';

        let typeInfoDiv = document.createElement('div');
        typeInfoDiv.style.backgroundColor = '#ffe300';
        if(typeInfo == 'APP Design'){
          typeInfoDiv.style.width = '93px';
        }
        else if(typeInfo == 'Mini Program Design'){
            typeInfoDiv.style.width = '150px';
        }
        else
        {
          typeInfoDiv.style.width = '120px';
        }
        typeInfoDiv.style.height = '24px';
        typeInfoDiv.style.borderRadius = '12px';
        typeInfoDiv.style.position = 'absolute';
        typeInfoDiv.style.top = '20px';
        typeInfoDiv.style.left = '23px';
        typeInfoDiv.style.textAlign = 'center';
        // typeInfoDiv.style.lineHeight = '100px';
        // typeInfoDiv.style.overflow = 'hidden';
          typeInfoDiv.style.verticalAlign = 'center';
          typeInfoDiv.style.paddingTop = '4px';
        let typeInfoText = document.createTextNode(typeInfo);
        typeInfoDiv.appendChild(typeInfoText);
        infoDivForWork.appendChild(typeInfoDiv);

        let nameInfoP = document.createElement('p');
        nameInfoP.appendChild(document.createTextNode(nameInfo));
        nameInfoP.style.textAlign = 'left';
        nameInfoP.style.paddingLeft = '23px';
        let nameInfoDiv = document.createElement('div');
        nameInfoDiv.style.color = '#ffffff';
        nameInfoDiv.style.fontSize = '24px';
        nameInfoDiv.style.position = 'absolute';
        nameInfoDiv.style.top = '25px';
        nameInfoDiv.style.left = '0px';
        nameInfoDiv.appendChild(nameInfoP);
        infoDivForWork.appendChild(nameInfoDiv);
      }

    },
    mounted:function(){
      // var imgLis = document.querySelectorAll('li');
      // for(let i=0;i<imgLis.length;i++){
      //   document.getComputedStyle(imgLis[i], ':hover')
      // }
      // document.getComputedStyle()
      var leftWorks = document.querySelectorAll('div#left-part img');
      for(let i=0;i<leftWorks.length;i++){
        if(i%2==0){
          leftWorks[i].setAttribute('height', '408px');
          // leftWorks[i].parentNode.setAttribute('height', '408px');
        }
        else{
          leftWorks[i].setAttribute('height', '240px');
        }
        // 创建图片上的信息
        let typeInfo = this.leftWorks[i].type;
        let nameInfo = this.leftWorks[i].name;
          if(i==0){
              nameInfo='Hunting Materials Map App';
          }
          else if(i==1)
          {
              nameInfo='Jaguar & Land Rover APP';
          }
          else if(i==2)
          {
              nameInfo='Zone Collaboration Space';
          }
          else if(i==3)
          {

          }
        this.CreateWorkInfoDiv(leftWorks[i], typeInfo, nameInfo);
      }
      var rightWorks = document.querySelectorAll('div#right-part img');
      for(let i=0;i<rightWorks.length;i++){
        if(i%2 == 0){
          rightWorks[i].setAttribute('height', '240px');
        }
        else{
          rightWorks[i].setAttribute('height', '408px');
        }
        // 创建图片上的信息
        let typeInfo = this.rightWorks[i].type;
        let nameInfo = this.rightWorks[i].name;
        if(i==0){
            nameInfo='AwakeFitness Mini Program';
        }
        else if(i==1)
        {
            nameInfo='Arduino Programming Robot';
        }
        else if(i==2)
        {

        }
        else if(i==3)
        {

        }
        this.CreateWorkInfoDiv(rightWorks[i], typeInfo, nameInfo);
      }
    }
  }
</script>

<style scoped>
  li {
    list-style: none;
    /*overflow: scroll;*/

  }

  li img:hover {
    cursor: pointer;
  }

  li img {
    width: 432px;

  }

  /*li:hover div*/
  /*{*/
    /*display:block;*/
  /*}*/

  /*li div*/
  /*{*/
    /*display:none;*/
  /*}*/

  /*#works {*/
    /*width: 900px;*/
    /*!*text-align:center;*!*/
    /*margin-left: auto;*/
    /*margin-right: auto;*/
  /*}*/

  #works div ul {
    padding: 0px;
    margin: 0px;
    /*margin-left:auto;*/
    /*margin-right:auto;*/
    /*margin-top:0px;*/
    /*margin-buttom:0px;*/
  }

  #works div ul li {
    display: inline-block;
    /*float:left;*/
    margin: 8px;
    width:432px;
    position:relative;
  }

  div#left-part, div#right-part
  {
    width:440px;
    margin:0px;
    padding:0px;
    display: inline-block;
  }

  /*div.workInfo*/
  /*{*/
    /*display: inline-block;*/
    /*background-color: rgba(0,0,0,0.1);*/
    /*width:100%;*/
    /*height:120px;*/
    /*position:relative;*/
    /*bottom:-120px;*/
  /*}*/


  /*div.typeInfoDiv*/
  /*{*/
    /*background-color: #ffe300;*/
    /*border-radius: 12px;*/
    /*width:93px;*/
    /*height:24px;*/
  /*}*/
#work3,#work4,#work7,#work8{
  display:none;
}

</style>
