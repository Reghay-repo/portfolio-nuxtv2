<!-- components/layout/Navbar.vue -->
<template>
  <header class="sticky px-3 top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
    <div class="container flex h-16 items-center">

      <!-- Logo -->
      <NuxtLink to="/" aria-label="Homepage" class="mr-6 flex items-center">
        <h1 class="text-2xl font-semibold text-foreground">
          <span class="font-bold text-primary">Oussama</span>Re.
        </h1>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <NavigationMenu class="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem class="cursor-pointer" v-for="item in navigationItems.slice(1)" :key="item.to">
            <NuxtLink :to="item.to" custom v-slot="{ href, navigate, isActive }">
              <NavigationMenuLink :active="isActive" :class="navigationMenuTriggerStyle()" @click="navigate">
                {{ item.label }}
              </NavigationMenuLink>
            </NuxtLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <!-- Right side: Color Switcher & Mobile Menu -->
      <div class="flex flex-1 items-center justify-end space-x-2">
        <ColorSwitcher />

        <!-- ==== THE NEW & IMPROVED MOBILE MENU ==== -->
        <div class="md:hidden">
          <Sheet v-model:open="isMobileMenuOpen">
            <SheetTrigger as-child>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Icon name="lucide:menu" class="h-6 w-6 text-foreground" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" class="w-[300px] flex flex-col bg-background p-0">
              <SheetHeader class="p-4 border-b border-border">
                <NuxtLink to="/" aria-label="Homepage" @click="isMobileMenuOpen = false">
                  <h1 class="text-xl font-semibold text-foreground">
                    <span class="font-bold text-primary">Oussama</span>Re.
                  </h1>
                </NuxtLink>
              </SheetHeader>

              <div class="flex-1 overflow-y-auto p-4 space-y-2">
                <!-- Main Navigation Links -->
                <SheetClose as-child  v-for="link in navigationItems" :key="`mobile-${link.to}`">
                  <NuxtLink :to="link.to" :class="mobileLinkClasses">
                    <Icon :name="link.icon" class="mr-3 h-5 w-5" />
                    {{ link.label }}
                  </NuxtLink>
                </SheetClose>

                <Separator class="my-4" />

                <!-- Social Links Section -->
                <div class="pt-2">
                  <p class="text-xs font-medium uppercase text-muted-foreground mb-2 px-3">Get In Touch</p>
                  <a v-for="link in socialLinks" :key="`social-${link.href}`" :href="link.href" target="_blank" rel="noopener noreferrer" :class="mobileLinkClasses">
                    <Icon :name="link.icon" class="mr-3 h-5 w-5" />
                    {{ link.label }}
                  </a>
                </div>
              </div>

              <div class="p-4    border-t border-border">
                <ColorSwitcher />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose, // Import SheetClose
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import ColorSwitcher from '@/components/ColorSwitcher.vue';

// --- STATE ---
// This ref is crucial for controlling the sheet's open state manually.
const isMobileMenuOpen = ref(false);

// --- DATA ---
// Single source of truth for navigation, now with icons.
const navigationItems = [
  { label: 'Home', to: '/', icon: 'lucide:home' },
  { label: 'About', to: '/about', icon: 'lucide:user-round' },
  // { label: 'Projects', to: '/projects', icon: 'lucide:kanban-square' },
  { label: 'Bookmarks', to: '/bookmarks', icon: 'lucide:bookmark' },
];

const socialLinks = [
  { label: 'Email', href: 'mailto:oussama.reghay.dev@gmail.com', icon: 'lucide:mail' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oussama-reghay', icon: 'lucide:linkedin' },
  { label: 'GitHub', href: 'https://github.com/reghay-repo', icon: 'lucide:github' },
];

// --- STYLES ---
// A reusable style string for all mobile links to keep them consistent.
const mobileLinkClasses = "flex items-center rounded-md px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent";
</script>