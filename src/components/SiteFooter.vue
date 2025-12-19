<template>
  <footer class="bg-slate-900 text-slate-200 pt-12 pb-6">
    <div class="section-container space-y-10">
      <div class="grid gap-8 md:grid-cols-2">
        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-white">Contact me!</h3>
          <div class="flex items-center gap-3">
            <a
              href="https://twitter.com/_TenHachi"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              class="w-11 h-11 rounded-full bg-slate-800 hover:bg-teal-600 transition flex items-center justify-center text-lg font-semibold"
            >
              X
            </a>
            <a
              href="https://instagram.com/kariibun"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              class="w-11 h-11 rounded-full bg-slate-800 hover:bg-teal-600 transition flex items-center justify-center text-lg font-semibold"
            >
              Ig
            </a>
            <a
              href="https://wa.me/6285183335473"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              class="w-11 h-11 rounded-full bg-slate-800 hover:bg-teal-600 transition flex items-center justify-center text-lg font-semibold"
            >
              Wa
            </a>
            <a
              href="https://discord.com/users/348379630941765645"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
              class="w-11 h-11 rounded-full bg-slate-800 hover:bg-teal-600 transition flex items-center justify-center text-lg font-semibold"
            >
              Ds
            </a>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-white">Support me!</h3>
          <div class="flex items-center gap-3">
            <a
              href="https://ko-fi.com/shirotenma"
              target="_blank"
              rel="noreferrer"
              aria-label="Ko-fi"
              class="w-11 h-11 rounded-full bg-slate-800 hover:bg-orange-500 transition flex items-center justify-center text-xs font-semibold"
            >
              Ko-fi
            </a>
            <a
              href="https://trakteer.id/shirotenma/tip"
              target="_blank"
              rel="noreferrer"
              aria-label="Trakteer"
              class="w-11 h-11 rounded-full bg-slate-800 hover:bg-orange-500 transition flex items-center justify-center text-[11px] font-semibold"
            >
              Trakteer
            </a>
          </div>
        </div>
      </div>

      <div class="grid gap-6 md:grid-cols-3 text-sm">
        <div class="space-y-2">
          <h4 class="text-sm font-semibold uppercase tracking-[0.14em] text-white">Navigation</h4>
          <div class="flex flex-wrap gap-3 text-slate-300">
            <router-link to="/" class="hover:text-teal-400 transition">Home</router-link>
            <router-link to="/about" class="hover:text-teal-400 transition">About</router-link>
            <router-link to="/portfolio" class="hover:text-teal-400 transition"
              >Portfolio</router-link
            >
            <router-link to="/commission" class="hover:text-teal-400 transition"
              >Commission</router-link
            >
            <router-link to="/contact" class="hover:text-teal-400 transition">Contact</router-link>
          </div>
        </div>
      </div>

      <div
        class="border-t border-slate-800 pt-4 flex flex-col md:flex-row md:items-center md:justify-between text-sm text-slate-400 gap-3"
      >
        <span>© {{ new Date().getFullYear() }} ShiroTenma</span>
      </div>
    </div>
  </footer>
</template>
