<template>
    <main class="fooldal">
        <span class="title">UberKiralyShop</span>
        <span>A legjobb magyar nem mukodokepes webshop!</span>
    </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class Szerszamkatalogus extends Vue {}
</script>

<style lang="scss" scoped>
.fooldal {
    display: flex;
    flex-direction: column;
    text-align: center;

    .title {
        font-size: 40px;
    }
}
</style>
