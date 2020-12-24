<template>
  <div class="nav-menu">
    <!-- 导航菜单 -->
    <van-tabbar route fixed v-model="active" active-color="#274A43" inactive-color="#CECECE">
      <template  v-for="item in routes">
        <van-tabbar-item :key="item.index" v-if="item.children"
          :to="item.path + '/' + item.children[0].path"
          > <!-- :icon="item.meta.icon" -->
          <span>{{item.meta.title}}</span>
          <template #icon>
            <van-icon size="1.5rem" class="ahmniueicon" class-prefix='icon' :name="item.meta.icon"></van-icon>
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>
<script>
import MenuItem from './MenuItem'
import { mapGetters } from 'vuex'
import { Tabbar, TabbarItem } from 'vant'

export default {
  name: 'NavMenu',
  components: {
    MenuItem,
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
<style rel="stylesheet/scss" lang="scss" scoped>
  // .nav-menu{
  //   font-weight: bold;
  // }
</style>
