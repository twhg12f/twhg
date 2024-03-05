<script setup>
  const route = useRoute()

  useHead({
    title: `租屋物件${route.params.id}`
  })
</script>
<template>
  <div>
    <h1>租屋物件{{ route.params.id }}</h1>
  </div>
</template>