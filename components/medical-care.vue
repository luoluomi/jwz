<template>
	<view>
		<view class="unicorn-header2" style="margin-top: -1px;position: relative;top: -36px;padding: 0 10px;">
			<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="false" :autoplay="false" interval="5000"
			 duration="500" style="min-height: 200rpx;height: 420rpx;background-color: #FFFFFF;border-radius: 10px;;">
				<swiper-item v-for="(item,index) in menuList" :key="index" class="unicorn-border-radius-swiper" style="background: transparent !important;">
					<view class="cu-list grid col-5 no-border" style="background: transparent !important;">
						<view class="cu-item" v-for="(itemsub,indexsub) in item" :key="indexsub" style="display: flex;align-items: center;justify-content: center;background: transparent !important;">
							<image mode="aspectFill" :src="itemsub.url" style="width: 100rpx;height: 100rpx;margin-bottom: 10rpx;border-radius: 50%;background: transparent !important;"></image>
							<text style="color: #000;">{{itemsub.name}}</text>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<image mode="widthFix" src="https://file.quanzz1314.top/jd-shop/title3.jpg" style="background: transparent !important;width: 100%;margin-top: -32px;"></image>
		
		<view class="unicorn-body">
		
			<!-- <view class="cu-bar bg-white unicorn-br-1 unicorn-br-2">
				<view class="action" style="font-size: 37rpx;font-weight: 700;color: #000000;">我的频道</view>
				<view class="action">发现更多频道<text class="cuIcon-roundrightfill lg text-red" style="color: #F34C77;"></text></view>
			</view>
			<scroll-view class="floor-list  unicorn-br-3 unicorn-br-4" scroll-x style="background-color: #FFFFFF;margin-bottom: 24rpx;">
				<view class="scoll-wrapper">
					<view v-for="(item, index) in pindaoList" :key="index" class="floor-item" @click="navToDetailPage(item)">
						<image :src="item.url" mode="aspectFill"></image>
						<text class="title clamp" style="text-align: center;">{{item.name}}</text>
					</view>
				</view>
			</scroll-view> -->
		
			<view class="cu-bar bg-white unicorn-br-1 unicorn-br-2">
				<view class="action" style="font-size: 37rpx;font-weight: 700;color: #000000;">好物推荐</view>
			</view>
			<view class="guess-section unicorn-br-3 unicorn-br-4">
				<view v-for="(item, index) in goodsList" :key="index" class="guess-item" @click="navToDetailPage(item)">
					<view class="image-wrapper">
						<image :src="item.image" mode="aspectFill"></image>
					</view>
					<view class="bg-white" style="padding: 3px 0;padding-left: 5px;">
						<view class='cu-tag round bg-red sm' v-if="item.tag" style="background-color: #F65E2C;">{{item.tag}}</view>
						<text class="title" style="line-height: 50rpx;">{{item.title}}</text>
					</view>
					<text class="text-price price" style="color: #e54d42;padding-left: 5px;">{{item.price}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
