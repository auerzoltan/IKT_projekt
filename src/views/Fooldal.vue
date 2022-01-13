<template>
  <main class="fooldal">
    <h1>Tölgyfa</h1>

    <section id="container">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/P%C3%A9terhida%2C_%C3%B3ri%C3%A1si_t%C3%B6lgyfa.jpg" alt="">
      <div>
        <p>A tölgy vagy tölgyfa (Quercus) a bükkfafélék (Fagaceae) család nemzetsége
      mintegy ötszáz fajjal. Rendszertani nevét a kelta 'Quer' = szép és 'cuez'
      = fa szavakból eredeztetik.</p>
      <p>Az egyes tölgyfajok az eocén időszak közepe után kezdtek kialakulni,
      amikor a kontinensvándorlás, majd az éghajlat jelentős átalakulásai (a
      jégkorszak eljegesedései és interglaciálisai) jelentősen átalakították a
      korábbi élőhelyeket, és elkezdődött a különböző ökológiai fülkéket
      elfoglaló tölgypopulációk alkalmazkodása és genetikai sodródása. A
      kialakuló fajok géncseréje mindvégig folyamatos volt, amit jól mutat, hogy
      számos faj máig eredményesen keresztezhető.</p>
      </div>
    </section>

    <p>
      Afrikában csak az északi részen terem néhány mediterrán faj. Ausztráliában
      egyáltalán nem találni, de Új-Guineán szórványosan előfordul.
      Dél-Amerikában egy faja él.
    </p>

    <p>
      Magyarországon különböző fajai (főleg a kocsánytalan tölgy és a kocsányos
      tölgy) az erdős puszta öv, a dombságok, valamint 600 m alatt (és a déli
      lejtőkön) a hegyvidékek meghatározó fái – változatos erdőtársulásokban.
    </p>

    <p> A kocsányos és a kocsánytalan tölgy anyaga szemre nagyon hasonlít egymásra, de a kocsánytalan tölgy átlagban kissé sűrűbb, keményebb, durvább rostú. A szíjács keskeny, sárgásfehér, a geszt sárgásbarna. Gyűrűs likacsú fa. Nagy, kerek edényei jól láthatóak, a keresztmetszeten a korai pásztában az évgyűrűhatár mentén egy (kocsányos tölgy) vagy több (kocsánytalan tölgy) sorban helyezkednek el. A késői pászta felé gyors átmenettel szűkülnek, és sugárirányú sorokba rendeződnek, a kocsánytalan tölgynél néhol villásan elágazó mintázatot alkotnak. Különböző vastagságú bélsugarai vannak, ezek sárgás színűek, a nagyobbak elég feltűnőek. A bélsugarak a húrmetszeten sötét, akár 6 cm-es vékony hosszanti vonalak, a sugármetszeten szabálytalan alakú, különböző méretű fényes, barnás csíkok formájában tűnnek fel.</p>

    <table id="tablazat">
      <tr>
        <td><h4>Tulajdonság</h4></td>
		<td><h4>Értéke</h4></td>
      </tr>
      <tr>
        <td>Rönkhossz</td>
        <td>15-25 m</td>
      </tr>
      <tr>
        <td>Rönkátmérő</td>
        <td>1,0-2,5 m</td>
      </tr>
      <tr>
        <td>Sűrűség</td>
        <td>0,64 g/cm³</td>
      </tr>
      <tr>
        <td>Zsugorodás sugárirányban</td>
        <td>4,3%</td>
      </tr>
      <tr>
        <td>Húrirányban</td>
        <td>8,9%</td>
      </tr>
      <tr></tr>
      <tr>
        <td>Merevség</td>
        <td>13 200MPa</td>
      </tr>
      <tr>
        <td>Keménység rostra merőleges</td>
        <td>24,4 MPa</td>
      </tr>
    </table>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
//import Navbar from '@/components/Navbar.vue'; // @ is an alias to /src

@Options({
  /*components: {
    Navbar,
  },*/
})
export default class Fooldal extends Vue {}
</script>

<style lang="scss" scoped>

#container {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  img {
    width: 30%;
    border-radius: 15px;
    box-shadow: 3px 2px 11px 5px rgba(176,176,176,0.76);
  }

  div {
    padding: 15px;
    border-radius: 15px;
    box-shadow: 3px 2px 11px 5px rgba(176,176,176,0.76);
    width: 50%;
    background-color: white;
  }
}

h1 {
  text-align: center;
}

table, #tablazat {
  margin: 30px auto;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 80%;
}

#tablazat td, #tablazat th {
  border: 2px solid #ddd;
  padding: 20px;
}
#tablazat tr:nth-child(even){background-color: #f2f2f2;}
#tablazat tr:nth-child(odd){background-color: white;}
#tablazat tr {
	transition: .1s;
  opacity: .7;
}
#tablazat tr:hover {
	background-color: rgb(211, 211, 211);
	transition: .1s;
}
#tablazat th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
#lejjebb {
  margin-top: 20px;
  text-align: justify;
}
</style>

