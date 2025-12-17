<script setup>
import AboutHero from '../components/about/AboutHero.vue'
import AboutWorks from '../components/about/AboutWorks.vue'
import AboutCommission from '../components/about/AboutCommission.vue'
import AboutExperience from '../components/about/AboutExperience.vue'
import AboutTools from '../components/about/AboutTools.vue'
import AboutCTA from '../components/about/AboutCTA.vue'

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

const ctaBackgroundStyle = {
  backgroundImage: `linear-gradient(120deg, rgba(15,17,23,0.88), rgba(15,17,23,0.55)), url(${commissionOne})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}
</script>

<template>
  <div class="page bg-slate-50 text-slate-900">
    <AboutHero />
    <AboutWorks :works="worksShowcase" />
    <AboutCommission :items="commissionShowcase" />
    <AboutExperience :experiences="experiences" />
    <AboutTools :tools="tools" />
    <AboutCTA :background-style="ctaBackgroundStyle" />
  </div>
</template>
