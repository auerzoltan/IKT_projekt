<template>
    <transition name="fade">
        <section class="overlay" v-if="overlayData != ''">
            <div class="overlay:content">
                <div class="overlay:topbar">
                    <button
                        class="overlay:button_back"
                        @click="overlayData = ''"
                    >
                        Vissza
                    </button>
                </div>
                <table>
                    <tr>
                        <th>Tulajdonság</th>
                        <th>Érték</th>
                    </tr>
                    <tr>
                        <td>Rönkhossz</td>
                        <td class="ta-ce">
                            {{ overlayFaanyag.data.ronkhossz }}
                        </td>
                    </tr>
                    <tr>
                        <td>Rönkátmérő</td>
                        <td class="ta-ce">
                            {{ overlayFaanyag.data.ronkatmero }}
                        </td>
                    </tr>
                    <tr>
                        <td>Sűrűség</td>
                        <td class="ta-ce">
                            {{ overlayFaanyag.data.suruseg }}
                        </td>
                    </tr>
                    <tr>
                        <td>Zsugorodás sugárirányban</td>
                        <td class="ta-ce">
                            {{ overlayFaanyag.data.zsug_sug }}
                        </td>
                    </tr>
                    <tr>
                        <td>Zsugorodás húrirányban</td>
                        <td class="ta-ce">
                            {{ overlayFaanyag.data.zsug_hur }}
                        </td>
                    </tr>
                    <tr>
                        <td>Merevség</td>
                        <td class="ta-ce">
                            {{ overlayFaanyag.data.merevseg }}
                        </td>
                    </tr>
                    <tr>
                        <td>Rostra merőleges keménység</td>
                        <td class="ta-ce">
                            {{ overlayFaanyag.data.kem_r_mer }}
                        </td>
                    </tr>
                    <tr>
                        <td>Rosttal párhuzamos keménység</td>
                        <td class="ta-ce">
                            {{ overlayFaanyag.data.kem_r_par }}
                        </td>
                    </tr>
                </table>
            </div>
        </section>
    </transition>
    <main class="faanyagok">
        <div
            class="faanyag"
            v-for="faanyag in faanyagok"
            :key="faanyag"
            @click="overlayData = faanyag.nev"
        >
            <img :src="faanyag.img" class="faanyag:img" />
            <span>{{ faanyag.nev }}</span>
        </div>
    </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    data() {
        return {
            faanyagok: [
                {
                    nev: "Tölgy",
                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/T%C3%B6lgyfa_hosszmetszete.jpg/250px-T%C3%B6lgyfa_hosszmetszete.jpg",
                    data: {
                        ronkhossz: "15-25",
                        ronkatmero: "1-2.5",
                        suruseg: "0.64",
                        zsug_sug: "4.3",
                        zsug_hur: "8.9",
                        merevseg: "13 200",
                        kem_r_mer: "24.4",
                        kem_r_par: "47.1",
                    },
                },
                {
                    nev: "Cseresznye",
                    img: "https://d1cvtajkxcatn5.cloudfront.net/cache-buster-16273434919/pim/05%20dekore/falco/holz/image-thumb__23663__decorfinderDetailWide/442.jpg",
                    data: {
                        ronkhossz: "6-10",
                        ronkatmero: "0.6-1",
                        suruseg: "0.57",
                        zsug_sug: "5",
                        zsug_hur: "8.7",
                        merevseg: "11 100",
                        kem_r_mer: "31",
                        kem_r_par: "59",
                    },
                },
                {
                    nev: "Feketefenyő",
                    img: "https://www.faanyag.hu/source/images/kep_feketefenyo.jpg",
                    data: {
                        ronkhossz: "15",
                        ronkatmero: "0.6-1",
                        suruseg: "0.57",
                        zsug_sug: "3.1",
                        zsug_hur: "4.6",
                        merevseg: "11 000",
                        kem_r_mer: "18",
                        kem_r_par: "37",
                    },
                },
                {
                    nev: "Mahagóni",
                    img: "https://lh3.googleusercontent.com/proxy/hAgLDT1lAmTFzX-pkLPREhjR0ell9P5h1qaz48Zy3trjmCq99s9fpWSD7535AqmoD4i9wrwZbnrRQ0cfK5lEJoVnhJMa0avo4OtT0wZJNGPOxbpT8OE8vrGauyiotJa5Tn8Pqc56fQ=s0-d",
                    data: {
                        ronkhossz: "20-30",
                        ronkatmero: "0.6-1.5",
                        suruseg: "0.52",
                        zsug_sug: "3.3",
                        zsug_hur: "4.6",
                        merevseg: "8.8",
                        kem_r_mer: "18",
                        kem_r_par: "36",
                    },
                },
                {
                    nev: "Tiszafa",
                    img: "https://www.faanyag.hu/source/images/kep_tiszafa.jpg",
                    data: {
                        ronkhossz: "-",
                        ronkatmero: "-",
                        suruseg: "-",
                        zsug_sug: "-",
                        zsug_hur: "-",
                        merevseg: "-",
                        kem_r_mer: "-",
                        kem_r_par: "-",
                    },
                },
            ],
            overlayData: "",
        };
    },
    computed: {
        overlayFaanyag() {
            return this.faanyagok.find((x) => x.nev == this.overlayData);
        },
    },
})
export default class Faanyagok extends Vue {}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

section.overlay {
    background-color: rgba($color: #000000, $alpha: 0.4);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /*width: 100%;
	height: 100%;*/

    .overlay\:content {
        display: flex;
        flex-direction: column;

        overflow-y: auto;
        background-color: white;
        width: 80%;
        height: 80%;
        border-radius: 10px;

        .overlay\:topbar {
            background-color: darken($color: #fff, $amount: 10);
            display: flex;
            flex-direction: row-reverse;
            padding: 10px;

            button.overlay\:button_back {
                cursor: pointer;

                border: gray 2px solid;
                border-radius: 5px;
                background-color: white;
                padding: 5px;
            }
        }

        table {
            align-self: center;
            max-width: 90%;
            width: 90%;
            flex-grow: 1;
        }
        tr:nth-child(even) {
            background-color: #dddddd;
        }
        .ta-ce {
            text-align: center;
        }
    }
}

main.faanyagok {
    display: flex;
    flex-direction: row;
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;


    .faanyag {
        text-align: center;
        display: flex;
        align-content: space-around;
        flex-direction: column;
        cursor: pointer;

        .faanyag\:img {
            border-radius: 20px;
            width: 12vw;
            height: 12vw;
        }
    }
}
</style>
