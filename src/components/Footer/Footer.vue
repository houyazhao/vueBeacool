<template>
  <div id="footer">
    <address>
      @Copyright 2013 上海智向科技 备案号：沪ICP备17043844号
    </address>
    <div class="icon_copmany">
      <router-link class="l contact-icon" :to="{path: '/morethan/concatUs', query: {id: '2'}}"></router-link>
      <a class="l weibo-icon" target="_blank" href="###"><img v-lazy="'/static/images/weibo.png'"></a>
      <a class="l location-icon" target="_blank" href="/static/html/map.html"></a>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="sass" scoped>
@import './Footer.scss'
</style>


