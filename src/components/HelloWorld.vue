<script setup lang="ts">
const { msg = 'icebreaker' } = defineProps<{
  msg?: string
}>()
</script>

<template>
  <div>
    <h1> {{ msg }}</h1>
    <div>
      whatteh付三册
    </div>
  </div>
</template>

<style scoped></style>
