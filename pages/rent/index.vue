<script setup lang="ts">
  useHead({
    title: '租屋列表'
  })
  const arr: number[] = [1,2,3,4]
</script>
<template>
  <div>
    <h1>租屋列表</h1>
    <ul>
      <li v-for="item in arr" :key="item">
        <nuxt-link :to="`/rent/${item}`">{{ item }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>