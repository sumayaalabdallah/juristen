<template>
  <section class="pt-0 pb-0">
    <b-card
      no-body
      class="bg-parallax h-600px h-md-600px h-xl-750px position-relative pb-0 mb-0"
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
          Ongeval op de werkvloer
        </h3>
        <p
          class="text-white w-75 aos text"
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Een veilige werkomgeving is een basisrecht, maar helaas kunnen
          arbeidsongevallen toch plaatsvinden. Dit kan variëren van licht letsel
          tot ernstig letsel, veroorzaakt door bijvoorbeeld een defecte machine
          of een gladde werkvloer. Werkgevers hebben een wettelijke zorgplicht
          om werknemers te beschermen tegen risico’s en zijn in veel gevallen
          aansprakelijk bij letselschade. Alleen in bepaalde situaties kan deze
          aansprakelijkheid worden uitgesloten. Na een arbeidsongeval is het dan
          ook essentieel om uw rechten te waarborgen en bewijs te
          verzamelen/veilig te stellen.
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
      <b-row class="mt-0 pt-0">
        <b-col lg="8">
          <b-row
            class="mt-0 pt-0 d-flex align-items-center justify-content-center"
          >
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
                  <span class="dropcap bg-transparent rounded px-2 mb-1"
                    >E</span
                  >
                  en arbeids- of bedrijfsongeval is een gebeurtenis waarbij
                  letsel is opgelopen en welke plaats heeft gevonden tijdens
                  werktijd. Dit kan ook tijdens een pauze of onderweg gebeurd
                  zijn. Echter, als het ongeval plaatsvond in de tijd dat u van
                  of naar uw werk reisde, wordt dit in de meeste gevallen niet
                  beschouwd als een bedrijfsongeval. Dit komt omdat het ongeval
                  dan buiten werktijd plaatsvond. In dat geval kunt u mogelijk
                  de verzekeraar van de andere auto aansprakelijk stellen
                  <router-link
                    @click="scrollToTop"
                    :to="{ name: 'auto-ongeluk' }"
                    style="color: #17a2b8"
                    >‘auto-ongeval’</router-link
                  >
                  . Uiteraard zijn er uitzonderingen en in bepaalde situaties
                  kan de werkgever wel aansprakelijk gesteld worden.
                </p>
              </b-card>
            </b-col>
            <b-col lg="12">
              <b-card
                style="
                  background-color: #574640;
                  position: relative;
                  color: #fff;
                  padding: 10px;
                "
                no-body
                class="mb-3 aos"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <b-card-body class="pb-0">
                  <p style="color: #fff" class="pb-6">
                    De aansprakelijkheid voor arbeidsongevallen is een
                    schuldaansprakelijkheid voor de werkgever. De werkgever is
                    namelijk volgens de wet verplicht om ‘zodanige maatregelen
                    te treffen en aanwijzingen te verstrekken’ om te voorkomen
                    dat zijn werknemer schade lijdt in de uitoefening van zijn
                    werkzaamheden. In veel gevallen geldt deze
                    schuldaansprakelijkheid ook ten aanzien van zzp'ers, die hun
                    opdrachtgever aansprakelijk kunnen stellen voor opgelopen
                    letselschade.
                  </p>
                  <img
                    style="position: absolute; bottom: 0; left: 0"
                    src="@/assets/images/banner-shape.png"
                    alt="banner-shape"
                  />
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="4">
          <img
            class="mb-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            style="border-radius: 3px"
            src="@/assets/images/Side images/حالات19.jpg"
            alt="Side-image"
          />
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
            <h6 class="creative-title">
              Wanneer is de werkgever aansprakelijk?
            </h6>
            <p>
              Werkgevers hebben een wettelijke zorgplicht. Ze moeten maatregelen
              treffen en aanwijzingen geven om te voorkomen dat werknemers
              schade lijden tijdens hun werkzaamheden. Deze zorgplicht gaat ver
              en omvat:
            </p>
            <ul>
              <li>Het bieden van een veilige werkomgeving;</li>
              <li>Het geven van duidelijke instructies over veilig werken;</li>
              <li>Toezicht houden op naleving van veiligheidsvoorschriften.</li>
            </ul>
            <p>
              In de praktijk kan een werkgever alleen aan deze zorgplicht
              voldoen als hij kan aantonen dat hij alle redelijke
              voorzorgsmaatregelen heeft genomen. Het enkel waarschuwen voor
              risico’s is daarbij niet voldoende; de werkgever moet actief
              werken aan het beperken van gevaarlijke situaties.
            </p>
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
            <h6 class="creative-title">Uitzonderingen en roekeloosheid</h6>
            <p>
              Hoewel de zorgplicht van de werkgever zwaar weegt, zijn er
              uitzonderingen. Als een werknemer bewust roekeloos handelt, kan de
              werkgever onder omstandigheden vrijgesteld zijn van
              aansprakelijkheid. De rechtspraak stelt hiervoor echter strenge
              eisen, waardoor deze uitzondering zelden wordt toegekend.
            </p>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            style="background-color: #574640; color: #fff; padding: 10px"
            class="aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <h6 class="creative-title">Huis-, tuin- en keukenongevallen</h6>
              <p style="color: #fff" class="pb-6">
                Wat nog wel voor problemen kan zorgen bij het vaststellen van de
                aansprakelijkheid zijn huis-, tuin- en keukenongevallen. Dit
                zijn onvoorzienbare ongevallen die plaatsvinden door een
                ‘alledaags gevaar’, hierbij kan gedacht worden aan struikelen of
                het in de hand snijden met een mes. Anders gezegd zou het
                ongeval de werknemer ook in zijn privésfeer hebben kunnen
                overkomen. Wanneer sprake is van een dergelijk ongeval is vaak
                niet direct duidelijk en soms is Wat nog wel voor problemen kan
                zorgen bij het vaststellen van de aansprakelijkheid zijn huis-,
                tuin- en keukenongevallen. Dit zijn onvoorzienbare ongevallen
                die plaatsvinden door een ‘alledaags gevaar’, hierbij kan
                gedacht worden aan struikelen of het in de hand snijden met een
                mes. Anders gezegd zou het ongeval de werknemer ook in zijn
                privésfeer hebben kunnen overkomen. Wanneer sprake is van een
                dergelijk ongeval is vaak niet direct duidelijk en soms is de
                lijn tussen een bedrijfsongeval of een huis-, tuin- en
                keukenongeval erg dun.
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
            <h6 class="creative-title">Wat te doen na een arbeidsongeval?</h6>
            <p>
              Als u een arbeidsongeval overkomt, is het belangrijk om snel te
              handelen. Volg deze stappen om uw rechten te waarborgen:
            </p>
            <b-row class="mt-3">
              <b-col
                lg="4"
                cols="12"
                v-for="(blog, idx) in arbeidsongeval"
                :key="idx"
              >
                <b-card
                  class="text-center my-4 aos dev"
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
                  style="
                    background-color: #574640;
                    height: 175px;
                    width: 100%;
                    border-radius: 25px;
                  "
                >
                  <div
                    class="position-absolute top-0 start-50 translate-middle bg-primary text-dark rounded-circle d-flex align-items-center justify-content-center"
                    style="
                      width: 80px;
                      height: 80px;
                      font-size: 25px;
                      font-weight: bold;
                      border: 3px solid #574640;
                    "
                  >
                    {{ idx + 1 }}
                  </div>
                  <p class="p-2 pt-4 text-white">{{ blog.description }}</p>
                </b-card>
              </b-col>
            </b-row>
            <h6 class="creative-title">Voorbeelden van arbeidsongevallen</h6>
            <p>
              Werk gerelateerde ongevallen kunnen variëren van relatief klein
              letsel tot ernstige situaties. Enkele veelvoorkomende voorbeelden
              zijn:
            </p>
            <ul>
              <li>Letsel door een defecte machine of gereedschap;</li>
              <li>Uitglijden op een gladde werkvloer zonder waarschuwing;</li>
              <li>
                Burn-outklachten door overmatige werkdruk die niet tijdig is
                aangepakt.
              </li>
            </ul>
            <p>
              Elk van deze situaties vereist een zorgvuldige beoordeling om te
              bepalen of de werkgever aansprakelijk is. Dit is dan ook de reden
              dat de verzekeraar in de praktijk veelal een toedracht onderzoek
              zal laten uitvoeren.
            </p>

            <h6 class="creative-title">Schadevergoeding en uw rechten</h6>
            <p>
              Een arbeids- of bedrijfsongeval is een incident dat plaatsvindt
              tijdens de werkuren of tijdens de pauze op het werk, waarbij
              letsel opgelopen wordt. Dit letsel kan van lichte maar ook van
              zware aard zijn en het is van belang dat u zich gehoord en gezien
              voelt. Uw klachten moeten serieus genomen worden en uw herstel
              staat voorop. Een schadevergoeding na een arbeidsongeval is dan
              ook bedoeld om de geleden schade te compenseren, waaronder
              medische kosten, inkomensverlies en eventuele aanvullende
              uitgaven.
            </p>
            <p>
              Het inschakelen van een letselschadespecialist voor het verhalen
              van de schade moet u dan ook niet zien als een aanval tegen de
              werkgever. De jurist of advocaat die u bijstaat kunt u zien als
              een gespecialiseerde partij die voor u in gesprek gaat met de
              verzekeraar van uw werkgever. Het is vervelend voor uw werkgever
              dat hij hoogstwaarschijnlijk zijn eigenrisico moet aanspreken,
              maar het nog vele malen vervelender voor u dat u letsel heeft
              opgelopen tijdens uw werk.
            </p>
            <p>
              De verantwoordelijkheid van de werkgever ligt daarbij in zijn
              zorgplicht: ervoor zorgen dat arbeid zo veilig mogelijk kan worden
              uitgevoerd. Wanneer hierin wordt tekortgeschoten, kunt u hem
              aansprakelijk stellen voor de gevolgen van het ongeval waardoor u
              schade heeft geleden. Het is daarom van groot belang om uw rechten
              serieus te nemen en de juiste stappen te zetten na een incident.
              Een letselschadespecialist kan u hierbij ondersteunen en ervoor
              zorgen dat u krijgt waar u recht op heeft.
            </p>
          </b-card>
        </b-col>
        <img src="@/assets/images/line.png" alt="line" />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Status/23- Ongeval op de werkvloer.jpg";
