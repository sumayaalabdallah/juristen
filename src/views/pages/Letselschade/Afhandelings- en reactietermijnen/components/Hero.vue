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
          Afhandelings- en reactietermijnen
        </h3>
        <p
          class="text-white w-75 aos"
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Er kan geen specifieke termijn worden gekoppeld aan de duur van een
          letseldossier. Dit verschilt per dossier, ook is dit mede afhankelijk
          van het letsel en het daarbij behorende herstel.
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
      <b-row class="mt-0 pt-0 d-flex align-items-center justify-content-center">
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
                <span class="dropcap bg-transparent rounded px-2 mb-1">H</span>
                et is begrijpend dat u wenst dat uw letselschade dossier zo snel
                mogelijk afgehandeld kan worden. Uit onderzoek is eveneens
                gebleken dat het langdurig aanhouden van een letselschadedossier
                nadelig kan zijn voor het herstel van betrokkenen. Door het
                voortduren van het dossier blijft het slachtoffer geconfronteerd
                worden met de gevolgen van het ongeval. Wij van S&A Juristen
                streven dan ook naar een snelle en efficiënte afhandeling,
                echter is de praktijk minder rooskleurig en hebben wij vaak te
                maken met derden waardoor de wachttijden vrij snel oplopen.
                Daarnaast is de afhandeling van een dossier ook afhankelijk van
                het opgelopen letsel en hoe het herstel verloopt.
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
                Het eerste wachten begint vaak bij de reactie op de
                aansprakelijkstelling. Hoe snel de reactie hierop binnenkomt is
                in ieder dossier verschillend en kan variëren van één dag tot
                een aantal maanden. In de praktijk is dit gemiddeld genomen een
                aantal weken. Volgens de wet heeft de verzekeraar namelijk een
                periode van drie maanden waarbinnen zij een standpunt moet
                innemen. Aan deze termijn zijn echter geen directe consequenties
                verbonden en in sommige dossiers kan het dan ook voorkomen dat
                een verzekeraar actief bezig is met het verzamelen van
                aanvullend bewijs vanuit de eigen verzekerde en dat hierdoor een
                definitief standpunt later pas volgt.
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
                Daarbij kampen veel verzekeraars met werkachterstanden waardoor
                het gelet op de capaciteit niet altijd mogelijk is om op de
                korte termijn een reactie te verkrijgen. Veel verzekeraars zijn
                bereid om mee te denken wanneer het slachtoffer een prangende
                vraag. Echter, is dit niet altijd mogelijk en lenen veel vragen
                zich hier niet voor waardoor afgewacht moet worden wanneer de
                verzekeraar een reactie geeft. Uiteraard proberen wij hier wel
                enige invloed op uit te oefenen door de termijnen goed in de
                gaten te houden en tussentijds contact met de verzekeraar op te
                nemen om te informeren naar de stand van zaken.
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
                Tijdens het proces is het daarnaast ook nodig om contact met
                derden op te nemen. Vooral het opvragen van de medische
                informatie bij de behandelaren en het daaruit voortvloeiende
                medisch advies zijn hiervan goede voorbeelden. Dit zijn namelijk
                stappen die in veel dossiers genomen moeten worden, maar waarbij
                wij afhankelijk zijn de behandelaren en de medisch adviseur.
                Daarbij is het gegeven voorbeeld maar een klein deel van de
                derden die betrokken kunnen worden bij een lopende letselschade
                zaak.
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
                Bij S&A Juristen hebben wij de regel om onze caseload lager te
                houden zodat wij de tijd en aandacht aan een dossier kunnen
                geven die deze verdient. Onder de streep wensen wij niet alleen
                te kijken naar wat er binnenkomt, ofwel wat een zaak
                uiteindelijk oplevert maar willen wij ook zo adequaat mogelijk
                bijstand kunnen verlenen en willen wij ook in een lopend dossier
                snel kunnen handelen zodat de wachttijden vanuit ons kantoor
                hierin beperkt zijn.
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
import bg9Img from "@/assets/images/Letselschade/Afhandelings- en reactietermijnen HERO.jpg";

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
ul li {
  list-style: none;
}

p {
  font-size: 20px;
  color: #574640;
}
.btns {
  margin-top: 15rem !important;
}
.btn-6 {
  border: none;
  padding: 1rem;
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
  p {
    font-size: 15px !important;
  }
}
@media (max-width: 768px) {
  .btns {
    margin-top: 8rem !important;
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
    font-size: 14px;
  }
  p {
    font-size: 13px;
  }
  .btns {
    align-items: start !important;
    margin-top: 70% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
}
@media (max-width: 390px) {
  .btns {
    align-items: start !important;
    margin-top: 76% !important;
  }
}
</style>
