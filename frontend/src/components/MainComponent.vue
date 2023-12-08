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
        <div  v-if="ShoesData.length==0">
            <div role="status">
<svg aria-hidden="true" class=" mt-[15%] block mx-auto w-16 h-10text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>
<span class="sr-only">Loading...</span>
</div>
        </div>    
        <div v-else class="grid border-l-transparent h-[520px] xl:grid-cols-4 sm:grid-cols-2 pb-2 grid-cols-1 mx-auto md:grid-cols-3  2xl:grid-cols-5 p-3 gap-2 w-full overflow-auto border">
            <ShoesCard  v-for="item in ShoesData" :picture="item.img" :name="item.title" :currentPrice="item.newPrice" :RecentPrice="item.prevPrice" :reviews="item.reviews" ></ShoesCard>
        </div>
    </div>
</template>
<script>
import ShoesCard from "./ShoesCard.vue"
import axios from "axios"
export default{
    inject: ['appContext'],
    data(){
        return{
            ShoesData:[],
            wholeData:[],
            brand:"",
            minPrice:0,
            maxPrice:0,
        }
    },
   async mounted(){
    try {
        const data = await axios.get("http://localhost:9000")
        this.ShoesData=data.data
        this.wholeData=data.data
    } catch (error) {
        console.log(error)
    }
    }
    ,
    methods:{
        ChooseCompanyNAme(e){
                if(e==''){
                    this.ShoesData=this.wholeData
                }
                else{
                    this.ShoesData = this.wholeData.filter(item => item.company.includes(e)||item.title.includes(e)||item.color==(e));
                }
            },
            ChooseBestPriceAndBrand(){
                if(this.brand=="" && this.maxPrice==0){
                    this.ShoesData=this.wholeData
                }
                else{
                    if(this.brand==""){
                        this.ShoesData=[]
                        let i=0;
                        for (let index = 0; index < this.wholeData.length; index++) {
                            if(this.minPrice<=this.wholeData[index].newPrice&&this.wholeData[index].newPrice<=this.maxPrice){
                                console.log(this.minPrice,this.maxPrice,this.wholeData[index].newPrice)
                                this.ShoesData[i]=this.wholeData[index]
                                i++
                            }
                        }
                    
                    }
                    else{
                        this.ShoesData=[]
                        let i=0;
                        for (let index = 0; index < this.wholeData.length; index++) {
                            if(this.minPrice<=this.wholeData[index].newPrice&&this.wholeData[index].newPrice<=this.maxPrice&&this.wholeData[index].category==this.brand){
                                console.log(this.minPrice,this.maxPrice,this.wholeData[index].newPrice)
                                this.ShoesData[i]=this.wholeData[index]
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