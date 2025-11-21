<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const categories = [
  {
    id: 'graphics',
    name: 'Graphics Design',
    badge: 'POSTER - BANNER - AND SUCH',
    priceText: 'Branding kecil, banner, overlay, dan social media assets.',
    highlight: 'Basic visual identity untuk streamer / event brand kecil.',
    tone: 'light',
  },
  {
    id: 'editing',
    name: 'Editing',
    badge: 'VIDEO • MOTION • CLIPS',
    priceText: 'Video pendek, highlight, dan MV untuk konten digital.',
    highlight: 'Perfect buat channel YouTube / VTuber / content creator.',
    tone: 'dark',
  },
  {
    id: 'photo',
    name: 'Photography',
    badge: 'COLOR GRADING • PORTRAIT',
    priceText: 'Fotografi dengan color grading dramatis dan stylized.',
    highlight: 'Buat poster, cover, atau sekadar personal project.',
    tone: 'light',
  },
]

const works = [
  // GRAPHICS
  {
    id: 'g-1',
    category: 'graphics',
    title: 'Social Media Banner',
    desc: 'Banner livestream dengan tema neon dan glitch.',
    tag: 'Graphics Design',
  },
  {
    id: 'g-2',
    category: 'graphics',
    title: 'osu!mapset background Manipulation',
    desc: 'Poster turnamen dengan layout tipografi kuat.',
    tag: 'Graphics Design',
  },
  {
    id: 'g-3',
    category: 'graphics',
    title: 'osu!profile overlay',
    desc: 'Overlay untuk VTuber / streamer dengan style custom.',
    tag: 'Graphics Design',
  },
  {
    id: 'g-4',
    category: 'graphics',
    title: 'Youtube Thumbnail',
    desc: 'Varian lain banner livestream dengan komposisi berbeda.',
    tag: 'Graphics Design',
  },
  {
    id: 'g-5',
    category: 'graphics',
    title: 'Instagram Post',
    desc: 'Versi alternatif poster turnamen dengan fokus tipografi.',
    tag: 'Graphics Design',
  },
  {
    id: 'g-6',
    category: 'graphics',
    title: 'More Designs',
    desc: 'Overlay tambahan untuk variasi scene dan transition.',
    tag: 'Graphics Design',
  },
  // EDITING
  {
    id: 'e-1',
    category: 'editing',
    title: 'Custom Edit',
    desc: 'Montage pendek dengan beat-synced cuts.',
    tag: 'Video Editing',
  },
  {
    id: 'e-2',
    category: 'editing',
    title: 'Anime Movie Clip/AMV & PMV (Picture MV)',
    desc: 'Vertical clip untuk TikTok/Shorts dengan teks dinamis.',
    tag: 'Video Editing',
  },
  {
    id: 'e-3',
    category: 'editing',
    title: 'Motion Graphics',
    desc: 'Music video lirik dengan animasi tipografi.',
    tag: 'Video Editing',
  },
  {
    id: 'e-4',
    category: 'editing',
    title: 'Lyrics MV',
    desc: 'Music video lirik dengan animasi tipografi.',
    tag: 'Video Editing',
  },
  {
    id: 'e-5',
    category: 'editing',
    title: 'more Video Editing Samples',
    desc: 'Music video lirik dengan animasi tipografi.',
    tag: 'Video Editing',
  },
  // PHOTO
  {
    id: 'p-1',
    category: 'photo',
    title: 'Cosplay Photography',
    desc: 'Street shot dengan lighting malam dan color grading kuat.',
    tag: 'Photography',
  },
  {
    id: 'p-2',
    category: 'photo',
    title: 'Wedding Photography',
    desc: 'Foto konsep dengan tema karakter / cosplay.',
    tag: 'Photography',
  },
  {
    id: 'p-3',
    category: 'photo',
    title: 'Graduation Photography',
    desc: 'Foto untuk cover playlist / album.',
    tag: 'Photography',
  },
  {
    id: 'p-4',
    category: 'photo',
    title: 'Big Events Documentation',
    desc: 'Foto potret dengan lighting dramatis dan mood kuat.',
    tag: 'Photography',
  },
  {
    id: 'p-5',
    category: 'photo',
    title: 'More Photography Samples',
    desc: 'Foto potret dengan lighting dramatis dan mood kuat.',
    tag: 'Photography',
  },
]

