<script setup>
import { computed } from 'vue'

const props = defineProps({
  item: Object,
  zoomLevel: Number,
  zoomed: Boolean,
  isPanning: Boolean,
  fitMode: {
    type: String,
    default: 'contain',
  },
  panOffset: {
    type: Object,
    default: () => ({ x: 0, y: 0 }),
  },
})

const emit = defineEmits([
  'close',
  'set-zoom',
  'start-pan',
  'pan',
  'stop-pan',
  'double-zoom',
  'toggle-fit',
])

const zoomLevels = [100, 125, 150, 175, 200, 250, 300]

const imageStyle = computed(() => {
  const translate = props.zoomed ? props.panOffset : { x: 0, y: 0 }
  const scale = props.zoomLevel / 100

  return {
    backgroundImage: `url(${props.item?.thumb ?? ''})`,
    transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
    cursor: props.zoomed ? (props.isPanning ? 'grabbing' : 'grab') : 'default',
    transition: props.isPanning ? 'none' : 'transform 120ms ease-out',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: props.fitMode === 'contain' ? 'contain' : 'cover',
  }
})
</script>

<template>
  <transition name="modal-fade">
    <div
      v-if="item"
      class="portfolio-gallery-modal fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 md:p-6"
      @click.self="emit('close')"
    >
      <div
        class="portfolio-gallery-modal-box w-full max-w-7xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200/70"
        role="dialog"
        aria-modal="true"
      >
        <header class="flex items-start justify-between gap-4 px-4 md:px-5 py-4 border-b border-slate-200">
          <div class="space-y-1">
            <p class="text-xs uppercase tracking-[0.25em] text-teal-600">
              {{ item.tag || 'Gallery' }}
            </p>
            <h3 class="text-2xl font-bold text-slate-900">
              {{ item.title }}
            </h3>
          </div>
          <button
            type="button"
            class="rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
            @click="emit('close')"
          >
            Tutup
          </button>
        </header>

        <div class="portfolio-gallery-modal-body bg-white px-3 md:px-4 pb-4">
          <iframe
            v-if="item.embedUrl"
            class="w-full h-[70vh] rounded-xl overflow-hidden"
            :src="`${item.embedUrl}/embed`"
            allowfullscreen
            allowtransparency="true"
            scrolling="no"
            frameborder="0"
          ></iframe>

          <div
            v-else
            class="relative w-full h-[70vh] min-h-[420px] rounded-xl overflow-hidden"
            :style="imageStyle"
            @mousedown="emit('start-pan', $event)"
            @mousemove="emit('pan', $event)"
            @mouseup="emit('stop-pan')"
            @mouseleave="emit('stop-pan')"
            @dblclick.stop="emit('double-zoom')"
          ></div>
        </div>

        <div
          class="portfolio-gallery-modal-zoom flex flex-wrap items-center gap-2 px-4 md:px-5 py-3 border-t border-slate-200 bg-white"
        >
          <span class="text-sm text-slate-700">Zoom:</span>
          <button
            v-for="level in zoomLevels"
            :key="level"
            class="portfolio-gallery-zoom-btn rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-800 hover:bg-slate-100 transition"
            :class="{ 'bg-teal-50 border-teal-400/60 text-teal-700': zoomLevel === level }"
            type="button"
            @click="emit('set-zoom', level)"
          >
            {{ level }}%
          </button>
          <div class="ml-auto flex items-center gap-2">
            <span class="text-sm text-slate-700">Fit mode:</span>
            <button
              type="button"
              class="rounded-full border px-3 py-1 text-sm transition"
              :class="props.fitMode === 'contain' ? 'border-teal-400/60 bg-teal-50 text-teal-700' : 'border-slate-200 text-slate-700 hover:bg-slate-100'"
              @click="emit('toggle-fit', 'contain')"
            >
              Fit
            </button>
            <button
              type="button"
              class="rounded-full border px-3 py-1 text-sm transition"
              :class="props.fitMode === 'cover' ? 'border-teal-400/60 bg-teal-50 text-teal-700' : 'border-slate-200 text-slate-700 hover:bg-slate-100'"
              @click="emit('toggle-fit', 'cover')"
            >
              Fill
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
