<!-- components/ProjectCard.vue -->
<template>
  <!--
    The Card is the root.
    - `transition-all` and hover effects make it feel interactive.
    - `flex flex-col` is key to making the footer stick to the bottom.
  -->
  <Card class="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

    <!-- Project Image with a consistent aspect ratio -->
    <AspectRatio :ratio="16 / 9">
      <img
        :src="project.image"
        :alt="project.name"
        class="h-full w-full object-cover"
      />
    </AspectRatio>

    <!-- Card Content: Title, Description, and Tags -->
    <CardContent class="flex-1 p-6">
      <CardTitle class="mb-2">{{ project.name }}</CardTitle>

      <p class="mb-4 text-sm text-muted-foreground">
        {{ project.description }}
      </p>

      <!-- Tags using the Badge component for a clean look -->
      <div class="flex flex-wrap gap-2">
        <Badge v-for="tag in project.tags" :key="tag" variant="secondary">
          {{ tag }}
        </Badge>
      </div>
    </CardContent>

    <!-- Card Footer: Action buttons for GitHub and Live Demo -->
    <CardFooter class="p-6 pt-0">
      <div class="flex w-full items-center gap-4">
        <Button v-if="project.github" as-child variant="outline" class="w-full">
          <a :href="project.github" target="_blank" rel="noopener noreferrer">
            <Icon name="lucide:github" class="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
        <Button v-if="project.link" as-child class="w-full">
          <a :href="project.link" target="_blank" rel="noopener noreferrer">
            <Icon name="lucide:external-link" class="mr-2 h-4 w-4" />
            Live Demo
          </a>
        </Button>
      </div>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Define the interface for the project prop
interface IProject {
  name: string;
  description: string;
  image: string;
  tags?: string[];
  github?: string;
  link?: string;
}

// Define the component's props
defineProps<{
  project: IProject;
}>();
</script>