<template>
	<view class="news">
		<news-item @itemClick="goDetail" :list="newsList" ></news-item>
	</view>
</template>

<script>
	import newsItem from "../../components/news-item/news-item.vue"
	export default {
		data() {
			return {
				newsList:[]
			}
		},
		components:{
			newsItem
		},
		methods: {
			async getNews(){
				const res = await this.$myRequest({
					url:'/news'
				})
				console.log("news",res)
				this.newsList=res.data.news
				console.log('newList',this.newsList)
			},
			goDetail(id){
				console.log('id',id)
				uni.navigateTo({
					url:'/pages/news-detail/news-detail?id='+id
				})
			}
		},
		onLoad() {
			this.getNews()
		}
	}
</script>

<style lang="scss">
.news{
	
}
</style>
