<template>
    <main class="festekek">
        <div class="szuper_epik_festek_kontener">
			<festek
				v-for="festek in festekek"
				:key="festek"

				:colorName="festek.name"
				:manufacturer="festek.mf"
				:usage="festek.usage"
				:price="festek.price"
				:color="festek.color"
			/>
		</div>
    </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PaintBucket from "@/components/PaintBucket.vue";

@Options({
    data() {
        return {
            festekek: [
                {
                    name: "Égkék",
                    mf: "Hat szivárvány nyrt.",
                    usage: "Kültér",
                    price: "2500",
					color: "#40A0FF"
                },
                {
                    name: "Acélkék",
                    mf: "Hat szivárvány nyrt.",
                    usage: "Kültér",
                    price: "2500",
					color: "#9ABFCF"
                },
                {
                    name: "Tavasz zöld",
                    mf: "Hat szivárvány nyrt.",
                    usage: "Kültér",
                    price: "2500",
					color: "#00FA9A"
                },
                {
                    name: "Paradicsom",
                    mf: "Hat szivárvány nyrt.",
                    usage: "Kültér",
                    price: "2500",
					color: "#FF6347"
                },
                {
                    name: "Lazac",
                    mf: "Hat szivárvány nyrt.",
                    usage: "Kültér",
                    price: "2500",
					color: "#FA8072"
                },
                {
                    name: "Barna",
                    mf: "Hat szivárvány nyrt.",
                    usage: "Kültér",
                    price: "2500",
					color: "#A52A2A"
                },
                {
                    name: "Arany",
                    mf: "Hat szivárvány nyrt.",
                    usage: "Kültér",
                    price: "2500",
					color: "#FFD700"
                },
            ],
        };
    },
    components: {
        festek: PaintBucket,
    },
})
export default class Festekek extends Vue {}
</script>

<style lang="scss" scoped>
.festekek {
	div.szuper_epik_festek_kontener {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-gap: 1rem;
	}
}
</style>
