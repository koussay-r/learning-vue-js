<template>
  <div>
    <p>{{ name }} - {{ lastName }} - {{ age }}</p>
    <p v-if="awakeSleeping">Awake !!</p>
    <p v-else>Asleep !!</p>
  </div>
  <button @click="changeCondition" >Check Condition</button>
</template>
<script>
export default{
  data(){
    return{
      name:"koussay",
      lastName:"roussia",
      age:20,
      awakeSleeping:true
    }
  },
  methods:{
    changeCondition(){
      this.awakeSleeping=!this.awakeSleeping;
    }
  }
}
</script>