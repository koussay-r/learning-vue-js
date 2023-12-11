<template>
  <div class="flex ">
    <SideBar @custom-event="handleCustomEvent" :sidebar="sidebar" :class="sidebar? 'absolute lg:relative bg-white': ' hidden bg-white lg:block' " ></SideBar>
    <div class="w-full">
      <NavBar @custom-event="handleCustomEvent" :sidebar="sidebar"></NavBar>
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
      sidebar:false,
    }
  },
  components:{
    NavBar,
    SideBar,
    MainComponent
  },
  methods:{
  handleCustomEvent(data) {
    console.log(data)
      this.sidebar = data; 
    }
  }
}
</script>