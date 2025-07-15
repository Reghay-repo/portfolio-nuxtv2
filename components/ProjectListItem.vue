<!-- components/ProjectListItem.vue -->
<template>
  <!--
    The hover effect is the only change here.
    Instead of a solid color or movement, we use `hover:bg-primary/5`.
    This applies your main brand color at just 5% opacity, creating a subtle glow.
  -->
  <div

      class="block rounded-lg p-4 transition-colors duration-300 hover:bg-primary/5"
  >
    <!-- The rest of the template remains the same -->
    <div class="flex flex-col">
      <h3 class="text-lg font-semibold text-foreground">
        {{ project.name }}
      </h3>
      <p class="mt-1 text-sm text-muted-foreground">
        {{ project.description }}
      </p>
    </div>

    <div class="mt-3 flex flex-wrap gap-2">
      <Badge v-for="tag in project.tags" :key="tag" variant="outline">
        {{ tag }}
      </Badge>
    </div>
    <!-- Conditional Action Links -->
    <div class="mt-4 flex items-center gap-4">
      <!-- Show "Live Demo" for professional projects with a link -->
      <Button v-if="project.category === 'professional' && project.link" as-child variant="link" class="p-0 h-auto">
        <a :href="project.link" target="_blank" rel="noopener noreferrer">
          <Icon name="lucide:external-link" class="mr-2 h-4 w-4"/>
          Live Demo
        </a>
      </Button>

      <!-- Show "GitHub" for hobby projects with a repo -->
      <Button v-if="project.category === 'hobby' && project.github" as-child variant="link" class="p-0 h-auto">
        <a :href="project.github" target="_blank" rel="noopener noreferrer">
          <Icon name="lucide:github" class="mr-2 h-4 w-4"/>
          View Source
        </a>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Badge} from '@/components/ui/badge';

interface IProject {
  name: string;
  description: string;
  year: number;
  category: 'professional' | 'hobby';
  tags?: string[];
  github?: string;
  link?: string;
}

defineProps<{
  project: IProject;
}>();
</script>