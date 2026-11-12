<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  tools: {
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
            <p class="font-mono text-xs uppercase tracking-widest text-[#EF4B42]">04 // ARSENAL</p>
            <h2 class="text-3xl sm:text-4xl font-normal text-[#F0F0EB] font-serif mt-1">
              Software & Toolstack
            </h2>
          </div>
        </div>

        <div v-inview class="grid gap-3.5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          <div
            v-for="tool in tools"
            :key="tool"
            class="text-center font-mono text-xs font-semibold rounded-sm border border-[#353A42] bg-[#181B20] px-4 py-3 text-[#F0F0EB] hover:border-[#EF4B42] hover:text-[#EF4B42] transition"
          >
            {{ tool }}
          </div>
        </div>
      </div>
    </section>
  </Transition>
</template>
