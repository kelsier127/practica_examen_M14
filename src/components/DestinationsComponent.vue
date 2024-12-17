<script setup>
import data from '@/data.json'
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <RouterLink
    :to="{name:'destination', params:{id:destination.id}}"
    v-for="destination in data.destinations"
    :key="destination.id"
    >
      <h3>{{ destination.name }}</h3>
      <img :src="`/images/${destination.image}`" alt="">
    </RouterLink>
  </div>

</template>

<style scoped>
div{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin:0 20%
}

a{
  background-color: rgb(140, 201, 255);
  padding: 15px;
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img{
  border-radius: 10px;
}
</style>
