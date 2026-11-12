export default {
  mounted(el) {
    el.classList.add('inview-base')
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('inview', 'inview-show')
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('inview', 'inview-show')
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    el._inviewObserver = observer
  },
  unmounted(el) {
    if (el._inviewObserver) {
      el._inviewObserver.disconnect()
      delete el._inviewObserver
    }
  },
}
