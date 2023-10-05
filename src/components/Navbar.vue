<script setup>
const handleClick=()=>{
    alert("you did it")
}
</script>
<template>
    <div id="navbar" >
        <p>first vue project</p>
        <div>
            <button @click="handleClick" >click me</button>
        </div>
    </div>
</template>
<style>
#navbar{
    display:flex;
    justify-content:space-between;
    
}
</style>