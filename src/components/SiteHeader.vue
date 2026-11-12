<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const isOpen = ref(false)
const route = useRoute()

const navItems = [
  { to: '/portfolio', label: 'WORK', index: '01' },
  { to: '/about', label: 'ABOUT', index: '02' },
  { to: '/commission', label: 'SERVICES', index: '03' },
  { to: '/contact', label: 'CONTACT', index: '04' },
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const handleKeydown = (e) => {
  if (e.key === 'Escape' && isOpen.value) {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

const isActive = (path) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <header
    class="sticky top-0 z-40 w-full border-b border-[#353A42]/60 bg-[#0B0D10]/95 backdrop-blur-md"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 md:py-4">
      <!-- Wordmark -->
      <router-link
        to="/"
        class="group flex items-center gap-2 text-base font-bold tracking-tight text-[#F0F0EB] transition hover:text-[#EF4B42]"
        @click="closeMenu"
      >
        <span class="inline-block h-2 w-2 rounded-full bg-[#EF4B42] transition group-hover:scale-125"></span>
        <span class="font-mono text-sm tracking-wider uppercase sm:text-base">SHIROTENMA<span class="text-[#EF4B42]">.</span></span>
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex md:items-center md:gap-7 font-mono text-xs tracking-wider">
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="group relative flex items-center gap-1.5 py-1 text-[#A5ABB4] transition hover:text-[#F0F0EB]"
          :class="{ 'text-[#F0F0EB] font-semibold': isActive(item.to) }"
        >
          <span class="text-[10px] text-[#A5ABB4]/60 transition group-hover:text-[#EF4B42]">{{ item.index }}</span>
          <span>{{ item.label }}</span>
          <span
            v-if="isActive(item.to)"
            class="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#EF4B42]"
          ></span>
        </router-link>

        <router-link
          to="/contact"
          class="ml-2 inline-flex items-center gap-1.5 rounded-sm border border-[#353A42] bg-[#181B20] px-3.5 py-1.5 font-mono text-xs font-medium text-[#F0F0EB] transition hover:border-[#EF4B42] hover:text-[#EF4B42] active:scale-95"
        >
          <span>INQUIRE</span>
          <span class="text-[#EF4B42]">↗</span>
        </router-link>
      </nav>

      <!-- Mobile Hamburger Button -->
      <button
        type="button"
        class="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[#353A42] bg-[#181B20] text-[#F0F0EB] transition hover:border-[#EF4B42] hover:text-[#EF4B42] focus:outline-none focus:ring-2 focus:ring-[#EF4B42] md:hidden"
        :aria-expanded="isOpen"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <svg
          v-if="!isOpen"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          class="h-5 w-5 text-[#EF4B42]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation Drawer -->
    <Transition name="fade-up">
      <div
        v-if="isOpen"
        class="border-b border-[#353A42] bg-[#0B0D10] px-5 py-6 md:hidden"
      >
        <div class="mb-4 font-mono text-[10px] uppercase tracking-widest text-[#A5ABB4]/70">
          INDEX / ARCHIVE NAVIGATION
        </div>
        <nav class="flex flex-col gap-2">
          <router-link
            v-for="item in navItems"
            :key="item.to + '-m'"
            :to="item.to"
            class="flex items-center justify-between rounded-sm border border-transparent p-3 font-mono text-sm tracking-wider text-[#A5ABB4] transition hover:border-[#353A42] hover:bg-[#181B20] hover:text-[#F0F0EB]"
            :class="{ 'border-[#353A42] bg-[#181B20] text-[#F0F0EB] font-bold': isActive(item.to) }"
            @click="closeMenu"
          >
            <span class="flex items-center gap-3">
              <span class="text-xs text-[#EF4B42]">{{ item.index }}</span>
              <span>{{ item.label }}</span>
            </span>
            <span class="text-xs text-[#A5ABB4]/50">→</span>
          </router-link>

          <div class="pt-4 mt-2 border-t border-[#353A42]/50">
            <router-link
              to="/contact"
              class="flex w-full items-center justify-center gap-2 rounded-sm border border-[#EF4B42] bg-[#EF4B42]/10 py-3 font-mono text-xs font-semibold tracking-wider text-[#EF4B42] transition hover:bg-[#EF4B42] hover:text-white"
              @click="closeMenu"
            >
              <span>DIRECT INQUIRY</span>
              <span>↗</span>
            </router-link>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>
