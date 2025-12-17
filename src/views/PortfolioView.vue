<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

import PortfolioHero from '../components/portfolio/PortfolioHero.vue'
import PortfolioCarousel from '../components/portfolio/PortfolioCarousel.vue'
import PortfolioGallery from '../components/portfolio/PortfolioGallery.vue'
import PortfolioCTA from '../components/portfolio/PortfolioCTA.vue'
import PortfolioLightbox from '../components/portfolio/PortfolioLightbox.vue'

const images = import.meta.glob('../assets/images/**/*.{png,jpg,jpeg,JPG}', {
  eager: true,
  import: 'default',
})

const img = (path) => images[`../assets/images/${path}`] ?? ''
const editingMotion = img('works/editing-motion.png')

// data (kept same as sebelumnya)
const categories = [
  {
    id: 'graphics',
    name: 'Graphics Design',
    badge: 'POSTER / BANNER / SOCIAL',
    priceText: 'Branding kecil, banner, overlay, dan social media assets.',
    highlight: 'Basic visual identity untuk kebutuhan sosial media atau event brand kecil.',
    heroImage: img('works/graphics-banner.png'),
    tone: 'light',
  },
  {
    id: 'editing',
    name: 'Editing',
    badge: 'VIDEO / MOTION / CLIPS',
    priceText: 'Video pendek, Custom MV edits, dan Motion Graphics untuk konten digital.',
    highlight:
      'Pas buat channel YouTube, VTuber, atau content creator. atau sekedar hiburan pribadi.',
    heroImage: img('works/editing-highlight.jpg'),
    tone: 'dark',
  },
  {
    id: 'photo',
    name: 'Photography',
    badge: 'COSPLAY / PORTRAIT',
    priceText: 'Fotografi dengan color grading stylized.',
    highlight: 'Untuk poster, Sosial Media, atau personal project.',
    heroImage: img('works/photo-portrait.jpg'),
    tone: 'light',
  },
]

const works = [
  // GRAPHICS
  {
    id: 'g-1',
    category: 'graphics',
    title: 'Social Media Banner',
    desc: 'Banner Sosial media dengan beragam tema menyesuaikan dengan permintaan klien.',
    tag: 'Graphics Design',
    thumb: img('works/graphics-banner.png'),
  },
  {
    id: 'g-2',
    category: 'graphics',
    title: 'Digital Poster and Flyer',
    desc: 'Poster untuk kebutuhan Promosi atau Sekedar konten di Instagram.',
    tag: 'Graphics Design',
    thumb: img('works/graphics-poster.png'),
  },
  {
    id: 'g-3',
    category: 'graphics',
    title: 'More Designs',
    desc: 'Semua hasil desain selain yang disebut diatas.',
    tag: 'Graphics Design',
    thumb: img('works/graphics-more-samples.jpg'),
  },

  // EDITING
  {
    id: 'e-1',
    category: 'editing',
    title: 'Highlights Video',
    desc: 'Highlight dari beberapa Events.',
    tag: 'Video Editing',
    thumb: img('works/editing-highlight.jpg'),
  },
  {
    id: 'e-2',
    category: 'editing',
    title: 'Anime Movie Clip / AMV / PMV',
    desc: 'MV untuk Media TikTok atau Youtube atau Instagram dengan effects, teks dinamis, serta medianya sendiri.',
    tag: 'Video Editing',
    thumb: img('works/editing-amv.jpg'),
  },
  {
    id: 'e-3',
    category: 'editing',
    title: 'Motion Graphics',
    desc: 'Music video lirik dengan animasi tipografi serta Gerakan geometri yang anggun dan menarik.',
    tag: 'Video Editing',
    thumb: img('works/editing-motion.png'),
  },
  {
    id: 'e-4',
    category: 'editing',
    title: 'Typography MV',
    desc: 'Music video lirik dengan animasi tipografi disertai dengan Motion Graphics dan Art dari klien.',
    tag: 'Video Editing',
    thumb: img('hero/showcase-highlight.png'),
  },
  {
    id: 'e-5',
    category: 'editing',
    title: 'More Video Editing Samples',
    desc: 'Varian hasil video editing lainnya.',
    tag: 'Video Editing',
    thumb: img('works/editing-more.jpg'),
  },
  // PHOTO
  {
    id: 'p-1',
    category: 'photo',
    title: 'Cosplay Photography',
    desc: 'Foto konsep dengan tema karakter atau cosplay dengan Editing yang menyesuaikan vibe karakter.',
    tag: 'Photography',
    thumb: img('works/photo-portrait.jpg'),
  },
  {
    id: 'p-2',
    category: 'photo',
    title: 'Graduation Photography',
    desc: 'Foto dokumentasi acara wisuda dengan style candid dan dramatis serta formal.',
    tag: 'Photography',
    thumb: img('works/photo-graduation.jpg'),
  },
  {
    id: 'p-3',
    category: 'photo',
    title: 'Big Events Documentation',
    desc: 'Foto dokumentasi acara besar seperti konser, lomba, atau acara kampus.',
    tag: 'Photography',
    thumb: img('works/photo-events-ranking1.JPG'),
  },
  {
    id: 'p-4',
    category: 'photo',
    title: 'More Photography Samples',
    desc: 'Foto dengan berbagai konsep dan tema lainnya.',
    tag: 'Photography',
    thumb: img('works/photo-more-samples.jpg'),
  },
]

