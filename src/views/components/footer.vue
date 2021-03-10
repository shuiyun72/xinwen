<template>
	<div class="footer">
        <div class="foot_body">
          <div class="img_left">
            <img :src="require('@assets/img/jt.gif')" alt="">
          </div>
          <div class="foot_right">
            <div class="ft1">
              <div class="li_l" v-for="(item,index) in footList" :key="index">{{item.title}}</div>
            </div>
			<div class="foot_p">主办：河南省建设信息管理协会  网员服务热线：0371-68085711    传真：0371-68085711</div>
			<div class="foot_p">CopyRight © 2014-2016 www.hnjs.net.cn All Rights Reserved.  豫ICP备11017959号-1</div>
			<div class="foot_p"><img :src="require('@assets/img/beian.png')" alt="">	豫公网安备 41010702002276号 建议使用IE9或以上浏览器浏览河南建设信息网</div>
          </div>
        </div>
      </div>
</template>

<script>
	export default {
		data() {
			return {
				footList:[
					{title:"关于我们",url:""},
					{title:"帮助中心",url:""},
					{title:"合作加盟",url:""},
					{title:"人才招聘",url:""},
					{title:"免费声明",url:""},
					{title:"联系我们",url:""}
				],
			};
		},
		methods: {
			
		},
	};
</script>

<style scoped lang="stylus">
.footer{
	margin-top :20px;
	height 160px;
	border-top :2px solid #1d73c8
	width 100%;
	background-color #f0f0f0;
	padding-bottom 30px;
	.foot_body{
		width 1200px;
		height 160px;
		margin :0 auto;
		display flex;
		align-items center;
		justify-content center;
		.foot_right{
			padding-left :30px;
			.ft1{
				display flex;
				justify-content center;
				.li_l{
					color #1d73c8;
					width 80px;
					height 18px;
					line-height 18px;
					text-align center;
					&+.li_l{
						border-left 1px solid #1d73c8
					}
				}
			}	
			.foot_p{
				padding-top :10px;
				text-align center
			}
		}
	}
}
</style>
