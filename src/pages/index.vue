<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

import { onMounted, ref } from 'vue'

const user = ref()

const userList = ref([])

async function getUser() {
  const { data } = await axios.get('https://example.com/user')
  user.value = data
}

async function getUserList() {
  const { data } = await axios.get('https://example.com/userlist')
  userList.value = data
}

const envJson = import.meta.env

onMounted(() => {
  getUserList()
})
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
    <div v-for="usr in userList" :key="usr.id">
      {{ usr }}
    </div>
    <HelloWorld />
  </div>
</template>
