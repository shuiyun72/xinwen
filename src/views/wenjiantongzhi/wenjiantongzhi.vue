<template>
  <div class="work">
    <Header></Header>
    <div class="work_body minh389">
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
        <div class="work_left">
          <div class="list_pub_sy">
            <div
              class="hang_pub"
              v-for="(item, index) in dataList9"
              :key="index"
            >
              <div class="tab_left shengluehao">
                <div
                  class="iconfont icon-jiantou_yemian_xiangyou"
                ></div>
                <div class="shengluehao">{{ item.title }}</div>
              </div>
              <div class="tab_right">{{ item.time }}</div>
            </div>
          </div>
          <div class="list_pub_sy">
            <div
              class="hang_pub"
              v-for="(item, index) in dataList9"
              :key="index+10"
            >
              <div class="tab_left shengluehao">
                <div
                  class="iconfont icon-jiantou_yemian_xiangyou"
                ></div>
                <div class="shengluehao">{{ item.title }}</div>
              </div>
              <div class="tab_right">{{ item.time }}</div>
            </div>
          </div>
        </div>
        <div class="work_right">
          <PublicRight
            :titleC="titleC"
            :sideNav="sideNav"
            :sideNavSel="sideNavSel"
            @sideNavSelC="sideNavSelC"
          ></PublicRight>
        </div>
        
      </div>
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="10"
          layout="prev, pager, next, jumper"
          :total="1000">
        </el-pagination>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@components/header";
import Footer from "@components/footer";
import PublicRight from "@components/publicRight";

export default {
  components: {
    Header,
    Footer,
    PublicRight,
  },
  computed: {
    positionText() {
      return this.sideNav[this.sideNavSel].title;
    },
    dataList9() {
      return this.dataList.slice(0, 5);
    },
  },
  data() {
    return {
      titleC:"文件通知",
      sideNav: [
        { title: "文件通知", url: "", img: "icon-jianjie" },
        { title: "会议通知", url: "", img: "icon-wendang1" },
        { title: "会议计划", url: "", img: "icon-dongtai-miaobian" }
      ],
      sideNavSel: 0,
      dataList: [
        { title: "建设要闻建设要闻建设要闻建设要闻建设要闻", time: "2020-10" },
        { title: "文件通知建设要闻建设要闻建设要闻", time: "2020-10" },
        { title: "公示公告建设要闻建设要闻建设要闻公示公告建设要闻建设要闻建设要闻公示公告建设要闻建设要闻建设要闻公示公告建设要闻建设要闻建设要闻", time: "2020-10" },
        { title: "会议通知建设要闻建设要闻建设要闻", time: "2020-10" },
        { title: "建设要闻建设要闻建设要闻建设要闻建设要闻", time: "2020-10" },
        { title: "文件通知建设要闻建设要闻建设要闻", time: "2020-10" },
        { title: "公示公告建设要闻建设要闻建设要闻", time: "2020-10" },
        { title: "会议通知建设要闻建设要闻建设要闻", time: "2020-10" },
        { title: "建设要闻建设要闻建设要闻建设要闻建设要闻", time: "2020-10" }
      ],
      currentPage3: 5,
    };
  },
  beforeMount() {
    this.sideNavSel = this.$route.query.sel;
  },
  watch: {
    $route(to,from) {
      console.log(from)
      this.sideNavSel = Number(to.query.sel);
    }
  },
  methods: {
    sideNavSelC(index) {
      this.sideNavSel = index;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
};
</script>
<style scoped lang="stylus">
.work {
  .work_body {
    width: 1000px;
    margin: 0 auto;

    .work_content {
      display: flex;
      justify-content: space-between;

      .work_left {
        width: 700px;
      }
    }
  }
}

.list_pub_sy {
  padding-bottom 16px ;
  +.list_pub_sy{
    border-top 1px dashed #849fbd
    padding-top 6px
  }
  .hang_pub {
    display: flex;
    padding-top: 9px;
    font-size: 15px;
    cursor: pointer;

    .iconfont {
      font-size: 12px;
      padding-right: 4px;
    }

    .tab_left {
      flex: 1;
      display: inline-flex;
      align-items: center;
      width: 90%;
    }

    .tab_right {
      color: #999;
    }
  }
}
</style>
