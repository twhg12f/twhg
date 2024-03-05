<script setup lang="ts">
  useHead({
    title: "買屋列表"
  })
  const arr: number[] = [1,2,3,4]

</script>
<template>
  <div>
    <h1>買屋列表</h1>
    <ul>
      <li v-for="item in arr" :key="item">
        <nuxt-link :to="`/buy/${item}`">{{ item }}</nuxt-link>
      </li>
    </ul>

    <!-- map -->
    <Map />
  </div>
</template>