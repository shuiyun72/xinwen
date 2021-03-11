<template>
  <div class="about">
    <Header></Header>
    <div class="about_body">
      <div class="side_nav_sy">
        <div
          class="li"
          :class="index == sideNavSel ? 'active' : ''"
          v-for="(item, index) in sideNav"
          :key="index"
          @click="sideNavSelC(index)"
        >
          <div class="iconfont" :class="item.img"></div>
          <div class="side_text">{{ item.title }}</div>
        </div>
      </div>
      <div class="connect_right">
        <div class="right_about">
          <div class="t_name">{{ positionText }}</div>
          <div class="turn_to_list_sy">
            <div class="iconfont icon-youzhijiantou1"></div>
            <div class="">当前的位置 :</div>
            <router-link to="/" class="col_nav">首页</router-link>
            <div class="icon">></div>
            <div class="col_nav">{{ positionText }}</div>
          </div>
        </div>
        <div class="right_text" v-show="sideNavSel == 0">
          <p class="publit_p" v-for="(t, i) in 4" :key="i">
            河南省建设信息管理协会是2008年经民政厅批准成立，是由从事建设行业的行政管理、科研、生产、施工、流通、服务的各类单位和个人自愿参加组成，是依法享有民事权利，独立承担民事责任义务，具有社团法人资格的全省性建设行业社会团体。河南省建设信息管理协会业务主管部门是河南省住房和城乡建设厅，由河南省民政厅民间组织管理局进行业务指导和监督管理。
          </p>
          <p class="publit_p" v-for="(t, i) in 5" :key="i + 5">
            {{
              i + 1
            }}、宣传住房建设领域有关信息化工作的方针政策、法律法规，组织会员单位和社会力量，对信息化及其相关领域的理论和实践问题进行研究、探讨和交流，推进住房建设行业的信。
          </p>
          <p class="publit_p">
            网址 :
            <router-link to="/" class="col_nav_a"
              >http://www.hnjs.net.cn</router-link
            >
          </p>
        </div>
        <div class="right_text" v-show="sideNavSel == 1">
          <div class="about2_t">河南省建设信息管理协会章程</div>
          <div v-for="(t, i) in 5" :key="i + 30">
            <div class="about2_n">第一章 总则</div>
            <div class="publit_p2">
              第一条 协会中文名称：河南省建设信息管理协会
            </div>
            <div class="publit_p2">
              第二条
              河南省建设信息管理协会是由从事建设行业的行政管理、科研、生产、施工、流通、服务的各类单位和个人，自愿参加组成的全省性建设行业社会团体。它享有民事权利，独立承担民事责任义务，具有社团法人资格。
            </div>
            <div class="publit_p2">
              第三条
              本团体的宗旨是：认真落实省委、省政府关于加强信息化建设的要求，推进全省建设系统政务信息公开，为政府、为企业、为社会、为会员提供信息服务，并在政府部门与建设企事业单位之间发挥桥梁和纽带作用，在建设企业、事业单位之间发挥沟通与联系作用。
            </div>
            <div class="publit_p2">
              第四条
              河南省建设信息管理协会业务主管部门是河南省住房和城乡建设厅，由河南省民政厅民间组织管理局进行业务指导和监督管理。
            </div>
            <div class="publit_p2">
              第五条 会址：郑州市郑开大道89号河南建设大厦西塔1609室。
            </div>
          </div>
        </div>
        <div class="right_text" v-show="sideNavSel == 2">
          <div class="publit_p3">
            河南建设信息网（www.hnjs.net.cn）是
            我省建设系统的核心工作网和专业信息网，目前我省数万家建设行业企事业单位，以及数百万的管理和从业人员在河南建设信息网获取行业信息、进行网上办事。为
            更好地向企业提供全面、实用、便捷、贴身的服务，我们设立了网员服务制度，内容包括办事咨询与帮助、系统使用帮助、企业主页宣传、人才招聘、供求发布、招
            投标信息查询、手机短信服务等。为网员单位提供了大量有价值的信息和全方位的优质服务，深受广大企事业单位欢迎和赞赏。欢迎贵单位成为河南建设信息网尊贵
            的网员
          </div>
        </div>
        <div class="right_text" v-show="sideNavSel == 3">
          <div class="about2_n">河南建设信息网</div>
          <el-row>
            <el-col :span="3"> <div class="el_title">邮政 :</div></el-col>
            <el-col :span="20" :offset="1">
              <div class="el_zhi">450046</div></el-col
            >
          </el-row>
          <el-row>
            <el-col :span="3"> <div class="el_title">通信地址 :</div></el-col>
            <el-col :span="20" :offset="1">
              <div class="el_zhi">
                郑州市郑开大道89号河南建设大厦西塔1609室。
              </div></el-col
            >
          </el-row>
          <el-row>
            <el-col :span="3"> <div class="el_title">传真 :</div></el-col>
            <el-col :span="20" :offset="1">
              <div class="el_zhi">0371-68085711</div></el-col
            >
          </el-row>
          <el-row>
            <el-col :span="3"> <div class="el_title">办公时间 :</div></el-col>
            <el-col :span="20" :offset="1">
              <div class="el_zhi">上午08:00--12:00(工作日)</div>
              <div class="el_zhi">下午14:30--17:30(工作日)</div></el-col
            >
          </el-row>
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
  data() {
    return {
      sideNav: [
        { title: "协会简介", url: "", img: "icon-jianjie" },
        { title: "协会章程", url: "", img: "icon-wendang1" },
        { title: "部门职责", url: "", img: "icon-dongtai-miaobian" },
        { title: "联系我们", url: "", img: "icon-dianhua" },
      ],
      sideNavSel: 0,
    };
  },
  beforeMount() {
    this.sideNavSel = this.$route.query.sel;
  },
  computed: {
    positionText() {
      return this.sideNav[this.sideNavSel].title;
    },
  },
  methods: {
    sideNavSelC(index) {
      this.sideNavSel = index;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.turn_to_list_sy {
  display: flex;
  color: #888;
  align-items: center;
  font-size: 16px;

  .iconfont {
    font-size: 12px;
    padding-right: 6px;
  }

  .col_nav {
    padding: 0 6px;
    color: #888;

    &:hover {
      color: #2172ce;
      text-decoration: none;
    }
  }
}

.about_body {
  padding-top: 20px;
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  .connect_right {
    width: 730px;
    float: right;
    height: auto;
    overflow: hidden;
    border: 1px solid #dddddd;
    padding: 10px 15px;
    margin-right: 20px;
    padding-bottom: 60px;

    .right_about {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 4px dashed #d7e5f4;
      padding-bottom: 8px;

      .t_name {
        font-size: 23px;
        color: #2172ce;
      }
    }

    .right_text {
      padding-top: 6px;

      .publit_p {
        text-indent: 2em;
        color: #666;
        font-size: 16px;
        padding-top: 6px;
        line-height: 28px;

        .col_nav_a {
          color: #2172ce;
          text-decoration: none;
        }
      }

      .about2_t {
        font-size: 20px;
        text-align: center;
        padding: 20px 0;
      }

      .about2_n {
        font-size: 16px;
        text-align: center;
        padding: 10px 0 16px;
        color: #666;
      }

      .publit_p2 {
        text-indent: 2em;
        color: #666;
        font-size: 16px;
        padding-top: 6px;
        line-height: 28px;
      }

      .publit_p3 {
        text-indent: 2em;
        color: #666;
        font-size: 16px;
        padding-top: 6px;
        line-height: 28px;
      }

      .el_title {
        text-align: right;
        font-size: 16px;
        line-height: 40px;
        color: #666;
        font-weight: bold;
      }

      .el_zhi {
        font-size: 16px;
        line-height: 40px;
      }
    }
  }
}

.side_nav_sy {
  // border: 1px solid #ccc;
  width: 200px;
  box-shadow: 2px 2px 4px #ccc;
  height: 236px;

  .li {
    width: 200px;
    height: 59px;
    line-height: 59px;
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    box-sizing: border-box;
    padding: 10px;
    cursor: pointer;

    &+.li {
      border-top: 1px solid #ccc;
    }

    &.active {
      background-color: #eae9e9;

      .iconfont {
        background-color: #137deb;
      }
    }

    .iconfont {
      width: 44px;
      height: 44px;
      background-color: #d0d0d0;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 28px;
    }

    .side_text {
      font-size: 16px;
      color: #666;
      padding-left: 16px;
    }
  }
}
</style>
