<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const props = defineProps({
    articles: {
        type: Array,
        required: true
    }
})

const emit = defineEmits([
    'ajouter-panier'
])

const route = useRoute()

const article = computed(() => {
    return props.articles.find(
        article => article.id === Number(route.params.id)
    )
})
</script>

<template>
    <section class="page">

        <div v-if="!article" class="empty">
            <h2>Article introuvable</h2>

            <RouterLink to="/articles" class="button primary">
                Retour aux articles
            </RouterLink>
        </div>

        <div v-else class="detail-card">

            <div class="detail-icon">
                🛍️
            </div>

            <div class="detail-content">

                <span class="category">
                    {{ article.categorie }}
                </span>

                <h1>
                    {{ article.titre }}
                </h1>

                <p class="detail-description">
                    {{ article.description }}
                </p>

                <div class="detail-price">
                    {{ article.prix }} €
                </div>

                <button class="button primary" @click="emit('ajouter-panier', article)">
                    Ajouter au panier
                </button>

                <RouterLink to="/articles" class="button secondary">
                    Retour aux articles
                </RouterLink>

            </div>

        </div>

    </section>
</template>