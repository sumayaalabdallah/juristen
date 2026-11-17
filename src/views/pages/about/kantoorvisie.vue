<template>
  <section class="pt-0 pb-0 position-relative overflow-hidden">
    <b-card
      no-body
      class="bg-parallax h-500px h-md-600px h-xl-750px overflow-hidden position-relative"
      style="
        background-size: cover;
        background-position: center;
        clip-path: ellipse(80% 80% at 50% 0);
      "
      :style="{ backgroundImage: `url('${bg9Img}')` }"
    >
      <div class="bg-overlay bg-dark bg-opacity-50"></div>

      <div
        class="card-img-overlay d-flex align-items-center justify-content-center text-center z-index-2 title"
      >
        <h3
          class="display-4 fs-1 text-white creative-title aos"
          data-aos="fade-up"
          data-aos-delay="40"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Kantoorvisie
        </h3>
      </div>
      <div
        class="card-img-overlay d-flex align-items-center justify-content-center text-center flex-wrap z-index-2 mt-8 flex-sm-fill btns"
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
    <b-container>
      <b-row class="mt-0 pt-0">
        <b-accordion
          class="accordion-icon accordion-border aos"
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
          id="accordionFaq"
        >
          <b-col md="12">
            <b-accordion-item
              bodyClass="mt-3 pb-0"
              headerTag="p"
              class="mb-3"
              button-class="fw-semibold rounded collapsed"
            >
              <template #title>Over ons</template>
              <b-row class="px-2">
                <b-col lg="12">
                  <b-card
                    no-body
                    class="aos"
                    data-aos="fade-up"
                    data-aos-delay="80"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                  >
                    <p>
                      Wij zijn een klein juristenkantoor dat u kunt inschakelen
                      bij het verhalen van letselschade, problemen met de
                      werkgever en andere geschillen.
                    </p>
                  </b-card>
                </b-col>
                <b-col lg="12">
                  <b-card
                    no-body
                    style="
                      background-color: #574640;
                      color: #fff;
                      position: relative;
                      padding: 10px;
                    "
                    class="my-3 aos"
                    data-aos="fade-up"
                    data-aos-delay="80"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                  >
                    <b-card-body class="pb-0">
                      <p style="color: #fff" class="pb-6">
                        Wij vinden laagdrempelig contact met onze cliënten erg
                        belangrijk. Wij zijn daarom bereikbaar via sociale
                        media, per whatsapp, telefonisch en natuurlijk ook per
                        e-mail. Naast het laagdrempelige contact vinden wij het
                        belangrijk dat u zich daadwerkelijk gehoord en begrepen
                        voelt en dat u geen nummertje bent.
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
                    class="aos"
                    data-aos="fade-up"
                    data-aos-delay="80"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                  >
                    <p>
                      Het helpen van cliënten heeft bij ons een hogere
                      prioriteit dan het maken van winst. Wij zullen samen met u
                      strategisch bepalen hoe wij het beste resultaat kunnen
                      behalen.
                    </p>
                  </b-card>
                </b-col>
                <b-col lg="12">
                  <b-card
                    no-body
                    style="
                      background-color: #574640;
                      color: #fff;
                      position: relative;
                      padding: 10px;
                    "
                    class="my-3 aos"
                    data-aos="fade-up"
                    data-aos-delay="80"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                  >
                    <b-card-body class="pb-0">
                      <p style="color: #fff" class="pb-6">
                        Bij S&A Juristen is juridisch advies in beginsel altijd
                        kosteloos. U kunt ons binnen kantoortijden (en zelfs in
                        overleg buiten kantoortijden) bereiken voor een
                        vrijblijvend gesprek met een van onze juristen. Ook als
                        uw zaak door ons in behandeling is genomen hanteren wij
                        deze flexibele contactmogelijkheden.
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
            </b-accordion-item>
          </b-col>
          <b-col md="12">
            <b-accordion-item
              bodyClass="mt-3 pb-0"
              headerTag="p"
              class="mb-3"
              button-class="fw-semibold rounded collapsed"
            >
              <template #title>Onze werkwijze</template>
              <b-row class="px-2">
                <b-col>
                  <p
                    class="aos"
                    data-aos="fade-up"
                    data-aos-delay="80"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                  >
                    Iedere vraag is uniek en elk antwoord daarop is op maat
                    gemaakt. Dit vereist vindingrijke en creatieve juristen die
                    met beide benen op de grond staan waardoor zij ook tot
                    praktische oplossingen kunnen komen en doelbewust te werk
                    gaan.
                  </p>
                </b-col>
              </b-row>
            </b-accordion-item>
          </b-col>
          <b-col md="12">
            <b-accordion-item
              bodyClass="mt-3 pb-0"
              headerTag="p"
              class="mb-3"
              button-class="fw-semibold rounded collapsed"
            >
              <template #title>Verschil reguliere kantoren</template>
              <b-row class="px-2">
                <b-col lg="12">
                  <b-card
                    no-body
                    class="aos"
                    data-aos="fade-up"
                    data-aos-delay="80"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                  >
                    <p>
                      Het grootste verschil tussen de reguliere kantoren en S&A
                      Juristen is de caseload die onze juristen hebben. Wij
                      willen deze caseload bewust laag houden zodat er met zorg
                      aan het dossier gewerkt kan worden en er geen grote
                      werkachterstanden (vanuit onze zijde) ontstaan waardoor
                      ook persoonlijk contact met de behandelend jurist op de
                      korte termijn mogelijk is.
                    </p>
                  </b-card>
                </b-col>
                <b-col lg="12">
                  <b-card
                    no-body
                    style="
                      background-color: #574640;
                      color: #fff;
                      position: relative;
                      padding: 10px;
                    "
                    class="my-3 aos"
                    data-aos="fade-up"
                    data-aos-delay="80"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                  >
                    <b-card-body class="pb-0">
                      <p style="color: #fff" class="pb-6">
                        Helaas kampen veel verzekeraars (met betrekking tot
                        letselschade zaken) met erg grote werkachterstanden
                        waardoor een reactie van een wederpartij in de regel al
                        enige tijd op zich laat wachten. Als de reactie van de
                        jurist dan ook de enige tijd op zich laat wachten zorgt
                        dit voor extra vertraging in de vaak al lange procedure.
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
                    class="aos"
                    data-aos="fade-up"
                    data-aos-delay="80"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                  >
                    <p>
                      Daar waar u zich mogelijk niet gehoord voelt bij een van
                      de reguliere kantoren of een rechtsbijstandsverlener doen
                      wij er alles aan om dit contact te continueren en te
                      waarborgen.
                    </p>
                  </b-card>
                </b-col>
              </b-row>
            </b-accordion-item>
          </b-col>
          <b-col md="12">
            <b-accordion-item
              bodyClass="mt-3 pb-0"
              headerTag="p"
              class="mb-3"
              button-class="fw-semibold rounded collapsed"
            >
              <template #title>Verschil jurist of advocaat</template>
              <b-row class="px-2">
                <b-col lg="12">
                  <b-card
                    no-body
                    class="aos"
                    data-aos="fade-up"
                    data-aos-delay="80"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                  >
                    <p>
                      Voornamelijk bij letselschade en arbeidsrechtelijke
                      vraagstukken maakt het geen verschil of u bijgestaan zal
                      worden door een jurist of een advocaat. Een jurist kan u
                      namelijk, indien gewenst, ook bijstaan in de gang naar de
                      rechter. In het Nederlandse recht is het zo geregeld dat u
                      bij geschillen tot € 25.000,00 ook bijgestaan kunt worden
                      door een jurist. In dit geval verschillen de werkzaamheden
                      van een jurist of advocaat niet van elkaar.
                    </p>
                  </b-card>
                </b-col>
                <b-col lg="12">
                  <b-card
                    no-body
                    style="
                      background-color: #574640;
                      color: #fff;
                      position: relative;
                      padding: 10px;
                    "
                    class="my-3 aos"
                    data-aos="fade-up"
                    data-aos-delay="80"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                  >
                    <b-card-body class="pb-0">
                      <p style="color: #fff" class="pb-6">
                        Pas wanneer de hoogte van de vordering hoger dan €
                        25.000,00 bedraagt en de stap naar de rechter genomen
                        moet worden kan het een verschil gaan maken of u
                        bijgestaan wordt door een advocaat of jurist.
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
            </b-accordion-item>
          </b-col>
          <b-col md="12">
            <b-accordion-item
              bodyClass="mt-3 pb-0"
              headerTag="p"
              class="mb-3"
              button-class="fw-semibold rounded collapsed"
            >
              <template #title>Bereikbaarheid en type contact</template>
              <b-row class="px-2">
                <b-col lg="12">
                  <b-card
                    no-body
                    class="aos"
                    data-aos="fade-up"
                    data-aos-delay="80"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                  >
                    <p>
                      Wij zijn een relatief kleine onderneming en vinden het dan
                      ook belangrijk om een ruime beschikbaarheid voor het
                      inplannen van contactmomenten te hebben.
                    </p>
                  </b-card>
                </b-col>
                <b-col lg="12">
                  <b-card
                    no-body
                    style="
                      background-color: #574640;
                      color: #fff;
                      position: relative;
                      padding: 10px;
                    "
                    class="my-3 aos"
                    data-aos="fade-up"
                    data-aos-delay="80"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                  >
                    <b-card-body class="pb-0">
                      <p style="color: #fff" class="pb-6">
                        Het is bij ons dan ook zelfs mogelijk om in de avonduren
                        of in het weekend contact te hebben met uw behandeld
                        jurist (dit kan bijvoorbeeld telefonisch of per
                        whatsapp). Wij vinden het belangrijk om ook met
                        betrekking tot het stukje planning mee te denken en
                        hierin flexibel te zijn.
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
                    class="aos"
                    data-aos="fade-up"
                    data-aos-delay="80"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                  >
                    <p>
                      Verder is het bij ons mogelijk om zowel online als contact
                      in persoon te hebben. Zeker bij letselschadezaken hebben
                      wij de ervaring dat, ook gelet op de duur van deze
                      dossiers, onze cliënten het prettig vinden om in het begin
                      een fysiek gesprek in te plannen. In de regel zal dit
                      gesprek bij u thuis plaatsvinden.
                    </p>
                  </b-card>
                </b-col>
              </b-row>
            </b-accordion-item>
          </b-col>
        </b-accordion>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Kantoorvisie hero.jpg";

import { onMounted } from "vue";
import AOS from "aos";
import { jarallax } from "jarallax";
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
.btn-6 {
  border: none;
  padding: 1rem;
}
.btns {
  margin-top: 15rem !important;
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
@media (max-width: 500px) {
  .title {
    align-items: start !important;
    margin-top: 50% !important;
  }
  .btns {
    align-items: start !important;
    margin-top: 65% !important;
  }
}
</style>
