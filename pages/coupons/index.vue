<template>
	<view class="coupons">
		<view class="coupons_headers">
			<scroll-view scroll-x class="text-white nav bg-blue" scroll-with-animation :scroll-left="scrollLeft" style="background: transparent !important;">
				<view class="cu-item"  @tap="tabSelect" :class="index==TabCur?'unicorn-font-size cur':''"  v-for="(item,index) in tabList" :key="index" :data-id="index">
					{{item.name}}
				</view>
			</scroll-view>
		</view>
		<view class="coupon_box">
			<view class="other_type">
				<view class="text"><span>店铺优惠券</span></view>
			</view>
			<coupon v-for="(item, index) in coupon[0].list" :key="index" v-bind:item="item" theme="#ff0000"></coupon>
			<view class="other_type">
				<view class="text"><span>通用优惠券</span></view>
			</view>
			<coupon v-for="(item, index) in coupon[0].list" :key="index" v-bind:item="item" types="carts" theme="#ff6c00" color="#ffffff" solid="#ff6c00"></coupon>
		</view>
	</view>
</template>

<script>
	import coupon from '@/components/coolc-coupon/coolc-coupon';
	export default {
		components: {
			coupon
		},
		data() {
			return {
				tabList:[{name: "全部"}, {name: "医疗"}, {name: "建材"}, {name: "装修"}, {name: "食品"}, {name: "百货"}],
				TabCur:0,
				coupon:[{
					list: [{
						url: "/pages/brand/index/id/1",
						money: "150",
						title: "满20000减150元",
						ticket: "YMC_5c929fbf47235",
						seller_name: "A建材商城优惠券",
						end_time: "2020-04-20 01:51:20",
						state: "1"
					},
					{
						url: "/pages/brand/index/id/1",
						money: "50",
						title: "满10000减50元",
						ticket: "YMC_5c929fbf47235",
						seller_name: "美凯龙优惠券",
						end_time: "2020-04-20 01:51:20",
						state: "1"
					}]
				}]
			};
		},
		onLoad(){
		},
		computed:{
		},
		methods: {
			tabSelect(e) {
				debugger
				this.TabCur = e.currentTarget.dataset.id;
				this.$emit('tabCur',this.TabCur)
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
		}
	}
</script>

<style lang="scss">
	.coupons_headers{
		// height: 20px;
		background-color: #ff5717;
	}
	.coupon_box {
		width:100%; height:auto; display:table; padding:6upx 26upx 26upx 26upx;background-color: #FFFFFF;
	}
	
	.other_type {
		width:100%; height:90upx; padding-top:50upx;
		
		.text { width:100%; border-top:1px solid #eeeeee; display:block; text-align:center; position:relative; }
		.text span { width:180upx; height:40upx; line-height:40upx; color:#999999; display:block; background:#ffffff; position:absolute; left:50%; top:50%; margin-left:-90upx; margin-top:-20upx; font-size:$font-base; }
	}
</style>
