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
  <section class="section-shell bg-slate-50 dark:bg-slate-900">
    <Transition name="fade-up" appear>
      <div class="section-container">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
          <div>
            <p class="text-xs uppercase tracking-[0.32em] text-teal-600">showcase</p>
            <h2 class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100">
              {{
                activeCategory === 'graphics'
                  ? 'Graphics Design'
                  : activeCategory === 'editing'
                    ? 'Editing'
                    : 'Photography'
              }}
            </h2>
          </div>
        </div>

        <transition name="swap" mode="out-in">
          <div v-inview :key="activeCategory" class="relative">
            <div
              class="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-2 md:px-6"
            >
              <button
                type="button"
                class="pointer-events-auto w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-100 hover:-translate-y-px hover:shadow-xl transition"
                aria-label="Previous"
                @click="move(-1)"
              >
                &lsaquo;
              </button>
              <button
                type="button"
                class="pointer-events-auto w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-100 hover:-translate-y-px hover:shadow-xl transition"
                aria-label="Next"
                @click="move(1)"
              >
                &rsaquo;
              </button>
            </div>

            <div class="flex gap-4 justify-center items-stretch px-2 pb-5 md:px-0 overflow-hidden">
              <article
                v-for="slot in displayed"
                :key="slot.work.id"
                :id="`work-card-${slot.idx}`"
                class="shrink-0 rounded-[18px] bg-white dark:bg-slate-900 flex flex-col overflow-hidden min-w-[360px] max-w-[360px] h-[380px] transition snap-start border border-slate-200 dark:border-slate-700 shadow-[0_14px_36px_rgba(0,0,0,0.08)] dark:shadow-[0_14px_36px_rgba(0,0,0,0.35)]"
                :class="[
                  slot.active
                    ? 'scale-100 opacity-100 ring-2 ring-teal-400/60 shadow-[0_16px_42px_rgba(20,184,166,0.16)]'
                    : 'scale-95 opacity-80 hover:scale-100',
                ]"
                role="button"
                tabindex="0"
                @click="emit('select-work', slot.work, slot.idx)"
                @keydown.enter.prevent="emit('select-work', slot.work, slot.idx)"
              >
                <div
                  class="w-full aspect-video bg-cover bg-center"
                  :style="{ background: `url(${slot.work.thumb}) center / cover no-repeat` }"
                ></div>

                <div class="p-4 flex flex-col gap-2">
                  <span
                    class="inline-flex items-center rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.12em] bg-teal-50 text-teal-700 border border-teal-100 dark:bg-teal-900/30 dark:text-teal-200 dark:border-teal-700/60"
                  >
                    {{ slot.work.tag }}
                  </span>
                  <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                    {{ slot.work.title }}
                  </h3>
                  <p class="text-sm text-slate-600 dark:text-slate-300 leading-6">
                    {{ slot.work.desc }}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </transition>
      </div>
    </Transition>
  </section>
</template>
