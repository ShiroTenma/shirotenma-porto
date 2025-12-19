<script setup>
defineProps({
  testimonies: Array,
})
</script>

<template>
  <section class="section section-shell bg-slate-50 dark:bg-slate-900">
    <Transition name="fade-up" appear>
      <div class="section-container">
        <h2 class="section-title text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">Testimony</h2>
        <div v-inview class="grid gap-5 md:grid-cols-3">
          <article
            v-for="t in testimonies"
            :key="t.name"
            class="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-[0_10px_28px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_28px_rgba(0,0,0,0.35)] p-5 space-y-2 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_14px_34px_rgba(0,0,0,0.45)] transition"
          >
            <p class="text-slate-700 dark:text-slate-200 leading-6">"{{ t.text }}"</p>
            <p class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ t.name }}</p>
            <p class="text-sm text-teal-600">{{ t.role }}</p>
          </article>
        </div>
      </div>
    </Transition>
  </section>
</template>
