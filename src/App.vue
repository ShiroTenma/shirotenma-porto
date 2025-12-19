<template>
  <div class="app bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
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
