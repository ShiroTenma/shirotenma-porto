<template>
  <footer class="border-t border-[#353A42]/60 bg-[#0B0D10] text-[#A5ABB4] pt-12 pb-8">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 space-y-10">
      <div class="grid gap-8 md:grid-cols-12">
        <!-- Brand summary -->
        <div class="space-y-3 md:col-span-5">
          <div class="flex items-center gap-2">
            <span class="inline-block h-2 w-2 rounded-full bg-[#EF4B42]"></span>
            <span class="font-mono text-sm tracking-wider uppercase text-[#F0F0EB] font-bold">SHIROTENMA<span class="text-[#EF4B42]">.</span></span>
          </div>
          <p class="text-xs text-[#A5ABB4] leading-relaxed max-w-sm">
            SIGNAL / A Personal Creative Archive. Multidisciplinary work spanning visual design, motion, photography, and web experiments.
          </p>
        </div>

        <!-- Navigation Links -->
        <div class="space-y-3 md:col-span-3 font-mono text-xs">
          <div class="text-[11px] uppercase tracking-wider text-[#F0F0EB] font-semibold">ARCHIVE INDEX</div>
          <div class="flex flex-col gap-2">
            <router-link to="/portfolio" class="hover:text-[#EF4B42] transition">01 / WORK</router-link>
            <router-link to="/about" class="hover:text-[#EF4B42] transition">02 / ABOUT</router-link>
            <router-link to="/commission" class="hover:text-[#EF4B42] transition">03 / SERVICES</router-link>
            <router-link to="/contact" class="hover:text-[#EF4B42] transition">04 / CONTACT</router-link>
          </div>
        </div>

        <!-- Verified Contacts & Channels -->
        <div class="space-y-3 md:col-span-4 font-mono text-xs">
          <div class="text-[11px] uppercase tracking-wider text-[#F0F0EB] font-semibold">CONNECT / INQUIRE</div>
          <div class="flex flex-wrap gap-2">
            <a
              href="mailto:ohatenma@gmail.com?subject=Project%20Inquiry%20-%20ShiroTenma"
              class="inline-flex items-center gap-1.5 rounded-sm border border-[#EF4B42] bg-[#EF4B42]/10 px-3 py-1.5 text-xs text-[#EF4B42] hover:bg-[#EF4B42] hover:text-white transition font-bold"
            >
              <span>Email (Preferred)</span>
              <span>↗</span>
            </a>
            <a
              href="https://discord.com/users/shirotenma"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-1.5 rounded-sm border border-[#353A42] bg-[#181B20] px-3 py-1.5 text-xs text-[#F0F0EB] hover:border-[#EF4B42] hover:text-[#EF4B42] transition"
            >
              <span>Discord</span>
              <span class="text-[#EF4B42]">↗</span>
            </a>
            <a
              href="https://wa.me/6288220023477"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-1.5 rounded-sm border border-[#353A42] bg-[#181B20] px-3 py-1.5 text-xs text-[#F0F0EB] hover:border-[#EF4B42] hover:text-[#EF4B42] transition"
            >
              <span>WhatsApp</span>
              <span class="text-[#EF4B42]">↗</span>
            </a>
            <a
              href="https://github.com/ShiroTenma"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-1.5 rounded-sm border border-[#353A42] bg-[#181B20] px-3 py-1.5 text-xs text-[#F0F0EB] hover:border-[#EF4B42] hover:text-[#EF4B42] transition"
            >
              <span>GitHub</span>
              <span class="text-[#EF4B42]">↗</span>
            </a>
            <a
              href="https://ko-fi.com/shirotenma"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-1.5 rounded-sm border border-[#353A42] bg-[#181B20] px-3 py-1.5 text-xs text-[#F0F0EB] hover:border-[#EF4B42] hover:text-[#EF4B42] transition"
            >
              <span>Ko-fi</span>
              <span class="text-[#EF4B42]">↗</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright / Status bar -->
      <div
        class="border-t border-[#353A42]/50 pt-5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#A5ABB4]/60 gap-2"
      >
        <span>SYS.STATUS // ALL ARCHIVES OPERATIONAL</span>
        <span>© {{ new Date().getFullYear() }} SHIROTENMA. ALL RIGHTS RESERVED.</span>
      </div>
    </div>
  </footer>
</template>
