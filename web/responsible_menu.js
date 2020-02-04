import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css' //Add
import 'bootstrap-vue/dist/bootstrap-vue.css' //Add
import BootstrapVue from 'bootstrap-vue'  // Add

Vue.config.productionTip = false
Vue.use(BootstrapVue)  // Add

new Vue({
    render: h => h(App),
}).$mount('#app')