import { arbeidsongeval } from "@/views/pages/Overige Letselschade/data";

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
.text {
  font-size: 17.5px !important;
}
p,
ul li,
ol li {
  font-size: 20px;
  color: #574640;
}
h6 {
  color: #ffa102;
}

.btns {
  margin-top: 18rem !important;
}
.btn-6 {
  border: none;
  padding: 1rem;
}
@media (max-width: 1366px) {
  .btns {
    margin-top: 9rem !important;
  }
  .title {
    margin-top: -60px !important;
  }
  .creative-title {
    font-size: 35px !important;
  }
  .text {
    font-size: 15px !important;
  }
}
@media (max-width: 1180px) {
  .btns {
    margin-top: 12rem !important;
  }
  .text {
    font-size: 12px !important;
  }
}
@media (max-width: 430px) {
  p,
  h3 {
    width: 100% !important;
  }
  .title {
    align-items: start !important;
    margin-top: -20% !important;
  }
  h3 {
    font-size: 14px;
  }
  .text {
    font-size: 12px !important;
  }
  p {
    font-size: 13px;
  }
  .btns {
    align-items: start !important;
    margin-top: 87% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
}

@media (max-width: 414px) {
  .btns {
    align-items: start !important;
    margin-top: 90% !important;
  }
}
@media (max-width: 400px) {
  .btns {
    align-items: start !important;
    margin-top: 94% !important;
  }
}
@media (max-width: 390px) {
  .title {
    align-items: start !important;
    margin-top: -40% !important;
  }

  .btns {
    align-items: start !important;
    margin-top: 94% !important;
  }
}
</style>
