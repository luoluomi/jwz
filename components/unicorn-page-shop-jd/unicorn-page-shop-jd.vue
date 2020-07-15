<template>
	<view>
		<view class="cu-bar bg-white search fixed indextitleBg2" :style="[{top:CustomBar + 'px',background: 'url(http://39.98.154.16:8080/static/images/bg/navbg'+TabCur+'.png) 100% 100% !important'}]">
			
			<view class="search-form round" style="width: 80%;margin-right: 12rpx;">
				<text class="cuIcon-search" style="font-size: 38rpx;"></text>
				<input type="text" placeholder="输入搜索的关键词" confirm-type="search"></input>
				<text class="cuIcon-camera" style="padding-right: 2px;font-size: 38rpx;"></text>
			</view>
			<view class="cu-list grid col-2" style="width: 20%;background: transparent !important;">
				<view class="cu-item">
					<text class="lg cuIcon-scan" style="color: #ffffff;margin-top: 28rpx;font-size: 40rpx;"></text>
					<text style="color: #ffffff;margin-top: 0rpx;font-size: 18rpx;">扫一扫</text>
				</view>
				<view class="cu-item">
					<text class="lg cuIcon-message" style="color: #ffffff;margin-top: 28rpx;font-size: 40rpx;"></text>
					<text style="color: #ffffff;margin-top: 0rpx;font-size: 18rpx;">消息</text>
				</view>

			</view>
		</view>
		<view style="margin-top: 80rpx;">
			<view class="unicorn-header1" :style="[{'background-image': 'url(http://39.98.154.16:8080/static/images/bg/navbg'+TabCur+'.png);'}]">
				<scroll-view scroll-x class="text-white nav bg-blue" scroll-with-animation :scroll-left="scrollLeft" style="background: transparent !important;">
					<view class="cu-item" :class="index==TabCur?'unicorn-font-size cur':''" v-for="(item,index) in tabList" :key="index"
					 @tap="tabSelect" :data-id="index">
						{{item.name}}
					</view>
				</scroll-view>
			</view>
			<!-- 首页 banner-->
			<view style="margin-top: -1px;" v-if="TabCur==0">
				<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true"  :autoplay="true"
				 interval="5000" duration="500" style="min-height: 100px;">
					<swiper-item v-for="(item,index) in swiperList" :key="index" class="unicorn-border-radius-swiper">
						<image :src="item.url" mode="widthFix" v-if="item.type=='image'"></image>
						<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
					</swiper-item>
				</swiper>
			</view>
			<!-- 医疗 banner-->
			<view style="margin-top: -1px;" v-if="TabCur==1">
				<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true"  :autoplay="true"
				 interval="5000" duration="500" style="min-height: 100px;">
					<swiper-item v-for="(item,index) in swiperListyl" :key="index" class="unicorn-border-radius-swiper">
						<image :src="item.url" mode="widthFix" v-if="item.type=='image'"></image>
						<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
					</swiper-item>
				</swiper>
			</view>
			
			<!-- 建材 banner-->
			<view style="margin-top: -1px;" v-if="TabCur==2">
				<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true"  :autoplay="true"
				 interval="5000" duration="500" style="min-height: 100px;">
					<swiper-item v-for="(item,index) in swiperListyl" :key="index" class="unicorn-border-radius-swiper">
						<image :src="item.url" mode="widthFix" v-if="item.type=='image'"></image>
						<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
					</swiper-item>
				</swiper>
			</view>
			
			<!-- 装修 banner-->
			<view style="margin-top: -1px;" v-if="TabCur==3" >
				<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true" :autoplay="true"
				 interval="5000" duration="500" style="min-height: 100px;">
					<swiper-item v-for="(item,index) in swiperListZx" :key="index" class="unicorn-border-radius-swiper">
						<image :src="item.url" mode="widthFix" v-if="item.type=='image'"></image>
						<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
					</swiper-item>
				</swiper>
			</view>
			<!-- 食品 banner-->
			<view style="margin-top: -1px;" v-if="TabCur==4" >
				<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true" :autoplay="true"
				 interval="5000" duration="500" style="min-height: 100px;">
					<swiper-item v-for="(item,index) in swiperListSp" :key="index" class="unicorn-border-radius-swiper">
						<image :src="item.url" mode="widthFix" v-if="item.type=='image'"></image>
						<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
					</swiper-item>
				</swiper>
			</view>
			<!-- 百货 banner-->
			<view style="margin-top: -1px;" v-if="TabCur==5" >
				<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true" :autoplay="true"
				 interval="5000" duration="500" style="min-height: 100px;">
					<swiper-item v-for="(item,index) in swiperListBh" :key="index" class="unicorn-border-radius-swiper">
						<image :src="item.url" mode="widthFix" v-if="item.type=='image'"></image>
						<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
					</swiper-item>
				</swiper>
			</view>
			<!-- 首页 -->
			<view v-if="TabCur==0">
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
			
			<!-- 建材 -->
			<view v-if="TabCur==2">
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

			<!-- 医疗 -->
			<view v-if="TabCur==1">
				<view class="unicorn-header2" style="margin-top: -1px;position: relative;top: -36px;padding: 0 10px;">
					<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="false" :autoplay="false" interval="5000"
					 duration="500" style="min-height: 200rpx;height: 420rpx;background-color: #FFFFFF;border-radius: 10px;;">
						<swiper-item v-for="(item,index) in menuListyl" :key="index" class="unicorn-border-radius-swiper" style="background: transparent !important;">
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
						<view class="action" style="font-size: 37rpx;font-weight: 700;color: #000000;">商家推荐</view>
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
			<!-- //食品-->
			<view v-if="TabCur==4">
				<view class="unicorn-header2" style="margin-top: -1px;position: relative;top: -36px;padding: 0 10px;">
					<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="false" :autoplay="false" interval="5000"
					 duration="500" style="min-height: 200rpx;height: 420rpx;background-color: #FFFFFF;border-radius: 10px;;">
						<swiper-item v-for="(item,index) in menuListsp" :key="index" class="unicorn-border-radius-swiper" style="background: transparent !important;">
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
						<view class="action" style="font-size: 37rpx;font-weight: 700;color: #000000;">商家推荐</view>
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
			
			<!-- //装修 -->
			<view v-if="TabCur==3">
				<view class="unicorn-header2" style="margin-top: -1px;position: relative;top: -36px;padding: 0 10px;">
					<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="false" :autoplay="false" interval="5000"
					 duration="500" style="min-height: 200rpx;height: 420rpx;background-color: #FFFFFF;border-radius: 10px;;">
						<swiper-item v-for="(item,index) in menuListzx" :key="index" class="unicorn-border-radius-swiper" style="background: transparent !important;">
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
						<view class="action" style="font-size: 37rpx;font-weight: 700;color: #000000;">商家推荐</view>
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
			
			<!-- //百货-->
			<view v-if="TabCur==5">
				<view class="unicorn-header2" style="margin-top: -1px;position: relative;top: -36px;padding: 0 10px;">
					<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="false" :autoplay="false" interval="5000"
					 duration="500" style="min-height: 200rpx;height: 420rpx;background-color: #FFFFFF;border-radius: 10px;;">
						<swiper-item v-for="(item,index) in menuListbh" :key="index" class="unicorn-border-radius-swiper" style="background: transparent !important;">
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
						<view class="action" style="font-size: 37rpx;font-weight: 700;color: #000000;">商家推荐</view>
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
			
			
		</view>
	</view>
