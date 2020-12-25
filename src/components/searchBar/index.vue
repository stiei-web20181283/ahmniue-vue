<template>
  <div class="search-bar">
    <van-search v-model="value"
    :show-action="action"
    shape="round"
    placeholder="请输入搜索关键词"
    :background="background"
    @search="onSearch"
    @focus="focus">
      <template #left>
        <div class="left-icon">
          <van-icon :name="iconLeft" :color="color" @click="leftAction"/>
        </div>
      </template>
      <template #action>
        <div class="right-icon">
            <template v-if="text"><span @click="onSearch(value)"><slot></slot></span></template>
            <template v-else><van-icon :name="iconRight" :color="color" @click="rightAction"/></template>
        </div>
      </template>
    </van-search>
  </div>
</template>
<script>
export default {
  name: 'SearchBar',
  components: {

  },
  props: {
    // 搜索值
    searchValue: {
      type: String
    },
    // 图标
    iconRight: {
      type: String
    },
    iconLeft: {
      type: String
    },
    // 右文本
    text: {
      type: Boolean,
      default: false
    },
    action: {
      type: Boolean,
      default: false
    },
    // 背景色
    background: {
      type: String,
      default: '#fff'
    },
    // 图标颜色
    color: {
      type: String,
      default: '#000'
    },
    leftIconAction: {
      type: Function,
      default: () => {
        return Function
      }
    },
    rightIconAction: {
      type: Function,
      default: () => {
        return Function
      }
    },
    searchAction: {
      type: Function,
      default: () => {
        return Function
      }
    },
    focus: {
      type: Function,
      default: () => {
        return Function
      }
    }
  },
  data () {
    return {
      value: ''
    }
  },
  computed: {

  },
  created () {
    this.value = this.$route.query.value
  },
  methods: {
    onSearch (val) {
      if (!val) {
        this.$toast('请输入搜索内容')
      } else {
        this.$toast(val)
      }
      this.$emit('search', val)
    },
    leftAction () {
      this.$emit('left-action', this.leftIconAction())
    },
    rightAction () {
      this.$emit('right-action', this.rightIconAction())
    },
    focusAction () {
      this.$emit('focus', this.focus())
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .search-bar{
    width: 100%;
    .van-search{
      padding: .4375rem 0;
      .left-icon{
        display: flex;
        padding: 0 .8rem;
        .van-icon{
          font-size: 1.275rem;
        }
      }
      // .van-search__content{

      // }
      .van-search__action{
        padding: 0 .8rem;
        &:active{
          background-color: inherit;
        }
        .right-icon {
          display: flex;
          .van-icon{
            font-size: 1.275rem;
          }
        }
      }
    }
  }
</style>
