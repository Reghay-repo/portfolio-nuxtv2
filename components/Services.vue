<!-- components/sections/Services.vue -->
<template>
  <section class="p-4">
    <div class="container">

      <!-- 1. A clean, centered section header -->
      <div class="mb-16 text-center">
        <h2 class="text-3xl font-bold tracking-tight md:text-4xl">
          What I Do
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Here's a look at the services I offer to bring your digital products to life.
        </p>
      </div>

      <!-- 2. A responsive grid for the service cards -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

        <!-- 3. We loop through the `services` array to generate a Card for each item -->
        <Card v-for="service in services" :key="service.title" class="flex flex-col text-center">
          <CardHeader>
            <!-- Lucide icon for each service -->
            <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Icon :name="service.icon" size="24" class="  text-primary" />
            </div>
            <CardTitle>{{ service.title }}</CardTitle>
          </CardHeader>
          <CardContent class="flex-1">
            <p class="text-muted-foreground">
              {{ service.description }}
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// The single source of truth for your services. Easy to manage and update.
const services = shallowRef([
  {
    icon: 'lucide:layers-3',
    title: 'SaaS Development',
    description: 'I build feature-rich, scalable, and cost-effective SaaS applications that provide immediate value to your clients.'
  },
  {
    icon: 'lucide:server-cog',
    title: 'Backend Development',
    description: 'Specializing in robust backend systems using Node.js and Nest.js to power your applications with secure and efficient APIs.'
  },
  {
    icon: 'lucide:paintbrush',
    title: 'Frontend Development',
    description: 'Creating beautiful and intuitive user interfaces with modern frameworks like Vue.js and Nuxt, focused on performance and user experience.'
  },
  {
    icon: 'lucide:layout-template',
    title: 'Landing Pages',
    description: 'Designing and developing high-converting, professional landing pages that capture your brand and business goals.'
  },
  {
    icon: 'lucide:smartphone',
    title: 'Mobile Development',
    description: 'Building cross-platform mobile applications using technologies like Flutter to deliver a seamless experience on both iOS and Android.'
  },
   {
    icon: 'lucide:code-xml',
    title: 'Full Stack Solutions',
    description: 'Providing end-to-end development services, from database design and API development to frontend implementation and deployment.'
  }
]);
</script>