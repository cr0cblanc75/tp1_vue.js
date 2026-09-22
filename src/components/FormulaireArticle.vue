<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['ajouter'])

const message = ref('')

const formulaire = reactive({
    titre: '',
    description: '',
    prix: '',
    categorie: ''
})

const ajouterArticle = () => {

    if (
        !formulaire.titre ||
        !formulaire.description ||
        !formulaire.prix ||
        !formulaire.categorie
    ) {
        message.value = 'Veuillez remplir tous les champs.'
        return
    }

    emit('ajouter', {
        titre: formulaire.titre,
        description: formulaire.description,
        prix: formulaire.prix,
        categorie: formulaire.categorie
    })

    message.value = 'Article ajouté avec succès !'

    formulaire.titre = ''
    formulaire.description = ''
    formulaire.prix = ''
    formulaire.categorie = ''
}
</script>

<template>
    <form class="form" @submit.prevent="ajouterArticle">

        <h2>Ajouter un article</h2>

        <div class="form-group">
            <label>Titre</label>

            <input v-model="formulaire.titre" type="text" placeholder="Nom de l'article" />
        </div>

        <div class="form-group">
            <label>Description</label>

            <textarea v-model="formulaire.description" placeholder="Description de l'article"></textarea>
        </div>

        <div class="form-group">
            <label>Prix (€)</label>

            <input v-model="formulaire.prix" type="number" min="0" step="0.01" placeholder="Prix" />
        </div>

        <div class="form-group">
            <label>Catégorie</label>

            <select v-model="formulaire.categorie">
                <option value="">
                    Choisir une catégorie
                </option>

                <option value="Informatique">
                    Informatique
                </option>

                <option value="Audio">
                    Audio
                </option>

                <option value="Maison">
                    Maison
                </option>

                <option value="Autre">
                    Autre
                </option>
            </select>
        </div>

        <button type="submit" class="button primary full">
            Ajouter l'article
        </button>

        <p v-if="message" class="success-message">
            {{ message }}
        </p>

    </form>
</template>