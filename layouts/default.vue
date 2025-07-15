<!-- layouts/default.vue -->
<template>
  <div class=" bg-background text-foreground flex flex-col min-h-screen">
    <header class="mx-auto container">
      <Navbar />
    </header>

    <main class="flex-1">
      <NuxtPage />
    </main>

    <footer>
      <Footer />
    </footer>
    <ScrollToTopButton/>
  </div>
</template>

<script setup lang="ts">
</script>
