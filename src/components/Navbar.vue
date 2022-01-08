<template>
  <div id="nav">
	<p class="logo">UberKiralyShop</p>
    <router-link to="/">Főoldal</router-link>
    <router-link to="/festekek">Festékek</router-link>
    <router-link to="/faanyagok">Faanyagok</router-link>
    <router-link to="/szerszamkatalogus">Szerszámkatalógus</router-link>
    <router-link to="/rolunk">Rólunk</router-link>
    <router-link to="/blog">Blog</router-link>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

/*@Options({
  props: {
    msg: String
  }
})*/
export default class Navbar extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/global.scss';
#nav {
	z-index: 10;
	padding: 0 5px 0 5px;
	display: flex;
	background-color: $surface-variant;
	justify-content: flex-end;
	//gap: 5px;

	& > * {
		padding: 20px 15px;
		align-self: flex-end;
	}

	.logo {
		//margin: auto 0 auto 0;
		justify-self: flex-start;
		margin-right: auto;
		font-size: 18px;
		font-weight: 500;
		color: $primary-darken;
	}

	a {
		display: block;
		text-decoration: none;
		color: $primary;
		transition: .40s;
		&:hover {
			transition: .40s;
			transform: scale(1.1);
			background-color: darken($color: $surface-variant, $amount: 5);
		}
	}
}
</style>
