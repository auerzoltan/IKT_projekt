<template>
    <main class="blog">
		<blog-post v-for="post in posts" :key="post" :title="post.title" :author="post.author" :date="post.date" :content="post.content">

		</blog-post>
	</main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BlogPost from "@/components/BlogPost.vue";

@Options({
    data() {
        return {
            posts: [
		{
                    title: "Teszt",
                    author: "Kernel",
                    date: 1642483134,
                    content: `
                    Ezt amúgy vue componentekkel csináltam. Menő, ugye?
                `,
		},
		{
                    title: "Csak a pontos szerszám hatékony",
                    author: "Kernel",
                    date: 1643804409,
                    content: `
                    Az elektronika iparágában elengedhetetlen a magas szintű precizitás. A különböző alkatrészek előállításához éppen ezért fontos, hogy minél korszerűbb technológiát alkalmazzanak. A vágószerszámok minősége nagyban hozzájárul a hatékonyság növeléséhez. A nyomtatott áramkörök gyártásához használt, akár törékeny PCB-k pontos elvágására alkalmas szerszám készítésével bízták meg a Sheldon Invest mérnökeit.

Az elektronikai paneleket többféle módon készítik. A Sheldon Invest partnerénél olyan metódust alkalmaznak, amelyben 400 mm-szer 400 mm-es, vagy 450 mm-szer 450 mm-es, vagy 300 mm-szer 300 mm-es egységekben beültetik a különböző elektronikai alkatrészeket. A legnagyobb kihívást az jelentette, hogy ezen komponensek egy része kerámiát tartalmaz, ami miatt a hajlításuk nehezen kivitelezhető.

A panelezés során több PCB-t rendeznek olyan alapfelületre, amely a szabványos feldolgozógépbe illeszkedik. A tömbösített megoldással több, azonos vagy akár különböző méretű és formájú táblával dolgoznak. A módszer előnye, hogy lényegesen gyorsabb, valamint kevésbé költséges.

„Az alkatrészek merevsége miatt olyan megközelítést kellett alkalmaznunk, amelyet más gyártók nem voltak képesek teljesíteni” – részletezi Rigó Zoltán, a Sheldon Invest Kft. SUA menedzsere. „Amikor egy elektronikai panelt 80 mm távolságban megtámasztunk, majd 1 mm-nyit lenyomjuk, az az 1000 microstrain – ami az anyag megnyúlását hivatott kimutatni – csavaróerő. A mai szabályozások a 250-300 microstrain értéket írják elő, ami azt jelenti, hogy 0,2 milliméter lehet az alkatrész hajlítása a de-panelizáció során. Egy 400 mm-szer 400 mm méretű lapon akár száz darab lyukasztótüske is elhelyezkedhet, a vágás során pedig csupán 0,2 mm lehet a hajlása.”

A Sheldon Invest feladata az volt, hogy kitalálja azt a technológiát, amellyel képesek ilyen paraméterek ismeretében is gyártani. Az általuk előállított szerszámmal elérhető a 200 microstrain, amely jelentősen a megadott értéken belül található. Ezt a lényeges különbséget annak köszönhetik, hogy a pontosság, a merőlegesség és a síklapúság kritériumait magas szinten képesek teljesíteni. A sorjázás és az élletörés pontos elvégzésével olyan szerszámot tudott biztosítani a Sheldon Invest, amely minden kritériumnak megfelelt.

A vágószerszámok piacán rengeteg alacsonyabb minőségű termék található, ami miatt a gyártó vállalatoknak nehéz megtalálnia a legmegfelelőbb partnert. A Sheldon Invest progresszív filozófiájának köszönhetően a tökéletes szerszámot használhatja ügyfelük, ami jelentős hatékonyságnövekedést eredményez.
                `,
                },
		{
                    title: "Tippek a barkácsoláshoz!",
                    author: "Zoli",
                    date: 1643804409,
                    content: `Néhány apró barkácsolási tipp nagy mértékben megkönnyítheti és élvezhetőbbé teszi a munkát! Például tudta, hogy egy dugóhúzó segítségével könnyen eltávolíthatja a tipliket a falból? Vagy azt, hogy egy fésűvel megkönnyítheti a szögek beverését nehezen elérhető helyekre? Alább láthatja a összes praktikus barkácsolási tippünk részletes listáját.

                    SZEGEK BEVERÉSE
                    • Elkerülheti ujjainak kockáztatását a kalapálás során, ha közben hajtűvel vagy gemkapoccsal tartja a szöget.

                    CSEPEGÉSMENTES FESTÉS
                    • Az ecset markolatának alsó részét tekerje körbe néhányszor papír ragasztószalaggal, így a festék nem csepeg a kezére, amikor magasban fest.

                    MEGLAZULT KALAPÁCSFEJ
                    • Tartós megoldás a meglazult kalapács- és baltafejek rögzítésére, ha egy nagy szöget félig bever a nyél felső részén, majd legörbíti azt. Így a fej nem tud lerepülni munka közben.

                    OLLÓ ÉLEZÉSE
                    • Eltompult az ollója? Megélezheti azt, ha néhányszor elvág vele egy darab finom csiszolópapírt. Ez könnyű és gyors módszer!

                    RÉGI FESTÉK ÚJRAHASZNOSÍTÁSA
                    • Van egy doboz régi festéke, amit fel akar használni? Először távolítsa el a felületéről a megszáradt réteget, és keverje el alaposan a festéket. Ha még mindig vannak hártyák vagy csomók a festékben, szűrje át egy régi nejlonharisnyán, és a festék olyan lesz, mint új korában!

                    MÁGNESES CSAVARHÚZÓ
                    • A mágneses csavarhúzó praktikus megoldás, ha nehezen hozzáférhető helyeken kell csavaroznia. Önállóan is megmágnesezheti egy csavarhúzó fejét, ha néhányszor végighúzza rajta egy mágnes egyik pólusát, azonos irányban. A mágnesezést eltávolíthatja, ha ugyanazt a pólust végighúzza rajta ellenkező irányban.

                    PORGYŰJTŐ LABDA
                    • Plafont akar fúrni úgy, hogy a por ne menjen a szemébe, vagy a fúrógép belsejébe? Vágjon félbe egy teniszlabdát és húzza a fúróra.

                    PONTOS KÖR FŰRÉSZELÉSE
                    • Ehhez használjon körvezetőt. Rögzítse egy szöggel a fűrészelni kívánt kör középpontjában. A szög forgástengelyként szolgál.

                    TÚL NAGYRA FÚRT LYUK KIJAVÍTÁSA
                    • Ha egy lyukat túl nagyra fúrt, például egy bútordarabban, az alábbi módon javíthatja ki: fúrja meg a lyukat 6 vagy 8 mm-esre. Ezután ragasszon egy megfelelő méretű fatiplit a lyukba. Hagyja megszáradni a ragasztót, és véső segítségével hozza a felülettel egy szintbe a fatipli külső végét. Ezután behajthatja a csavart erre a helyre.
                `,
                },
            ],
        };
    },
	components: {
		"blog-post": BlogPost
	}
})
export default class Blog extends Vue {}
</script>

<style lang="scss" scoped>
div.post {
	margin-bottom: 10px;
}
</style>
