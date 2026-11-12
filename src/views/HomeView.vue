<script setup>
import { profile } from '../data/profile'
import { img } from '../data/projects'
import { packages } from '../data/services'

const heroImg = img(profile.heroArtwork)

const featuredWorks = [
  {
    id: 'f1',
    title: 'Tournament Event Poster',
    category: 'GRAPHIC DESIGN',
    thumb: img('works/graphics-poster.webp'),
    desc: 'High-impact promotional poster layout featuring character composition, dramatic lighting, and structured event typography.',
  },
  {
    id: 'f2',
    title: 'Motion & Highlight Reel',
    category: 'MOTION & VIDEO',
    thumb: img('works/editing-highlight.webp'),
    desc: 'Dynamic pacing, audio-synchronized beat cuts, and custom motion graphics designed for stream highlights and video clips.',
  },
  {
    id: 'f3',
    title: 'Atmospheric Portrait Study',
    category: 'PHOTOGRAPHY',
    thumb: img('works/photo-portrait.webp'),
    desc: 'Personal and cosplay portraiture with dedicated color grading, studio lighting, and fine retouching.',
  },
  {
    id: 'f4',
    title: 'Stream & Profile Overlay Kit',
    category: 'DIGITAL DESIGN',
    thumb: img('works/graphics-overlay.webp'),
    desc: 'Tailored digital interface assets, scoreboard overlays, and visual identity kits built for streamers and competitive players.',
  },
]
</script>

