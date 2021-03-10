<template>
	<div class="tab_class1_sy">
        <div class="tab_ul">
        <div class="tab_li" :class="index==sel?'active':''" v-for="(item,index) in navList" :key="index" @mouseover="changeSel(index)">{{item.title}}</div>
        </div>
        <div class="tab_body">
        <div class="hang" v-for="(item,index) in dataList" :key="index" >
            <div class="tab_left">
            <div class="iconfont" :class="icon?icon:''" :style="{'color':iconColor}"></div>
            <div class="shengluehao">{{item.title}}</div>
            </div>
            <div class="tab_right">{{item.time}}</div>
        </div>
        </div>
    </div>
</template>

<script>
	export default {
        props:{
            hander: {
                // 对象或数组默认值必须从一个工厂函数获取
                default: ""
            }, 
            icon: {
                // 对象或数组默认值必须从一个工厂函数获取
                default: ""
            }, 
            iconColor: {
                // 对象或数组默认值必须从一个工厂函数获取
                default: ""
            },
            navList: {
                // 对象或数组默认值必须从一个工厂函数获取
                default: []
            },
            dataList: {
                // 对象或数组默认值必须从一个工厂函数获取
                default: []
            },
            
            sel:{
                // 对象或数组默认值必须从一个工厂函数获取
                default: 0
            },
        },
		data() {
			return {
				
			};
		},
		methods: {
			changeSel(index){
                this.$emit(this.hander,index)
            }
		},
	};
</script>

<style scoped lang="stylus">
.tab_class1_sy{
  width 100%;
  .tab_ul{
    display flex;
    background-color #edf1fa
    height:35px;
    border-bottom:2px solid #1178c1;
    .tab_li{
      width 78px;
      height 35px;
      line-height 35px
      font-size 15px;
      text-align center
      cursor pointer
      &.active{
        background-color #1178c1;
        color #fff
      }
    }
  }
  .tab_body{
    .hang{
      display flex;
      .tab_left{
        flex:1;
        display inline-flex;
        align-items center 
      }
      .tab_right{
        width 20%;
      }
    }  
  }
}	
</style>
