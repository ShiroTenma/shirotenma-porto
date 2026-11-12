<script setup>
defineProps({
  showcaseWorks: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="bg-[#0B0D10] py-14 sm:py-20">
    <Transition name="fade-up" appear>
      <div
        v-inview
        class="mx-auto max-w-7xl px-4 sm:px-6"
      >
        <div class="rounded-sm border border-[#353A42] bg-[#181B20] p-8 sm:p-12 lg:p-14">
          <div class="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
            <div class="space-y-5 lg:col-span-7">
              <span class="font-mono text-xs uppercase tracking-widest text-[#EF4B42]">04 // INQUIRY CALL</span>
              <h3 class="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F0F0EB] font-serif leading-tight">
                Ready to create custom visuals for your project?
              </h3>
              <p class="text-sm sm:text-base text-[#A5ABB4] leading-relaxed font-sans max-w-xl">
                Tell me briefly about your concept, visual requirements, or branding identity. We can discuss moodboards, style direction, and deliverables.
              </p>

              <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <router-link
                  to="/contact"
                  class="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-[#EF4B42] px-7 font-mono text-xs font-bold tracking-wider text-white transition hover:bg-[#EF4B42]/90 active:scale-95 shadow-lg shadow-[#EF4B42]/15"
                >
                  <span>GET IN TOUCH</span>
                  <span>↗</span>
                </router-link>
                <router-link
                  to="/commission"
                  class="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-[#353A42] bg-[#0B0D10] px-6 font-mono text-xs font-semibold tracking-wider text-[#F0F0EB] transition hover:border-[#EF4B42] hover:text-[#EF4B42] active:scale-95"
                >
                  <span>VIEW COMMISSIONS</span>
                  <span>→</span>
                </router-link>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3.5 lg:col-span-5">
              <article
                v-for="item in showcaseWorks"
                :key="item.id"
                class="rounded-sm bg-[#0B0D10] border border-[#353A42] p-2.5 transition hover:border-[#EF4B42]"
              >
                <div
                  class="rounded-xs h-24 bg-cover bg-center mb-2 border border-[#353A42]/50"
                  :style="{ background: `url(${item.thumb}) center / cover no-repeat` }"
                ></div>
                <p class="text-[11px] font-mono uppercase tracking-wider text-[#A5ABB4] truncate">{{ item.title }}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>
