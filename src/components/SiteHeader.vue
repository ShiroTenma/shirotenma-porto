<script setup>
import { ref, onMounted } from 'vue'

const isOpen = ref(false)
const theme = ref('light')

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

const applyTheme = () => {
  const root = document.documentElement
  if (theme.value === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
  localStorage.setItem('theme', theme.value)
}

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  applyTheme()
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark' || saved === 'light') {
    theme.value = saved
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme.value = 'dark'
  }
  applyTheme()
})
</script>

<template>
  <header
    class="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-[0_10px_30px_rgba(20,184,166,0.12)] border-b border-slate-200/70 dark:border-slate-800 z-40 sticky top-0 backdrop-blur"
  >
    <div class="section-container flex items-center justify-between py-4">
      <router-link
        to="/"
        class="text-lg font-semibold whitespace-nowrap flex items-center gap-1 text-slate-900 dark:text-slate-100"
        @click="closeMenu"
      >
        Shiro<span class="text-teal-600">Tenma</span>
      </router-link>

      <button
        class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
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
          class="text-slate-700 dark:text-slate-200 hover:text-teal-600 hover:dark:text-teal-300 transition"
        >
          {{ link.label }}
        </router-link>
        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 px-4 py-2 text-xs font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
          @click="toggleTheme"
          aria-label="Toggle theme"
        >
          <span>{{ theme === 'dark' ? 'Light' : 'Dark' }} mode</span>
          <span v-if="theme === 'dark'">🌙</span>
          <span v-else>☀️</span>
        </button>
      </nav>
    </div>

    <transition name="modal-fade">
      <div
        v-if="isOpen"
        class="md:hidden bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-lg border-t border-slate-200 dark:border-slate-800"
      >
        <div class="section-container py-3 flex flex-col gap-2 text-sm font-semibold">
          <router-link
            v-for="link in links"
            :key="link.to + '-mobile'"
            :to="link.to"
            class="py-2 px-3 rounded-lg hover:bg-teal-50 dark:hover:bg-slate-800 transition"
            @click="closeMenu"
          >
            {{ link.label }}
          </router-link>
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
            @click="toggleTheme"
            aria-label="Toggle theme mobile"
          >
            <span>{{ theme === 'dark' ? 'Light' : 'Dark' }} mode</span>
            <span v-if="theme === 'dark'">🌙</span>
            <span v-else>☀️</span>
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>
