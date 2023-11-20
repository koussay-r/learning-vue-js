<template>
    <div class="w-full">
        <div class="p-5">
            <p class="font-bold text-[23px]">Recommended</p>
            <div class="flex mt-4 gap-2">
                <p class="border-2 cursor-pointer hover:bg-gray-100 rounded-md p-3 " >All Products</p>
                <p @click="ChooseCompanyNAme('Nike')"  class="border-2 cursor-pointer hover:bg-gray-100 rounded-md p-3 " >Nike</p>
                <p @click="ChooseCompanyNAme('Adidas')"  class="border-2 cursor-pointer hover:bg-gray-100 rounded-md p-3 " >Adidas</p>
                <p @click="ChooseCompanyNAme('Puma')"  class="border-2 cursor-pointer hover:bg-gray-100 rounded-md p-3 " >Puma</p>
                <p @click="ChooseCompanyNAme('Vans')"  class="border-2 cursor-pointer hover:bg-gray-100 rounded-md p-3 " >Vans</p>
            </div>
        </div>
        <div>

        </div>
    </div>
</template>
<script>
import data from "./../data/data.js"
export default{
    data(){
        return{
            Search:"",
            ShoesData:data,
        }
    },
    methods:{
        ChooseCompanyNAme(e){
            this.Search=e;
            console.log(this.Search)
        }
    }
}
</script>