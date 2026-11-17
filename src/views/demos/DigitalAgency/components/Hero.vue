<template>
  <section class="pt-0 pb-0">
    <b-card
      no-body
      class="bg-parallax h-600px h-md-600px h-xl-750px position-relative pb-0 mb-0"
      style="
        background-size: cover;
        background-position: center;
        clip-path: ellipse(80% 80% at 50% 0);
      "
      :style="{ backgroundImage: `url('${bg9Img}')` }"
    >
      <div class="bg-overlay bg-dark bg-opacity-50"></div>

      <div
        class="card-img-overlay d-flex align-items-center justify-content-center flex-column text-center z-index-2 title mb-3"
      >
        <h3
          class="text-white w-75 aos text mb-4"
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Welkom bij S&A Juristen
        </h3>
        <p
          class="text-white w-75 aos"
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Wij zijn een kleinschalig en toegewijd juristenkantoor waarbij
          persoonlijke aandacht en laagdrempelige communicatie centraal staan.
          Wij zijn gespecialiseerd in letselschade en staan cliënten ook bij in
          andere juridische zaken, waaronder arbeidsrechtelijke kwesties.
        </p>
      </div>
      <div
        class="card-img-overlay d-flex align-items-center justify-content-center text-center flex-wrap z-index-2 mt-9 flex-sm-fill btns"
      >
        <router-link
          class="btn btn-6 bg-primary text-white btn-lg btn-white icon-link icon-link-hover mb-0 px-3 mt-6 aos"
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
  </section>
</template>

<script setup lang="ts">
import AOS from "aos";
import { onMounted } from "vue";
import bg9Img from "@/assets/images/home-hero.jpg";

import { jarallax } from "jarallax";
onMounted(() => {
  jarallax(document.querySelectorAll(".bg-parallax"), {
    speed: 0.5,
  });
  AOS.init({ once: true });
});
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
<style scoped>
.btn-6 {
  border: none;
  padding: 1rem;
  color: #fff;
}
p {
  font-size: 25px !important;
  line-height: 30px !important;
}
.btns {
  margin-top: 10rem !important;
}
.title {
  margin-top: -60px !important;
}
@media (max-width: 1024px) {
  .btns {
    margin-top: 6rem !important;
  }
  .title {
    margin-top: -60px !important;
  }
  .creative-title {
    font-size: 27px !important;
  }
  p {
    font-size: 17px !important;
  }
}
@media (max-width: 820px) {
  .btns {
    margin-top: 5rem !important;
  }
  p {
    font-size: 13px !important;
  }
}
@media (max-width: 500px) {
  p,
  h3 {
    width: 100% !important;
  }
  .title {
    align-items: start !important;
    margin-top: -20% !important;
  }

  p {
    font-size: 15px !important;
  }

  .btns {
    align-items: start !important;
    margin-top: 75% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
}
@media (max-width: 399px) {
  .title {
    margin-top: -29% !important;
  }
}
</style>
