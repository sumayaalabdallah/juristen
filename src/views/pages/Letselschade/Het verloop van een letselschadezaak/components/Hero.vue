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
        <h3
          class="display-4 fs-1 text-white creative-title aos"
          data-aos="fade-up"
          data-aos-delay="40"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Het verloop van een letselschadezaak
        </h3>
        <p
          class="text-white w-75 aos"
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Nadat u een ongeval bent overkomen wilt u de hiervoor
          verantwoordelijke partij aansprakelijk stellen. Een van onze juristen
          onderzoekt naar aanleiding van uw verhaal en de aangebrachte
          bewijsmiddelen de aansprakelijkheid. Onderstaand wordt stapsgewijs de
          verdere procedure in vogelvlucht omschreven.
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
    <b-container class="mb-6">
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
            <b-card-body class="pb-0">
              <h5 class="mb-3 text-dark text-opacity-30 creative-title fs-5">
                1. Een afweging maken
              </h5>
              <p>
                De inschatting van de kans om de wederpartij aansprakelijk te
                stellen, hangt af van verschillende factoren zoals de feiten en
                het beschikbare bewijsmateriaal. Als wij van mening zijn dat de
                claim weinig kans van slagen heeft, bespreken we dit altijd met
                u. Samen maken wij vervolgens een afweging. Wel begrijpen wij
                dat u uw recht wilt halen voor het onrecht dat u is aangedaan,
                hoe klein die kans soms ook mag zijn. Uw belang staat voor ons
                voorop, en wij begrijpen heel goed dat u erkenning en een
                vergoeding wilt ontvangen voor het leed dat u heeft ervaren. Het
                is daarbij wel van belang om te beseffen dat het starten van een
                letselschadezaak doorgaans (veel) energie van het slachtoffer
                vraagt.
              </p>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            style="background-color: #574640; position: relative; color: #fff"
            class="mb-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <h5 class="mb-3 text-dark text-opacity-30 creative-title fs-5">
                2. Aanbrengen aanwezige bewijsmiddelen
              </h5>
              <p style="color: #fff" class="pb-8">
                Voor het indienen het opstartten van een letselschade zaak is
                het van belang dat de juiste bewijsmiddelen voor handen zijn.
                Hierbij kan men denken aan een ingevuld schadeformulier, een
                opgemaakt proces-verbaal, getuigenverklaringen en
                beeldmateriaal. Dit is echter geen limitatieve opsomming en
                mogelijk heeft u alreeds voldoende bewijsmiddelen in handen.
                Mocht dit niet zo zijn dan kunnen bewijsstukken soms ook
                naderhand nog verkregen worden (een proces-verbaal moet vaak nog
                opgevraagd worden en hier kan enige tijd overheen gaan). Vaak
                helpt het feitelijk schetsen (dit kan zowel doormiddel van een
                verhaal als met een tekening of allebei) van het ongeval het
                slachtoffer ook om hier meer inzicht in te verkrijgen.
              </p>
              <img
                style="position: absolute; bottom: 0; left: 0"
                src="@/assets/images/banner-shape.png"
                alt="banner-shape"
              />
            </b-card-body>
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
            <b-card-body class="pb-0">
              <h5 class="mb-3 text-dark text-opacity-30 creative-title fs-5">
                3. Opstellen aansprakelijkstelling
              </h5>
              <p>
                Na het geven van de feitenschets en het aandragen van de
                bewijsmiddelen kan de aansprakelijkstelling opgesteld worden. In
                de aansprakelijkstelling zal de wederpartij (gedeeltelijk)
                aansprakelijk gesteld worden voor de schade die u heeft geleden
                alsmede dit gezien kan worden als de ‘start’ van de procedure.
                Uiteraard verzenden wij de aansprakelijkstelling pas nadat u
                deze heeft doorgenomen en hiervoor expliciet akkoord heeft
                gegeven.
              </p>
              <p>
                In een aansprakelijkstelling staan in ieder geval de volgende
                elementen:
              </p>
              <ul>
                <li>Gegevens van partijen;</li>
                <li>Datum en locatie van het ongeval;</li>
                <li>Omschrijving van de schade en het letsel;</li>
                <li>Grondslag voor aansprakelijkheid;</li>
                <li>Eis tot vergoeding en indicatie van de posten;</li>
                <li>Stuiting van de verjaring;</li>
                <li>Termijn voor reactie</li>
              </ul>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            style="background-color: #574640; position: relative; color: #fff"
            class="mb-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <h5 class="mb-3 text-dark text-opacity-30 creative-title fs-5">
                4. Reactie op de aansprakelijkstelling
              </h5>
              <p style="color: #fff">
                Vervolgens is het wachten op een reactie van de wederpartij.
                Deze inhoudelijke reactie kan direct volgen, maar in de praktijk
                zien wij helaas veel vaker dat dit tussen de vier weken tot drie
                maanden duurt. Wettelijk gezien heeft de verzekeraar namelijk
                een termijn van drie maanden om tot een inhoudelijke reactie te
                komen. Echter, hebben de behandelaren bij de verzekeraars het
                erg druk en kampen zij hierdoor met werkachterstanden. Uiteraard
                nemen wij in dit proces wel geregeld contact met de wederpartij
                op, zeker indien de reactie enige tijd op zich laat wachten.
              </p>
              <p style="color: #fff" class="pb-8">
                Uiteindelijk volgt een inhoudelijke reactie op de verzonden
                aansprakelijkstelling. Dit kan een erkenning, gedeeltelijke
                erkenning of een afwijzing inhouden. Bij een erkenning erkent de
                verzekeraar de aansprakelijkheid van haar verzekerde met
                betrekking tot de veroorzaking van het ongeval en kan in de
                regel de zaak (en daarmee de schade) inhoudelijk verder
                besproken worden. Is het zo dat de aansprakelijkheid
                gedeeltelijk erkend wordt dan zullen wij, afhankelijk van de
                feitelijke context, nog verweer voeren inhoudende het
                percentage. Wel kan in dat geval de zaak alreeds inhoudelijk
                besproken worden. Mocht het echter zo zijn dat de
                aansprakelijkheid afgewezen wordt zullen wij, afhankelijk van de
                reactie van de verzekeraar en de aanwezige bewijsmiddelen, nog
                verweer voeren. Afhankelijk van de reactie op dat verweer zullen
                wij gezamenlijk met u bepalen of er nog verdere mogelijkheden
                open staan of dat er nog feiten en omstandigheden boven tafel
                zijn gekomen waarmee de wederpartij de claim terecht heeft
                afgewezen.
              </p>
              <img
                style="position: absolute; bottom: 0; left: 0"
                src="@/assets/images/banner-shape.png"
                alt="banner-shape"
              />
            </b-card-body>
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
            <b-card-body class="pb-0">
              <h5 class="mb-3 text-dark text-opacity-30 creative-title fs-5">
                5. De verdere procedure
              </h5>
              <p>
                Afhankelijk van de ernst van het letsel en de duur van het
                letsel zal de zaak voortduren of alreeds afgewikkeld kunnen gaan
                worden. Als er nog geen medische eindsituatie is bereikt is het
                gebruikelijk dat de zaak nog niet afgewikkeld zal worden. Bij
                dergelijke zaken is het van belang te realiseren dat het
                gebruikelijk is dat de procedure relatief veel tijd in beslag
                zal nemen. Dit komt omdat veel informatie opgevraagd en
                aangeleverd moet worden, waarbij wij afhankelijk zijn van derde
                en de medische behandelingen die gevolgd worden. In veel zaken
                zal dan ook een medisch advies opgevraagd moeten worden, ook
                hierbij is het gebruikelijk dat daar enige tijd overheen gaat.
                Afhankelijk van het ontvangen medisch advies kan er nog een
                contra medisch advies opgevraagd worden wat uiteraard ook enige
                tijd in beslag zal nemen. Daarnaast kampen veel verzekeraars
                helaas met werkachterstanden waardoor reacties ook langer op
                zich laten wachten. Ook als wij hier actief naar informeren
                laten inhoudelijke reacties soms enige tijd op zich wachten.
              </p>
              <p>
                Indien een medische eindsituatie is bereikt en hiermee een zaak
                geregeld kan gaan worden, ofwel afgedaan kan worden doormiddel
                van een vaststellingsovereenkomst (VSO) zal dit over het
                algemeen sneller verlopen. Dit is in de regel het geval bij
                dossiers waarbij geen verdere medische informatie opgevraagd
                hoeft te worden en er overgegaan kan worden tot het
                ‘pragmatisch’ afwikkelen van een dossier.
              </p>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col lg="12">
          <b-card
            no-body
            style="background-color: #574640; position: relative; color: #fff"
            class="mb-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <h5 class="mb-3 text-dark text-opacity-30 creative-title fs-5">
                6. Eventuele gerechtelijke procedure
              </h5>
              <p style="color: #fff" class="pb-8">
                Uiteraard kan het nodig zijn om uiteindelijk naar de rechter te
                stappen. In de meeste gevallen lukt het echter om onderling
                (slachtoffer en verzekeraar) tot een oplossing te komen. Als
                alle feiten en omstandigheden duidelijk zijn en de verzekeraar
                vasthoudt aan haar standpunt, kan dit aanleiding geven om een
                gerechtelijke procedure te starten. Dit geldt ook als er geen
                erkenning van de aansprakelijkheid komt, terwijl de feiten en
                omstandigheden een andere situatie geven. Een gerechtelijke
                procedure kan alleen met toestemming van het slachtoffer worden
                gestart. Per dossier en situatie zullen wij hierin altijd een
                belangenafweging maken.
              </p>
              <img
                style="position: absolute; bottom: 0; left: 0"
                src="@/assets/images/banner-shape.png"
                alt="banner-shape"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <img src="@/assets/images/line.png" alt="line" />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Letselschade/Het verloop van een letselschadezaak HERO.jpg";

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
  font-size: 20px;
  color: #574640;
}
h5 {
  color: #ffa102 !important;
}
p {
  font-size: 20px;
  color: #574640;
}
.btns {
  margin-top: 17rem !important;
}
.btn-6 {
  border: none;
  padding: 1rem;
}
.title {
  margin-top: -50px !important;
}
@media (max-width: 1024px) {
  .btns {
    margin-top: 10rem !important;
  }
  .title {
    margin-top: -26px !important;
  }
  .creative-title {
    font-size: 30px !important;
  }
  p {
    font-size: 15px !important;
  }
}
@media (max-width: 768px) {
  .btns {
    margin-top: 10rem !important;
  }
  .title {
    margin-top: -50px !important;
  }
}

@media (max-width: 500px) {
  p,
  h3 {
    width: 100% !important;
  }
  .title {
    align-items: start !important;
    margin-top: -25% !important;
  }
  h3 {
    font-size: 14px;
  }
  p {
    font-size: 13px;
  }
  .btns {
    align-items: start !important;
    margin-top: 80% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
}
</style>
