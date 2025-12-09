<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

import graphicsBanner from '../assets/images/works/graphics-banner.png'
import graphicsPoster from '../assets/images/works/graphics-poster.png'
import graphicsOverlay from '../assets/images/works/graphics-overlay.jpg'
import graphicsThumbnail from '../assets/images/works/graphics-thumbnail.png'
import graphicsAllBanners from '../assets/images/works/graphics-all-banners.jpg'
import graphicsManipulation from '../assets/images/works/graphics-manipulation.jpg'
import graphicsYoutubeBanner from '../assets/images/works/graphics-youtube-banner.jpg'
import graphicsTwitterBanner from '../assets/images/works/graphics-twitter-banner.jpg'
import posterEvent from '../assets/images/works/poster-event.jpg'
import posterCharacter from '../assets/images/works/poster-mock-character.jpg'
import posterUkm from '../assets/images/works/poster-ukm.jpg'
import posterMerchandise from '../assets/images/works/poster-ukm-merchandise.jpg'
import flyerClient from '../assets/images/works/flyer-promotion.jpg'
import bannerUkm from '../assets/images/works/standing-banner-ukm.jpg'
import graphicsMore from '../assets/images/works/graphics-more-samples.jpg'

import editingHighlight from '../assets/images/works/editing-highlight.jpg'
import editingMotion from '../assets/images/works/editing-motion.png'
import lyricsMV from '../assets/images/hero/showcase-highlight.png'
import editingAmv from '../assets/images/works/editing-amv.jpg'

import photoPortrait from '../assets/images/works/photo-portrait.jpg'
import photoEvents from '../assets/images/works/photo-events.jpg'
import photoBigEvent from '../assets/images/works/photo-events-ranking1.JPG'
import photoGraduation from '../assets/images/works/photo-graduation.jpg'
import photoMore from '../assets/images/works/photo-more-samples.jpg'

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
    title: 'Digital Poster and Flyer',
    desc: 'Poster untuk kebutuhan Promosi atau Sekedar konten di Instagram.',
    tag: 'Graphics Design',
    thumb: graphicsPoster,
  },
  {
    id: 'g-3',
    category: 'graphics',
    title: 'More Designs',
    desc: 'Semua hasil desain selain yang disebut diatas.',
    tag: 'Graphics Design',
    thumb: graphicsMore,
  },

  // EDITING
  {
    id: 'e-1',
    category: 'editing',
    title: 'Highlights Video',
    desc: 'Highlight dari beberapa Events.',
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
    title: 'Graduation Photography',
    desc: 'Foto dokumentasi acara wisuda dengan style candid dan dramatis serta formal.',
    tag: 'Photography',
    thumb: photoGraduation,
  },
  {
    id: 'p-3',
    category: 'photo',
    title: 'Big Events Documentation',
    desc: 'Foto dokumentasi acara besar seperti konser, lomba, atau acara kampus.',
    tag: 'Photography',
    thumb: photoBigEvent,
  },
  {
    id: 'p-4',
    category: 'photo',
    title: 'More Photography Samples',
    desc: 'Foto dengan berbagai konsep dan tema lainnya.',
    tag: 'Photography',
    thumb: photoMore,
  },
]

/**
 * Zy detail per work (yang muncul di bawah slider waktu diklik)
 * Silakan ganti judul atau thumb di sini dengan karya asli.
 */
