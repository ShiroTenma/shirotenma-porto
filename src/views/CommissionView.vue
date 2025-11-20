<template>
  <div class="page">
    <section class="section section-dark">
      <div class="container">
        <h1 class="page-title">Commission!</h1>
        <p class="page-subtitle">
          Tertarik buat pesen desain atau editing? Pilih kebutuhanmu di bawah.
        </p>

        <div class="section-grid-3">
          <article class="service-card" v-for="item in items" :key="item.title">
            <h2 class="service-title">{{ item.title }}</h2>
            <p class="service-text">{{ item.text }}</p>
            <p class="service-tag">Mulai dari {{ item.price }}</p>
            <router-link to="/contact" class="btn btn-primary btn-sm"> Know more </router-link>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">Testimony</h2>
        <div class="testimony-grid">
          <article class="testimony-card" v-for="t in testimonies" :key="t.name">
            <p class="testimony-text">“{{ t.text }}”</p>
            <p class="testimony-name">{{ t.name }}</p>
            <p class="testimony-role">{{ t.role }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const items = [
  {
    title: 'Custom Edits',
    text: 'Editing satuan untuk poster, banner, thumbnail, atau overlay.',
    price: '$',
  },
  {
    title: 'Graphics Design',
    text: 'Paket branding kecil: logo sederhana, palet warna, dan banner.',
    price: '$$',
  },
  {
    title: 'Video Editing',
    text: 'Paket highlight / MV pendek untuk channel dan media sosial.',
    price: '$$',
  },
]

const testimonies = [
  {
    name: 'Gemma Nolen',
    role: 'Google',
    text: 'Kualitas desain konsisten dan gampang diajak diskusi ide.',
  },
  {
    name: 'Client A',
    role: 'Streamer',
    text: 'Banner dan overlay yang dibuat bener-bener cocok sama brand-ku.',
  },
  {
    name: 'Client B',
    role: 'Event Organizer',
    text: 'Respons cepat dan hasil final rapi, siap dipakai publish.',
  },
]
</script>
