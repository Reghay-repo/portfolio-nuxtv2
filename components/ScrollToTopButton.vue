<!-- components/ScrollToTopButton.vue -->
<template>
  <Transition name="fade">
    <!--
      The root element is now a single, clickable button.
      - `relative` is crucial as it creates a stacking context for the children.
      - `flex`, `items-center`, `justify-center` will center the arrow icon.
    -->
    <button
      v-if="isScrolled"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-foreground/10 shadow-lg backdrop-blur-sm transition-colors hover:bg-foreground/20"
      aria-label="Scroll to top"
    >
      <!--
        1. The SVG for the progress ring.
        - `absolute inset-0` makes it fill the parent button completely.
        - It's placed first in the DOM, so it will be visually behind the icon by default.
      -->
      <svg
        class="absolute inset-0 h-full w-full"
        width="44"
        height="44"
        viewBox="0 0 44 44"
      >
        <!-- Background track -->
        <circle
          cx="22"
          cy="22"
          r="20"
          fill="none"
          stroke-width="3"
          class="stroke-border/40"
        />
        <!-- Progress ring -->
        <circle
          cx="22"
          cy="22"
          r="20"
          fill="none"
          stroke-width="3"
          class="stroke-primary"
          stroke-linecap="round"
          :style="progressCircleStyle"
          transform="rotate(-90 22 22)"
        />
      </svg>

      <!--
        2. The Arrow Icon.
        - It is automatically centered by the parent's flexbox properties.
        - Since it comes after the SVG in the DOM, it renders on top.
      -->
      <Icon name="lucide:arrow-up" class="h-6 w-6 text-foreground" />

    </button>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

// --- This entire script block remains unchanged from the previous version ---

const isScrolled = ref(false);
const scrollProgress = ref(0);

const circleRadius = 20;
const circleCircumference = 2 * Math.PI * circleRadius;

const progressCircleStyle = computed(() => ({
  strokeDasharray: circleCircumference,
  strokeDashoffset: circleCircumference * (1 - scrollProgress.value / 100),
  transition: 'stroke-dashoffset 0.1s linear',
}));

const handleScroll = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  scrollProgress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  isScrolled.value = scrollTop > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* This animation also remains the same and now applies to the unified button */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>