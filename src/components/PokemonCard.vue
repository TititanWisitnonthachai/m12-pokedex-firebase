<script setup>

defineProps({
  pokemon: {
    type: Object,
    required: true,
  }
})

</script>

<template>
  <RouterLink :to="{ name: 'pokemon-details', params: {id: pokemon.id} }" >
    <div class="pokemon-card">
      <h1>{{ pokemon.name }}</h1>
      <img :src="pokemon.imageUrl" alt="Pokemon Image" />

    </div>
  </RouterLink>
</template>

<style scoped>

.pokemon-card {
  background-color: rgba(246, 247, 198, 0.8); 
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.pokemon-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>