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
          Meervoudig ongeval, maar geen schuld (schuldloze derde)
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
                    >E</span
                  >
                  r zijn situaties denkbaar waarbij bijvoorbeeld drie auto's (of
                  meer) betrokken zijn, en waarbij in ieder geval één auto geen
                  schuld heeft aan het ontstaan van het ongeval. In dat geval
                  kan de schuldloze derde regeling helpen bij het verhalen van
                  de letselschade van de inzittende van deze auto.
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
                <p>
                  Een voorbeeld hiervan kan zijn wanneer u voor een rood
                  stoplicht staat te wachten en voor u een ongeval plaatsvindt
                  tussen twee voertuigen, waarbij de voertuigen doorschuiven en
                  u daardoor ook wordt geraakt. Het is duidelijk dat u geen
                  enkele verkeersfout heeft gemaakt, maar dat één van de twee
                  bestuurders wel een fout heeft gemaakt. Echter, het is niet
                  duidelijk welke van de twee bestuurders door rood is gereden.
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
                <p>
                  In de praktijk zou dit betekenen dat de auto die geen enkele
                  verkeersfout heeft gemaakt, en die eigenlijk geen onderdeel is
                  van de discussie over wie er fout is, alsnog de dupe wordt van
                  het ongeval. In zo'n geval kan de schuldloze derde regeling
                  van toepassing zijn, en kan de schade door de regelend
                  verzekeraar worden behandeld. Hierdoor wordt de discussie over
                  de aansprakelijkheid omzeild, en kan de schuldloze derde zijn
                  of haar schade vergoed krijgen.
                </p>
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
            src="@/assets/images/Side images/حالات10.jpg"
            alt="side-image"
        /></b-col>
        <b-col lg="12">
          <b-card
            no-body
            class="mb-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <p style="font-style: italic">
              Per situatie zal bekeken moeten worden of in uw geval aanspraak
              gemaakt kan worden op deze regeling. Het is belangrijk dat de
              WA-verzekeraars van de andere betrokken bestuurders zijn
              aangesloten bij het Verbond van Verzekeraars. Daarnaast moet
              vaststaan dat u geen schuld treft bij het ontstaan van het
              ongeval.
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
            <p>
              In sommige gevallen, bijvoorbeeld bij ongelukken op de snelweg
              waarbij meerdere voertuigen betrokken zijn, kan er echter
              discussie ontstaan over de mate van schuld van verschillende
              partijen. In dergelijke gevallen kan het moeilijk zijn om te
              spreken van een schuldloze derde, aangezien het mogelijk is dat er
              een gedeelde verantwoordelijkheid voor het ongeval bestaat.
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
            <p>
              Veelal is de schuldloze derde regeling in dat geval dan niet de
              oplossing. Deze regeling kan in andere gevallen bij een
              kettingbotsing soms wel weer soelaas bieden, het verschilt dus per
              situatie. Wij adviseren daarom altijd om eerst juridisch advies
              bij een jurist of advocaat in te winnen alvorens u hier zelf een
              conclusie aan verbindt.
            </p>
          </b-card>
        </b-col>
        <img src="@/assets/images/line.png" alt="line" />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Status/10- Meervoudig ongeval, maar geen schuld (schuldloze derde) 1.jpg";

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
@media (max-width: 1366px) {
  .btns {
    margin-top: 10rem !important;
  }
  .title {
    margin-top: -26px !important;
  }
  .creative-title {
    font-size: 35px !important;
  }
}
@media (max-width: 430px) {
  p,
  h3 {
    width: 100% !important;
  }
  .title {
    align-items: start !important;
    margin-top: -17% !important;
  }
  h3 {
    font-size: 14px;
  }
  p {
    font-size: 13px;
  }
  .btns {
    align-items: start !important;
    margin-top: 64% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
}
@media (max-width: 414px) {
  .btns {
    align-items: start !important;
    margin-top: 67% !important;
  }
}
@media (max-width: 390px) {
  .btns {
    align-items: start !important;
    margin-top: 72% !important;
  }
}
@media (max-width: 375px) {
  .btns {
    align-items: start !important;
    margin-top: 78% !important;
  }
}
</style>
