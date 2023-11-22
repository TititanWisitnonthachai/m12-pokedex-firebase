<script setup>
import { ref, onMounted } from 'vue'
import { db } from '@/js/firebase.js'
import { collection, getDocs } from 'firebase/firestore'
import PokemonCard from '@/components/PokemonCard.vue'

const pokedex = ref([])

async function getPokemon() {
  const querySnapshot = await getDocs(collection(db,'pokedex'))
    querySnapshot.forEach((doc) => {
      let pokemon = {
        "id": doc.id,
        "name": doc.data().name,
        "title": doc.data().title,
        "type1": doc.data().type1,
        "type2": doc.data().type2,
        "japaneseName": doc.data().japaneseName,
        "evolution": doc.data().evolution,
        "imageUrl": doc.data().imageUrl
      }
      pokedex.value.push(pokemon)
  })
}

onMounted (async() => {
  console.log("Connecting to Firebase")
  await getPokemon()
})

</script>

<template>
  <div class="border">
    <div class="pokemon">
      <PokemonCard v-for="pokemon in pokedex" :key="pokemon.id" :pokemon="pokemon" />
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
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
}
</style>