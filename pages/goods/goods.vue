<template>
	<view class="goods-list">
		<good-list @goodsItemClick="goGoodsDetail" :goods="goodsList"></good-list>
		<view class="isOver" v-if="flag">-----我是有底线的-----</view>
	</view>
</template>

<script>
	import goodList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				goodsPage:1,
				goodsList:[],
				flag:false,
			}
		},
		components:{
			goodList
		},
		methods: {
			//获取商品列表的数据
			async getGoodsList(callBack){
				const res = await this.$myRequest({
					url:'/goods'+this.goodsPage
				})
				console.log('商品数据',res)
				this.goodsList=[...this.goodsList,...res.data.data.listImg]
				callBack && callBack()
			},
			//进入商品详情页
			goGoodsDetail(id){
				console.log('godetail')
				uni.navigateTo({
					url:'../goods-detail/goods-detail?id='+id
				})
				console.log('godetail,id',id)
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		onReachBottom() {
			// if(this.goodsList.length<this.goodsPage*19) return this.flag=true
			// 因为现在只有两页,所以用以下的if语句,做项目时可以和后端商量
			if(this.goodsPage>=2) return this.flag=true
			console.log('触底了')
			this.goodsPage++
			this.getGoodsList()
		},
		onPullDownRefresh() {
			this.goodsPage=1
			this.goodsList=[]
			this.flag=false
			setTimeout(()=>{
				this.getGoodsList(()=>{
					uni.stopPullDownRefresh()
				})
			},1000)
		}
	}
</script>

<style lang="scss">
.goods-list{
	background: #eee;
}
.isOver{
	width: 100%;
	height: 50px;
	line-height: 50px;
	text-align: center;
	// background: #fff;
	font-size: 28rpx;
	color: $shop-color;
}
</style>
