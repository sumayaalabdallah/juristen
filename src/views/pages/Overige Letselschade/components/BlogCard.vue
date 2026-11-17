<template>
  <router-link v-if="blog.route" :to="blog.route" @click="scrollToTop">
    <div
      class="card2 card-hover-shadow border bg-transparent aos"
      data-aos="fade-up"
      data-aos-delay="40"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
    >
      <p tag="h6" class="p-4">{{ blog.title }}</p>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import type { BlogType } from "@/types";
import type { PropType } from "vue";

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

<style scoped>
.card2 {
  width: 100%;
  height: 150px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease !important;
  background-color: #574640 !important ;
  border: none;
}
p {
  font-size: 17px;
  font-weight: 800;
  color: #ffa102;
}
.card2:hover {
  cursor: pointer;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
  background-color: #ffa102 !important ;
  border: 2px solid #f8f8f8 !important;
}
.card2:hover p {
  color: #574640 !important;
}
@media (max-width: 1024px) {
  .card {
    height: 180px;
  }
}
@media (max-width: 820px) {
  .card {
    height: 100%;
  }
}
</style>
