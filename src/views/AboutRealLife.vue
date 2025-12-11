<script setup>
import avatarMain from '../assets/images/about/avatar-main.png'

import graphicsAllBanners from '../assets/images/works/graphics-all-banners.jpg'
import graphicsOverlay from '../assets/images/works/editing-highlight.jpg'
import cosplayPhoto from '../assets/images/works/photo-cosplay1.jpg'
import videography from '../assets/images/works/videography-card.jpg'

const worksShowcase = [
  {
    id: 'w1',
    title: 'Photography',
    tag: 'Photography',
    desc: 'Fotografi cosplay dengan sesi pemotretan terpisah maupun saat Coswalk Competition.',
    image: cosplayPhoto,
    link: '/portfolio',
  },
  {
    id: 'w2',
    title: 'Graphics Design',
    tag: 'Graphics',
    desc: 'Banner yang biasa dipakai di berbagai sosial media dan juga termasuk beberapa game yang mendukung banner kustom.',
    image: graphicsAllBanners,
    link: '/portfolio',
  },
  {
    id: 'w3',
    title: 'After Effects Video Editor',
    tag: 'Video Editing',
    desc: 'MV editing seusai dengan Klien.',
    image: graphicsOverlay,
    link: '/portfolio',
  },
  {
    id: 'w4',
    title: 'Videography',
    tag: 'Videography',
    desc: 'Videografi yang menyesuaikan dengan event ataupun permintaan klien.',
    image: videography,
    link: '/portfolio',
  },
]

const experiences = [
  {
    year: '2021 - Sekarang',
    title: 'Freelance Graphics Design & Video Editing',
    bullets: [
      'Digital Poster, social media kit, dan Kebutuhan Graphics lainnya.',
      'Custom MV pendek dengan teks dan motion ringan serta Effects Sesuai permintaan klien.',
      'Banner, Overlay, dan Kebutuhan Streaming lainnya.',
    ],
  },
  {
    year: '2024 - Sekarang',
    title:
      'Ketua Divisi Creative Media - Unit Kegiatan Mahasiswa Foregin Language ITK Society (UKM FOLKS)',
    bullets: [
      'Monthly feeds and Reels social media.',
      'Brainstorming dan pembuatan konten visual untuk keperluan promosi kegiatan UKM FOLKS.',
      'Kebutuhan dokumentasi foto dan video kegiatan UKM FOLKS.',
      'Kebutuhan desain untuk semua kegiatan UKM FOLKS.',
    ],
  },
  {
    year: '2025 - Sekarang',
    title: 'Freelance Photographer & Videographer - Raise Production',
    bullets: [
      'Wisuda Photography',
      'Helper Wedding dan Event Photography.',
      'Helper Videography Content Creation.',
    ],
  },
  {
    year: '2025 - Sekarang',
    title: 'Freelance Photographer & Designer - KOGASHAPROJECT.ID',
    bullets: [
      'Photoshoot untuk Cosplay.',
      'Pembuatan feeds social media.',
      'Event Documentation (Mainly Coswalk) Photography.',
      'Design untuk Photocard dan Feed Social Media.',
    ],
  },
  {
    year: '2023 - Sekarang',
    title: 'osu! Kalimantan Timur Community Designer',
    bullets: [
      'osu! Banner free dan Commission. Thumbnail, dan BG Manipulation.',
      'ID card untuk semua member osu! Kalimantan Timur',
      'osu!background Map, Manipulation Fanart dari member yang buat Map.',
    ],
  },
]
</script>

<template>
  <div class="page about-page">
    <!-- HERO -->
    <section class="section about-hero">
      <div v-inview class="container about-hero-grid">
        <div class="about-hero-text">
          <p class="about-kicker">About</p>
          <h1 class="about-title-rl">AKMAL FALAH MAULANA</h1>
          <p class="about-header">11231006 | INFOMATIKA | INSTITUT TEKNOLOGI KALIMANTAN</p>
          <p class="about-subtitle">
            Seorang manusia yang mempunyai passion di hampir semua bidang kreatif seperti Graphics
            Design, Video Editing, Motion graphics, Typography, dan juga dalam Fotografi dan
            Videografi. Biasanya dia suka banget eksplorasi style visual yang unik dan menarik
            perhatian dan juga sesuai dengan bayangan klien itu sendiri.
          </p>
        </div>

        <div class="about-hero-card">
          <div class="about-avatar-frame" :style="{ backgroundImage: `url(${avatarMain})` }"></div>
          <div class="about-hero-meta">
            <span class="about-chip">Graphics</span>
            <span class="about-chip">Video</span>
            <span class="about-chip">Photo</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SELECTED WORKS -->
    <section class="section about-works">
      <div class="container">
        <div v-inview class="about-section-head about-head-grid">
          <div class="about-head-left">
            <p class="about-kicker">Skill issue</p>
            <h2 class="about-section-title">Spill Skill ku nih!</h2>
            <router-link to="/portfolio" class="about-link about-head-link"
              >Lihat semua</router-link
            >
          </div>
          <p class="about-section-text about-head-desc">
            Skill yang aku asah hingga bisa menguasai dan menjadi bakat dalam diriku. Beberapa skill
            yang aku kuasain dan aku banggakan seperti
          </p>
        </div>

        <div v-inview class="about-cards-grid">
          <article v-for="item in worksShowcase" :key="item.id" class="about-card">
            <div class="about-card-thumb" :style="{ backgroundImage: `url(${item.image})` }"></div>
            <div class="about-card-body">
              <p class="about-card-tag">{{ item.tag }}</p>
              <h3 class="about-card-title">{{ item.title }}</h3>
              <p class="about-card-text">{{ item.desc }}</p>
              <router-link :to="item.link" class="about-card-link">Lihat detail</router-link>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section class="section about-experience-rl">
      <div class="container">
        <div v-inview class="about-section-head">
          <div>
            <p class="about-kicker">Experience</p>
            <h2 class="about-section-title-rl">Pengalaman</h2>
          </div>
        </div>

        <div v-inview class="about-timeline">
          <article v-for="exp in experiences" :key="exp.title" class="about-timeline-item">
            <div class="about-timeline-year">{{ exp.year }}</div>
            <div class="about-timeline-body">
              <h3 class="about-timeline-title">{{ exp.title }}</h3>
              <ul>
                <li v-for="bullet in exp.bullets" :key="bullet">{{ bullet }}</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
