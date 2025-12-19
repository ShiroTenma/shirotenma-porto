<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  works: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <Transition name="fade-up" appear>
    <section class="section bg-slate-50 dark:bg-slate-900 py-12">
      <div class="max-w-6xl mx-auto px-4">
        <div v-inview class="grid md:grid-cols-[1.05fr_0.95fr] gap-4 items-center mb-5">
          <div class="flex flex-col gap-1">
            <p class="text-xs uppercase tracking-[0.14em] text-teal-600">Selected Works</p>
            <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100">Beberapa karya pilihan</h2>
            <router-link
              to="/portfolio"
              class="inline-flex items-center justify-center rounded-full bg-teal-500 text-[#F9FAFB]! font-semibold text-sm px-4 py-2 shadow-[0_8px_18px_rgba(20,184,166,0.18)] hover:bg-teal-700 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-teal-200/70 w-fit"
              >Lihat semua</router-link
            >
          </div>
          <p class="text-slate-600 dark:text-slate-300 leading-7">
            Potongan karya dari graphics, Editing, dan Fotografi yang terbaik. Sisanya bisa kamu
            lihat langsung di halaman portfolio.
          </p>
        </div>

        <div v-inview class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="item in works"
            :key="item.id"
            class="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-[0_12px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_16px_36px_rgba(0,0,0,0.45)]"
          >
            <div
              class="w-full aspect-video bg-center bg-cover"
              :style="{ backgroundImage: `url(${item.image})` }"
            ></div>
            <div class="p-4 space-y-2">
              <span
                class="inline-flex px-3 py-1 rounded-full bg-teal-50 text-[11px] uppercase tracking-[0.12em] text-teal-700 border border-teal-100 dark:bg-teal-900/30 dark:text-teal-200 dark:border-teal-700/60"
                >{{ item.tag }}</span
              >
              <h3 class="text-lg font-semibold">{{ item.title }}</h3>
              <p class="text-slate-600 dark:text-slate-300 text-sm leading-6">{{ item.desc }}</p>
              <router-link
                :to="item.link"
                class="text-teal-600 text-sm font-semibold hover:text-teal-700 transition"
                >Lihat detail</router-link
              >
            </div>
          </article>
        </div>
      </div>
    </section>
  </Transition>
</template>
