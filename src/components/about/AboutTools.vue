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
    <section class="section bg-slate-50 dark:bg-slate-900 py-12">
      <div class="max-w-6xl mx-auto px-4">
        <div v-inview class="flex items-center justify-between mb-4">
          <div>
            <p class="text-xs uppercase tracking-[0.14em] text-teal-600">Tools</p>
            <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100">Peralatan kerja</h2>
          </div>
        </div>

        <div v-inview class="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          <div
            v-for="tool in tools"
            :key="tool"
            class="text-center font-semibold rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2 shadow-sm text-slate-700 dark:text-slate-100"
          >
            {{ tool }}
          </div>
        </div>
      </div>
    </section>
  </Transition>
</template>
