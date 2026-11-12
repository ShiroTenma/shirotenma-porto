<template>
  <div class="app bg-[#0B0D10] text-[#F0F0EB] min-h-screen selection:bg-[#EF4B42] selection:text-white flex flex-col justify-between">
    <SiteHeader />

    <main class="main flex-1">
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
