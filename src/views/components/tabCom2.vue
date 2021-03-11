<template>
  <div class="tab_class2_sy">
    <div class="tab_ul">
      <div
        class="tab_li"
        :class="index == sel ? 'active' : ''"
        v-for="(item, index) in navList"
        :key="index"
        @mouseover="changeSel(index)"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="tab_body">
      <div class="hang" v-for="(item, index) in dataList7" :key="index">
        <div class="tab_left shengluehao">
          <div
            class="iconfont icon-yuandianzhong"
            :class="icon ? icon : ''"
            :style="{ color: iconColor }"
          ></div>
          <div class="shengluehao">{{ item.title }}</div>
        </div>
        <!-- <div class="tab_right">{{ item.time }}</div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      // 对象或数组默认值必须从一个工厂函数获取
      default: "",
    },
    iconColor: {
      // 对象或数组默认值必须从一个工厂函数获取
      default: "",
    },
    navList: {
      // 对象或数组默认值必须从一个工厂函数获取
      default: [],
    },
    dataList: {
      // 对象或数组默认值必须从一个工厂函数获取
      default: [],
    },

    sel: {
      // 对象或数组默认值必须从一个工厂函数获取
      default: 0,
    },
  },
  data() {
    return {};
  },
  computed:{
      dataList7(){
        return this.dataList.slice(0,7)
        // return  _.take(this.dataList, 7)
      }
  },
  methods: {
    changeSel(index) {
      this.$emit("changeSel", index);
    },
  },
};
</script>

<style scoped lang="stylus">
.tab_class2_sy {
  width: 100%;

  .tab_ul {
    display: flex;
    background-color: #edf1fa;
    height: 35px;
    padding-left 1px;
    

    .tab_li {
      width: 78px;
      height: 35px;
      line-height: 35px;
      font-size: 15px;
      text-align: center;
      cursor: pointer;
      border-top 2px solid transparent;
      &.active {
        background-color:#fff ;
        color: #1178c1;
        border-top 2px solid #1178c1;
      }
    }
  }

  .tab_body {
    padding-top:6px;
    .hang {
      display: flex;
      padding: 4px 0;
      font-size: 15px;
      cursor: pointer;
      border-bottom 1px solid #f0f0f0;
      .iconfont {
        font-size: 12px;
        padding-right: 4px;
      }

      .tab_left {
        // flex: 1;
        display: inline-flex;
        align-items: center;
        width: 90%;
      }

      .tab_right {
        color: #999;
      }
    }
  }
}
</style>
