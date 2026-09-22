<template>
    <section class="hero">

        <div class="hero-content">

            <span class="hero-badge">
                Bienvenue
            </span>

            <h1>
                Bienvenue sur MiniShop
            </h1>

            <p>
                Une mini-application Vue.js permettant de
                rechercher, ajouter et gérer des articles.
            </p>

            <div class="hero-actions">

                <RouterLink to="/articles" class="button primary">
                    Voir les articles
                </RouterLink>

                <RouterLink to="/ajouter" class="button secondary">
                    Ajouter un article
                </RouterLink>

            </div>

        </div>

    </section>
</template>