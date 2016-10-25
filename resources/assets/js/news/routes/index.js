import App from '../components/App.vue'
import AddNews from '../components/AddNews.vue'

const routes = [
  { path: '/', component: App },
  { path: '/add', component: AddNews },
]

module.exports = routes