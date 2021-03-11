<template>
  <div class="home">
    <Header></Header>
    <div class="home_body w1200">
      <div class="home_part1">
        <div class="left">
          <swiper :options="swiperOption">
            <swiper-slide
              class="swiper-slide-l"
              v-for="(item, index) in carouselArr"
              :key="index"
            >
              <div class="relative">
                <img
                  :src="require('@assets/img/home/' + item.img)"
                  class="img2"
                />
                <div class="text shengluehao">
                  {{ item.text }}
                </div>
              </div>
            </swiper-slide>
            <!-- 分页器 -->
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="right">
          <div class="part1_1">
            <swiper :options="swiperOption2">
              <swiper-slide
                class="swiper-slide-l"
                v-for="(item, index) in carouselArr2"
                :key="index"
              >
                <div>
                  <div class="pt1_1_title shengluehao">
                    {{ item.title }}
                  </div>
                  <div class="pt1_1_text">
                    {{ item.text.substring(0, 80) }}...
                  </div>
                </div>
              </swiper-slide>
              <!-- 分页器 -->
              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </div>
          <div class="part1_2">
            <TabCom1
              icon="icon-shuangyoujiantou"
              iconColor="#f00"
              :navList="part1_2"
              :dataList="part1_2list"
              :sel="partSel0"
              @changeSel="changeSel0"
            ></TabCom1>
          </div>
        </div>
      </div>
      <div class="home_part2">
        <div class="left590">
          <TabCom2
            icon="icon-shuangyoujiantou"
            iconColor="#1178c1"
            :navList="part1_2"
            :dataList="part1_2list"
            :sel="partSel1"
            @changeSel="changeSel1"
          ></TabCom2>
        </div>
        <div class="right590">
          <TabCom2
            icon="icon-shuangyoujiantou"
            iconColor="#1178c1"
            :navList="part1_2"
            :dataList="part1_2list"
            :sel="partSel2"
            @changeSel="changeSel2"
          ></TabCom2>
        </div>
      </div>
      <div class="home_part3">
        <img :src="require('@assets/img/home/banner-wx.jpg')" alt="">
      </div>
      <div class="home_part2">
        <div class="left590">
          <TabCom2
            icon="icon-shuangyoujiantou"
            iconColor="#1178c1"
            :navList="part1_2"
            :dataList="part1_2list"
            :sel="partSel3"
            @changeSel="changeSel3"
          ></TabCom2>
        </div>
        <div class="right590">
          <TabCom2
            icon="icon-shuangyoujiantou"
            iconColor="#1178c1"
            :navList="part1_2"
            :dataList="part1_2list"
            :sel="partSel4"
            @changeSel="changeSel4"
          ></TabCom2>
        </div>
      </div>
      <div class="home_part5">
        <div class="part5_title">
          <div class="part5left">
            <div class="tuijian">推荐企业</div>
            <div>已收录203家企业</div>
          </div>
          <div class="part5right">
            更多 》
          </div>
        </div>
        <div class="part5_body">

        </div>
      </div>
      
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@components/header";
import Footer from "@components/footer";
import TabCom1 from "@components/tabCom1";
import TabCom2 from "@components/tabCom2";
export default {
  name: "home",
  components: {
    Header,
    Footer,
    TabCom1,
    TabCom2,
  },
  data() {
    return {
      part1_2: [
        { title: "建设要闻" },
        { title: "文件通知" },
        { title: "公示公告" },
        { title: "会议通知" },
      ],
      part1_2list: [
        { title: "建设要闻建设要闻建设要闻建设要闻建设要闻", time: "2020-10" },
        { title: "文件通知建设要闻建设要闻建设要闻", time: "2020-10" },
        { title: "公示公告建设要闻建设要闻建设要闻公示公告建设要闻建设要闻建设要闻公示公告建设要闻建设要闻建设要闻公示公告建设要闻建设要闻建设要闻", time: "2020-10" },
        { title: "会议通知建设要闻建设要闻建设要闻", time: "2020-10" },
        { title: "建设要闻建设要闻建设要闻建设要闻建设要闻", time: "2020-10" },
        { title: "文件通知建设要闻建设要闻建设要闻", time: "2020-10" },
        { title: "公示公告建设要闻建设要闻建设要闻", time: "2020-10" },
        { title: "会议通知建设要闻建设要闻建设要闻", time: "2020-10" },
        { title: "建设要闻建设要闻建设要闻建设要闻建设要闻", time: "2020-10" },
      ],
      partSel0: 0,
      partSel1: 0,
      partSel2: 0,
      partSel3: 0,
      partSel4: 0,


      carouselArr: [
        {
          text: "河南省建设信息管理协会召开“不忘初心、牢记使命”主题教育动员会",
          img: "201909271742435871.jpg",
        },
        {
          text: "河南省建设信息管理协会召开“不忘初心、牢记使命”主题教育动员会",
          img: "201909271742435871.jpg",
        },
      ],
      carouselArr2: [
        {
          title:
            "河南省建设信息管理协会召开河南省建设信息管理协会召开河南省建设信息管理协会召开",
          text:
            "“不忘初心、牢记使命”主题教育动“不忘初心、牢记使命”主题教育动员会“不忘初心、牢记使命”主题教育动员会“不忘初心、牢记使命”主题教育动员会“不忘初心、牢记使命”主题教育动员会“不忘初心、牢记使命”主题教育动员会“不忘初心、牢记使命”主题教育动员会员会“不忘初心、牢记使命”主题教育动员会“不忘初心、牢记使命”主题教育动员会",
        },
        {
          title: "河南省建设信息管理协会召开",
          text:
            "“不忘初心、牢记使命”主题教育动员会“不忘初心、牢记使命”主题教育动员会“不忘初心、牢记使命”主题教育动员会",
        },
        {
          title: "河南省建设信息管理协会召开",
          text:
            "“不忘初心、牢记使命”主题教育动员会“不忘初心、牢记使命”主题教育动员会“不忘初心、牢记使命”主题教育动员会",
        },
      ],
      swiperOption: {
        //显示分页
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: 6000,
        loop: true,
      },
      swiperOption2: {
        //显示分页
        pagination: ".swiper-pagination",
        direction: "vertical",
        autoplay: 5000,
        // //开启循环模式
        loop: true,
        prevButton: ".swiper-button-next",
        nextButton: ".swiper-button-prev",
        paginationType: "fraction",
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      },
    };
  },
  mounted() {},
  methods: {
    changeSel0(index) {
      this.partSel0 = index;
    },
    changeSel1(index) {
      this.partSel1 = index;
    },
    changeSel2(index) {
      this.partSel2 = index;
    },
    changeSel3(index) {
      this.partSel3 = index;
    },
    changeSel4(index) {
      this.partSel4 = index;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.home_part3{
  padding 10px 0 0;
}
.home_part2 {
  justify-content: space-between;
  display: flex;
  padding-top: 16px;
  .left590 {
    width: 590px;
  }

  .right590 {
    width: 590px;
  }
}

.home_part1 {
  padding-top: 16px;
  justify-content: space-between;
  display: flex;

  .left {
    width: 590px;
    height: 410px;

    .swiper-container {
      width: 590px;
      height: 410px;

      .swiper-wrapper {
        .swiper-slide {
          width: 100%;
          height: 100%;
          background-color: #42b983;
        }
      }

      .swiper-pagination {
        background-color: #007CE0;
        width: 7px;
        height: 7px;
        bottom: 20px;
        right: 10px;
      }
    }

    .relative {
      position: relative;

      .text {
        width: 100%;
        height: 50px;
        line-height: 50px;
        position: absolute;
        z-index: 1;
        left: 0px;
        bottom: 0px;
        background-color: rgba(0, 0, 0, 0.6);
        font-size: 14px;
        color: #fff;
        padding-left: 14px;
        box-sizing: border-box;
      }
    }
  }

  .right {
    width: 590px;

    .part1_1 {
      height: 90px;

      .pt1_1_title {
        width: 500px;
        font-size: 22px;
      }

      .pt1_1_text {
        padding: 4px 0 6px;
      }

      .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
        background-size: 6px 10px;
        background-color: #e1e1e1;
        width: 20px;
        height: 20px;
        top: 30%;
        right: 10px;
        border-radius: 4px;
      }

      .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
        background-size: 6px 10px;
        background-color: #e1e1e1;
        width: 20px;
        height: 20px;
        top: 30%;
        right: 62px;
        left: initial;
        border-radius: 4px;
      }

      .swiper-container {
        width: 590px;
        height: 80px;

        .swiper-wrapper {
          .swiper-slide {
            width: 100%;
            height: 100%;
            // background-color: #42b983;
          }
        }

        .swiper-pagination {
          // background-color: #007CE0;
          width: 30px;
          height: 20px;
          top: 30%;
          margin-top: -22px;
          right: 30px;
          left: initial;
        }
      }
    }
  }
}
</style>
