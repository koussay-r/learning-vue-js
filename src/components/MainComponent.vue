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
            brand:"",
            minPrice:0,
            maxPrice:0,
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
            ChooseBestPriceAndBrand(){
                if(this.brand=="" && this.maxPrice==0){
                    this.ShoesData=data
                }
                else{
                    if(this.brand==""){
                        this.ShoesData=[]
                        let i=0;
                        for (let index = 0; index < data.length; index++) {
                            if(this.minPrice<=data[index].newPrice&&data[index].newPrice<=this.maxPrice){
                                console.log(this.minPrice,this.maxPrice,data[index].newPrice)
                                this.ShoesData[i]=data[index]
                                i++
                            }
                        }
                    
                    }
                    else{
                        this.ShoesData=[]
                        let i=0;
                        for (let index = 0; index < data.length; index++) {
                            if(this.minPrice<=data[index].newPrice&&data[index].newPrice<=this.maxPrice&&data[index].category==this.brand){
                                console.log(this.minPrice,this.maxPrice,data[index].newPrice)
                                this.ShoesData[i]=data[index]
                                i++
                            }
                        }
                    }
                }
            }
        
    },
    watch: {
    'appContext.name': function(newVal, oldVal) {
        console.log(newVal)
      this.ChooseCompanyNAme(newVal);
    },
    'appContext.brand': function(newVal, oldVal) {
        this.brand=newVal;
    },
    'appContext.minPrice': function(newVal,oldVal){
        this.minPrice=newVal
    },
    'appContext.maxPrice': function(newVal,oldVal){
        this.maxPrice=newVal
        this.ChooseBestPriceAndBrand()
    },
  },
    components:{
        ShoesCard:ShoesCard
    },

}
</script>