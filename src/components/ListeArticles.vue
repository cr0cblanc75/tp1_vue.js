<script setup>
import { computed, ref, watch } from 'vue'
import ArticleItem from './ArticleItem.vue'

const props = defineProps({
    articles: {
        type: Array,
        required: true
    }
})

const emit = defineEmits([
    'ajouter-panier',
    'supprimer'
])

const recherche = ref('')
const page = ref(1)

const articlesParPage = 4

const articlesFiltres = computed(() => {
    const texte = recherche.value.toLowerCase().trim()

    if (!texte) {
        return props.articles
    }

    return props.articles.filter(article =>
        article.titre.toLowerCase().includes(texte) ||
        article.description.toLowerCase().includes(texte) ||
        article.categorie.toLowerCase().includes(texte)
    )
})

const nombrePages = computed(() => {
    return Math.ceil(
        articlesFiltres.value.length / articlesParPage
    )
})

const articlesAffiches = computed(() => {
    const debut = (page.value - 1) * articlesParPage

    return articlesFiltres.value.slice(
        debut,
        debut + articlesParPage
    )
})

watch(recherche, () => {
    page.value = 1
})

watch(nombrePages, () => {
    if (page.value > nombrePages.value && nombrePages.value > 0) {
        page.value = nombrePages.value
    }
})

const rechercher = (texte) => {
    recherche.value = texte
}

const pageSuivante = () => {
    if (page.value < nombrePages.value) {
        page.value++
    }
}

const pagePrecedente = () => {
    if (page.value > 1) {
        page.value--
    }
}
</script>

<template>
    <div>

        <div class="search-container">
            <input :value="recherche" @input="rechercher($event.target.value)" type="text" placeholder="Rechercher un article..." class="search-input" />
        </div>

        <div v-if="articlesAffiches.length === 0" class="empty">
            Aucun article trouvé.
        </div>

        <div v-else class="articles-grid">

            <ArticleItem v-for="article in articlesAffiches" :key="article.id" :article="article" @ajouter-panier="emit('ajouter-panier', $event)" @supprimer="emit('supprimer', $event)" />

        </div>

        <div v-if="nombrePages > 1" class="pagination">

            <button class="button secondary" :disabled="page === 1" @click="pagePrecedente">
                ← Précédent
            </button>

            <span>
                Page {{ page }} / {{ nombrePages }}
            </span>

            <button class="button secondary" :disabled="page === nombrePages" @click="pageSuivante">
                Suivant →
            </button>

        </div>

    </div>
</template>