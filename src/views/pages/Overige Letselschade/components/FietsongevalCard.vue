<template>
  <!-- <router-link v-if="blog.route" :to="blog.route" @click="scrollToTop">
    <div
      class="card card-hover-shadow border bg-transparent aos"
      data-aos="fade-up"
      data-aos-delay="40"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
    >
      <p tag="h6" class="p-4">{{ blog.title }}</p>
    </div>
  </router-link> -->
  <b-card
    no-body
    class="card-img-scale overflow-hidden aos"
    data-aos="fade-up"
    data-aos-delay="80"
    data-aos-duration="1200"
    data-aos-easing="ease-in-out"
    style="height: 150px; border-radius: 25px; background-color: #574640"
  >
    <b-card-body class="p-4">
      <h5>
        <router-link
          @click="scrollToTop"
          :to="{
            name: 'het-letsel',
          }"
          class="text-primary"
          >{{ blog.title }}
        </router-link>
      </h5>
    </b-card-body>
    <div class="card-footer bg-primary p-3">
      <h6>
        <router-link
          @click="scrollToTop"
          class="icon-link icon-link-hover stretched-link p-0 m-0"
          style="color: #574640"
          :to="{
            name: 'het-letsel',
          }"
        >
          klik hier
          <BIconArrowRight class="bi" />
        </router-link>
      </h6>
    </div>
  </b-card>
</template>

<script lang="ts" setup>
import type { BlogType } from "@/types";
import type { PropType } from "vue";
import { BIconArrowRight } from "bootstrap-icons-vue";

defineProps({
  blog: {
    type: Object as PropType<BlogType>,
    required: true,
  },
});
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<!-- <style scoped>
.card {
  width: 100%;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease !important;
  background-color: #574640 !important ;
  border: none;
}
img {
  height: 170px;
}
p {
  font-size: 30px;
  font-weight: 800;
  color: #ffa102;
}
.card:hover {
  cursor: pointer;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
  background-color: #ffa102 !important ;
  border: 2px solid #f8f8f8 !important;
}
.card:hover p {
  color: #574640 !important;
}
@media (max-width: 500px) {
  .card {
    width: 100%;
  }
}
</style> -->
