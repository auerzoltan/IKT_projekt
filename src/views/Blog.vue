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
		{
                    title: "Csak a pontos szerszám hatékony",
                    author: "Kernel",
                    date: 1643804409,
                    content: `
                    Az elektronika iparágában elengedhetetlen a magas szintű precizitás. A különböző alkatrészek előállításához éppen ezért fontos, hogy minél korszerűbb technológiát alkalmazzanak. A vágószerszámok minősége nagyban hozzájárul a hatékonyság növeléséhez. A nyomtatott áramkörök gyártásához használt, akár törékeny PCB-k pontos elvágására alkalmas szerszám készítésével bízták meg a Sheldon Invest mérnökeit.<br>

Az elektronikai paneleket többféle módon készítik. A Sheldon Invest partnerénél olyan metódust alkalmaznak, amelyben 400 mm-szer 400 mm-es, vagy 450 mm-szer 450 mm-es, vagy 300 mm-szer 300 mm-es egységekben beültetik a különböző elektronikai alkatrészeket. A legnagyobb kihívást az jelentette, hogy ezen komponensek egy része kerámiát tartalmaz, ami miatt a hajlításuk nehezen kivitelezhető.<br>

A panelezés során több PCB-t rendeznek olyan alapfelületre, amely a szabványos feldolgozógépbe illeszkedik. A tömbösített megoldással több, azonos vagy akár különböző méretű és formájú táblával dolgoznak. A módszer előnye, hogy lényegesen gyorsabb, valamint kevésbé költséges.<br>

„Az alkatrészek merevsége miatt olyan megközelítést kellett alkalmaznunk, amelyet más gyártók nem voltak képesek teljesíteni” – részletezi Rigó Zoltán, a Sheldon Invest Kft. SUA menedzsere. „Amikor egy elektronikai panelt 80 mm távolságban megtámasztunk, majd 1 mm-nyit lenyomjuk, az az 1000 microstrain – ami az anyag megnyúlását hivatott kimutatni – csavaróerő. A mai szabályozások a 250-300 microstrain értéket írják elő, ami azt jelenti, hogy 0,2 milliméter lehet az alkatrész hajlítása a de-panelizáció során. Egy 400 mm-szer 400 mm méretű lapon akár száz darab lyukasztótüske is elhelyezkedhet, a vágás során pedig csupán 0,2 mm lehet a hajlása.”<br>

A Sheldon Invest feladata az volt, hogy kitalálja azt a technológiát, amellyel képesek ilyen paraméterek ismeretében is gyártani. Az általuk előállított szerszámmal elérhető a 200 microstrain, amely jelentősen a megadott értéken belül található. Ezt a lényeges különbséget annak köszönhetik, hogy a pontosság, a merőlegesség és a síklapúság kritériumait magas szinten képesek teljesíteni. A sorjázás és az élletörés pontos elvégzésével olyan szerszámot tudott biztosítani a Sheldon Invest, amely minden kritériumnak megfelelt.<br>

A vágószerszámok piacán rengeteg alacsonyabb minőségű termék található, ami miatt a gyártó vállalatoknak nehéz megtalálnia a legmegfelelőbb partnert. A Sheldon Invest progresszív filozófiájának köszönhetően a tökéletes szerszámot használhatja ügyfelük, ami jelentős hatékonyságnövekedést eredményez.<br>
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
