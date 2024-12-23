<script setup lang="ts">
const { msg = 'icebreaker' } = defineProps<{
  msg?: string
}>()
</script>

<template>
  <div>
    <h1> {{ msg }}</h1>
    <div>激发索科洛夫就撒了</div>
  </div>
</template>

<style scoped></style>
