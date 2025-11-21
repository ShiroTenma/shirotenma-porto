<script setup>
const packages = [
  {
    id: 'custom',
    name: 'Custom Edits',
    badge: 'POSTER • BANNER • THUMBNAIL',
    price: 'Mulai dari $',
    points: [
      'Editing satuan untuk poster, banner, thumbnail, atau overlay.',
      'Cocok buat sekali pakai / event kecil.',
      'Revisi ringan disesuaikan kebutuhan.',
    ],
  },
  {
    id: 'graphics',
    name: 'Graphics Design',
    badge: 'BRANDING • BANNER • OVERLAY',
    price: 'Mulai dari $$',
    points: [
      'Paket branding kecil: logo sederhana, palet warna, dan banner.',
      'Satu paket visual supaya feed / channel lebih konsisten.',
      'Rekomendasi style sesuai karakter / brand kamu.',
    ],
  },
  {
    id: 'video',
    name: 'Video Editing',
    badge: 'HIGHLIGHT • MV • CLIPS',
    price: 'Mulai dari $$',
    points: [
      'Paket highlight / MV pendek untuk channel dan media sosial.',
      'Beat-synced cuts, teks dinamis, dan basic motion.',
      'Export siap pakai untuk platform yang kamu mau.',
    ],
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

<template>
  <div class="page">
    <!-- HERO + PLAN CARDS -->
    <section class="section section-dark commission-hero">
      <div class="container">
        <div class="commission-header">
          <h1 class="page-title">Commission!</h1>
          <p class="page-subtitle commission-subtitle">
            Tertarik buat pesen desain atau editing? Pilih paket yang paling pas di bawah ini.
            Detail bisa fleksibel, yang penting kita ngobrol dulu soal kebutuhanmu.
          </p>

          <p class="commission-helper">
            Slot terbatas. Kalau ragu soal budget, boleh banget tanya dulu lewat form atau DM 😊
          </p>
        </div>

        <div class="portfolio-plan-row commission-plan-row">
          <article
            v-for="pkg in packages"
            :key="pkg.id"
            class="portfolio-plan-card portfolio-plan-card--light commission-plan-card"
          >
            <p class="portfolio-plan-badge">
              {{ pkg.badge }}
            </p>

            <h2 class="portfolio-plan-title">
              {{ pkg.name }}
            </h2>

            <p class="portfolio-plan-price">
              {{ pkg.price }}
            </p>

            <ul class="portfolio-plan-list">
              <li v-for="point in pkg.points" :key="point">
                {{ point }}
              </li>
            </ul>

            <router-link to="/contact" class="btn btn-primary btn-sm portfolio-plan-cta">
              Know more
            </router-link>
          </article>
        </div>
      </div>
    </section>

    <!-- TESTIMONY (tetap seperti konsep sebelumnya) -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">Testimony</h2>
        <div class="testimony-grid">
          <article v-for="t in testimonies" :key="t.name" class="testimony-card">
            <p class="testimony-text">“{{ t.text }}”</p>
            <p class="testimony-name">{{ t.name }}</p>
            <p class="testimony-role">{{ t.role }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