const workGalleries = {
  'g-1': [
    { id: 'g-1-1', title: 'osu!profile banners', thumb: img('works/graphics-all-banners.jpg') },
    { id: 'g-1-2', title: 'YouTube banner', thumb: img('works/graphics-youtube-banner.jpg') },
    { id: 'g-1-3', title: 'Twitter Banner', thumb: img('works/graphics-twitter-banner.jpg') },
  ],
  'g-2': [
    { id: 'g-2-1', title: 'Event Poster', thumb: img('works/poster-event.jpg') },
    { id: 'g-2-2', title: 'Mock Character Poster', thumb: img('works/poster-mock-character.jpg') },
    { id: 'g-2-3', title: 'Poster Promosi untuk UKM', thumb: img('works/poster-ukm.jpg') },
    {
      id: 'g-2-4',
      title: 'Poster Promosi Merchandise',
      thumb: img('works/poster-ukm-merchandise.jpg'),
    },
    { id: 'g-2-5', title: 'Flyer Promosi untuk Klien', thumb: img('works/flyer-promotion.jpg') },
    {
      id: 'g-2-6',
      title: 'Standing Banner Promosi UKM',
      thumb: img('works/standing-banner-ukm.jpg'),
    },
  ],
  'g-3': [
    {
      id: 'g-3-1',
      title: 'Background osu!map Manipulation',
      thumb: img('works/graphics-manipulation.jpg'),
    },
    { id: 'g-3-2', title: 'Thumbnail Youtube', thumb: img('works/graphics-thumbnail.png') },
    { id: 'g-3-3', title: 'osu!overlay', thumb: img('works/graphics-overlay.jpg') },
    { id: 'g-3-4', title: 'Instagram feed design', thumb: img('works/instagram-feeds.jpg') },
    {
      id: 'g-3-6',
      title: 'Instagram feed design 3x1',
      thumb: img('works/instagram-feeds-3x1.jpg'),
    },
    { id: 'g-3-7', title: 'Venue 2D Design', thumb: img('works/venue-2d-design.jpg') },
    {
      id: 'g-3-8',
      title: 'Sticker Merchandise Design',
      thumb: img('works/sticker-3.png'),
    },
    {
      id: 'g-3-9',
      title: 'UKM Sticker Invitation Design',
      thumb: img('works/sticker-1.png'),
    },
    { id: 'g-3-10', title: 'Ticket Design', thumb: img('works/design-ticket.jpg') },
    { id: 'g-3-11', title: 'ID Card Design', thumb: img('works/id-card-design.jpg') },
    { id: 'g-3-12', title: 'Digital CV Design', thumb: img('works/cv-creative.jpg') },
  ],
  // EDITING & PHOTO (Instagram embed)
  'e-1': [
    {
      id: 'e-1-embed-1',
      title: 'Opening Ceremony INFINITE Vol.4',
      embedUrl: 'https://www.instagram.com/p/DIjphw2BD-H',
      thumb: editingMotion,
    },
    {
      id: 'e-1-embed-2',
      title: 'After Movie INFINITE Vol.3',
      embedUrl: 'https://www.instagram.com/p/C9y8MTnRNEr',
      thumb: editingMotion,
    },
    {
      id: 'e-1-embed-3',
      title: 'Personal Eid-al adha Highlight',
      embedUrl: 'https://www.instagram.com/reel/C8ZWUKqSyKa',
      thumb: editingMotion,
    },
  ],
  'e-2': [
    {
      id: 'e-2-embed-1',
      title: 'Ollie Rev Remake',
      embedUrl: 'https://www.instagram.com/reel/DEfZRHhxUAV',
      thumb: editingMotion,
    },
    {
      id: 'e-2-embed-2',
      title: 'Miku edit, Loopvember',
      embedUrl: 'https://www.instagram.com/reel/DCowmxIxZls',
      thumb: editingMotion,
    },
    {
      id: 'e-2-embed-3',
      title: 'y6richowo remake',
      embedUrl: 'https://www.instagram.com/reel/C-QKnl0KIYs',
      thumb: editingMotion,
    },
  ],
  'e-3': [
    {
      id: 'e-3-embed-1',
      title: 'MoGraph inspired from Geometry Dash',
      embedUrl: 'https://www.instagram.com/reel/Cz9Hp2nNb_2',
      thumb: editingMotion,
    },
    {
      id: 'e-3-embed-2',
      title: 'Furina freestyle/UI themed Mograph',
      embedUrl: 'https://www.instagram.com/reel/C1UKw9TSPy1',
      thumb: editingMotion,
    },
    {
      id: 'e-3-embed-3',
      title: 'Simple Mograph geometric mix',
      embedUrl: 'https://www.instagram.com/reel/CP4l7NCrim3',
      thumb: editingMotion,
    },
    {
      id: 'e-3-embed-4',
      title: 'Birthday Mograph gift',
      embedUrl: 'https://www.instagram.com/reel/CMyR4EPhgBZ',
      thumb: editingMotion,
    },
    {
      id: 'e-3-embed-5',
      title: 'Mograph geometric mix 2',
      embedUrl: 'https://www.instagram.com/reel/CLqScYuBfdF',
      thumb: editingMotion,
    },
  ],
  'e-4': [
    {
      id: 'e-4-embed-1',
      title: 'Kali Uchis Typography MV',
      embedUrl: 'https://www.instagram.com/reel/C4aTnjTIece',
      thumb: editingMotion,
    },
    {
      id: 'e-4-embed-2',
      title: 'Phony Typography MV (Alight Motion)',
      embedUrl: 'https://www.instagram.com/reel/CvuLtjPMLXj',
      thumb: editingMotion,
    },
    {
      id: 'e-4-embed-3',
      title: 'MEP Part Typography MV',
      embedUrl: 'https://www.instagram.com/reel/CMS05IRhRq5',
      thumb: editingMotion,
    },
    {
      id: 'e-4-embed-4',
      title: 'Banqnas Remake, Burnt Rice Edit',
      embedUrl: 'https://www.instagram.com/reel/CPALd8hFC6x',
      thumb: editingMotion,
    },
  ],
  'e-5': [
    {
      id: 'e-5-embed-1',
      title: 'Manga MV for MEP part',
      embedUrl: 'https://www.instagram.com/reel/COumXPXqJbT',
      thumb: editingMotion,
    },
    {
      id: 'e-5-embed-2',
      title: 'Freestyle MV edit (birthday)',
      embedUrl: 'https://www.instagram.com/reel/CN3q50phv77',
      thumb: editingMotion,
    },
    {
      id: 'e-5-embed-3',
      title: 'Remake MV from challenge',
      embedUrl: 'https://www.instagram.com/reel/CQMDwLtMk9Q',
      thumb: editingMotion,
    },
    {
      id: 'e-5-embed-4',
      title: 'Personal MV',
      embedUrl: 'https://www.instagram.com/reel/DMOv_DNyGgI',
      thumb: editingMotion,
    },
    {
      id: 'e-5-embed-5',
      title: 'Following the trend',
      embedUrl: 'https://www.instagram.com/reel/DMrOE87SnbZ',
      thumb: editingMotion,
    },
  ],
  'p-1': [
    { id: 'p-1-1', title: 'Cosplay Chloe Genshin Impact', thumb: img('works/cosplay-comms.jpg') },
    {
      id: 'p-1-2',
      title: 'Coswalk Event - Nahida Genshin Impact',
      thumb: img('works/cosplay-event-1.jpg'),
    },
    {
      id: 'p-1-3',
      title: 'Coswalk Event - Bella - Sparkle HSR',
      thumb: img('works/cosplay-event-2.jpg'),
    },
    {
      id: 'p-1-4',
      title: 'Cosplay - Bella - Tokai Teio Uma Musume',
      thumb: img('works/cosplay-potrait-1.jpg'),
    },
    {
      id: 'p-1-5',
      title: 'Cosplay - Chisa Wuthering Waves',
      thumb: img('works/cosplay-potrait-2.jpg'),
    },
    {
      id: 'p-1-6',
      title: 'Cosplay - Bella - Sparkle HSR',
      thumb: img('works/cosplay-potrait-3.jpg'),
    },
    { id: 'p-1-7', title: 'Cosplay - Superman', thumb: img('works/cosplay-potrait-4.jpg') },
    { id: 'p-1-8', title: 'Cosplay - Shinta - Uma Musume', thumb: img('works/photo-cosplay1.jpg') },
    { id: 'p-1-9', title: 'Cosplay - Superman', thumb: img('works/cosplay-potrait-6-closeup.jpg') },
    {
      id: 'p-1-10',
      title: 'Cosplay - Ryhnn - Rover Male',
      thumb: img('works/cosplay-potrait-7.jpg'),
    },
    {
      id: 'p-1-11',
      title: 'Cosplay (lupa nama characternya)',
      thumb: img('works/cosplay-potrait-8.jpg'),
    },
    {
      id: 'p-1-12',
      title: 'Cosplay - Shinta - Firefly (Spring)',
      thumb: img('works/photo-cosplay-firefly.jpg'),
    },
    { id: 'p-1-13', title: 'Cosplay - Furina', thumb: img('works/photo-cosplay-furina.jpg') },
    {
      id: 'p-1-14',
      title: 'Cosplay - Wuthering Waves',
      thumb: img('works/photo-cosplay-outdoor.jpg'),
    },
    {
      id: 'p-1-15',
      title: 'Cosplay - Bella - HSR',
      thumb: img('works/photo-cosplay-outdoor-2.jpg'),
    },
    { id: 'p-1-16', title: 'Cosplay - Shinta', thumb: img('works/photo-events.jpg') },
    { id: 'p-1-17', title: 'Cosplay - Raiden Shogun', thumb: img('works/photo-portrait.jpg') },
  ],
  'p-2': [
    { id: 'p-2-1', title: 'Graduation - Stair POV', thumb: img('works/photos-graduation-2.jpg') },
    {
      id: 'p-2-2',
      title: 'Graduation - Duduk - Potrait Close up',
      thumb: img('works/photos-graduation-3.jpg'),
    },
    {
      id: 'p-2-3',
      title: 'Graduation - Landscape with background langit',
      thumb: img('works/photos-graduation-4.jpg'),
    },
    {
      id: 'p-2-4',
      title: 'Graduation - Beauty Shot from back',
      thumb: img('works/photos-graduation-beauty-shot.jpg'),
    },
    {
      id: 'p-2-5',
      title: 'Graduation - Show badge',
      thumb: img('works/photos-graduation-closeup.jpg'),
    },
    {
      id: 'p-2-6',
      title: 'Graduation - Item shot',
      thumb: img('works/photos-graduation-item.jpg'),
    },
    {
      id: 'p-2-7',
      title: 'Graduation - Potrait Shot',
      thumb: img('works/photos-graduation-potrait.jpg'),
    },
  ],
  'p-3': [
    {
      id: 'p-3-1',
      title: 'Event - Group Photo outdoor',
      thumb: img('works/photo-event-fotbar-kecil.JPG'),
    },
    {
      id: 'p-3-2',
      title: 'Event - All people photo outdoor',
      thumb: img('works/photo-event-fotbar-outdoor.JPG'),
    },
    { id: 'p-3-3', title: 'Event - Game moments', thumb: img('works/photo-event-games.jpg') },
    {
      id: 'p-3-4',
      title: 'Event - Foto bareng indoor',
      thumb: img('works/photo-event-indoor-fotbar.jpg'),
    },
    {
      id: 'p-3-5',
      title: 'Event - Game moments',
      thumb: img('works/photo-event-keseruan-game.jpg'),
    },
    {
      id: 'p-3-6',
      title: 'Event - Peserta dengan Perspektif penonton',
      thumb: img('works/photo-event-perspektif.JPG'),
    },
    {
      id: 'p-3-7',
      title: 'Event - Peserta medium shot',
      thumb: img('works/photo-event-peserta-1.JPG'),
    },
    {
      id: 'p-3-8',
      title: 'Event - Peserta Close up shot',
      thumb: img('works/photo-event-peserta-closeup.JPG'),
    },
    {
      id: 'p-3-9',
      title: 'Event - Peserta Wide Shot',
      thumb: img('works/photo-event-peserta-indoor.JPG'),
    },
    {
      id: 'p-3-10',
      title: 'Event - Peserta Potrait',
      thumb: img('works/photo-event-potrait-peserta.JPG'),
    },
    { id: 'p-3-11', title: 'Event - Juri wide shot', thumb: img('works/photo-events-juri.JPG') },
    {
      id: 'p-3-12',
      title: 'Event - Juri medium shot',
      thumb: img('works/photo-events-people.JPG'),
    },
    {
      id: 'p-3-13',
      title: 'Event - Ranking 1 wide shot',
      thumb: img('works/photo-events-ranking1.JPG'),
    },
    {
      id: 'p-3-14',
      title: 'Event - Ranking 1 peserta wide shot',
      thumb: img('works/photo-events-ranking1-peserta.JPG'),
    },
    {
      id: 'p-3-15',
      title: 'Event - Rewarding medium shot',
      thumb: img('works/photo-events-rewarding.JPG'),
    },
    {
      id: 'p-3-16',
      title: 'Event - Rewarding medium shot',
      thumb: img('works/photo-events-rewarding-2.JPG'),
    },
    {
      id: 'p-3-17',
      title: 'Event - Silat Medium Shot',
      thumb: img('works/photo-events-silat.JPG'),
    },
  ],
  'p-4': [
    {
      id: 'p-4-1',
      title: 'Landscape Personal photo',
      thumb: img('works/personal-photo-landscape.jpg'),
    },
    { id: 'p-4-2', title: 'Close up Bunga', thumb: img('works/photo-bunga-1.jpg') },
    { id: 'p-4-3', title: 'Close up Bunga', thumb: img('works/photo-bunga-2.jpg') },
    { id: 'p-4-4', title: 'Landscape Dieng', thumb: img('works/photo-landscape-dieng.jpg') },
    {
      id: 'p-4-5',
      title: 'Foto Potrait Saudara - Batu Ratapan',
      thumb: img('works/photo-liburan-saudara-2.jpg'),
    },
    {
      id: 'p-4-6',
      title: 'Landscape Candi Arjuna',
      thumb: img('works/photo-pemandangan-arjuna.jpg'),
    },
    {
      id: 'p-4-7',
      title: 'Landscape Candi Arjuna',
      thumb: img('works/photo-pemandangan-arjuna-2.jpg'),
    },
    {
      id: 'p-4-8',
      title: 'Potrait pemandangan Batu Ratapan',
      thumb: img('works/photo-pemandangan-batu-ratapan.jpg'),
    },
    {
      id: 'p-4-9',
      title: 'Potrait pemandangan Curug Sikarim',
      thumb: img('works/photo-pemandangan-curug.jpg'),
    },
    {
      id: 'p-4-10',
      title: 'Landscape pemandangan Dieng dari penginapan',
      thumb: img('works/photo-pemandangan-dieng.jpg'),
    },
    {
      id: 'p-4-11',
      title: 'Landscape pemandangan Dieng',
      thumb: img('works/photo-pemandangan-dieng-gunung.jpg'),
    },
    {
      id: 'p-4-12',
      title: 'Landscape pemandangan Dieng - Dua bukit',
      thumb: img('works/photo-pemandangan-dua-bukit.jpg'),
    },
    {
      id: 'p-4-13',
      title: 'Landscape pemandangan Dieng - dari penginapan',
      thumb: img('works/photo-pemandangan-gunung-dieng.jpg'),
    },
    {
      id: 'p-4-14',
      title: 'Landscape pemandangan Telaga Menjer',
      thumb: img('works/photo-pemandangan-gunung-telaga.jpg'),
    },
    {
      id: 'p-4-15',
      title: 'Potrait pemandangan Dieng - dari penginapan',
      thumb: img('works/photo-pemandangan-potrait.jpg'),
    },
    {
      id: 'p-4-16',
      title: 'Landscape pemandangan Dieng',
      thumb: img('works/photo-pemandangan-potrait-2.jpg'),
    },
    {
      id: 'p-4-17',
      title: 'Landscape pemandangan Batu Ratapan',
      thumb: img('works/photo-pemandangan-potrait-3.jpg'),
    },
    {
      id: 'p-4-18',
      title: 'Landscape sunrise diatas Bukit Sikunir - Silhoulette',
      thumb: img('works/photo-pemandangan-puncak.jpg'),
    },
    {
      id: 'p-4-19',
      title: 'Landscape sunrise diatas Bukit Sikunir',
      thumb: img('works/photo-pemandangan-sunrise-puncak.jpg'),
    },
    {
      id: 'p-4-20',
      title: 'Potrait Perspektif Penginapan - Dieng',
      thumb: img('works/photo-perspektif-dieng.jpg'),
    },
    {
      id: 'p-4-21',
      title: 'Potrait Saudara dengan Pemandangan Telaga Menjer',
      thumb: img('works/photo-potrait-saudara-telaga.jpg'),
    },
    {
      id: 'p-4-22',
      title: 'Potrait saudara di kaki Bukit Sikunir',
      thumb: img('works/photo-saudara.jpg'),
    },
    {
      id: 'p-4-23',
      title: 'Potrait Saudara dengan Pemandangan Telaga Menjer',
      thumb: img('works/photo-saudara-pemandangan.jpg'),
    },
    { id: 'p-4-24', title: 'Foto Logo Indomaret', thumb: img('works/photo-something.jpg') },
    { id: 'p-4-25', title: 'Potrait personal', thumb: img('works/potrait-personal.jpg') },
  ],
}

