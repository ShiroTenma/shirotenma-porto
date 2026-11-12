<script setup>
import { reactive } from 'vue'

defineProps({
  isSubmitted: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['submit-form'])

const form = reactive({
  name: '',
  email: '',
  title: '',
  message: '',
})

const handleSubmit = () => {
  emit('submit-form', { ...form })
  form.name = ''
  form.email = ''
  form.title = ''
  form.message = ''
}
</script>

<template>
  <form
    v-inview
    class="space-y-5 bg-[#181B20] rounded-sm border border-[#353A42] p-6 sm:p-8 shadow-2xl"
    @submit.prevent="handleSubmit"
  >
    <div class="space-y-1 pb-2 border-b border-[#353A42]/50">
      <div class="font-mono text-[10px] uppercase tracking-widest text-[#EF4B42]">DISPATCH FORM</div>
      <h3 class="text-xl font-normal text-[#F0F0EB] font-serif">Send an Inquiry</h3>
    </div>

    <label class="flex flex-col gap-1.5 font-mono text-xs text-[#A5ABB4]">
      <span>IDENTIFIER / NAMA</span>
      <input
        v-model="form.name"
        type="text"
        required
        placeholder="Nama atau alias kamu"
        class="w-full rounded-xs border border-[#353A42] bg-[#0B0D10] px-3.5 py-2.5 text-xs font-sans text-[#F0F0EB] placeholder:text-[#A5ABB4]/40 focus:outline-none focus:border-[#EF4B42] focus:ring-1 focus:ring-[#EF4B42]"
      />
    </label>

    <label class="flex flex-col gap-1.5 font-mono text-xs text-[#A5ABB4]">
      <span>ELECTRONIC MAIL</span>
      <input
        v-model="form.email"
        type="email"
        required
        placeholder="yourname@domain.com"
        class="w-full rounded-xs border border-[#353A42] bg-[#0B0D10] px-3.5 py-2.5 text-xs font-sans text-[#F0F0EB] placeholder:text-[#A5ABB4]/40 focus:outline-none focus:border-[#EF4B42] focus:ring-1 focus:ring-[#EF4B42]"
      />
    </label>

    <label class="flex flex-col gap-1.5 font-mono text-xs text-[#A5ABB4]">
      <span>SUBJECT / TOPIK</span>
      <input
        v-model="form.title"
        type="text"
        required
        placeholder="e.g. YouTube Banner & Overlay Commission"
        class="w-full rounded-xs border border-[#353A42] bg-[#0B0D10] px-3.5 py-2.5 text-xs font-sans text-[#F0F0EB] placeholder:text-[#A5ABB4]/40 focus:outline-none focus:border-[#EF4B42] focus:ring-1 focus:ring-[#EF4B42]"
      />
    </label>

    <label class="flex flex-col gap-1.5 font-mono text-xs text-[#A5ABB4]">
      <span>PROJECT SPECIFICATIONS</span>
      <textarea
        v-model="form.message"
        rows="4"
        required
        placeholder="Ceritakan deliverable yang diinginkan, mood visual, dan deadline..."
        class="w-full rounded-xs border border-[#353A42] bg-[#0B0D10] px-3.5 py-2.5 text-xs font-sans text-[#F0F0EB] placeholder:text-[#A5ABB4]/40 focus:outline-none focus:border-[#EF4B42] focus:ring-1 focus:ring-[#EF4B42] resize-none"
      ></textarea>
    </label>

    <button
      type="submit"
      class="w-full inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-[#EF4B42] text-white font-mono text-xs font-bold tracking-wider hover:bg-[#EF4B42]/90 active:scale-95 transition shadow-lg shadow-[#EF4B42]/15"
    >
      <span>TRANSMIT MESSAGE</span>
      <span>↗</span>
    </button>
  </form>
</template>
