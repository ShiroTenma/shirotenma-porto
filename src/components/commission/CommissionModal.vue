<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  isOpen: Boolean,
  activePackage: Object,
  activeOptions: Array,
  contactOpen: Boolean,
  rules: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['close', 'open-contact', 'close-contact'])
</script>

<template>
  <transition name="modal-fade">
    <div
      v-if="isOpen"
      class="commission-modal fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 overflow-y-auto"
      @click.self="emit('close')"
    >
      <div
        class="commission-modal-box w-full max-w-6xl rounded-sm bg-[#181B20] text-[#F0F0EB] shadow-2xl p-5 md:p-8 border border-[#353A42] my-auto flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
      >
        <!-- Modal Header -->
        <header
          class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-4 mb-6 border-b border-[#353A42] shrink-0"
        >
          <div class="space-y-1">
            <p class="font-mono text-xs uppercase tracking-widest text-[#EF4B42]">
              PACKAGE SPECIFICATION // {{ activePackage?.badge }}
            </p>
            <h3 class="text-3xl font-normal text-[#F0F0EB] font-serif">
              {{ activePackage?.name }}
            </h3>
            <p class="text-xs sm:text-sm text-[#A5ABB4] font-sans">
              {{ activePackage?.points?.[0] }}
            </p>
          </div>
          <button
            type="button"
            class="self-start inline-flex min-h-[44px] items-center gap-1.5 rounded-sm border border-[#353A42] bg-[#0B0D10] px-4 py-2 font-mono text-xs font-semibold text-[#F0F0EB] hover:border-[#EF4B42] hover:text-[#EF4B42] transition"
            @click="emit('close')"
          >
            <span>CLOSE</span>
            <span>×</span>
          </button>
        </header>

        <!-- Options Container (Scrollable Grid) -->
        <div
          class="overflow-y-auto pr-1 sm:pr-2 space-y-6 flex-1 min-h-0"
        >
          <div
            class="grid gap-5 sm:gap-6"
            :class="[
              activeOptions.length === 2
                ? 'grid-cols-1 md:grid-cols-2'
                : activeOptions.length >= 4
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  : 'grid-cols-1 md:grid-cols-3',
            ]"
          >
            <article
              v-for="option in activeOptions"
              :key="option.id"
              class="rounded-sm bg-[#0B0D10] overflow-hidden border border-[#353A42] flex flex-col justify-between transition hover:border-[#EF4B42] hover:shadow-xl hover:shadow-[#EF4B42]/5"
            >
              <div>
                <div
                  class="w-full aspect-16/9 bg-cover bg-center border-b border-[#353A42]/50"
                  :style="{ backgroundImage: `url(${option.image})` }"
                ></div>
                <div class="p-4 sm:p-5 space-y-2.5">
                  <div class="space-y-1">
                    <h4 class="text-xl font-normal text-[#F0F0EB] font-serif leading-snug">
                      {{ option.title }}
                    </h4>
                    <p class="font-mono text-xs font-bold text-[#EF4B42]">
                      {{ option.price || activePackage?.price }}
                    </p>
                  </div>
                  <div class="pt-2 border-t border-[#353A42]/40">
                    <div class="font-mono text-[10px] uppercase tracking-wider text-[#A5ABB4]/80 mb-1.5">
                      INCLUDED DELIVERABLES:
                    </div>
                    <ul class="space-y-1.5 text-xs text-[#A5ABB4] font-sans">
                      <li
                        v-for="point in option.points && option.points.length
                          ? option.points
                          : activePackage?.points || []"
                        :key="point"
                        class="flex items-start gap-2"
                      >
                        <span class="text-[#EF4B42] font-mono">›</span>
                        <span>{{ point }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="p-4 sm:p-5 pt-0">
                <button
                  type="button"
                  class="w-full inline-flex min-h-[44px] items-center justify-center gap-2 rounded-sm bg-[#EF4B42] text-white font-mono text-xs font-bold tracking-wider px-4 py-2.5 transition hover:bg-[#EF4B42]/90 active:scale-95 shadow-md shadow-[#EF4B42]/20"
                  @click.stop="emit('open-contact')"
                >
                  <span>INQUIRE THIS PACKAGE</span>
                  <span>↗</span>
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </transition>

  <transition name="contact-pop">
    <div
      v-if="contactOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      @click.self="emit('close-contact')"
    >
      <div
        class="w-full max-w-md rounded-sm bg-[#181B20] text-[#F0F0EB] shadow-2xl p-6 border border-[#353A42] space-y-5"
        role="dialog"
        aria-modal="true"
      >
        <header class="flex items-center justify-between pb-3 border-b border-[#353A42]">
          <div>
            <p class="font-mono text-[10px] uppercase tracking-widest text-[#EF4B42]">CHANNEL SELECTION</p>
            <h4 class="text-xl font-normal font-serif text-[#F0F0EB]">Inquire via Direct Channel</h4>
          </div>
          <button
            type="button"
            class="inline-flex min-h-[38px] items-center gap-1 rounded-sm border border-[#353A42] bg-[#0B0D10] px-3 py-1 font-mono text-xs text-[#A5ABB4] hover:text-[#F0F0EB] hover:border-[#EF4B42] transition"
            @click="emit('close-contact')"
          >
            <span>CLOSE</span>
            <span>×</span>
          </button>
        </header>

        <div class="space-y-4">
          <div v-if="rules?.length" class="space-y-2 bg-[#0B0D10] rounded-sm p-4 text-xs border border-[#353A42]/60">
            <p class="font-mono text-xs font-bold text-[#F0F0EB] uppercase">Order Guidelines:</p>
            <div class="space-y-2 text-[#A5ABB4]">
              <div
                v-for="ruleGroup in rules"
                :key="ruleGroup.title || ruleGroup"
                class="space-y-1"
              >
                <p v-if="ruleGroup.title" class="font-mono text-[10px] uppercase text-[#EF4B42]">
                  {{ ruleGroup.title }}
                </p>
                <ul class="space-y-1 pl-1">
                  <li
                    v-for="rule in (ruleGroup.rules ? ruleGroup.rules : Array.isArray(ruleGroup) ? ruleGroup : [ruleGroup])"
                    :key="rule"
                    class="flex items-start gap-1.5"
                  >
                    <span class="text-[#EF4B42]">›</span>
                    <span>{{ rule }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-2.5 pt-2">
            <a
              class="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-sm bg-[#EF4B42] text-white font-mono text-xs font-bold tracking-wider hover:bg-[#EF4B42]/90 active:scale-95 transition shadow-lg shadow-[#EF4B42]/15"
              href="mailto:ohatenma@gmail.com?subject=Creative%20Commission%20Inquiry%20-%20ShiroTenma"
            >
              <span>Email: ohatenma@gmail.com (Preferred)</span>
              <span>↗</span>
            </a>
            <div class="grid grid-cols-2 gap-2.5">
              <a
                class="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-sm border border-[#353A42] bg-[#0B0D10] text-[#F0F0EB] font-mono text-xs font-semibold tracking-wider hover:border-[#EF4B42] hover:text-[#EF4B42] transition"
                href="https://discord.com/users/shirotenma"
                target="_blank"
                rel="noreferrer"
              >
                <span>Discord</span>
                <span class="text-[#EF4B42]">↗</span>
              </a>
              <a
                class="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-sm border border-[#353A42] bg-[#0B0D10] text-[#F0F0EB] font-mono text-xs font-semibold tracking-wider hover:border-[#EF4B42] hover:text-[#EF4B42] transition"
                href="https://wa.me/6288220023477"
                target="_blank"
                rel="noreferrer"
              >
                <span>WhatsApp</span>
                <span class="text-[#EF4B42]">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
