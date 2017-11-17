<template>
  <div id="index">
    <Swiper></Swiper>
    <div class="bracelects clearfix">
        <div class="bracelects-item l" v-for="(item, index) in picBracelects" :key="index">
          <router-link v-if="item['flag']" :to="item['link']"><img v-lazy="item['url']"/></router-link>
          <a v-else :href="item['link']"><img v-lazy="item['url']"/></a>
        </div>
    </div>
    <CompanyInfo></CompanyInfo>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import Swiper from '../../components/Swiper/Swiper.vue'
  import CompanyInfo from '../../components/CompanyInfo/companyInfo.vue'
  import vFooter from '../../components/Footer/Footer.vue'
  export default{
    data () {
      return {
        picBracelects: [
          {
            url: '/static/images/bracelect_m0.png',
            link: '#',
            flag: false
          },
          {
            url: '/static/images/bracelect_m1.png',
            link: '#',
            flag: false
          },
          {
            url: '/static/images/bracelect_m9.png',
            link: '#',
            flag: false
          },
          {
            url: '/static/images/bracelect_app.png',
            link: '/appChild',
            flag: true
          }
        ]
      }
    },
    components: {
        Swiper,
        CompanyInfo,
        vFooter
    }
  }
</script>
<style lang="sass" scoped>
@import './Index.scss'
</style>