const showcaseWorks = [
  {
    id: 's1',
    title: 'Social Media Banner',
    category: 'graphics',
    thumb: img('works/graphics-banner.png'),
  },
  {
    id: 's2',
    title: 'BG Map osu!',
    category: 'graphics',
    thumb: img('works/graphics-more-samples.jpg'),
  },
  {
    id: 's3',
    title: 'osu!profile overlay',
    category: 'graphics',
    thumb: img('works/graphics-overlay.jpg'),
  },
  {
    id: 's4',
    title: 'Youtube thumbnaill',
    category: 'graphics',
    thumb: img('works/graphics-thumbnail.png'),
  },
]

const activeCategory = ref('graphics')
const activeIndex = ref(0)
const selectedWorkId = ref(null)
const showGallery = ref(false)
const activeGalleryItem = ref(null)
const modalZoomLevel = ref(100)
const modalZoomed = ref(false)
const isPanning = ref(false)
const panOffset = ref({ x: 0, y: 0 })
const fitMode = ref('contain')
const zoomPresets = [100, 125, 150, 175, 200, 250, 300]
const keyHandler = (e) => {
  if (e.key === 'Escape' && activeGalleryItem.value) {
    closeGalleryModal()
  }
}
let startX = 0
let startY = 0

const activeCategoryData = computed(() => categories.find((cat) => cat.id === activeCategory.value))
const filteredWorks = computed(() => works.filter((w) => w.category === activeCategory.value))
const selectedWork = computed(() =>
  showGallery.value
    ? filteredWorks.value.find((w) => w.id === selectedWorkId.value) ||
      filteredWorks.value[activeIndex.value] ||
      filteredWorks.value[0]
    : null,
)
const selectedGallery = computed(
  () =>
    (selectedWork.value && workGalleries[selectedWork.value.id]) ||
    workGalleries[filteredWorks.value[0]?.id] ||
    [],
)

