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
          Medische aansprakelijkheid
        </h3>
        <p
          class="text-white w-75 aos"
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Om een arts aansprakelijk te stellen voor schade, moet er bewijs zijn
          van een verwijtbare fout. Verschillende situaties kunnen leiden tot
          een aansprakelijkheidsclaim, maar het is belangrijk onderscheid te
          maken tussen complicaties waarvoor de arts niet verantwoordelijk kan
          worden gehouden en fouten die wel verwijtbaar zijn.
        </p>
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
                <h6 class="creative-title">
                  Wanneer is een arts of ziekenhuis aansprakelijk?
                </h6>
                <p>
                  Complicaties kunnen optreden als natuurlijke reactie van het
                  lichaam op medische interventies, zelfs wanneer de arts
                  correct heeft gehandeld. Voorbeelden zijn een ontstoken wond
                  of een allergische reactie op medicatie. Dit zijn risico’s die
                  bij de patiënt liggen en zijn niet het gevolg van een fout van
                  de arts. Verwijtbaar onzorgvuldig handelen is echter iets
                  anders. Dit omvat situaties waarin schade had kunnen worden
                  voorkomen als een andere arts dezelfde behandeling had
                  uitgevoerd. Voorbeelden zijn: het geven van onjuiste
                  informatie, een verkeerde diagnose stellen, medicatie
                  voorschrijven terwijl bekend is dat de patiënt allergisch is
                  of een operatie aan het verkeerde lichaamsdeel.
                </p>
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
            src="@/assets/images/Side images/حالات23.jpg"
            alt="side-image"
          />
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            style="background-color: #574640; position: relative; color: #fff"
            class="aos mb-3"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <h6 class="creative-title my-2">Zorgvuldigheidsnorm</h6>
              <p style="color: #fff" class="pb-8">
                Een arts is verplicht zich te houden aan de zorgvuldigheidsnorm.
                Dit betekent dat tijdens medische ingrepen de juiste protocollen
                en procedures moeten worden gevolgd. Ook het omgaan met risico’s
                en het naleven van hygiënestandaarden zijn essentieel. Als kan
                worden bewezen dat een arts deze normen niet heeft nageleefd,
                kan hij aansprakelijk worden gesteld.
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
            <h6 class="creative-title mt-3">
              Aansprakelijkheid als de arts niet meer werkzaam is
            </h6>
            <p>
              Medische instellingen zijn wettelijk aansprakelijk voor fouten van
              zorgverleners die bij hen in loondienst zijn. Deze
              aansprakelijkheid blijft bestaan, ook als de arts in kwestie niet
              meer werkzaam is bij de instelling.
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
              <h6 class="creative-title my-2">
                Aansprakelijkheid bij een medische fout
              </h6>
              <p style="color: #fff">
                Bij een medische fout kunt u de arts of het ziekenhuis
                aansprakelijk stellen voor de schade die u heeft geleden.
                Voordat dit kan, moet het onzorgvuldig handelen medisch worden
                onderzocht. Dit onderzoek beoordeelt of de arts de
                zorgvuldigheidsnorm heeft overschreden. Factoren zoals de
                oorzaak van de fout en de gevolgen ervan worden meegenomen in de
                beoordeling, die doorgaans wordt uitgevoerd door een (medisch)
                deskundige.
              </p>
              <p class="pb-2">
                Wanneer de aansprakelijkheid is vastgesteld, heeft u recht op
                een schadevergoeding. Deze dekt zowel materiële schade (zoals
                niet-vergoede medische kosten, verlies van inkomen of
                aanpassingen aan de woning) als immateriële schade (zoals pijn,
                verdriet en verlies van levensvreugde).
              </p>
              <img
                style="position: absolute; bottom: 0; left: 0"
                src="@/assets/images/banner-shape.png"
                alt="banner-shape"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <h6 class="creative-title my-5">Procedureverloop</h6>
        <b-col
          lg="4"
          cols="12"
          v-for="(blog, idx) in procedureverloop"
          :key="idx"
        >
          <b-card
            class="text-center mb-3 aos dev"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            style="
              background-color: #574640;
              height: 220px;
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
        </b-col>

        <p class="my-5">
          Op basis van deze stappen wordt beoordeeld of het haalbaar is een
          formele juridische aansprakelijkstelling te versturen. Daarbij wordt
          ook gekeken naar de kans dat de zorgverlener de aansprakelijkheid
          erkent. Indien u overweegt de zorgverlener aansprakelijk te stellen,
          kunt u de volgende stappen ondernemen:
        </p>
        <b-col lg="6" cols="12" v-for="(blog, idx) in basis" :key="idx">
          <b-card
            class="text-center my-4 aos dev"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            style="
              background-color: #574640;
              height: 240px;
              width: 100%;
              border-radius: 25px;
            "
          >
            <div
              class="position-absolute top-0 start-50 translate-middle bg-primary text-dark rounded-circle d-flex align-items-center justify-content-center"
              style="
                width: 80px;
                height: 80px;
                font-size: 25px;
                font-weight: bold;
                border: 3px solid #574640;
              "
            >
              {{ idx + 1 }}
            </div>
            <p class="p-2 pt-4 text-white">{{ blog.description }}</p>
          </b-card>
        </b-col>
        <img src="@/assets/images/line.png" alt="line" />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Status/28- Medische aansprakelijkheid.jpg";
import { procedureverloop } from "@/views/pages/Overige Letselschade/data";
import { basis } from "@/views/pages/Overige Letselschade/data";

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
  margin-top: 18rem !important;
}
.btn-6 {
  border: none;
  padding: 1rem;
}
@media (max-width: 1366px) {
  .btns {
    margin-top: 13rem !important;
  }
  .title {
    margin-top: -80px !important;
  }
  .creative-title {
    font-size: 35px !important;
  }
}
@media (max-width: 820px) {
  .btns {
    margin-top: 9rem !important;
  }
  p {
    font-size: 13px !important;
  }
  .dev {
    height: 200px !important;
  }
}
@media (max-width: 430px) {
  .title {
    margin-top: -100px !important;
  }
  p,
  h3 {
    width: 100% !important;
  }
  .creative-title {
    font-size: 30px !important;
  }
  .btns {
    margin-top: 40% !important;
  }
}
@media (max-width: 399px) {
  p,
  h3 {
    width: 100% !important;
  }
  .title {
    align-items: start !important;
    margin-top: -32% !important;
  }
  .creative-title {
    font-size: 20px;
  }
  p {
    font-size: 13px;
  }
  .btns {
    align-items: start !important;
    margin-top: 71% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
}
@media (max-width: 375px) {
  .dev {
    height: 230px !important;
  }
  .btns {
    align-items: start !important;
    margin-top: 75% !important;
  }
}
</style>
