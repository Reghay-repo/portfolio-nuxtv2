<!-- components/sections/Projects.vue -->
<template>
  <section class="p-10 ">
    <div class="container">
      <div class="mb-12">
        <h2 class="text-3xl font-bold tracking-tight md:text-4xl">
          My Work & Projects
        </h2>
        <p class="mt-3 max-w-2xl text-lg text-muted-foreground">
          A curated list of my professional contributions and personal explorations in software development.
        </p>
      </div>

      <!-- Tabs component to switch between categories -->
      <Tabs default-value="professional" class="w-full">
        <TabsList class="grid w-full grid-cols-2 md:w-[400px]">
          <TabsTrigger value="professional">Professional</TabsTrigger>
          <TabsTrigger value="hobby">Hobby</TabsTrigger>
        </TabsList>

        <!-- Content for Professional Projects -->
        <TabsContent value="professional" class="mt-8">
          <div class="space-y-12">
            <div
              v-for="(projectsInYear, year) in groupedProfessionalProjects"
              :key="year"
              class="grid grid-cols-1 gap-8 md:grid-cols-[max-content_1fr]"
            >
<!--              <div class="font-semibold text-muted-foreground md:text-right">{{ year }}</div>-->
              <div class="flex flex-col gap-4 border-l pl-8">
                <ProjectListItem v-for="project in projectsInYear" :key="project.name" :project="project" />
              </div>
            </div>
          </div>
        </TabsContent>

        <!-- Content for Hobby Projects -->
        <TabsContent value="hobby" class="mt-8">
          <div class="space-y-12">
             <div
              v-for="(projectsInYear, year) in groupedHobbyProjects"
              :key="year"
              class="grid grid-cols-1 gap-8 md:grid-cols-[max-content_1fr]"
            >
<!--              <div class="font-semibold text-muted-foreground md:text-right">{{ year }}</div>-->
              <div class="flex flex-col gap-4 border-l pl-8">
                <ProjectListItem v-for="project in projectsInYear" :key="project.name" :project="project" />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectListItem from '~/components/ProjectListItem.vue';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { computed, shallowRef } from 'vue';

interface IProject {
  name: string;
  description: string;
  year: number;
  category: 'professional' | 'hobby';
  tags?: string[];
  github?: string;
  link?: string;
}
const projects = shallowRef<IProject[]>([
  // --- Professional ---
  {
    year: 2024,
    name: "Pintalent",
    description: "A user-friendly platform to simplify creating professional, ATS-optimized CVs with customizable templates and content suggestions.",
    category: 'professional',
    tags: ['AI', 'CV', 'ATS', 'SaaS'],
    link: "https://www.pintalent.io/"
  },
  {
    year: 2024,
    name: "Pinjob",
    description: "Advanced tool to help users create refined, ATS-optimized CVs, explore career paths, and find perfectly adapted job offers.",
    category: 'professional',
    tags: ['Vue.js', 'Vuetify', 'Recruitment Tech'],
    link: "https://pinjob.ma/"
  },
  {
    year: 2024,
    name: "Geekfact Cross-Platform Apps",
    description: "Developed and maintained responsive mobile and web applications using Vue.js, Vuetify, and Quasar, focusing on performance and seamless functionality.",
    category: 'professional',
    tags: ['Vue.js', 'Vuetify', 'Quasar', 'Agile'],
  },
  {
    year: 2023,
    name: "Governance, Risk & Compliance Tool",
    description: "Led frontend development for a platform to simplify risk management and performance tracking for FIZAZI & ASSOCIATES.",
    category: 'professional',
    tags: ['Vue.js', 'Nest.js', 'PostgreSQL', 'Vuetify'],
  },
    {
    year: 2023,
    name: "Planfy",
    description: "Frontend development for an ERP SaaS tool (Pagie portal), focusing on UI design, responsive layouts, and performance optimization.",
    category: 'professional',
    tags: ['Vue.js', 'Vuetify', 'Flutter', 'Pinia'],

  },
  {
    year: 2023,
    name: "Sand Circle SARL Platform",
    description: "Supervised frontend development with Nuxt.js and Pinia, and built scalable backend solutions with Nest.js and PostgreSQL.",
    category: 'professional',
    tags: ['Nuxt.js', 'Pinia', 'Nest.js', 'AWS', 'Docker'],
  },
    {
    year: 2022,
    name: "Petalens",
    description: "Led full-stack development of a Media Monitoring and Social Listening tool, from a Laravel/Vue.js monolith to microservices.",
    category: 'professional',
    tags: ['Vue.js', 'Laravel', 'Docker', 'JSONAPI'],
    link: "https://www.petalens.com/",
  },
  {
    year: 2022,
    name: "EasyOM",
    description: "Landing page for a business services and consulting firm.",
    category: 'professional',
    tags: ['JavaScript', 'Express.js', 'Timber.js'],
    link: "https://easyom.up.railway.app/",
  },
  {
    year: 2021,
    name: "CHAKIR group Dashboard",
    description: "Full-stack development of an internal dashboard using Vue.js and Laravel API, ensuring a reactive and transparent user experience.",
    category: 'professional',
    tags: ['Vue.js', 'Laravel', 'MySQL'],
  },
  // --- Hobby ---
  {
    year: 2021,
    name: "YouRent",
    description: "Full-stack vacation rental booking website. A personal project to explore map integrations and booking systems.",
    category: 'hobby',
    tags: ['Express.js', 'Cloudinary', 'Mapbox', 'MVC'],
    github: "https://github.com/Reghay-repo/you-rent",
  },
]);
// Helper function to group projects by year
const groupProjectsByYear = (projects: IProject[]) => {
  const sorted = [...projects].sort((a, b) => b.year - a.year);
  return sorted.reduce((acc, project) => {
    const year = project.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(project);
    return acc;
  }, {} as Record<number, IProject[]>);
};

// Computed property to get only professional projects, grouped by year
const groupedProfessionalProjects = computed(() => {
  const professional = projects.value.filter(p => p.category === 'professional');
  return groupProjectsByYear(professional);
});

// Computed property to get only hobby projects, grouped by year
const groupedHobbyProjects = computed(() => {
  const hobby = projects.value.filter(p => p.category === 'hobby');
  return groupProjectsByYear(hobby);
});
</script>