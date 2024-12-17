<script setup>
import data from '@/data.json'
import { computed, } from 'vue';
import DestinationDescription from '../components/DestinationDescription.vue'
import { RouterLink, RouterView } from 'vue-router'


let props = defineProps({
  id: {
    type: Number,
    required: true,
  },
})

let destination = computed(()=>{
  return data.destinations.find(destination => destination.id === props.id)
})

</script>

<template>
<DestinationDescription :name="`${destination.name}`" :image="`${destination.image}`" :description="`${destination.description}`"/>


<h2>Experiences on {{ destination.name }} </h2>
<div class="experiencesContainer">
  <RouterLink
    v-for="experience in destination.experiences"
    :key="experience.slug"
    :to="{name:'experience', params:{experienceSlug:experience.slug}}"
  >
    <h3> {{ experience.name }} </h3>
    <img :src="`/images/${experience.image}`" alt="">
  </RouterLink>
</div>

<RouterView/>
</template>

<style scoped>
.experiencesContainer{
  display: flex;
  gap: 10px;
}
</style>
