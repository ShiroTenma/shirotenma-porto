<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  email: '',
  mobile: '',
  message: '',
})

const isSubmitted = ref(false)

const handleSubmit = () => {
  // simulasi kirim
  isSubmitted.value = true

  // reset form
  form.email = ''
  form.mobile = ''
  form.message = ''
}
</script>

<template>
  <div class="page">
    <section class="section section-dark">
      <div class="container contact-layout">
        <div>
          <h1 class="page-title">Interested with these?</h1>
          <p class="page-subtitle">
            Kirim detail projekmu di sini. Jelasin kebutuhan, deadline, dan budget kira-kira, biar
            bisa kukasih estimasi.
          </p>

          <p v-if="isSubmitted" class="page-subtitle">
            ✅ Thanks! Pesanmu sudah tercatat (simulasi).
          </p>
        </div>

        <form class="contact-form" @submit.prevent="handleSubmit">
          <label class="field">
            <span>Email</span>
            <input
              v-model="form.email"
              type="email"
              required
              placeholder="Please enter your email"
            />
          </label>

          <label class="field">
            <span>Mobile</span>
            <input v-model="form.mobile" type="tel" placeholder="Enter mobile" />
          </label>

          <label class="field">
            <span>Message</span>
            <textarea
              v-model="form.message"
              rows="4"
              required
              placeholder="Enter your message"
            ></textarea>
          </label>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  </div>
</template>
