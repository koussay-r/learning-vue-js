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
            AddedShoes:localStorage.getItem("AddedShoes")==null?[]:JSON.parse(localStorage.getItem("AddedShoes")),
            added:localStorage.getItem("AddedShoes")==null?false:(JSON.parse(localStorage.getItem("AddedShoes")).includes(this._id)?true:false),
        }
    },
    computed:{
        addedshoees(){
            return this.AddedShoes=localStorage.getItem("AddedShoes")==null?[]:JSON.parse(localStorage.getItem("AddedShoes"))
        }
    }
    ,
    methods:{
        Add(){
            this.added=!this.added
            if(this.added){
                    this.addedshoees.push(this._id)
                    localStorage.setItem("AddedShoes",JSON.stringify(this.addedshoees))
                this.$emit('custom-event',1)
            }
            else{
                let index = this.addedshoees.indexOf(this._id);
                console.log(index)
                if (index !== -1) {
                    this.addedshoees.splice(index, 1);
                                    }
                if(this.addedshoees.length==0){
                    localStorage.removeItem("AddedShoes")
                }
                else{
                    localStorage.setItem("AddedShoes",JSON.stringify(this.addedshoees))
                }
                this.$emit('custom-event',-1)
            }
        }
    },
    props:{
        _id:String,
        picture:String,
        name:String,
        currentPrice:String,
        RecentPrice:String,
        reviews:String
    }
}
</script>