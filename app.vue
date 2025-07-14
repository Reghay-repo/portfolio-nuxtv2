<template>
  <div class="flex flex-col h-screen justify-between dark:bg-gray-900">

    <div class="dark:bg-gray-900">
      <Navbar/>
    </div>
      <div>
        <Button>Click me</Button>
      </div>
    <div class=" dark:bg-gray-900">
      <NuxtPage/>
    </div>

    <div class="dark:bg-gray-900">
      <Footer/>
    </div>

  </div>
</template>

<script lang="ts" setup>


</script>


<style lang="scss">
.wrapper {
  @apply max-w-screen-xl mx-auto;
}


.wrapper-md {
  @apply max-w-screen-md mx-auto;
}
</style>