/**
 * Gallery detail per work (yang muncul di bawah slider waktu diklik)
 * Nanti kamu bisa ganti judul2 di sini jadi nama karya aslimu.
 */
const workGalleries = {
  'g-1': [
    { id: 'g-1-1', title: 'Twitch stream banner' },
    { id: 'g-1-2', title: 'YouTube stream banner' },
    { id: 'g-1-3', title: 'Starting soon screen' },
    { id: 'g-1-4', title: 'BRB screen' },
    { id: 'g-1-5', title: 'Ending screen' },
    { id: 'g-1-6', title: 'Panel set' },
  ],
  'g-2': [
    { id: 'g-2-1', title: 'Warm color variant' },
    { id: 'g-2-2', title: 'Cool color variant' },
    { id: 'g-2-3', title: 'Texture heavy version' },
    { id: 'g-2-4', title: 'Minimalist version' },
  ],
  'g-3': [
    { id: 'g-3-1', title: 'In-game overlay' },
    { id: 'g-3-2', title: 'Chat overlay' },
    { id: 'g-3-3', title: 'Alert banner' },
    { id: 'g-3-4', title: 'Transition frame' },
  ],
  'g-4': [
    { id: 'g-4-1', title: 'Gameplay thumbnail' },
    { id: 'g-4-2', title: 'Podcast thumbnail' },
    { id: 'g-4-3', title: 'Announcement thumbnail' },
  ],
  'g-5': [
    { id: 'g-5-1', title: 'Carousel post' },
    { id: 'g-5-2', title: 'Single post' },
    { id: 'g-5-3', title: 'Story cover' },
  ],
  'g-6': [
    { id: 'g-6-1', title: 'Extra overlay A' },
    { id: 'g-6-2', title: 'Extra overlay B' },
    { id: 'g-6-3', title: 'Pattern experiments' },
  ],

  // EDITING & PHOTO contoh saja
  'e-1': [
    { id: 'e-1-1', title: 'Ranked montage' },
    { id: 'e-1-2', title: 'Tournament highlight' },
  ],
  'e-2': [
    { id: 'e-2-1', title: 'TikTok clip' },
    { id: 'e-2-2', title: 'YouTube Shorts' },
  ],
  'e-3': [
    { id: 'e-3-1', title: 'Lyric animation A' },
    { id: 'e-3-2', title: 'Lyric animation B' },
  ],
  'p-1': [
    { id: 'p-1-1', title: 'Street corner' },
    { id: 'p-1-2', title: 'Crosswalk' },
  ],
  'p-2': [
    { id: 'p-2-1', title: 'Character shoot A' },
    { id: 'p-2-2', title: 'Character shoot B' },
  ],
  'p-3': [
    { id: 'p-3-1', title: 'Cover option 1' },
    { id: 'p-3-2', title: 'Cover option 2' },
  ],
}

const activeCategory = ref('graphics')

const activeCategoryData = computed(() => categories.find((c) => c.id === activeCategory.value))

const filteredWorks = computed(() => works.filter((w) => w.category === activeCategory.value))

// mini showcase di CTA kanan bawah
const showcaseWorks = computed(() => works.slice(0, 4))

// === SLIDER LOGIC (per kartu + loop) ===
const carouselRef = ref(null)
const activeIndex = ref(0)
let slideTimer = null

const scrollToIndex = (index) => {
  const el = carouselRef.value
  if (!el) return

  const card = el.children[index]
  if (!card) return

  const cardRect = card.getBoundingClientRect()
  const trackRect = el.getBoundingClientRect()
  const offsetLeft = cardRect.left - trackRect.left + el.scrollLeft

  el.scrollTo({
    left: offsetLeft,
    behavior: 'smooth',
  })

  activeIndex.value = index
}

