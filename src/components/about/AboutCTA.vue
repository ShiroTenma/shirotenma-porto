<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  backgroundStyle: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <Transition name="fade-up" appear>
    <section class="section bg-[#F9FAFB] py-12">
      <div
        v-inview
        class="max-w-6xl mx-auto px-4 rounded-3xl shadow-[0_18px_40px_rgba(20,184,166,0.18)] overflow-hidden grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-center text-white border border-slate-200/70 bg-white"
        :style="backgroundStyle"
      >
        <div class="p-8 space-y-2">
          <h2 class="text-2xl font-bold">Punya ide untuk poster, atau video?</h2>
          <p class="text-sm uppercase tracking-[0.16em] text-white/80">Let's collaborate</p>
          <div class="flex flex-wrap gap-3 mt-4">
            <router-link
              to="/commission"
              class="inline-flex items-center rounded-full bg-white text-teal-700! px-4 py-2 text-sm font-semibold shadow-lg shadow-emerald-900/25 hover:-translate-y-px hover:shadow-xl transition"
              >Lihat paket</router-link
            >
            <router-link
              to="/contact"
              class="inline-flex items-center rounded-full border border-white/70 px-4 py-2 text-sm font-semibold hover:bg-white/10 transition"
              >Hubungi</router-link
            >
          </div>
        </div>
        <div class="p-8">
          <p class="text-white/85 leading-7">
            Ceritakan saja secara singkat, nanti kita susun moodboard bareng sampe cocok! baru
            sisanya aku kerjakan.
          </p>
        </div>
      </div>
    </section>
  </Transition>
</template>
