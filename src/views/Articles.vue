<script setup>
import ListeArticles from '../components/ListeArticles.vue'

defineProps({
    articles: {
        type: Array,
        required: true
    }
})

const emit = defineEmits([
    'ajouter-panier',
    'supprimer-article'
])
</script>

<template>
    <section class="page">

        <div class="page-header">
            <div>
                <span class="hero-badge">
                    Catalogue
                </span>

                <h1>Nos articles</h1>

                <p>
                    Recherchez et consultez tous nos articles.
                </p>
            </div>
        </div>

        <ListeArticles :articles="articles" @ajouter-panier="emit('ajouter-panier', $event)" @supprimer="emit('supprimer-article', $event)" />

    </section>
</template>