<template>
  <div class="app">
    <SiteHeader />

    <main class="main">
      <RouterView />
    </main>

    <BackToTop />
    <SiteFooter />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import BackToTop from './components/BackToTop.vue'
</script>
