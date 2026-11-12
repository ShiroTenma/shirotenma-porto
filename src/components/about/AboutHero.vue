<script setup>
import avatarMain from '../../assets/images/about/avatar-main.webp'
</script>

<template>
  <Transition name="fade-up" appear>
    <section class="border-b border-[#353A42]/60 bg-[#0B0D10] pb-14 pt-10 sm:pt-16 text-[#F0F0EB]">
      <div v-inview class="mx-auto max-w-7xl px-4 sm:px-6 grid gap-10 lg:grid-cols-12 lg:gap-14 items-center">
        <div class="space-y-6 lg:col-span-7">
          <div class="inline-flex items-center gap-2 rounded-sm border border-[#353A42] bg-[#181B20] px-3.5 py-1 font-mono text-xs font-medium text-[#A5ABB4] w-fit">
            <span class="inline-block h-2 w-2 rounded-full bg-[#EF4B42]"></span>
            <span>02 // CREATOR DOSSIER</span>
          </div>

          <div class="space-y-4">
            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-[#F0F0EB] tracking-tight leading-[1.02]">
              ShiroTenma<span class="text-[#EF4B42]">.</span>
            </h1>
            <p class="text-base sm:text-lg text-[#D4D8DE] leading-relaxed font-sans max-w-xl">
              Hi, I'm ShiroTenma. I make visual work, explore digital design, and enjoy building things for the web.
            </p>
            <p class="text-xs sm:text-sm text-[#A5ABB4] leading-relaxed font-sans max-w-xl">
              Bekerja lintas disiplin mulai dari Graphic Design, Video Editing, Motion Graphics, hingga Cosplay & Event Photography. Fokus pada eksplorasi mood visual, tipografi presisi, dan storytelling yang kuat.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <router-link
              to="/portfolio"
              class="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-[#EF4B42] px-6 font-mono text-xs font-bold tracking-wider text-white hover:bg-[#EF4B42]/90 active:scale-95 transition shadow-lg shadow-[#EF4B42]/15"
            >
              <span>INSPECT PORTFOLIO</span>
              <span>↗</span>
            </router-link>
            <router-link
              to="/contact"
              class="inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-[#353A42] bg-[#181B20] px-6 font-mono text-xs font-semibold tracking-wider text-[#F0F0EB] hover:border-[#EF4B42] hover:text-[#EF4B42] active:scale-95 transition"
            >
              <span>GET IN TOUCH</span>
              <span>→</span>
            </router-link>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div class="group rounded-sm border border-[#353A42] bg-[#181B20] p-4 space-y-4 transition hover:border-[#EF4B42]">
            <div
              class="w-full aspect-square rounded-xs bg-center bg-cover border border-[#353A42]/60 bg-[#0B0D10] transition duration-500 group-hover:scale-[1.02]"
              :style="{ backgroundImage: `url(${avatarMain})` }"
            ></div>
            <div class="flex items-center justify-between font-mono text-xs pt-1 border-t border-[#353A42]/50">
              <span class="text-[#A5ABB4]">PROFILE AVATAR</span>
              <span class="text-[#EF4B42] font-semibold">VERIFIED // ARCHIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Transition>
</template>
