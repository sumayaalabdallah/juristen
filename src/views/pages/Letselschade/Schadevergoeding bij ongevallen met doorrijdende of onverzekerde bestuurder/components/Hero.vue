<template>
  <section class="pt-0 pb-0">
    <b-card
      no-body
      class="bg-parallax h-500px h-md-600px h-xl-750px position-relative pb-0 mb-0"
      style="
        background-size: cover;
        background-position: center;
        clip-path: ellipse(80% 80% at 50% 0);
      "
      :style="{ backgroundImage: `url('${bg9Img}')` }"
    >
      <div class="bg-overlay bg-dark bg-opacity-50"></div>

      <div
        class="card-img-overlay d-flex align-items-center justify-content-center flex-column text-center z-index-2 title"
      >
        <h4
          class="display-4 fs-1 text-white creative-title aos"
          data-aos="fade-up"
          data-aos-delay="40"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Schadevergoeding bij ongevallen met doorrijdende of onverzekerde
          bestuurder
        </h4>
        <p
          class="text-white w-75 aos"
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Bij een aanrijding waarbij de veroorzaker is doorgereden of wanneer de
          andere partij niet verzekerd is, is het in veel gevallen nog steeds
          mogelijk om schade te verhalen. In zulke situaties wordt de schade
          afgehandeld door het Waarborgfonds Motorverkeer (WM) in plaats van de
          verzekeringsmaatschappij van de betrokken auto. Het is echter
          belangrijk om te beseffen dat er strenge eisen aan deze procedure zijn
          verbonden.
        </p>
      </div>
      <div
        class="card-img-overlay d-flex align-items-center justify-content-center text-center flex-wrap z-index-2 mt-9 flex-sm-fill btns"
      >
        <router-link
          class="btn btn-6 bg-primary text-white btn-lg btn-white icon-link icon-link-hover mb-0 px-3 aos"
          data-aos="fade-up"
          data-aos-delay="40"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
          :to="{ name: 'contact' }"
          @click="scrollToTop"
        >
          Neem gratis contact met ons op
        </router-link>
      </div>
    </b-card>
    <b-container class="mb-6 mt-0 pt-0">
      <b-row class="mt-0 d-flex justify-content-center">
        <b-col lg="12">
          <b-card
            no-body
            class="mb-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <h6>Componenten van de schadevergoeding</h6>
            <p>
              Geen enkel ongeval is hetzelfde, dus het is niet mogelijk om op
              voorhand te zeggen hoeveel compensatie u precies zult krijgen. In
              het aansprakelijkheidsrecht staat centraal dat u als slachtoffer
              zoveel mogelijk in de positie teruggebracht moet worden zoals deze
              was vóór het ongeval. Hoe de verzekeraar dit in de praktijk
              aanpakt, verschilt per verzekeraar. Helaas is het slachtoffer vaak
              afhankelijk van de verzekeraar die de veroorzaker van het ongeval
              heeft afgesloten.
            </p>
          </b-card>
        </b-col>

        <b-col lg="12">
          <b-card
            no-body
            style="
              background-color: #574640;
              position: relative;
              color: #fff;
              padding: 10px;
            "
            class="mb-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <p style="color: #fff" class="pb-7">
              Wij van S&A Juristen willen allereerst zorgen dat onze cliënten op
              medisch gebied zoveel mogelijk de kans krijgen om volledig te
              herstellen. Daarnaast is het bekend dat een financiële compensatie
              voor de geleden schade ook een belangrijke component is. Ondanks
              dat in veel gevallen de uiteindelijke vergoeding niet altijd
              afdoet aan het geleden leed, streven wij er wel naar dat onze
              cliënten krijgen waar zij wettelijk recht op hebben.
            </p>
            <img
              style="position: absolute; bottom: 0; left: 0"
              src="@/assets/images/banner-shape.png"
              alt="banner-shape"
            />
          </b-card>
        </b-col>

        <b-col lg="12">
          <b-card
            no-body
            class="mb-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <p>
              De totale schadevergoeding bestaat uit verschillende posten,
              waaronder:
            </p>
            <ul>
              <li>
                <span>Medische kosten:</span> Behandelingen bij bijvoorbeeld
                fysiotherapeuten, chirurgen of andere zorgverleners.
              </li>
              <li>
                <span>Verlies van verdienvermogen:</span> Het verschil in
                inkomsten vergeleken met de situatie vóór het ongeval.
              </li>
              <li>
                <span> Materiële schade:</span> Schade aan persoonlijke
                bezittingen, zoals beschadigde goederen, en kosten voor
                huishoudelijke hulp.
              </li>
              <li>
                <span>Reiskosten:</span> Reis- en parkeerkosten die zijn gemaakt
                ten gevolge van het ongeval, bijvoorbeeld voor het bijwonen van
                behandelingen.
              </li>
              <li>
                <span>Immateriële schade:</span> Dit betreft schade die moeilijk
                in geld uit te drukken is, zoals pijn en lijden. Smartengeld is
                een specifieke vergoeding voor het geleden leed en verdriet.
              </li>
            </ul>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            style="
              background-color: #574640;
              position: relative;
              color: #fff;
              padding: 10px;
            "
            class="mb-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <p style="color: #fff" class="pb-7">
              Waar de ene persoon een hoog bedrag terugkrijgt voor de medische
              kosten die hij heeft moeten maken (denk hierbij bijvoorbeeld aan
              behandelingen bij de fysiotherapeut of een chiropractor), kan het
              zijn dat een andere persoon daar minimaal gebruik van maakt. Een
              groot verschil maakt het bijvoorbeeld ook wanneer iemand in
              loondienst werkt. Een werkgever is namelijk wettelijk verplicht om
              bij ziekte minimaal 70% van het laatstverdiende loon door te
              betalen. Sommige werkgevers betalen in de eerste periode zelfs een
              hoger percentage. Bij een zzp’er is dit anders: er zal alleen
              sprake zijn van doorbetaling wanneer hiervoor een verzekering is
              afgesloten, in de praktijk komt dit weinig voor. Onder de streep
              lijkt het dan of iemand een veel hogere vergoeding heeft
              ontvangen, maar wanneer de feitelijke bedragen naast elkaar worden
              gelegd, blijkt dit vaak niet het geval. Het is belangrijk om te
              beseffen dat men dan 'appels met peren' vergelijkt.
            </p>
            <img
              style="position: absolute; bottom: 0; left: 0"
              src="@/assets/images/banner-shape.png"
              alt="banner-shape"
            />
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            class="mb-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <p>
              Als stelregel voor de totale schadevergoeding kunt u de gemaakte
              kosten en de verloren 'inkomsten' (die aantoonbaar gemaakt kunnen
              worden) bij elkaar optellen. Daarnaast heeft u mogelijk recht op
              een aantal posten die door middel van richtlijnen worden bepaald.
              En als laatste heeft u recht op smartengeld; dit is een vergoeding
              voor het geleden leed, het verdriet en de pijn die het ongeval
              heeft veroorzaakt. Dit gaat om gevoelens die men eigenlijk niet in
              geld kan uitdrukken. Om hier toch bedragen aan te kunnen
              verbinden, wordt onder andere gebruik gemaakt van jurisprudentie
              en kijkt men naar vergelijkbare zaken. Hierbij moet echter wel de
              kanttekening worden geplaatst dat de bedragen die in Nederland
              worden toegekend, niet te vergelijken zijn met die in landen zoals
              de Verenigde Staten, waar smartengeld vaak om astronomische
              bedragen gaat.
            </p>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            style="
              background-color: #574640;
              position: relative;
              color: #fff;
              padding: 10px;
            "
            class="mb-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <p style="color: #fff" class="pb-7">
              Uiteindelijk zou men dus eigenlijk alleen het uitbetaalde bedrag
              aan smartengeld enigszins kunnen vergelijken. Echter, zelfs dan
              blijven er grote verschillen aanwezig, waardoor een blinde
              vergelijking nog steeds niet mogelijk is. Het is cruciaal om
              rekening te houden met de unieke omstandigheden van elke casus.
            </p>
            <img
              style="position: absolute; bottom: 0; left: 0"
              src="@/assets/images/banner-shape.png"
              alt="banner-shape"
            />
          </b-card>
        </b-col>
        <img src="@/assets/images/line.png" alt="line" />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Letselschade/Schadevergoeding bij ongevallen met doorrijdende of onverzekerde HERO.jpg";

