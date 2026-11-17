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
          Het letsel
        </h3>
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
                    >D
                  </span>
                  oordat fietsers kwetsbaar zijn en de aanrijdingen zowel van
                  lichte als van zware aard kunnen zijn, is het letsel dat
                  daardoor opgelopen kan worden zeer divers. Bepaald letsel is
                  goed waarneembaar, dit wordt daarom ook wel ‘objectiveerbaar
                  letsel’ genoemd. Hierbij kan gedacht worden aan breuken en
                  wonden. Echter, er is ook letsel dat niet zichtbaar is, dit
                  wordt ‘niet-objectiveerbaar letsel’ genoemd. Dit letsel wordt
                  ervaren door het slachtoffer, maar medisch is het vaak
                  moeilijk vast te stellen en/of te verklaren. Hierbij kan
                  gedacht worden aan bijvoorbeeld een whiplash of andere
                  pijnklachten die niet direct zichtbaar zijn.
                </p>
              </b-card>
            </b-col>
            <b-col lg="12">
              <b-card
                style="
                  background-color: #574640;
                  position: relative;
                  color: #fff;
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
                    Het is daarom van belang om altijd zo snel mogelijk na het
                    ongeval door een arts gezien te worden en de klachten en het
                    ongeval te melden. Het kan namelijk ook voorkomen dat
                    bepaalde klachten zich pas enige tijd na het ongeval
                    openbaren.
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
            src="@/assets/images/Side images/حالات14.jpg"
            alt="side-image"
          />
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            class="aos mb-3"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <h6 class="creative-title">Letsels aan de onderste ledematen</h6>
            <ul>
              <li>
                <span>Enkelfracturen/blessures:</span> Breuken of blessures aan
                de enkel, vaak veroorzaakt door een verzwikte enkel of een val.
              </li>
              <li>
                <span>Heupblessures:</span> Heupfracturen of kneuzingen komen
                vaak voor, vooral bij oudere fietsers of bij het onverwacht
                vallen.
              </li>
              <li>
                <span>Knieblessures:</span> Verstijvingen,
                meniscusbeschadigingen of beschadigingen aan de ligamenten door
                een val of een oncontroleerbare beweging van de knie.
              </li>
              <li>
                <span> Beenblessures:</span> Botbreuken, kneuzingen of
                verrekkingen door een val of botsing met een object.
              </li>
              <li>
                <span>Scheenbeenblessures:</span> Fracturen of kneuzingen van
                het scheenbeen door een harde impact met de grond of een object.
              </li>
              <li>
                <span> Enkelverstuikingen:</span> Verstuikingen van de
                enkelbanden, vaak door een verkeerde draaiing van de voet of
                enkel tijdens de val.
              </li>
            </ul>
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
              <h6 class="creative-title">Letsels aan de bovenste ledematen</h6>
              <ul class="pb-8">
                <li style="color: #fff">
                  <span style="color: #fff">Armfracturen/blessures:</span>
                  Breuken van de arm, zoals elleboog- of polsbreuken, vaak
                  doordat de handen uitgestoken worden om de val te breken.
                </li>
                <li style="color: #fff">
                  <span style="color: #fff">Elleboogblessures: </span>
                  Verstijvingen, breuken of kneuzingen van de elleboog door de
                  impact bij de val.
                </li>
                <li style="color: #fff">
                  <span style="color: #fff">Vingerblessures: </span>Breuken,
                  dislocaties of kneuzingen van de vingers, bijvoorbeeld als
                  iemand zich probeert vast te houden of de handen gebruikt om
                  de val op te vangen.
                </li>
                <li style="color: #fff">
                  <span style="color: #fff">Handblessures:</span> Breuken,
                  verstuikingen of snijwonden aan de hand, vaak door het afweren
                  van de val.
                </li>
                <li style="color: #fff">
                  <span style="color: #fff">Polsblessures:</span>Breuken van de
                  polsbotten of verstuikingen door de handen uit te steken om de
                  val te breken.
                </li>
                <li style="color: #fff">
                  <span style="color: #fff">Schouderblessures:</span>
                  Schouderluxaties, rotator cuff blessures of botbreuken door de
                  impact op de schouder tijdens een val.
                </li>
                <li style="color: #fff">
                  <span style="color: #fff">Fracturen van de onderarm:</span>
                  Fracturen van de radius of ulna, vaak door het breken van de
                  val of de impact van een object.
                </li>
              </ul>
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
            <h6 class="creative-title">Letsels aan de romp</h6>
            <ul>
              <li>
                <span>Rugletsel:</span>
                Herhaaldelijke verstijving of blessures zoals een hernia,
                spierverrekkingen of wervelfracturen door een val of harde
                impact.
              </li>
              <li>
                <span>Nekblessures: </span>Whiplash, spierverrekkingen of
                wervelfracturen door een plotselinge draaiing of schok bij de
                val.
              </li>
              <li>
                <span>Schouderblessures: </span>Schouderluxaties of breuken bij
                de impact van de val of door het gebruiken van de schouder om de
                val af te weren.
              </li>
              <li>
                <span>Ribfracturen: </span>Breuken van de ribben door een val op
                de zij of een botsing met een object.
              </li>
              <li>
                <span>Spierblessures: </span>Verrekkingen of scheuringen van
                rug- of buikspieren door een plotselinge beweging of
                overbelasting tijdens de val.
              </li>
            </ul>
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
              <h6 class="creative-title">Psychische klachten</h6>
              <ul class="pb-8">
                <li style="color: #fff">
                  <span style="color: #fff">Angststoornissen: </span>
                  Angst, zoals rijangst of traumagerelateerde angst, kan
                  ontstaan na het ongeval.
                </li>
                <li style="color: #fff">
                  <span style="color: #fff"
                    >Posttraumatische stressstoornis (PTSS): </span
                  >Dit kan zich ontwikkelen na een ernstig letsel of traumatisch
                  incident, waarbij de herinneringen aan het ongeval steeds weer
                  naar boven komen.
                </li>
                <li style="color: #fff">
                  <span style="color: #fff">Depressie: </span>Langdurige pijn of
                  beperkingen door het ongeval kunnen leiden tot gevoelens van
                  verdriet en hopeloosheid.
                </li>
                <li style="color: #fff">
                  <span style="color: #fff">Angst en stress: </span>Angst over
                  langdurig herstel of zorgen over de toekomst kunnen psychische
                  klachten veroorzaken.
                </li>
                <li style="color: #fff">
                  <span style="color: #fff">Slaapproblemen: </span>Door de pijn
                  van het letsel of de psychische gevolgen van het ongeval
                  kunnen slaapproblemen optreden.
                </li>
                <li style="color: #fff">
                  <span style="color: #fff">Verlies van zelfvertrouwen: </span
                  >Het verlies van fysieke capaciteit of de angst voor een
                  herhaling van het ongeval kan het zelfvertrouwen van de
                  fietser verminderen.
                </li>
              </ul>
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
import bg9Img from "@/assets/images/Status/14- Het letsel.jpg";

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
p,
span,
li {
  font-size: 20px;
  color: #574640;
}
h6 {
  color: #ffa102;
}
span {
  font-weight: 800;
}
.btns {
  margin-top: 13rem !important;
}
.btn-6 {
  border: none;
  padding: 1rem;
}
@media (max-width: 1024px) {
  .btns {
    margin-top: 8rem !important;
  }
  .title {
    margin-top: -26px !important;
  }
  .creative-title {
    font-size: 30px !important;
  }
}
@media (max-width: 430px) {
  p,
  h3 {
    width: 100% !important;
  }
  .title {
    align-items: start !important;
    margin-top: 0% !important;
  }
  h3 {
    font-size: 14px;
  }
  p {
    font-size: 13px;
  }
  .btns {
    align-items: start !important;
    margin-top: 63% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
}
@media (max-width: 400px) {
  .btns {
    align-items: start !important;
    margin-top: 70% !important;
  }
}
</style>
