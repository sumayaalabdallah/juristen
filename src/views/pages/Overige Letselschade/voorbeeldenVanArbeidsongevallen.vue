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
          Voorbeelden van arbeidsongevallen
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
    <b-container>
      <b-row>
        <b-col lg="8">
          <b-row
            class="g-4 g-lg-5 d-flex align-items-center justify-content-center mb-6"
          >
            <p
              class="aos"
              data-aos="fade-up"
              data-aos-delay="80"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
            >
              <span class="dropcap bg-transparent rounded px-2 mb-1">W </span>
              erk gerelateerde ongevallen kunnen variëren van relatief klein
              letsel tot ernstige situaties. Enkele veelvoorkomende voorbeelden
              zijn:
            </p>
            <b-col
              lg="4"
              cols="12"
              v-for="(blog, idx) in voorbeelden"
              :key="idx"
            >
              <div
                class="card2 card-hover-shadow border aos d-flex align-items-center justify-content-center"
                data-aos="fade-up"
                data-aos-delay="40"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <p>
                  {{ blog.description }}
                </p>
              </div>
            </b-col>
            <p
              class="aos"
              data-aos="fade-up"
              data-aos-delay="80"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
            >
              Elk van deze situaties vereist een zorgvuldige beoordeling om te
              bepalen of de werkgever aansprakelijk is. Dit is dan ook de reden
              dat de verzekeraar in de praktijk veelal een toedracht onderzoek
              zal laten uitvoeren.
            </p>
          </b-row>
        </b-col>
        <b-col lg="4">
          <img
            class="aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            style="border-radius: 3px"
            src="@/assets/images/Side images/حالات20.jpg"
            alt="side-image"
          />
        </b-col>
        <img src="@/assets/images/line.png" alt="line" />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Status/25- Voorbeelden van arbeidsongevallen.jpg";
import { voorbeelden } from "@/views/pages/Overige Letselschade/data";
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
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease !important;
  border: 2px solid #ffa102 !important;
  background-color: #ffa20265 !important;
}

.card2:hover {
  cursor: pointer;
  background-color: #fff !important;
  transition: 0.2s ease;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2) !important;
}
p {
  font-size: 20px;
  text-align: center;
  color: #000;
}
.btns {
  margin-top: 12rem !important;
}
.btn-6 {
  border: none;
  padding: 1rem;
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
    font-size: 18px !important;
  }
  .btns {
    align-items: start !important;
    margin-top: 68% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
  .card2 {
    height: 200px;
    width: 100%;
  }
}
@media (max-width: 400px) {
  .btns {
    align-items: start !important;
    margin-top: 73% !important;
  }
}
@media (max-width: 375px) {
  .btns {
    align-items: start !important;
    margin-top: 78% !important;
  }
}
</style>
