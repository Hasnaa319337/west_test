import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'



//otp
// import VOtpInput from 'vue3-otp-input'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import { VOtpInput } from 'vuetify/labs/VOtpInput'
const vuetify = createVuetify({
  components,
  directives
})
export default createVuetify({
  components: {
    VOtpInput,
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.component('v-otp-input', VOtpInput)
app.mount('#app')
