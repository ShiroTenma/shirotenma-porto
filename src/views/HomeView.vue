<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// === SELECTED WORKS DI HOME (card yang geser) ===
const selectedWorksBase = [
  {
    id: 'w1',
    title: 'Social Media Banner',
    category: 'GRAPHICS DESIGN',
    gradientClass: 'home-portfolio-thumb--graphics-1',
  },
  {
    id: 'w2',
    title: 'Tournament Poster',
    category: 'GRAPHICS DESIGN',
    gradientClass: 'home-portfolio-thumb--graphics-2',
  },
  {
    id: 'w3',
    title: 'osu!profile overlay',
    category: 'GRAPHICS DESIGN',
    gradientClass: 'home-portfolio-thumb--graphics-3',
  },
  {
    id: 'w4',
    title: 'Youtube Thumbnail',
    category: 'GRAPHICS DESIGN',
    gradientClass: 'home-portfolio-thumb--graphics-4',
  },
  {
    id: 'w5',
    title: 'Highlight Reel',
    category: 'VIDEO EDITING',
    gradientClass: 'home-portfolio-thumb--editing-1',
  },
  {
    id: 'w6',
    title: 'Concept Shoot',
    category: 'PHOTOGRAPHY',
    gradientClass: 'home-portfolio-thumb--photo-1',
  },
]

// digandakan biar animasi loop halus
const selectedWorks = [...selectedWorksBase, ...selectedWorksBase]

// === SLIDER COMMISSION CTA ===
const commissionSlides = [
  {
    id: 'c1',
    title: 'Ready to do this?',
    subtitle:
      'Siap bantu bikin banner, overlay, dan video yang lebih niat buat stream atau channel kamu.',
    background: 'linear-gradient(120deg, #111827, #1e293b, #020617)',
  },
  {
    id: 'c2',
    title: 'Need a visual partner?',
    subtitle:
      'Buat project sekali atau jangka panjang, kita bisa ngobrol dulu dan kira-kira-in scope-nya.',
    background: 'linear-gradient(120deg, #1d3557, #457b9d, #1d3557)',
  },
  {
    id: 'c3',
    title: 'Let’s start something.',
    subtitle:
      'Ceritain singkat aja idemu. Detail konsep, mood, dan style bisa kita susun pelan-pelan.',
    background: 'linear-gradient(120deg, #3b0764, #7e22ce, #db2777)',
  },
]

const currentCommissionIndex = ref(0)
let commissionTimer = null

const startCommissionSlider = () => {
  if (commissionTimer) clearInterval(commissionTimer)
  commissionTimer = setInterval(() => {
    currentCommissionIndex.value = (currentCommissionIndex.value + 1) % commissionSlides.length
  }, 4000) // ~3s diam + ~1s animasi
}

onMounted(() => {
  startCommissionSlider()
})

onUnmounted(() => {
  if (commissionTimer) clearInterval(commissionTimer)
})
</script>

