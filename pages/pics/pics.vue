<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view
			 :class="active===index?'active':''" 
			 v-for="(item,index) in cates" 
			 :key="item.id"
			 @click="leftClickHandle(index,item.id)"
			 >
			 {{item.name}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in picImgs">
				<image  @click="previewImg(item.imgs)" :src="item.imgs"></image>
				<text>{{message}}</text>
			</view>
			<text v-if="picImgs.length===0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates:[],
				picImgs:[],
				active:0,
				message:'a'
			}
		},
		methods: {
			async getPicsCate(){
				const res = await this.$myRequest({
					url:'/pics'
				})
				console.log("pics",res)
				this.cates=res.data.data.listImg
				this.leftClickHandle(0,this.cates[0].id)
			},
			async leftClickHandle(index,id){
				this.active=index
				// 获取右侧数据
				const res = await this.$myRequest({
					url:'/pics/img'+id
				})
				console.log('picImgs',res)
				this.picImgs=res.data.data.picsImg
				console.log('this.picImgs',this.picImgs)
				// 获取右侧文字,主要是要获取随机句子,所以单独用api,做项目可以放在图片信息里边
				const message = await uni.request({
					url:'https://api.uixsj.cn/hitokoto/get?type=social&random='+id,
					success: (res) => {
						this.message=res.data
					}
				})
			},
			previewImg(current){
				const urls = this.picImgs.map(item=>{
					return item.imgs
				})
				uni.previewImage({
					current,
					urls,
					indicator:"default"
				})
			}
		},
		onLoad() {
			this.getPicsCate()
		}
	}
</script>

<style lang="scss">
page{
	height: 100%;
}
.pics{
	height: 100%;
	display: flex;
	.left{
		width: 230rpx;
		height: 100%;
		border-right: 1px solid #eee;
		view{
			height: 80px;
			line-height: 80px;
			color: #333;
			text-align: center;
			font-size: 30rpx;
			border-top: 1px solid #eee;
		}
		.active{
			background: $shop-color;
			color: #fff;
		}
	}
	.right{
		height: 100%;
		width: 510rpx;
		margin: 0 auto;
		.item{
			image{
				width: 510rpx;
				height: 510rpx;
				border-radius: 5px;
			}
			text{
				font-size: 30rpx;
				line-height: 60rpx;
			}
		}
	}
}
</style>
