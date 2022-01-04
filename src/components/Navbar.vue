<template>
  <div id="nav">
    <router-link to="/">Főoldal</router-link> |
    <router-link to="/festekek">Festékek</router-link> |
    <router-link to="/faanyagok">Faanyagok</router-link> |
    <router-link to="/szerszamkatalogus">Szerszámkatalógus</router-link> |
    <router-link to="/rolunk">Rólunk</router-link> |
    <router-link to="/blog">Blog</router-link>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

/*@Options({
  props: {
    msg: String
  }
})*/
export default class Navbar extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
