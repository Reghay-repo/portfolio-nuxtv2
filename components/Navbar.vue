<!-- components/layout/Navbar.vue -->
<template>
  <!--
    The new nav bar:
    - `sticky top-0 z-50`: Keeps it locked to the top.
    - `w-full border-b`: Provides a full-width bottom border.
    - `border-border/40 bg-background/95 backdrop-blur-sm`: This is the modern "glassmorphism" effect.
      It uses theme variables for border and background, makes it semi-transparent, and blurs the content behind it.
  -->
  <header class="sticky  top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
    <div class="container flex h-16 items-center">

      <!-- Logo remains largely the same, it was already well done. -->
      <NuxtLink to="/" aria-label="Homepage" class="mr-6 cursor-pointer flex items-center">
        <h1 class="text-2xl font-semibold text-foreground">
          <!-- This now uses your purple! -->
          <span class="font-bold text-primary">Oussama</span>Re.
        </h1>
      </NuxtLink>

      <!-- Main Navigation for Desktop -->
      <!-- Hides on mobile (md:flex) and is visible on medium screens and up -->
      <NavigationMenu class="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <!--
              This is the key to proper integration:
              - `custom` prop tells NuxtLink to not render its own `<a>` tag.
              - `v-slot="{ href, navigate, isActive }"` gives us direct access to Nuxt's state.
              - We bind these values to the shadcn-vue components.
            -->
            <NuxtLink to="/about" class="cursor-pointer" custom v-slot="{ href, navigate, isActive }">
              <NavigationMenuLink :active="isActive" :class="navigationMenuTriggerStyle()" @click="navigate">
                About
              </NavigationMenuLink>
            </NuxtLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NuxtLink to="/bookmarks"  class="cursor-pointer" custom v-slot="{ href, navigate, isActive }">
              <NavigationMenuLink :active="isActive" :class="navigationMenuTriggerStyle()" @click="navigate">
                Bookmarks
              </NavigationMenuLink>
            </NuxtLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <!-- Right side of Navbar: Color Switcher and Mobile Menu -->
      <div class="flex flex-1 items-center justify-end space-x-2">
        <ColorSwitcher/>

        <!-- Mobile Menu using Sheet component -->
        <!-- Visible only on mobile (md:hidden) -->
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="ghost" size="icon" class="md:hidden">
              <svg stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                   class="h-5 w-5">
                <path d="M3 5H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"></path>
                <path d="M3 12H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"></path>
                <path d="M3 19H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"></path>
              </svg>
              <span class="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div class="flex flex-col space-y-4 mt-4">
              <NuxtLink to="/about" class="hover:text-primary">About</NuxtLink>
              <NuxtLink to="/bookmarks" class="hover:text-primary">Bookmarks</NuxtLink>
            </div>
          </SheetContent>
        </Sheet>
      </div>

    </div>
  </header>
</template>

<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle, // The essential style helper
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {Button} from '@/components/ui/button';
import ColorSwitcher from '@/components/ColorSwitcher.vue';
</script>

<!-- No <style> block needed! -->