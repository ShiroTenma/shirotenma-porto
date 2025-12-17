<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  categories: Array,
  activeCategory: String,
  setCategory: Function,
})
</script>

<template>
  <section class="section-shell bg-[#F9FAFB] pb-16 pt-10">
    <Transition name="fade-up" appear>
      <div class="section-container text-slate-900">
        <div class="mb-6 space-y-2">
          <p class="text-xs uppercase tracking-[0.3em] text-teal-600">portfolio</p>
          <h1 class="text-3xl md:text-4xl font-extrabold">Beberapa kategori utamaku</h1>
          <p class="text-slate-600 leading-7 max-w-3xl">
            Graphics Design, Editing, dan Photography. Pilih kategori untuk lihat contoh yang paling
            relevan dengan kebutuhanmu.
          </p>
        </div>

        <div v-inview class="grid gap-4 md:grid-cols-3">
          <article
            v-for="(cat, index) in categories"
            :key="cat.id"
            class="relative overflow-hidden rounded-2xl border border-slate-200/70 shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-white p-5 md:p-6 flex flex-col gap-3 transition-all duration-200 cursor-pointer"
            :class="[
              activeCategory === cat.id
                ? 'ring-2 ring-teal-300/70 -translate-y-1 shadow-[0_22px_66px_rgba(20,184,166,0.18)]'
                : 'hover:-translate-y-0.5 hover:ring-1 hover:ring-teal-100',
              index === 1 ? 'md:-translate-y-1' : '',
            ]"
            role="button"
            tabindex="0"
            @click="setCategory(cat.id)"
            @keydown.enter.prevent="setCategory(cat.id)"
          >
            <div
              v-if="cat.heroImage"
              class="w-full aspect-video rounded-xl bg-center bg-cover ring-1 ring-slate-100 mb-3 shadow-inner"
              :style="{ backgroundImage: `url(${cat.heroImage})` }"
            ></div>

            <p
              class="inline-flex items-center rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-teal-700 bg-teal-50 ring-1 ring-teal-100"
            >
              {{ cat.badge }}
            </p>

            <h2 class="text-xl font-bold leading-snug text-slate-900">
              {{ cat.name }}
            </h2>

            <p class="text-sm text-slate-600">
              {{ cat.priceText }}
            </p>

            <ul class="space-y-1.5 text-sm leading-6 text-slate-700">
              <li class="flex gap-2"><span class="text-teal-500">•</span>{{ cat.highlight }}</li>
              <li class="flex gap-2">
                <span class="text-teal-500">•</span>Style dan color grading disesuaikan karakter
                atau brand kamu.
              </li>
              <li class="flex gap-2">
                <span class="text-teal-500">•</span>File akhir siap pakai di social media atau
                platform streaming.
              </li>
            </ul>

            <button
              type="button"
              class="mt-auto inline-flex items-center justify-center rounded-full bg-teal-500 text-white px-4 py-2 text-sm font-semibold shadow-[0_12px_30px_rgba(20,184,166,0.22)] hover:bg-teal-700 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-teal-200/70"
              @click="setCategory(cat.id)"
            >
              Lihat karya di kategori ini
            </button>
          </article>
        </div>
      </div>
    </Transition>
  </section>
</template>
