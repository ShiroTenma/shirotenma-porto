<script setup>
defineProps({
  packages: Array,
})

const emit = defineEmits(['open-package'])
</script>

<template>
  <section class="border-b border-[#353A42]/60 bg-[#0B0D10] pb-14 pt-10 sm:pt-14 text-[#F0F0EB]">
    <Transition name="fade-up" appear>
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          v-inview
          class="grid grid-cols-1 gap-6 md:grid-cols-2 items-start pb-8 border-b border-[#353A42]/60"
        >
          <div class="flex flex-col gap-3">
            <div class="inline-flex items-center gap-2 rounded-sm border border-[#353A42] bg-[#181B20] px-3.5 py-1 font-mono text-xs font-medium text-[#A5ABB4] w-fit">
              <span class="inline-block h-2 w-2 rounded-full bg-[#EF4B42]"></span>
              <span>03 // CREATIVE COMMISSIONS</span>
            </div>
            <h1 class="text-4xl sm:text-6xl font-normal text-[#F0F0EB] font-serif tracking-tight">Services & Pricing</h1>
            <p class="text-sm sm:text-base text-[#A5ABB4] leading-relaxed font-sans max-w-lg">
              Slot terbatas untuk kebutuhan branding, video editing, custom motion, dan visual design. Pertanyaan konsep atau penyesuaian budget bisa dikonsultasikan langsung.
            </p>
            <div class="pt-2">
              <router-link
                to="/contact"
                class="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-[#EF4B42] px-6 font-mono text-xs font-bold tracking-wider text-white hover:bg-[#EF4B42]/90 active:scale-95 transition shadow-lg shadow-[#EF4B42]/15"
              >
                <span>HUBUNGI DULU</span>
                <span>↗</span>
              </router-link>
            </div>
          </div>
          <div class="md:pt-12">
            <p class="text-xs sm:text-sm text-[#A5ABB4] leading-relaxed font-sans border-l-2 border-[#353A42] pl-4">
              Pilih paket layanan yang paling sesuai di bawah ini. Semua project dikerjakan dengan standar visual tinggi, color grading presisi, dan file deliverable siap pakai.
            </p>
          </div>
        </div>

        <div v-inview class="grid gap-6 md:grid-cols-3 mt-10">
          <article
            v-for="pkg in packages"
            :key="pkg.id"
            class="group rounded-sm border border-[#353A42] bg-[#181B20] text-[#F0F0EB] p-5 sm:p-6 flex flex-col justify-between transition hover:border-[#EF4B42] hover:shadow-2xl hover:shadow-[#EF4B42]/5 cursor-pointer"
            role="button"
            tabindex="0"
            @click="emit('open-package', pkg.id)"
            @keydown.enter.prevent="emit('open-package', pkg.id)"
          >
            <div class="space-y-4">
              <div
                v-if="pkg.image"
                class="aspect-16/10 w-full rounded-xs overflow-hidden border border-[#353A42]/50 bg-[#0B0D10]"
              >
                <img
                  :src="pkg.image"
                  :alt="pkg.name"
                  class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p class="font-mono text-xs uppercase tracking-wider text-[#EF4B42] font-semibold">
                {{ pkg.badge }}
              </p>

              <h2 class="text-2xl font-normal text-[#F0F0EB] font-serif leading-snug">
                {{ pkg.name }}
              </h2>

              <p class="font-mono text-sm font-bold text-[#F0F0EB] bg-[#0B0D10] px-3 py-1.5 rounded-xs border border-[#353A42]/60 inline-block">
                {{ pkg.price }}
              </p>

              <ul class="space-y-2 text-xs text-[#A5ABB4] font-sans border-t border-[#353A42]/50 pt-3">
                <li v-for="point in pkg.points" :key="point" class="flex items-start gap-2">
                  <span class="text-[#EF4B42]">›</span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              class="mt-6 inline-flex h-11 items-center justify-center rounded-sm border border-[#353A42] bg-[#0B0D10] px-4 font-mono text-xs font-semibold tracking-wider text-[#F0F0EB] group-hover:border-[#EF4B42] group-hover:text-[#EF4B42] transition"
              @click.stop="emit('open-package', pkg.id)"
            >
              <span>INSPECT DETAILS</span>
              <span class="ml-1.5">↗</span>
            </button>
          </article>
        </div>
      </div>
    </Transition>
  </section>
</template>
