<template>
  <div class="huangye">
    <Header></Header>
    <div class="huangye_body">
      <div class="hangye_nav">
        <div class="title_l">建设黄页</div>
        <div class="iconfont icon-triangle-right"></div>
        <div class="huang_li"></div>
      </div>
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
      huangNav:[
        { title: "施工企业", url: ""},
        { title: "勘察企业", url: ""},
        { title: "设计企业", url: ""},
        { title: "园林绿化", url: ""},
        { title: "工程监理", url: ""},
        { title: "其他", url: ""}
      ]
    };
  },
  methods: {},
};
</script>

<style scoped lang="stylus"></style>
