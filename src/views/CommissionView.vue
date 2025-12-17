<script setup>
import { ref, computed, watch, onUnmounted } from 'vue'

import CommissionHero from '../components/commission/CommissionHero.vue'
import CommissionTestimony from '../components/commission/CommissionTestimony.vue'
import CommissionModal from '../components/commission/CommissionModal.vue'

const images = import.meta.glob('../assets/images/**/*.{png,jpg,jpeg,JPG}', {
  eager: true,
  import: 'default',
})

const img = (path) => images[`../assets/images/${path}`] ?? ''

const packages = [
  {
    id: 'custom',
    name: 'Custom Edits',
    badge: 'HIGHLIGHT / MV / CLIPS',
    price: 'Mulai dari Rp. 30.000',
    image: img('works/editing-amv.jpg'),
    points: [
      'Editing satuan untuk kebutuhan pribadi maupun branding.',
      'Cocok buat sekali pakai / event kecil.',
      'Revisi ringan disesuaikan dengan kebutuhan.',
    ],
  },
  {
    id: 'graphics',
    name: 'Graphics Design',
    badge: 'POSTER / BANNER / BRANDING',
    price: 'Mulai dari Rp. 40.000',
    image: img('works/graphics-more-samples.jpg'),
    points: [
      'Semua Desain untuk kebutuhan Sosial Media maupun Promosi.',
      'Style desain yang menarik dan eye-cathing, sesuai dengan permintaan klien.',
      'Kegunaan desain bisa hanya digital maupun Fisik (tetapi saya tidak bisa buat fisik langsung).',
    ],
  },
  {
    id: 'video',
    name: 'Photography',
    badge: 'POTRAIT / EVENT / COSPLAY',
    price: 'Mulai dari Rp. 60.0000',
    image: img('works/photo-graduation.jpg'),
    points: [
      'Fotografi dengan Hasil terbaik.',
      'Hasil foto diedit dengan color grading dan editing menyesuaikan pilihan.',
      'Foto bisa langsung dipakai ke manapun kamu mau!',
    ],
  },
]

const testimonies = [
  {
    name: 'Gemma Nolen',
    role: 'osu!player',
    text: 'Gacor kang sesuai permintaan, nanti lagi aku komis ke kamu.',
  },
  {
    name: 'Client A',
    role: 'Streamer',
    text: 'Banner dan overlay yang dibuat cocok banget sama brand-ku.',
  },
  {
    name: 'Client B',
    role: 'Event Organizer',
    text: 'Respons cepat dan hasil final rapi, siap dipublish bahkan siap dicetak.',
  },
]

