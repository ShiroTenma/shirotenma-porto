<template>
  <div class="page">
    <section class="section">
      <div class="container about-layout">
        <div class="about-avatar">
          <!-- Tempat avatar / ilustrasi -->
          <div class="avatar-circle"></div>
        </div>

        <div class="about-text">
          <h1 class="page-title">Siapa sih aku?</h1>
          <p class="page-subtitle">
            Desainer & editor yang sering ngulik banner, osu! BG, dan video pendek. Suka eksplor
            warna ungu, magenta, dan lighting yang dramatis.
          </p>
          <p>
            Mulai dari bantu temen bikin banner sampai ngerjain commission buat klien luar, aku
            fokus ke karya yang eye-catching tapi tetap readable.
          </p>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container">
        <h2 class="section-title">Hidupku Ngapain Aja?</h2>
        <div class="section-grid-3">
          <div v-for="card in cards" :key="card.title" class="service-card">
            <h3 class="service-title">{{ card.title }}</h3>
            <p class="service-text">{{ card.text }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const cards = [
  {
    title: 'Video Editing',
    text: 'Ngedit highlight, MV pendek, dan clips untuk media sosial.',
  },
  {
    title: 'Graphics Design',
    text: 'Ngerjain banner, overlay, dan elemen grafis lain.',
  },
  {
    title: 'Photography',
    text: 'Kadang hunting foto dan eksperimen color grading.',
  },
]
</script>
