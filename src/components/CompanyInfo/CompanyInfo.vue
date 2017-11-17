<template>
  <div id="companyInfo" class="container-fluid">
    <div class="company clearfix">
        <div class="company-info l">
          <div class="l info-item" v-for="(item, index) in companyInfo" :key="index">
            <div class="title" v-cloak>{{item['text']}}</div>
            <router-link v-for="(data, i) in item['children']" :key="i" :to="data['link']" v-cloak>{{data['text']}}</router-link>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="consultation l clearfix">
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
<script type='text/ecmascript-6'>
  export default{
    data () {
      return {
        companyInfo: [
          {
            text: '购买产品',
            smInfo: true,
            children: [
              {
                link: '',
                text: '摩赞商城'
              }
            ]
          },
          {
            text: '服务与支持',
            smInfo: true,
            children: [
              {
                link: {
                  path: '/consultation'
                },
                text: '售后咨询'
              },
              {
                link: {
                  path: '/problem'
                },
                text: '常见问题'
              }
            ]
          },
          {
            text: '关于摩赞',
            smInfo: true,
            children: [
              {
                link: {
                  path: '/morethan/briefIntrod',
                  query: {
                    id: 0
                  }
                },
                text: '公司简介'
              },
              {
                link: {
                  path: '/news'
                },
                text: '摩赞动态'
              },
              {
                link: {
                  path: '/morethan/concatUs',
                  query: {
                    id: 2
                  }
                },
                text: '联系我们'
              }
            ]
          }
        ]
      }
    }
  }
</script>
<style lang="sass" scoped>
@import './CompanyInfo.scss'
</style>