const packageOptions = {
  custom: [
    {
      id: 'c-1',
      title: 'Custom Edit',
      image: img('works/editing-amv.jpg'),
      points: [
        'Hasil Custom Edit sesuai dengan keinginan klien!',
        'Resolusi file Full HD/1080p dengan Rasio menyesuaikan klien, dan Durasi maksimal 1 menit',
        'Effects, transisi dan teks sesuai permintaan klien',
      ],
      price: 'Mulai dari Rp. 40.000',
    },
    {
      id: 'c-2',
      title: 'Motion Graphics or Typography',
      image: img('works/editing-highlight.jpg'),
      points: [
        'Hasil video yang sesuai dengan keinginan klien!',
        'Resolusi file Full HD/1080p dengan Rasio menyesuaikan klien',
        'Durasi video sesuai kebutuhan klien (maks 5 menit)',
      ],
      price: '(harga diskusi lebih lanjut)',
    },
  ],
  graphics: [
    {
      id: 'g-1',
      title: 'osu! or Social Media Banner',
      image: img('works/graphics-youtube-banner.jpg'),
      points: [
        'Banner set untuk osu! atau sosial media (Facebook / X / YouTube).',
        'Rasio dan ukuran menyesuaikan platform yang kamu pakai.',
        'Siap pakai dalam format PNG dengan warna sesuai moodboard.',
      ],
      price: 'Mulai dari Rp. 50.000',
    },
    {
      id: 'g-2',
      title: 'osu!banner and Profile Picture set',
      image: img('works/osu-banner-profile.jpg'),
      points: [
        'Header + profile panel untuk osu! lengkap dengan accent visual.',
        'Konsisten secara warna, font, dan komposisi antar set.',
        'File akhir siap upload, termasuk versi web dan mobile.',
      ],
      price: 'Mulai dari Rp. 80.000',
    },
    {
      id: 'g-3',
      title: 'osu!profile lite set',
      image: img('works/osu-lite.jpg'),
      points: [
        'Lite set berisi Banner, Header, dan profile Custom untuk osu!profile kamu!',
        'Elemen minimal tapi tetap matching dengan karakter pilihan kamu.',
        'Pilihan warna bisa menyesuaikan referensi yang kamu berikan.',
      ],
      price: 'Mulai dari Rp. 125.000',
    },
    {
      id: 'g-4',
      title: 'General Design Small Size',
      image: img('works/graphics-small-media.jpg'),
      points: [
        'Desain promo kecil: ID Card, banner, Flyer, dll.',
        'Ukuran menyesuaikan dengan permintaan klien.',
        'File siap cetak (CMYK) dan file Digital (RGB) untuk kebutuhan Promosi digital.',
        'Revisi ringan supaya cepat siap publish.',
      ],
      price: 'Mulai dari Rp. 40.000',
    },
    {
      id: 'g-5',
      title: 'General Design Large Size',
      image: img('works/graphics-large-media.jpg'),
      points: [
        'Desain ukuran besar: Mousepad, roll-up / banner panjang, Backdrop, Venue 2D Desain, dll.',
        'File siap cetak (CMYK) dengan PPI tinggi agar HD.',
        'Layout fokus keterbacaan dan hierarki teks yang kuat serta hiearki desain yang apik.',
      ],
      price: 'Mulai dari Rp. 70.000',
    },
    {
      id: 'g-6',
      title: 'Digital Media Set',
      image: img('works/graphics-digital-media.jpg'),
      points: [
        'Satu paket visual untuk beberapa platform sekaligus.',
        'Template warna/font diseragamkan supaya brand konsisten.',
        'Termasuk versi square, vertical, dan horizontal jika dibutuhkan.',
      ],
      price: 'Mulai dari Rp. 40.000',
    },
  ],
  video: [
    {
      id: 'v-1',
      title: 'Cosplay Photoshoot Session',
      image: img('works/cosplay-potrait-8.jpg'),
      points: [
        'Sesi foto cosplay dengan durasi maksimal 1 jam dengan foto 15-30.',
        'Semua hasil foto di edit ringan (tone, exposure, blemish) serta color grading lewat Lightroom.',
        'Full Editing untuk beberapa foto terpilih.',
      ],
      price: 'Mulai dari Rp. 60.000 (Kontak via KOGASHAPRPOJECT.ID)',
    },
    {
      id: 'v-2',
      title: 'Graduation Photoshoot Session',
      image: img('works/photos-graduation-2.jpg'),
      points: [
        'Foto wisuda professional.',
        'Semua Hasil di edit ringan tapi professional.',
        'untuk Foto wisuda akan di manage oleh Studio Raise Productions.',
      ],
      price: '(Harga mengikuti Studio Raise Production)',
    },
    {
      id: 'v-3',
      title: 'Events Photo + Video Package',
      image: img('works/photo-events-rewarding.JPG'),
      points: [
        '- Foto dan Video dokumentasi acara hingga berakhir.',
        '- Semua hasil foto di edit ringan serta color grading pada video.',
        '- Video highlight berdurasi 3-5 menit.',
      ],
      price: '(Harga mengikuti Studio Raise Production)',
    },
  ],
}

const activePackageId = ref(null)
const contactModalOpen = ref(false)
const isModalOpen = computed(() => !!activePackageId.value)
const activePackage = computed(() => packages.find((p) => p.id === activePackageId.value))
const activeOptions = computed(() => packageOptions[activePackageId.value] || [])

const openPackage = (id) => {
  activePackageId.value = id
}

const closeModal = () => {
  activePackageId.value = null
  contactModalOpen.value = false
}

const openContactOptions = () => {
  contactModalOpen.value = true
}

const closeContactOptions = () => {
  contactModalOpen.value = false
}

watch(isModalOpen, (open) => {
  const body = document.body
  const html = document.documentElement
  if (!body || !html) return
  if (open) {
    body.style.overflow = 'hidden'
    html.style.overflow = 'hidden'
  } else {
    body.style.overflow = ''
    html.style.overflow = ''
  }
})

onUnmounted(() => {
  const body = document.body
  const html = document.documentElement
  if (body) body.style.overflow = ''
  if (html) html.style.overflow = ''
})
</script>

<template>
  <div class="page">
    <CommissionHero :packages="packages" @open-package="openPackage" />

    <CommissionTestimony :testimonies="testimonies" />

    <CommissionModal
      :is-open="isModalOpen"
      :active-package="activePackage"
      :active-options="activeOptions"
      :contact-open="contactModalOpen"
      @close="closeModal"
      @open-contact="openContactOptions"
      @close-contact="closeContactOptions"
    />
  </div>
</template>
