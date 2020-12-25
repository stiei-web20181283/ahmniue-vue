<template>
  <div class="home-page">
    <search-bar icon-left="scan" color="#CECECE" action @search="search"></search-bar>
    <div class="home-content">
      <van-swipe class="my-swipe"
      :autoplay="3000"
      indicator-color="#274A43"
      @change="swipeChange">
        <van-swipe-item v-for="item in swipeList" :key="item.index">
          <van-image height="170px" :src="item.pic" />
          <div>{{item.title}}</div>
          <div>{{item.content}}</div>
        </van-swipe-item>
        <!--
        <template #indicator>
          <div class="custom-indicator-box">
            <div class="custom-indicator">
              <i v-for="item in swipeList.length" :key="item.index" class="van-swipe__indicator" :class="{active: item.index === currentSwipe}"></i>
            </div>
          </div>
        </template>
        -->
      </van-swipe>
    </div>
  </div>
</template>
<script>
import SearchBar from '@/components/searchBar'
export default {
  name: 'home',
  components: {
    SearchBar
  },
  props: {

  },
  data () {
    return {
      currentSwipe: 0,
      swipeList: [
        {title: '标题1', content: '内容', pic: 'https://img.yzcdn.cn/vant/cat.jpeg'},
        {title: '标题2', content: '内容', pic: 'https://img.yzcdn.cn/vant/apple-1.jpg'},
        {title: '标题3', content: '内容', pic: 'https://img.yzcdn.cn/vant/cat.jpeg'},
        {title: '标题4', content: '内容', pic: 'https://img.yzcdn.cn/vant/cat.jpeg'}
      ]
    }
  },
  computed: {

  },
  created () {

  },
  methods: {
    search (val) {
      this.$router.push({
        name: 'search',
        query: {
          value: val
        }
      })
    },
    swipeChange (index) {
      this.currentSwipe = index
      this.$toast(index)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.home-page{
  background-color: #FBFBFB;
  .home-content{
    padding: 1rem;
    .my-swipe {
      padding-bottom: 21px;
      .van-swipe-item {
        color: #3E3E3E;
        background-color: #fff;
        border-radius: 10px;
        overflow: hidden;
        .van-image{
          border-radius: 10px;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
<style rel="stylesheet/scss" lang="scss">
.my-swipe{
  .van-swipe__indicators{
    bottom: 8px;
    .van-swipe__indicator{
      background-color: #CECECE;
      &.van-swipe__indicator--active{
        width: 12px;
        border-radius: 12px;
      }
    }
  }
}
</style>
