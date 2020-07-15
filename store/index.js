import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userInfo: {},
	},
	mutations: {
		login(state) {
			let that = this
			state.hasLogin = true;
			uni.getSetting({
			                  success(res) {
								  console.log(res)
			                      if (res.authSetting['scope.userInfo']) {
			                          // 用户信息已授权，获取用户信息
			                          uni.getUserInfo({
			                              success(res) {
												console.log(res)
												
												state.userInfo = res.userInfo;
												uni.setStorage({//缓存用户登陆状态
												    key: 'userInfo',  
												    data: res.userInfo  
												}) 
			                              },
			                              fail() {
			                                  console.log("获取用户信息失败")
			                              }
			                          })
			                      } else if (!res.authSetting['scope.userInfo']) {
			                           uni.authorize({
			                                      scope: 'scope.userInfo',
			                                      success() {
													 console.log(1123)
			                                        that.login(state);
			                                      }
			                                    })
			                      }
			                  },
			                  fail() {
			                      console.log("获取已授权选项失败")
			                  }
			              })
		},
		logout(state) {
			state.hasLogin = false;
			state.userInfo = {};
			uni.removeStorage({  
                key: 'userInfo'  
            })
		}
	},
	actions: {
	
	}
})

export default store
