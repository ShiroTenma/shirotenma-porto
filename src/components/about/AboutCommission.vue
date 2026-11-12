<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <Transition name="fade-up" appear>
    <section class="border-b border-[#353A42]/60 bg-[#0B0D10] text-[#F0F0EB] py-14 sm:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div v-inview class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#353A42]/60">
          <div>
            <p class="font-mono text-xs uppercase tracking-widest text-[#EF4B42]">06 // COMMISSION SAMPLES</p>
            <h2 class="text-3xl sm:text-4xl font-normal text-[#F0F0EB] font-serif mt-1">
              Sample Commissions
            </h2>
          </div>
          <router-link
            to="/commission"
            class="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#A5ABB4] hover:text-[#EF4B42] transition"
          >
            <span>VIEW SERVICE RATES</span>
            <span>↗</span>
          </router-link>
        </div>

        <div v-inview class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="item in items"
            :key="item.id"
            class="rounded-sm bg-[#181B20] border border-[#353A42] p-4 flex flex-col justify-between transition hover:border-[#EF4B42]"
          >
            <div class="space-y-3">
              <div
                class="w-full aspect-16/10 bg-center bg-cover rounded-xs border border-[#353A42]/50"
                :style="{ backgroundImage: `url(${item.image})` }"
              ></div>
              <p class="font-mono text-[10px] uppercase tracking-wider text-[#EF4B42]">{{ item.tag }}</p>
              <h3 class="text-xl font-normal text-[#F0F0EB] font-serif">{{ item.title }}</h3>
            </div>
          </article>
        </div>
      </div>
    </section>
  </Transition>
</template>
