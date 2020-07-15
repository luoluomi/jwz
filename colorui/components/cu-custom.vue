<template>
	<view>
		<view class="cu-custom" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar fixed" :style="style" :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]">
				<view class="action" @tap="BackPage" v-if="isBack">
					<text class="v5-logo"></text>
					<text class="v5-logo-name"></text>
					<!-- <image src="../static/images/bg/logo.png" mode=""></image> -->
					
					<!-- <slot name="backText"></slot> -->
				</view>
				<!-- <view class="content" :style="[{top:StatusBar + 'px'}]">
					<slot name="content"></slot>
				</view> -->
				<!-- <slot name="right" class="v5-nav-title"></slot> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar
			};
		},
		name: 'cu-custom',
		computed: {
			style() {
				var StatusBar= this.StatusBar;
				var CustomBar= this.CustomBar;
				var bgImage = this.bgImage;
				var bgURL=this.bgURL
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;background: url(http://39.98.154.16:8080/static/images/bg/navbg${bgURL}.png) 100% 100%;`;
				if (this.bgImage) {
					style = `${style}background-image:url(${bgImage});`;
				}
				return style
			}
		},
		props: {
			bgColor: {
				type: String,
				default: ''
			},
			bgURL: {
				type: String,
				default: ''
			},
			isBack: {
				type: [Boolean, String],
				default: false
			},
			bgImage: {
				type: String,
				default: ''
			},
		},
		methods: {
			BackPage() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>
@import url("./unicorn-custom-style.css");
</style>
