<template>
  <div>
    <!-- Accessibility feature -->
    <NuxtRouteAnnouncer />
    <!-- Exemple de layout global -->
    <header>
      <!-- todo: créer le composant navbar et l'implémenter ici -->
      <!-- <nav>
        <NuxtLink to="/">Accueil</NuxtLink>
        <NuxtLink to="/about">À propos</NuxtLink>
      </nav> -->
      <Navbar />
    </header>
    <main>
      <NuxtPage />
    </main>

    <footer>
      <p>&copy; 2025 — L'envolée numérique</p>
    </footer>
  </div>
</template>
