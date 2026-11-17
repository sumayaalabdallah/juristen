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
          Vaststellingsovereenkomst: Wat is het en wat zijn de mogelijkheden?
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
            style="background-color: #574640; position: relative; color: #fff"
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
                  >E</span
                >
                en werkgever heeft voor het ontslaan van een werknemer doorgaans
                een geldige reden nodig en moet een ontslagprocedure volgen via
                het UWV of de kantonrechter. Deze processen zijn vaak
                tijdrovend, kostbaar, en brengen het risico met zich mee dat de
                werkgever geen toestemming krijgt voor het ontslag.
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
              Een vaststellingsovereenkomst biedt een aantrekkelijk alternatief.
              Hierbij maken werkgever en werknemer samen afspraken om de
              arbeidsovereenkomst in goed overleg te beëindigen, zonder dat een
              formele ontslagprocedure nodig is. Dit kan worden gezien als een
              manier om een kostbare en langdurige procedure te vermijden.
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
              <h6 class="creative-title">
                Wederzijds goedvinden: Je komt er wel uit
              </h6>
              <p style="color: #fff">
                Wanneer er sprake is van een conflict tussen werkgever en
                werknemer, is de vertrouwensband vaak dusdanig aangetast dat een
                voortzetting van de arbeidsrelatie niet meer mogelijk is. In dat
                geval wordt de arbeidsovereenkomst meestal beëindigd op basis
                van wederzijds goedvinden. De afspraken hierover worden
                vastgelegd in een vaststellingsovereenkomst (VSO).
              </p>
              <p style="color: #fff" class="pb-8">
                Hoewel een VSO op basis van wederzijdse instemming is, komt het
                in de praktijk helaas vaak voor dat werkgevers misbruik maken
                van hun machtspositie bij het opstellen van de overeenkomst.
                Daarom is het cruciaal om bij ontvangst van een
                vaststellingsovereenkomst een jurist in te schakelen.
              </p>
              <img
                style="position: absolute; bottom: 0; left: 0"
                src="@/assets/images/banner-shape.png"
                alt="banner-shape"
              />
            </b-card-body>
          </b-card>
        </b-col>

        <p>
          Een jurist kan helpen bij het onderhandelen over de voorwaarden in de
          vaststellingsovereenkomst, waaronder:
        </p>
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
                De einddatum van de arbeidsovereenkomst en wanneer u mag stoppen
                met werken.
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
                Uitbetaling van openstaande vakantiedagen of andere tegoeden.
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
                De ontslagvergoeding, zoals de transitievergoeding of een
                eventuele hogere vergoeding.
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
            <div class="p-2">
              <p tag="h6">
                Concurrentie- en relatiebedingen, waarbij een jurist kan helpen
                bij het beperken of laten vervallen van deze bepalingen.
              </p>
            </div>
          </div>
        </b-col>
        <b-col lg="12" cols="12">
          <div
            class="card2 mb-3 w-100 card-hover-shadow border aos last-card"
            data-aos="fade-up"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <div class="p-4">
              <p tag="h6">
                Een neutrale of positieve referentie, zodat u niet benadeeld
                wordt in toekomstige sollicitaties.
              </p>
            </div>
          </div>
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
            <h6 class="creative-title">Je komt er niet uit</h6>
            <p>
              In sommige situaties lukt het niet om tot wederzijds goedvinden te
              komen. Als werknemer en werkgever geen overeenstemming bereiken
              over de voorwaarden van een vaststellingsovereenkomst, kan dit
              leiden tot een formele ontslagprocedure via het UWV of de
              kantonrechter. Dit is een tijdrovende, stressvolle en kostbare
              route, die bovendien onzekere uitkomsten heeft.
            </p>
            <p>
              Als werkgever of werknemer in een impasse terechtkomt, is het
              belangrijk om uw juridische positie helder te hebben. Een jurist
              kan u begeleiden in deze situatie door alternatieve oplossingen
              aan te reiken of te adviseren over de sterkste juridische
              strategie.
            </p>
            <p>
              Daarnaast is het goed om te weten dat werkgevers geen druk mogen
              uitoefenen om een vaststellingsovereenkomst te ondertekenen. U
              bent vrij om te weigeren, en u behoudt in dat geval uw wettelijke
              rechten, waaronder het recht op een transitievergoeding bij een
              eventueel onvrijwillig ontslag.
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
              <h6 class="creative-title">Finale kwijting</h6>
              <p style="color: #fff">
                Een vaststellingsovereenkomst bevat doorgaans een zogenaamde
                kwijtingsbepaling of finale kwijting. Deze bepaling zorgt ervoor
                dat beide partijen, na nakoming van de afspraken, geen verdere
                claims meer op elkaar kunnen indienen. Voor de werknemer
                betekent dit dat er na ondertekening en nakoming van de
                afspraken geen juridische stappen meer mogelijk zijn tegen de
                werkgever. Voor de werkgever geldt hetzelfde: zij kunnen geen
                claims meer instellen tegen de werknemer.
              </p>

              <p style="color: #fff" class="pb-8">
                Finale kwijting biedt duidelijkheid en zekerheid voor beide
                partijen, maar het is essentieel om ervoor te zorgen dat alle
                afspraken in uw belang zijn voordat u de overeenkomst tekent.
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
            <h6 class="creative-title">Wettelijke bedenktermijn</h6>
            <p>
              Na ondertekening van een vaststellingsovereenkomst heeft u een
              wettelijke bedenktermijn van 14 dagen. Binnen deze periode kunt u
              zonder opgaaf van reden terugkomen op de overeenkomst. Dit biedt
              een belangrijke mogelijkheid om op een later moment nog te
              heroverwegen of alle afspraken voor u acceptabel zijn.
            </p>

            <p style="font-weight: 800">Belangrijke aandachtspunten</p>
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
              <h5 style="color: #f8f8f8">Ziekte</h5>
              <p tag="h6">
                Een werkgever mag nooit zomaar een vaststellingsovereenkomst
                aanbieden als u ziek bent. In dergelijke gevallen biedt het
                arbeidsrecht extra bescherming om misbruik te voorkomen.
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
              <h5 style="color: #f8f8f8" class="mb-3">Misbruik voorkomen</h5>
              <p tag="h6">
                Schakel altijd een jurist in bij ontvangst van een VSO om ervoor
                te zorgen dat uw belangen goed worden beschermd.
              </p>
            </div>
          </div>
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
              <h6 class="creative-title">
                Vergoedt de werkgever de juridische kosten?
              </h6>
              <p style="color: #fff">
                Bij ons kunt u gratis een vaststellingsovereenkomst laten
                controleren. Dit is volledig kosteloos en zonder verplichtingen.
                Indien we voor u gaan onderhandelen over de ontslagvergoeding of
                andere voorwaarden met uw werkgever, kan er een kleine eigen
                bijdrage van toepassing zijn. Wij streven er echter altijd naar
                om de juridische kosten op te nemen in de
                vaststellingsovereenkomst. Dit betekent dat uw werkgever deze
                kosten vergoedt, waardoor uw eigen kosten minimaal of nihil
                zijn.
              </p>
              <p style="color: #fff" class="pb-8">
                Voor meer informatie hierover kunt u contact met ons opnemen na
                de gratis controle van uw vaststellingsovereenkomst. Wij bieden
                advies op maat op basis van uw specifieke ontslagdossier.
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
import bg9Img from "@/assets/images/Vaststellingsovereenkomst  hero.jpg";

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
  height: 200px;
  margin: 10px 0;
  margin-bottom: 40px;
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
.last-card {
  height: 100px !important;
}
h6 {
  color: #ffa102;
}
p {
  font-size: 20px;
  color: #574640;
}
ul li {
  font-size: 18px;
  color: rgb(68, 70, 69);
}
.btns {
  margin-top: 14rem !important;
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
    margin-top: 10rem !important;
  }
  .title {
    margin-top: -26px !important;
  }
  .creative-title {
    font-size: 30px !important;
  }
  .card2,
  .last-card {
    height: 250px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
}
@media (max-width: 820px) {
  .card2,
  .last-card {
    height: 150px;
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
    height: 150px;
    margin-bottom: 10px;
  }
}
@media (max-width: 390px) {
  .btns {
    align-items: start !important;
    margin-top: 67% !important;
  }
}
</style>
