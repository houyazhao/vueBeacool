<template>
  <div id="app">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>App</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="msg clearfix">
      <div class="l app-item"><img v-lazy="'/static/images/app.png'"></div>
      <div class="l title-item">
        <div class="title s-h">摩赞出行APP</div>
        <div class="desc">摩赞出行APP是上海智向自主开发的配合摩赞手环使用的工具APP产品，功能丰富，页面美观，操作方便。</div>
        <div class="desc">在摩赞出行APP里，你可以使用APP给手环交通卡充值，还可以随时查看您的健康报表等。现在您可以在各大商店搜索“摩赞出行”下载。</div>
      </div>
    </div>
    <div class="download">
      <div class="title">DOWNLOAD</div>
      <div class="img-item"><a href=""><img v-lazy="'/static/images/ios.png'"></a></div>
      <div class="img-item"><a href=""><img v-lazy="'/static/images/android.png'"></a></div>
      <div class="img-item"><a><img v-lazy="'/static/images/download_code.png'"></a></div>
      <Contact></Contact>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script type='text/ecmascript-6'>
  import vFooter from '../../components/Footer/Footer.vue'
  import Contact from '../../components/Contact/Contact.vue'
  export default{
    data () {
      return {

      }
    },
    components: {
        Contact,
        vFooter
    },
    methods: {

    }
  }
</script>
<style lang="sass" scoped>
@import './App.scss'
</style>

