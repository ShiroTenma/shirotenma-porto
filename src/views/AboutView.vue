<script setup>
import avatarMain from '../assets/images/about/avatar-main.png'

import graphicsPoster from '../assets/images/works/graphics-poster.png'
import graphicsOverlay from '../assets/images/works/graphics-overlay.jpg'
import editingHighlight from '../assets/images/works/editing-highlight.jpg'
import commissionOne from '../assets/images/works/commission-1.png'
import commissionTwo from '../assets/images/works/commission-2.png'

const worksShowcase = [
  {
    id: 'w1',
    title: 'Tournament poster series',
    tag: 'Graphics',
    desc: 'Poster + story + feed square untuk event daring.',
    image: graphicsPoster,
    link: '/portfolio',
  },
  {
    id: 'w2',
    title: 'Stream overlay pack',
    tag: 'Overlay',
    desc: 'Starting/BRB/end + alert frame sesuai moodboard.',
    image: graphicsOverlay,
    link: '/portfolio',
  },
  {
    id: 'w3',
    title: 'Highlight / recap',
    tag: 'Video editing',
    desc: '60-90s recap dengan beat-synced cuts dan teks dinamis.',
    image: editingHighlight,
    link: '/portfolio',
  },
]

const commissionShowcase = [
  {
    id: 'c1',
    title: 'Overlay + alert set',
    tag: 'Graphics commission',
    turnaround: '3-5 hari',
    image: commissionOne,
  },
  {
    id: 'c2',
    title: 'Launch teaser + thumb',
    tag: 'Video commission',
    turnaround: '2-4 hari',
    image: commissionTwo,
  },
]

const experiences = [
  {
    year: '2021 - Sekarang',
    title: 'Freelance Graphics & Video',
    bullets: [
      'Overlay, banner, dan panel untuk streamer / VTuber.',
      'Poster event online dan social media kit.',
      'Highlight / MV pendek dengan teks dan motion ringan.',
    ],
  },
  {
    year: '2019 - 2021',
    title: 'Community Design',
    bullets: [
      'osu! BG/manipulation dan poster fan-event.',
      'Eksperimen color grading foto dan cover art.',
    ],
  },
]

const tools = [
  'Photoshop',
  'Clip Studio Paint',
  'After Effects',
  'Premiere',
  'OBS Overlay',
  'Illustrator (basic)',
]
</script>

<template>
  <div class="page about-page">
    <!-- HERO -->
    <section class="section about-hero">
      <div class="container about-hero-grid">
        <div class="about-hero-text">
          <p class="about-kicker">About</p>
          <h1 class="about-title">ShiroTenma</h1>
          <p class="about-subtitle">
            Desainer & editor yang fokus di overlay, poster event, thumbnail, dan highlight video.
            Senang ngulik warna bold dan layout yang tetap readable.
          </p>
          <div class="about-actions">
            <router-link to="/portfolio" class="btn btn-primary btn-sm">Lihat portfolio</router-link>
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
        <div class="about-section-head">
          <div>
            <p class="about-kicker">Selected Works</p>
            <h2 class="about-section-title">Beberapa karya pilihan</h2>
            <p class="about-section-text">
              Potongan karya dari graphics, overlay, dan video editing. Sisanya bisa kamu lihat
              langsung di halaman portfolio.
            </p>
          </div>
          <router-link to="/portfolio" class="about-link">Lihat semua</router-link>
        </div>

        <div class="about-cards-grid">
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
        <div class="about-section-head">
          <div>
            <p class="about-kicker">Commission</p>
            <h2 class="about-section-title">Beberapa hasil komisi</h2>
            <p class="about-section-text">
              Contoh paket overlay dan video yang sudah selesai. Bisa diadaptasi sesuai kebutuhanmu.
            </p>
          </div>
          <router-link to="/commission" class="about-link">Lihat detail paket</router-link>
        </div>

        <div class="about-commission-grid">
          <article v-for="item in commissionShowcase" :key="item.id" class="about-commission-card">
            <div class="about-commission-thumb" :style="{ backgroundImage: `url(${item.image})` }"></div>
            <div class="about-commission-body">
              <p class="about-card-tag">{{ item.tag }}</p>
              <h3 class="about-card-title">{{ item.title }}</h3>
              <p class="about-card-text">Selesai dalam {{ item.turnaround }}</p>
              <router-link to="/commission" class="about-card-link">Request</router-link>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section class="section about-experience">
      <div class="container">
        <div class="about-section-head">
          <div>
            <p class="about-kicker">Experience</p>
            <h2 class="about-section-title">Pengalaman</h2>
          </div>
        </div>

        <div class="about-timeline">
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
        <div class="about-section-head">
          <div>
            <p class="about-kicker">Tools</p>
            <h2 class="about-section-title">Peralatan kerja</h2>
          </div>
        </div>

        <div class="about-tools-grid">
          <div v-for="tool in tools" :key="tool" class="about-tool-chip">
            {{ tool }}
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section about-cta">
      <div class="container about-cta-box">
        <div>
          <p class="about-kicker">Let’s collaborate</p>
          <h2 class="about-section-title">Punya ide overlay, poster, atau video?</h2>
          <p class="about-section-text">
            Ceritakan saja singkat, nanti kita susun scope, moodboard, dan timeline yang nyaman buat
            kamu.
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
