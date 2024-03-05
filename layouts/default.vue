<template>
  <div class="min-h-dvh flex flex-col">
    <header>
      <nuxt-link to="/">
        <h1 class="bg-primary text-white">台灣房屋</h1>
      </nuxt-link>
      <ul>
        <li>
          <nuxt-link to="/buy">買屋</nuxt-link> |
          <nuxt-link to="/rent">租屋</nuxt-link> |
          <nuxt-link to="/sell">賣屋</nuxt-link> |
          <nuxt-link to="/brand">企業文化</nuxt-link> |
          <nuxt-link to="/price_trend">實價登錄</nuxt-link> |
          <nuxt-link to="/login">登入</nuxt-link> |
          <nuxt-link to="/member">會員專區</nuxt-link> |
        </li>
      </ul>
    </header>

    <slot />
    <footer class="mt-auto bg-primary">
      <nuxt-link to="/policies#service">服務條款</nuxt-link> |
      <nuxt-link to="/policies#privacy">隱私權政策</nuxt-link> |
    </footer>
  </div>
</template>