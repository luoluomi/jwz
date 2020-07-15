<template>
	<view class="content find_details">
		<view class="title">
			<view class="page-section-spacing">
				<swiper class="swiper" 
					indicator-dots="true" 
					autoplay="true" 
					interval="5000" 
					duration="1500"	>
					<swiper-item v-for="(item , index) in datas.img" :key="index">
						<image :src="item" mode="aspectFill"></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="find_body">
			<view class="test">
				<view class="account">
					177******8820
				</view>
				<view class="adress">
					北京
				</view>
			</view>
			<view class="find_cont">
				编译成功。前端运行日志，请另行在小程序开发工具的控制台查看;
				编译成功。前端运行日志，请另行在小程序开发工具的控制台查看
				编译成功。前端运行日志，请另行在小程序开发工具的控制台查看
				编译成功。前端运行日志，请另行在小程序开发工具的控制台查看
				编译成功。前端运行日志，请另行在小程序开发工具的控制台查看
				编译成功。前端运行日志，请另行在小程序开发工具的控制台查看
				编译成功。前端运行日志，请另行在小程序开发工具的控制台查看
				编译成功。前端运行日志，请另行在小程序开发工具的控制台查看
				编译成功。前端运行日志，请另行在小程序开发工具的控制台查看
				编译成功。前端运行日志，请另行在小程序开发工具的控制台查看
				编译成功。前端运行日志，请另行在小程序开发工具的控制台查看
				编译成功。前端运行日志，请另行在小程序开发工具的控制台查看
				
			</view>
		</view>
	</view>
</template> 

<script>
	export default {
		components: {
		},
		data() {
			return {
				datas:{
					img:['../../static/timg.jpg','../../static/timg.jpg'],
					cont:'1111111111111111111111111111111',
					user:'178*****222',
					adress:'北京'
				}
			}
		},
		
		onLoad(options){
			
		},
		methods: {
			
		},
	}
</script>

<style lang="scss">
	.find_details{
		.title{
			width: 100%;
			// height: 220px;
		}
		.swiper{
			image{
				width: 100%;
			}
		}
		.find_body{
			height: 400px;
			padding: 0 10px;
			background: #FFFFFF;
			.test{
				width: 100%;
				height: 30px;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				view{
					color: #666;
					margin-right: 15px;
					font-size: 14px;
					// font-weight: 300;
				}
			}
			.font-cont{
				color: #606266;
			}
		}
	}
</style>
