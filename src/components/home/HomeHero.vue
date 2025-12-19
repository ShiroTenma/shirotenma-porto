<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  slides: {
    type: Array,
    default: () => [],
  },
})

const currentHeroIndex = ref(0)
let heroTimer = null

const stopHeroSlider = () => {
  if (heroTimer) {
    clearInterval(heroTimer)
    heroTimer = null
  }
}

const startHeroSlider = () => {
  stopHeroSlider()

  const len = props.slides?.length ?? 0
  if (len <= 1) return

  heroTimer = setInterval(() => {
    currentHeroIndex.value = (currentHeroIndex.value + 1) % len
  }, 5200)
}

const goTo = (index) => {
  currentHeroIndex.value = index
  startHeroSlider()
}

onMounted(startHeroSlider)

// kalau slides-nya datang belakangan (async), ini bikin section tetap aman & slider jalan
watch(
  () => props.slides.length,
  () => {
    currentHeroIndex.value = 0
    startHeroSlider()
  },
)

onUnmounted(stopHeroSlider)
</script>

<template>
  <Transition name="fade-up" appear>
    <section id="top" class="hero bg-slate-50 dark:bg-slate-900 section-shell">
      <div class="section-container">
        <div v-inview class="home-hero-shell gap-10 fade-up grid md:grid-cols-2 items-center">
          <div class="space-y-3 text-slate-900 dark:text-slate-100">
            <p class="text-sm uppercase tracking-[0.18em] text-teal-600">Portfolio / Commission</p>
            <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
              ShiroTenma
              <br />
              Visual & Editing.
            </h1>
            <p class="text-slate-600 dark:text-slate-300 leading-7 max-w-2xl">
              Desain banner, overlay, thumbnail, dan video editing untuk streamer, VTuber, content
              creator, dan project personal yang pengen kelihatan lebih niat.
            </p>
            <div class="flex flex-wrap gap-3 pt-1">
              <router-link
                to="/portfolio"
                class="inline-flex items-center justify-center rounded-full bg-teal-500 text-white! font-semibold px-5 py-2.5 shadow-[0_12px_28px_rgba(20,184,166,0.22)] hover:bg-teal-700 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-teal-200/70"
                >Lihat portfolio</router-link
              >
              <router-link
                to="/about"
                class="inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 px-5 py-2.5 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-slate-200/70"
                >Tentang saya</router-link
              >
            </div>
          </div>

          <aside class="relative h-[260px] md:h-80">
            <div
              v-for="(slide, index) in props.slides"
              :key="slide.id ?? index"
              class="absolute inset-0 rounded-3xl shadow-[0_18px_38px_rgba(0,0,0,0.12)] overflow-hidden transition duration-700 ease-in-out bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800"
              :class="
                index === currentHeroIndex
                  ? 'opacity-100 translate-x-0 z-10'
                  : 'opacity-0 translate-x-6 scale-95'
              "
            >
              <div
                class="w-full h-full bg-center bg-cover"
                :style="{ backgroundImage: slide.image ? `url(${slide.image})` : '' }"
              ></div>

              <div
                class="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-black/80 to-black/10 text-white"
              >
                <p class="text-xs uppercase tracking-[0.15em] mb-1">{{ slide.tag }}</p>
                <h3 class="text-lg font-semibold">{{ slide.title }}</h3>
              </div>
            </div>

            <div class="absolute left-1/2 -translate-x-1/2 -bottom-12 flex gap-2">
              <button
                v-for="(slide, index) in props.slides"
                :key="(slide.id ?? index) + '-dot'"
                type="button"
                class="w-3 h-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70"
                :class="
                  index === currentHeroIndex
                    ? 'bg-teal-500 border-teal-500 shadow-[0_0_0_4px_rgba(20,184,166,0.18)]'
                    : 'bg-white/50 dark:bg-slate-800/50'
                "
                @click="goTo(index)"
              ></button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </Transition>
</template>
