<template>
    <div class="flex py-3 border-2 border-b-2 border-t-transparent border-l-transparent border-r-transparent  w-full justify-around">
        <button @click="handleCloseOpen" class="relative lg:hidden inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden  text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
<span class="relative px-5 text-gray-600 hover:text-white font-bold py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
    Open SideBar
</span>
</button>
        <div>
            <input @change="input" type="text" placeholder="Enter your Search Shoes" class="bg-gray-100 rounded text-black outline-none px-3 py-2 "/>
        </div>
        <div class="flex mt-1 gap-5">
            <img class="w-[26px] h-[26px] " :src="heart"/>
            <div class="relative">
                <div class="bg-red-500 absolute left-[16px] bottom-5 px-[7px]  text-[14px] rounded-full">
                    {{ cartCount }}
                </div>       
                <img class="w-[26px] h-[26px] " :src="cart"/>
            </div>
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
            sidebar:true,
        }
    },
    inject: ['appContext'],
  methods:{
    input(e){
        this.appContext.name=e.target.value     
    },
    handleCloseOpen(){
        console.log("hey")
    this.$emit('custom-event',this.sidebar)
  }
  },
  props:{
    cartCount:Number
  }
}
</script>