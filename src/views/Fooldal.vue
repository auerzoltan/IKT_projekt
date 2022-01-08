<template>
  <div class="fooldal">
    szia ey it a fooldal
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
//import Navbar from '@/components/Navbar.vue'; // @ is an alias to /src

@Options({
  /*components: {
    Navbar,
  },*/
})
export default class Fooldal extends Vue {}
</script>
