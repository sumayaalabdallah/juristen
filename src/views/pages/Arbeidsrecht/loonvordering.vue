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
          Loonvordering: Wat te doen als u loon niet ontvangt?
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
              <p style="color: #fff" class="pb-8">
                <span
                  class="dropcap bg-transparent text-white rounded px-2 mb-1"
                  >W</span
                >
                anneer een werkgever zijn werknemer niet op tijd of volledig
                betaalt, kan dit leiden tot een loonvordering. Dit is een
                juridische procedure waarbij de werknemer het achterstallige
                loon opeist. Het is belangrijk om te weten dat het recht op loon
                een fundamenteel recht is voor iedere werknemer, en dat u als
                werknemer niet hoeft te wachten op een formele actie van uw
                werkgever om het verschuldigde loon te ontvangen.
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
            <h6 class="creative-title">Wat is een loonvordering?</h6>
            <p>
              Een loonvordering ontstaat wanneer een werknemer merkt dat hij of
              zij niet het volledige loon heeft ontvangen dat volgens de
              arbeidsovereenkomst, CAO of wettelijke regels verschuldigd is. Dit
              kan bijvoorbeeld het geval zijn wanneer:
            </p>
          </b-card>
        </b-col>
        <b-col cols="12" lg="3">
          <div
            class="card2 card-hover-shadow border aos"
            data-aos="fade-up"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div class="p-3">
              <p tag="h6">
                De werkgever een deel van het loon niet heeft betaald.
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" lg="3">
          <div
            class="card2 card-hover-shadow border aos"
            data-aos="fade-up"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div class="p-3">
              <p tag="h6">Het loon later dan afgesproken is betaald.</p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" lg="3">
          <div
            class="card2 card-hover-shadow border aos"
            data-aos="fade-up"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div class="p-2">
              <p tag="h6">
                Er sprake is van een fout in de berekening van het salaris,
                zoals niet uitbetaalde overuren of vakantiedagen.
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" lg="3">
          <div
            class="card2 card-hover-shadow border aos"
            data-aos="fade-up"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div class="p-3">
              <p tag="h6">
                Er geen salaris wordt betaald, terwijl dit wel contractueel
                verplicht is.
              </p>
            </div>
          </div>
        </b-col>

        <b-col lg="12">
          <b-card
            no-body
            class="aos mt-3"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <h6 class="creative-title">
              Wat kunt u doen bij een loonvordering?
            </h6>
            <p>
              Als u merkt dat u minder loon heeft ontvangen dan waar u recht op
              heeft, is het belangrijk om zo snel mogelijk actie te ondernemen.
              Volg deze stappen om uw loonvordering te regelen:
            </p>
          </b-card>
        </b-col>
        <b-col cols="12" lg="6">
          <div
            class="card3 card-hover-shadow border aos mb-3"
            data-aos="fade-up"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div class="p-3">
              <h5 class="pb-2" style="color: #f8f8f8">
                1. Controleer uw loonstrook
              </h5>
              <p tag="h6">
                Controleer altijd goed uw loonstrook en vergelijk deze met de
                afspraken in uw arbeidsovereenkomst of de toepasselijke cao.
                Soms kan een fout in de administratie of een misverstand de
                oorzaak zijn.
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" lg="6">
          <div
            class="card3 card-hover-shadow border aos mb-3"
            data-aos="fade-up"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div class="p-3">
              <h5 class="pb-2" style="color: #f8f8f8">
                2. Neem contact op met uw werkgever
              </h5>
              <p tag="h6">
                Neem in eerste instantie contact op met uw werkgever of de
                personeelsadministratie. Vaak kan een probleem op deze manier
                snel opgelost worden. U kunt bijvoorbeeld vragen naar de reden
                waarom het loon niet volledig is betaald.
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" lg="6">
          <div
            class="card3 card-hover-shadow border aos mb-3"
            data-aos="fade-up"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div class="p-3">
              <h5 class="pb-2" style="color: #f8f8f8">
                3. Stuur een schriftelijke vordering
              </h5>
              <p tag="h6">
                Als een gesprek met uw werkgever geen resultaat oplevert, kunt u
                een schriftelijke loonvordering sturen. In deze brief geeft u
                duidelijk aan welk loon u nog tegoed heeft, op basis van de
                gemaakte afspraken. U kunt hierbij ook aangeven dat u het loon
                binnen een redelijke termijn verwacht, bijvoorbeeld 14 dagen.
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" lg="6">
          <div
            class="card3 card-hover-shadow border aos mb-3"
            data-aos="fade-up"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div class="p-3">
              <h5 class="pb-2" style="color: #f8f8f8">
                4. Schakel een jurist in
              </h5>
              <p tag="h6">
                Als het probleem niet wordt opgelost, kunt u overwegen om
                juridische stappen te ondernemen. Een jurist kan u helpen met
                het opstellen van een vordering of kan namens u een procedure
                starten bij de rechtbank. Dit kan ook het geval zijn als de
                werkgever het loon te laat betaalt of een fout maakt bij de
                berekening van uw loon.
              </p>
            </div>
          </div>
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
              <h6 class="creative-title">
                Wat gebeurt er als de werkgever niet betaalt?
              </h6>
              <p style="color: #fff" class="pb-8">
                Als de werkgever na een vordering alsnog niet betaalt, kunt u
                juridische stappen ondernemen. Dit kan bij de kantonrechter. Bij
                een loonvordering kunt u ook kosten voor het te laat betalen van
                het loon en de kosten die u maakt voor het innen van het loon
                vorderen. De procedure kan afhankelijk van de situatie variëren,
                maar de werknemer heeft recht op het achterstallige loon, plus
                eventuele oplopende kosten en vergoedingen. Het is belangrijk om
                te weten dat er een verjaringstermijn geldt voor het vorderen
                van loon, 5 jaar. Dit betekent dat u achterstallig loon kunt
                vorderen, zelfs als er enige tijd is verstreken.
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
            <h6 class="creative-title my-3">
              Vergoeding van juridische kosten
            </h6>
            <p>
              Als u een loonvordering indient en de rechter stelt de vordering
              vast, kan het zijn dat de werkgever de juridische kosten moet
              vergoeden. Dit betekent dat de werkgever de kosten die u maakt
              voor het verkrijgen van het loon moet betalen.
            </p>
            <p>
              <span style="font-weight: 800"> Let op:</span> Als u de
              loonvordering niet wint, moet u vaak zelf voor de juridische
              kosten opdraaien. Daarom is het verstandig om juridisch advies in
              te winnen voordat u een loonvordering indient.
            </p>
          </b-card>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            class="aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <h6 class="creative-title mb-3">
              Tips voor het indienen van een loonvordering
            </h6>
          </b-card>
        </b-col>
        <b-col cols="12" lg="4">
          <div
            class="card4 card-hover-shadow border aos"
            data-aos="fade-up"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div class="p-3">
              <p tag="h6">
                Wees goed voorbereid: Zorg ervoor dat u alle benodigde
                documenten bij de hand hebt, zoals uw arbeidsovereenkomst,
                loonstroken, of andere bewijsstukken die aantonen dat het loon
                niet correct is betaald.
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" lg="4">
          <div
            class="card4 card-hover-shadow border aos"
            data-aos="fade-up"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div class="p-3">
              <p tag="h6">
                Probeer het eerst via een gesprek: Het kan vaak voorkomen dat
                het probleem simpelweg een misverstand of administratieve
                vergissing is. Bespreek de situatie eerst met uw werkgever
                voordat u overgaat tot juridische stappen.
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" lg="4">
          <div
            class="card4 card-hover-shadow border aos"
            data-aos="fade-up"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div class="p-3">
              <p tag="h6">
                Weet wanneer u actie moet ondernemen: Wacht niet te lang met het
                indienen van een loonvordering.  
              </p>
            </div>
          </div>
        </b-col>
        <img src="@/assets/images/line.png" alt="line" />
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Loonvordering hero.jpg";

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
.card2 {
  width: 100%;
  height: 200px;
  margin: 10px 0;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease !important;
  border: 2px solid #ffa102 !important;
  background-color: #ffa102;
  border-radius: 10px;
  color: #f8f8f8;
}
.card3 {
  width: 100%;
  height: 300px;
  margin: 10px 0;
  margin-bottom: 40px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease !important;
  border: 2px solid #ffa102 !important;
  background-color: #ffa102;
  color: #f8f8f8;

  border-radius: 10px;
}
.card4 {
  width: 100%;
  height: 280px;
  margin: 10px 0;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease !important;
  border: 2px solid #ffa102 !important;
  background-color: #ffa102;
  border-radius: 10px;
  color: #f8f8f8;
}

p {
  font-size: 20px;
  color: #574640;
}
ul li {
  font-size: 18px;
  color: rgb(68, 70, 69);
}
h6 {
  color: #ffa102;
}
.btns {
  margin-top: 13rem !important;
}
.btn-6 {
  border: none;
  padding: 1rem;
}
.title {
  margin-top: -50px !important;
}
@media (max-width: 1024px) {
  .btns {
    margin-top: 10rem !important;
  }
  .title {
    margin-top: -26px !important;
  }
  .creative-title {
    font-size: 30px !important;
  }
  .card2 {
    height: 250px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  .card3,
  .card4 {
    height: 350px;
  }
}
@media (max-width: 820px) {
  .card2,
  .card3,
  .card4 {
    height: 100%;
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
    font-size: 14px;
  }
  p {
    font-size: 13px;
  }
  .btns {
    align-items: start !important;
    margin-top: 60% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
  .card2,
  .last-card {
    height: 100px;
  }
  .card3 {
    height: 220px;
    margin-bottom: 10px;
  }
  .card4 {
    height: 150px;
    margin-bottom: 10px;
  }
}
@media (max-width: 414px) {
  .btns {
    align-items: start !important;
    margin-top: 66% !important;
  }
}
</style>