</template>

<script>
	const unicornJson = require('./unicorn-page-shop-jd.js');
	export default {
		data() {
			return {
				swiperList: unicornJson.swiperList,
				swiperListyl: unicornJson.swiperListYl,
				swiperListZx: unicornJson.swiperListZx,
				swiperListSp: unicornJson.swiperListSp,
				swiperListBh: unicornJson.swiperListBh,
				tabList: unicornJson.tabList,
				menuList: unicornJson.menuList,
				menuListyl: unicornJson.menuListYl,
				menuListzx: unicornJson.menuListZx,
				menuListsp: unicornJson.menuListSp,
				menuListbh: unicornJson.menuListBh,
				pindaoList: unicornJson.pindaoList,
				goodsList: unicornJson.goodsList,
				ppjxList: unicornJson.ppjxList,
				sjpjList: unicornJson.sjpjList,
				sjb1List: unicornJson.sjb1List,
				sjb2List: unicornJson.sjb2List,
				xsqgList: unicornJson.xsqgList,
				xsqgList: unicornJson.xsqgList,
				TabCur: 0,
				scrollLeft: 0,
				CustomBar: this.CustomBar
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.$emit('tabCur',this.TabCur)
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			navToDetailPage(item){
				let id = item.title;
				uni.navigateTo({
					url: `/pages/product/product?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.indextitleBg2{
		height: 100rpx !important;
		
		width: 100% !important;
		margin-top: -8px !important;
	}
	.unicorn-header1 {
		
		background-repeat: no-repeat;
		background-size: 100% 100%;
		-moz-background-size: 100% 100%;
		padding: 0 10px;
	}

	.unicorn-header2 {
		// background-image: url('https://192.168.1.102:8914/navbg.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		-moz-background-size: 100% 100%;
	}

	.unicorn-font-size {
		font-size: 35rpx;
		font-weight: 700;
	}

	.unicorn-border-radius-swiper {
		// border-radius: 10px;
	}

	.unicorn-body {
		padding: 0rpx 15rpx;
	}

	.unicorn-image {
		width: 60rpx;
		height: 60rpx;
		margin-bottom: 10rpx;
	}

	.unicorn-br-1 {
		border-top-left-radius: 10px;
	}

	.unicorn-br-2 {
		border-top-right-radius: 10px;
	}

	.unicorn-br-3 {
		border-bottom-left-radius: 10px;
	}

	.unicorn-br-4 {
		border-bottom-right-radius: 10px;
	}

	.nav .cu-item.cur {
		border-bottom: 5rpx solid;
	}

	.floor-list {
		white-space: nowrap;
	}

	.scoll-wrapper {
		display: flex;
		align-items: flex-start;
	}

	.floor-item {
		width: 150upx;
		margin-right: 20upx;
		font-size: 26rpx;
		color: #303133;
		line-height: 1.8;

		image {
			width: 150upx;
			height: 150upx;
			border-radius: 6upx;
		}
	}

	.guess-section {
		display: flex;
		flex-wrap: wrap;
		background: #fff;

		.guess-item {
			display: flex;
			flex-direction: column;
			width: 48%;
			padding-bottom: 40upx;

			&:nth-child(2n+1) {
				margin-right: 4%;
			}
		}
		
		.image-wrapper {
			width: 100%;
			height: 330upx;
			border-radius: 3px;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
				opacity: 1;
			}
		}

		.title {
			font-size: 32rpx;
			color: #303133;
			line-height: 80upx;
		}

		.price {
			font-size: 32rpx;
			color: #fa436a;
			line-height: 1;
		}
	}

	.pro-box {
		display: flex;
		align-items: center;
		margin-top: 10upx;
		font-size: 24rpx;
		padding-right: 10upx;
	}

	.progress-box {
		flex: 1;
		border-radius: 10px;
		overflow: hidden;
		margin-right: 8upx;
	}

	.clamp {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: block;
	}
	
</style>
