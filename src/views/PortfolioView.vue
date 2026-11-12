<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

import PortfolioHero from '../components/portfolio/PortfolioHero.vue'
import PortfolioCarousel from '../components/portfolio/PortfolioCarousel.vue'
import PortfolioGallery from '../components/portfolio/PortfolioGallery.vue'
import PortfolioCTA from '../components/portfolio/PortfolioCTA.vue'
import PortfolioLightbox from '../components/portfolio/PortfolioLightbox.vue'

import { categories, allWorks as works, workGalleries, showcaseWorks } from '../data/projects'

const activeCategory = ref('graphics')
const activeIndex = ref(0)
const selectedWorkId = ref(null)
const showGallery = ref(false)
const activeGalleryItem = ref(null)
const modalZoomLevel = ref(100)
const modalZoomed = ref(false)
const isPanning = ref(false)
const panOffset = ref({ x: 0, y: 0 })
const fitMode = ref('contain')
const zoomPresets = [100, 125, 150, 175, 200, 250, 300]
const keyHandler = (e) => {
  if (e.key === 'Escape' && activeGalleryItem.value) {
    closeGalleryModal()
  }
}
let startX = 0
let startY = 0

const activeCategoryData = computed(() => categories.find((cat) => cat.id === activeCategory.value))
const filteredWorks = computed(() => works.filter((w) => w.category === activeCategory.value))
const selectedWork = computed(() =>
  showGallery.value
    ? filteredWorks.value.find((w) => w.id === selectedWorkId.value) ||
      filteredWorks.value[activeIndex.value] ||
      filteredWorks.value[0]
    : null,
)
const selectedGallery = computed(
  () =>
    (selectedWork.value && workGalleries[selectedWork.value.id]) ||
    workGalleries[filteredWorks.value[0]?.id] ||
    [],
)

const setCategory = (id) => {
  activeCategory.value = id
}

const selectWork = (idx) => {
  activeIndex.value = idx
  selectedWorkId.value = filteredWorks.value[idx]?.id || null
  showGallery.value = true
}

const openGalleryForWork = (work, idx) => {
  selectWork(idx)
}

// modal helpers
const lockBodyScroll = () => {
  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'
}
const unlockBodyScroll = () => {
  document.documentElement.style.overflow = ''
  document.body.style.overflow = ''
}

const openGalleryModal = (item) => {
  activeGalleryItem.value = item
  modalZoomLevel.value = 100
  modalZoomed.value = false
  panOffset.value = { x: 0, y: 0 }
  lockBodyScroll()
}

const closeGalleryModal = () => {
  activeGalleryItem.value = null
  panOffset.value = { x: 0, y: 0 }
  unlockBodyScroll()
}

const setZoom = (level) => {
  modalZoomLevel.value = level
  modalZoomed.value = level !== 100
  if (level === 100) {
    panOffset.value = { x: 0, y: 0 }
  }
}

const toggleFit = (mode) => {
  fitMode.value = mode
}

const handleDoubleZoom = () => {
  const idx = zoomPresets.indexOf(modalZoomLevel.value)
  const next = zoomPresets[(idx + 1) % zoomPresets.length]
  setZoom(next)
}

const startPan = (event) => {
  if (!modalZoomed.value) return
  isPanning.value = true
  startX = event.clientX - panOffset.value.x
  startY = event.clientY - panOffset.value.y
}

const pan = (event) => {
  if (!isPanning.value) return
  panOffset.value = {
    x: event.clientX - startX,
    y: event.clientY - startY,
  }
}

const stopPan = () => {
  isPanning.value = false
}

onMounted(() => {
  window.addEventListener('keydown', keyHandler)
  unlockBodyScroll()
})

onUnmounted(() => {
  unlockBodyScroll()
  window.removeEventListener('keydown', keyHandler)
})

watch(filteredWorks, () => {
  activeIndex.value = 0
  selectedWorkId.value = null
  showGallery.value = false
  unlockBodyScroll()
})
</script>

<template>
  <div class="page bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
    <PortfolioHero
      :categories="categories"
      :active-category="activeCategory"
      :set-category="setCategory"
    />

    <PortfolioCarousel
      :works="filteredWorks"
      :active-category="activeCategory"
      :active-index="activeIndex"
      @select-work="openGalleryForWork"
    />

    <div class="border-b border-[#353A42]/60 bg-[#0B0D10] py-12">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div class="space-y-1">
            <span class="font-mono text-xs uppercase tracking-widest text-[#EF4B42]">03 // ACTIVE DIRECTORY</span>
            <h3 class="text-2xl font-normal text-[#F0F0EB] font-serif">
              {{
                showGallery && selectedWork
                  ? `Archive Gallery: ${selectedWork.title}`
                  : 'Select an archive card above to reveal full media'
              }}
            </h3>
          </div>
          <p class="font-mono text-xs text-[#A5ABB4]">
            Click any entry to open pan & zoom viewer
          </p>
        </div>

        <PortfolioGallery
          v-if="showGallery && selectedWork"
          :active-category="activeCategory"
          :active-category-data="activeCategoryData"
          :selected-work="selectedWork"
          :gallery="selectedGallery"
          @open-modal="openGalleryModal"
          @close-gallery="
            () => {
              selectedWorkId = null
              showGallery = false
            }
          "
          @select-work="selectWork"
        />

        <div
          v-else
          class="rounded-sm border border-[#353A42] bg-[#181B20] p-10 text-center font-mono text-xs text-[#A5ABB4] space-y-2"
        >
          <div class="text-[#EF4B42] text-sm">SELECT AN ARCHIVE ENTRY</div>
          <p>Click on any showcase card in the carousel above to expand the full collection.</p>
        </div>
      </div>
    </div>

    <PortfolioCTA :showcase-works="showcaseWorks" />

    <PortfolioLightbox
      :item="activeGalleryItem"
      :zoom-level="modalZoomLevel"
      :zoomed="modalZoomed"
      :is-panning="isPanning"
      :pan-offset="panOffset"
      :fit-mode="fitMode"
      @close="closeGalleryModal"
      @set-zoom="setZoom"
      @double-zoom="handleDoubleZoom"
      @toggle-fit="toggleFit"
      @start-pan="startPan"
      @pan="pan"
      @stop-pan="stopPan"
    />
  </div>
</template>
