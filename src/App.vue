<script setup lang="ts">

</script>

<template>
  <div>
    <div class="flex space-x-4">
      <RouterLink to="/">
        home
      </RouterLink>
      <RouterLink to="/about">
        about
      </RouterLink>
    </div>

    <RouterView />
  </div>
</template>

<style scoped></style>
