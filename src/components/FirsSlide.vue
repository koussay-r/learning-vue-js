<template>
    <div class="w-full absolute h-[570px]">
    </div>
    <img :src="bgPic" alt="bgPic" class="w-full absolute h-[570px] object-cover z-[-1] top-0"/>
</template>
<script>
import bgPic from "./../assets/bg9.jpg";
export default{
    data(){
        return {
            bgPic:bgPic
        }
    }
}
</script>