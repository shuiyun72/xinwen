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
                    {{ item.text }}
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
            <tabCom1
              hander="changeSel"
              icon="icon-shuangyoujiantou"
              iconColor="#f00"
              :navList="part1_2"
              :dataList="part1_2list"
              :sel="part1_2Sel"
              @changeSel="changeSel"
            ></tabCom1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@components/header";
import tabCom1 from "@components/tabCom1";
export default {
  name: "home",
  components: {
    Header,
    tabCom1,
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
        { title: "公示公告建设要闻建设要闻建设要闻", time: "2020-10" },
        { title: "会议通知建设要闻建设要闻建设要闻", time: "2020-10" },
      ],
      part1_2Sel: 0,
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
            "“不忘初心、牢记使命”主题教育动员会“不忘初心、牢记使命”主题教育动员会“不忘初心、牢记使命”主题教育动员会",
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
        // direction:"vertical",
        // speed:300,
        //自动轮播
        // autoplay: {
        //   delay: 500000,
        //   //当用户滑动图片后继续自动轮播
        //   disableOnInteraction: false,
        // },
        // //开启循环模式
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
    changeSel(index) {
      this.part1_2Sel = index;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.home_part1 {
  padding-top: 20px;
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
      height: 80px;

      .pt1_1_title {
        width: 500px;
        font-size: 16px;
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
