<template>
  <div class="publit_right">
    <div class="side_right_nav_sy">
      <div class="side_top">
        <div class="iconfont icon-youzhijiantou1"></div>
        <div>{{titleCc}}</div>
      </div>
      <div
        class="side_li"
        :class="index == sideNavSelc ? 'active' : ''"
        v-for="(item, index) in sideNavc"
        :key="index"
        @click="sideNavSelC(index)"
      >
        <div class="l_title">{{ item.title }}</div>
        <div class="iconfont icon-jiantou-shuangyou"></div>
      </div>
    </div>
    <div class="hot_msg_sy">
      <div class="side_top">
        <div class="iconfont icon-youzhijiantou1"></div>
        <div>热门信息</div>
      </div>
      <div class="hot_body">
        <div
          class="hang_hot"
          v-for="(item, index) in part1_2listC"
          :key="index"
        >
          <div class="tab_left shengluehao">
            <div class="iconfont icon-triangle-right"></div>
            <div class="shengluehao url">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="search_sy">
      <el-input
        placeholder="请输入内容"
        v-model="searchVal"
        class="input_search"
      >
        <div class="title_search" slot="prepend">全文搜索</div>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <div class="img_sy">
      <img src="@assets/img/ww.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  props: {
    titleC:String,
    sideNavSel:[String,Number],
    sideNav:{
      type:Array,
      default:()=>[]
    }
  },
  watch:{
  
  },
  computed:{
    part1_2listC() {
      return this.part1_2list.slice(0, 4);
    },
    titleCc(){
      return this.titleC
    },
    sideNavSelc(){
      return this.sideNavSel
    },
    sideNavc(){
      return this.sideNav
    }
  },
  data() {
    return {
      part1_2list: [
        { title: "建设要闻建设要闻建设要闻建设要闻建设要闻", time: "2020-10" },
        { title: "文件通知建设要闻建设要闻建设要闻", time: "2020-10" },
        {
          title:
            "公示公告建设要闻建设要闻建设要闻公示公告建设要闻建设要闻建设要闻公示公告建设要闻建设要闻建设要闻公示公告建设要闻建设要闻建设要闻",
          time: "2020-10",
        },
        { title: "会议通知建设要闻建设要闻建设要闻", time: "2020-10" },
        { title: "建设要闻建设要闻建设要闻建设要闻建设要闻", time: "2020-10" },
        { title: "文件通知建设要闻建设要闻建设要闻", time: "2020-10" },
        { title: "公示公告建设要闻建设要闻建设要闻", time: "2020-10" },
        { title: "会议通知建设要闻建设要闻建设要闻", time: "2020-10" },
        { title: "建设要闻建设要闻建设要闻建设要闻建设要闻", time: "2020-10" },
      ],
      searchVal:""
    };
  },
  
  methods: {
    sideNavSelC(index){
      this.$emit("sideNavSelC",index)
    }
  },
};
</script>

<style scoped lang="stylus"></style>
