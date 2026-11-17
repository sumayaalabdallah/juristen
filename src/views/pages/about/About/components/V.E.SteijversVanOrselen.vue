<template>
  <section class="position-relative pb-0">
    <b-container>
      <b-row>
        <b-col lg="7">
          <div
            class="inner-container mx-auto aos"
            data-aos="fade-right"
            data-aos-delay="120"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <h3 class="mb-4">Mw. mr. V.E. Steijvers van Orselen</h3>
            <p class="my-5">
              Mijn naam is Violette en ik ben (mede)eigenaar van S&A Juristen.
              In eerste instantie was het nooit mijn intentie om een eigen
              onderneming te beginnen; ik wilde alleen graag mensen helpen bij
              hun juridische problemen. Dit blijkt ook uit de lange tijd dat ik
              vrijwilliger ben geweest (en nog steeds ben). Daarbij verleen ik
              graag bijstand aan de ‘zwakkere’ partij, omdat ik het erg
              belangrijk vind dat in geschillen waarbij een sterkere organisatie
              betrokken is, het individu de beste bijstand krijgt.
            </p>
            <p class="my-5">
              Tijdens mijn werk bij diverse kantoren heb ik gemerkt dat de
              werkwijze van de huidige tijd niet altijd aansluit bij wat ik wil
              bieden. Ik vind namelijk dat persoonlijk en oprecht contact met de
              cliënt op nummer één moet staan; de cliënt mag geen ‘nummertje’
              worden. Daarnaast vind ik het prettig om het aantal dossiers dat
              ik behandel zelf in de hand te hebben, zodat ik de aandacht en
              tijd aan elk dossier kan geven die het daadwerkelijk verdient. Ook
              vind ik het belangrijk om samen met mijn cliënt de koers van het
              dossier te bepalen, zonder afhankelijk te zijn van een ‘baas’ die
              de belangen van mijn cliënt vanuit dat perspectief minder goed
              voor ogen heeft.
            </p>
          </div>
        </b-col>

        <b-col lg="5" class="d-flex align-items-start justify-content-end">
          <div
            class="aos"
            data-aos="fade-left"
            data-aos-delay="120"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <img
              style="border-bottom: 7px solid #ffa102; border-radius: 7px"
              :src="icon1"
              loading="lazy"
              alt="about-us"
            />
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="12">
          <b-card
            no-body
            style="background-color: #574640; color: #fff; position: relative"
            class="my-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <p style="color: #fff" class="pb-8">
                Sinds ik moeder ben, besef ik des te meer hoe essentieel de
                balans tussen werk en privé is. Voor mij is het cruciaal om mijn
                tijd zelf te kunnen indelen, zodat ik ook actief kan bijdragen
                aan de opvoeding van mijn kinderen. Deze flexibiliteit wil ik
                ook mijn klanten bieden, omdat zij vaak ongewild in een
                juridische situatie zijn beland. Het is voor mij belangrijk dat
                S&A Juristen deze ruime contactmogelijkheden daadwerkelijk in de
                praktijk brengt, en dat dit niet alleen een marketingtruc is.
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
          <p
            class="aos"
            data-aos="fade-up"
            data-aos-delay="140"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            Verder vind ik het goed om te benoemen dat ik mijn loopbaan ben
            begonnen op het mbo en vervolgens de volledige hbo-opleiding Rechten
            aan de HvA heb afgerond. Na het behalen van mijn diploma aan de HvA
            ben ik doorgestroomd naar de UvA, waar ik mijn bachelor- en
            masterdiploma heb behaald. Al met al heb ik mijn diploma’s nominaal
            behaald (zonder tussenstops of uitloop), waarna ik sinds 2022 de
            titel ‘meester in de rechten’ mag voeren. Hiermee heb ik aangetoond
            dat ik een doorzetter ben, en dit wil ik ook hanteren in de
            behandeling van mijn dossiers. Daarnaast kan ik mij goed verplaatsen
            in mensen met verschillende opleidingsniveaus en ben ik geen
            ‘standaard’ jurist die direct vanuit het vwo is doorgestroomd naar
            de universiteit.
          </p>
        </b-col>
        <b-col lg="12">
          <b-card
            no-body
            style="background-color: #574640; color: #fff; position: relative"
            class="my-3 aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <b-card-body class="pb-0">
              <p style="color: #fff" class="pb-8">
                Als laatste vind ik het belangrijk om mijzelf te blijven
                ontwikkelen op juridisch gebied; ik volg naast mijn werk
                cursussen en opleidingen om mijn kennis zo optimaal mogelijk te
                houden. Momenteel zit ik in de afrondende fase van de
                vaktechnische opleiding tot NIVRE-expert Personenschade bij
                Letsel Opleidingen.
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
          <router-link
            class="btn btn-6 bg-primary btn-lg btn-white icon-link icon-link-hover mb-0 px-3 aos"
            data-aos="fade-up"
            data-aos-delay="40"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            :to="{ name: 'contact' }"
            @click="scrollToTop"
          >
            Neem gratis contact met ons op
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts" setup>
import icon1 from "@/assets/images/Juristen-1.png";
import AOS from "aos";
import { onMounted } from "vue";
onMounted(() => {
  AOS.init({ once: true });
});
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
<style scoped>
p {
  font-size: 20px;
  color: #574640;
}
</style>
