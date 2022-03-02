import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PrimeVue from 'primevue/config';
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

const app = createApp(App);

app.use(PrimeVue);
app.use(store)
app.use(router)

app.component('Button', Button)
app.component('InputText', InputText)

app.mount('#app')