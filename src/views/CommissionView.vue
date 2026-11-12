<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

import CommissionHero from '../components/commission/CommissionHero.vue'
import CommissionModal from '../components/commission/CommissionModal.vue'
import CommissionTerms from '../components/commission/CommissionTerms.vue'

import { packages, packageOptions, termCategories, termsContent } from '../data/services'

const defaultTermsCategory = termCategories[0]?.id ?? 'graphics'
const activePackageId = ref(null)
const contactModalOpen = ref(false)
const activeTermsCategory = ref(defaultTermsCategory)
const isModalOpen = computed(() => !!activePackageId.value)
const activePackage = computed(() => packages.find((p) => p.id === activePackageId.value))
const activeOptions = computed(() => packageOptions[activePackageId.value] || [])
const activeRules = computed(() =>
  activeOptions.value.map((opt) => ({
    title: opt.title,
    rules: opt.rules && opt.rules.length ? opt.rules : opt.points || [],
  })),
)

const openPackage = (id) => {
  activePackageId.value = id
}

const closeModal = () => {
  activePackageId.value = null
  contactModalOpen.value = false
}

const openContactOptions = () => {
  contactModalOpen.value = true
}

const closeContactOptions = () => {
  contactModalOpen.value = false
}

const handleSelectTerms = (id) => {
  activeTermsCategory.value = id || defaultTermsCategory
}

watch(isModalOpen, (open) => {
  const body = document.body
  const html = document.documentElement
  if (!body || !html) return
  if (open) {
    body.style.overflow = 'hidden'
    html.style.overflow = 'hidden'
  } else {
    body.style.overflow = ''
    html.style.overflow = ''
  }
})

const handleKeydown = (e) => {
  if (e.key === 'Escape' && isModalOpen.value) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  const body = document.body
  const html = document.documentElement
  if (body) body.style.overflow = ''
  if (html) html.style.overflow = ''
})
</script>

<template>
  <div class="page bg-[#0B0D10] text-[#F0F0EB]">
    <CommissionHero :packages="packages" @open-package="openPackage" />

    <CommissionTerms
      :categories="termCategories"
      :active-category="activeTermsCategory"
      :terms="termsContent"
      @select="handleSelectTerms"
    />

    <CommissionModal
      :is-open="isModalOpen"
      :active-package="activePackage"
      :active-options="activeOptions"
      :rules="activeRules"
      :contact-open="contactModalOpen"
      @close="closeModal"
      @open-contact="openContactOptions"
      @close-contact="closeContactOptions"
    />
  </div>
</template>
