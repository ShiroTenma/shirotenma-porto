<script setup>
import avatarMain from '../../assets/images/about/avatar-main.png'
</script>

<template>
  <Transition name="fade-up" appear>
    <section class="section section-shell bg-[#F9FAFB]">
      <div v-inview class="section-container grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-start">
        <div class="flex flex-col gap-3">
          <p class="text-sm uppercase tracking-[0.14em] text-teal-600">About</p>
          <h1 class="text-4xl font-extrabold text-slate-900">ShiroTenma</h1>
          <p class="text-slate-600 leading-7 max-w-2xl">
            Seorang manusia yang mempunyai passion di hampir semua bidang kreatif seperti Graphics
            Design, Video Editing, Motion graphics, Typography, dan juga dalam Fotografi dan
            Videografi. Biasanya dia suka banget eksplorasi style visual yang unik dan menarik
            perhatian dan juga sesuai dengan bayangan klien itu sendiri.
          </p>
          <div class="flex flex-wrap gap-3">
            <router-link
              to="/portfolio"
              class="inline-flex items-center justify-center rounded-full bg-teal-500 text-[#F9FAFB]! font-semibold text-sm px-5 py-2.5 shadow-[0_10px_24px_rgba(20,184,166,0.22)] hover:bg-teal-700 hover:-translate-y-px active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-teal-200/80"
              >Lihat portfolio</router-link
            >
            <router-link
              to="/contact"
              class="inline-flex items-center justify-center rounded-full border border-teal-500 text-teal-600 px-5 py-2.5 text-sm font-semibold hover:bg-teal-50 hover:-translate-y-px active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-teal-200/70"
              >Hubungi</router-link
            >
            <router-link
              to="/aboutrl"
              class="inline-flex items-center justify-center rounded-full border border-slate-300 text-slate-700 px-5 py-2.5 text-sm font-semibold hover:bg-slate-100 hover:-translate-y-px active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-slate-200/70"
              >Behind the scene</router-link
            >
          </div>
        </div>

        <div
          class="bg-white text-slate-900 rounded-2xl p-5 shadow-[0_18px_40px_rgba(0,0,0,0.08)] flex flex-col gap-3 border border-slate-200/70"
        >
          <div
            class="w-full aspect-square rounded-xl bg-center bg-cover shadow-inner border border-slate-200/70"
            :style="{ backgroundImage: `url(${avatarMain})` }"
          ></div>
          <div class="flex flex-wrap gap-2">
            <span
              class="px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100 text-sm"
              >Graphics</span
            >
            <span
              class="px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100 text-sm"
              >Video</span
            >
            <span
              class="px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100 text-sm"
              >Photo</span
            >
          </div>
        </div>
      </div>
    </section>
  </Transition>
</template>
