<template>
  <div>
    <search-bar icon-left="arrow-left" background="#ccc" color="#000" action text @search="search"
    @left-action="goBack">搜索</search-bar>
  </div>
</template>
<script>
import SearchBar from '@/components/searchBar'
export default {
  name: 'searchPage',
  components: {
    SearchBar
  },
  props: {

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
    goBack () {
      history.go(-1)
    },
    search (val) {
      this.value = val
    }
  }
}
</script>
