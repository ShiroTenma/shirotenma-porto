<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

import graphicsBanner from '../assets/images/works/graphics-banner.png'
import graphicsPoster from '../assets/images/works/graphics-poster.png'
import graphicsOverlay from '../assets/images/works/graphics-overlay.jpg'
import graphicsThumbnail from '../assets/images/works/graphics-thumbnail.png'

import editingHighlight from '../assets/images/works/editing-highlight.jpg'
import editingMotion from '../assets/images/works/editing-motion.png'
import lyricsMV from '../assets/images/hero/showcase-highlight.png'
import editingAmv from '../assets/images/works/editing-amv.jpg'

import photoPortrait from '../assets/images/works/photo-portrait.jpg'
import photoEvents from '../assets/images/works/photo-events.jpg'

const categories = [
  {
    id: 'graphics',
    name: 'Graphics Design',
    badge: 'POSTER / BANNER / SOCIAL',
    priceText: 'Branding kecil, banner, overlay, dan social media assets.',
    highlight: 'Basic visual identity untuk kebutuhan sosial media atau event brand kecil.',
    tone: 'light',
  },
  {
    id: 'editing',
    name: 'Editing',
    badge: 'VIDEO / MOTION / CLIPS',
    priceText: 'Video pendek, Custom MV edits, dan Motion Graphics untuk konten digital.',
    highlight:
      'Pas buat channel YouTube, VTuber, atau content creator. atau sekedar hiburan pribadi.',
    tone: 'dark',
  },
  {
    id: 'photo',
    name: 'Photography',
    badge: 'COSPLAY / PORTRAIT',
    priceText: 'Fotografi dengan color grading stylized.',
    highlight: 'Untuk poster, Sosial Media, atau personal project.',
    tone: 'light',
  },
]

const works = [
  // GRAPHICS
  {
    id: 'g-1',
    category: 'graphics',
    title: 'Social Media Banner',
    desc: 'Banner Sosial media dengan beragam tema menyesuaikan dengan permintaan klien.',
    tag: 'Graphics Design',
    thumb: graphicsBanner,
  },
  {
    id: 'g-2',
    category: 'graphics',
    title: 'osu!mapset background manipulation',
    desc: 'Background Map yang di manipulasi sesuai dengan vibe fanart dan lagunya agar terlihat menarik.',
    tag: 'Graphics Design',
    thumb: graphicsPoster,
  },
  {
    id: 'g-3',
    category: 'graphics',
    title: 'osu!profile overlay',
    desc: 'Overlay untuk osu!profile style custom.',
    tag: 'Graphics Design',
    thumb: graphicsOverlay,
  },
  {
    id: 'g-4',
    category: 'graphics',
    title: 'Youtube Thumbnail',
    desc: 'Thumbnail yang bisa di sesuaikan dengan vibe dan kemauan klien.',
    tag: 'Graphics Design',
    thumb: graphicsThumbnail,
  },
  {
    id: 'g-5',
    category: 'graphics',
    title: 'Instagram Post',
    desc: 'Poster untuk kebutuhan Promosi atau Sekedar konten di Instagram.',
    tag: 'Graphics Design',
    thumb: graphicsPoster,
  },
  {
    id: 'g-6',
    category: 'graphics',
    title: 'More Designs',
    desc: 'Semua hasil desain selain yang disebut diatas.',
    tag: 'Graphics Design',
    thumb: graphicsOverlay,
  },
  // EDITING
  {
    id: 'e-1',
    category: 'editing',
    title: 'Custom Edit',
    desc: 'Montage pendek dengan beat-synced cuts, dengan effects dan lain sebagainya sesuai request klien.',
    tag: 'Video Editing',
    thumb: editingHighlight,
  },
  {
    id: 'e-2',
    category: 'editing',
    title: 'Anime Movie Clip / AMV / PMV',
    desc: 'MV untuk Media TikTok atau Youtube atau Instagram dengan effects, teks dinamis, serta medianya sendiri.',
    tag: 'Video Editing',
    thumb: editingAmv,
  },
  {
    id: 'e-3',
    category: 'editing',
    title: 'Motion Graphics',
    desc: 'Music video lirik dengan animasi tipografi serta Gerakan geometri yang anggun dan menarik.',
    tag: 'Video Editing',
    thumb: editingMotion,
  },
  {
    id: 'e-4',
    category: 'editing',
    title: 'Lyrics MV',
    desc: 'Music video lirik dengan animasi tipografi disertai dengan Motion Graphics dan Art dari klien.',
    tag: 'Video Editing',
    thumb: lyricsMV,
  },
  {
    id: 'e-5',
    category: 'editing',
    title: 'More Video Editing Samples',
    desc: 'Varian hasil video editing lainnya.',
    tag: 'Video Editing',
    thumb: editingHighlight,
  },
  // PHOTO
  {
    id: 'p-1',
    category: 'photo',
    title: 'Cosplay Photography',
    desc: 'Foto konsep dengan tema karakter atau cosplay dengan Editing yang menyesuaikan vibe karakter.',
    tag: 'Photography',
    thumb: photoPortrait,
  },
  {
    id: 'p-2',
    category: 'photo',
    title: 'Wedding Photography',
    desc: 'Foto dokumentasi acara pernikahan dengan style candid dan dramatis serta formal.',
    tag: 'Photography',
    thumb: photoEvents,
  },
  {
    id: 'p-3',
    category: 'photo',
    title: 'Graduation Photography',
    desc: 'Foto dokumentasi acara wisuda dengan style candid dan dramatis serta formal.',
    tag: 'Photography',
    thumb: photoEvents,
  },
  {
    id: 'p-4',
    category: 'photo',
    title: 'Big Events Documentation',
    desc: 'Foto dokumentasi acara besar seperti konser, lomba, atau acara kampus.',
    tag: 'Photography',
    thumb: photoEvents,
  },
  {
    id: 'p-5',
    category: 'photo',
    title: 'More Photography Samples',
    desc: 'Foto dengan berbagai konsep dan tema lainnya.',
    tag: 'Photography',
    thumb: photoPortrait,
  },
]

