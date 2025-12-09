<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const images = import.meta.glob('../assets/images/**/*.{png,jpg,jpeg,JPG}', {
  eager: true,
  import: 'default',
})

const img = (path) => images[`../assets/images/${path}`] ?? ''

// Helper aliases for repeated thumbs (keeps existing data structure)
const editingMotion = img('works/editing-motion.png')
const photoPortrait = img('works/photo-portrait.jpg')
const photoEvents = img('works/photo-events.jpg')

const categories = [
  {
    id: 'graphics',
    name: 'Graphics Design',
    badge: 'POSTER / BANNER / SOCIAL',
    priceText: 'Branding kecil, banner, overlay, dan social media assets.',
    highlight: 'Basic visual identity untuk kebutuhan sosial media atau event brand kecil.',
    tone: 'light',
  },
  {
    id: 'editing',
    name: 'Editing',
    badge: 'VIDEO / MOTION / CLIPS',
    priceText: 'Video pendek, Custom MV edits, dan Motion Graphics untuk konten digital.',
    highlight:
      'Pas buat channel YouTube, VTuber, atau content creator. atau sekedar hiburan pribadi.',
    tone: 'dark',
  },
  {
    id: 'photo',
    name: 'Photography',
    badge: 'COSPLAY / PORTRAIT',
    priceText: 'Fotografi dengan color grading stylized.',
    highlight: 'Untuk poster, Sosial Media, atau personal project.',
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

/**
 * Zy detail per work (yang muncul di bawah slider waktu diklik)
 * Silakan ganti judul atau thumb di sini dengan karya asli.
 */
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
    { id: 'g-2-4', title: 'Flyer Promosi untuk Klien', thumb: img('works/flyer-promotion.jpg') },
    {
      id: 'g-2-4',
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
    {
      id: 'g-3-13',
      title: 'Instagram Story Template Design',
      thumb: img('works/design-story.jpg'),
    },
    {
      id: 'g-3-14',
      title: 'Custom Mousepad Design',
      thumb: img('works/mousepad-custom.jpg'),
    },
    {
      id: 'g-3-15',
      title: 'Creative Instagram Story Design',
      thumb: img('works/custom-story.jpg'),
    },
  ],

  // EDITING & PHOTO
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
      title: 'Furina kinda freestyle/UI themed Mograph',
      embedUrl: 'https://www.instagram.com/reel/C1UKw9TSPy1',
      thumb: editingMotion,
    },
    {
      id: 'e-3-embed-3',
      title: 'Simple Mograph with geometric shapes and random things',
      embedUrl: 'https://www.instagram.com/reel/CP4l7NCrim3',
      thumb: editingMotion,
    },
    {
      id: 'e-3-embed-4',
      title: 'Mograph for my friends birthday',
      embedUrl: 'https://www.instagram.com/reel/CMyR4EPhgBZ',
      thumb: editingMotion,
    },
    {
      id: 'e-3-embed-5',
      title: 'Simple Mograph with geometric shapes and random things 2',
      embedUrl: 'https://www.instagram.com/reel/CLqScYuBfdF',
      thumb: editingMotion,
    },
  ],
  'e-4': [
    {
      id: 'e-3-embed-1',
      title: 'Kali Uchis, Typography MV',
      embedUrl: 'https://www.instagram.com/reel/C4aTnjTIece',
      thumb: editingMotion,
    },
    {
      id: 'e-3-embed-2',
      title: 'Phony Typography MV on Alight Motion',
      embedUrl: 'https://www.instagram.com/reel/CvuLtjPMLXj',
      thumb: editingMotion,
    },
    {
      id: 'e-3-embed-3',
      title: 'MEP Part,  Typography MV (i forgot the song title lol)',
      embedUrl: 'https://www.instagram.com/reel/CMS05IRhRq5',
      thumb: editingMotion,
    },
    {
      id: 'e-3-embed-4',
      title: 'Banqnas Remake, Burnt Rice Typography Edit',
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
      title: 'Freestyle MV edit for my birthday',
      embedUrl: 'https://www.instagram.com/reel/CN3q50phv77',
      thumb: editingMotion,
    },
    {
      id: 'e-5-embed-3',
      title: 'Remake MV from the challenge',
      embedUrl: 'https://www.instagram.com/reel/CQMDwLtMk9Q',
      thumb: editingMotion,
    },
    {
      id: 'e-5-embed-4',
      title: 'personal MV',
      embedUrl: 'https://www.instagram.com/reel/DMOv_DNyGgI',
      thumb: editingMotion,
    },
    {
      id: 'e-5-embed-5',
      title: 'Following the trend idk',
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

const activeCategory = ref('graphics')

const activeCategoryData = computed(() => categories.find((c) => c.id === activeCategory.value))

const filteredWorks = computed(() => works.filter((w) => w.category === activeCategory.value))

// mini showcase di CTA kanan bawah
const showcaseWorks = computed(() => works.slice(0, 4))

// === SLIDER LOGIC (per kartu + loop) ===
const carouselRef = ref(null)
const activeIndex = ref(0)
let slideTimer = null

const scrollToIndex = (index) => {
  const el = carouselRef.value
  if (!el) return

  const card = el.children[index]
  if (!card) return

  const cardRect = card.getBoundingClientRect()
  const trackRect = el.getBoundingClientRect()
  const offsetLeft = cardRect.left - trackRect.left + el.scrollLeft

  el.scrollTo({
    left: offsetLeft,
    behavior: 'smooth',
  })

  activeIndex.value = index
}

const nextSlide = () => {
  const total = filteredWorks.value.length
  if (!total) return
  const next = (activeIndex.value + 1) % total
  scrollToIndex(next)
}

const prevSlide = () => {
  const total = filteredWorks.value.length
  if (!total) return
  const prev = (activeIndex.value - 1 + total) % total
  scrollToIndex(prev)
}

const resetTimer = () => {
  if (slideTimer) clearInterval(slideTimer)
  slideTimer = setInterval(() => {
    nextSlide()
  }, 3000)
}

const pauseSlider = () => {
  if (slideTimer) {
    clearInterval(slideTimer)
    slideTimer = null
  }
}

const handleNextClick = () => {
  nextSlide()
  resetTimer()
}

const handlePrevClick = () => {
  prevSlide()
  resetTimer()
}

// === GALLERY DETAIL YANG MUNCUL DI BAWAH SLIDER ===
const selectedWorkId = ref(null)

const selectedWork = computed(() => works.find((w) => w.id === selectedWorkId.value) || null)

const selectedGalleryItems = computed(() => {
  if (!selectedWork.value) return []
  return (workGalleries[selectedWork.value.id] || []).map((item) => ({
    ...item,
    thumb: item.thumb || selectedWork.value.thumb,
  }))
})

const activeGalleryItem = ref(null)
const modalZoomed = ref(false)
const modalZoomLevel = ref(1.25)
const zoomLevels = [1, 1.25, 1.5, 1.75, 2]
const isPanning = ref(false)
const pan = ref({ x: 0, y: 0 })
let panStart = { x: 0, y: 0 }
const bodyScrollStack = ref(0)

const openGalleryForWork = (work, index) => {
  selectedWorkId.value = work.id
  scrollToIndex(index)
  pauseSlider()
}

const closeGallery = () => {
  selectedWorkId.value = null
  resetTimer()
}

const openGalleryModal = (item) => {
  activeGalleryItem.value = item
  modalZoomed.value = false
  modalZoomLevel.value = 1.25
  pan.value = { x: 0, y: 0 }
  lockBodyScroll()
}

const closeGalleryModal = () => {
  activeGalleryItem.value = null
  modalZoomed.value = false
  modalZoomLevel.value = 1.25
  pan.value = { x: 0, y: 0 }
  unlockBodyScroll()
}

const toggleZoom = () => {
  modalZoomed.value = !modalZoomed.value
  modalZoomLevel.value = modalZoomed.value ? 1.5 : 1.25
  if (!modalZoomed.value) {
    pan.value = { x: 0, y: 0 }
  }
}

const setZoom = (level) => {
  modalZoomLevel.value = level
  modalZoomed.value = level > 1
  if (level === 1) {
    pan.value = { x: 0, y: 0 }
  }
}

const lockBodyScroll = () => {
  bodyScrollStack.value += 1
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
}

const unlockBodyScroll = () => {
  bodyScrollStack.value = Math.max(0, bodyScrollStack.value - 1)
  if (bodyScrollStack.value === 0) {
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }
}

const getPoint = (e) => {
  if (e.touches && e.touches.length) {
    return { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }
  return { x: e.clientX, y: e.clientY }
}

const onPanStart = (e) => {
  if (!modalZoomed.value) return
  isPanning.value = true
  panStart = getPoint(e)
  window.addEventListener('mousemove', onPanMove)
  window.addEventListener('mouseup', onPanEnd)
  window.addEventListener('touchmove', onPanMove, { passive: false })
  window.addEventListener('touchend', onPanEnd)
}

const onPanMove = (e) => {
  if (!isPanning.value || !modalZoomed.value) return
  if (e.cancelable) e.preventDefault()
  const point = getPoint(e)
  const dx = point.x - panStart.x
  const dy = point.y - panStart.y
  pan.value = { x: pan.value.x + dx, y: pan.value.y + dy }
  panStart = point
}

const onPanEnd = () => {
  isPanning.value = false
  window.removeEventListener('mousemove', onPanMove)
  window.removeEventListener('mouseup', onPanEnd)
  window.removeEventListener('touchmove', onPanMove)
  window.removeEventListener('touchend', onPanEnd)
}

// ganti kategori + reset slider & tutup gallery
const setCategory = (id) => {
  activeCategory.value = id
}

onMounted(() => {
  requestAnimationFrame(() => {
    scrollToIndex(0)
  })
  resetTimer()
})

onUnmounted(() => {
  if (slideTimer) clearInterval(slideTimer)
  unlockBodyScroll()
})

// kalau list card-nya berubah (ganti kategori)
watch(filteredWorks, () => {
  activeIndex.value = 0
  selectedWorkId.value = null
  requestAnimationFrame(() => {
    scrollToIndex(0)
  })
  resetTimer()
  unlockBodyScroll()
})
</script>

<template>
  <div class="page">
    <!-- SECTION ATAS: 3 KATEGORI -->
    <section class="section portfolio-hero">
      <div class="container">
        <h1 class="page-title">Portfolio</h1>
        <p class="page-subtitle">
          Beberapa karya di bidang Graphics Design, Editing, dan Photography. Pilih kategori di
          bawah ini buat lihat contoh-contohnya.
        </p>

        <div v-inview class="portfolio-plan-row">
          <article
            v-for="(cat, index) in categories"
            :key="cat.id"
            class="portfolio-plan-card"
            :class="[
              `portfolio-plan-card--${cat.tone}`,
              { 'portfolio-plan-card--active': cat.id === activeCategory },
              { 'portfolio-plan-card--middle': index === 1 },
            ]"
            role="button"
            tabindex="0"
            @click="setCategory(cat.id)"
            @keydown.enter.prevent="setCategory(cat.id)"
          >
            <p class="portfolio-plan-badge">
              {{ cat.badge }}
            </p>

            <h2 class="portfolio-plan-title">
              {{ cat.name }}
            </h2>

            <p class="portfolio-plan-price">
              {{ cat.priceText }}
            </p>

            <ul class="portfolio-plan-list">
              <li>{{ cat.highlight }}</li>
              <li>Style dan color grading bisa disesuaikan karakter atau brand kamu.</li>
              <li>File akhir siap pakai di social media atau platform streaming.</li>
            </ul>

            <button class="btn btn-primary btn-sm portfolio-plan-cta" type="button">
              Lihat karya di kategori ini
            </button>
          </article>
        </div>
      </div>
    </section>

    <!-- SECTION BAWAH: SLIDER + GALLERY DETAIL + CTA -->
    <section class="section portfolio-gallery-section">
      <div class="container">
        <!-- JUDUL -->
        <div v-inview class="portfolio-gallery-header portfolio-head-grid">
          <div>
            <h2 class="portfolio-wide-title">
              <strong>{{ activeCategoryData?.name }}</strong>
            </h2>
          </div>
          <p class="portfolio-wide-text">
            Koleksi beberapa karya pilihan di kategori
            <strong>{{ activeCategoryData?.name }}</strong
            >. Mulai dari personal project sampai commission untuk klien, semua digarap dengan fokus
            di mood, warna, dan storytelling visual.
          </p>
        </div>

        <!-- SLIDER -->
        <transition name="swap" mode="out-in">
          <div v-inview :key="activeCategory" class="portfolio-carousel">
            <div class="portfolio-carousel-controls">
              <button
                type="button"
                class="portfolio-carousel-arrow"
                aria-label="Previous"
                @click="handlePrevClick"
              >
                &lsaquo;
              </button>
              <button
                type="button"
                class="portfolio-carousel-arrow"
                aria-label="Next"
                @click="handleNextClick"
              >
                &rsaquo;
              </button>
            </div>

            <div ref="carouselRef" class="portfolio-carousel-track">
              <article
                v-for="(work, index) in filteredWorks"
                :key="work.id"
                class="portfolio-carousel-card"
                :class="{
                  'portfolio-carousel-card--active': index === activeIndex,
                }"
                role="button"
                tabindex="0"
                @click="openGalleryForWork(work, index)"
                @keydown.enter.prevent="openGalleryForWork(work, index)"
              >
                <div
                  class="portfolio-gallery-thumb"
                  :class="`portfolio-gallery-thumb--${work.category}`"
                  :style="{ background: `url(${work.thumb}) center / cover no-repeat` }"
                ></div>

                <div class="portfolio-gallery-body">
                  <span class="portfolio-gallery-tag">
                    {{ work.tag }}
                  </span>
                  <h3 class="portfolio-gallery-title">
                    {{ work.title }}
                  </h3>
                  <p class="portfolio-gallery-text">
                    {{ work.desc }}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </transition>

        <!-- GALLERY DETAIL DI BAWAH SLIDER (kayak Works of Artists) -->
        <transition name="gallery" mode="out-in">
          <section
            v-if="selectedWork"
            v-inview
            :key="selectedWork?.id || 'none'"
            class="portfolio-work-gallery"
          >
            <div class="portfolio-work-gallery-header">
              <div>
                <p class="portfolio-work-gallery-kicker">
                  {{ selectedWork.tag || activeCategoryData?.name }}
                </p>
                <h3 class="portfolio-work-gallery-title">
                  {{ selectedWork.title }}
                </h3>
              </div>

              <button
                type="button"
                class="btn btn-outline btn-sm portfolio-work-gallery-close"
                @click="closeGallery"
              >
                Tutup gallery view
              </button>
            </div>

            <div
              class="portfolio-work-gallery-grid"
              :class="{ 'portfolio-work-gallery-grid--editing': activeCategory === 'editing' }"
            >
              <article
                v-for="(item, index) in selectedGalleryItems"
                :key="item.id"
                :class="[
                  'portfolio-work-gallery-card',
                  { 'portfolio-work-gallery-card--featured': index === 0 },
                  { 'portfolio-work-gallery-card--reel': item.embedUrl },
                ]"
                role="button"
                tabindex="0"
                @click="openGalleryModal(item)"
                @keydown.enter.prevent="openGalleryModal(item)"
              >
                <div v-if="item.embedUrl" class="portfolio-work-gallery-thumb">
                  <iframe
                    class="portfolio-work-gallery-embed"
                    :src="`${item.embedUrl}/embed`"
                    allowtransparency="true"
                    allowfullscreen
                    scrolling="no"
                    frameborder="0"
                  ></iframe>
                </div>
                <div
                  v-else
                  class="portfolio-work-gallery-thumb"
                  :style="{
                    backgroundImage: `url(${item.thumb || selectedWork?.thumb || ''})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }"
                ></div>
                <div class="portfolio-work-gallery-label">
                  {{ item.title }}
                </div>
              </article>
            </div>
          </section>
        </transition>

        <!-- CTA BANNER -->
        <div v-inview class="portfolio-cta-banner">
          <div class="portfolio-cta-inner">
            <h3 class="portfolio-cta-title">
              Siap bikin visual baru buat brand atau project kamu?
            </h3>
            <p class="portfolio-cta-text">
              Ceritain pendek aja idemu, nanti kita bisa bahas bareng konsep, mood, dan style yang
              paling cocok. No pressure, cuma ngobrol dulu.
            </p>

            <router-link to="/contact" class="portfolio-cta-button">
              <span class="portfolio-cta-button-label"> Let's talk! </span>
              <span class="portfolio-cta-button-icon"> > </span>
            </router-link>
            <router-link to="/commission" class="portfolio-cta-button">
              <span class="portfolio-cta-button-label"> Lihat Commission </span>
              <span class="portfolio-cta-button-icon"> > </span>
            </router-link>
          </div>

          <div class="portfolio-cta-gallery">
            <article v-for="item in showcaseWorks" :key="item.id" class="portfolio-cta-thumb-card">
              <div
                class="portfolio-cta-thumb"
                :class="`portfolio-cta-thumb--${item.category}`"
                :style="{ background: `url(${item.thumb}) center / cover no-repeat` }"
              ></div>
              <p class="portfolio-cta-thumb-title">
                {{ item.title }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- LIGHTBOX GALLERY MODAL -->
    <transition name="modal-fade">
      <div v-if="activeGalleryItem" class="portfolio-gallery-modal" @click.self="closeGalleryModal">
        <div class="portfolio-gallery-modal-box" role="dialog" aria-modal="true">
          <header class="portfolio-gallery-modal-head">
            <div>
              <p class="portfolio-work-gallery-kicker">
                {{ activeGalleryItem.tag || activeCategoryData?.name || 'Gallery' }}
              </p>
              <h3 class="portfolio-work-gallery-title">{{ activeGalleryItem.title }}</h3>
            </div>
            <button type="button" class="portfolio-gallery-modal-close" @click="closeGalleryModal">
              Tutup
            </button>
          </header>

          <div class="portfolio-gallery-modal-body">
            <iframe
              v-if="activeGalleryItem.embedUrl"
              class="portfolio-gallery-embed"
              :src="`${activeGalleryItem.embedUrl}/embed`"
              allowtransparency="true"
              allowfullscreen
              scrolling="no"
              frameborder="0"
            ></iframe>
            <div
              v-else
              class="portfolio-gallery-modal-image"
              :class="{
                'portfolio-gallery-modal-image--zoom': modalZoomed,
                'portfolio-gallery-modal-image--dragging': isPanning,
              }"
              :style="{
                backgroundImage: `url(${activeGalleryItem.thumb || ''})`,
                '--modal-zoom-level': modalZoomLevel,
                transform: modalZoomed
                  ? `translate(${pan.x}px, ${pan.y}px) scale(${modalZoomLevel})`
                  : 'translate(0, 0) scale(1)',
              }"
              role="button"
              tabindex="0"
              @click="toggleZoom"
              @keydown.enter.prevent="toggleZoom"
              @mousedown.prevent="onPanStart"
              @touchstart.prevent="onPanStart"
            ></div>
          </div>

          <div
            v-if="activeGalleryItem && !activeGalleryItem.embedUrl"
            class="portfolio-gallery-modal-zoom"
          >
            <span>Zoom:</span>
            <button
              v-for="level in zoomLevels"
              :key="level"
              type="button"
              class="portfolio-gallery-zoom-btn"
              :class="{ 'portfolio-gallery-zoom-btn--active': modalZoomLevel === level }"
              @click="setZoom(level)"
            >
              {{ Math.round(level * 100) }}%
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
