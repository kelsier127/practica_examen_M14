<script setup>
import { RouterLink } from 'vue-router'
import data from '@/data.json'

</script>

<template>
  <nav id="nav">
    <RouterLink to="/">VUE TRAVEL APP</RouterLink>
    <RouterLink
    v-for="destination in data.destinations"
    :key="destination.id"
    :to="{name:'destination', params:{id:destination.id}}"
    > {{ destination.name }} </RouterLink>
  </nav>
</template>

<style scoped>

</style>
