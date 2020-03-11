<template>
<div>
  <div id="about">
    <img :src="AboutImgUrl" alt="about me" id="about_me"/>
  </div>
</div>
</template>

<script>
  import AboutImgUrl from '../../static/about/img_about@2x.png'
    export default {
        name: "About",
        data(){
            return{
                AboutImgUrl
            }
        }
    }
</script>

<style scoped>
  img#about_me{
    width:100%;
    height:100%;
  }

</style>
