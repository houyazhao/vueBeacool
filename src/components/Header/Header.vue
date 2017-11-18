<template>
  <div id="header">
    <nav class="navbar clearfix">
        <div class="navbar-logo l">
          <router-link :to="{path: '/'}" class="navbar-brand"><img class="logo" v-lazy="'/static/images/logo.png'"/></router-link>
        </div>
        <div class="navbar-collapse l">
          <ul class="nav navbar-nav">
            <li v-for="(item, index) in title" :key="index" :class="{'hidden-sm': 1 == index, 'hidden-xs': 1 == index}">
              <router-link :to="item['link'] == '/toggle' ? '' : item['link'] " @mouseenter.native="mouseModule(index)" v-cloak>{{item['text']}}</router-link>
            </li>
          </ul>
        </div>
    </nav>
    <div class="container-fluid">
      <transition name="slideDown">
        <div class="title-bracelects clearfix" v-if="show" @mouseleave="show=false" v-cloak>
          <div class="l" v-for="(item, index) in titleBracelects" :key="index">
            <router-link v-if="item['flag']" :to="item['link']">
              <img v-lazy="item['url']">
              <div class="title-bracelects-desc" v-cloak>{{item['text']}}</div>
            </router-link>
            <a v-else :href="item['link']">
              <img v-lazy="item['url']">
              <div class="title-bracelects-desc" v-cloak>{{item['text']}}</div>
            </a>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        show: false,
        currentPath: this.$route.path,
        titleBracelects: [
          {
            url: '/static/images/m0.png',
            link: '',
            text: 'M0',
            flag: false
          },
          {
            url: '/static/images/m1.png',
            link: '',
            text: 'M1',
            flag: false
          },
          {
            url: '/static/images/m9.png',
            link: '',
            text: 'M9',
            flag: true
          }
        ],
        title: [
          {
            link: '/index',
            text: '首页'
          },
          {
            link: '/toggle',
            text: '摩赞手环'
          },
          {
            link: '/app',
            text: 'APP'
          },
          {
            link: '/problem/self',
            text: '常见问题'
          },
          {
            link: '/news',
            text: '摩赞动态'
          }
        ]
      }
    },
    methods: {
      mouseModule (index) {
        if (index === 1) {
          this.show = !this.show
        } else {
          this.show = false
        }
      }
    }
  }
</script>
<style lang="sass" scoped>
@import './Header.scss'
</style>

