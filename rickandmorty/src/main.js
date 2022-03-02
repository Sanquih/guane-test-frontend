import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import PrimeVue from 'primevue/config';
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Paginator from 'primevue/paginator';
import Card from 'primevue/card';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import '/node_modules/primeflex/primeflex.css'               //primeflex

const app = createApp(App);

app.use(PrimeVue);
app.use(store)
app.use(router)

app.component('Button', Button)
app.component('InputText', InputText)
app.component('Paginator', Paginator)
app.component('Card', Card)

app.mount('#app')