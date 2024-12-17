<script setup>
import data from '@/data.json'
import { computed } from 'vue'

let props = defineProps({
  id:Number
})

let destination = computed(()=>{
  return data.destinations.find(destination => destination.id === props.id)
})
</script>

<template>
  <p>{{ props.id }}</p>
  <p> {{ destination.id }} </p>
</template>

<style scoped>

</style>
