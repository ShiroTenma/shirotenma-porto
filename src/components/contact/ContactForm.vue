<script setup>
const props = defineProps({
  form: {
    type: Object,
    required: true,
  },
  isSubmitted: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['submit-form'])
</script>

<template>
  <form
    v-inview
    class="space-y-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-[0_14px_36px_rgba(0,0,0,0.08)] p-5 md:p-6"
    @submit.prevent="emit('submit-form')"
  >
    <label class="flex flex-col gap-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
      <span>Email</span>
      <input
        v-model="form.email"
        type="email"
        required
        placeholder="Please enter your email"
        class="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:border-teal-400"
      />
    </label>

    <label class="flex flex-col gap-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
      <span>Mobile</span>
      <input
        v-model="form.mobile"
        type="tel"
        placeholder="Enter mobile"
        class="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:border-teal-400"
      />
    </label>

    <label class="flex flex-col gap-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
      <span>Message</span>
      <textarea
        v-model="form.message"
        rows="4"
        required
        placeholder="Enter your message"
        class="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:border-teal-400 resize-none"
      ></textarea>
    </label>

    <button
      type="submit"
      class="w-full inline-flex items-center justify-center rounded-full bg-teal-500 text-[#F9FAFB] font-semibold px-5 py-2.5 shadow-[0_10px_24px_rgba(20,184,166,0.22)] hover:bg-teal-700 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-teal-200/70"
    >
      Submit
    </button>

    <p v-if="isSubmitted" class="text-sm text-teal-600 font-medium">
      Pesan terkirim (simulasi). Kamu bisa kirim detail tambahan kapan saja.
    </p>
  </form>
</template>
