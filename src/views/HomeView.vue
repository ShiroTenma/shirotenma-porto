<template>
  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-copy">
        <p class="hero-kicker">Portfolio • Commission • Design</p>
        <h1 class="hero-title">Any imagination<br />become true</h1>
        <p class="hero-text">
          Aku ngerjain social media banner, BG map osu! manipulation, photography, dan video editing
          buat klien maupun temen-temen.
        </p>
        <div class="hero-actions">
          <router-link to="/portfolio" class="btn btn-primary"> Lihat portfolio </router-link>
          <router-link to="/commission" class="btn btn-outline"> Commission! </router-link>
        </div>
      </div>

      <div class="hero-showcase">
        <div class="hero-banner-row">
          <div class="banner-card" v-for="n in 3" :key="n">
            <div class="banner-thumb"></div>
            <p class="banner-title">Sample Banner {{ n }}</p>
          </div>
        </div>
        <p class="hero-note">Beberapa contoh karya Social Media Banner dan BG Map osu!.</p>
      </div>
    </div>
  </section>

  <section class="section section-dark">
    <div class="container section-grid-3">
      <article class="service-card" v-for="service in services" :key="service.title">
        <h3 class="service-title">{{ service.title }}</h3>
        <p class="service-text">{{ service.text }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Social Media Banner',
    text: 'Banner untuk promosi, streaming overlay, atau event online.',
  },
  {
    title: 'BG Map osu! manipulation',
    text: 'Background osu! dengan manipulasi foto dan efek yang dramatis.',
  },
  {
    title: 'Video Editing',
    text: 'Highlight, MV pendek, dan konten media sosial yang engaging.',
  },
]
</script>