const nextSlide = () => {
  const total = filteredWorks.value.length
  if (!total) return
  const next = (activeIndex.value + 1) % total
  scrollToIndex(next)
}

const prevSlide = () => {
  const total = filteredWorks.value.length
  if (!total) return
  const prev = (activeIndex.value - 1 + total) % total
  scrollToIndex(prev)
}

const resetTimer = () => {
  if (slideTimer) clearInterval(slideTimer)
  slideTimer = setInterval(() => {
    nextSlide()
  }, 3000)
}

const pauseSlider = () => {
  if (slideTimer) {
    clearInterval(slideTimer)
    slideTimer = null
  }
}

const handleNextClick = () => {
  nextSlide()
  resetTimer()
}

const handlePrevClick = () => {
  prevSlide()
  resetTimer()
}

// === GALLERY DETAIL YANG MUNCUL DI BAWAH SLIDER ===
const selectedWorkId = ref(null)

const selectedWork = computed(() => works.find((w) => w.id === selectedWorkId.value) || null)

const selectedGalleryItems = computed(() => {
  if (!selectedWork.value) return []
  return workGalleries[selectedWork.value.id] || []
})

const openGalleryForWork = (work, index) => {
  selectedWorkId.value = work.id
  scrollToIndex(index)
  pauseSlider()
}

const closeGallery = () => {
  selectedWorkId.value = null
  resetTimer()
}

// ganti kategori → reset slider & tutup gallery
const setCategory = (id) => {
  activeCategory.value = id
}

onMounted(() => {
  requestAnimationFrame(() => {
    scrollToIndex(0)
  })
  resetTimer()
})

onUnmounted(() => {
  if (slideTimer) clearInterval(slideTimer)
})

// kalau list card-nya berubah (ganti kategori)
watch(filteredWorks, () => {
  activeIndex.value = 0
  selectedWorkId.value = null
  requestAnimationFrame(() => {
    scrollToIndex(0)
  })
  resetTimer()
})
</script>

