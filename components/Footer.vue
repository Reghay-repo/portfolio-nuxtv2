<!-- components/layout/Footer.vue -->
<template>
  <footer class="border-t border-border py-8">
    <div class="container mx-auto wrapper flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">

      <!-- Copyright -->
      <div class="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
        © {{ new Date().getFullYear() }} OussamaRe. All rights reserved.
      </div>

      <!-- Social Icons -->
      <div class="flex space-x-6">
        <a
          aria-label="GitHub"
          href="https://github.com/reghay-repo"
          class="group text-gray-500 hover:text-primary transition-colors"
        >
          <Github class="h-6 w-6 group-hover:scale-110 transition-transform" />
        </a>
        <a
          aria-label="Twitter"
          href="https://twitter.com/OReghay"
          class="group text-gray-500 hover:text-primary transition-colors"
        >
          <Twitter class="h-6 w-6 group-hover:scale-110 transition-transform" />
        </a>
        <a
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/oussama-reghay/"
          class="group text-gray-500 hover:text-primary transition-colors"
        >
          <Linkedin class="h-6 w-6 group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { Github, Twitter, Linkedin } from 'lucide-vue-next'
</script>

<style scoped lang="scss">
/* Using your wrapper utility from Tailwind */
.wrapper {
  @apply max-w-screen-xl mx-auto;
}

/* Optional: subtle top border color adjustment for dark mode */
footer {
  border-top-color: rgba(0, 0, 0, 0.05);
}
@media (prefers-color-scheme: dark) {
  footer {
    border-top-color: rgba(255, 255, 255, 0.1);
  }
}
</style>