<template>
  <div class="page">
    <!-- HERO (HOME) -->
    <section id="top" class="hero">
      <div class="container">
        <div class="hero-inner">
          <div>
            <p class="hero-kicker">PORTFOLIO • COMMISSION</p>
            <h1 class="hero-title">
              ShiroTenma<br />
              Visual &amp; Editing.
            </h1>
            <p class="hero-text">
              Desain banner, overlay, thumbnail, dan video editing untuk streamer, VTuber, content
              creator, dan project personal yang pengen kelihatan lebih niat.
            </p>

            <div class="hero-actions">
              <router-link to="/portfolio" class="btn btn-primary btn-sm">
                Lihat portfolio
              </router-link>
              <router-link :to="{ path: '/', hash: '#about' }" class="btn btn-outline btn-sm">
                Tentang saya
              </router-link>
            </div>
          </div>

          <!-- sisi kanan hero: mini showcase -->
          <aside class="hero-showcase">
            <div class="hero-banner-row">
              <div class="banner-card">
                <div class="banner-thumb"></div>
                <p class="banner-title">Stream overlay &amp; banner</p>
              </div>
              <div class="banner-card">
                <div class="banner-thumb"></div>
                <p class="banner-title">Thumbnail &amp; social post</p>
              </div>
              <div class="banner-card">
                <div class="banner-thumb"></div>
                <p class="banner-title">Video highlight &amp; MV</p>
              </div>
            </div>
            <p class="hero-note">
              Fokus di warna, mood, dan style yang nyambung sama karakter kamu atau brand-mu.
            </p>
          </aside>
        </div>
      </div>
    </section>

    <!-- ABOUT (di-home, nav About scroll ke sini) -->
    <!-- ABOUT (Hello hero) -->
    <section id="about" class="section about-hello-section">
      <div class="container">
        <div class="about-layout">
          <!-- Ilustrasi / avatar -->
          <div class="about-hello-illustration">
            <div class="avatar-circle"></div>
          </div>

          <!-- Teks hello -->
          <div class="about-hello-body">
            <p class="about-hello-kicker">HELLO!</p>
            <h2 class="about-hello-title">Aku ShiroTenma.</h2>

            <p class="about-hello-text">
              Aku ngerjain desain visual dan editing buat kebutuhan creator dan project
              kecil–menengah. Mulai dari stream overlay, banner event, thumbnail, sampai video
              highlight buat channel.
            </p>
            <p class="about-hello-text">
              Fokusku ada di mood, warna, dan style yang nyambung sama karakter kamu atau brand yang
              lagi kamu bangun.
            </p>

            <div class="about-hello-tags">
              <span class="about-hello-tag">Graphics design</span>
              <span class="about-hello-tag">Video editing</span>
              <span class="about-hello-tag">Streaming overlay</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT DETAILS (Experience / Tools / Hobbies) -->
    <section class="section about-details-section">
      <div class="container">
        <div class="about-details-grid">
          <div class="about-details-col">
            <h3 class="about-details-title">Experience</h3>
            <ul class="about-details-list">
              <li>Freelance graphics &amp; video untuk streamer &amp; VTuber.</li>
              <li>Desain banner &amp; poster event online.</li>
              <li>Social media visual untuk beberapa brand kecil.</li>
            </ul>
          </div>

          <div class="about-details-col">
            <h3 class="about-details-title">Tools</h3>
            <ul class="about-details-list">
              <li>Photoshop / Clip Studio Paint</li>
              <li>After Effects / Premiere</li>
              <li>OBS overlay &amp; streaming assets</li>
            </ul>
          </div>

          <div class="about-details-col">
            <h3 class="about-details-title">Hobbies</h3>
            <ul class="about-details-list">
              <li>Game rhythm &amp; gacha.</li>
              <li>Eksperimen color grading &amp; poster fanart.</li>
              <li>Ngulik layout dan typography buat fun.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- SELECTED WORKS: CARD YANG GESER -->
    <section id="home-portfolio" class="section home-portfolio-section">
      <div class="container">
        <div class="home-portfolio-header">
          <div>
            <h2 class="home-portfolio-title">Selected Works</h2>
            <p class="home-portfolio-text">
              Beberapa judul karya dari kategori graphics, editing, dan photography. Untuk list
              lengkap, kamu bisa cek halaman portfolio atau detail commission.
            </p>

            <!-- tombol commission di bawah teks -->
            <router-link to="/commission" class="btn btn-primary btn-sm home-portfolio-cta">
              Lihat commission
            </router-link>
          </div>
        </div>

        <!-- deretan card yang auto-geser -->
        <div class="home-portfolio-loop">
          <div class="home-portfolio-loop-inner">
            <article
              v-for="work in selectedWorks"
              :key="work.id + '-loop'"
              class="home-portfolio-card"
            >
              <div class="home-portfolio-thumb" :class="work.gradientClass"></div>

              <div class="home-portfolio-card-body">
                <p class="home-portfolio-card-tag">
                  {{ work.category }}
                </p>
                <h3 class="home-portfolio-card-title">
                  {{ work.title }}
                </h3>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- COMMISSION CTA DENGAN SLIDER -->
    <section id="home-commission" class="section home-commission-section">
      <div class="container">
        <div class="home-commission-inner">
          <div
            v-for="(slide, index) in commissionSlides"
            :key="slide.id"
            class="home-commission-slide"
            :class="{ 'home-commission-slide--active': index === currentCommissionIndex }"
            :style="{ backgroundImage: slide.background }"
          >
            <div class="home-commission-overlay">
              <p class="home-commission-kicker">Let’s connect</p>
              <h2 class="home-commission-title">
                {{ slide.title }}
              </h2>
              <p class="home-commission-text">
                {{ slide.subtitle }}
              </p>

              <router-link to="/commission" class="btn btn-primary btn-sm"> Reach out </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
