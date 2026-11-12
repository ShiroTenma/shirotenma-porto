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
    <section class="bg-[#0B0D10] py-14 sm:py-20 text-[#F0F0EB]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          v-inview
          class="rounded-sm border border-[#353A42] bg-[#181B20] p-8 sm:p-12 grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center"
        >
          <div class="space-y-4">
            <span class="font-mono text-xs uppercase tracking-widest text-[#EF4B42]">07 // COLLABORATE</span>
            <h2 class="text-3xl sm:text-4xl font-normal text-[#F0F0EB] font-serif leading-tight">
              Punya ide untuk visual, video, atau branding?
            </h2>
            <p class="text-sm text-[#A5ABB4] leading-relaxed font-sans max-w-lg">
              Ceritakan saja secara singkat konsep atau referensimu. Kita bisa susun moodboard dan style direction bareng-bareng sampai pas.
            </p>
            <div class="flex flex-wrap gap-3 pt-2">
              <router-link
                to="/commission"
                class="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-[#EF4B42] px-6 font-mono text-xs font-bold tracking-wider text-white hover:bg-[#EF4B42]/90 active:scale-95 transition"
              >
                <span>LIHAT PAKET</span>
                <span>↗</span>
              </router-link>
              <router-link
                to="/contact"
                class="inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-[#353A42] bg-[#0B0D10] px-6 font-mono text-xs font-semibold tracking-wider text-[#F0F0EB] hover:border-[#EF4B42] hover:text-[#EF4B42] active:scale-95 transition"
              >
                <span>HUBUNGI LANGSUNG</span>
                <span>→</span>
              </router-link>
            </div>
          </div>
          <div class="border-t md:border-t-0 md:border-l border-[#353A42]/60 pt-6 md:pt-0 md:pl-8 space-y-2 font-mono text-xs text-[#A5ABB4]">
            <p class="text-[#EF4B42] font-semibold">// QUICK CONTACT CHANNELS</p>
            <p>Discord: shirotenma</p>
            <p>WhatsApp: +62 882-2002-3477</p>
            <p>Email: ohatenma@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  </Transition>
</template>
