<script setup>
import { ref, computed } from 'vue'

import graphicsPoster from '../assets/images/works/graphics-poster.png'
import graphicsOverlay from '../assets/images/works/graphics-overlay.jpg'
import graphicsThumbnail from '../assets/images/works/graphics-thumbnail.png'
import editingHighlight from '../assets/images/works/editing-highlight.jpg'
import editingMotion from '../assets/images/works/editing-motion.png'
import photoEvents from '../assets/images/works/photo-events.jpg'

const packages = [
  {
    id: 'custom',
    name: 'Custom Edits',
    badge: 'POSTER �?� BANNER �?� THUMBNAIL',
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
    badge: 'BRANDING �?� BANNER �?� OVERLAY',
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
    badge: 'HIGHLIGHT �?� MV �?� CLIPS',
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

const packageOptions = {
  custom: [
    {
      id: 'c-1',
      title: 'Thumbnail / banner set',
      desc: '3-5 thumbnail atau banner untuk seri konten yang sama.',
      image: graphicsThumbnail,
    },
    {
      id: 'c-2',
      title: 'Overlay one-off',
      desc: 'Overlay single scene dengan alert + panel sederhana.',
      image: graphicsOverlay,
    },
  ],
  graphics: [
    {
      id: 'g-1',
      title: 'Overlay pack',
      desc: 'Starting/BRB/end + alerts + panels dengan moodboard custom.',
      image: graphicsOverlay,
    },
    {
      id: 'g-2',
      title: 'Event poster set',
      desc: 'Poster utama + story + feed square, siap publish multi platform.',
      image: graphicsPoster,
    },
    {
      id: 'g-3',
      title: 'Thumbnail series',
      desc: '3-5 thumbnail dengan layout konsisten untuk satu campaign.',
      image: graphicsThumbnail,
    },
  ],
  video: [
    {
      id: 'v-1',
      title: 'Highlight / recap',
      desc: '60-90s highlight dengan beat-synced cuts dan teks dinamis.',
      image: editingHighlight,
    },
    {
      id: 'v-2',
      title: 'Motion / teaser',
      desc: '30-45s teaser vertikal/horizontal dengan animasi teks.',
      image: editingMotion,
    },
    {
      id: 'v-3',
      title: 'Photo + grading',
      desc: '10-15 foto dengan color grading bold untuk event atau promo.',
      image: photoEvents,
    },
  ],
}

const activePackageId = ref(null)
const isModalOpen = computed(() => !!activePackageId.value)
const activePackage = computed(() => packages.find((p) => p.id === activePackageId.value))
const activeOptions = computed(() => packageOptions[activePackageId.value] || [])

const openPackage = (id) => {
  activePackageId.value = id
}

const closeModal = () => {
  activePackageId.value = null
}
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
            Slot terbatas. Kalau ragu soal budget, boleh banget tanya dulu lewat form atau DM dY~S
          </p>
        </div>

        <div class="portfolio-plan-row commission-plan-row">
          <article
            v-for="pkg in packages"
            :key="pkg.id"
            class="portfolio-plan-card portfolio-plan-card--light commission-plan-card"
            role="button"
            tabindex="0"
            @click="openPackage(pkg.id)"
            @keydown.enter.prevent="openPackage(pkg.id)"
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

            <div class="commission-card-actions">
              <button type="button" class="btn btn-primary btn-sm portfolio-plan-cta">
                Lihat detail
              </button>
              <router-link to="/contact" class="btn btn-outline btn-sm">Contact</router-link>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- TESTIMONY -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">Testimony</h2>
        <div class="testimony-grid">
          <article v-for="t in testimonies" :key="t.name" class="testimony-card">
            <p class="testimony-text">�?o{{ t.text }}�??</p>
            <p class="testimony-name">{{ t.name }}</p>
            <p class="testimony-role">{{ t.role }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- MODAL DETAIL OPSI -->
    <transition name="fade">
      <div v-if="isModalOpen" class="commission-modal" @click.self="closeModal">
        <div class="commission-modal-box">
          <header class="commission-modal-head">
            <div>
              <p class="commission-modal-kicker">{{ activePackage?.badge }}</p>
              <h3 class="commission-modal-title">{{ activePackage?.name }}</h3>
              <p class="commission-modal-text">
                {{ activePackage?.points?.[0] }}
              </p>
            </div>
            <button type="button" class="commission-modal-close" @click="closeModal">Tutup</button>
          </header>

          <div class="commission-modal-options">
            <article
              v-for="option in activeOptions"
              :key="option.id"
              class="commission-modal-card"
            >
              <div class="commission-modal-thumb" :style="{ backgroundImage: `url(${option.image})` }"></div>
              <div class="commission-modal-body">
                <h4 class="commission-modal-card-title">{{ option.title }}</h4>
                <p class="commission-modal-card-text">{{ option.desc }}</p>
              </div>
              <div class="commission-modal-meta">
                <router-link to="/contact" class="commission-modal-link">Tanya dulu</router-link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
