<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 420
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <transition name="fade">
    <button
      v-if="isVisible"
      class="back-to-top"
      type="button"
      aria-label="Back to top"
      @click="scrollToTop"
    >
      <span class="material-icon" aria-hidden="true">expand_less</span>
    </button>
  </transition>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:wght@400&display=swap');

.back-to-top {
  position: fixed;
  right: 1rem;
  bottom: 1.25rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #0f1117;
  color: #f8fafc;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.12s ease,
    box-shadow 0.12s ease,
    background 0.12s ease;
  z-index: 20;
}

.back-to-top:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.28);
}

.material-icon {
  font-family: 'Material Symbols Rounded', system-ui, -apple-system, sans-serif;
  font-size: 24px;
  line-height: 1;
}

@media (max-width: 640px) {
  .back-to-top {
    right: 0.9rem;
    bottom: 0.9rem;
    width: 44px;
    height: 44px;
  }
}
</style>
