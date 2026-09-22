<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['recherche'])

const recherche = ref('')

watch(recherche, (nouvelleValeur) => {
    emit('recherche', nouvelleValeur)
})
</script>

<template>
    <div class="search-container">
        <input v-model="recherche" type="text" placeholder="Rechercher un article..." class="search-input" />
    </div>
</template>