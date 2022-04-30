<script>
	export default {
		data(){
			return{
			}
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@font-face {
	  font-family: "iconfont"; /* Project id 3267618 */
	  src: url('~@/static/font/iconfont.woff2?t=1647933607604') format('woff2'),
	       url('~@/static/font/iconfont.woff?t=1647933607604') format('woff'),
	       url('~@/static/font/iconfont.ttf?t=1647933607604') format('truetype');
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-tupian:before {
	  content: "\e67f";
	}
	
	.icon-chujingchaoshi:before {
	  content: "\e886";
	}
	
	.icon-zhinengkefuzhongxin:before {
	  content: "\e60c";
	}
	
	.icon-qudaoshujufenxi:before {
	  content: "\e60d";
	}
	
</style>
