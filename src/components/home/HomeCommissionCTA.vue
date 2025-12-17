<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
})

const currentIndex = ref(0)
let timer = null

const startSlider = () => {
  if (timer) clearInterval(timer)
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.slides.length
  }, 4000)
}

onMounted(() => {
  startSlider()
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <Transition name="fade-up" appear>
    <section id="home-commission" class="section bg-[#f1f4f7] section-shell">
      <div class="section-container">
        <div
          v-inview
          class="relative h-80 md:h-[360px] overflow-hidden rounded-3xl shadow-[0_18px_38px_rgba(20,184,166,0.18)] border border-slate-200/70 bg-white fade-up"
        >
          <div
            v-for="(slide, index) in props.slides"
            :key="slide.id ?? index"
            class="absolute inset-0 rounded-3xl overflow-hidden transition duration-700 ease-in-out"
            :class="
              index === currentIndex ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-8'
            "
            :style="{
              background: slide.image
                ? `url(${slide.image}) center / cover no-repeat`
                : slide.background,
            }"
          >
            <div
              class="absolute inset-0 bg-linear-to-r from-teal-700/75! via-teal-800/75 to-slate-900/70 text-white flex flex-col justify-center gap-3 p-6 md:p-10"
            >
              <p class="text-sm uppercase tracking-[0.2em] text-white/80">Let's connect</p>
              <h2 class="text-2xl md:text-3xl font-bold">{{ slide.title }}</h2>
              <p class="text-white/85 leading-7 max-w-2xl">{{ slide.subtitle }}</p>

              <router-link
                to="/commission"
                class="inline-flex items-center justify-center rounded-full bg-white text-teal-800! font-semibold px-5 py-2.5 shadow-lg shadow-emerald-900/25 hover:-translate-y-px hover:shadow-xl active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-white/60 w-fit"
              >
                Reach out
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Transition>
</template>
