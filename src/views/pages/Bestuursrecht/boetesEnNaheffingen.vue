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
          Boetes en naheffingen: Wat te doen bij een boete of naheffing?
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
              <span class="dropcap bg-transparent rounded px-2 mb-1">E</span>
              en boete of naheffing kan een onaangename verrassing zijn, vooral
              als u van mening bent dat deze onterecht is opgelegd. Dit kan
              bijvoorbeeld het geval zijn bij belastingboetes, parkeerboetes van
              de Gemeente, boetes van CJIB of naheffingen van de
              Belastingdienst. Het is belangrijk om te weten wat u kunt doen als
              u geconfronteerd wordt met een boete of naheffing, en welke
              stappen u kunt ondernemen om de situatie te verhelpen.
            </p>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            class="mb-3 aos"
            style="background-color: #574640; position: relative; color: #fff"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <h6 class="creative-title">Wat is een boete of naheffing?</h6>
              <p style="color: #fff" class="pb-8">
                Een boete wordt opgelegd door een overheidsinstantie wanneer u
                iets heeft gedaan wat in strijd is met de wet. Dit kan
                bijvoorbeeld een boete zijn voor te late belastingaangifte, het
                niet op tijd betalen van belastingen, of het niet naleven van
                bepaalde regelgeving. De hoogte van de boete kan variëren
                afhankelijk van de ernst van de overtreding.
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
              Een naheffing is een aanslag die wordt opgelegd wanneer wordt
              constateert dat u te weinig belasting heeft betaald, dit kan ook
              een parkeerbelasting inhouden. De naheffing kan gepaard gaan met
              een boete, rente, of andere kosten.
            </p>
          </b-card>
        </b-col>
        <img src="@/assets/images/line.png" alt="line" />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Boetes en naheffingen.jpg";

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
.card2 {
  width: 100%;
  height: 200px;
  margin: 10px 0;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease !important;
  border: 2px solid #ffa102 !important;
  background-color: #ffa102;
  border-radius: 10px;
  color: #f8f8f8;
}
.card3 {
  width: 100%;
  height: 200px;
  margin: 10px 0;
  margin-bottom: 40px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease !important;
  border: 2px solid #ffa102 !important;
  background-color: #ffa102;
  border-radius: 10px;
  color: #f8f8f8;
}
.last-card {
  height: 100px !important;
}
p {
  font-size: 20px;
  color: #574640;
}
h6 {
  color: #ffa102;
}

.btns {
  margin-top: 15rem !important;
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
    font-size: 30px !important;
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
    font-size: 15px;
  }
  .btns {
    align-items: start !important;
    margin-top: 60% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
  .card2,
  .last-card {
    height: 100px;
  }
  .card3 {
    height: 150px;
    margin-bottom: 10px;
  }
}
@media (max-width: 400px) {
  .btns {
    align-items: start !important;
    margin-top: 66% !important;
  }
}
</style>
