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
          Kettingbotsing
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
                    >Z</span
                  >
                  oals het woord al doet vermoeden, gaat het bij een
                  kettingbotsing om een aanrijding waarbij meerdere auto’s
                  aaneengeschakeld betrokken zijn. Dit soort botsingen komen
                  vaak voor tijdens de spits of op momenten met veel verkeer.
                  Volgens de Nederlandse wet is een bestuurder verplicht om
                  voldoende afstand te houden van zijn voorganger. Dit betekent
                  dat, behalve de bestuurder van de voorste auto, alle andere
                  bestuurders mogelijk een verkeersfout kunnen worden
                  aangerekend bij het ontstaan van een kettingbotsing.
                </p>
              </b-card>
            </b-col>
            <b-col lg="12">
              <b-card
                no-body
                style="
                  background-color: #574640;
                  position: relative;
                  color: #fff;
                  padding: 10px;
                "
                class="mb-3 aos"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <b-card-body class="pb-0">
                  <p style="color: #fff" class="pb-6">
                    In de praktijk is het echter niet altijd zo zwart-wit. Het
                    kan bijvoorbeeld gebeuren dat de voorste auto een
                    verkeersfout heeft gemaakt door onverwacht en zonder reden
                    hard tot stilstand te komen, waardoor de achteropkomende
                    auto's geen kans hebben om te remmen. Hierdoor kan de
                    situatie complex zijn en is het verstandig om advies in te
                    winnen van een letselschadejurist of advocaat over de
                    aansprakelijkheid.
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
            src="@/assets/images/Side images/حالات4.jpg"
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
            <h6 class="creative-title mt-3">Klachten na een kettingbotsing</h6>

            <p>
              De klachten die men na een kettingbotsing ervaart, komen vaak
              overeen met die na een ‘gewone’ kop-staartbotsing. Bij een
              kettingbotsing zijn er echter vaak meerdere klappen die elkaar in
              een zeer kort tijdsbestek opvolgen. Het lichaam reageert op de
              eerste impact, bijvoorbeeld door de spieren aan te spannen, wat
              kan leiden tot meer schade bij de daaropvolgende botsingen. Dit
              kan leiden tot discussies met verzekeraars over wie aansprakelijk
              is voor welke schade, wat voor slachtoffers vaak moeilijk te
              begrijpen is en soms als onredelijk aanvoelt.
            </p>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            style="background-color: #574640; position: relative; color: #fff"
            no-body
            class="mb-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <p style="color: #fff" class="pb-8">
                De klachten na een kettingbotsing kunnen zeer divers zijn.
                Veelvoorkomende symptomen zijn hoofdpijn (met duizeligheid en
                misselijkheid), nekpijn, rugpijn en schouderklachten. Deze
                kunnen wijzen op een whiplash. Naast deze relatief duidelijk
                aanwijsbare klachten kunnen ook vagere klachten optreden, zoals
                cognitieve problemen (bijvoorbeeld vergeetachtigheid,
                concentratieproblemen, prikkelbaarheid en gedragsveranderingen),
                slaapproblemen en een vreemd gevoel zoals tintelingen of
                doofheid. Dit is geen uitputtende lijst; er kunnen nog veel
                andere klachten optreden na een verkeersongeval.
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
              In de praktijk melden onze cliënten ook vaak dat zij, in meer of
              mindere mate, last hebben van angstklachten na het ongeval. Het is
              dan ook essentieel om klachten na een ongeluk altijd serieus te
              nemen. Het negeren van klachten kan het herstel ernstig
              belemmeren.
            </p>
          </b-card>
        </b-col>
        <img src="@/assets/images/line.png" alt="line" />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Status/4- Kettingbotsing.jpg";

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
  margin-top: 12rem !important;
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
@media (max-width: 430px) {
  p,
  h3 {
    width: 100% !important;
  }
  .title {
    align-items: start !important;
    margin-top: 0% !important;
  }
  h3 {
    font-size: 14px;
  }
  p {
    font-size: 13px;
  }
  .btns {
    align-items: start !important;
    margin-top: 64% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
}
@media (max-width: 400px) {
  .btns {
    align-items: start !important;
    margin-top: 68% !important;
  }
}
</style>
