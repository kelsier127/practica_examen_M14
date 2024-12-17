<script setup>
//import { computed, } from 'vue';
//import data from '@/data.json'

let props = defineProps({
  id:Number,
  name:String,
  image:String,
  description:String
})

/*let destination = computed(()=>{
  return data.destinations.find(destination => destination.id === props.destId)
})*/

</script>

<template>
  <p>{{ props.name }}</p>
  <p>{{ props.description }}</p>
  <img :src="`/images/${props.image}`" alt="">
</template>

<style scoped>
</style>
