<template>
    <div class="flex py-3 border-2 border-b-2 border-t-transparent border-l-transparent border-r-transparent  w-full justify-around">
        <button class="border-2 lg:hidden block px-3 py-1 rounded" @click="handleCloseOpen">
            Open SideBar
        </button>
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
            sidebar:true
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
  }
}
</script>