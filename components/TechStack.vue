<!-- components/TechStack.vue -->
<template>
  <!--
    The main container for the icons.
    - We use `gap-6` for consistent, responsive spacing between icons.
    - This replaces all the individual `m-2 md:m-4` classes.
  -->
  <div class="flex flex-wrap items-center justify-center  md:gap-8">

    <!-- We now loop through our `techStack` array from the script. -->
    <TooltipProvider v-for="tech in techStack" :key="tech.name">
      <Tooltip>
        <TooltipTrigger as-child>

          <component
              :is="tech.component"
              :aria-label="tech.name"
              class=" cursor-pointer text-5xl md:text-6xl  text-muted-foreground transition-transform duration-300 hover:scale-110 "
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>{{ tech.name }}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

  </div>
</template>

<script lang="ts" setup>
import {shallowRef} from 'vue';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  IconDocker,
  IconExpress, IconFlutter,
  IconJavascript,
  IconLaravel, IconMUI,
  IconNest,
  IconNode,
  IconNuxt, IconQuasar,
  IconTailwind,
  IconTs,
  IconVuejs, IconVuetify
} from "#components";


const techStack = shallowRef([
  {name: 'JavaScript', component: IconJavascript},
  {name: 'TypeScript', component: IconTs},
  {name: 'Vue.js', component: IconVuejs},
  {name: 'Nuxt', component: IconNuxt},
  {name: 'Tailwind CSS', component: IconTailwind},
  {name: 'Node.js', component: IconNode},
  {name: 'NestJS', component: IconNest},
  {name: 'Express', component: IconExpress},
  {name: 'Laravel', component: IconLaravel},
  {name: 'Docker', component: IconDocker},
  {name: 'Flutter', component: IconFlutter},
  {name: 'Vuetify', component: IconVuetify},
  {name: 'Quasar', component: IconQuasar},
  {name: 'MUI', component: IconMUI},
]);

</script>

<!-- No <style> block needed. -->