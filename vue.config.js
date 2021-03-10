const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@vue", resolve("node_modules/vue/dist/vue.min.js"))
      .set("@", resolve("src"))
      .set("@styles", resolve("src/styles"))
      .set("@assets", resolve("src/assets"))
      .set("@config", resolve("config"))
      .set("@public", resolve("public"))
      .set("@assets", resolve("src/assets"))
      .set("@router", resolve("src/router"))
      .set("@store", resolve("src/store"))
      .set("@api", resolve("src/api"))
      .set("@common", resolve("src/common"))
      .set("@components", resolve("src/views/components"))
      .set("@util", resolve("src/common/util"));
  }
};
