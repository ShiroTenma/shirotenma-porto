<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  experiences: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <Transition name="fade-up" appear>
    <section class="border-b border-[#353A42]/60 bg-[#0B0D10] py-14 sm:py-20 text-[#F0F0EB]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div v-inview class="flex items-center justify-between mb-8 pb-4 border-b border-[#353A42]/60">
          <div>
            <p class="font-mono text-xs uppercase tracking-widest text-[#EF4B42]">03 // TRACK RECORD</p>
            <h2 class="text-3xl sm:text-4xl font-normal text-[#F0F0EB] font-serif mt-1">
              Selected Experience
            </h2>
          </div>
        </div>

        <div v-inview class="grid gap-6 md:grid-cols-2">
          <article
            v-for="exp in experiences"
            :key="exp.title"
            class="rounded-sm border border-[#353A42] bg-[#181B20] p-6 space-y-3 transition hover:border-[#EF4B42]"
          >
            <div class="font-mono text-xs font-semibold text-[#EF4B42]">{{ exp.year }}</div>
            <div class="space-y-3">
              <h3 class="text-xl font-normal text-[#F0F0EB] font-serif leading-snug">{{ exp.title }}</h3>
              <ul class="space-y-1.5 text-xs sm:text-sm text-[#A5ABB4] font-sans border-t border-[#353A42]/40 pt-3">
                <li v-for="bullet in exp.bullets" :key="bullet" class="flex items-start gap-2">
                  <span class="text-[#EF4B42] font-mono">›</span>
                  <span>{{ bullet }}</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  </Transition>
</template>
