<!-- components/sections/Hero.vue or similar -->
<template>
  <!--
    Use a semantic <section> tag for page sections.
    Consistent vertical padding is applied for spacing.
  -->
  <section class="p-6 sm:py-32">
    <!--
      The standard Tailwind `container` class handles max-width and centering with appropriate padding.
      This replaces your custom .wrapper and px-4.
    -->
    <div class="container text-center">

      <!--
        A single, powerful H1 for the main page heading.
        `text-balance` is a new CSS feature that prevents single "orphan" words on a new line.
        Font sizes are responsive.
      -->
      <h1 class="text-balance text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
        Hey, I'm Oussama Reghay
      </h1>

      <!--
        The main value proposition, styled to be the visual centerpiece.
        Using the `text-primary` color makes it pop.
      -->
      <h2 class="mt-4 text-balance text-3xl font-semibold tracking-tight text-primary sm:text-4xl md:text-5xl">
        A Software Engineer
      </h2>

      <!--
        The descriptive paragraph.
        - `max-w-2xl` makes the text easier to read by limiting line length.
        - `mx-auto` centers the narrower paragraph.
        - `text-muted-foreground` gives it the correct secondary color from your theme.
      -->
      <p class="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
        I'm an experienced developer from Morocco specializing in Node.js, Vue.js, and Nest.js, with a passion for building and delivering high-quality products.
      </p>

      <!--
        A dedicated area for the tech stack, giving it context.
        Using a subtle "sub-heading" to introduce the component.
      -->
      <div class="mt-12">
        <p class="mb-4 text-sm font-medium text-muted-foreground">TECH I USE</p>
        <TechStack />
      </div>

    </div>
  </section>
</template>

<script lang="ts" setup>
import TechStack from '~/components/TechStack.vue'; // Adjust path as needed
</script>

<!-- No <style> block needed! -->