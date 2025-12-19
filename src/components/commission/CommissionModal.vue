<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  isOpen: Boolean,
  activePackage: Object,
  activeOptions: Array,
  contactOpen: Boolean,
})

const emit = defineEmits(['close', 'open-contact', 'close-contact'])
</script>

<template>
  <transition name="modal-fade">
    <div v-if="isOpen" class="commission-modal-shell" @click.self="emit('close')">
      <div
        class="commission-modal-box w-full max-w-6xl rounded-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-2xl p-4 md:p-6 border border-slate-200/80 dark:border-slate-700"
        role="dialog"
        aria-modal="true"
      >
        <header
          class="commission-modal-head flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4"
        >
          <div class="space-y-1">
            <p class="commission-modal-kicker text-xs uppercase tracking-[0.25em] text-teal-600">
              {{ activePackage?.badge }}
            </p>
            <h3 class="commission-modal-title text-2xl font-bold text-slate-900 dark:text-slate-100">
              {{ activePackage?.name }}
            </h3>
            <p class="commission-modal-text text-slate-600 dark:text-slate-300">
              {{ activePackage?.points?.[0] }}
            </p>
          </div>
          <button
            type="button"
            class="commission-modal-close self-start rounded-full border border-slate-200 dark:border-slate-700 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            @click="emit('close')"
          >
            Tutup
          </button>
        </header>

        <div
          class="commission-modal-options flex flex-col gap-4 md:gap-5 max-h-[70vh] overflow-y-auto pr-1"
        >
          <article
            v-for="option in activeOptions"
            :key="option.id"
            class="commission-modal-card bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 min-h-[480px] sm:min-h-[420px] md:min-h-[340px] md:grid md:grid-cols-2 md:items-stretch"
          >
            <div
              class="commission-modal-thumb h-56 md:h-full bg-cover bg-center"
              :style="{ backgroundImage: `url(${option.image})` }"
            ></div>
            <div class="commission-modal-body flex flex-col gap-3 p-4 md:p-5">
              <div class="flex flex-col gap-1">
                <h4 class="commission-modal-card-title text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {{ option.title }}
                </h4>
                <p class="commission-modal-price text-teal-600 font-semibold">
                  {{ option.price || activePackage?.price }}
                </p>
              </div>
              <p class="commission-modal-card-text text-sm text-slate-600 dark:text-slate-300">
                Apa yang kamu dapatkan?
              </p>
              <ul class="commission-modal-list space-y-2 text-sm text-slate-700 dark:text-slate-200">
                <li
                  v-for="point in option.points && option.points.length
                    ? option.points
                    : activePackage?.points || []"
                  :key="point"
                >
                  {{ point }}
                </li>
              </ul>
              <button
                type="button"
                class="commission-modal-link mt-auto inline-flex items-center justify-center rounded-full bg-teal-500 text-[#F9FAFB] font-semibold px-5 py-2.5 shadow-lg shadow-emerald-800/25 hover:bg-teal-700 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-200/70"
                @click.stop="emit('open-contact')"
              >
                Tekan untuk Kontak
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  </transition>

  <transition name="contact-pop">
      <div
        v-if="contactOpen"
        class="contact-popup fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        @click.self="emit('close-contact')"
      >
        <div
          class="contact-popup-box w-full max-w-sm rounded-xl bg-slate-900 text-slate-100 shadow-2xl p-5 border border-white/10"
          role="dialog"
          aria-modal="true"
        >
        <header class="contact-popup-head flex items-center justify-between mb-3">
          <h4 class="text-lg font-semibold">Hubungi via</h4>
          <button
            type="button"
            class="contact-popup-close rounded-lg border border-white/20 px-3 py-1 text-sm hover:bg-white/10"
            @click="emit('close-contact')"
          >
            Tutup
          </button>
        </header>
        <div class="contact-popup-body flex flex-col gap-3">
          <a
            class="contact-btn contact-btn--wa btn-primary rounded-lg"
            href="https://wa.me/6285183335473"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Business
          </a>
          <a
            class="contact-btn contact-btn--discord inline-flex items-center justify-center rounded-lg bg-indigo-600 text-indigo-50 px-4 py-2 font-semibold shadow-lg hover:bg-indigo-700 active:scale-[0.99] transition"
            href="https://discord.com/users/348379630941765645"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>
