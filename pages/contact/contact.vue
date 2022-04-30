<template>
	<view class="contact">
		<image class="image" src="https://picsum.photos/750/380?random=39"></image>
		<view class="info">
			<view @click="makePhoneCall">联系电话：123-4567-8912（点击拨打）</view>
			<view>联系地址：河南省郑州市郑州大学柳源六号楼406室</view>
		</view>
		<button @click="getLocation">获取当前位置</button>
		<map class="map" :longitude="longitude" :latitude="latitude" :markers="markers" :scale="scale"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:113.538521,
				latitude:34.818048,
				scale:16,
				markers:[
					{
						longitude:113.538521,
						latitude:34.818048,
						iconPath:'../../static/daohangdizhi.png',
						width:30,
						height:30
					}
				]
			}
		},
		methods: {
			getLocation(){
				 uni.getLocation({
					type: 'wgs84',
					success: (res)=>{
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
						this.longitude = res.longitude
						this.latitude = res.latitude
						this.markers.longitude = res.longitude
						this.markers.latitude = res.latitude
						console.log('this.longitude：' + this.longitude);
						console.log('this.latitude：' + this.latitude);
						console.log('this.markers.longitude：' + this.markers.longitude);
						console.log('this.markers.latitude：' + this.markers.latitude);
					}
				})
			},
			makePhoneCall(){
				uni.makePhoneCall({
					phoneNumber:'12345678912'
				})
			}
		},
		// onLoad() {
		// 	getLocation()
		// }
	}
</script>

<style lang="scss">
.contact{
	.image{
		width: 750rpx;
		height: 360rpx;
	}
	.info{
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view{
			line-height: 60rpx;
			border-bottom: 1px solid #eee;
		}
	}
	.map{
		width: 750rpx;
		height: 750rpx;
	}
}
</style>
