<template>
  <section class="pt-0 pb-0">
    <b-card
      no-body
      class="bg-parallax h-500px h-md-600px h-xl-750px position-relative pb-0 mb-0"
      style="
        background-size: cover;
        background-position: center;
        clip-path: ellipse(80% 80% at 50% 0);
      "
      :style="{ backgroundImage: `url('${bg9Img}')` }"
    >
      <div class="bg-overlay bg-dark bg-opacity-50"></div>

      <div
        class="card-img-overlay d-flex align-items-center justify-content-center flex-column text-center z-index-2 title"
      >
        <h3
          class="display-4 fs-1 text-white creative-title aos"
          data-aos="fade-up"
          data-aos-delay="40"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Een ongeval als voetganger of fietser
        </h3>
      </div>
      <div
        class="card-img-overlay d-flex align-items-center justify-content-center text-center flex-wrap z-index-2 mt-9 flex-sm-fill btns"
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
    <b-container class="mt-0 pt-0">
      <b-row class="mt-0 pt-0">
        <b-col lg="8">
          <b-row
            class="mt-0 pt-0 d-flex align-items-center justify-content-center"
          >
            <b-col lg="12">
              <b-card
                no-body
                class="mb-3 aos"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <p>
                  <span
                    class="dropcap bg-transparent rounded px-2 mb-1"
                    style="color: #574640"
                    >H</span
                  >
                  et is ook mogelijk dat u al voetganger of fietser wordt
                  aangereden door bijvoorbeeld een bus of tram. In dat geval
                  heeft u in vrijwel bijna alle gevallen recht op vergoeding van
                  minimaal 50% van uw letselschade.
                </p>
              </b-card>
            </b-col>
            <b-col lg="12">
              <b-card
                style="
                  background-color: #574640;
                  position: relative;
                  color: #fff;
                  padding: 10px;
                "
                no-body
                class="mb-3 aos"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <b-card-body class="pb-0">
                  <p style="color: #fff" class="pb-6">
                    Fietsers en voetgangers worden beschouwd als kwetsbare
                    verkeersdeelnemers en deze groep heeft daarom vrijwel altijd
                    recht op een vergoeding van minimaal 50%, ongeacht wie er
                    schuldig is aan het ongeval. Slechts in uitzonderlijke
                    gevallen kan van deze regel worden afgeweken, er moet in dat
                    geval sprake zijn van opzet of aan opzet grenzende
                    roekeloosheid (hier is in de praktijk zelden sprake van).
                    Het percentage kan daarentegen ook oplopen tot een volledige
                    vergoeding van 100%, natuurlijk is dit afhankelijk van de
                    situatie.
                  </p>
                  <img
                    style="position: absolute; bottom: 0; left: 0"
                    src="@/assets/images/banner-shape.png"
                    alt="banner-shape"
                  />
                </b-card-body>
              </b-card>
            </b-col> </b-row
        ></b-col>
        <b-col lg="4">
          <img
            class="mb-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            style="border-radius: 3px"
            src="@/assets/images/Side images/حالات18.jpg"
            alt="side-image"
          />
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            class="aos mb-3"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <p>
              Fietsers, voetgangers en ook jonge kinderen vallen onder speciale
              regelingen en hebben hierdoor veelal eerder recht op een
              vergoeding voor letselschade. Het is daarom belangrijk, indien het
              plaatsvinden van het ongeval (deels) uw eigen schuld is geweest,
              om niet te snel aan te nemen dat u geen recht op een vergoeding
              heeft. Voor meer informatie kunt u kijken op de pagina
              <router-link
                @click="scrollToTop"
                :to="{ name: 'fietsongeval' }"
                style="color: #17a2b8"
                >‘fietsongeluk’</router-link
              >
              of
              <router-link
                @click="scrollToTop"
                :to="{ name: 'voetgangersongeluk' }"
                style="color: #17a2b8"
                >‘voetgangersongeluk’</router-link
              >
              en contact opnemen met S&A Juristen.
            </p>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            style="background-color: #574640; position: relative; color: #fff"
            class="mb-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <p style="color: #fff" class="pb-8">
                Uiteraard is er bij deze gevallen geen sprake van de
                vervoerdersaansprakelijkheid op grond van artikel 8:105 BW,
                immers gaat het hier om een aanrijding tussen twee partijen.
              </p>
              <img
                style="position: absolute; bottom: 0; left: 0"
                src="@/assets/images/banner-shape.png"
                alt="banner-shape"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <img src="@/assets/images/line.png" alt="line" />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Status/22- Een ongeval als voetganger of fietser.jpg";

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
.btns {
  margin-top: 12rem !important;
}
.btn-6 {
  border: none;
  padding: 1rem;
}
@media (max-width: 430px) {
  p,
  h3 {
    width: 100% !important;
  }
  .title {
    align-items: start !important;
    margin-top: -15% !important;
  }
  h3 {
    font-size: 14px;
  }
  p {
    font-size: 13px;
  }
  .btns {
    align-items: start !important;
    margin-top: 63% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
}
@media (max-width: 390px) {
  .btns {
    align-items: start !important;
    margin-top: 70% !important;
  }
}
@media (max-width: 375px) {
  .btns {
    align-items: start !important;
    margin-top: 75% !important;
  }
}
</style>