import { onMounted } from "vue";
import { jarallax } from "jarallax";
import AOS from "aos";
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
onMounted(() => {
  jarallax(document.querySelectorAll(".bg-parallax"), {
    speed: 0.4,
  });
  AOS.init({ once: true });
});
</script>
<style scoped>
ul li {
  font-size: 18px;
  color: #574640;
}
h6 {
  color: #ffa102;
  font-size: 25px;
}
.creative-title {
  font-size: 35px !important;
  margin-bottom: 15px;
}
p {
  font-size: 20px;
  color: #574640;
}
.btns {
  margin-top: 16rem !important;
}
.btn-6 {
  border: none;
  padding: 1rem;
}
.title {
  margin-top: -70px !important;
}
@media (max-width: 1366px) {
  .btns {
    margin-top: 15rem !important;
  }
  .title {
    margin-top: -100px !important;
  }
  .creative-title {
    font-size: 30px !important;
  }
}
@media (max-width: 820px) {
  .btns {
    margin-top: 14rem !important;
  }
  p {
    font-size: 12px !important;
  }
  .title {
    margin-top: -50px !important;
  }
}
@media (max-width: 430px) {
  p,
  h4 {
    width: 100% !important;
  }
  .title {
    align-items: start !important;
    margin-top: -25% !important;
  }
  .creative-title {
    font-size: 20px !important;
  }
  p {
    font-size: 12px;
  }
  .btns {
    align-items: start !important;
    margin-top: 66% !important;
  }
  .btn-6 {
    font-size: 11px !important;
  }
}
@media (max-width: 414px) {
  .btns {
    align-items: start !important;
    margin-top: 72% !important;
  }
}
@media (max-width: 390px) {
  .btns {
    align-items: start !important;
    margin-top: 76% !important;
  }
}
@media (max-width: 375px) {
  .btns {
    align-items: start !important;
    margin-top: 80% !important;
  }
}
</style>
