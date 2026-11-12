import { describe, it, expect, vi, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'
import router from '../router'
import inview from '../directives/inview'

beforeAll(() => {
  window.scrollTo = vi.fn()
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))
})

describe('App', () => {
  it(
    'mounts properly with router',
    async () => {
      router.push('/')
      await router.isReady()

      const wrapper = mount(App, {
        global: {
          plugins: [router],
          directives: {
            inview,
          },
        },
      })
      expect(wrapper.exists()).toBe(true)
    },
    15000
  )
})
