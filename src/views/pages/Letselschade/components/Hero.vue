<template>
  <section class="pt-0 position-relative overflow-hidden">
    <b-card
      no-body
      class="bg-parallax h-500px h-md-600px h-xl-750px position-relative"
      style="
        background-size: cover;
        background-position: center;
        clip-path: ellipse(80% 80% at 50% 0);
      "
      :style="{ backgroundImage: `url('${bg9Img}')` }"
    >
      <div class="bg-overlay bg-dark bg-opacity-50"></div>

      <div
        class="card-img-overlay d-flex align-items-center justify-content-center text-center flex-column z-index-2 title"
      >
        <h3
          class="display-4 fs-1 text-white creative-title aos"
          data-aos="fade-up"
          data-aos-delay="40"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Letselschade
        </h3>
        <p
          class="text-white aos"
          data-aos="fade-up"
          data-aos-delay="40"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Heeft u letsel opgelopen? Onze specialisten staan klaar om u bij te
          staan.
        </p>
      </div>
      <div
        class="card-img-overlay d-flex align-items-center justify-content-center text-center flex-wrap z-index-2 mt-8 flex-sm-fill btns"
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
      <b-row class="mt-0 pt-0">
        <b-col lg="12">
          <p
            class="mb-6 aos"
            data-aos="fade-up"
            data-aos-delay="140"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            Wanneer u gewond bent geraakt na een verkeersongeval, een val over
            een stoeptegel, een hondenbeet, een bedrijfsongeval of een andere
            situatie waardoor u letsel heeft opgelopen, komt er veel op u af.
            Zorg er allereerst voor dat alles zo volledig mogelijk wordt
            gedocumenteerd en neem zo spoedig mogelijk contact op met een
            letselschade-expert.
          </p>
        </b-col>
        <b-col lg="12">
          <p
            class="mb-6 aos"
            data-aos="fade-up"
            data-aos-delay="140"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            Onze juristen zijn gespecialiseerd in de afwikkeling van (complexe)
            letselschadeclaims. Rechtsbijstand in het geval van een
            letselschadezaak kost u in vrijwel alle gevallen niets, aangezien de
            aansprakelijke partij verplicht is om de kosten voor de jurist te
            vergoeden. U kunt dan ook vrijblijvend contact met ons opnemen om te
            informeren naar de mogelijkheden.
          </p>
        </b-col>
      </b-row>
      <b-row class="d-flex align-items-center justify-content-center mb-6">
        <b-col
          lg="3"
          sm="6"
          v-for="(blog, idx) in status"
          :key="idx"
          class="my-1"
        >
          <BlogCard :blog="blog" />
        </b-col>
      </b-row>
      <b-row class="gy-5 gy-md-7 d-flex justify-content-center">
        <b-col v-for="(service, idx) in services" :key="idx" lg="12" cols="11">
          <b-card
            no-body
            class="bg-light h-100 card-with-inset-shadow aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <div
                class="icon-lg bg-white text-primary rounded-circle mb-4 mt-n5 flex-centered"
              >
                <component :is="service.icon" class="fa-fw fs-5" />
              </div>
              <h5 class="mb-3 text-dark text-opacity-30 creative-title fs-5">
                {{ service.title }}
              </h5>
              <p>{{ service.description }}</p>
              <b-card-footer
                class="mt-auto mx-3 p-0 pt-2 bg-transparent d-flex align-items-end justify-content-end"
              >
                <router-link
                  :to="service.route"
                  class="icon-link icon-link-hover stretched-link my-3"
                  @click="scrollToTop"
                  >LEES MEER
                  <BIconArrowRight class="bi" />
                </router-link>
              </b-card-footer>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/letselschade hero.jpg";
import { BIconArrowRight } from "bootstrap-icons-vue";
import { services } from "@/views/pages/Letselschade/data";
import { status } from "@/views/pages/Letselschade/data";
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
.btns {
  margin-top: 15rem !important;
}
p {
  font-size: 20px;
  color: #574640;
}
.btn-6 {
  border: none;
  padding: 1rem;
}
.card-with-inset-shadow {
  box-shadow: #ffa102 -15px 15px;
}
.card-with-inset {
  box-shadow:
    inset 0 0 35px 5px #ffa102,
    inset 0 2px 1px 1px rgba(255, 255, 255, 0.9),
    inset 0 -2px 1px #ffa102;
  border: solid 5px #ffa102;
}
@media (max-width: 1024px) {
  .btns {
    margin-top: 8rem !important;
  }
  .creative-title {
    font-size: 30px !important;
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
  p {
    font-size: 16px;
  }
  .title {
    align-items: start !important;
    margin-top: -24% !important;
  }
  .btns {
    align-items: start !important;
    margin-top: 72% !important;
  }
  .btns {
    align-items: start !important;
    margin-top: 63% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
}
</style>
