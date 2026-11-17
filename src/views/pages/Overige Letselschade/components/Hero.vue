<template>
  <section class="pt-0 position-relative overflow-hidden">
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
          Overige Letselschade
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
      <b-row class="mt-0 pt-0 d-flex align-items-center justify-content-center">
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
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Overige Letselschade  hero.jpg";
import { status } from "@/views/pages/Overige Letselschade/data";
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
.card-with-inset-shadow {
  box-shadow: #000 -15px 15px;
}
.card-with-inset {
  box-shadow:
    inset 0 0 35px 5px rgba(0, 0, 0, 0.25),
    inset 0 2px 1px 1px rgba(255, 255, 255, 0.9),
    inset 0 -2px 1px rgba(0, 0, 0, 0.25);
  border: solid 5px rgba(0, 0, 0, 0.25);
}
.btn-6 {
  border: none;
  padding: 1rem;
  margin-top: 3rem;
}
@media (max-width: 1024px) {
  .btns {
    margin-top: 5rem !important;
  }
  .creative-title {
    font-size: 30px !important;
  }
  .title {
    margin-top: -50px !important;
  }
}
@media (max-width: 500px) {
  .title {
    align-items: start !important;
    margin-top: 35% !important;
  }
  .btns {
    align-items: start !important;
    margin-top: 40% !important;
  }
  p,
  h3 {
    width: 100% !important;
  }
}
</style>
