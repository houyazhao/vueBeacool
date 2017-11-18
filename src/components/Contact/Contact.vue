<template>
  <div id="contact">
    <div class="clearfix">
      <div class="l contact-mode">
        <div class="phone top15"><i class="icon-phone"></i>电话：021-61622198-811</div>
        <div class="email"><i class="icon-email"></i>邮箱：info@beacool.com</div>
        <div class="address"><i class="icon-address"></i>地址：上海浦东新区金科路2966号（创智空间）1栋207</div>
      </div>
      <div class="l consultation-mode">
        <div class="consultation">
          <div class="l consultation-img">
            <img v-lazy="'/static/images/qr_code.png'">
          </div>
          <div class="l consultation-info">
            <div class="consultation-title">咨询服务（免费电话）</div>
            <div class="consultation-phone">400-663-0309</div>
            <div class="consultation-desc">
              扫一扫二维码，<br>
              关注摩赞最新动态！
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="sass" scoped>
@import './Contact.scss'
</style>


