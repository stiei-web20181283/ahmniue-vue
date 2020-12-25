<template>
  <div class="product-select-page">
    <!-- 搜索栏 -->
    <search-bar
    icon-right="share-o"
    background="#fff"
    color="#3E3E3E"
    action
    @search="search"
    @right-action="showShare = true"></search-bar>
    <!-- 宫格 -->
    <van-grid :gutter="10" class="product-select-top">
      <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
    </van-grid>
    <!-- 分类选择 -->
    <van-tree-select class="product-select-tree"
    height="100%"
    :items="selectOptions"
    :main-active-index.sync="selected">
      <template #content>
        <div class="product-select-tree-logo"><van-image height="5rem" src="https://img.yzcdn.cn/vant/cat.jpeg" /></div>
        <van-grid class="product-select-tree_inner" :gutter="13" :column-num="3"  icon-size="3rem">
          <van-grid-item v-for="value in 8" :key="value">
            <van-image fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <p>内容</p>
          </van-grid-item>
        </van-grid>
      </template>
    </van-tree-select>
    <!-- 弹出层 分享面板 -->
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="shareOptionList"
      @select="shareSelect"
    />
  </div>
</template>
<script>
import SearchBar from '@/components/searchBar'
export default {
  name: 'product',
  components: {
    SearchBar
  },
  props: {

  },
  data () {
    return {
      value: '',
      showShare: false,
      shareOptionList: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' },
        { name: '二维码', icon: 'qrcode' }
      ],
      selectOptions: [ // 分类选项
        { text: '品类' },
        { text: '风格' },
        { text: '系列' },
        { text: '品牌' },
        { text: '客厅' },
        { text: '餐厅' },
        { text: '卧室' },
        { text: '书房' },
        { text: '饰品' }
      ],
      selected: 0 // 激活的选项
    }
  },
  computed: {

  },
  created () {

  },
  methods: {
    // 跳转搜索
    search (val) {
      this.$router.push({
        name: 'search',
        query: {
          value: val
        }
      })
    },
    // 选择分享
    shareSelect (option) {
      this.$toast(option.name)
      this.showShare = false
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.product-select-page{
  background: #FBFBFB;
  .van-grid{
    background: #fff;
    padding: 10px 0;
  }
  .product-select-tree{
    .van-sidebar .van-sidebar-item{
      font-size: 16px;
      color: #707070;
      &.van-sidebar-item--select{
        font-weight: bold;
        color: #3E3E3E;
      }
    }
    .van-tree-select__content{
      flex: 3;
      .product-select-tree-logo{
        padding: 0 13px;
        .van-image{
          border-radius: 5px;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
<style>
    .product-select-top .van-grid-item .van-grid-item__content{
      background-color: #FBFBFB;
    }
    .van-sidebar-item--select::before{
      background-color:#274A43;
    }
    .product-select-tree_inner .van-grid-item .van-grid-item__content{
      padding: 0;
    }
</style>
