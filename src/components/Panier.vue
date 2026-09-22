<script setup>
defineProps({
    panier: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div>

        <div v-if="panier.length === 0" class="empty">
            Le panier est vide.
        </div>

        <div v-else class="cart-list">

            <div v-for="article in panier" :key="article.id" class="cart-item">

                <div>
                    <h3>{{ article.titre }}</h3>

                    <span class="category">
                        {{ article.categorie }}
                    </span>
                </div>

                <strong>
                    {{ article.prix }} €
                </strong>

            </div>

        </div>

    </div>
</template>