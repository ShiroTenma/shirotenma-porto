<script setup>
import HomeHero from '../components/home/HomeHero.vue'
import HomeSelectedWorks from '../components/home/HomeSelectedWorks.vue'
import HomeCommissionCTA from '../components/home/HomeCommissionCTA.vue'

import heroPhotography from '../assets/images/hero/photography.jpg'
import heroThumbnail from '../assets/images/hero/showcase-thumbnail.png'
import heroHighlight from '../assets/images/hero/showcase-highlight.png'

import workGraphicsBanner from '../assets/images/works/graphics-banner.png'
import workGraphicsPoster from '../assets/images/works/graphics-poster.png'
import workGraphicsOverlay from '../assets/images/works/graphics-overlay.jpg'
import workGraphicsThumbnail from '../assets/images/works/graphics-thumbnail.png'
import workEditingHighlight from '../assets/images/works/editing-highlight.jpg'
import workPhotoPortrait from '../assets/images/works/photo-portrait.jpg'

import commissionOne from '../assets/images/works/commission-1.png'
import commissionTwo from '../assets/images/works/commission-2.png'
import commissionThree from '../assets/images/works/commission-3.png'

const heroSlides = [
  { id: 'hero-photo', title: 'Portrait & event photography', tag: 'Photography', image: heroPhotography },
  { id: 'hero-graphics', title: 'Overlay & graphics design', tag: 'Graphics design', image: heroThumbnail },
  { id: 'hero-video', title: 'Highlight & motion edit', tag: 'Video editing', image: heroHighlight },
]

const selectedWorksBase = [
  { id: 'w1', title: 'Social Media Banner', category: 'GRAPHICS DESIGN', thumb: workGraphicsBanner },
  { id: 'w2', title: 'Tournament Poster', category: 'GRAPHICS DESIGN', thumb: workGraphicsPoster },
  { id: 'w3', title: 'osu!profile overlay', category: 'GRAPHICS DESIGN', thumb: workGraphicsOverlay },
  { id: 'w4', title: 'Youtube Thumbnail', category: 'GRAPHICS DESIGN', thumb: workGraphicsThumbnail },
  { id: 'w5', title: 'Highlight Reel', category: 'VIDEO EDITING', thumb: workEditingHighlight },
  { id: 'w6', title: 'Concept Shoot', category: 'PHOTOGRAPHY', thumb: workPhotoPortrait },
]

const commissionSlides = [
  {
    id: 'c1',
    title: 'Ready to do this?',
    subtitle:
      'Siap bantu bikin banner, overlay, dan video yang visually eye-catching buat stream atau channel kamu.',
    image: commissionOne,
    background: 'linear-gradient(120deg, #111827, #1e293b, #020617)',
  },
  {
    id: 'c2',
    title: 'Need a visual partner?',
    subtitle:
      'Buat project sekali atau jangka panjang, kita bisa ngobrol bareng dulu gimana tujuannya dan moodboardnya.',
    image: commissionTwo,
    background: 'linear-gradient(120deg, #1d3557, #457b9d, #1d3557)',
  },
  {
    id: 'c3',
    title: "Don't be afraid, just ask!",
    subtitle:
      'Ceritain singkat aja idemu. Detail konsep, mood, dan style bisa kita susun bareng bareng.',
    image: commissionThree,
    background: 'linear-gradient(120deg, #3b0764, #7e22ce, #db2777)',
  },
]
</script>

<template>
  <div class="page">
    <HomeHero :slides="heroSlides" />
    <HomeSelectedWorks :works="selectedWorksBase" />
    <HomeCommissionCTA :slides="commissionSlides" />
  </div>
</template>
