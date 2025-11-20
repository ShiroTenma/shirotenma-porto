<template>
  <div class="page">
    <section class="section">
      <div class="container">
        <h1 class="page-title">Portfolio</h1>
        <p class="page-subtitle">Kumpulan desain dan editing yang pernah kukerjakan.</p>

        <h2 class="section-title">Social Media Banner</h2>
        <div class="portfolio-grid">
          <div v-for="n in 6" :key="'banner-' + n" class="portfolio-card">
            <div class="portfolio-thumb"></div>
            <h3 class="portfolio-card-title">Banner {{ n }}</h3>
            <p class="portfolio-card-text">
              Banner promosi dengan style neon / futuristik sesuai brand.
            </p>
          </div>
        </div>

        <h2 class="section-title">BG Map osu! manipulation</h2>
        <div class="portfolio-grid">
          <div v-for="n in 3" :key="'osu-' + n" class="portfolio-card">
            <div class="portfolio-thumb portfolio-thumb-tall"></div>
            <h3 class="portfolio-card-title">osu! BG {{ n }}</h3>
            <p class="portfolio-card-text">Manipulasi karakter dan lighting untuk map osu!.</p>
          </div>
        </div>

        <h2 class="section-title">Photography</h2>
        <div class="portfolio-grid">
          <div v-for="n in 4" :key="'photo-' + n" class="portfolio-card">
            <div class="portfolio-thumb portfolio-thumb-photo"></div>
            <h3 class="portfolio-card-title">Photo Set {{ n }}</h3>
            <p class="portfolio-card-text">Photoshoot dan color grading dengan nuansa dramatis.</p>
          </div>
        </div>

        <h2 class="section-title">Video Editing</h2>
        <div class="portfolio-grid">
          <div v-for="n in 3" :key="'video-' + n" class="portfolio-card">
            <div class="portfolio-thumb portfolio-thumb-video"></div>
            <h3 class="portfolio-card-title">Video {{ n }}</h3>
            <p class="portfolio-card-text">Editing video pendek untuk konten sosial atau VTuber.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>
