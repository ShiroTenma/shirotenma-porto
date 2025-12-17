<script setup>
import { computed, watch } from 'vue'
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  works: {
    type: Array,
    required: true,
  },
})

const gradientFallbacks = [
  'linear-gradient(135deg, #5c2fb5, #11b58a)',
  'linear-gradient(135deg, #157f6f, #5c2fb5)',
  'linear-gradient(135deg, #0f766e, #0ea5e9)',
  'linear-gradient(135deg, #7c3aed, #14b8a6)',
]

const slides = computed(() =>
  props.works.map((work, index) => ({
    ...work,
    fallback: gradientFallbacks[index % gradientFallbacks.length],
  })),
)

const currentIndex = ref(0)
let timer = null
const syncCardWidth = () => {
  /* no-op placeholder for future responsive tweaks */
}

const startSlider = () => {
  if (timer) clearInterval(timer)
  if (slides.value.length <= 1) return
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length
  }, 5200)
}

const goTo = (idx) => {
  currentIndex.value = (idx + slides.value.length) % slides.value.length
  startSlider()
}

const displayedSlides = computed(() => {
  if (!slides.value.length) return []
  const len = slides.value.length
  const result = []
  for (let i = -2; i <= 1; i++) {
    const idx = (currentIndex.value + i + len) % len
    result.push({ slide: slides.value[idx], delta: i, active: i === 0 })
  }
  return result
})

const cardStyle = (item) => {
  const distance = window.innerWidth < 768 ? 220 : 260
  const baseTranslate = `translate(-50%, -50%) translateX(${item.delta * distance}px)`
  const faded = Math.abs(item.delta) > 1
  return {
    transform: `${baseTranslate} scale(${item.active ? 1.02 : faded ? 0.92 : 0.96})`,
    opacity: item.active ? 1 : faded ? 0 : 0.82,
    zIndex: item.active ? 4 : faded ? 1 : 3 - Math.abs(item.delta),
    pointerEvents: item.active ? 'auto' : 'none',
    transition: 'transform 0.7s ease, opacity 0.5s ease',
  }
}

watch(
  () => slides.value.length,
  () => {
    currentIndex.value = 0
    startSlider()
  },
)

onMounted(() => {
  syncCardWidth()
  window.addEventListener('resize', syncCardWidth)
  startSlider()
})

onUnmounted(() => {
  timer && clearInterval(timer)
  window.removeEventListener('resize', syncCardWidth)
})
</script>

<template>
  <Transition name="fade-up" appear>
    <section id="home-portfolio" class="section bg-[#f1f4f7] section-shell">
      <div class="section-container">
        <div
          v-inview
          class="bg-teal-50 rounded-3xl shadow-[0_16px_42px_rgba(0,0,0,0.06)] border border-teal-100/70 p-6 md:p-8 space-y-6"
        >
          <div class="grid md:grid-cols-[1.2fr_1fr] gap-7 items-start">
            <div class="space-y-5">
              <h2 class="text-4xl font-bold text-slate-900">Selected Works</h2>
              <router-link
                to="/commission"
                class="inline-flex items-center justify-center rounded-full bg-teal-500 text-[#F9FAFB]! font-semibold text-sm px-5 py-2.5 shadow-[0_10px_24px_rgba(20,184,166,0.22)] hover:bg-teal-700 hover:-translate-y-px active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-teal-200/70"
              >
                Lihat commission
              </router-link>
            </div>
            <div class="text-slate-600 leading-7 max-w-xl space-y-2">
              Beberapa judul karya dari kategori graphics, editing, dan photography. Untuk list
              lengkap, kamu bisa cek halaman portfolio atau detail commission.
            </div>
          </div>

          <div
            class="relative overflow-hidden rounded-3xl bg-white text-slate-900 p-6 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-slate-200/80"
          >
            <div
              v-if="displayedSlides.length"
              class="relative h-60 md:h-80 flex items-center justify-center"
            >
              <article
                v-for="item in displayedSlides"
                :key="item.slide.id"
                class="absolute top-1/2 left-1/2 w-[260px] md:w-[360px] lg:w-[400px] h-[200px] md:h-[280px] rounded-[22px] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.14)] bg-slate-900 ring-1 ring-white/5"
                :style="cardStyle(item)"
              >
                <div
                  class="absolute inset-0 bg-center bg-cover"
                  :style="{
                    backgroundImage: item.slide.thumb
                      ? `url(${item.slide.thumb})`
                      : item.slide.fallback,
                  }"
                ></div>
                <div
                  class="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"
                ></div>
              </article>
            </div>

            <div
              v-else
              class="flex items-center justify-center py-12 text-slate-500 rounded-2xl border border-dashed border-slate-200 bg-slate-50"
            >
              Karya belum dimuat. Silakan refresh halaman.
            </div>

            <div
              class="mt-10 pt-6 border-t border-slate-200 flex items-start justify-between gap-6 flex-col md:flex-row"
            >
              <div class="space-y-3 max-w-2xl">
                <p class="text-xs uppercase tracking-[0.22em] text-teal-600">
                  {{ slides[currentIndex]?.category || 'WORKS' }}
                </p>
                <h3 class="text-2xl md:text-3xl font-semibold text-slate-900">
                  {{ slides[currentIndex]?.title }}
                </h3>
              </div>

              <div class="flex items-center gap-2">
                <button
                  v-for="(work, idx) in slides"
                  :key="work.id + '-dot'"
                  type="button"
                  class="h-2.5 rounded-full bg-slate-200 transition-all duration-300"
                  :class="idx === currentIndex ? 'w-8 bg-teal-500' : 'w-2.5 bg-slate-200'"
                  @click="goTo(idx)"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Transition>
</template>
