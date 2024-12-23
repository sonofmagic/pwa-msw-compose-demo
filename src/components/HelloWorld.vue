<script setup lang="ts">
const { msg = 'icebreaker' } = defineProps<{
  msg?: string
}>()
</script>

<template>
  <div>
    <h1> {{ msg }}</h1>
    <div>CCAV</div>
    <div>CCAV</div>
    <div>CCAV</div>
  </div>
</template>

<style scoped></style>
