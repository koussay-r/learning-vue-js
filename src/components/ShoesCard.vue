<template>
    <div class="border-2 w-[230px] block mx-auto rounded-sm  h-[220px] p-4">
        <img :src="picture" class="w-[140px] block mx-auto h-[85px] "/>
        <div>
            <p class="font-bold mt-2 text-[15px]">{{ name }}</p>
            <p class="mt-2">{{ reviews }}</p>
            <div class="flex mt-3 justify-between">
                <div class="flex gap-2">
                    <p class="line-through font-semibold">{{ RecentPrice }}</p>
                    <p class="font-semibold">${{ currentPrice }}</p>
                </div>
                <img @click="Add" class="w-[20px] mt-1 cursor-pointer h-[20px] " :src="added?check:add"/>
            </div>
        </div>
    </div>
</template>
<script>
import check from "./../assets/icons8-check-100.png"
import add from "./../assets/icons8-add-100.png"
export default{
    data(){
        return{
            check:check,
            add:add,
            added:false
        }
    },
    methods:{
        Add(){
            this.added=!this.added
        }
    },
    props:{
        picture:String,
        name:String,
        currentPrice:String,
        RecentPrice:String,
        reviews:String
    }
}
</script>