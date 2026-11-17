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
          Passagier
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
                    >A</span
                  >
                  ls passagier valt u over het algemeen geen verwijt te maken
                  over het rijgedrag van de bestuurder waarbij u op de motor of
                  scooter zit -bepaalde situaties uitgezonderd zoals het
                  opstappen bij een dronken bestuurder. Als u in dat geval
                  letsel heeft opgelopen is het, te meer wanneer discussie over
                  de aansprakelijkheid bestaat, prettig wanneer uw schade als
                  ‘schuldloze opzittende’ opgepakt kan worden.
                </p>
              </b-card>
            </b-col>
            <b-col lg="12">
              <b-card
                no-body
                class="mb-3 aos"
                style="
                  background-color: #574640;
                  position: relative;
                  color: #fff;
                  padding: 10px;
                "
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <b-card-body class="pb-0">
                  <p style="color: #fff" class="pb-6">
                    Zoals de naam doet vermoeden gaat het hier om een ‘andere
                    persoon dan de bestuurder’ die ‘geen schuld’ heeft aan het
                    ontstaan van het ongeval. In de praktijk is er namelijk een
                    regeling in het leven geroepen om voor deze groep eerder tot
                    uitkering van de schade over te kunnen gaan, zodoende wordt
                    de stap met betrekking tot de aansprakelijkheid ‘tijdelijk’
                    overgeslagen. Hoe snel in de praktijk tot uitkering van de
                    schade overgegaan zal worden is nog steeds afhankelijk van
                    de verzekeraar en het voorhanden zijnde bewijs met
                    betrekking tot de schade.
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
            src="@/assets/images/Side images/حالات9.jpg"
            alt="side-image"
        /></b-col>
        <b-col lg="12">
          <b-card
            no-body
            class="aos mb-3"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <p>
              Per situatie zal gekeken moeten worden of in uw situatie aanspraak
              gemaakt kan worden op deze regeling. Het is allereerst van belang
              dat de WA-verzekeraar van de bestuurder is aangesloten bij het
              Verbond van Verzekeraars. Ook is het daarbij van belang dat de
              passagier geen schuld aangerekend kan worden aan het ontstaan van
              het ongeval. Als de passagier wel enig verwijt te maken valt aan
              het ontstaan van het ongeval kan dit een vermindering van de
              schadevergoeding tot gevolg hebben.
            </p>
          </b-card>
        </b-col>
        <img src="@/assets/images/line.png" alt="line" />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Status/9- Passagier.jpg";

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
  margin-top: 12rem !important;
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
    margin-top: 66% !important;
  }
}
@media (max-width: 375px) {
  .btns {
    align-items: start !important;
    margin-top: 70% !important;
  }
}
</style>
