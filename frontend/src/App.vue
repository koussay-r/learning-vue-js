<template>
  <div class="flex ">
    <SideBar @custom-event="handleCustomEvent" :sidebar="sidebar"  :class="sidebar? 'absolute lg:relative bg-white': ' hidden bg-white lg:block' " ></SideBar>
    <div class="w-full">
      <NavBar @custom-event="handleCustomEvent" :cartCount="cartCount" :sidebar="sidebar"></NavBar>
      <MainComponent @event="handleEvent" ></MainComponent>
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
      cartCount:localStorage.getItem("AddedShoes")==null?0:JSON.parse(localStorage.getItem("AddedShoes")).length
    }
  },
  components:{
    NavBar,
    SideBar,
    MainComponent
  },
  methods:{
  handleCustomEvent(data) {
    this.sidebar = data; 
  }
  ,
  handleEvent(data) {
      this.cartCount = this.cartCount+(data); 
    }
  }
}
</script>