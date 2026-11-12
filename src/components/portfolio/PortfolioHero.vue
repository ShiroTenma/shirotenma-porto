<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  categories: Array,
  activeCategory: String,
  setCategory: Function,
})
</script>

<template>
  <section class="border-b border-[#353A42]/60 bg-[#0B0D10] pb-14 pt-10 sm:pt-14">
    <Transition name="fade-up" appear>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 text-[#F0F0EB]">
        <div class="mb-8 space-y-3">
          <div class="inline-flex items-center gap-2 rounded-sm border border-[#353A42] bg-[#181B20] px-3.5 py-1 font-mono text-xs font-medium text-[#A5ABB4]">
            <span class="inline-block h-2 w-2 rounded-full bg-[#EF4B42]"></span>
            <span>01 // ARCHIVE CATEGORIES</span>
          </div>
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#F0F0EB]">
            Creative Works Archive
          </h1>
          <p class="text-sm sm:text-base text-[#A5ABB4] leading-relaxed max-w-2xl font-sans">
            Curated archive across Graphic Design, Motion & Video Editing, and Event/Cosplay Photography. Filter below to inspect dedicated works.
          </p>
        </div>

        <div v-inview class="grid gap-6 md:grid-cols-3">
          <article
            v-for="(cat, index) in categories"
            :key="cat.id"
            class="group relative overflow-hidden rounded-sm border p-5 sm:p-6 flex flex-col justify-between transition duration-200 cursor-pointer"
            :class="[
              activeCategory === cat.id
                ? 'border-[#EF4B42] bg-[#181B20] shadow-xl shadow-[#EF4B42]/10 ring-1 ring-[#EF4B42]/50'
                : 'border-[#353A42] bg-[#181B20]/60 hover:border-[#F0F0EB]/60 hover:bg-[#181B20]',
              index === 1 ? 'md:-translate-y-1' : '',
            ]"
            role="button"
            tabindex="0"
            @click="setCategory(cat.id)"
            @keydown.enter.prevent="setCategory(cat.id)"
          >
            <div class="space-y-4">
              <div
                v-if="cat.heroImage"
                class="w-full aspect-16/10 rounded-xs bg-center bg-cover border border-[#353A42]/50 mb-2 overflow-hidden"
                :style="{ backgroundImage: `url(${cat.heroImage})` }"
              ></div>

              <div class="flex items-center justify-between">
                <span
                  class="font-mono text-xs tracking-wider uppercase font-semibold"
                  :class="activeCategory === cat.id ? 'text-[#EF4B42]' : 'text-[#A5ABB4]'"
                >
                  {{ cat.badge }}
                </span>
                <span class="font-mono text-xs text-[#A5ABB4]/50">0{{ index + 1 }}</span>
              </div>

              <h2 class="text-2xl font-normal text-[#F0F0EB] font-serif leading-snug">
                {{ cat.name }}
              </h2>

              <p class="text-xs sm:text-sm text-[#A5ABB4] leading-relaxed font-sans">
                {{ cat.priceText }}
              </p>

              <ul class="space-y-1.5 text-xs text-[#D4D8DE] font-mono border-t border-[#353A42]/50 pt-3">
                <li class="flex items-start gap-2">
                  <span class="text-[#EF4B42]">›</span>
                  <span>{{ cat.highlight }}</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-[#EF4B42]">›</span>
                  <span>Color grading & typography disesuaikan karakter.</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              class="mt-6 inline-flex h-11 items-center justify-center rounded-sm font-mono text-xs font-semibold tracking-wider transition active:scale-95"
              :class="
                activeCategory === cat.id
                  ? 'bg-[#EF4B42] text-white hover:bg-[#EF4B42]/90 shadow-md shadow-[#EF4B42]/20'
                  : 'border border-[#353A42] bg-[#0B0D10] text-[#F0F0EB] hover:border-[#EF4B42] hover:text-[#EF4B42]'
              "
              @click.stop="setCategory(cat.id)"
            >
              <span>{{ activeCategory === cat.id ? 'ACTIVE ARCHIVE' : 'INSPECT CATEGORY' }}</span>
              <span class="ml-1.5">↗</span>
            </button>
          </article>
        </div>
      </div>
    </Transition>
  </section>
</template>
