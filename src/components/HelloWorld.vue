<script setup lang="ts">
const { msg = 'icebreaker' } = defineProps<{
  msg?: string
}>()
</script>

<template>
  <div>
    <h1> {{ msg }}</h1>
    <div>都是快乐的时刻了多少</div>
  </div>
</template>

<style scoped></style>
