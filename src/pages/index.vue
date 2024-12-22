<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

import { ref } from 'vue'

const user = ref()

async function getUser() {
  const { data } = await axios.get('https://example.com/user')
  user.value = data
}

const envJson = import.meta.env
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold underline">
      {{ envJson }}
    </h1>
    <div v-if="user">
      {{ user }}
    </div>
    <button @click="getUser">
      Get User
    </button>
    <HelloWorld />
  </div>
</template>