<template>
  <div class="page">
    <!-- SECTION ATAS: 3 KATEGORI -->
    <section class="section portfolio-hero">
      <div class="container">
        <h1 class="page-title">Portfolio</h1>
        <p class="page-subtitle">
          Beberapa karya di bidang Graphics Design, Editing, dan Photography. Pilih kategori di
          bawah ini buat lihat contoh-contohnya.
        </p>

        <div class="portfolio-plan-row">
          <article
            v-for="(cat, index) in categories"
            :key="cat.id"
            class="portfolio-plan-card"
            :class="[
              `portfolio-plan-card--${cat.tone}`,
              { 'portfolio-plan-card--active': cat.id === activeCategory },
              { 'portfolio-plan-card--middle': index === 1 },
            ]"
            role="button"
            tabindex="0"
            @click="setCategory(cat.id)"
            @keydown.enter.prevent="setCategory(cat.id)"
          >
            <p class="portfolio-plan-badge">
              {{ cat.badge }}
            </p>

            <h2 class="portfolio-plan-title">
              {{ cat.name }}
            </h2>

            <p class="portfolio-plan-price">
              {{ cat.priceText }}
            </p>

            <ul class="portfolio-plan-list">
              <li>{{ cat.highlight }}</li>
              <li>Style dan color grading bisa disesuaikan karakter / brand kamu.</li>
              <li>File akhir siap pakai di social media / platform streaming.</li>
            </ul>

            <button class="btn btn-primary btn-sm portfolio-plan-cta" type="button">
              Lihat karya di kategori ini
            </button>
          </article>
        </div>
      </div>
    </section>

    <!-- SECTION BAWAH: SLIDER + GALLERY DETAIL + CTA -->
    <section class="section portfolio-gallery-section">
      <div class="container">
        <!-- JUDUL -->
        <div class="portfolio-gallery-header">
          <h2 class="portfolio-wide-title">
            <strong>{{ activeCategoryData?.name }}</strong>
          </h2>
          <p class="portfolio-wide-text">
            Koleksi beberapa karya pilihan di kategori
            <strong>{{ activeCategoryData?.name }}</strong
            >. Mulai dari personal project sampai commission untuk klien, semua digarap dengan fokus
            di mood, warna, dan storytelling visual.
          </p>
        </div>

        <!-- SLIDER -->
        <div class="portfolio-carousel">
          <div class="portfolio-carousel-controls">
            <button
              type="button"
              class="portfolio-carousel-arrow"
              aria-label="Previous"
              @click="handlePrevClick"
            >
              ‹
            </button>
            <button
              type="button"
              class="portfolio-carousel-arrow"
              aria-label="Next"
              @click="handleNextClick"
            >
              ›
            </button>
          </div>

          <div ref="carouselRef" class="portfolio-carousel-track">
            <article
              v-for="(work, index) in filteredWorks"
              :key="work.id"
              class="portfolio-carousel-card"
              :class="{
                'portfolio-carousel-card--active': index === activeIndex,
              }"
              role="button"
              tabindex="0"
              @click="openGalleryForWork(work, index)"
              @keydown.enter.prevent="openGalleryForWork(work, index)"
            >
              <div
                class="portfolio-gallery-thumb"
                :class="`portfolio-gallery-thumb--${work.category}`"
              ></div>

              <div class="portfolio-gallery-body">
                <span class="portfolio-gallery-tag">
                  {{ work.tag }}
                </span>
                <h3 class="portfolio-gallery-title">
                  {{ work.title }}
                </h3>
                <p class="portfolio-gallery-text">
                  {{ work.desc }}
                </p>
              </div>
            </article>
          </div>
        </div>

        <!-- GALLERY DETAIL DI BAWAH SLIDER (kayak Works of Artists) -->
        <transition name="fade">
          <section v-if="selectedWork" class="portfolio-work-gallery">
            <div class="portfolio-work-gallery-header">
              <div>
                <p class="portfolio-work-gallery-kicker">
                  {{ selectedWork.tag || activeCategoryData?.name }}
                </p>
                <h3 class="portfolio-work-gallery-title">
                  {{ selectedWork.title }}
                </h3>
              </div>

              <button
                type="button"
                class="btn btn-outline btn-sm portfolio-work-gallery-close"
                @click="closeGallery"
              >
                Tutup gallery view
              </button>
            </div>

            <div class="portfolio-work-gallery-grid">
              <article
                v-for="(item, index) in selectedGalleryItems"
                :key="item.id"
                :class="[
                  'portfolio-work-gallery-card',
                  { 'portfolio-work-gallery-card--featured': index === 0 },
                ]"
              >
                <div
                  class="portfolio-work-gallery-thumb"
                  :class="`portfolio-gallery-thumb--${selectedWork.category}`"
                ></div>
                <div class="portfolio-work-gallery-label">
                  {{ item.title }}
                </div>
              </article>
            </div>
          </section>
        </transition>

        <!-- CTA BANNER -->
        <div class="portfolio-cta-banner">
          <div class="portfolio-cta-inner">
            <h3 class="portfolio-cta-title">
              Siap bikin visual baru buat brand atau project kamu?
            </h3>
            <p class="portfolio-cta-text">
              Ceritain pendek aja idemu, nanti kita bisa bahas bareng konsep, mood, dan style yang
              paling cocok. No pressure, cuma ngobrol dulu.
            </p>

            <router-link to="/contact" class="portfolio-cta-button">
              <span class="portfolio-cta-button-label"> Let’s talk! </span>
              <span class="portfolio-cta-button-icon"> ↗ </span>
            </router-link>
          </div>

          <div class="portfolio-cta-gallery">
            <article v-for="item in showcaseWorks" :key="item.id" class="portfolio-cta-thumb-card">
              <div
                class="portfolio-cta-thumb"
                :class="`portfolio-cta-thumb--${item.category}`"
              ></div>
              <p class="portfolio-cta-thumb-title">
                {{ item.title }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
