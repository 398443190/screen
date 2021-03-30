import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import compon from 'libs-component/src/index.js'
import Echarts from 'vue-echarts'
import AluEcharts from './components/AluEcharts'
import VueCountTo from './components/VueCountTo/vue-countTo'
import dataV from '@jiaminghi/data-view'
// console.log(Echarts, 'echarts')

createApp(App)
    .use(store)
    .use(router)
    // .use(compon)
    .use(dataV)
    .component('vue-echarts', Echarts)
    .component('alu-echarts', AluEcharts)
    .component('CountTo', VueCountTo)
    .mount('#app')