// options是传过来的对象，里边有url（如/img）等信息,如下
// myRequest({
// 	url:'/img',
// 	method:'post',
// data:{}
// })
const Base_URL="https://fastmock.site/mock/43c7e9ce32c84e578aa52e702106ef3a/shop"

export const myRequest=(options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:Base_URL+options.url,
			// 可以不传method，不传默认为get
			method:options.method || 'GET',
			data:options.data || {},
			success: (res) => {
				if(res.data.code !== "0000"){
					uni.showToast({
						title:"获取数据失败"
					})
				}
				// 请求成功将res返回回去
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title:"请求接口失败"
				})
				reject(err)
			}
		})
	})
}