<template>
  <div class="space-y-20 sm:space-y-28 pb-24">
    <!-- 00 / HERO SECTION -->
    <section class="mx-auto max-w-7xl px-4 pt-10 sm:px-6 md:pt-16 lg:pt-20">
      <div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <!-- Left Column: Copy & Actions -->
        <div class="space-y-7 lg:col-span-7">
          <div class="inline-flex items-center gap-2 rounded-sm border border-[#353A42] bg-[#181B20] px-3.5 py-1.5 font-mono text-xs font-medium text-[#A5ABB4]">
            <span class="inline-block h-2 w-2 rounded-full bg-[#EF4B42]"></span>
            <span>{{ profile.eyebrow }}</span>
          </div>

          <div class="space-y-4">
            <h1 class="text-5xl sm:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-[#F0F0EB] leading-[0.98]">
              A space for<br />
              <span class="italic text-[#EF4B42]">things I create.</span>
            </h1>
            <p class="max-w-xl text-base sm:text-lg text-[#D4D8DE] leading-relaxed font-sans pt-1">
              {{ profile.heroSubhead }}
            </p>
          </div>

          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <router-link
              to="/portfolio"
              class="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-[#EF4B42] px-7 font-mono text-xs font-bold tracking-wider text-white transition hover:bg-[#EF4B42]/90 active:scale-95 shadow-lg shadow-[#EF4B42]/15"
            >
              <span>EXPLORE WORK</span>
              <span>↗</span>
            </router-link>
            <router-link
              to="/about"
              class="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-[#353A42] bg-[#181B20] px-6 font-mono text-xs font-semibold tracking-wider text-[#F0F0EB] transition hover:border-[#F0F0EB] hover:text-[#F0F0EB] active:scale-95"
            >
              <span>ABOUT CREATOR</span>
              <span>→</span>
            </router-link>
          </div>

          <div class="pt-4 border-t border-[#353A42]/40 flex items-center gap-6 font-mono text-xs text-[#A5ABB4]/70">
            <span>LOC // ID</span>
            <span>DISC // DESIGN · MOTION · PHOTO</span>
          </div>
        </div>

        <!-- Right Column: Curated Hero Artwork -->
        <div class="lg:col-span-5">
          <div class="group relative overflow-hidden rounded-sm border border-[#353A42] bg-[#181B20] p-3 transition hover:border-[#EF4B42]/80">
            <div class="relative aspect-4/3 w-full overflow-hidden bg-[#0B0D10] rounded-xs border border-[#353A42]/50">
              <img
                :src="heroImg"
                alt="Featured Hero Artwork: osu! Background Manipulation by ShiroTenma"
                class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/80 via-transparent to-transparent opacity-60"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-xs text-[#F0F0EB]">
                <span class="bg-[#0B0D10]/90 px-2.5 py-1 rounded-sm border border-[#353A42]/60 text-[11px]">FEATURED ARTWORK</span>
                <span class="text-[#A5ABB4] text-[11px]">#001 // DIGITAL</span>
              </div>
            </div>
            <div class="mt-3 flex items-center justify-between px-1 font-mono text-xs text-[#A5ABB4]">
              <span>CURATED ARCHIVE SELECTION</span>
              <span class="inline-flex items-center gap-1.5 text-[#EF4B42] font-semibold">
                <span class="inline-block h-1.5 w-1.5 rounded-full bg-[#EF4B42] animate-pulse"></span>
                <span>SYS.SIGNAL</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 01 / FEATURED WORK GRID (2x2 Balanced Editorial Grid) -->
    <section class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#353A42]/60 pb-5">
        <div>
          <div class="font-mono text-xs tracking-widest text-[#EF4B42] uppercase">01 / ARCHIVE SHOWCASE</div>
          <h2 class="text-3xl font-normal tracking-tight text-[#F0F0EB] sm:text-4xl lg:text-5xl font-serif mt-1.5">
            Featured Works
          </h2>
        </div>
        <router-link
          to="/portfolio"
          class="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#A5ABB4] transition hover:text-[#EF4B42]"
        >
          <span>VIEW FULL ARCHIVE (80+ WORKS)</span>
          <span>↗</span>
        </router-link>
      </div>

      <div class="grid gap-8 sm:grid-cols-2">
        <article
          v-for="(work, idx) in featuredWorks"
          :key="work.id"
          class="group flex flex-col justify-between rounded-sm border border-[#353A42] bg-[#181B20] p-4 sm:p-5 transition hover:border-[#EF4B42] hover:shadow-2xl hover:shadow-[#EF4B42]/5"
        >
          <div class="space-y-4">
            <div class="relative aspect-16/10 w-full overflow-hidden rounded-xs bg-[#0B0D10] border border-[#353A42]/60">
              <img
                :src="work.thumb"
                :alt="work.title"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <span class="absolute top-2.5 left-2.5 rounded-xs bg-[#0B0D10]/90 border border-[#353A42]/60 px-2 py-0.5 font-mono text-xs text-[#A5ABB4]">
                0{{ idx + 1 }}
              </span>
            </div>

            <div class="space-y-2 px-0.5">
              <span class="font-mono text-xs font-semibold tracking-wider text-[#EF4B42]">
                {{ work.category }}
              </span>
              <h3 class="text-xl sm:text-2xl font-normal text-[#F0F0EB] group-hover:text-[#EF4B42] font-serif transition leading-snug">
                {{ work.title }}
              </h3>
              <p class="text-sm text-[#A5ABB4] leading-relaxed font-sans">
                {{ work.desc }}
              </p>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-[#353A42]/50 flex items-center justify-between font-mono text-xs text-[#A5ABB4]">
            <span class="py-2">EXPLORE WORK</span>
            <router-link
              to="/portfolio"
              class="inline-flex min-h-[44px] items-center gap-1.5 px-3 py-2 rounded-sm text-[#EF4B42] hover:bg-[#EF4B42]/10 transition"
            >
              <span>INSPECT</span>
              <span class="group-hover:translate-x-0.5 transition">↗</span>
            </router-link>
          </div>
        </article>
      </div>
    </section>

    <!-- 02 / DISCIPLINES -->
    <section class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mb-10 border-b border-[#353A42]/60 pb-5">
        <div class="font-mono text-xs tracking-widest text-[#EF4B42] uppercase">02 / SCOPE & SKILLS</div>
        <h2 class="text-3xl font-normal tracking-tight text-[#F0F0EB] sm:text-4xl lg:text-5xl font-serif mt-1.5">
          What I Explore
        </h2>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <div
          v-for="disc in profile.disciplines"
          :key="disc.id"
          class="rounded-sm border border-[#353A42] bg-[#181B20] p-6 space-y-4 flex flex-col justify-between"
        >
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="font-mono text-xs font-bold text-[#EF4B42]">{{ disc.index }} //</span>
              <span class="inline-block h-2 w-2 rounded-full bg-[#353A42]"></span>
            </div>

            <h3 class="text-2xl font-normal text-[#F0F0EB] font-serif">{{ disc.title }}</h3>
            <p class="text-sm text-[#A5ABB4] leading-relaxed font-sans">{{ disc.desc }}</p>
          </div>

          <div class="pt-4 border-t border-[#353A42]/40">
            <div class="font-mono text-[11px] uppercase tracking-wider text-[#A5ABB4]/70 mb-2.5">TOOLKIT & STACK:</div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="t in disc.tools"
                :key="t"
                class="rounded-xs border border-[#353A42] bg-[#0B0D10] px-2.5 py-1 font-mono text-xs text-[#F0F0EB]"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 03 / COMMISSIONS SUMMARY -->
    <section class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#353A42]/60 pb-5">
        <div>
          <div class="font-mono text-xs tracking-widest text-[#EF4B42] uppercase">03 / AVAILABLE OFFERINGS</div>
          <h2 class="text-3xl font-normal tracking-tight text-[#F0F0EB] sm:text-4xl lg:text-5xl font-serif mt-1.5">
            Creative Services
          </h2>
        </div>
        <router-link
          to="/commission"
          class="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#A5ABB4] transition hover:text-[#EF4B42]"
        >
          <span>VIEW FULL RATES & TERMS</span>
          <span>↗</span>
        </router-link>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <div
          v-for="pkg in packages"
          :key="pkg.id"
          class="rounded-sm border border-[#353A42] bg-[#181B20] p-5 flex flex-col justify-between transition hover:border-[#EF4B42]"
        >
          <div class="space-y-4">
            <div class="aspect-16/10 w-full overflow-hidden rounded-xs bg-[#0B0D10] border border-[#353A42]/50">
              <img
                :src="pkg.image"
                :alt="pkg.name"
                class="h-full w-full object-cover transition duration-300 hover:scale-105"
                loading="eager"
              />
            </div>
            <div class="flex items-center justify-between">
              <span class="font-mono text-[11px] uppercase tracking-wider text-[#EF4B42] font-semibold">{{ pkg.badge }}</span>
            </div>
            <h3 class="text-2xl font-normal text-[#F0F0EB] font-serif">{{ pkg.name }}</h3>
            <p class="font-mono text-sm font-semibold text-[#F0F0EB] pt-1">
              {{ pkg.price }}
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-[#353A42]/50">
            <router-link
              to="/commission"
              class="flex min-h-[44px] items-center justify-between font-mono text-xs text-[#A5ABB4] hover:text-[#EF4B42] transition px-1"
            >
              <span>DETAILS & INCLUSIONS</span>
              <span>→</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 04 / CONTACT CALLOUT PANEL -->
    <section class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="rounded-sm border border-[#353A42] bg-gradient-to-br from-[#181B20] to-[#0B0D10] p-8 sm:p-12 lg:p-14">
        <div class="max-w-2xl space-y-5">
          <div class="font-mono text-xs tracking-widest text-[#EF4B42] uppercase">04 / INQUIRIES & COLLABORATION</div>
          <h2 class="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F0F0EB] font-serif leading-tight">
            Have a project in mind?
          </h2>
          <p class="text-sm sm:text-base text-[#A5ABB4] leading-relaxed font-sans">
            Whether you need custom graphic design, video editing, photography coverage, or want to collaborate on creative web experiments, feel free to reach out directly.
          </p>

          <div class="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <a
              href="mailto:ohatenma@gmail.com?subject=Project%20Inquiry%20-%20ShiroTenma"
              class="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-[#EF4B42] px-7 font-mono text-xs font-bold tracking-wider text-white transition hover:bg-[#EF4B42]/90 active:scale-95 shadow-lg shadow-[#EF4B42]/15"
            >
              <span>EMAIL DIRECTLY (PREFERRED)</span>
              <span>↗</span>
            </a>
            <div class="grid grid-cols-2 gap-3 sm:flex sm:items-center">
              <a
                href="https://discord.com/users/shirotenma"
                target="_blank"
                rel="noreferrer"
                class="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-[#353A42] bg-[#181B20] px-4 font-mono text-xs text-[#F0F0EB] hover:border-[#EF4B42] hover:text-[#EF4B42] transition"
              >
                <span>Discord</span>
                <span class="text-[#EF4B42]">↗</span>
              </a>
              <a
                href="https://wa.me/6288220023477"
                target="_blank"
                rel="noreferrer"
                class="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-[#353A42] bg-[#181B20] px-4 font-mono text-xs text-[#F0F0EB] hover:border-[#EF4B42] hover:text-[#EF4B42] transition"
              >
                <span>WhatsApp</span>
                <span class="text-[#EF4B42]">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

