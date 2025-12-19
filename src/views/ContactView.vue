<script setup>
import { reactive, ref } from 'vue'

import ContactHero from '../components/contact/ContactHero.vue'
import ContactForm from '../components/contact/ContactForm.vue'

const form = reactive({
  email: '',
  mobile: '',
  message: '',
})

const isSubmitted = ref(false)

const handleSubmit = () => {
  isSubmitted.value = true
  form.email = ''
  form.mobile = ''
  form.message = ''
}
</script>

<template>
  <div class="page bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
    <section class="section section-shell bg-slate-50 dark:bg-slate-900">
      <Transition name="fade-up" appear>
        <div class="section-container">
          <div class="grid gap-10 md:grid-cols-2 items-start">
            <ContactHero :is-submitted="isSubmitted" />
            <ContactForm :form="form" :is-submitted="isSubmitted" @submit-form="handleSubmit" />
          </div>
        </div>
      </Transition>
    </section>
  </div>
</template>
