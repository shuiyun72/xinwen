<template>
	<div class="header">
		<div class="part1 w1200">
			<img src="@assets/img/1_06.jpg" alt="" class="img1"/>
			<img src="@assets/img/xiaotu.jpg" alt="" class="img2" />
		</div>
		<div class="nav">
			<div class="nav_body">
				
				<el-menu :default-active="activeIndex" class="el-menu-demo header_nav" mode="horizontal" @select="handleSelect">
					<el-menu-item index="1">首页</el-menu-item>
					<el-submenu index="2">
						<template slot="title">关于协会</template>
						<el-menu-item index="2-1">协会简介</el-menu-item>
						<el-menu-item index="2-2">协会章程</el-menu-item>
						<el-menu-item index="2-3">部门职责</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title">协会工作</template>
						<el-menu-item index="3-1">协会文件</el-menu-item>
						<el-menu-item index="3-2">转发文件</el-menu-item>
						<el-menu-item index="3-3">协会动态</el-menu-item>
						<el-menu-item index="3-4">行业培训</el-menu-item>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title">行业资讯</template>
						<el-menu-item index="4-1">建设要闻</el-menu-item>
						<el-menu-item index="4-2">公示公告</el-menu-item>
						<el-menu-item index="4-3">行业标准</el-menu-item>
						<el-menu-item index="4-4">行业研究</el-menu-item>
						<el-menu-item index="4-5">行业动态</el-menu-item>
					</el-submenu>
					<el-submenu index="5">
						<template slot="title">党建工作</template>
						<el-menu-item index="5-1">党建发布</el-menu-item>
						<el-menu-item index="5-2">工作动态</el-menu-item>
						<el-menu-item index="5-3">学习文件</el-menu-item>
					</el-submenu>
					<el-submenu index="6">
						<template slot="title">文件通知</template>
						<el-menu-item index="6-1">文件通知</el-menu-item>
						<el-menu-item index="6-2">会议通知</el-menu-item>
						<el-menu-item index="6-3">会议计划</el-menu-item>
					</el-submenu>
					<el-submenu index="7">
						<template slot="title">教育培训</template>
						<el-menu-item index="7-1">政策咨询</el-menu-item>
						<el-menu-item index="7-2">培训报名</el-menu-item>
						<el-menu-item index="7-3">培训动态</el-menu-item>
					</el-submenu>
					<el-submenu index="8">
						<template slot="title">行业信息话</template>
						<el-menu-item index="2-1">解决方案</el-menu-item>
						<el-menu-item index="2-2">相关软件</el-menu-item>
						<el-menu-item index="2-3">新技术应用</el-menu-item>
						<el-menu-item index="2-3">信息安全</el-menu-item>
					</el-submenu>
					<el-menu-item index="9">建设黄页</el-menu-item>
					<el-menu-item index="10">求职招聘</el-menu-item>
					<el-menu-item index="11">行业应用</el-menu-item>
					<el-menu-item index="12">会员之家</el-menu-item>
					<el-menu-item index="13">联络我们</el-menu-item>
				</el-menu>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '1',
				menu:[
					{num:"1",url:"/"},
					{num:"2-1",url:"/"},
					{num:"2-2",url:"/"},
					{num:"2-3",url:"/"},
					{num:"1",url:"/"},
					{num:"1",url:"/"},
					{num:"1",url:"/"},
					{num:"1",url:"/"},
					{num:"1",url:"/"},
					{num:"1",url:"/"},
					{num:"1",url:"/"},
					{num:"1",url:"/"},
					{num:"1",url:"/"},
					{num:"1",url:"/"},
					{num:"1",url:"/"},
					{num:"1",url:"/"},
					{num:"1",url:"/"},
					{num:"1",url:"/"},
					{num:"1",url:"/"},
					{num:"1",url:"/"},
					{num:"1",url:"/"},
					{num:"1",url:"/"},
					{num:"1",url:"/"},
					{num:"1",url:"/"},
					{num:"1",url:"/"},
					{num:"1",url:"/"},
				]
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
				this.activeIndex = key;
			},
			ccc(){
				console.log("ccc")
			}
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
	.el-menu--popup{
		padding 2px 0;
	}
	.el-menu--popup-bottom-start{
		margin-top 0;
	}
	.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
		background-color :#007CE0;
		color #fff;
	}
	.el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title{
		background-color :#007CE0;
		color #fff;
		margin-bottom :2px;
	}
	.header{
		.el-menu{
			background-color :#2172ce;
			color :#fff;
		}
		
		.el-menu.el-menu--horizontal{
			border-bottom:none;
		}
		.el-menu--horizontal>.el-menu-item{
			height 44px;
			line-height 44px;
			color #fff;
			border-bottom :none;
			&.is-active{
				border-bottom:none;
				background-color :#007CE0;
			}
		}
		
		.el-menu--horizontal>.el-submenu .el-submenu__title{
			height 44px;
			line-height 44px;
			color #fff;
			&:hover{
				color #fff;
				background-color :#007CE0;
			}
		}
		.nav_body{
			.el-submenu__title i{
				display: none;
			}
		}
	}
	
</style>
<style scoped lang="stylus">
	.header {
		.part1 {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.img1 {
				width: 351px;
				height: 65px;
			}

			.img2 {
				width: 541px;
				height: 114px;
			}
		}

		.nav {
			background-color :#2172ce;
			width: 100%;

			.nav_body {
				margin: 0 auto;
				width 1300px;
				padding: 0 100px;
			}
		}
	}
</style>
