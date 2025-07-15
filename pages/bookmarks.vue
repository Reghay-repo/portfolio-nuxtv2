<!-- pages/bookmarks.vue -->
<template>
  <main class="container max-w-3xl mx-auto py-16 px-4">
    <PageHeader class="mb-12" title="Bookmarks" :description="description" />

    <ul class="space-y-2">
      <li v-for="bookmark in bookmarks" :key="bookmark.id">
        <!--
          The hover effect is now our signature 'glow'.
          The hover:bg-primary/5 class provides a subtle, on-brand highlight.
        -->
        <a
          :href="bookmark.url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-4 rounded-lg p-3 -m-3 transition-colors duration-300 hover:bg-primary/5"
        >
          <!--
            The image is now wrapped in an Avatar component.
            This provides a beautiful and robust fallback if the logo isn't found.
          -->
          <Avatar class="h-10 w-10 rounded-md">
            <AvatarImage :src="`https://logo.clearbit.com/${getHost(bookmark.url)}`" :alt="bookmark.label" />
            <AvatarFallback class="rounded-md bg-muted text-sm font-medium">
              {{ getHost(bookmark.url).charAt(0).toUpperCase() }}
            </AvatarFallback>
          </Avatar>

          <div class="flex-grow min-w-0">
            <!-- The main label now uses text-foreground for primary importance. -->
            <p class="truncate font-medium text-foreground">
              {{ bookmark.label }}
            </p>
            <!-- The host URL now uses text-muted-foreground for secondary importance. -->
            <p class="truncate text-xs text-muted-foreground">
              {{ getHost(bookmark.url) }}
            </p>
          </div>
        </a>
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import PageHeader from '~/components/PageHeader.vue';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { ref } from 'vue';

const description = "Awesome things I've found on the internet. I plan to add search and tagging functionality in the future.";
useSeoMeta({
  title: "Bookmarks | Oussama Reghay",
  description,
});

// For better type safety
interface Bookmark {
  id: number;
  label: string;
  url: string;
}
const bookmarks = ref<Bookmark[]>([
    {
        id: 1,
        label: "Adam Wathan - Tailwind CSS Best Practice Patterns",
        url: "https://www.youtube.com/watch?v=J_7_mnFSLDg",
    },
    {
        id: 2,
        label: "Dicebear Awesome avatars",
        url: "https://www.dicebear.com/",
    },
    {
        id: 3,
        label: "Circuit design stock image",
        url: "https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2873&q=80",
    },
    {
        id: 4,
        label: "Beautiful Gradient Generator",
        url: "https://www.joshwcomeau.com/gradient-generator/",
    },
    {
        id: 5,
        label: "3D device mockups",
        url: "https://deviceframes.com/",
    },
    {
        id: 6,
        label: "Box shadow examples",
        url: "https://getcssscan.com/css-box-shadow-examples",
    },
    {
        id: 7,
        label: "Octupos Illustration",
        url: "https://refine.new/",
    },
    {
        id: 8,
        label: "Metalab agency",
        url: "https://www.metalab.com/",
    },
    {
        id: 9,
        label: "Tines - Beautiful landing page",
        url: "https://www.tines.com/product",
    },
    {
        id: 10,
        label: "SVG Spinners",
        url: "https://github.com/n3r4zzurr0/svg-spinners",
    },
    {
        id: 11,
        label: "Render - Build, deploy, and scale your apps",
        url: "https://render.com/",
    },
    {
        id: 12,
        label: "REQRES Mock apis for testing",
        url: "https://reqres.in/",
    },
    {
        id: 13,
        label: "Haikie - SVG background generator",
        url: "https://app.haikei.app/",
    },
    {
        id: 14,
        label: "IP API",
        url: "https://ipapi.is/",
    },
    {
        id: 15,
        label: "Rakko Tools",
        url: "https://en.rakko.tools/",
    },
    {
        id: 16,
        label: "Quasar framework for building cross platform apps with Vue js",
        url: "https://quasar.dev/",
    },
    {
        id: 17,
        label: "VueUse - Collection of Vue Composition Utilities",
        url: "https://vueuse.org/",
    },
]);
function getHost(url: string): string {
  try {
    const parsedUrl = new URL(url);
    let host = parsedUrl.host;
    if (host.startsWith("www.")) {
      host = host.substring(4);
    }
    return host;
  } catch (error) {
    return 'invalid.url';
  }
}
</script>