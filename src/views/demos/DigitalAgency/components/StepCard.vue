<template>
  <b-card
    class="text-center mb-3 aos"
    data-aos="fade-up"
    data-aos-delay="80"
    data-aos-duration="1200"
    data-aos-easing="ease-in-out"
    style="
      background-color: #574640;
      height: 200px;
      width: 100%;
      border-radius: 25px;
    "
  >
    <div class="icon-lg mb-3 mx-auto flex-centered">
      <img
        :src="blog.icon"
        class="fa-lg"
        style="width: 150px; color: #ffa102"
      />
    </div>

    <h6 class="text-white">
      {{ blog.title }}
    </h6>
    <p class="text-white">
      {{ blog.description }}
    </p>
  </b-card>
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
h6 {
  font-size: 15px;
  font-weight: 700 !important;
}
p {
  font-size: 13px;
}
</style>
