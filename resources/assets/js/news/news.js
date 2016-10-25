import { sync } from 'vuex-router-sync'
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex/store'
import routes from './routes/'
import { setNews } from './vuex/action'
import { mapGetters, mapActions } from 'vuex'


import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)


const router = new VueRouter({
  routes
})
sync(store, router)

Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);
    next();
});

new Vue({
	store,
	router,
	mounted() {
		
		const self = this
		//this.increment();
		this.$http.get('/news', []).then((res) => {
			self.setNews(res.data)
		})
	},
	render (h) {
	  return (
	    <div class="container">
	    	<router-view></router-view>
	    </div>
	  )
	},
	computed: mapGetters({
    	products: 'allnews'
  	}),
  	methods: {
  		setNews(data) {
  			this.$store.dispatch('increment', data);
  		}
  	}
}).$mount('#app')