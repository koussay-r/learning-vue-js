<template>
    <div class="lg:w-[25%] w-[45%]">
        <div @click="handleCloseOpen" class="px-7 py-4  border-2 border-b-transparent">
            <img  :src="cart" class="w-[30px] block mx-auto h-[30px]"/>
        </div>
        <div class="h-[100vh] border-2">
            <p  class="text-center  pt-3 text-[22px]">Category</p>
            <ul class="flex  mx-auto pt-3 flex-col-reverse">
                <li class="ml-16"> <input @click="ChooseBrand('heels')"  class="mr-3" name="option" type="radio"  >Heels</li>
                <li class="ml-16"> <input @click="ChooseBrand('sandals')"  class="mr-3" name="option" type="radio"  >Sandals</li>
                <li class="ml-16"> <input @click="ChooseBrand('flats')"  class="mr-3" name="option" type="radio"  >Flats</li>
                <li class="ml-16"> <input @click="ChooseBrand('sneakers')"  class="mr-3" name="option" type="radio"  >Sneakers</li>
                <li class="ml-16"> <input @click="ChooseBrand('')" class="mr-3" name="option" type="radio"  > All</li>
            </ul>
            <p class="text-center  pt-3 text-[22px]">Price</p>
            <ul class="flex  mx-auto pt-3 flex-col-reverse">
                <li class="ml-16"> <input @click="choosePrice(151,1000)"  class="mr-3" name="option2" type="radio"  >over $150</li>
                <li class="ml-16"> <input @click="choosePrice(100,150)" class="mr-3" name="option2" type="radio"  >$100 - $150</li>
                <li class="ml-16"> <input @click="choosePrice(50,100)" class="mr-3" name="option2" type="radio"  >$50 - $100</li>
                <li class="ml-16"> <input @click="choosePrice(0,50)"  class="mr-3" name="option2" type="radio"  >$0 - $50</li>
                <li class="ml-16"> <input @click="choosePrice(0,0)" class="mr-3" name="option2" type="radio"  > All</li>
            </ul>
            <p class="text-center  pt-3 text-[22px]">Colors</p>
            <ul class="flex  mx-auto pt-3 gap-2 flex-col-reverse">
                <li @click="handleName('white')" class=" cursor-pointer flex ml-16"> <img :src="white" class="mr-3 pt-[1px] w-[22px] h-[22px] "/>White</li>
                <li @click="handleName('green')" class=" cursor-pointer flex ml-16"> <img :src="green" class="mr-3 pt-[1px] w-[22px] h-[22px] "/>Green</li>
                <li @click="handleName('red')" class=" cursor-pointer flex ml-16"> <img :src="red" class="mr-3 pt-[1px] w-[22px] h-[22px] "/>Red</li>
                <li @click="handleName('blue')" class=" cursor-pointer flex ml-16"> <img :src="blue" class="mr-3 pt-[1px] w-[22px] h-[22px] "/>Blue</li>
                <li @click="handleName('black')" class=" cursor-pointer flex ml-16"> <img :src="black" class="mr-3 pt-[1px] w-[22px] h-[22px] "/>Black</li>
                <li @click="handleName('')" class=" cursor-pointer flex ml-16"> <img :src="AllColors" class="mr-3 pt-[1px] w-[22px] h-[22px] "/> All</li>
            </ul>
        </div>
    </div>
</template>
<script >
import cart from "./../assets/icons8-cart.gif"
import black from './../assets/Ellipse 3.png'
import blue from "./../assets/Ellipse 4.png"
import red from "./../assets/Ellipse 5.png"
import white from "./../assets/Ellipse 2.png"
import green from "./../assets/Ellipse 7.png"
import AllColors from "./../assets/Ellipse 1.png"
 export default{
    data(){
        return {
            cart:cart,
            black:black,
            blue:blue,
            white:white,
            AllColors:AllColors,
            red:red,
            green:green,
            sidebar:false
            
            
        }
    },
    inject: ['appContext'],
  methods:{
    handleName(e){
        this.appContext.name=e    
    },choosePrice(Minprice,MaxPrice){
        this.appContext.minPrice=Minprice
        this.appContext.maxPrice=MaxPrice
  },
  ChooseBrand(e){
    this.appContext.brand=e
  },
  handleCloseOpen(){
    this.$emit('custom-event',this.sidebar);
    
  }
}
 }
</script>