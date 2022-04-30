<template>
	<view class="home">
		<swiper indicator-dots circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.imgs"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品区 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goods-list :goods="hotGoods" @goodsItemClick="goGoodsDetail"></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return{
				baseUrl:"https://fastmock.site/mock/43c7e9ce32c84e578aa52e702106ef3a/shop",
				swipers:[],
				hotGoods:[],
				navs:[
					{
						icon:'iconfont icon-chujingchaoshi',
						title:'ST超市',
						path:'/pages/goods/goods'
					},
					{
						icon:'iconfont icon-zhinengkefuzhongxin',
						title:'联系我们',
						path:'/pages/contact/contact'
					},
					{
						icon:'iconfont icon-tupian',
						title:'社区图片',
						path:'/pages/pics/pics'
					},
					{
						icon:'iconfont icon-qudaoshujufenxi',
						title:'学习视频',
						path:'/pages/videos/videos'
					}
				]
			}
		},
		components:{
			goodsList
		},
		methods:{
			//获取轮播图数据
			async getSwipers(){
				// uni.request({
				// 	url:this.baseUrl+'/img',
				// 	success: res=>{
				// 		console.log('res',res)
				// 		if(res.data.code !== "0000"){
				// 			uni.showToast({
				// 				title:"获取数据失败"
				// 			})
				// 		}
				// 		this.swipers = res.data.data.listImg
				// 		console.log('img',this.swipers)
				// 	}
				// })
				// 返回promise用awite来接收
				const res = await this.$myRequest({
					url:'/img',
				})
				console.log('res', res)
				this.swipers = res.data.data.listImg
				console.log('img',this.swipers)
			},
			//获取热门商品列表数据
			async getHotGoods(){
				const res = await this.$myRequest({
					url:'/goods1'
				})
				console.log('goods_hot',res)
				this.hotGoods=res.data.data.listImg
				console.log('hotGoods',this.hotGoods)
			},
			//导航跳转
			navItemClick(path){
				uni.navigateTo({
					url:path
				})
			},
			//跳转到商品详情页
			goGoodsDetail(info){
				console.log('godetail')
				uni.navigateTo({
					 url:'../goods-detail/goods-detail?info='+encodeURIComponent(JSON.stringify(info))
				     // url:'../goods-detail/goods-detail?id='+id+'&sell-price='+sell_price+'&market_price='+market_price+'&title'+title
				})
				// console.log('godetail,id',id,'godetail,sell_price',sell_price,'market_price',market_price,'title',title)
			}
		},
		onLoad() {
			this.getSwipers()
			this.getHotGoods()
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				height: 100%;
				width: 100%;
			}
		}
		.nav{
			display: flex;
			.nav_item{
				width: 25%;
				text-align: center;
				view{
					width: 120rpx;
					height: 120rpx;
					background: $shop-color;
					border-radius: 60rpx;
					margin: 10px auto;
					line-height: 120rpx;
					color: #FFFFFF;
					font-size: 50rpx;
				}
				.icon-chujingchaoshi{
					font-size: 55rpx;
				}
				text{
					font-size: 20rpx;
				}
			}
		}
		.hot_goods{
			background: #eee;
			overflow: hidden;
			margin-top: 10rpx;
			.tit{
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				font-size: 20px;
				text-align: center;
				letter-spacing: 20px;
				background: #fff;
				margin: 7rpx 0;
			}
		}
	}
</style>
