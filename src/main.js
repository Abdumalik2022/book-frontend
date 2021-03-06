import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
   render: h => h(App),
   store,
   router,
}).$mount('#app')

Vue.filter('str_limit', function (value, size) {
   if (!value) return '';
   value = value.toString();

   if (value.length <= size) {
      return value;
   }
   return value.substr(0, size) + '...';
});