const setCategory = (id) => {
  activeCategory.value = id
}

const selectWork = (idx) => {
  activeIndex.value = idx
  selectedWorkId.value = filteredWorks.value[idx]?.id || null
  showGallery.value = true
}

const openGalleryForWork = (work, idx) => {
  selectWork(idx)
}

// modal helpers
const lockBodyScroll = () => {
  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'
}
const unlockBodyScroll = () => {
  document.documentElement.style.overflow = ''
  document.body.style.overflow = ''
}

const openGalleryModal = (item) => {
  activeGalleryItem.value = item
  modalZoomLevel.value = 100
  modalZoomed.value = false
  panOffset.value = { x: 0, y: 0 }
  lockBodyScroll()
}

const closeGalleryModal = () => {
  activeGalleryItem.value = null
  panOffset.value = { x: 0, y: 0 }
  unlockBodyScroll()
}

const setZoom = (level) => {
  modalZoomLevel.value = level
  modalZoomed.value = level !== 100
  if (level === 100) {
    panOffset.value = { x: 0, y: 0 }
  }
}

const toggleFit = (mode) => {
  fitMode.value = mode
}

const handleDoubleZoom = () => {
  const idx = zoomPresets.indexOf(modalZoomLevel.value)
  const next = zoomPresets[(idx + 1) % zoomPresets.length]
  setZoom(next)
}

