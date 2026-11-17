<template>
  <div
    class="card card-hover-shadow border aos"
    data-aos="fade-up"
    data-aos-delay="40"
    data-aos-duration="1200"
    data-aos-easing="ease-in-out"
  >
    <div class="p-3">
      <h6 tag="h6">{{ blog.title }}</h6>
      <p class="p-1">{{ blog.description }}</p>
    </div>
  </div>
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
</script>

<style scoped>
.card {
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
p {
  color: #574640;
}
.card:hover {
  cursor: pointer;
  background-color: #fff !important;
  transition: 0.2s ease;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2) !important;
}
@media (max-width: 500px) {
  .card {
    height: 200px;
    width: 100%;
  }
}
</style>
