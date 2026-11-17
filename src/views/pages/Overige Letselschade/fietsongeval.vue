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
          Fietsongeval
        </h3>
        <p
          class="text-white w-75 aos"
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Als fietser kunt u een aanrijding hebben met een andere fietser, maar
          helaas komt het ook vaak voor dat fietsers aangereden worden door
          motorvoertuigen. In de regel is het letsel bij een aanrijding tussen
          een fietser en een motorvoertuig ernstiger, omdat motorvoertuigen met
          een hogere snelheid rijden. Daarnaast kan het ook mogelijk zijn dat
          een fietser ten val komt door een slecht onderhouden wegdek.
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
      <b-row class="mt-0">
        <b-col lg="12">
          <b-row
            class="mt-0 pt-0 d-flex align-items-center justify-content-center"
          >
            <b-col lg="12">
              <b-card
                no-body
                class="my-3 aos"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <p>
                  <span
                    class="dropcap bg-transparent rounded px-2 mb-1"
                    style="color: #574640"
                    >A</span
                  >ls u bent aangereden terwijl u fietste en verwondingen heeft
                  opgelopen, kunt u mogelijk (een deel van) uw letselschade
                  verhalen op de veroorzaker van het ongeluk. U kunt zelfs recht
                  hebben op een vergoeding als het ongeluk veroorzaakt is
                  doordat u zelf een verkeersfout heeft gemaakt. Fietsers zijn
                  namelijk bijzonder kwetsbaar in het verkeer, waardoor de kans
                  op (ernstig) letsel groter is. Andere verkeersdeelnemers,
                  zoals automobilisten, dragen daarom een grotere
                  verantwoordelijkheid en moeten rekening houden met de
                  kwetsbaarheid van fietsers. Dit geldt zelfs als de fietser een
                  fout heeft gemaakt en de bestuurder van het motorvoertuig geen
                  enkel verwijt (geen schuld) kan worden gemaakt voor het
                  ongeluk.
                </p>
              </b-card>
            </b-col>
          </b-row>
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
                In Nederland geldt namelijk de risicoaansprakelijkheid voor
                bestuurders van motorvoertuigen. Dit betekent dat de
                automobilist altijd (gedeeltelijk) aansprakelijk is voor de
                schade die ontstaat bij een ongeval met een fietser, zelfs als
                het ongeval (deels) te wijten is aan een fout van de fietser.
                Dus, zelfs als de fietser een verkeersfout maakt die het ongeval
                veroorzaakt, blijft de automobilist aansprakelijk voor
                (minstens) een deel van de schade. In sommige gevallen,
                bijvoorbeeld als het gaat om een ongeval waarbij
                <router-link
                  @click="scrollToTop"
                  :to="{ name: 'kind-onder-de-14-jaar' }"
                  style="color: #17a2b8"
                  >een kind onder de 14 jaar</router-link
                >
                betrokken is, kan de aansprakelijkheid zelfs volledig bij de
                automobilist liggen (100%).
              </p>
              <img
                style="position: absolute; bottom: 0; left: 0"
                src="@/assets/images/banner-shape.png"
                alt="banner-shape"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <b-col
          lg="12"
          v-for="(blog, idx) in Fietsongeval"
          :key="idx"
          class="my-3"
        >
          <FietsongevalCard :blog="blog" />
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
            <h6 class="creative-title">Onduidelijkheid over de schuldvraag</h6>

            <p>
              In veel gevallen is het direct duidelijk wie schuldig is aan het
              veroorzaken van een ongeval, bijvoorbeeld als iemand door rood
              licht is gereden of geen voorrang heeft verleend (bij haaientanden
              of van rechts komend verkeer). Maar soms is de schuldvraag
              helemaal niet zo helder, of lijkt het in eerste instantie
              duidelijk, maar blijkt het achteraf toch anders te zijn. In dat
              geval is het belangrijk om te realiseren dat niet de schuldvraag
              centraal staat, maar wel wie hiervoor aansprakelijk gehouden kan
              worden. Het is dus niet altijd van belang wie de fout heeft
              gemaakt, maar wie (gedeeltelijk) verantwoordelijk kan worden
              gehouden voor wat er gebeurd is.
            </p>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            class="mb-3 aos"
            style="background-color: #574640; position: relative; color: #fff"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <p style="color: #fff" class="pb-8">
                Als u bent aangereden terwijl u de auto voorrang had moeten
                verlenen, staat vast dat u een verkeersregel heeft overtreden.
                Echter, de automobilist had u toch moeten opmerken en zijn
                snelheid daarop moeten aanpassen (anticiperen). Afhankelijk van
                de situatie kan de verzekeringsmaatschappij van de automobilist
                alsnog verplicht worden om uw (letsel)schade in ieder geval voor
                50 procent te vergoeden. Vervolgens kan de verkeersfout
                meegenomen worden bij het bepalen van de billijkheidscorrectie.
                Dit betekent dat de hoogte van de uiteindelijke schadevergoeding
                nog verhoogd of verlaagd kan worden door te kijken naar de
                ‘eigenschuld’ van het slachtoffer.
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
              Het komt dan ook vaker voor dat een fietser denkt geen recht te
              hebben op een vergoeding van zijn letselschade. Echter, door de
              speciale regels voor kwetsbare verkeersdeelnemers kan het toch zo
              zijn dat u recht heeft op (gedeeltelijke) vergoeding van uw
              schade. Wij adviseren daarom altijd om juridisch advies in te
              winnen na een ongeval, zodat u duidelijkheid heeft over uw
              rechten.
            </p>
          </b-card>
        </b-col>
        <img src="@/assets/images/line.png" alt="line" />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Status/13- Fietsongeval.jpg";
import { Fietsongeval } from "@/views/pages/Overige Letselschade/data";
import FietsongevalCard from "@/views/pages/Overige Letselschade/components/FietsongevalCard.vue";
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
    margin-top: 15rem !important;
  }
  .title {
    margin-top: -26px !important;
  }
  .creative-title {
    font-size: 30px !important;
  }
  p {
    font-size: 14px !important;
  }
}
@media (max-width: 820px) {
  .btns {
    margin-top: 12rem !important;
  }
  p {
    font-size: 13px !important;
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
    margin-top: -28% !important;
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
@media (max-width: 414px) {
  .btns {
    align-items: start !important;
    margin-top: 68% !important;
  }
}
@media (max-width: 400px) {
  .btns {
    align-items: start !important;
    margin-top: 72% !important;
  }
}
@media (max-width: 375px) {
  .btns {
    align-items: start !important;
    margin-top: 77% !important;
  }
}
</style>
