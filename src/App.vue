<template>
  <div class="flex mt-[200px] px-4 justify-between">
    <div class="w-[300px]  h-[250px]">
      <img  :src="handleOutOfStock==true?chaussette_hovered:outOfStock"/>
    </div>
    <div>
      <p class="text-[30px]">VueJs Chaussettes</p>
      <p v-if="handleOutOfStock==false">En repture de stock</p>
      <p v-else >En stock</p>
      <ul>
        <li>
          50% coton
        </li>
        <li>
          30% laine
        </li>
        <li>
          20% polyester
        </li>
      </ul>
      <img @mouseover="handleChangeChaussetteToGreen" :src="greenCircle" class="w-[60px] mt-3 " />
      <img @mouseover="handleChangeChaussetteToBlue" :src="blueCircle" class="w-[60px] mt-3 " />

      <button v-if="handleOutOfStock==true" @click="handleAddToCart" class=" bg-blue-700 text-white p-4 mt-3 font-bold rounded">Add To Cart</button>
      <button v-else class=" bg-slate-300 cursor-not-allowed text-white p-4 mt-3 font-bold rounded">Add To Cart</button>

    </div>
    <div >
      <p class="border-2 border-black p-5">Cart({{ cart }})</p>
    </div>
  </div>
</template>
<script setup>
import chaussette_blue from "./assets/socks_blue.jpg"
import chaussette_green from "./assets/socks_green.jpg"
import outOfStock from "./assets/out-of-stock-img.png"
import greenCircle from "./assets/Ellipse.png"
import blueCircle from "./assets/Ellipse 1.png"
import { ref } from "vue"
let handleOutOfStock =ref(true);
let chaussette_hovered=ref(chaussette_blue);
let cart=ref(0)
const handleChangeChaussetteToBlue=()=>{
  chaussette_hovered.value=chaussette_blue
  console.log(1)
}
const handleChangeChaussetteToGreen=()=>{
  chaussette_hovered.value=chaussette_green
  console.log(2)
}
const handleAddToCart=()=>{
  cart.value++
}
</script>