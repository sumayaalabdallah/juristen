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
          Juristen
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
      <b-row
        class="g-4 g-lg-5 d-flex align-items-center justify-content-center"
      >
        <b-col
          lg="5"
          cols="12"
          v-for="(blog, idx) in cards"
          :key="idx"
          class="mb-2"
        >
          <BlogCard :blog="blog" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Juristen hero.jpg";
import BlogCard from "@/views/pages/about/About/components/BlogCard.vue";
import { cards } from "@/views/pages/about/data";
import { onMounted } from "vue";
import AOS from "aos";
import { jarallax } from "jarallax";
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
  .title {
    align-items: start !important;
    margin-top: 50% !important;
  }
  .btns {
    align-items: start !important;
    margin-top: 65% !important;
  }
}
</style>
