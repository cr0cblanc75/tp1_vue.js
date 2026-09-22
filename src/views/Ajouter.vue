<script setup>
import FormulaireArticle from '../components/FormulaireArticle.vue'

const emit = defineEmits([
    'ajouter-article'
])
</script>

<template>
    <section class="page">

        <div class="page-header">
            <h1>Ajouter un article</h1>

            <p>
                Remplissez le formulaire pour ajouter un nouvel article.
            </p>
        </div>

        <FormulaireArticle @ajouter="emit('ajouter-article', $event)" />

    </section>
</template>