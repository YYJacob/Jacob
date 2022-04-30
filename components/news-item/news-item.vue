<template>
	<view>
	 <view class="news_item" @click="navigator(item.id)" v-for="(item,index) in list" :key="index">
		<image :src="item.imgs"></image>
		<view class="right">
			<view class="tit">
				{{item.tit}}
			</view>
			<view class="info">
				<text>发表时间：{{item.time | formatDate}}</text>
				<text>浏览：{{item.num}}</text>
			</view>
		</view>
	 </view>
	</view>
</template>

<script>
	export default{
		props:['list'],
		// 过滤器,过滤不合理时间
		filters:{
			formatDate(date){
				console.log('date',date)
				// 转换为标准时间
				const nDate = new Date(date)
				// 获取年，月，日
				const year = nDate.getFullYear()
				// 第一个参数看长度难不满足2,如过不满足两位就在前面追加一个0
				const month = nDate.getMonth().toString().padStart(2,0)
				const day = nDate.getDay().toString().padStart(2,0)
				return year+'-'+month+'-'+day
			}
		},
		methods:{
			 navigator(id){
				 this.$emit('itemClick',id)
			 }
		},
		// onLoad() {
		// 	this.getMessage()
		// }
	}
</script>

<style lang="scss">
	.news_item{
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid $shop-color;
		image{
			width: 230rpx;
			min-width: 230rpx;
			max-width: 230rpx;
			height: 180rpx;
		}
		.right{
			margin-left: 15rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.tit{
				font-size: 36rpx;
			}
			.info{
				font-size: 18rpx;
				text{
					color: #969896;
				}
				text:nth-child(2){
					margin-left: 40rpx;
				}
			}
		}
	}
</style>
