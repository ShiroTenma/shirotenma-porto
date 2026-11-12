<script setup>
import { computed, onMounted, onUnmounted } from 'vue'

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

const handleKeydown = (e) => {
  if (e.key === 'Escape' && props.item) {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

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
      class="portfolio-gallery-modal fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 md:p-6"
      @click.self="emit('close')"
    >
      <div
        class="portfolio-gallery-modal-box w-full max-w-7xl bg-[#181B20] text-[#F0F0EB] rounded-sm shadow-2xl overflow-hidden border border-[#353A42]"
        role="dialog"
        aria-modal="true"
      >
        <header class="flex items-start justify-between gap-4 px-4 md:px-6 py-4 border-b border-[#353A42]">
          <div class="space-y-1">
            <p class="font-mono text-xs uppercase tracking-widest text-[#EF4B42]">
              {{ item.tag || 'ARCHIVE SELECTION' }}
            </p>
            <h3 class="text-2xl font-normal text-[#F0F0EB] font-serif">
              {{ item.title }}
            </h3>
          </div>
          <button
            type="button"
            class="inline-flex min-h-[44px] items-center gap-1.5 rounded-sm border border-[#353A42] bg-[#0B0D10] px-4 py-2 font-mono text-xs font-semibold text-[#F0F0EB] hover:border-[#EF4B42] hover:text-[#EF4B42] transition"
            @click="emit('close')"
          >
            <span>CLOSE</span>
            <span>×</span>
          </button>
        </header>

        <div class="portfolio-gallery-modal-body bg-[#0B0D10] p-3 md:p-5">
          <iframe
            v-if="item.embedUrl"
            class="w-full h-[70vh] rounded-sm overflow-hidden border border-[#353A42]/50"
            :src="`${item.embedUrl}/embed`"
            allowfullscreen
            allowtransparency="true"
            scrolling="no"
            frameborder="0"
          ></iframe>

          <div
            v-else
            class="relative w-full h-[70vh] min-h-[420px] rounded-sm overflow-hidden border border-[#353A42]/50 bg-[#0B0D10]"
            :style="imageStyle"
            @mousedown="emit('start-pan', $event)"
            @mousemove="emit('pan', $event)"
            @mouseup="emit('stop-pan')"
            @mouseleave="emit('stop-pan')"
            @dblclick.stop="emit('double-zoom')"
          ></div>
        </div>

        <div
          class="portfolio-gallery-modal-zoom flex flex-wrap items-center gap-2.5 px-4 md:px-6 py-3.5 border-t border-[#353A42] bg-[#181B20] font-mono text-xs"
        >
          <span class="text-[#A5ABB4] text-xs">ZOOM:</span>
          <button
            v-for="level in zoomLevels"
            :key="level"
            class="rounded-sm border px-3 py-1 text-xs transition"
            :class="
              zoomLevel === level
                ? 'bg-[#EF4B42] border-[#EF4B42] text-white font-bold'
                : 'border-[#353A42] bg-[#0B0D10] text-[#A5ABB4] hover:border-[#F0F0EB] hover:text-[#F0F0EB]'
            "
            type="button"
            @click="emit('set-zoom', level)"
          >
            {{ level }}%
          </button>

          <div class="ml-auto flex items-center gap-2">
            <span class="text-[#A5ABB4] text-xs">FIT:</span>
            <button
              type="button"
              class="rounded-sm border px-3 py-1 text-xs transition"
              :class="
                props.fitMode === 'contain'
                  ? 'bg-[#EF4B42] border-[#EF4B42] text-white font-bold'
                  : 'border-[#353A42] bg-[#0B0D10] text-[#A5ABB4] hover:border-[#F0F0EB] hover:text-[#F0F0EB]'
              "
              @click="emit('toggle-fit', 'contain')"
            >
              CONTAIN
            </button>
            <button
              type="button"
              class="rounded-sm border px-3 py-1 text-xs transition"
              :class="
                props.fitMode === 'cover'
                  ? 'bg-[#EF4B42] border-[#EF4B42] text-white font-bold'
                  : 'border-[#353A42] bg-[#0B0D10] text-[#A5ABB4] hover:border-[#F0F0EB] hover:text-[#F0F0EB]'
              "
              @click="emit('toggle-fit', 'cover')"
            >
              COVER
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
