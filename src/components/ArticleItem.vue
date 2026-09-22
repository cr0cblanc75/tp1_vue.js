<script setup>
import { RouterLink } from 'vue-router'

defineProps({
    article: {
        type: Object,
        required: true
    }
})

const emit = defineEmits([
    'ajouter-panier',
    'supprimer'
])
</script>

<template>
    <div class="article-card">

        <div class="article-icon">
            🛍️
        </div>

        <div class="article-content">

            <span class="category">
                {{ article.categorie }}
            </span>

            <h3>
                {{ article.titre }}
            </h3>

            <p>
                {{ article.description }}
            </p>

            <strong class="price">
                {{ article.prix }} €
            </strong>

            <div class="article-actions">

                <RouterLink :to="`/article/${article.id}`" class="button secondary">
                    Voir
                </RouterLink>

                <button class="button primary" @click="emit('ajouter-panier', article)">
                    Ajouter au panier
                </button>

                <button class="button danger" @click="emit('supprimer', article.id)">
                    Supprimer
                </button>

            </div>

        </div>
    </div>
</template>