<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/commission', label: 'Commission' },
  { to: '/contact', label: 'Contact' },
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header
    class="w-full bg-white text-slate-900 shadow-[0_10px_30px_rgba(20,184,166,0.12)] border-b border-slate-200/70 z-40 sticky top-0"
  >
    <div class="section-container flex items-center justify-between py-4">
      <router-link
        to="/"
        class="text-lg font-semibold whitespace-nowrap flex items-center gap-1 text-slate-900"
        @click="closeMenu"
      >
        Shiro<span class="text-teal-600">Tenma</span>
      </router-link>

      <button
        class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 transition"
        type="button"
        @click="toggleMenu"
      >
        <span v-if="!isOpen" class="text-xl font-bold">☰</span>
        <span v-else class="text-xl font-bold">×</span>
      </button>

      <nav class="hidden md:flex items-center gap-5 text-sm font-semibold">
        <router-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-slate-700 hover:text-teal-600 transition"
        >
          {{ link.label }}
        </router-link>
      </nav>
    </div>

    <transition name="modal-fade">
      <div
        v-if="isOpen"
        class="md:hidden bg-white text-slate-900 shadow-lg border-t border-slate-200"
      >
        <div class="section-container py-3 flex flex-col gap-2 text-sm font-semibold">
          <router-link
            v-for="link in links"
            :key="link.to + '-mobile'"
            :to="link.to"
            class="py-2 px-3 rounded-lg hover:bg-teal-50 transition"
            @click="closeMenu"
          >
            {{ link.label }}
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>
