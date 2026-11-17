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
          Parkeerongeluk of andere bijzondere manoeuvre
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
                    Volgens de Nederlandse wet moet de bestuurder van een
                    voertuig die een bijzondere manoeuvre uitvoert -zoals
                    parkeren, achteruitrijden, van een uitrit de weg oprijden of
                    keren- het overige verkeer voorrang geven. Als dit leidt tot
                    een ongeval, ligt de schuld vaak bij de bestuurder die de
                    manoeuvre maakte, aangezien hij of zij het verkeer had
                    moeten laten voorgaan. Er zijn echter uitzonderingen
                    mogelijk, en het is ook denkbaar dat de andere bestuurder,
                    die geen bijzondere manoeuvre uitvoerde, een verkeersfout
                    heeft gemaakt. In dat geval is het extra belangrijk om
                    bewijs te verzamelen.
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
                <h6 class="creative-title">
                  Klachten na een parkeerongeluk of bijzondere manoeuvre
                </h6>

                <p>
                  De klachten die kunnen ontstaan na een parkeerongeluk of
                  bijzondere manoeuvre variëren sterk. Dit soort ongevallen
                  ontstaan vaak door een plotselinge, onverwachte situatie,
                  waarbij meestal een andere auto onverwacht opduikt. Na een
                  parkeerongeluk of een bijzondere manoeuvre kunnen de gevolgen
                  ingrijpend zijn. Dit kan leiden tot verschillende soorten
                  letsel, die zowel fysiek als emotioneel impact hebben. Na een
                  botsing is het mogelijk dat botten breken de meest voorkomende
                  botbreuken zijn gebroken armen, benen of ribben. Daarnaast
                  zijn verstuikingen en verrekkingen veelvoorkomend, vooral
                  wanneer iemand plotseling moet handelen bij een onverwachtse
                  situatie.
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
            src="@/assets/images/Side images/حالات5.jpg"
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
              door gebroken glas of scherpe voorwerpen.
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
              Rug- en nekklachten, zoals whiplash, komen ook voor wanneer de nek
              en rug onder druk staan. Deze blessures kunnen leiden tot
              aanhoudende pijn en beperkingen in het dagelijks leven. Kneuzingen
              en schade aan zachte weefsels kunnen het herstel verder
              bemoeilijken. Naast fysieke letsels zijn de emotionele gevolgen
              niet te onderschatten. Veel mensen ervaren helaas angst of stress
              na een ongeval, wat hun kwaliteit van leven aanzienlijk kan
              beïnvloeden. Het is daarom essentieel om na een ongeval altijd
              medische hulp te zoeken. Zelfs als de klachten aanvankelijk
              meevallen, kunnen sommige letsels pas later symptomen vertonen.
            </p>
          </b-card>
        </b-col>

        <img src="@/assets/images/line.png" alt="line" />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Status/5- Parkeerongeluk of andere bijzondere manoeuvre.jpg";

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

h6 {
  color: #ffa102;
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
    margin-top: -11% !important;
  }
  h3 {
    font-size: 14px;
  }
  p {
    font-size: 13px;
  }
  .btns {
    align-items: start !important;
    margin-top: 67% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
}
@media (max-width: 400px) {
  .btns {
    margin-top: 70% !important;
  }
}
@media (max-width: 375px) {
  .btns {
    margin-top: 75% !important;
  }
}
</style>
