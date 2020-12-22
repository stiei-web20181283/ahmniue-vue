<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="good-job-o">推荐</van-tabbar-item>
      <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o">我的</van-tabbar-item>

      <!-- <van-tabbar-item icon="home-o">首页</van-tabbar-item> -->

    </van-tabbar>
  </div>
</template>
<script>
// import MenuItem from './MenuItem'
import { mapGetters } from 'vuex'
import { Tabbar, TabbarItem } from 'vant'

export default {
  name: 'NavMenu',
  components: {
    // MenuItem,
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      active: 0
    }
  },
  computed: {
    ...mapGetters([
      'navMenu_routes'
    ]),
    routes () {
      // return this.$router.options.routes
      return this.navMenu_routes
    }
  }
}
</script>
