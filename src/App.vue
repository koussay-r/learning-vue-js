<template>
  <div class="flex">
    <SideBar  v-if="sidebar==0" class="hidden bg-white lg:block"></SideBar>
    <SideBar  v-if="sidebar==1" class=" bg-white absolute"></SideBar>
    <SideBar  v-if="sidebar==2" class="hidden"></SideBar>
    <div class="w-full">
      <NavBar></NavBar>
      <MainComponent></MainComponent>
    </div>
  </div>
</template>
<script >
import SideBar from './components/SideBar.vue';
import NavBar from './components/NavBar.vue';
import MainComponent from './components/MainComponent.vue';
export default{
  data(){
    return{
      sidebar:0,
    }
  },
  components:{
    NavBar,
    SideBar,
    MainComponent
  },
  watch:{
    'appContext.sidebar':function(newVal, oldVal){
      this.sidebar=newVal}
  }
}
</script>