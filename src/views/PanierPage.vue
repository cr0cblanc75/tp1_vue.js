<script setup>
import Panier from '../components/Panier.vue'

defineProps({
    panier: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <section class="page">

        <div class="page-header">
            <h1>Mon panier</h1>

            <p>
                Voici les articles que vous avez sélectionnés.
            </p>
        </div>

        <Panier :panier="panier" />

    </section>
</template>