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
          Tarieven
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
              <template #title>Tarieven letselschadezaak</template>
              <b-card
                no-body
                style="
                  background-color: #574640;
                  position: relative;
                  color: #fff;
                "
                class="mb-3 aos"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <b-card-body>
                  <h6 class="title-creative">Buitengerechtelijke kosten</h6>
                  <p style="color: #fff">
                    S&A Juristen biedt juridische diensten aan klanten in heel
                    Nederland. Aangezien in Nederland de redelijke kosten van
                    juridische bijstand door de verantwoordelijke
                    verzekeringsmaatschappij moeten worden vergoed, hoeven wij
                    deze kosten niet bij u in rekening te brengen. Dit maakt
                    onze juridische bijstand voor u geheel kosteloos, oftewel
                    ‘gratis’. Ook indien de aansprakelijkheid om wat voor reden
                    dan ook niet rondkomt, zullen wij geen kosten bij u als
                    slachtoffer in rekening brengen en kunt u onze werkzaamheden
                    als vrijblijvend beschouwen. Dit wordt uiteraard allemaal
                    nader met u besproken en schriftelijk bevestigd.
                  </p>
                  <p style="color: #fff">
                    Daarbij is het ook belangrijk om te weten dat wij geen
                    aanspraak maken op een percentage van uw schadeclaim.
                  </p>
                  <p style="color: #fff" class="pb-7">
                    Uw schadeclaim is uw schadeclaim, en het gedeelte dat de
                    verzekeraar vergoedt met betrekking tot onze kosten ziet
                    alleen toe op de vergoeding voor de juridische kosten. Een
                    slachtoffer heeft geen recht op de post ‘juridische kosten’
                    zonder het inschakelen van een professionele en deskundige
                    partij.
                  </p>
                  <img
                    style="position: absolute; bottom: 0; left: 0; height: 80px"
                    src="@/assets/images/banner-shape.png"
                    alt="banner-shape"
                  />
                </b-card-body>
              </b-card>
              <b-card
                no-body
                class="mb-3 aos"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <h6 class="title-creative">Redelijkheidstoets</h6>

                <p>
                  Verzekeraars beoordelen de buitengerechtelijke kosten aan de
                  hand van de zogenaamde ‘dubbele redelijkheidstoets’. Dit houdt
                  in dat de verzekeraar onderzoekt of:
                </p>
                <ul>
                  <li>
                    Het redelijk is dat het slachtoffer juridische bijstand
                    inschakelt;
                  </li>
                  <li>De ingediende kosten redelijk zijn.</li>
                </ul>
                <p>
                  Indien de kosten die S&A Juristen heeft gemaakt door de
                  verzekeraar als redelijk worden beschouwd, worden deze
                  volledig vergoed. Als de verzekeraar de hoogte van onze kosten
                  niet redelijk acht, worden deze kosten niet geheel vergoed.
                  Dit betekent overigens niet dat u zou moeten opdraaien voor
                  het nog openstaande deel. Zoals hierboven ook benoemd, zullen
                  er voor u als slachtoffer geen kosten in rekening gebracht
                  worden. Wij beschouwen deze eventuele extra kosten die niet in
                  rekening gebracht kunnen worden om uw schade te verhalen als
                  een risico voor ons kantoor.
                </p>
              </b-card>
              <b-card
                no-body
                style="
                  background-color: #574640;
                  position: relative;
                  color: #fff;
                "
                class="mb-3 aos"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <b-card-body>
                  <h6 class="title-creative">
                    Aansprakelijkheid komt niet vast te staan
                  </h6>
                  <p style="color: #fff" class="pb-7">
                    Soms komt de aansprakelijkheid om wat voor reden dan ook
                    niet vast te staan. Het kan bijvoorbeeld zo zijn dat de
                    wederpartij van mening is dat zij niet aansprakelijk
                    gehouden kan worden, of dat naarmate de procedure vordert
                    blijkt dat er bewijsmiddelen voorhanden zijn die in uw
                    nadeel werken. In dat geval neemt S&A Juristen in
                    samenspraak met u wel alle nodige stappen om de
                    aansprakelijkheid toch vast te kunnen stellen. Echter,
                    indien de aansprakelijkheid niet rond kan komen, nemen wij
                    de gemaakte uren voor onze eigen rekening en zullen wij
                    hiervan geen kosten bij u in rekening brengen.
                  </p>
                  <img
                    style="position: absolute; bottom: 0; left: 0; height: 80px"
                    src="@/assets/images/banner-shape.png"
                    alt="banner-shape"
                  />
                </b-card-body>
              </b-card>
              <b-card
                no-body
                class="mb-3 aos"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <h6 class="title-creative">Uitzonderingen</h6>
                <p>
                  De enige uitzondering, die alleen in zeer uitzonderlijke
                  gevallen van toepassing is en in onze algemene voorwaarden is
                  opgenomen, betreft situaties waarin wij kosten hebben gemaakt
                  en dusdanige werkzaamheden in uw dossier hebben verricht,
                  terwijl u zonder uitleg en enig contact overstapt of het
                  dossier zodanig belemmert dat verdere voortgang ernstig wordt
                  belemmerd.
                </p>
              </b-card>
            </b-accordion-item>
          </b-col>
          <b-col md="12">
            <b-accordion-item
              bodyClass="mt-3 pb-0"
              headerTag="p"
              class="mb-3"
              button-class="fw-semibold rounded collapsed"
            >
              <template #title>Tarieven arbeidsrecht </template>
              <b-card
                style="
                  background-color: #574640;
                  position: relative;
                  color: #fff;
                "
                no-body
                class="mb-3 aos px-3"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <b-card-body class="pb-0">
                  <p style="color: #fff" class="pb-8">
                    S&A Juristen biedt juridische bijstand op het gebied van
                    arbeidsrecht door heel Nederland. De kosten voor juridische
                    bijstand kunnen vaak worden verhaald, afhankelijk van de
                    situatie. In veel gevallen kunnen de kosten worden
                    doorberekend aan de werkgever, bijvoorbeeld bij geschillen
                    over ontslag, arbeidsvoorwaarden of andere kwesties die
                    voortkomen uit de arbeidsovereenkomst. Dit betekent dat u in
                    dergelijke gevallen vaak geen kosten hoeft te betalen voor
                    onze diensten. Uiteraard worden de specifieke kosten en
                    voorwaarden vooraf met u besproken en schriftelijk
                    bevestigd.
                  </p>
                  <img
                    style="position: absolute; bottom: 0; left: 0; height: 80px"
                    src="@/assets/images/banner-shape.png"
                    alt="banner-shape"
                  />
                </b-card-body>
              </b-card>
              <b-card
                no-body
                class="mb-3 aos px-3"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <h6 class="title-creative">Uitzonderingen</h6>
                <p>
                  In uitzonderlijke gevallen, zoals vermeld in onze algemene
                  voorwaarden, kunnen er kosten in rekening worden gebracht
                  wanneer u zonder uitleg of contact overstapt naar een andere
                  partij of wanneer u het dossier zodanig belemmert dat verdere
                  voortgang ernstig wordt belemmerd.
                </p>
              </b-card>
            </b-accordion-item>
          </b-col>
          <b-col md="12">
            <b-accordion-item
              bodyClass="mt-3 pb-0"
              headerTag="p"
              class="mb-3"
              button-class="fw-semibold rounded collapsed"
            >
              <template #title>Tarieven bestuursrecht </template>
              <b-card
                no-body
                class="mb-3 aos px-3"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <p>
                  Met betrekking tot bestuursrechtelijke kwesties, zoals het
                  aanvechten van boetes, brengen wij geen kosten in rekening.
                  Deze kosten kunnen namelijk, indien het bezwaar gegrond wordt
                  verklaard, worden verhaald op het betreffende overheidsorgaan.
                  Om alles duidelijk vast te leggen, worden voorafgaand aan een
                  dergelijke procedure de afspraken schriftelijk overeengekomen.
                </p>
              </b-card>
              <b-card
                no-body
                style="
                  background-color: #574640;
                  position: relative;
                  color: #fff;
                "
                class="mb-3 aos px-3"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <b-card-body class="pb-0">
                  <p style="color: #fff" class="pb-8">
                    De vergoeding voor juridische bijstand wordt door het
                    overheidsorgaan overgemaakt naar uw rekeningnummer, waarna u
                    dit bedrag aan ons kantoor dient over te maken. Omdat deze
                    kosten volledig door het overheidsorgaan worden vergoed,
                    hanteren wij een striktere betalingstermijn. In het geval
                    van niet-tijdige betaling van de factuur, inclusief de
                    herinnering, zal de vordering worden overgedragen aan een
                    deurwaarder. Hiermee zorgen wij voor een heldere en
                    transparante afhandeling van het financiële proces.
                  </p>
                  <img
                    style="position: absolute; bottom: 0; left: 0; height: 80px"
                    src="@/assets/images/banner-shape.png"
                    alt="banner-shape"
                  />
                </b-card-body>
              </b-card>
            </b-accordion-item>
          </b-col>
          <b-col md="12">
            <b-accordion-item
              bodyClass="mt-3 pb-0"
              headerTag="p"
              class="mb-3"
              button-class="fw-semibold rounded collapsed"
            >
              <template #title>Tarieven overige rechtsgebieden </template>
              <b-card
                no-body
                class="mb-3 aos px-3"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <p>
                  Bij ons kunt u rekenen op op maat gemaakte juridische diensten
                  tegen een scherp tarief, afgestemd op uw specifieke behoeften.
                  Onze werkwijze is volledig digitaal en efficiënt, waardoor we
                  onze kosten laag kunnen houden zonder in te leveren op
                  kwaliteit. Voor zaken die meer tijd en aandacht vergen, zijn
                  wij bereid om extra tijd te investeren, zonder dat dit
                  automatisch leidt tot hogere facturen.
                </p>
              </b-card>
              <b-card
                no-body
                style="
                  background-color: #574640;
                  position: relative;
                  color: #fff;
                "
                class="mb-3 aos px-3"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <b-card-body class="pb-0">
                  <p style="color: #fff" class="pb-8">
                    Wij hechten veel waarde aan transparantie: u krijgt vooraf
                    een helder overzicht van de verwachte kosten en hoe deze
                    zijn opgebouwd. Zo weet u precies waar u aan toe bent en
                    voorkomt u onaangename verrassingen achteraf. Onze flexibele
                    aanpak en persoonlijke service zorgen ervoor dat we altijd
                    streven naar de best mogelijke oplossing, volledig afgestemd
                    op uw situatie.
                  </p>
                  <img
                    style="position: absolute; bottom: 0; left: 0; height: 80px"
                    src="@/assets/images/banner-shape.png"
                    alt="banner-shape"
                  />
                </b-card-body>
              </b-card>
              <b-card
                no-body
                class="mb-3 aos px-3"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <p>
                  Bij ons staan kwaliteit, betaalbaarheid en duidelijkheid
                  centraal. U kunt op ons vertrouwen voor hoogwaardige
                  juridische bijstand, ongeacht het rechtsgebied.
                </p>
              </b-card>
            </b-accordion-item>
          </b-col>
        </b-accordion>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/Tarieven hero.jpg";
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
  height: 130px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease !important;
  border: 2px solid #ffa102 !important;
}
.card2:hover {
  cursor: pointer;
  background-color: #ffa20265 !important;
  transition: 0.2s ease;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2) !important;
}
p {
  font-size: 20px;
  color: #574640;
}
.card2 h6,
.card2 p {
  color: #f8f8f8;
}
h6 {
  color: #ffa102;
}
img {
  height: 250px;
  width: 100%;
}

li {
  font-size: 18px;
  color: #574640;
}
.btns {
  margin-top: 13rem !important;
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
@media (max-width: 500px) {
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
    font-size: 15px;
  }
  .btns {
    align-items: start !important;
    margin-top: 70% !important;
  }
  .btn-6 {
    font-size: 12px !important;
  }
  .card2 {
    width: 100%;
    margin: 10px 0;
  }
}
</style>
