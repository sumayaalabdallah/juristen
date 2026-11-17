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
          Scooter-/motorongeluk
        </h3>
        <p
          class="text-white w-75 aos"
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          De verkeersdrukte neemt toe en mensen willen zich snel kunnen
          voortbewegen. Scooters en motoren zijn hiervoor populaire keuzes.
          Echter, het is belangrijk om te realiseren dat bestuurders van deze
          voertuigen kwetsbaarder zijn voor ongevallen dan degenen die in een
          auto rijden.
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
      <b-row class="mt-0 pt-0 d-flex align-items-center justify-content-center">
        <b-col lg="3" v-for="(blog, idx) in Scooter" :key="idx" class="my-1">
          <BlogCard :blog="blog" />
        </b-col>
      </b-row>
      <b-row class="mt-6">
        <b-col lg="12">
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
                  ls motor of scooterrijder kunt u op diverse manieren betrokken
                  raken bij een ongeval. De toedracht van het ongeval is dan ook
                  altijd cruciaal voor het vaststellen van de aansprakelijkheid.
                  Hiervoor zijn de feiten die speelden ten tijde van het ongeval
                  van belang. Onthoud daarbij wel dat niet alles wat u heeft
                  waargenomen ook door de verzekeraar gezien wordt als een
                  vaststaand feit, bepaalde waarnemingen moeten daarom wel
                  ondersteund kunnen worden indien de andere bestuurder dit
                  betwist.
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
                "
                class="mb-3 aos"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <b-card-body class="pb-0">
                  <p style="color: #fff" class="pb-8">
                    Ieder ongeluk, de wijze waarop het plaatsvindt en de
                    gevolgen kunnen uniek genoemd worden. Er zijn ongevallen
                    bekend waarbij de auto’s zwaar beschadigd zijn geraakt door
                    de botsing, maar de inzittende gelukkig vrijwel geen letsel
                    hebben opgelopen. Daarnaast komt het ook voor dat de auto
                    vrijwel geen beschadigingen lijkt te hebben, maar dat de
                    inzittende toch last van klachten hebben.
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

        <img src="@/assets/images/line.png" alt="line" />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Status/12- Scooter-motorongeluk.jpg";
import { Scooter } from "@/views/pages/Overige Letselschade/data";
import BlogCard from "@/views/pages/Overige Letselschade/components/BlogCard.vue";
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
  p {
    font-size: 14px !important;
  }
}
@media (max-width: 820px) {
  .btns {
    margin-top: 10rem !important;
  }
  p {
    font-size: 13px !important;
  }
  .title {
    margin-top: -50px !important;
  }
}
@media (max-width: 500px) {
  p,
  h3 {
    width: 100% !important;
  }
  .title {
    align-items: start !important;
    margin-top: -28% !important;
  }
  h3 {
    font-size: 14px;
  }
  p {
    font-size: 13px;
  }
  .btns {
    align-items: start !important;
    margin-top: 60% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
}
@media (max-width: 400px) {
  .btns {
    align-items: start !important;
    margin-top: 65% !important;
  }
}
@media (max-width: 390px) {
  .btns {
    align-items: start !important;
    margin-top: 73% !important;
  }
}
</style>