/**
 * Gallery detail per work (yang muncul di bawah slider waktu diklik)
 * Silakan ganti judul atau thumb di sini dengan karya asli.
 */
const workGalleries = {
  'g-1': [
    { id: 'g-1-1', title: 'Twitch stream banner', thumb: graphicsBanner },
    { id: 'g-1-2', title: 'YouTube stream banner', thumb: graphicsBanner },
    { id: 'g-1-3', title: 'Starting soon screen', thumb: graphicsBanner },
    { id: 'g-1-4', title: 'BRB screen', thumb: graphicsBanner },
  ],
  'g-2': [
    { id: 'g-2-1', title: 'Warm color variant', thumb: graphicsPoster },
    { id: 'g-2-2', title: 'Cool color variant', thumb: graphicsPoster },
    { id: 'g-2-3', title: 'Texture heavy version', thumb: graphicsPoster },
    { id: 'g-2-4', title: 'Minimalist version', thumb: graphicsPoster },
  ],
  'g-3': [
    { id: 'g-3-1', title: 'In-game overlay', thumb: graphicsOverlay },
    { id: 'g-3-2', title: 'Chat overlay', thumb: graphicsOverlay },
    { id: 'g-3-3', title: 'Alert banner', thumb: graphicsOverlay },
    { id: 'g-3-4', title: 'Transition frame', thumb: graphicsOverlay },
  ],
  'g-4': [
    { id: 'g-4-1', title: 'Gameplay thumbnail', thumb: graphicsThumbnail },
    { id: 'g-4-2', title: 'Podcast thumbnail', thumb: graphicsThumbnail },
    { id: 'g-4-3', title: 'Announcement thumbnail', thumb: graphicsThumbnail },
  ],
  'g-5': [
    { id: 'g-5-1', title: 'Carousel post', thumb: graphicsPoster },
    { id: 'g-5-2', title: 'Single post', thumb: graphicsPoster },
    { id: 'g-5-3', title: 'Story cover', thumb: graphicsPoster },
  ],
  'g-6': [
    { id: 'g-6-1', title: 'Extra overlay A', thumb: graphicsOverlay },
    { id: 'g-6-2', title: 'Extra overlay B', thumb: graphicsOverlay },
    { id: 'g-6-3', title: 'Pattern experiments', thumb: graphicsOverlay },
  ],

  // EDITING & PHOTO
  'e-1': [
    { id: 'e-1-1', title: 'Ranked montage', thumb: editingHighlight },
    { id: 'e-1-2', title: 'Tournament highlight', thumb: editingHighlight },
  ],
  'e-2': [
    { id: 'e-2-1', title: 'TikTok clip', thumb: editingMotion },
    { id: 'e-2-2', title: 'YouTube Shorts', thumb: editingMotion },
  ],
  'e-3': [
    { id: 'e-3-1', title: 'Lyric animation A', thumb: editingMotion },
    { id: 'e-3-2', title: 'Lyric animation B', thumb: editingMotion },
  ],
  'e-4': [
    { id: 'e-4-1', title: 'Lyric animation C', thumb: editingMotion },
    { id: 'e-4-2', title: 'Lyric animation D', thumb: editingMotion },
  ],
  'e-5': [
    { id: 'e-5-1', title: 'Alternate cut', thumb: editingHighlight },
    { id: 'e-5-2', title: 'Trailer cut', thumb: editingHighlight },
  ],
  'p-1': [
    { id: 'p-1-1', title: 'Street corner', thumb: photoPortrait },
    { id: 'p-1-2', title: 'Crosswalk', thumb: photoPortrait },
  ],
  'p-2': [
    { id: 'p-2-1', title: 'Character shoot A', thumb: photoEvents },
    { id: 'p-2-2', title: 'Character shoot B', thumb: photoEvents },
  ],
  'p-3': [
    { id: 'p-3-1', title: 'Cover option 1', thumb: photoEvents },
    { id: 'p-3-2', title: 'Cover option 2', thumb: photoEvents },
  ],
  'p-4': [
    { id: 'p-4-1', title: 'Ceremony', thumb: photoEvents },
    { id: 'p-4-2', title: 'Crowd shot', thumb: photoEvents },
  ],
  'p-5': [
    { id: 'p-5-1', title: 'Portrait mix', thumb: photoPortrait },
    { id: 'p-5-2', title: 'Moodboard set', thumb: photoPortrait },
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
  return (workGalleries[selectedWork.value.id] || []).map((item) => ({
    ...item,
    thumb: item.thumb || selectedWork.value.thumb,
  }))
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

// ganti kategori + reset slider & tutup gallery
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

        <div v-inview class="portfolio-plan-row">
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
              <li>Style dan color grading bisa disesuaikan karakter atau brand kamu.</li>
              <li>File akhir siap pakai di social media atau platform streaming.</li>
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
        <div v-inview class="portfolio-gallery-header portfolio-head-grid">
          <div>
            <h2 class="portfolio-wide-title">
              <strong>{{ activeCategoryData?.name }}</strong>
            </h2>
          </div>
          <p class="portfolio-wide-text">
            Koleksi beberapa karya pilihan di kategori
            <strong>{{ activeCategoryData?.name }}</strong
            >. Mulai dari personal project sampai commission untuk klien, semua digarap dengan fokus
            di mood, warna, dan storytelling visual.
          </p>
        </div>

        <!-- SLIDER -->
        <transition name="swap" mode="out-in">
          <div v-inview :key="activeCategory" class="portfolio-carousel">
            <div class="portfolio-carousel-controls">
              <button
                type="button"
                class="portfolio-carousel-arrow"
                aria-label="Previous"
                @click="handlePrevClick"
              >
                &lsaquo;
              </button>
              <button
                type="button"
                class="portfolio-carousel-arrow"
                aria-label="Next"
                @click="handleNextClick"
              >
                &rsaquo;
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
                  :style="{ background: `url(${work.thumb}) center / cover no-repeat` }"
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
        </transition>

        <!-- GALLERY DETAIL DI BAWAH SLIDER (kayak Works of Artists) -->
        <transition name="gallery" mode="out-in">
          <section
            v-if="selectedWork"
            v-inview
            :key="selectedWork?.id || 'none'"
            class="portfolio-work-gallery"
          >
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
                  :style="{ background: `url(${item.thumb}) center / cover no-repeat` }"
                ></div>
                <div class="portfolio-work-gallery-label">
                  {{ item.title }}
                </div>
              </article>
            </div>
          </section>
        </transition>

        <!-- CTA BANNER -->
        <div v-inview class="portfolio-cta-banner">
          <div class="portfolio-cta-inner">
            <h3 class="portfolio-cta-title">
              Siap bikin visual baru buat brand atau project kamu?
            </h3>
            <p class="portfolio-cta-text">
              Ceritain pendek aja idemu, nanti kita bisa bahas bareng konsep, mood, dan style yang
              paling cocok. No pressure, cuma ngobrol dulu.
            </p>

            <router-link to="/contact" class="portfolio-cta-button">
              <span class="portfolio-cta-button-label"> Let's talk! </span>
              <span class="portfolio-cta-button-icon"> + </span>
            </router-link>
          </div>

          <div class="portfolio-cta-gallery">
            <article v-for="item in showcaseWorks" :key="item.id" class="portfolio-cta-thumb-card">
              <div
                class="portfolio-cta-thumb"
                :class="`portfolio-cta-thumb--${item.category}`"
                :style="{ background: `url(${item.thumb}) center / cover no-repeat` }"
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
