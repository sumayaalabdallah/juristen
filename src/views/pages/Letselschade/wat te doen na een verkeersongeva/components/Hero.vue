<template>
  <section class="pt-0 pb-0 position-relative overflow-hidden">
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
        class="card-img-overlay d-flex align-items-center justify-content-center text-center z-index-2 title"
      >
        <h3
          class="display-4 fs-1 text-white creative-title aos"
          data-aos="fade-up"
          data-aos-delay="40"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Wat te doen na een verkeersongeval
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
    <b-container class="mb-6">
      <b-row class="gy-1 gy-md-5 mt-0 pt-0 d-flex justify-content-center">
        <b-col lg="12" v-for="(service, idx) in items" :key="idx">
          <b-card
            no-body
            class="aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            :style="
              idx === 1 || idx === 3
                ? 'background-color: #574640; position: relative;padding: 10px'
                : ''
            "
          >
            <h5 class="mb-3 text-dark text-opacity-30 creative-title fs-5">
              {{ service.title }}
            </h5>
            <p
              :class="idx === 1 || idx === 3 ? 'pb-7 ' : ''"
              :style="
                idx === 1 || idx === 3
                  ? 'color: #fff !important; padding: 10px'
                  : ''
              "
            >
              {{ service.description }}
            </p>

            <img
              :style="
                idx === 1 || idx === 3
                  ? 'position: absolute; bottom: 0; left: 0'
                  : 'display: none'
              "
              src="@/assets/images/banner-shape.png"
              alt="banner-shape"
            />
          </b-card>
        </b-col>
        <img src="@/assets/images/line.png" alt="line" />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Letselschade/Wat te doen na een verkeersongeval HERO.jpg";

import { items } from "@/views/pages/Letselschade/wat te doen na een verkeersongeva/data";

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
h5 {
  color: #ffa102 !important;
}
p {
  font-size: 20px;
  color: #574640;
}
.btns {
  margin-top: 15rem !important;
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
    margin-top: 35% !important;
  }
  .btns {
    align-items: start !important;
    margin-top: 15rem !important;
  }
}
</style>
