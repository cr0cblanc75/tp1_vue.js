<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const emit = defineEmits([
    'connexion'
])

const router = useRouter()

const email = ref('')
const password = ref('')
const erreur = ref('')

const connexion = () => {

    if (!email.value || !password.value) {
        erreur.value = 'Veuillez remplir tous les champs.'
        return
    }

    emit('connexion')

    router.push('/admin')
}
</script>

<template>
    <section class="page login-page">

        <form class="form login-form" @submit.prevent="connexion">

            <h1>Connexion</h1>

            <p>
                Connectez-vous pour accéder à l'administration.
            </p>

            <div class="form-group">
                <label>Email</label>

                <input v-model="email" type="email" placeholder="exemple@mail.com" />
            </div>

            <div class="form-group">
                <label>Mot de passe</label>

                <input v-model="password" type="password" placeholder="Mot de passe" />
            </div>

            <p v-if="erreur" class="error-message">
                {{ erreur }}
            </p>

            <button type="submit" class="button primary full">
                Se connecter
            </button>

        </form>

    </section>
</template>