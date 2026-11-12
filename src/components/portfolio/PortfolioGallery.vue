<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  activeCategory: String,
  activeCategoryData: Object,
  selectedWork: Object,
  gallery: Array,
})

const emit = defineEmits(['open-modal', 'close-gallery', 'select-work'])
</script>

<template>
  <section
    class="border-b border-[#353A42]/60 bg-[#0B0D10] py-12 sm:py-16"
  >
    <Transition name="fade-up" appear>
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div v-inview class="grid gap-6 md:grid-cols-[1fr_1.2fr] items-center pb-8 border-b border-[#353A42]/50">
          <div>
            <span class="font-mono text-xs uppercase tracking-widest text-[#EF4B42]">03 // EXPANDED ARCHIVE</span>
            <h2 class="text-3xl sm:text-4xl font-normal text-[#F0F0EB] font-serif mt-1">
              {{ activeCategoryData?.name }}
            </h2>
          </div>
          <p class="text-sm text-[#A5ABB4] leading-relaxed font-sans">
            Curated archive of commissioned works and personal creative experiments in
            <strong class="text-[#F0F0EB] font-semibold">{{ activeCategoryData?.name }}</strong>.
            Click any entry below to inspect high-resolution media with interactive pan and zoom controls.
          </p>
        </div>

        <transition name="gallery" mode="out-in">
          <section v-if="selectedWork" v-inview :key="selectedWork?.id || 'none'" class="mt-8">
            <div class="rounded-sm border border-[#353A42] bg-[#181B20] p-5 sm:p-7">
              <div class="flex items-center justify-between mb-6 pb-4 border-b border-[#353A42]/50">
                <div>
                  <p class="font-mono text-xs uppercase tracking-wider text-[#EF4B42]">
                    ACTIVE SELECTION // {{ selectedWork.tag || activeCategoryData?.name }}
                  </p>
                  <h3 class="text-2xl font-normal text-[#F0F0EB] font-serif mt-1">
                    {{ selectedWork.title }}
                  </h3>
                </div>

                <button
                  type="button"
                  class="inline-flex min-h-[44px] items-center gap-2 rounded-sm border border-[#353A42] bg-[#0B0D10] px-4 py-2 font-mono text-xs font-semibold text-[#F0F0EB] hover:border-[#EF4B42] hover:text-[#EF4B42] transition"
                  @click="emit('close-gallery')"
                >
                  <span>CLOSE ARCHIVE</span>
                  <span>×</span>
                </button>
              </div>

              <div
                class="grid gap-4 sm:gap-6"
                :class="{
                  'md:grid-cols-2': activeCategory === 'editing',
                  'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3': activeCategory !== 'editing',
                }"
              >
                <article
                  v-for="item in gallery"
                  :key="item.id"
                  class="group relative overflow-hidden rounded-sm border border-[#353A42] bg-[#0B0D10] flex flex-col transition hover:border-[#EF4B42] hover:shadow-xl hover:shadow-[#EF4B42]/10"
                  :class="item.embedUrl ? 'aspect-9/16 h-auto' : 'h-[280px] sm:h-[300px]'"
                  role="button"
                  tabindex="0"
                  @click="emit('open-modal', item)"
                  @keydown.enter.prevent="emit('open-modal', item)"
                >
                  <div
                    v-if="item.embedUrl"
                    class="w-full h-full rounded-sm overflow-hidden bg-black"
                  >
                    <iframe
                      class="w-full h-full border-0"
                      :src="`${item.embedUrl}/embed`"
                      allowtransparency="true"
                      allowfullscreen
                      scrolling="no"
                      frameborder="0"
                    ></iframe>
                  </div>
                  <div
                    v-else
                    class="h-full min-h-[220px] bg-cover bg-center transition duration-500 group-hover:scale-105"
                    :style="{
                      backgroundImage: `url(${item.thumb || selectedWork?.thumb || ''})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }"
                  ></div>
                  <div
                    class="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#0B0D10]/95 via-[#0B0D10]/70 to-transparent flex items-center justify-between font-mono text-xs text-[#F0F0EB]"
                  >
                    <span class="truncate pr-2 font-serif text-sm">{{ item.title }}</span>
                    <span class="text-[#EF4B42] shrink-0 font-mono text-[11px]">ZOOM ↗</span>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </transition>
      </div>
    </Transition>
  </section>
</template>
