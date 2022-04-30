<template>
	<view class="goods-detail">
		<swiper indicator-dots>
			<swiper-item v-for="(item,index) in swiperImgList" :key="index">
				<image :src="item.imgSrc"></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>{{sell_price}}</text>
				<text>{{market_price}}</text>
			</view>
			<view class="good-name">
				{{title}}
			</view>
		</view>
		<view class="line"></view>
		<view class="box2">
			<view>货号：{{goodsDetail.goosd_no}}</view>
			<view>库存：{{goodsDetail.stock_quntity}}</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="tit">详情介绍</view>
			<view class="content">
				<rich-text :nodes="content"></rich-text>
			</view>
		</view>
		<view class="goods_nav">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				sell_price:0,
				market_price:0,
				title:0,
				swiperImgList:[],
				goodsDetail:[],
				// content可以接收为富文本
				content:'<p>这是一个好作品啊！:可以接收为富文本</p><br/><p>对我个人而言，艺术不仅仅是一个重大的事件，还可能会改变我的人生。 池田大作曾经说过，不要回避苦恼和困难，挺起身来向它挑战，进而克服它。这不禁令我深思。 我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 我认为， 艺术因何而发生？ 对我个人而言，艺术不仅仅是一个重大的事件，还可能会改变我的人生。 我们都知道，只要有意义，那么就必须慎重考虑。 一般来讲，我们都必须务必慎重的考虑考虑。 一般来说， 对我个人而言，艺术不仅仅是一个重大的事件，还可能会改变我的人生。 既然如此， 对我个人而言，艺术不仅仅是一个重大的事件，还可能会改变我的人生。 一般来说， 俾斯麦曾经提到过，失败是坚忍的最后考验。</p>',
				 options: [{
							icon: 'headphones',
							text: '客服'
						}, {
							icon: 'shop',
							text: '店铺',
							info: 2,
							infoBackgroundColor:'#fff',
							infoColor:"#6FDCC5"
						}, {
							icon: 'cart',
							text: '购物车',
							info: 12,
							infoBackgroundColor:'#fff',
							infoColor:"#6FDCC5"
						}],
			    buttonGroup: [{
					      text: '加入购物车',
					      backgroundColor: '#FF4500',
					      color: '#fff'
					    },
					    {
					      text: '立即购买',
					      backgroundColor: '#6FDCC5',
					      color: '#fff'
					    }
					    ]
			}
		},
		methods: {
			async getSwipers(){
				const res = await this.$myRequest({
					url:'/goods/img/'+this.id
				})
				this.swiperImgList=res.data.imgList
			},
			async getDetailInfo(){
				const res = await this.$myRequest({
					url:'/goods/detail/'+this.id
				})
				console.log("res",res)
				this.goodsDetail=res.data.data[0]
				console.log("goodsDetail",this.goodsDetail)
			},
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
		   buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		},
		onLoad(option) { 
			let Info = JSON.parse(decodeURIComponent(option.info))
			console.log('info',Info)
			this.id=Info.id
			this.sell_price=Info.newPrice
			this.market_price=Info.lastPrice
			this.title=Info.name
			this.getSwipers()
			this.getDetailInfo()
		}
	}
</script>

<style lang="scss">
.goods-detail{
	swiper{
		height: 700rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.box1{
		padding: 10px;
		.price{
			font-size: 38rpx;
			color: $shop-color;
			line-height: 80rpx;
			text:nth-child(2){
				color: #ccc;
				font-size: 28rpx;
				text-decoration: line-through;
				margin-left: 20rpx;
			}
		}
		.good-name{
			font-size: 36rpx;
		}
	}
	.line{
		height: 10rpx;
		width: 750rpx;
		background: #eee;
	}
	.box2{
		padding: 0 10px;
		font-size: 32rpx;
		line-height: 70rpx;
	}
	.box3{
		padding-bottom: 50px;
		.tit{
			font-size: 32rpx;
			padding-left: 10px;
			border-bottom: 1px solid #eee;
			line-height: 70rpx;
		}
		.content{
			padding: 10px;
			font-size: 28rpx;
			color: #333;
			line-height: 50rpx;
		}
	}
	.goods_nav{
		position: fixed;
		bottom: 0;
		width: 100%;
	}
}
</style>
