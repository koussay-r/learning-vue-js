<template>
    <div class="flex py-3 border-2 border-b-2 border-t-transparent border-l-transparent border-r-transparent  w-full justify-around">
        <div class="text-center block lg:hidden">
   <button @click="handleOpenClose()" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
   Show navigation
   </button>
</div>
        <div>
            <input @change="input" type="text" placeholder="Enter your Search Shoes" class="bg-gray-100 rounded text-black outline-none px-3 py-2 "/>
        </div>
        <div class="flex mt-1 gap-5">
            <img class="w-[26px] h-[26px] " :src="heart"/>
            <img class="w-[26px] h-[26px] " :src="cart"/>
            <img class="w-[26px] h-[26px] " :src="profile"/>
        </div>
    </div>
</template>
<script>
import heart from "./../assets/icons8-heart-100.png"
import cart from "./../assets/icons8-cart-90.png"
import profile from "./../assets/icons8-male-user-100.png"
export default{
    data(){
        return{
            heart: heart,
            cart: cart,
            profile: profile,
        }
    },
    inject: ['appContext'],
  methods:{
    input(e){
        this.appContext.name=e.target.value     
    },
    handleOpenClose(){
        let sideBar=document.getElementById("sidebar")
        sideBar.style.display="block"
        sideBar.style.position="absolute"
    }
  }
}
</script>