<template>
	<view class="find">
		<view class="find_header">
			<view class="text">
				<h4>发现</h4>
			</view>
			<view class="cont">
				<scroll-view scroll-x class="text-white nav bg-blue" scroll-with-animation :scroll-left="scrollLeft" style="background: transparent !important;">
					<view class="cu-item"  @tap="tabSelect" :class="index==TabCur?'unicorn-font-size cur':''"  v-for="(item,index) in tabList" :key="index" :data-id="index">
						{{item.name}}
					</view>
				</scroll-view>
				<view class="itemScroll">
					<scroll-view scroll-x class="text-white nav bg-blue" scroll-with-animation :scroll-left="scrollLeft" style="background: transparent !important;">
						<view class="cu-item" v-for="(item,index) in childList" :key="index" :data-id="index">
							{{item.name}}
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
		<view class="find_body">
			<view class="item_cont" v-for="(item,index) in contData" @click="navTo('/pages/find/details')">
				<view class="item_img">
					<view style="background-color: #CCCCCC;">
						<image :src="item.img" mode=""></image>
					</view>
				</view>
				<view class="item_text">
					{{item.cont}}
				</view>
				<view class="item_address">
					<h4 style="color: #F0AD4E;">{{item.adress}}</h4>
					<h4 style="color: #0081FF;">{{item.adress_code}}</h4>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				extName:null,
				bgIndex:'0',
				tabList:[{name:'精选晒单'},{name:'教育圈'},{name:'医疗圈'},{name:'家装圈'},{name:'建材圈'},{name:'教育圈'},{name:'装修圈'}],
				childList:[{name:'全部'},{name:'精品'},{name:'装修'},{name:'热门'},{name:'点赞'},{name:'百货'},{name:'建材'}],
				contData:[{
					img:'../../static/timg.jpg',
					cont:'项目  编译成功。前端运行日志，请另行在小程序开发工具的控制台查看项目  编译成功。',
					id:1,
					adress:'那小子真帅',
					adress_code:'北京'
				},{
					img:'../../static/timg.jpg',
					cont:'项目  编译成功。前端运行日志，请另行在小程序开发工具的控制台查看项目  编译成功。',
					id:2,
					adress:'那小子真帅',
					adress_code:'上海'
				},{
					img:'../../static/timg.jpg',
					cont:'项目  编译成功。前端运行日志，请另行在小程序开发工具的控制台查看项目  编译成功。',
					id:3,
					adress:'那小子真帅',
					adress_code:'烟台'
				},{
					img:'../../static/timg.jpg',
					cont:'项目  编译成功。前端运行日志，请另行在小程序开发工具的控制台查看项目  编译成功',
					id:4,
					adress:'那小子真帅',
					adress_code:'南京'
				},{
					img:'../../static/timg.jpg',
					cont:'项目  编译成功。前端运行日志，请另行在小程序开发工具的控制台查看项目  ',
					id:5,adress:'那小子真帅',
					adress_code:'东京'
				}],
				TabCur:1
			}
		},
		methods:{
			changeBg(e){
				console.log(e)
				this.bgIndex=e
				
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.$emit('tabCur',this.TabCur)
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			navTo(url){
				debugger
				uni.navigateTo({  
					url:url
				})  
			},
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
	.find .find_header{
		width: 100%;
		/* height: 110px; */
		box-shadow: 6upx 6upx 8upx rgba(204, 69, 59, 0) !important;
		background: url('http://39.98.154.16:8080/static/images/bg/navbg.png') 100% 100%;
	}
	.find .find_header>view.text{
		height: 60px;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}
	.find .find_header>view h4{
		text-align: center;
		color: #FFFFFF;
		font-size: 16px;
		font-weight: 600;
	}
	.find .cont{
		padding: 5px 10px 0px;
	}
	.find .cont scroll-view view{
		font-size: 13px;
		/* font-weight: 600; */
	}
	.find .itemScroll{
		margin-top: 10px;
		background-color: #FFFFFF;
		height: 40px;
		border-radius: 5px 5px 0 0 ;	
	}
	.find .itemScroll scroll-view view{
		color: #000000;
	}
	.find .find_body{
		width: 100%;
		height: 1000px;
		background: #fff;
		padding: 5px 10px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.find .item_cont{
		width: 48%;
		height: 200px;
	}
	.find .item_img{
		width: 100%;
		height: 150px;
	}
	.find .item_img image{
		width: 100%;
		height: 100%;
	}
	.find .item_img>view:first-child{
		width: 100%;
		height: 150px;
	}
	.find .item_text{
		/* height: 50px; */
		width: 100%;
		text-align: justify;
		text-justify: newspaper;
		word-break: break-all;
		font-family: cursive;
	}
	.find .item_address{
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
	}
</style>
