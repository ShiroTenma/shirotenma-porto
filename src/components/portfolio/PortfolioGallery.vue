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
    class="section section-shell rounded-3xl bg-slate-50 border border-slate-200/70 shadow-lg shadow-slate-900/5 p-6 md:p-8 space-y-6"
  >
    <Transition name="fade-up" appear>
      <div class="section-container">
        <div v-inview class="grid gap-4 md:grid-cols-[1fr_1.1fr] items-center">
          <div>
            <h2 class="text-2xl md:text-3xl font-extrabold uppercase tracking-[0.14em] mb-1">
              <strong>{{ activeCategoryData?.name }}</strong>
            </h2>
          </div>
          <p class="text-slate-600 leading-7">
            Koleksi beberapa karya pilihan di kategori
            <strong>{{ activeCategoryData?.name }}</strong
            >. Mulai dari personal project sampai commission untuk klien, semua digarap dengan fokus
            di mood, warna, dan storytelling visual dengan hasil memuaskan.
          </p>
        </div>

        <transition name="gallery" mode="out-in">
          <section v-if="selectedWork" v-inview :key="selectedWork?.id || 'none'" class="mt-6">
            <div class="rounded-2xl border border-slate-200 bg-white shadow-lg p-5 md:p-6">
              <div class="flex items-end justify-between mb-4">
                <div>
                  <p class="text-xs uppercase tracking-[0.14em] text-teal-600">
                    {{ selectedWork.tag || activeCategoryData?.name }}
                  </p>
                  <h3 class="text-lg font-semibold text-slate-900">
                    {{ selectedWork.title }}
                  </h3>
                </div>

                <button
                  type="button"
                  class="inline-flex items-center rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition"
                  @click="emit('close-gallery')"
                >
                  Tutup gallery view
                </button>
              </div>

              <div
                class="grid gap-3"
                :class="{
                  'md:grid-cols-2': activeCategory === 'editing',
                  'grid-cols-1 md:grid-cols-3': activeCategory !== 'editing',
                }"
              >
                <article
                  v-for="item in gallery"
                  :key="item.id"
                  class="relative overflow-hidden rounded-xl shadow bg-white text-slate-900 flex flex-col transition hover:-translate-y-1 hover:shadow-lg border border-slate-200"
                  :class="item.embedUrl ? 'aspect-9/16 h-auto' : 'h-[262px]'"
                  role="button"
                  tabindex="0"
                  @click="emit('open-modal', item)"
                  @keydown.enter.prevent="emit('open-modal', item)"
                >
                  <div
                    v-if="item.embedUrl"
                    class="w-full h-full rounded-xl overflow-hidden bg-black"
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
                    class="h-full min-h-[220px] bg-cover bg-center"
                    :style="{
                      backgroundImage: `url(${item.thumb || selectedWork?.thumb || ''})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }"
                  ></div>
                  <div
                    class="absolute left-3 right-3 bottom-3 px-3 py-2 text-sm text-white bg-black/60 rounded-lg"
                  >
                    {{ item.title }}
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
