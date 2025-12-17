<template>
  <footer class="bg-slate-900 text-slate-200 pt-12 pb-6">
    <div class="section-container">
      <div class="grid gap-8 md:grid-cols-4">
        <div class="space-y-3">
          <h3 class="text-xl font-semibold text-white">Shiro<span class="text-teal-400">Tenma</span></h3>
          <p class="text-sm text-slate-400">
            Descriptive line about what your company does.
          </p>
        </div>

        <div>
          <h4 class="text-sm font-semibold uppercase tracking-[0.14em] text-white mb-3">The Web</h4>
          <ul class="space-y-2 text-sm text-slate-300">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Commission</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold uppercase tracking-[0.14em] text-white mb-3">Portfolio</h4>
          <ul class="space-y-2 text-sm text-slate-300">
            <li>Social Media Banner</li>
            <li>BG Map osu!</li>
            <li>Photography</li>
            <li>Video Editing</li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold uppercase tracking-[0.14em] text-white mb-3">Support</h4>
          <ul class="space-y-2 text-sm text-slate-300">
            <li>Contact</li>
            <li>Support</li>
            <li>Legal</li>
          </ul>
        </div>
      </div>

      <div class="mt-10 border-t border-slate-800 pt-4 flex flex-col md:flex-row md:items-center md:justify-between text-sm text-slate-400 gap-3">
        <span>© {{ new Date().getFullYear() }} ShiroTenma</span>
        <div class="flex gap-3 text-slate-300">
          <a href="#" aria-label="Twitter" class="hover:text-teal-400 transition">Tw</a>
          <a href="#" aria-label="Instagram" class="hover:text-teal-400 transition">Ig</a>
          <a href="#" aria-label="Behance" class="hover:text-teal-400 transition">Be</a>
        </div>
      </div>
    </div>
  </footer>
</template>
