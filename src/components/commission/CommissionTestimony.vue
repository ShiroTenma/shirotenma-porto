<script setup>
defineProps({
  testimonies: Array,
})
</script>

<template>
  <section class="section section-shell bg-[#F9FAFB]">
    <Transition name="fade-up" appear>
      <div class="section-container">
        <h2 class="section-title text-2xl font-bold text-slate-900 mb-6">Testimony</h2>
        <div v-inview class="grid gap-5 md:grid-cols-3">
          <article
            v-for="t in testimonies"
            :key="t.name"
            class="rounded-2xl bg-white border border-slate-200 shadow-[0_10px_28px_rgba(0,0,0,0.06)] p-5 space-y-2 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(0,0,0,0.1)] transition"
          >
            <p class="text-slate-700 leading-6">"{{ t.text }}"</p>
            <p class="text-sm font-semibold text-slate-900">{{ t.name }}</p>
            <p class="text-sm text-teal-600">{{ t.role }}</p>
          </article>
        </div>
      </div>
    </Transition>
  </section>
</template>
