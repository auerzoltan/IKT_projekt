<template>
    <main class="rolunk">
        <div class="dev" v-for="dev in devs" :key="dev">
            <img class="dev:pfp" :src="dev.pfp" />
            <div class="dev:content">
                <span class="dev:name">{{ dev.name }}</span>
                <span class="dev:desc">{{ dev.desc }}</span>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
div.dev {
    display: flex;

    .dev\:pfp {
        width: 30%;
		box-sizing: border-box;
		padding: 10px;
    }

    .dev\:content {
		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;

        .dev\:name {
			font-size: 4vw;
			text-decoration: underline;
			font-weight: 500;
        }

        .dev\:desc {
			font-size: 2vw;
        }
    }
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    data() {
        return {
            devs: [
                {
                    name: "Zoltán",
                    desc: `Ez a weboldal egy projektmunka eredménye, melynek témája a barkácsolás. Ennek a Weblapnak én csináltam a HTML részét. Remélem tetszik az oldal, habár Kernel is nagyon sokat tett hozzá hogy úgy nézzen ki az oldal ahogy jelenlegi állapotában látják.`,
                    pfp: "https://satella.xyz/ikt/assets/zoli.png"
                },
                {
                    name: "Kernel",
                    desc: `Kernel egy programozó. Kernel szeret programozni. Kernel a palacsintát is szereti. Kernel egy ember. Valószinűleg. Kérem tanár úr ne vonjon le ezért egy jegyet.`,
                    pfp: "https://satella.xyz/ikt/assets/kernel.jpg",
                },
            ],
        };
    },
})
export default class Rolunk extends Vue {}
</script>
