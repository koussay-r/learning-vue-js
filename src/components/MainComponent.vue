<template>
    <div class="">
        <div class="p-5">
            <p class="font-bold text-[23px]">Recommended</p>
            <div class="flex mt-4 gap-2">
                <p @click="ChooseCompanyNAme('')" class="border-2 cursor-pointer hover:bg-gray-100 rounded-md p-3 " >All Products</p>
                <p @click="ChooseCompanyNAme('Nike')"  class="border-2 cursor-pointer hover:bg-gray-100 rounded-md p-3 " >Nike</p>
                <p @click="ChooseCompanyNAme('Adidas')"  class="border-2 cursor-pointer hover:bg-gray-100 rounded-md p-3 " >Adidas</p>
                <p @click="ChooseCompanyNAme('Puma')"  class="border-2 cursor-pointer hover:bg-gray-100 rounded-md p-3 " >Puma</p>
                <p @click="ChooseCompanyNAme('Vans')"  class="border-2 cursor-pointer hover:bg-gray-100 rounded-md p-3 " >Vans</p>
            </div>
        </div>
        <div class="grid border-l-transparent h-[520px] xl:grid-cols-4 sm:grid-cols-2 pb-2 grid-cols-1 mx-auto md:grid-cols-3  2xl:grid-cols-5 p-3 gap-2 w-full overflow-auto border">
                <ShoesCard v-for="item in ShoesData" :picture="item.img" :name="item.title" :currentPrice="item.newPrice" :RecentPrice="item.prevPrice" :reviews="item.reviews" ></ShoesCard>
        </div>
    </div>
</template>
<script>
import data from "./../data/data.js"
import ShoesCard from "./ShoesCard.vue"
export default{
    inject: ['appContext'],
    data(){
        return{
            ShoesData:data,
        }
    },
    
    methods:{
        ChooseCompanyNAme(e){
                if(e==''){
                    this.ShoesData=data
                }
                else{
                    this.ShoesData = data.filter(item => item.company.includes(e)||item.title.includes(e)||item.color==(e));
                }
            },
            ChooseBestPriceAndBrand(e){

            }
        
    },
    watch: {
    'appContext.name': function(newVal, oldVal) {
        console.log(newVal)
      this.ChooseCompanyNAme(newVal);
    },
    'appContext': function(newVal, oldVal) {
        console.log(newVal)
    }
  },
    components:{
        ShoesCard:ShoesCard
    },

}
</script>