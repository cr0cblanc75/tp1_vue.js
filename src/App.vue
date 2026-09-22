<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const articles = ref([
  {
    id: 1,
    titre: 'Ordinateur portable',
    description: 'Un ordinateur portable performant pour travailler et étudier.',
    prix: 799,
    categorie: 'Informatique'
  },
  {
    id: 2,
    titre: 'Casque audio',
    description: 'Un casque audio sans fil avec réduction de bruit.',
    prix: 129,
    categorie: 'Audio'
  },
  {
    id: 3,
    titre: 'Clavier mécanique',
    description: 'Clavier mécanique RGB idéal pour le gaming.',
    prix: 89,
    categorie: 'Informatique'
  },
  {
    id: 4,
    titre: 'Souris sans fil',
    description: 'Souris ergonomique sans fil.',
    prix: 45,
    categorie: 'Informatique'
  },
  {
    id: 5,
    titre: 'Écran 27 pouces',
    description: 'Écran 27 pouces Full HD.',
    prix: 249,
    categorie: 'Informatique'
  },
  {
    id: 6,
    titre: 'Enceinte Bluetooth',
    description: 'Petite enceinte Bluetooth portable.',
    prix: 59,
    categorie: 'Audio'
  },
  {
    id: 7,
    titre: 'Webcam HD',
    description: 'Webcam HD pour les visioconférences.',
    prix: 69,
    categorie: 'Informatique'
  },
  {
    id: 8,
    titre: 'Microphone USB',
    description: 'Microphone USB pour streaming et podcasts.',
    prix: 99,
    categorie: 'Audio'
  }
])

const panier = ref([])

const ajouterArticle = (article) => {
  panier.value.push(article)
}

const supprimerArticle = (id) => {
  articles.value = articles.value.filter(article => article.id !== id)

  // On retire aussi l'article du panier
  panier.value = panier.value.filter(article => article.id !== id)
}

const ajouterNouvelArticle = (article) => {
  const nouvelArticle = {
    ...article,
    id: Date.now(),
    prix: Number(article.prix)
  }

  articles.value.push(nouvelArticle)
}

const estConnecte = ref(localStorage.getItem('connected') === 'true')

const connecter = () => {
  localStorage.setItem('connected', 'true')
  estConnecte.value = true
}

const deconnecter = () => {
  localStorage.removeItem('connected')
  estConnecte.value = false
}
</script>

<template>
  <div class="app">

    <header class="header">
      <div class="logo">
        <RouterLink to="/">
          MiniShop
        </RouterLink>
      </div>

      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/articles">Articles</RouterLink>
        <RouterLink to="/ajouter">Ajouter</RouterLink>
        <RouterLink to="/panier">
          Panier ({{ panier.length }})
        </RouterLink>
        <RouterLink to="/admin">Admin</RouterLink>

        <RouterLink v-if="!estConnecte" to="/login">
          Connexion
        </RouterLink>

        <button v-else class="logout-button" @click="deconnecter">
          Déconnexion
        </button>
      </nav>
    </header>

    <main class="main">
      <RouterView :articles="articles" :panier="panier" @ajouter-panier="ajouterArticle" @supprimer-article="supprimerArticle" @ajouter-article="ajouterNouvelArticle" @connexion="connecter" />
    </main>

    <footer>
      <p>MiniShop - TP Vue.js - LALLAIN Eugène</p>
    </footer>

  </div>
</template>