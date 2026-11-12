<script setup>
import { computed } from 'vue'

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
  activeCategory: {
    type: String,
    default: '',
  },
  terms: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['select'])

const selectCat = (id) => emit('select', id)

const fallbackId = computed(() => props.categories?.[0]?.id || '')
const activeId = computed(() => props.activeCategory || fallbackId.value)
</script>

<template>
  <section class="border-b border-[#353A42]/60 bg-[#0B0D10] py-12 sm:py-16">
    <Transition name="fade-up" appear>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 space-y-8">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#353A42]/60">
          <div>
            <p class="font-mono text-xs uppercase tracking-widest text-[#EF4B42]">04 // POLICIES & GUIDELINES</p>
            <h2 class="text-3xl sm:text-4xl font-normal text-[#F0F0EB] font-serif mt-1">
              Terms & Information
            </h2>
          </div>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="cat in categories"
              :key="cat.id"
              type="button"
              class="px-3.5 py-1.5 rounded-sm font-mono text-xs font-semibold tracking-wider transition active:scale-95"
              :class="
                activeId === cat.id
                  ? 'bg-[#EF4B42] text-white shadow-md shadow-[#EF4B42]/20'
                  : 'border border-[#353A42] bg-[#181B20] text-[#A5ABB4] hover:border-[#F0F0EB] hover:text-[#F0F0EB]'
              "
              @click="selectCat(cat.id)"
            >
              {{ cat.label }}
            </button>
          </div>
        </div>

        <TransitionGroup
          v-if="terms[activeId]"
          name="stagger-card"
          tag="div"
          class="grid gap-6 md:grid-cols-2"
          appear
        >
          <article
            key="tos"
            class="rounded-sm bg-[#181B20] border border-[#353A42] p-6 space-y-4"
          >
            <div class="flex items-center justify-between pb-2 border-b border-[#353A42]/50">
              <h3 class="text-xl font-normal text-[#F0F0EB] font-serif">Terms of Service (ToS)</h3>
              <span class="font-mono text-[11px] text-[#EF4B42]">RULES // 01</span>
            </div>
            <ul class="space-y-2.5 text-xs sm:text-sm text-[#A5ABB4] leading-relaxed font-sans">
              <li v-for="item in terms[activeId].tos" :key="item" class="flex items-start gap-2">
                <span class="text-[#EF4B42] font-mono">›</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </article>

          <article
            key="rules"
            class="rounded-sm bg-[#181B20] border border-[#353A42] p-6 space-y-4"
          >
            <div class="flex items-center justify-between pb-2 border-b border-[#353A42]/50">
              <h3 class="text-xl font-normal text-[#F0F0EB] font-serif">Do's & Don'ts</h3>
              <span class="font-mono text-[11px] text-[#E8AD57]">LIMITS // 02</span>
            </div>
            <ul class="space-y-2.5 text-xs sm:text-sm text-[#A5ABB4] leading-relaxed font-sans">
              <li v-for="item in terms[activeId].rules" :key="item" class="flex items-start gap-2">
                <span class="text-[#E8AD57] font-mono">›</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </article>
        </TransitionGroup>
      </div>
    </Transition>
  </section>
</template>
