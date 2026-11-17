<template>
  <section class="pt-sm-0 pt-lg-9 sec">
    <b-container class="pb-0">
      <div class="inner-container-small text-center">
        <h2
          class="creative-title aos"
          data-aos="fade-up"
          data-aos-delay="20"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Juridische Tips
        </h2>
        <p
          class="mb-0 aos"
          data-aos="fade-up"
          data-aos-delay="40"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Bekijk onze stappenplannen.
        </p>
      </div>
      <b-row
        class="g-4 g-lg-5 mt-1 d-flex align-items-center justify-content-center"
      >
        <b-col lg="6">
          <b-card
            no-body
            class="card-img-scale overflow-hidden aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            style="
              height: 170px;
              border-radius: 25px;
              background-color: #574640;
            "
          >
            <b-card-body class="p-4">
              <h6>
                <router-link
                  @click="scrollToTop"
                  :to="{
                    name: 'letselschade-wat-te-doen-na-een-verkeersongeval',
                  }"
                  class="text-primary"
                  >Wat te doen na een verkeersongeval?
                </router-link>
              </h6>
            </b-card-body>
            <b-card-body class="bg-primary px-4">
              <router-link
                @click="scrollToTop"
                class="icon-link icon-link-hover stretched-link p-0 m-0"
                style="color: #574640"
                :to="{
                  name: 'letselschade-wat-te-doen-na-een-verkeersongeval',
                }"
              >
                Lees meer

                <BIconArrowRight class="bi" />
              </router-link>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col lg="6">
          <b-card
            no-body
            class="card-img-scale overflow-hidden aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            style="
              height: 170px;
              border-radius: 25px;
              background-color: #574640;
            "
          >
            <b-card-body class="p-4">
              <h6>
                <router-link
                  @click="scrollToTop"
                  :to="{
                    name: 'letselschade-het-verloop-van-een-letselschadezaak',
                  }"
                  class="text-primary"
                  >Stappenplan voor een letselschadezaak
                </router-link>
              </h6>
            </b-card-body>
            <b-card-body class="bg-primary px-4">
              <router-link
                @click="scrollToTop"
                class="icon-link icon-link-hover stretched-link p-0 m-0"
                :to="{
                  name: 'letselschade-het-verloop-van-een-letselschadezaak',
                }"
                style="color: #574640"
              >
                Lees meer

                <BIconArrowRight class="bi" />
              </router-link>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import { BIconArrowRight } from "bootstrap-icons-vue";
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
<style scoped>
p {
  font-size: 20px;
  color: #574640;
}
.stretched-link {
  font-size: 20px;
  color: #574640;
}
@media (max-width: 1024px) {
  .sec {
    padding-top: 10rem !important;
  }
}
</style>
