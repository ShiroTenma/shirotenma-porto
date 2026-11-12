import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/tailwind.css'
import './assets/styles/base.css'
import inview from './directives/inview'

const app = createApp(App)

app.use(router)
app.directive('inview', inview)

app.mount('#app')
