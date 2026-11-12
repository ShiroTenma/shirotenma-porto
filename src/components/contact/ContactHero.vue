<script setup>
defineProps({
  isSubmitted: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div v-inview class="space-y-6 text-[#F0F0EB]">
    <div class="inline-flex items-center gap-2 rounded-sm border border-[#353A42] bg-[#181B20] px-3.5 py-1 font-mono text-xs font-medium text-[#A5ABB4] w-fit">
      <span class="inline-block h-2 w-2 rounded-full bg-[#EF4B42]"></span>
      <span>04 // INQUIRY TRANSMISSION</span>
    </div>

    <div class="space-y-3">
      <h1 class="text-4xl sm:text-6xl font-normal font-serif text-[#F0F0EB] tracking-tight leading-tight">
        Interested in collaborating?
      </h1>
      <p class="text-sm sm:text-base text-[#A5ABB4] leading-relaxed font-sans max-w-lg">
        Kirimkan ringkasan kebutuhan projekmu di sini. Jelaskan jenis deliverable, perkiraan timeline atau deadline, dan estimasi budget agar bisa kuberi rincian penawaran.
      </p>
    </div>

    <div class="space-y-3 pt-4 border-t border-[#353A42]/50 font-mono text-xs text-[#A5ABB4]">
      <p class="text-[#EF4B42] font-semibold">// ALTERNATIVE FAST CHANNELS:</p>
      <div class="flex flex-col gap-2 pt-1">
        <a
          href="https://discord.com/users/shirotenma"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center gap-2 text-[#F0F0EB] hover:text-[#EF4B42] transition"
        >
          <span>Discord: shirotenma</span>
          <span>↗</span>
        </a>
        <a
          href="https://wa.me/6288220023477"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center gap-2 text-[#F0F0EB] hover:text-[#EF4B42] transition"
        >
          <span>WhatsApp: +62 882-2002-3477</span>
          <span>↗</span>
        </a>
        <a
          href="mailto:ohatenma@gmail.com"
          class="inline-flex items-center gap-2 text-[#F0F0EB] hover:text-[#EF4B42] transition"
        >
          <span>Email: ohatenma@gmail.com</span>
          <span>↗</span>
        </a>
      </div>
    </div>

    <div v-if="isSubmitted" class="p-4 rounded-sm border border-[#EF4B42] bg-[#EF4B42]/10 font-mono text-xs text-[#EF4B42]">
      // TRANSMISSION CONFIRMED: Message opened in your email client.
    </div>
  </div>
</template>
