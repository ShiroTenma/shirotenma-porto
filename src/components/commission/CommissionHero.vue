<script setup>
const props = defineProps({
  packages: Array,
})

const emit = defineEmits(['open-package'])
</script>

<template>
  <section class="section section-shell bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
    <Transition name="fade-up" appear>
      <div class="section-container">
        <div
          v-inview
          class="commission-header commission-header-grid grid grid-cols-1 gap-6 md:grid-cols-2 items-start"
        >
          <div class="commission-header-left flex flex-col gap-2">
          <h1 class="page-title text-3xl font-bold">Commission!</h1>
          <p class="commission-helper text-slate-600 dark:text-slate-300 leading-7">
            Slot terbatas. Kalau ragu soal budget, boleh banget tanya dulu lewat form atau DM aja
            aku!
          </p>
          <div class="commission-header-actions">
            <router-link
              to="/contact"
              class="inline-flex items-center justify-center rounded-full border border-teal-500 text-teal-600 px-4 py-2 font-semibold hover:bg-teal-50 active:scale-95 transition"
            >
              Hubungi dulu
            </router-link>
          </div>
        </div>
        <div class="commission-header-right">
          <p class="page-subtitle commission-subtitle text-slate-600 dark:text-slate-300 leading-7">
            Tertarik buat pesen desain atau editing? Pilih paket yang paling pas di bawah ini.
            Detail bisa fleksibel, yang penting kita ngobrol dulu soal kebutuhanmu.
          </p>
        </div>
      </div>

      <div v-inview class="portfolio-plan-row commission-plan-row grid gap-6 md:grid-cols-3 mt-6">
        <article
          v-for="pkg in packages"
          :key="pkg.id"
          class="portfolio-plan-card portfolio-plan-card--light commission-plan-card bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-2xl shadow-xl hover:-translate-y-1 transition duration-200 flex flex-col p-6 min-h-[420px] border border-slate-200/70 dark:border-slate-700"
          role="button"
          tabindex="0"
          @click="emit('open-package', pkg.id)"
          @keydown.enter.prevent="emit('open-package', pkg.id)"
        >
          <div
            v-if="pkg.image"
            class="commission-card-thumb rounded-xl overflow-hidden mb-3 ring-1 ring-slate-200/70 dark:ring-slate-700/60"
            :style="{ backgroundImage: `url(${pkg.image})` }"
          ></div>
          <p class="portfolio-plan-badge text-xs uppercase tracking-[0.2em] text-teal-600 bg-teal-50 px-3 py-1 rounded-full w-fit border border-teal-100">
            {{ pkg.badge }}
          </p>

          <h2 class="portfolio-plan-title text-xl font-bold text-slate-900 dark:text-slate-100">
            {{ pkg.name }}
          </h2>

          <p class="portfolio-plan-price font-semibold text-teal-700">
            {{ pkg.price }}
          </p>

          <ul class="portfolio-plan-list space-y-2 text-sm text-slate-700 dark:text-slate-200">
            <li v-for="point in pkg.points" :key="point">
              {{ point }}
            </li>
          </ul>

          <button
            type="button"
            class="inline-flex items-center justify-center rounded-full bg-teal-500 text-[#F9FAFB] font-semibold px-5 py-2.5 shadow-[0_10px_24px_rgba(20,184,166,0.22)] hover:bg-teal-700 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-teal-200/70 mt-auto"
            @click.stop="emit('open-package', pkg.id)"
          >
            Lihat detail
          </button>
        </article>
      </div>
      </div>
    </Transition>
  </section>
</template>
