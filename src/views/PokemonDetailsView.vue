<script setup>
import { ref, onMounted } from 'vue'
import PokemonService from '@/services/PokemonService.js'

const pokemon = ref(null)
// const id = ref(100001)

const props = defineProps({
    id: { required: true }
})

onMounted(() => {
    //BookService.getBook(id.value)
    PokemonService.getPokedex1(props.id)
    .then((response)=>{
        pokemon.value = response.data
    })
    .catch((error)=>{
        console.log(error)
    })
})
</script>

<template>
    <div v-if="pokemon" class="pokemon-details">
        <h1>{{ pokemon.name }}</h1>
        <img :src="pokemon.imageUrl" alt="Pokemon Image" />
        <h3>Type 1: {{ pokemon.type1 }}</h3>
        <h3>Type 2: {{ pokemon.type2 }}</h3>
        <h3>Japanese Name : {{ pokemon.japaneseName }}</h3>
        <h3>Evolution 2: {{ pokemon.evolution }}</h3>
    </div>
</template>

<style scoped>
.pokemon-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  padding: 20px; 
  box-sizing: border-box; 
  text-align: center; 
}

img {
  max-width: 100%; 
  height: auto; 
  margin-bottom: 10px; 
}

h3 {
  margin: 8px 0;
}
</style>
