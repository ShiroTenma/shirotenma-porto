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
    <section class="section bg-slate-50 dark:bg-slate-900 py-12">
      <div class="max-w-6xl mx-auto px-4">
        <div v-inview class="flex items-center justify-between mb-6">
          <div>
            <p class="text-xs uppercase tracking-[0.14em] text-teal-600">Experience</p>
            <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100">Pengalaman</h2>
          </div>
        </div>

        <div v-inview class="grid gap-4 md:grid-cols-2">
          <article
            v-for="exp in experiences"
            :key="exp.title"
            class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-[0_10px_28px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_28px_rgba(0,0,0,0.35)] hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_14px_34px_rgba(0,0,0,0.45)] transition"
          >
            <div class="text-sm font-semibold text-teal-600 mb-2">{{ exp.year }}</div>
            <div class="space-y-2">
              <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">{{ exp.title }}</h3>
              <ul class="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-1 text-sm leading-6">
                <li v-for="bullet in exp.bullets" :key="bullet">{{ bullet }}</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  </Transition>
</template>
