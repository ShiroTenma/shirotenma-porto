<script setup>
defineProps({
  isSubmitted: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div v-inview class="space-y-3">
    <h1 class="text-3xl md:text-4xl font-bold text-slate-900">Interested with these?</h1>
    <p class="text-slate-600 leading-7">
      Kirim detail projekmu di sini. Jelasin kebutuhan, deadline, dan budget kira-kira, biar bisa
      kukasih estimasi.
    </p>

    <p v-if="isSubmitted" class="text-teal-600 font-semibold">
      aź?. Thanks! Pesanmu sudah tercatat (simulasi).
    </p>
  </div>
</template>
