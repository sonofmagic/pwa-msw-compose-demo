<script setup lang="ts">
const { msg = 'icebreaker' } = defineProps<{
  msg?: string
}>()
</script>

<template>
  <div>
    <h1> {{ msg }}</h1>
    <div>的就撒开金德拉克撒娇的临时决定离开</div>
  </div>
</template>

<style scoped></style>
