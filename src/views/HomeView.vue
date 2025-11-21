<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// teks yang diputar di section "show portfolio"
const portfolioLoopTitlesBase = [
  'Social Media Banner',
  'osu!mapset background Manipulation',
  'osu!profile overlay',
  'Youtube Thumbnail',
  'Instagram Post',
  'More Designs',
]

// digandakan biar loop marquee kelihatan nyambung
const portfolioLoopTitles = [...portfolioLoopTitlesBase, ...portfolioLoopTitlesBase]

// slide untuk Commission CTA (sementara pakai gradient,
// nanti gampang diganti ke url('...') gambar beneran)
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
let commissionTimer

const startCommissionSlider = () => {
  if (commissionTimer) clearInterval(commissionTimer)
  commissionTimer = setInterval(() => {
    currentCommissionIndex.value = (currentCommissionIndex.value + 1) % commissionSlides.length
  }, 4000) // ~3s diam + ~1s anim
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

    <!-- ABOUT (di-home, nanti link About di nav scroll ke sini) -->
    <section id="about" class="section">
      <div class="container">
        <div class="about-layout">
          <div class="about-avatar">
            <div class="avatar-circle"></div>
          </div>

          <div>
            <h2 class="section-title">Hello!</h2>
            <p class="page-subtitle">
              Aku ngerjain desain visual dan editing dengan fokus ke kebutuhan creator dan project
              kecil–menengah. Mulai dari stream overlay, banner event, sampai video highlight buat
              channel.
            </p>

            <div class="home-about-columns">
              <div class="home-about-col">
                <h3 class="home-about-col-title">Experience</h3>
                <ul class="home-about-list">
                  <li>Freelance graphics &amp; video untuk streamer &amp; VTuber.</li>
                  <li>Desain banner &amp; poster event online.</li>
                  <li>Social media visual untuk beberapa brand kecil.</li>
                </ul>
              </div>

              <div class="home-about-col">
                <h3 class="home-about-col-title">Tools</h3>
                <ul class="home-about-list">
                  <li>Photoshop / Clip Studio Paint</li>
                  <li>After Effects / Premiere</li>
                  <li>OBS overlay &amp; streaming assets</li>
                </ul>
              </div>

              <div class="home-about-col">
                <h3 class="home-about-col-title">Hobbies</h3>
                <ul class="home-about-list">
                  <li>Game rhythm &amp; gacha.</li>
                  <li>Eksperimen color grading &amp; poster fanart.</li>
                  <li>Ngulik layout dan typography buat fun.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SHOW PORTFOLIO (text loop + tombol ke Portfolio & Commission) -->
    <section id="home-portfolio" class="section home-portfolio-section">
      <div class="container">
        <div class="home-portfolio-header">
          <div>
            <h2 class="home-portfolio-title">Selected Works</h2>
            <p class="home-portfolio-text">
              Beberapa judul karya dari kategori graphics, editing, dan photography. Untuk list
              lengkap, kamu bisa cek halaman portfolio atau detail commission.
            </p>
          </div>

          <div class="home-portfolio-actions">
            <router-link to="/portfolio" class="btn btn-primary btn-sm">
              Buka portfolio
            </router-link>
            <router-link to="/commission" class="btn btn-outline btn-sm">
              Lihat commission
            </router-link>
          </div>
        </div>

        <div class="home-portfolio-loop">
          <div class="home-portfolio-loop-inner">
            <span
              v-for="(title, index) in portfolioLoopTitles"
              :key="`${title}-${index}`"
              class="home-portfolio-chip"
            >
              {{ title }}
            </span>
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
