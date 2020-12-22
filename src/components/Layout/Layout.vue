<template>
  <div>
    <app-main></app-main>
    <nav-menu></nav-menu>
  </div>
</template>
<script>
import { NavMenu, AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    NavMenu,
    AppMain
  }
}
</script>
