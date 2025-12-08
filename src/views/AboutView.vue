<script setup>
import avatarMain from '../assets/images/about/avatar-main.png'

import graphicsAllBanners from '../assets/images/works/graphics-all-banners.jpg'
import graphicsOverlay from '../assets/images/works/editing-highlight.jpg'
import commissionOne from '../assets/images/works/banner-comms.jpg'
import commissionTwo from '../assets/images/works/editing-motion.png'
import cosplayPhoto from '../assets/images/works/photo-cosplay1.jpg'
import commissionThree from '../assets/images/works/cosplay-comms.jpg'

const worksShowcase = [
  {
    id: 'w1',
    title: 'Social Media Banners',
    tag: 'Graphics',
    desc: 'Banner yang biasa dipakai di berbagai sosial media dan juga termasuk beberapa game yang mendukung banner kustom.',
    image: graphicsAllBanners,
    link: '/portfolio',
  },
  {
    id: 'w2',
    title: 'Custom Edits',
    tag: 'Video Editing',
    desc: 'MV editing seusai dengan Klien.',
    image: graphicsOverlay,
    link: '/portfolio',
  },
  {
    id: 'w3',
    title: 'Cosplay Photography',
    tag: 'Photography',
    desc: 'Fotografi cosplay dengan sesi pemotretan terpisah maupun saat Coswalk Competition.',
    image: cosplayPhoto,
    link: '/portfolio',
  },
]

const commissionShowcase = [
  {
    id: 'c1',
    title: 'Social Media Banner Set',
    tag: 'Graphics commission',
    image: commissionOne,
  },
  {
    id: 'c2',
    title: 'Custom MV Edit',
    tag: 'Video commission',
    image: commissionTwo,
  },
  {
    id: 'c3',
    title: 'Cosplay Photoshoot',
    tag: 'Photography commission',
    image: commissionThree,
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

const tools = [
  'Photoshop',
  'After Effects',
  'Figma',
  'Premiere',
  'Vegas Pro',
  'Illustrator (basic)',
  'Lightroom',
  'Canva',
]
</script>

<template>
  <div class="page about-page">
    <!-- HERO -->
    <section class="section about-hero">
      <div v-inview class="container about-hero-grid">
        <div class="about-hero-text">
          <p class="about-kicker">About</p>
          <h1 class="about-title">ShiroTenma</h1>
          <p class="about-subtitle">
            Seorang manusia yang mempunyai passion di hampir semua bidang kreatif seperti Graphics
            Design, Video Editing, Motion graphics, Typography, dan juga dalam Fotografi dan
            Videografi. Biasanya dia suka banget eksplorasi style visual yang unik dan menarik
            perhatian dan juga sesuai dengan bayangan klien itu sendiri.
          </p>
          <div class="about-actions">
            <router-link to="/portfolio" class="btn btn-primary btn-sm"
              >Lihat portfolio</router-link
            >
            <router-link to="/contact" class="btn btn-outline btn-sm">Hubungi</router-link>
          </div>
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
        <div v-inview class="about-section-head">
          <div>
            <p class="about-kicker">Selected Works</p>
            <h2 class="about-section-title">Beberapa karya pilihan</h2>
            <p class="about-section-text">
              Potongan karya dari graphics, Editing, dan Fotografi yang terbaik. Sisanya bisa kamu
              lihat langsung di halaman portfolio.
            </p>
          </div>
          <router-link to="/portfolio" class="about-link">Lihat semua</router-link>
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

    <!-- COMMISSION HIGHLIGHTS -->
    <section class="section about-commission">
      <div class="container">
        <div v-inview class="about-section-head">
          <div>
            <p class="about-kicker">Commission</p>
            <h2 class="about-section-title">Beberapa hasil komisi</h2>
            <p class="about-section-text">
              Contoh paket overlay dan video yang sudah selesai. Bisa diadaptasi sesuai kebutuhanmu.
            </p>
          </div>
          <router-link to="/commission" class="about-link">Lihat detail paket</router-link>
        </div>

        <div v-inview class="about-commission-grid">
          <article v-for="item in commissionShowcase" :key="item.id" class="about-commission-card">
            <div
              class="about-commission-thumb"
              :style="{ backgroundImage: `url(${item.image})` }"
            ></div>
            <div class="about-commission-body">
              <p class="about-card-tag">{{ item.tag }}</p>
              <h3 class="about-card-title">{{ item.title }}</h3>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section class="section about-experience">
      <div class="container">
        <div v-inview class="about-section-head">
          <div>
            <p class="about-kicker">Experience</p>
            <h2 class="about-section-title">Pengalaman</h2>
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

    <!-- TOOLS -->
    <section class="section about-tools">
      <div class="container">
        <div v-inview class="about-section-head">
          <div>
            <p class="about-kicker">Tools</p>
            <h2 class="about-section-title">Peralatan kerja</h2>
          </div>
        </div>

        <div v-inview class="about-tools-grid">
          <div v-for="tool in tools" :key="tool" class="about-tool-chip">
            {{ tool }}
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section about-cta">
      <div v-inview class="container about-cta-box">
        <div>
          <p class="about-kicker">Let’s collaborate</p>
          <h2 class="about-section-title">Punya ide untuk poster, atau video?</h2>
          <p class="about-section-text">
            Ceritakan saja secara singkat, nanti kita susun moodboard bareng sampe cocok! baru
            sisanya aku kerjakan.
          </p>
        </div>
        <div class="about-cta-actions">
          <router-link to="/commission" class="btn btn-primary btn-sm">Lihat paket</router-link>
          <router-link to="/contact" class="btn btn-outline btn-sm">Hubungi</router-link>
        </div>
      </div>
    </section>
  </div>
</template>
