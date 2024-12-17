<script setup>
import { computed } from 'vue';
import data from '@/data.json';

// Definimos las props
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  experienceSlug: {
    type: String,
    required: true,
  },
});

let destination = computed(()=>{
  return data.destinations.find(destination => destination.id === props.id)
})

let experience = computed(()=>{
  return destination.value?.experiences.find(experience => experience.slug === props.experienceSlug)
})

</script>

<template>
<div>
  <h2> {{ experience.name }} </h2>
  <img :src="`/images/${experience.image}`">
  <p> {{ experience.description }} </p>
</div>

</template>

<style scoped>
div{
  margin: 0 15%;
  padding:25px;
  background-color: cadetblue;
}
</style>
