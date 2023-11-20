<template>
    <div>
        <div class="px-7 py-4 w-[20%] border-2 border-b-transparent">
            <img :src="cart" class="w-[30px] block mx-auto h-[30px]"/>
        </div>
        <div class="w-[20%] h-[100vh] border-2">
            <p @click="handle" class="text-center  pt-3 text-[22px]">Category</p>
            <ul class="flex w-[36%] mx-auto pt-3 flex-col-reverse">
                <li class=""> <input class="mr-3" name="option" type="radio"  >Heels</li>
                <li class=""> <input class="mr-3" name="option" type="radio"  >Sandals</li>
                <li class=""> <input class="mr-3" name="option" type="radio"  >Flats</li>
                <li class=""> <input class="mr-3" name="option" type="radio"  >Sneakers</li>
                <li class=""> <input class="mr-3" name="option" type="radio"  > All</li>
            </ul>
            <p class="text-center  pt-3 text-[22px]">Price</p>
            <ul class="flex w-[36%] mx-auto pt-3 flex-col-reverse">
                <li class=""> <input class="mr-3" name="option2" type="radio"  >over $150</li>
                <li class=""> <input class="mr-3" name="option2" type="radio"  >$100 - $150</li>
                <li class=""> <input class="mr-3" name="option2" type="radio"  >$50 - $100</li>
                <li class=""> <input class="mr-3" name="option2" type="radio"  >$0 - $50</li>
                <li class=""> <input class="mr-3" name="option2" type="radio"  > All</li>
            </ul>
            <p class="text-center  pt-3 text-[22px]">Colors</p>
            <ul class="flex w-[36%] mx-auto pt-3 gap-2 flex-col-reverse">
                <li class="flex"> <img :src="white" class="mr-3 w-[22px] h-[22px] "/>White</li>
                <li class="flex"> <img :src="green" class="mr-3 w-[22px] h-[22px] "/>Green</li>
                <li class="flex"> <img :src="red" class="mr-3 w-[22px] h-[22px] "/>Red</li>
                <li class="flex"> <img :src="blue" class="mr-3 w-[22px] h-[22px] "/>Blue</li>
                <li class="flex"> <img :src="black" class="mr-3 w-[22px] h-[22px] "/>Black</li>
                <li class="flex"> <img :src="AllColors" class="mr-3 w-[22px] h-[22px] "/> All</li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import cart from "./../assets/icons8-cart.gif"
import black from './../assets/Ellipse 3.png'
import blue from "./../assets/Ellipse 4.png"
import red from "./../assets/Ellipse 5.png"
import white from "./../assets/Ellipse 2.png"
import green from "./../assets/Ellipse 7.png"
import AllColors from "./../assets/Ellipse 1.png"
 import {ref} from "vue"
const first = ref("first")
 const handle=()=>{
    console.log(first);
    first._rawValue="seconde"
    alert(first._rawValue);
 }
</script>