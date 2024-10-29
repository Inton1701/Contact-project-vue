// import './assets/main.css'
import router from './routes'
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Toast from 'vue-toastification';
import "vue-toastification/dist/index.css"
const app = createApp(App);
app.use(Toast).use(router);
app.mount('#app')
// createApp(App).mount('#app')
