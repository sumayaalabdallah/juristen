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
          Wat zijn de gevolgen van een boete of naheffing?
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
      <b-row class="mt-0 pt-0 d-flex align-items-center justify-content-center">
        <b-col cols="12" lg="6">
          <div
            class="card3 card-hover-shadow border aos mb-3"
            data-aos="fade-up"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div class="p-3">
              <h5 class="pb-2" style="color: #f8f8f8">
                1. Betalingsverplichtingen
              </h5>
              <p tag="h6">
                Als de boete of naheffing niet wordt ingetrokken, zult u
                verplicht zijn om het bedrag te betalen. Dit kan ook extra
                kosten met zich meebrengen, afhankelijk van de situatie.
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" lg="6">
          <div
            class="card3 card-hover-shadow border aos mb-3"
            data-aos="fade-up"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div class="p-3">
              <h5 class="pb-2" style="color: #f8f8f8">
                2. Mogelijke strafrechtelijke gevolgen
              </h5>
              <p tag="h6">
                In sommige gevallen kan een boete of naheffing leiden tot
                strafrechtelijke vervolging, bijvoorbeeld bij belastingfraude of
                andere ernstige overtredingen.
              </p>
            </div>
          </div>
        </b-col>
        <b-col lg="12" class="mt-3">
          <b-card
            no-body
            class="aos mb-3"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            style="background-color: #574640; color: #fff"
          >
            <b-card-body class="pb-0">
              <h6 class="creative-title">
                Hoe voorkomt u boetes en naheffingen?
              </h6>
              <p style="color: #fff" class="pb-8">
                Voorkomen is altijd beter dan genezen, maar als u toch een boete
                of naheffing heeft ontvangen, kan deze niet meer teruggedraaid
                worden. Een van de belangrijkste dingen die u vervolgens wel
                kunt doen, is belangrijke documenten met betrekking tot de boete
                of naheffing goed bewaren. Denk hierbij aan parkeerbewijzen,
                correspondentie met de instantie die de boete heeft opgelegd, of
                foto’s van de situatie waarin de boete werd gegeven. Dit
                vergemakkelijkt het proces als u besluit de boete aan te vechten
                en verhoogt de kans op een succesvolle uitkomst.
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
            <p>
              Daarnaast is het verstandig om, wanneer u twijfelt over de
              geldende verplichtingen, tijdig een specialist of jurist in te
              schakelen. Deze kan u adviseren over de beste manier om met een
              boete of naheffing om te gaan en kan helpen bij het aanvechten
              ervan als dat nodig is. Door voorbereid te zijn en snel actie te
              ondernemen, kunt u boetes of naheffingen vaak succesvol
              aanvechten.
            </p>
          </b-card>
        </b-col>
        <img src="@/assets/images/line.png" alt="line" />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Wat zijn de gevolgen van een.jpg";

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
.card3 {
  width: 100%;
  height: 210px;
  margin: 10px 0;
  margin-bottom: 40px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease !important;
  border: 2px solid #ffa102 !important;
  background-color: #ffa102;
  color: #f8f8f8;
  border-radius: 10px;
}
.card3 p {
  color: #f8f8f8;
}
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
h6 {
  color: #ffa102;
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
    font-size: 30px !important;
  }
  .card3 {
    height: 300px;
  }
}
@media (max-width: 820px) {
  .card3 {
    height: 100%;
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
    margin-top: 56% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
  .card3 {
    height: 220px;
    margin-bottom: 10px;
  }
}
@media (max-width: 400px) {
  .btns {
    align-items: start !important;
    margin-top: 60% !important;
  }
}
@media (max-width: 390px) {
  .btns {
    align-items: start !important;
    margin-top: 69% !important;
  }
}
</style>
