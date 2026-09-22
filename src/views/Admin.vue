<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
    articles: {
        type: Array,
        required: true
    }
})

const emit = defineEmits([
    'supprimer-article'
])

const supprimer = (id) => {

    if (
        confirm(
            'Êtes-vous sûr de vouloir supprimer cet article ?'
        )
    ) {
        emit('supprimer-article', id)
    }
}
</script>

<template>
    <section class="page">

        <div class="page-header admin-header">

            <div>
                <span class="hero-badge">
                    Administration
                </span>

                <h1>Gestion des articles</h1>

                <p>
                    {{ articles.length }} article(s) dans le catalogue.
                </p>
            </div>

            <RouterLink to="/ajouter" class="button primary">
                + Ajouter
            </RouterLink>

        </div>

        <div v-if="articles.length === 0" class="empty">
            Aucun article.
        </div>

        <div v-else class="admin-table">

            <div v-for="article in articles" :key="article.id" class="admin-row">

                <div class="admin-info">

                    <strong>
                        {{ article.titre }}
                    </strong>

                    <span>
                        {{ article.categorie }}
                    </span>

                </div>

                <strong>
                    {{ article.prix }} €
                </strong>

                <button class="button danger" @click="supprimer(article.id)">
                    Supprimer
                </button>

            </div>

        </div>

    </section>
</template>