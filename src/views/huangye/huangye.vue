<template>
  <div class="huangye">
    <Header></Header>
    <div class="huangye_body minh389">
      <div class="hangye_nav_sy">
        <div class="title_l">建设黄页</div>
        <div class="iconfont icon-triangle-right"></div>
        <div class="huang_li" v-for="(item, index) in huangNav" :key="index">
          {{ item.title }}
        </div>
      </div>

      <img src="@assets/img/huangye/js_gg.jpg" alt="" class="fill_img" />

      <swiper :options="swiperOption">
        <swiper-slide
          class="swiper-slide-l"
          v-for="(item, index) in 2"
          :key="index"
        >
          <div class="lie_list">
            <div class="img2_box" v-for="(item, index) in carouselArr"
                :key="index + 10">
              <img
                class="img2"
                :src="require('@assets/img/huangye/' + item.img)"
              />
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@components/header";
import Footer from "@components/footer";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      huangNav: [
        { title: "施工企业", url: "" },
        { title: "勘察企业", url: "" },
        { title: "设计企业", url: "" },
        { title: "园林绿化", url: "" },
        { title: "工程监理", url: "" },
        { title: "其他", url: "" },
      ],
      swiperOption: {
        autoplay: 5000,
        speed: 2000,
        loop: true,
      },
      carouselArr: [
        {
          img: "cc1.jpg",
          url: "",
        },
        {
          img: "cc2.jpg",
          url: "",
        },
        {
          img: "cc3.jpg",
          url: "",
        },
        {
          img: "cc4.jpg",
          url: "",
        },
        {
          img: "cc2.jpg",
          url: "",
        },
        {
          img: "cc3.jpg",
          url: "",
        },
        {
          img: "cc4.jpg",
          url: "",
        },
        {
          img: "cc2.jpg",
          url: "",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped lang="stylus">
.huangye {
  .huangye_body {
    width: 1000px;
    margin: 0 auto;
    padding-top: 20px;
  }

  .fill_img {
    padding-top: 12px;
  }

  .lie_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .img2_box{
      margin: 12px 0 0;
      box-shadow: 1px 1px 4px #ccc;
      width: 24%;
      cursor pointer
      .img2 {
        width 100%;
        height auto;

      }
    }
    
  }
}

.hangye_nav_sy {
  display: flex;
  align-items: center;
  background-color: #f3f3f3;
  box-shadow: 1px 1px 4px #ccc;

  .title_l {
    width: 136px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    background-color: #2172ce;
    color: #fff;
    font-size: 18px;
  }

  .icon-triangle-right {
    color: #2172ce;
    position: relative;
    left: -5px;
  }

  .huang_li {
    font-weight: bold;
    width: 80px;
    height: 36px;
    line-height: 38px;
    text-align: center;
    cursor: pointer;
    border-bottom: 2px solid #f3f3f3;
    transition: 0.5s all;

    &:hover {
      color: #007ce0;
      border-bottom: 2px solid #007ce0;
    }
  }
}
</style>
