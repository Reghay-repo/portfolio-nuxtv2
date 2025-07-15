<!-- pages/about.vue -->
<template>
  <!--
    We use container max-w-3xl for optimal readability.
    This is much better than px-72, which is too narrow on large screens.
  -->
  <div class="container max-w-3xl mx-auto py-16 px-4">

    <!-- Main Title -->
    <header class="mb-12">
      <h1 class="text-4xl font-bold tracking-tight text-foreground">
        About Me
      </h1>
    </header>

    <!-- Section 1: Introduction & Background -->
    <section class="space-y-6 text-lg text-muted-foreground">
      <p>
        Hi there! 👋🏼 I’m Oussama, a Software Engineer based in Tangier, Morocco 🇲🇦, and a graduate of FSTT.
      </p>
      <p>
        I specialize in helping founders add value to society by crafting high-quality software. My expertise lies in modern technologies such as
        <span class="font-medium text-foreground">Vue.js</span>,
        <span class="font-medium text-foreground">Nuxt</span>, and
        <span class="font-medium text-foreground">Nest.js</span>.
      </p>
      <p>
        Currently, I'm expanding my skillset into mobile development with <span class="font-medium text-foreground">Flutter</span>, driven by a strong passion for building cross-platform mobile apps.
      </p>
      <p>
        When I'm not coding, I'm preparing to launch a blog to share my developer journey. I also enjoy reading 📚 and occasionally diving into video games.
      </p>
    </section>

    <Separator class="my-12" />

    <!-- Section 2: What I Do Well (Skills) -->
    <section>
      <h2 class="text-2xl font-semibold mb-6">What I Do Well</h2>

      <div class="space-y-6">
        <!-- Skill Group 1: Code/Languages -->
        <div>
          <h3 class="text-lg font-medium mb-3 text-muted-foreground">Code & Frameworks</h3>
          <div class="flex flex-wrap gap-3">
            <Badge variant="secondary">JavaScript</Badge>
            <Badge variant="secondary">Vue.js</Badge>
            <Badge variant="secondary">Nuxt.js</Badge>
            <Badge variant="secondary">Nest.js</Badge>
            <Badge variant="secondary">Laravel</Badge>
            <Badge variant="secondary">Flutter</Badge>
          </div>
        </div>

        <!-- Skill Group 2: Data -->
        <div>
          <h3 class="text-lg font-medium mb-3 text-muted-foreground">Data</h3>
          <div class="flex flex-wrap gap-3">
            <Badge variant="secondary">PostgreSQL</Badge>
            <Badge variant="secondary">MySQL</Badge>
          </div>
        </div>

        <!-- Skill Group 3: Environment & Tools -->
         <div>
          <h3 class="text-lg font-medium mb-3 text-muted-foreground">Environment</h3>
          <div class="flex flex-wrap gap-3">
            <Badge variant="secondary">Git</Badge>
            <Badge variant="secondary">Docker</Badge>
            <Badge variant="secondary">GitHub</Badge>
            <Badge variant="secondary">Agile (Scrum)</Badge>
          </div>
        </div>
      </div>
    </section>

    <Separator class="my-12" />

    <!-- Section 3: Get In Touch -->
    <section>
      <h2 class="text-2xl font-semibold mb-6">Get In Touch</h2>
      <p class="text-lg text-muted-foreground mb-4">
        Feel free to reach out if you want to discuss a project or just say hello.
      </p>

      <div class="flex flex-col space-y-2">
        <!-- Using Button variant="link" and Lucide icons for clean, professional links -->
        <Button as-child variant="link" class="justify-start p-0 h-auto text-lg">
          <a href="mailto:oussama.reghay.dev@gmail.com">
            <Icon name="lucide:mail" class="mr-3 h-5 w-5 text-primary" />
            oussama.reghay.dev@gmail.com
          </a>
        </Button>

        <Button as-child variant="link" class="justify-start p-0 h-auto text-lg">
          <a href="https://www.linkedin.com/in/oussama-reghay" target="_blank" rel="noopener noreferrer">
            <Icon name="lucide:linkedin" class="mr-3 h-5 w-5 text-primary" />
            LinkedIn
          </a>
        </Button>

        <Button as-child variant="link" class="justify-start p-0 h-auto text-lg">
          <a href="https://twitter.com/OReghay" target="_blank" rel="noopener noreferrer">
            <Icon name="lucide:twitter" class="mr-3 h-5 w-5 text-primary" />
            Twitter
          </a>
        </Button>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
</script>