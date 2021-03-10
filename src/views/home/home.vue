<template>
  <div class="home">
    <Header></Header>
    <div class="home_body w1200">
      <div class="home_part1">
        <div class="left">
          <el-carousel height="410px" width="590px" :autoplay="false">
            <el-carousel-item v-for="item in 1" :key="item">
              <div class="relative">
                <img
                  src="@assets/img/home/201909271742435871.jpg"
                  alt=""
                  class="img2"
                />
                <div class="text shengluehao">
                  河南省建设信息管理协会召开“不忘初心、牢记使命”主题教育动员会
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@components/header";
export default {
  name: "home",
  components: {
    Header,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.home_part1 {
  // 左侧轮播
  .left {
    .el-carousel__indicators--horizontal {
      bottom: 0;
      right: 10px;
      transform: translateX(0);
      left: initial;
    }

    .el-carousel__indicator--horizontal {
      padding: 0px 0 20px 0;

      .el-carousel__button {
        width: 6px;
        height: 6px;
        background-color: #45a7f2;
      }
    }

    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  }
}
</style>
<style scoped lang="stylus">
.home_part1 {
  padding-top: 20px;

  .left {
    width: 590px;
    height: 410px;

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
}
</style>
