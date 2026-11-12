<script setup>
import { ref } from 'vue'

import ContactHero from '../components/contact/ContactHero.vue'
import ContactForm from '../components/contact/ContactForm.vue'

const isSubmitted = ref(false)

const handleSubmit = (formData) => {
  const subject = formData.title || 'Hi, ShiroTenma'
  const body = `Nama: ${formData.name || '-'}%0AEmail: ${formData.email || '-'}%0A%0A${formData.message || ''}`
  const mailto = `mailto:ohatenma@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
  window.location.href = mailto

  isSubmitted.value = true
}
</script>

<template>
  <div class="page bg-[#0B0D10] text-[#F0F0EB] py-14 sm:py-20">
    <section class="mx-auto max-w-7xl px-4 sm:px-6">
      <Transition name="fade-up" appear>
        <div class="grid gap-12 lg:grid-cols-12 lg:gap-14 items-start">
          <div class="lg:col-span-5">
            <ContactHero :is-submitted="isSubmitted" />
          </div>
          <div class="lg:col-span-7">
            <ContactForm :is-submitted="isSubmitted" @submit-form="handleSubmit" />
          </div>
        </div>
      </Transition>
    </section>
  </div>
</template>
