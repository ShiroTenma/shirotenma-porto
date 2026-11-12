<script setup>
import { computed } from 'vue'

const props = defineProps({
  works: Array,
  activeCategory: String,
  activeIndex: Number,
})

const emit = defineEmits(['select-work'])

const move = (direction) => {
  if (!props.works?.length) return
  const next = (props.activeIndex + direction + props.works.length) % props.works.length
  emit('select-work', props.works[next], next)
}

const displayed = computed(() => {
  if (!props.works?.length) return []
  const len = props.works.length
  const arr = []
  for (let i = -1; i <= 1; i++) {
    const idx = (props.activeIndex + i + len) % len
    arr.push({ work: props.works[idx], idx, active: i === 0 })
  }
  return arr
})
</script>

<template>
  <section class="border-b border-[#353A42]/60 bg-[#0B0D10] py-12 sm:py-16">
    <Transition name="fade-up" appear>
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
          <div>
            <p class="font-mono text-xs uppercase tracking-widest text-[#EF4B42]">02 // SELECTED SHOWCASE</p>
            <h2 class="text-3xl sm:text-4xl font-normal text-[#F0F0EB] font-serif mt-1">
              {{
                activeCategory === 'graphics'
                  ? 'Graphics Design Showcase'
                  : activeCategory === 'editing'
                    ? 'Motion & Video Showcase'
                    : 'Photography Showcase'
              }}
            </h2>
          </div>
          <p class="font-mono text-xs text-[#A5ABB4]">SELECT A CARD TO REVEAL FULL GALLERY</p>
        </div>

        <transition name="swap" mode="out-in">
          <div v-inview :key="activeCategory" class="relative">
            <!-- Nav buttons -->
            <div
              class="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-1 md:px-4"
            >
              <button
                type="button"
                class="pointer-events-auto h-11 w-11 rounded-sm border border-[#353A42] bg-[#181B20]/90 shadow-xl flex items-center justify-center text-[#F0F0EB] hover:border-[#EF4B42] hover:text-[#EF4B42] transition backdrop-blur-sm"
                aria-label="Previous Showcase"
                @click="move(-1)"
              >
                <span class="font-mono text-lg font-bold">‹</span>
              </button>
              <button
                type="button"
                class="pointer-events-auto h-11 w-11 rounded-sm border border-[#353A42] bg-[#181B20]/90 shadow-xl flex items-center justify-center text-[#F0F0EB] hover:border-[#EF4B42] hover:text-[#EF4B42] transition backdrop-blur-sm"
                aria-label="Next Showcase"
                @click="move(1)"
              >
                <span class="font-mono text-lg font-bold">›</span>
              </button>
            </div>

            <div class="flex gap-6 justify-center items-stretch px-2 pb-5 md:px-0 overflow-hidden">
              <article
                v-for="slot in displayed"
                :key="slot.work.id"
                :id="`work-card-${slot.idx}`"
                class="shrink-0 rounded-sm bg-[#181B20] flex flex-col justify-between overflow-hidden w-full max-w-[380px] min-h-[400px] transition duration-300 border shadow-2xl"
                :class="[
                  slot.active
                    ? 'scale-100 opacity-100 border-[#EF4B42] ring-1 ring-[#EF4B42]/50 shadow-[#EF4B42]/10'
                    : 'scale-95 opacity-70 border-[#353A42] hover:opacity-100 hover:scale-100',
                ]"
                role="button"
                tabindex="0"
                @click="emit('select-work', slot.work, slot.idx)"
                @keydown.enter.prevent="emit('select-work', slot.work, slot.idx)"
              >
                <div>
                  <div
                    class="w-full aspect-16/10 bg-cover bg-center border-b border-[#353A42]/50"
                    :style="{ background: `url(${slot.work.thumb}) center / cover no-repeat` }"
                  ></div>

                  <div class="p-5 flex flex-col gap-2">
                    <span
                      class="inline-flex items-center w-fit font-mono text-[11px] uppercase tracking-wider text-[#EF4B42] font-semibold"
                    >
                      {{ slot.work.tag }}
                    </span>
                    <h3 class="text-xl font-normal text-[#F0F0EB] font-serif leading-snug">
                      {{ slot.work.title }}
                    </h3>
                    <p class="text-xs text-[#A5ABB4] leading-relaxed font-sans line-clamp-3">
                      {{ slot.work.desc }}
                    </p>
                  </div>
                </div>

                <div class="p-4 pt-3 border-t border-[#353A42]/50 flex items-center justify-between font-mono text-xs text-[#A5ABB4]">
                  <span>OPEN ARCHIVE</span>
                  <span class="text-[#EF4B42]">EXPLORE ↗</span>
                </div>
              </article>
            </div>
          </div>
        </transition>
      </div>
    </Transition>
  </section>
</template>
