<template>
  <div class="flex">
    <SideBar class="hidden lg:block"></SideBar>
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
  components:{
    NavBar,
    SideBar,
    MainComponent
  }
}
</script>