<template>
	<view class="news-detail">
		<text class="title">{{detail.title}}</text>
		<view class="info">
			<text>发表时间：{{detail.time}}</text>
			<text>浏览次数：{{detail.num}}</text>
		</view>
		<view class="content">
			<rich-text :nodes="detail.message"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				detail:[]
			}
		},
		methods: {
			async getNewsDetail(){
				const res = await this.$myRequest({
					url:'/newsDetail/'+this.id
				})
				console.log(res)
				this.detail=res.data.newsDetail[0]
				console.log('this.detail',this.detail)
			}
		},
		onLoad(options) {
			this.id=options.id
			this.getNewsDetail()
		}
	}
</script>

<style lang="scss">
.news-detail{
	font-size: 30rpx;
	padding: 0 20rpx;
	.title{
		text-align: center;
		width: 710rpx;
		display: block;
		font-size: 48rpx;
		color: $shop-color;
		margin: 20rpx 0;
	}
	.info{
		display: flex;
		justify-content: space-between;
		color: #969896;
	}
	.content{
		margin-top: 20rpx;
	}
}
</style>