const workGalleries = {
  'g-1': [
    { id: 'g-1-1', title: 'osu!profile banners', thumb: graphicsAllBanners },
    { id: 'g-1-2', title: 'YouTube banner', thumb: graphicsYoutubeBanner },
    { id: 'g-1-3', title: 'Twitter Banner', thumb: graphicsTwitterBanner },
  ],
  'g-2': [
    { id: 'g-2-1', title: 'Event Poster', thumb: posterEvent },
    { id: 'g-2-2', title: 'Mock Character Poster', thumb: posterCharacter },
    { id: 'g-2-3', title: 'Poster Promosi untuk UKM', thumb: posterUkm },
    { id: 'g-2-4', title: 'Poster Promosi Merchandise', thumb: posterMerchandise },
    { id: 'g-2-4', title: 'Flyer Promosi untuk Klien', thumb: flyerClient },
    { id: 'g-2-4', title: 'Standing Banner Promosi UKM', thumb: bannerUkm },
  ],
  'g-3': [
    { id: 'g-3-1', title: 'Background osu!map Manipulation', thumb: graphicsManipulation },
    { id: 'g-3-2', title: 'Thumbnail Youtube', thumb: graphicsThumbnail },
    { id: 'g-3-3', title: 'osu!overlay', thumb: graphicsOverlay },
    { id: 'g-3-4', title: 'Instagram feed design', thumb: graphicsOverlay },
    { id: 'g-3-6', title: 'Instagram feed design 3x1', thumb: graphicsMore },
    { id: 'g-3-7', title: 'Venue 2D Design', thumb: graphicsMore },
    { id: 'g-3-8', title: 'Sticker Merchandise Design', thumb: graphicsMore },
    { id: 'g-3-9', title: 'UKM Sticker Invitation Design', thumb: graphicsMore },
    { id: 'g-3-10', title: 'Ticket Design', thumb: graphicsMore },
    { id: 'g-3-11', title: 'ID Card Design', thumb: graphicsMore },
    { id: 'g-3-12', title: 'Digital CV Design', thumb: graphicsMore },
    { id: 'g-3-13', title: 'Instagram Story Template Design', thumb: graphicsMore },
    { id: 'g-3-14', title: 'Custom Mousepad Design', thumb: graphicsMore },
    { id: 'g-3-15', title: 'Creative Instagram Story Design', thumb: graphicsMore },
  ],

  // EDITING & PHOTO
  'e-1': [
    { id: 'e-1-1', title: 'Ranked montage', thumb: editingHighlight },
    { id: 'e-1-2', title: 'Tournament highlight', thumb: editingHighlight },
  ],
  'e-2': [
    {
      id: 'e-2-embed-1',
      title: 'Instagram Reel 1',
      embedUrl: 'https://www.instagram.com/reel/DEfZRHhxUAV',
      thumb: editingMotion,
    },
    {
      id: 'e-2-embed-2',
      title: 'Instagram Reel 2',
      embedUrl: 'https://www.instagram.com/reel/DCowmxIxZls',
      thumb: editingMotion,
    },
  ],
  'e-3': [
    {
      id: 'e-3-embed-1',
      title: 'Instagram Reel 3',
      embedUrl: 'https://www.instagram.com/reel/C4aTnjTIece',
      thumb: editingMotion,
    },
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

const activeGalleryItem = ref(null)
const modalZoomed = ref(false)
const modalZoomLevel = ref(1.25)
const zoomLevels = [1, 1.25, 1.5, 1.75, 2]
const isPanning = ref(false)
const pan = ref({ x: 0, y: 0 })
let panStart = { x: 0, y: 0 }
const bodyScrollStack = ref(0)

const openGalleryForWork = (work, index) => {
  selectedWorkId.value = work.id
  scrollToIndex(index)
  pauseSlider()
}

const closeGallery = () => {
  selectedWorkId.value = null
  resetTimer()
}

const openGalleryModal = (item) => {
  activeGalleryItem.value = item
  modalZoomed.value = false
  modalZoomLevel.value = 1.25
  pan.value = { x: 0, y: 0 }
  lockBodyScroll()
}

const closeGalleryModal = () => {
  activeGalleryItem.value = null
  modalZoomed.value = false
  modalZoomLevel.value = 1.25
  pan.value = { x: 0, y: 0 }
  unlockBodyScroll()
}

const toggleZoom = () => {
  modalZoomed.value = !modalZoomed.value
  modalZoomLevel.value = modalZoomed.value ? 1.5 : 1.25
  if (!modalZoomed.value) {
    pan.value = { x: 0, y: 0 }
  }
}

const setZoom = (level) => {
  modalZoomLevel.value = level
  modalZoomed.value = level > 1
  if (level === 1) {
    pan.value = { x: 0, y: 0 }
  }
}

const lockBodyScroll = () => {
  bodyScrollStack.value += 1
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
}

const unlockBodyScroll = () => {
  bodyScrollStack.value = Math.max(0, bodyScrollStack.value - 1)
  if (bodyScrollStack.value === 0) {
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }
}

const getPoint = (e) => {
  if (e.touches && e.touches.length) {
    return { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }
  return { x: e.clientX, y: e.clientY }
}

const onPanStart = (e) => {
  if (!modalZoomed.value) return
  isPanning.value = true
  panStart = getPoint(e)
  window.addEventListener('mousemove', onPanMove)
  window.addEventListener('mouseup', onPanEnd)
  window.addEventListener('touchmove', onPanMove, { passive: false })
  window.addEventListener('touchend', onPanEnd)
}

const onPanMove = (e) => {
  if (!isPanning.value || !modalZoomed.value) return
  if (e.cancelable) e.preventDefault()
  const point = getPoint(e)
  const dx = point.x - panStart.x
  const dy = point.y - panStart.y
  pan.value = { x: pan.value.x + dx, y: pan.value.y + dy }
  panStart = point
}

const onPanEnd = () => {
  isPanning.value = false
  window.removeEventListener('mousemove', onPanMove)
  window.removeEventListener('mouseup', onPanEnd)
  window.removeEventListener('touchmove', onPanMove)
  window.removeEventListener('touchend', onPanEnd)
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
  unlockBodyScroll()
})

// kalau list card-nya berubah (ganti kategori)
watch(filteredWorks, () => {
  activeIndex.value = 0
  selectedWorkId.value = null
  requestAnimationFrame(() => {
    scrollToIndex(0)
  })
  resetTimer()
  unlockBodyScroll()
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
                  { 'portfolio-work-gallery-card--reel': item.embedUrl },
                ]"
                role="button"
                tabindex="0"
                @click="openGalleryModal(item)"
                @keydown.enter.prevent="openGalleryModal(item)"
              >
                <div v-if="item.embedUrl" class="portfolio-work-gallery-thumb">
                  <iframe
                    class="portfolio-work-gallery-embed"
                    :src="`${item.embedUrl}/embed`"
                    allowtransparency="true"
                    allowfullscreen
                    scrolling="no"
                    frameborder="0"
                  ></iframe>
                </div>
                <div
                  v-else
                  class="portfolio-work-gallery-thumb"
                  :style="{
                    backgroundImage: `url(${item.thumb || selectedWork?.thumb || ''})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }"
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

    <!-- LIGHTBOX GALLERY MODAL -->
    <transition name="modal-fade">
      <div v-if="activeGalleryItem" class="portfolio-gallery-modal" @click.self="closeGalleryModal">
        <div class="portfolio-gallery-modal-box" role="dialog" aria-modal="true">
          <header class="portfolio-gallery-modal-head">
            <div>
              <p class="portfolio-work-gallery-kicker">
                {{ activeGalleryItem.tag || activeCategoryData?.name || 'Gallery' }}
              </p>
              <h3 class="portfolio-work-gallery-title">{{ activeGalleryItem.title }}</h3>
            </div>
            <button type="button" class="portfolio-gallery-modal-close" @click="closeGalleryModal">
              Tutup
            </button>
          </header>

          <div class="portfolio-gallery-modal-body">
            <iframe
              v-if="activeGalleryItem.embedUrl"
              class="portfolio-gallery-embed"
              :src="`${activeGalleryItem.embedUrl}/embed`"
              allowtransparency="true"
              allowfullscreen
              scrolling="no"
              frameborder="0"
            ></iframe>
            <div
              v-else
              class="portfolio-gallery-modal-image"
              :class="{
                'portfolio-gallery-modal-image--zoom': modalZoomed,
                'portfolio-gallery-modal-image--dragging': isPanning,
              }"
              :style="{
                backgroundImage: `url(${activeGalleryItem.thumb || ''})`,
                '--modal-zoom-level': modalZoomLevel,
                transform: modalZoomed
                  ? `translate(${pan.x}px, ${pan.y}px) scale(${modalZoomLevel})`
                  : 'translate(0, 0) scale(1)',
              }"
              role="button"
              tabindex="0"
              @click="toggleZoom"
              @keydown.enter.prevent="toggleZoom"
              @mousedown.prevent="onPanStart"
              @touchstart.prevent="onPanStart"
            ></div>
          </div>

          <div
            v-if="activeGalleryItem && !activeGalleryItem.embedUrl"
            class="portfolio-gallery-modal-zoom"
          >
            <span>Zoom:</span>
            <button
              v-for="level in zoomLevels"
              :key="level"
              type="button"
              class="portfolio-gallery-zoom-btn"
              :class="{ 'portfolio-gallery-zoom-btn--active': modalZoomLevel === level }"
              @click="setZoom(level)"
            >
              {{ Math.round(level * 100) }}%
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
