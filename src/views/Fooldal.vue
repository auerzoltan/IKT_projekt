<template>
    <main class="fooldal">
        <span class="title">UberKiralyShop</span>
        <span>A legjobb magyar nem mukodokepes webshop!
        Ez a weboldal egy projektmunka eredménye, melyet közösen kellett elkészíteni egy megadott időre. A téma egy barkácsüzlet volt.</span>
        
        <section>
            <div>
                <span>• Szeretnél jó minőségű festékeket látni? Megvenni nem tudod őket, de legalább szép az oldal! Kattints <router-link to="/festekek">ide</router-link> az oldal meglátogatásához!</span>
            </div>
            <div>
                <span>• Akarod látni a legfontosabb barkácsoláshoz szükséges faanyagi tulajdonságokat pár fával kapcsolatban? <router-link to="/faanyagok">Itt</router-link> találhatod meg őket!</span>
            </div>
            <div>
                <span>• Nincsenek megfelelő kellékek otthon a barkácsoláshoz? <router-link to="/szerszamkatalogus">Itt</router-link> megtalálhatsz rengeteg dolgod amire szükséged lehet! </span>
            </div>
            <div>
                <span>• Szeretnél többet tudni az oldal készítőiről? <router-link to="/rolunk">Erre</router-link> kattintva megtudhatsz többet róluk!</span>
            </div>
        </section>
        
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

    section {
        margin-top: 25px;
        border: 2px black solid;
        border-radius: 10px;

        div {
            margin: 20px;
        }
    }

    
}
</style>
