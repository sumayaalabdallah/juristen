<template>
  <section class="pt-0 pb-0">
    <b-card
      no-body
      class="bg-parallax h-500px h-md-600px h-xl-750px overflow-hidden position-relative"
      style="
        background-size: cover;
        background-position: center;
        clip-path: ellipse(80% 80% at 50% 0);
      "
      :style="{ backgroundImage: `url('${bg9Img}')` }"
    >
      <div class="bg-overlay bg-dark bg-opacity-50"></div>

      <div
        class="card-img-overlay d-flex align-items-center justify-content-center text-center z-index-2 title"
      >
        <h3
          class="display-4 fs-1 text-white creative-title aos"
          data-aos="fade-up"
          data-aos-delay="40"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Rechtsgebieden
        </h3>
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
          <h3 class="text-center mb-7">
            Binnen welk rechtsgebied zoekt u een jurist?
          </h3>
          <b-card
            no-body
            style="background-color: #574640; color: #fff; position: relative"
            class="aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <p style="color: #fff" class="pb-8">
                <span
                  class="dropcap bg-transparent text-white rounded px-2 mb-1"
                  >W</span
                >ij bieden rechtsbijstand bij verschillende juridische
                vraagstukken. Onze focus ligt daarbij vooral op de behandeling
                van letselschadezaken. Echter, kunt u ook altijd een juridische
                vraag die toeziet op een ander rechtsgebied aan ons voorleggen.
                Onze juristen hebben bijvoorbeeld ook ervaring met
                arbeidsrechtelijke, bestuursrechtelijke en andere
                civielrechtelijke vraagstukken.
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
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/rechtsgebieden.hero.jpg";
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
.btn-6 {
  border: none;
  padding: 1rem;
}
.btns {
  margin-top: 13rem !important;
}
@media (max-width: 1024px) {
  .btns {
    margin-top: 8rem !important;
  }
  .creative-title {
    font-size: 30px !important;
  }
  .title {
    margin-top: -26px !important;
  }
}
@media (max-width: 500px) {
  .title {
    align-items: start !important;
    margin-top: 40% !important;
  }
  .btns {
    align-items: start !important;
    margin-top: 63% !important;
  }
}
</style>
