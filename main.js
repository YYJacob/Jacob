import App from './App'

// #ifndef VUE3
import Vue from 'vue'

import {myRequest} from 'util/api.js'
Vue.prototype.$myRequest = myRequest
// vue.filter('formatDate',(date)=>{
// 	// 转换为标准时间
// 	const nDate = new Date(date)
// 	// 获取年，月，日
// 	const year = nDate.getFullYear()
// 	// 第一个参数看长度难不满足2,如过不满足两位就在前面追加一个0
// 	const month = nDate.getMonth().toString().padStart(2,0)
// 	const day = nDate.getDay().toString().padStart(2,0)
// 	return year+'-'+month+'-'+day
// })

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'

import {myRequest} from 'util/api.js'
Vue.prototype.$myRequest = myRequest
// vue.filter('formatDate',(date)=>{
// 	// 转换为标准时间
// 	const nDate = new Date(date)
// 	// 获取年，月，日
// 	const year = nDate.getFullYear()
// 	// 第一个参数看长度难不满足2,如过不满足两位就在前面追加一个0
// 	const month = nDate.getMonth().toString().padStart(2,0)
// 	const day = nDate.getDay().toString().padStart(2,0)
// 	return year+'-'+month+'-'+day
// })


export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif