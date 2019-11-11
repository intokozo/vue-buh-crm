import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: 'AIzaSyCdJwQeHOaBW6FSEVJ2MDUuzVMR1CTpESs',
  authDomain: 'vue-buh-crm-79fe0.firebaseapp.com',
  databaseURL: 'https://vue-buh-crm-79fe0.firebaseio.com',
  projectId: 'vue-buh-crm-79fe0',
  storageBucket: 'vue-buh-crm-79fe0.appspot.com',
  messagingSenderId: '686214691574',
  appId: '1:686214691574:web:123366aa90de00d6bf0ad7',
  measurementId: 'G-LZ94B7EH6X'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
