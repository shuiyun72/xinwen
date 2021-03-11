<template>
  <div class="work">
    <Header></Header>
    <div class="work_body">
      <div class="turn_to_list_p_sy">
        <div class="iconfont icon-youzhijiantou1"></div>
        <div class="">当前的位置 :</div>
        <router-link to="/" class="col_nav">首页</router-link>
        <div class="icon">></div>
        <router-link to="/" class="col_nav">新闻资讯</router-link>
        <div class="icon">></div>
        <div class="col_nav">{{ positionText }}</div>
      </div>
      <div class="work_content">
        <div class="work_left"></div>
        <div class="work_right">
          <div class="side_right_nav_sy">
            <div class="side_top">
              <div class="iconfont icon-triangle-right"></div>
              <div>协会工作</div>
            </div>
            <div class="side_li" v-for="(item, index) in sideNav" :key="index">
              <div class="l_title">{{ item.title }}</div>
              <div class="iconfont icon-jiantou-shuangyou"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@components/header";
export default {
  components: {
    Header,
  },
  computed: {
    positionText() {
      return this.sideNav[this.sideNavSel].title;
    },
  },
  data() {
    return {
      sideNav: [
        { title: "协会文件", url: "", img: "icon-jianjie" },
        { title: "转发文件", url: "", img: "icon-wendang1" },
        { title: "协会动态", url: "", img: "icon-dongtai-miaobian" },
        { title: "行业培训", url: "", img: "icon-dianhua" },
      ],
      sideNavSel: 0,
    };
  },
  beforeMount() {
    this.sideNavSel = this.$route.query.sel;
  },
  methods: {},
};
</script>

<style scoped lang="stylus">
.work {
  .work_body {
    width: 1000px;
    margin: 0 auto;
  }
}

.side_right_nav_sy {
  width: 256px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  color: #333;

  .side_top {
    display: flex;
    align-items: center;
    font-size: 18px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
	background-color #f0f0f0 ;
    .icon-triangle-right {
      color: #2172ce;
      font-size: 22px;
    }
  }

  .side_li {
    padding: 10px 10px 10px 26px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
	&+.side_li{
		border-top 1px solid #f0f0f0 ;
	}
    .icon-jiantou-shuangyou {
      color: #999;
      font-size: 16px;
    }
  }
}
</style>
