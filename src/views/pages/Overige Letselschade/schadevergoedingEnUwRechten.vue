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
          Schadevergoeding en uw rechten
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
                    >E
                  </span>
                  en arbeids- of bedrijfsongeval is een incident dat plaatsvindt
                  tijdens de werkuren of tijdens de pauze op het werk, waarbij
                  letsel opgelopen wordt. Dit letsel kan van lichte maar ook van
                  zware aard zijn en het is van belang dat u zich gehoord en
                  gezien voelt. Uw klachten moeten serieus genomen worden en uw
                  herstel staat voorop. Een schadevergoeding na een
                  arbeidsongeval is dan ook bedoeld om de geleden schade te
                  compenseren, waaronder medische kosten, inkomensverlies en
                  eventuele aanvullende uitgaven.
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
                    Het inschakelen van een letselschadespecialist voor het
                    verhalen van de schade moet u dan ook niet zien als een
                    aanval tegen de werkgever. De jurist of advocaat die u
                    bijstaat kunt u zien als een gespecialiseerde partij die
                    voor u in gesprek gaat met de verzekeraar van uw werkgever.
                    Het is vervelend voor uw werkgever dat hij
                    hoogstwaarschijnlijk zijn eigenrisico moet aanspreken, maar
                    het nog vele malen vervelender voor u dat u letsel heeft
                    opgelopen tijdens uw werk.
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
            src="@/assets/images/Side images/حالات21.jpg"
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
            <p>
              De verantwoordelijkheid van de werkgever ligt daarbij in zijn
              zorgplicht: ervoor zorgen dat arbeid zo veilig mogelijk kan worden
              uitgevoerd. Wanneer hierin wordt tekortgeschoten, kunt u hem
              aansprakelijk stellen voor de gevolgen van het ongeval waardoor u
              schade heeft geleden. Het is daarom van groot belang om uw rechten
              serieus te nemen en de juiste stappen te zetten na een incident.
              Een letselschadespecialist kan u hierbij ondersteunen en ervoor
              zorgen dat u krijgt waar u recht op heeft.
            </p>
          </b-card>
        </b-col>
        <img src="@/assets/images/line.png" alt="line" />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Status/26- Schadevergoeding en uw rechten.jpg";

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
@media (max-width: 500px) {
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
    margin-top: 70% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
}
@media (max-width: 375px) {
  .btns {
    align-items: start !important;
    margin-top: 75% !important;
  }
}
</style>