const startPan = (event) => {
  if (!modalZoomed.value) return
  isPanning.value = true
  startX = event.clientX - panOffset.value.x
  startY = event.clientY - panOffset.value.y
}

const pan = (event) => {
  if (!isPanning.value) return
  panOffset.value = {
    x: event.clientX - startX,
    y: event.clientY - startY,
  }
}

const stopPan = () => {
  isPanning.value = false
}

onMounted(() => {
  window.addEventListener('keydown', keyHandler)
  unlockBodyScroll()
})

onUnmounted(() => {
  unlockBodyScroll()
  window.removeEventListener('keydown', keyHandler)
})

watch(filteredWorks, () => {
  activeIndex.value = 0
  selectedWorkId.value = null
  showGallery.value = false
  unlockBodyScroll()
})
</script>

<template>
  <div class="page">
    <PortfolioHero
      :categories="categories"
      :active-category="activeCategory"
      :set-category="setCategory"
    />

    <PortfolioCarousel
      :works="filteredWorks"
      :active-category="activeCategory"
      :active-index="activeIndex"
      @select-work="openGalleryForWork"
    />

    <div class="section-shell bg-white">
      <div class="section-container">
        <div class="flex items-center justify-between gap-3 mb-4">
          <h3 class="text-lg font-semibold text-slate-800">
            {{
              showGallery && selectedWork
                ? `Galeri: ${selectedWork.title}`
                : 'Pilih kartu untuk buka galeri'
            }}
          </h3>
          <p class="text-sm text-slate-500 hidden md:block">
            Klik kartu di carousel untuk melihat detail karyanya.
          </p>
        </div>

        <PortfolioGallery
          v-if="showGallery && selectedWork"
          :active-category="activeCategory"
          :active-category-data="activeCategoryData"
          :selected-work="selectedWork"
          :gallery="selectedGallery"
          @open-modal="openGalleryModal"
          @close-gallery="
            () => {
              selectedWorkId = null
              showGallery = false
            }
          "
          @select-work="selectWork"
        />

        <div
          v-else
          class="rounded-2xl border border-dashed border-slate-200 bg-slate-50 text-slate-500 px-5 py-8 text-center"
        >
          Pilih salah satu kartu di atas untuk membuka galeri karya.
        </div>
      </div>
    </div>

    <PortfolioCTA :showcase-works="showcaseWorks" />

    <PortfolioLightbox
      :item="activeGalleryItem"
      :zoom-level="modalZoomLevel"
      :zoomed="modalZoomed"
      :is-panning="isPanning"
      :pan-offset="panOffset"
      :fit-mode="fitMode"
      @close="closeGalleryModal"
      @set-zoom="setZoom"
      @double-zoom="handleDoubleZoom"
      @toggle-fit="toggleFit"
      @start-pan="startPan"
      @pan="pan"
      @stop-pan="stopPan"
    />
  </div>
</template>
