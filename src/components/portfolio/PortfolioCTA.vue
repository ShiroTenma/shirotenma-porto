<script setup>
defineProps({
  showcaseWorks: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="section section-shell bg-[#F9FAFB]">
    <Transition name="fade-up" appear>
      <div
        v-inview
        class="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr] items-center bg-linear-to-r from-teal-500 via-teal-600 to-teal-700 text-white rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(20,184,166,0.22)] max-w-6xl mx-auto px-4 border border-teal-200/60"
      >
        <div class="p-8 lg:p-10 space-y-3">
          <h3 class="text-2xl md:text-3xl font-bold">
            Siap bikin visual baru buat brand atau project kamu?
          </h3>
          <p class="text-white/85 leading-7">
            Ceritain pendek aja idemu, nanti kita bisa bahas bareng konsep, mood, dan style yang
            paling cocok. No pressure, cuma ngobrol dulu.
          </p>

          <div class="flex flex-wrap gap-3">
            <router-link
              to="/contact"
              class="inline-flex items-center gap-2 rounded-full bg-white text-teal-700! font-semibold px-4 py-2 shadow hover:shadow-lg transition"
            >
              Let's talk!
              <span>&gt;</span>
            </router-link>
            <router-link
              to="/commission"
              class="inline-flex items-center gap-2 rounded-full border border-white/50 text-white px-4 py-2 hover:bg-white/10 transition"
            >
              Lihat Commission
              <span>&gt;</span>
            </router-link>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3 p-6">
          <article
            v-for="item in showcaseWorks"
            :key="item.id"
            class="rounded-2xl bg-white/10 backdrop-blur shadow border border-white/20 p-3"
          >
            <div
              class="rounded-xl h-24 bg-cover bg-center mb-2"
              :style="{ background: `url(${item.thumb}) center / cover no-repeat` }"
            ></div>
            <p class="text-sm font-medium uppercase tracking-[0.08em]">{{ item.title }}</p>
          </article>
        </div>
      </div>
    </Transition>
  </section>
</template>
