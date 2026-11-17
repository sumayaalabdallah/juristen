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
          class="display-4 fs-1 text-white creative-title aos w-75"
          data-aos="fade-up"
          data-aos-delay="40"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Klachten na een parkeerongeluk of bijzondere manoeuvre
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
                    >D</span
                  >
                  e klachten die men na een parkeerongeluk of bijzondere
                  manoeuvre oploopt kunnen erg divers van aard zijn. Het gaat
                  daarbij vaak om een onverwachtse situatie waarbij de andere
                  bestuurder plotseling verschijnt.
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
                <b-card-body class="pb-0">
                  <p style="color: #fff" class="pb-6">
                    Na een parkeerongeluk of een bijzondere manoeuvre kunnen de
                    gevolgen ingrijpend zijn. Dit kan leiden tot verschillende
                    soorten letsel, die zowel fysiek als emotioneel impact
                    hebben. Na een botsing is het mogelijk dat botten breken de
                    meest voorkomende botbreuken zijn gebroken armen, benen of
                    ribben. Daarnaast zijn verstuikingen en verrekkingen
                    veelvoorkomend, vooral wanneer iemand plotseling moet
                    handelen bij een onverwachtse situatie.
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
            src="@/assets/images/Side images/حالات6.jpg"
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
            <p>
              Een hersenschudding is ook een veelvoorkomend letsel; bij een klap
              tegen het hoofd kunnen symptomen zoals hoofdpijn, duizeligheid en
              misselijkheid optreden. Snijwonden vormen een ander risico, vaak
              door gebroken glas of scherpe voorwerpen in de auto. Rug- en
              nekklachten, zoals whiplash, komen ook voor wanneer de nek en rug
              onder druk staan. Deze blessures kunnen leiden tot aanhoudende
              pijn en beperkingen in het dagelijks leven. Kneuzingen en schade
              aan zachte weefsels kunnen het herstel verder bemoeilijken.
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
            class="aos mb-3"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <p style="color: #fff" class="pb-8">
                Naast fysieke letsels zijn de emotionele gevolgen niet te
                onderschatten. Veel mensen ervaren helaas angst of stress na een
                ongeval, wat hun kwaliteit van leven aanzienlijk kan
                beïnvloeden. Het is daarom essentieel om na een ongeval altijd
                medische hulp te zoeken. Zelfs als de klachten aanvankelijk
                meevallen, kunnen sommige letsels pas later symptomen vertonen.
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
import bg9Img from "@/assets/images/Status/6- Klachten na een parkeerongeluk of bijzondere manoeuvre.jpg";

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
  margin-top: 13rem !important;
}
.btn-6 {
  border: none;
  padding: 1rem;
}
.title {
  margin-top: -80px !important;
}
@media (max-width: 1024px) {
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
@media (max-width: 500px) {
  p,
  h3 {
    width: 100% !important;
  }
  .title {
    align-items: start !important;
    margin-top: -15% !important;
  }
  h3 {
    font-size: 14px;
  }
  p {
    font-size: 13px;
  }
  .btns {
    align-items: start !important;
    margin-top: 65% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
}
@media (max-width: 400px) {
  .btns {
    align-items: start !important;
    margin-top: 74% !important;
  }
}
@media (max-width: 390px) {
  .title {
    align-items: start !important;
    margin-top: -39% !important;
  }
  .btns {
    align-items: start !important;
    margin-top: 67% !important;
  }
}
</style>
