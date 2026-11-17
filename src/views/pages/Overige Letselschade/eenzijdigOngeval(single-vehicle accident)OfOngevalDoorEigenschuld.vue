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
          class="display-4 fs-1 text-white creative-title aos w-75"
          data-aos="fade-up"
          data-aos-delay="40"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Eenzijdig ongeval (single-vehicle accident) of ongeval door
          eigenschuld
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
    <b-container class="mb-6 mt-0 pt-0">
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
                  <span class="dropcap mb-1 bg-transparent rounded px-2"
                    >D</span
                  >
                  e oorzaak van een ongeluk ligt niet altijd bij een ander. Het
                  kan zijn dat de bestuurder op een bepaald moment niet goed op
                  de weg lette, of dat er om een andere reden een aanrijding
                  plaatsvond. Dit kan zowel een eenzijdig ongeval zijn (zoals
                  een aanrijding tegen een boom) als een meerzijdig ongeval
                  (inclusief een botsing met een andere weggebruiker).
                </p>
              </b-card>
            </b-col>
            <b-col lg="12">
              <b-card
                no-body
                class="mb-3 aos"
                style="
                  background-color: #574640;
                  position: relative;
                  color: #fff;
                "
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <b-card-body class="pb-0">
                  <p style="color: #fff" class="pb-7">
                    Wanneer er een ongeluk gebeurt en het direct duidelijk is
                    dat er geen aansprakelijke partij is, kan de herstelfase
                    extra lastig zijn vanwege de hoge kosten die hierbij komen
                    kijken. In sommige gevallen kunnen wij ook in zulke
                    situaties gratis juridische bijstand aanbieden om de kosten
                    van uw letselschade toch vergoed te krijgen. Het is in dat
                    geval wel belangrijk dat u op het moment van het ongeluk een
                    schadeverzekering inzittenden (SVI-verzekering, of in het
                    geval van een scooter- of motorongeluk ook wel
                    ‘schadeverzekering opzittende’ genoemd) had afgesloten. Als
                    u twijfelt of vragen heeft, kunt u altijd vrijblijvend
                    contact met ons opnemen.
                  </p>
                  <img
                    style="position: absolute; bottom: 0; left: 0"
                    src="@/assets/images/banner-shape.png"
                    alt="banner-shape"
                  />
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="4">
          <img
            class="mb-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            style="border-radius: 3px"
            src="@/assets/images/Side images/حالات7.jpg"
            alt="side-image"
        /></b-col>
        <b-col lg="12">
          <b-card
            no-body
            class="mb-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <h6 class="creative-title mt-3">
              Klachten na een eenzijdig ongeval of ongeval door eigenschuld
            </h6>

            <p>
              Na een eenzijdig ongeval met een scooter of motor kunnen
              bestuurders verschillende klachten en verwondingen oplopen.
              Veelvoorkomende problemen zijn nek- en rugklachten door whiplash,
              als gevolg van de snelle beweging van het hoofd bij de impact. Ook
              kneuzingen en snijwonden komen vaak voor door het vallen of
              contact met objecten zoals de grond of een hek.
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
              <p style="color: #fff" class="pb-7">
                In ernstigere gevallen kunnen er botbreuken optreden, vooral aan
                de armen, benen en ribben. Daarnaast kunnen er schouder- en
                armblessures ontstaan door het vasthouden aan het stuur of het
                vallen op een arm. Brandwonden kunnen optreden als het voertuig
                of de motor in aanraking komt met de bestuurder of de grond,
                vooral bij een val of bij hoge snelheid.
              </p>
              <img
                style="position: absolute; bottom: 0; left: 0"
                src="@/assets/images/banner-shape.png"
                alt="banner-shape"
              />
            </b-card-body>
          </b-card>
        </b-col>

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
              Naast de lichamelijke verwondingen kunnen psychische klachten
              zoals angst, depressie of zelfs PTSS optreden als gevolg van het
              trauma van het ongeluk. Dit kan het herstelproces aanzienlijk
              beïnvloeden. De verwondingen kunnen leiden tot beperkingen in het
              dagelijks leven, zoals moeite met bewegen, werken of het hervatten
              van normale activiteiten door pijn of mobiliteitsverlies. Omdat
              sommige verwondingen, zoals interne letsels of whiplash, pas later
              duidelijk worden, is het cruciaal om altijd medische hulp te
              zoeken. Vroege diagnose en behandeling kunnen helpen om langdurige
              klachten te voorkomen en het herstel te bevorderen.
            </p>
          </b-card>
        </b-col>
        <img src="@/assets/images/line.png" alt="line" />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Status/7- Eenzijdig ongeval (single-vehicle accident) of ongeval door eigenschuld.jpg";

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
h6 {
  color: #ffa102;
}
.btns {
  margin-top: 15rem !important;
}
.btn-6 {
  border: none;
  padding: 1rem;
}
.title {
  margin-top: -80px !important;
}
@media (max-width: 1024px) {
  .btns {
    margin-top: 13rem !important;
  }
  .title {
    margin-top: -26px !important;
  }
  .creative-title {
    font-size: 35px !important;
  }
}
@media (max-width: 430px) {
  p,
  h3 {
    width: 100% !important;
  }
  .title {
    align-items: start !important;
    margin-top: -25% !important;
  }
  h3 {
    font-size: 14px;
  }
  p {
    font-size: 13px;
  }
  .btns {
    align-items: start !important;
    margin-top: 66% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
}
@media (max-width: 400px) {
  .btns {
    align-items: start !important;
    margin-top: 71% !important;
  }
}
@media (max-width: 375px) {
  .btns {
    align-items: start !important;
    margin-top: 78% !important;
  }
}
</style>
