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
          Hoogte van het schadebedrag
        </h3>
        <p
          class="text-white w-75 aos"
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Elk ongeval, elke persoon en alle daaruit voortvloeiende schade zijn
          uniek. Het ene slachtoffer hoopt dat zijn klachten spoedig zullen
          verdwijnen en gaat (wellicht tegen beter weten in) geruime tijd door
          met zijn normale leven. Het kan echter voorkomen dat de klachten niet
          overgaan en de huidige leefwijze niet past bij het aanwezige
          klachtenpatroon. Dit kan problematisch zijn, omdat het bij deze groep
          slachtoffers vaak voorkomt dat zij de veroorzaker van het
          verkeersongeval in eerste instantie niet willen 'benadelen'.
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
    <b-container class="mt-0 pt-0">
      <b-row class="mt-0 d-flex justify-content-center">
        <b-col lg="12">
          <b-card
            no-body
            class="mb-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <p>
                <span class="dropcap bg-transparent rounded px-2 mb-1">D</span>
                aarentegen zien wij relatief vaak dat mensen verhalen meebrengen
                over de schadevergoeding die 'iemand die zij kennen' heeft
                gekregen. Dit kan leiden tot een vertekend beeld van de
                realiteit en de bedragen die daarmee samenhangen. Wij vinden het
                belangrijk dat onze cliënten een goed en realistisch beeld
                krijgen van de schadevergoeding, zonder gouden bergen te beloven
                die niet waargemaakt kunnen worden. Tegelijkertijd willen we
                ervoor zorgen dat zij niet benadeeld worden bij de bepaling van
                het schadebedrag waar zij recht op hebben.
              </p>
            </b-card-body>
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
                Als u slachtoffer bent van een verkeersongeval waarbij een
                andere weggebruiker aansprakelijk kan worden gesteld, heeft u
                wettelijk recht op vergoeding van uw letselschade. Laat u niet
                afschrikken om een schadeclaim in te dienen. We zien vaak dat
                slachtoffers de veroorzaker van het ongeval niet willen
                'lastigvallen', waardoor ze in eerste instantie geen melding
                doen. Wanneer deze slachtoffers later echter ernstige klachten
                ervaren en ook financiële problemen ondervinden, willen ze
                alsnog de veroorzaker aansprakelijk stellen.
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
            <b-card-body class="pb-0">
              <p>
                Het is belangrijk om te weten dat het beter is om direct actie
                te ondernemen. Elke bestuurder van een motorvoertuig in
                Nederland heeft namelijk een verplichte wettelijke
                aansprakelijkheidsverzekering (WA-verzekering). Ook
                niet-gemotoriseerde weggebruikers kunnen een
                aansprakelijkheidsverzekering hebben. Dit betekent dat veel
                inwoners in Nederland een passende verzekering hebben voor
                dergelijke situaties. Het verhalen van uw schade is dus vooral
                een kwestie voor de verzekeraar, en een verkeersdeelnemer moet
                de consequenties van een ongeval dragen.
              </p>
            </b-card-body>
          </b-card>
        </b-col>
        <img src="@/assets/images/line.png" alt="line" />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Letselschade/Hoogte van het schadebedrag HERO.jpg";

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
  margin-top: 17rem !important;
}
.btn-6 {
  border: none;
  padding: 1rem;
}
.title {
  margin-top: -70px !important;
}
@media (max-width: 1024px) {
  .btns {
    margin-top: 16rem !important;
  }
  .title {
    margin-top: -26px !important;
  }
  .creative-title {
    font-size: 30px !important;
  }
  p {
    font-size: 15px !important;
  }
}
@media (max-width: 820px) {
  .btns {
    margin-top: 10rem !important;
  }
  p {
    font-size: 12px !important;
  }
  .title {
    margin-top: -50px !important;
  }
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
    font-size: 19px !important;
  }
  p {
    font-size: 12px;
  }
  .btns {
    align-items: start !important;
    margin-top: 74% !important;
  }
  .btn-6 {
    font-size: 11px !important;
  }
}
@media (max-width: 430px) {
  .btns {
    align-items: start !important;
    margin-top: 70% !important;
  }
}

@media (max-width: 399px) {
  .btns {
    align-items: start !important;
    margin-top: 80% !important;
  }
}
@media (max-width: 375px) {
  .btns {
    align-items: start !important;
    margin-top: 83% !important;
  }
}
</style>
