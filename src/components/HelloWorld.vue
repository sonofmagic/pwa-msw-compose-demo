<script setup lang="ts">
const { msg = 'icebreaker' } = defineProps<{
  msg?: string
}>()
</script>

<template>
  <div>
    <h1> {{ msg }}</h1>
    <div>的撒的撒开胃哦我i饿我好傻呢 </div>
  </div>
</template>

<style scoped></style>
