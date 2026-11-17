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
          Kind onder de 14 jaar
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
      <b-row class="mt-0 pt-0 d-flex align-items-center justify-content-center">
        <b-col lg="12">
          <b-card
            no-body
            class="h-100 card aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <h6 class="creative-title mb-3">Letsel bij een kind tot 14 jaar</h6>
            <p>
              Volgens vaste rechtspraak en de wet wordt een kind jonger dan 14
              jaar in vrijwel alle gevallen geen 'eigen schuld' toegerekend als
              het betrokken is bij een aanrijding. Dit betekent dat het kind
              recht heeft op een volledige vergoeding van zijn of haar
              letselschade. Dit komt doordat kinderen vaak impulsief en
              onvoorspelbaar handelen in het verkeer, waardoor ze een groter
              risico lopen om aangereden te worden. Omdat kinderen dit niet
              expres doen en bepaalde verkeersvaardigheden nog niet hebben
              ontwikkeld, verdienen zij extra bescherming. Bovendien zijn zij,
              doordat zij vaak nog niet volledig zijn volgroeid, extra
              kwetsbaar. De gevolgen van een aanrijding zijn voor hen dan ook
              vaak ernstiger dan voor volwassenen.
            </p>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            style="background-color: #574640; color: #fff; position: relative"
            class="aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <p style="color: #fff" class="pb-8">
                Zoals eerder vermeld, wordt een kind van 14 jaar of jonger in
                bijna alle gevallen geen eigen schuld toegerekend. Er geldt
                echter wel een uitzondering: als er sprake is van opzet of
                bewuste roekeloosheid, vervalt de regel van volledige
                aansprakelijkheid. In de praktijk is het echter, vooral in het
                geval van kinderen, bijna onmogelijk om opzet of bewuste
                roekeloosheid te bewijzen. Een situatie waarbij een kind
                bijvoorbeeld geen voorrang verleent, valt hier niet onder. Het
                is dan ook aan de bestuurder van het motorvoertuig om aan te
                tonen dat er sprake was van opzet of bewuste roekeloosheid.
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
            class="aos my-3"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <p>
              Het komt nog wel eens voor dat de bestuurder van het motorvoertuig
              probeert de schuld van het ongeval bij het kind te leggen. Hoewel
              dit in veel gevallen geen verschil maakt voor de
              aansprakelijkheid, adviseren wij om hier alert op te zijn.
            </p>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            style="background-color: #574640; color: #fff; position: relative"
            class="aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <p style="color: #fff" class="pb-8">
                Wanneer een kind betrokken is bij een ongeval, zal de
                vaststelling van de omvang van de schade vaak de nodige
                discussie opleveren. Om ervoor te zorgen dat u krijgt waar u
                recht op heeft, en om rekening te houden met de toekomstige
                verwachtingen, is het van belang een letselschadejurist of
                advocaat in te schakelen. Dit verlicht ook de druk op de ouders
                of verzorgers, omdat zij niet zelf de correspondentie met de
                wederpartij hoeven te voeren. U heeft immers al genoeg aan de
                extra zorgen voor uw kind.
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
import bg9Img from "@/assets/images/Kind onder de 14 jaar.jpg";

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
ul li {
  font-size: 18px;
  color: rgb(68, 70, 69);
}
.btns {
  margin-top: 13rem !important;
}
.btn-6 {
  border: none;
  padding: 1rem;
}
@media (max-width: 500px) {
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
    margin-top: 65% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
}
</style>
