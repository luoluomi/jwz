<template>
	<view>
		<!-- bgColor样式统一定义在/colorui/components/unicorn-custom-style.css 中 -->
		<cu-custom :isBack="true" :bgColor="'cu-custom-class-unicorn-page-shop-jd'" :bgURL="bgIndex">
			<block slot="content" class="v5-nav-title">最in家居流行色彩</block>
		</cu-custom>
		<unicorn-page-shop-jd @tabCur="changeBg"/>
		<!-- <popup-layer ref="popupRef" :direction="'top'" :autoClose="false" v-model="boolShow">
		  <view class="zidingyiBox">
			  123
		  </view>
		</popup-layer> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				extName:null,
				bgIndex:'0'
			}
		},
		methods:{
			changeBg(e){
				console.log(e)
				this.bgIndex=e
				
			}
		},
		/**
		 * option参数是通过/pages/unicorn-base/index.vue页面跳转传递
		 * 
		 * @param {Object} option
		 */
		onLoad:function(option) {
			this.extName = option.extName
		}
	}
</script>

<style>
</style>