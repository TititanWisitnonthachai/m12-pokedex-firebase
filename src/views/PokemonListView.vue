<script setup>
import { ref, onMounted } from 'vue'
import PokemonCard from '@/components/PokemonCard.vue'
// import axios from 'axios'  // Don't need this anymore, will use via the service
import PokemonService from '@/services/PokemonService.js'

const poke = ref(null)

onMounted(() => {
  PokemonService.getPokedex()
  .then((response)=> {
    poke.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
})
</script>

<template>
  <div class="border">
    <div class="pokemon">
      <PokemonCard v-for="pokemon in poke" :key="pokemon.id" :pokemon="pokemon" />
    </div>
  </div>
  
</template>

<style>
.border{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.pokemon {
  column-count: 3;
  display:block;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>


