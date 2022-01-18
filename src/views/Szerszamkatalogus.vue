<template>
    <main class="szerszamkatalogus">
		<tool v-for="tool in tools" :key="tool" :img="tool.img" :name="tool.name" :price="tool.price" :desc="tool.desc"></tool>
	</main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Tool from "@/components/Tool.vue";

@Options({
    data() {
        return {
            tools: [
                {
                    img: "https://images.obi.hu/product/HU/1500x1500/396901_1.jpg",
                    name: "Furogep",
					price: "17 900",
					desc: `
						Kéthüvelyes gyorsbefogó fúrótokmány
						Csavarozás/fúrás/ütvefúrás funkciókapcsoló
						Pótfogantyú Anti-Slip funkcióval
					`
                },
				{
                    img: "https://webimg.praktiker.hu/_upload/images/praktiker_catalog/293437/600x600/293437_01_csavarhuzo-keszlet-4-reszes.png",
                    name: "Csavarhuzo",
					price: "4 200",
					desc: `
					Cushiongrip csavarhúzó készlet 4 részes. Philips: párhuzamos 6,5mm x 200mm, lapos 5mm x 100mm, Philips PH1 x 75mm, PH2 x 150mm.
					`
                },
				{
                    img: "https://s13emagst.akamaized.net/products/34092/34091572/images/res_75c83d637ed165c880c49bbd8c2ca928.jpg?width=450&height=450&hash=382C207F81E1F0D3E55A0A1DFE15D95B",
                    name: "100g DIN1041 kalapács fa nyéllel",
					price: "600",
					desc: `
					14 napos visszaküldési jog, Forgalmazza a(z): WORLD OF HAND TOOLS SRL
					`
                },
            ],
        };
    },
    components: {
        tool: Tool,
    },
})
export default class Szerszamkatalogus extends Vue {}
</script>

<style lang="scss" scoped>
.tool {
	margin-top: 20px;
}
</style>