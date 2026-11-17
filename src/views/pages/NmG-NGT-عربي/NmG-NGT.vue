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
          NmG/NGT/عربي
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
        <b-col md="12">
          <b-accordion
            accordion
            class="accordion-icon accordion-border accordion aos"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            id="accordionFaq"
            style="font-family: Tajawal !important"
          >
            <b-accordion-item
              bodyClass="mt-3 pb-0"
              headerTag="p"
              class="mb-3"
              button-class="fw-semibold rounded collapsed"
            >
              <template #title>عربي </template>
              <b-card
                no-body
                style="direction: rtl"
                class="mb-3 aos"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <h6
                  class="title-creative"
                  style="font-family: Tajawal !important"
                >
                  كيف يمكننا مساعدتك؟
                </h6>
                <p>مرحبا في S&A Juristen</p>
                <p>محامٍ عربي مطلوب؟</p>
                <p>
                  تقدم S&A Juristen خدمات قانونية للعملاء في جميع أنحاء هولندا.
                  الجُرّان والمستشارون، مثل طارق أبو خليفة، متوفرون لمساعدة
                  العملاء باللغة العربية
                </p>
              </b-card>
              <b-card
                no-body
                style="
                  direction: rtl;
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
                <b-card-body class="pb-0">
                  <h6
                    class="title-creative"
                    style="font-family: Tajawal !important"
                  >
                    المجال الاختصاصي
                  </h6>

                  <p style="color: #fff">
                    طارق يقدم لك الدعم في اللغة العربية في جميع الأوقات أثناء
                    تمثيل مصالحك، سواء كان ذلك في حضور المواعيد الهامة والجلسات
                    أو في مناقشة المراسلات والوثائق القانونية. يضمن لك طارق أن
                    تكون دائمًا على دراية تامة بحالة قضيتك من خلال شرحها
                    ومناقشتها باللغة العربية في لقاءات شخصية أو عبر الهاتف.
                  </p>

                  <p style="color: #fff" class="pb-7">
                    بالإضافة إلى ذلك، يستفيد طارق من معرفته باللغة العربية
                    والثقافة العربية لتعزيز مصالحك بشكل أفضل. سنناقش الآن الطرق
                    التي يمكن لطارق من خلال خبرته في اللغة العربية والثقافة
                    العربية تقديم الدعم الإضافي لك في مختلف المجالات , هذه هي
                    فوائد نهجنا المبسطة :
                  </p>
                  <img
                    style="position: absolute; bottom: 0; left: 0"
                    src="@/assets/images/banner-shape.png"
                    alt="banner-shape"
                  />
                </b-card-body>
              </b-card>
              <b-row>
                <b-col cols="12" lg="3">
                  <div
                    class="card2 card-hover-shadow border aos"
                    data-aos="fade-up"
                    data-aos-delay="40"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                  >
                    <div class="p-3">
                      <h6>الشفافية</h6>
                      <p tag="h6">
                        نحن واضحون بشأن خدماتنا، ونهجنا، والتكاليف، وتقدم
                        معاملتك، حتى تكون دائمًا على اطلاع
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
                      <h6>الخبرة</h6>
                      <p tag="h6">
                        بفضل معرفتنا المتخصصة، التي نحافظ على تحديثها بشكل
                        مستمر، نجد بسرعة حلاً مناسبًا لمشكلتك
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
                      <h6>التوجيه نحو الهدف</h6>
                      <p tag="h6">
                        نعتمد أساليب عمل فعّالة استنادًا إلى سنوات من الخبرة، مع
                        موظفين مؤهلين عاليًا وحلول – تكنولوجيا المعلومات الحديثة
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
                      <h6>التواصل</h6>
                      <p tag="h6">
                        نقدم سعرًا مخفضًا للمشاورة الأولية، التي تتم عبر
                        الإنترنت، لتجنب الحاجة إلى السفر. يتم إجراء هذه المشاورة
                        بالإضافة إلى ذلك باللغة التي تفضلها
                      </p>
                    </div>
                  </div>
                </b-col>
                <b-col lg="6" cols="12">
                  <div
                    class="card2 h-75 w-100 card-hover-shadow border aos last-card"
                    data-aos="fade-up"
                    data-aos-delay="40"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                  >
                    <div class="p-4">
                      <h6>التوافر</h6>
                      <p tag="h6">
                        يمكنكم الاتصال بنا خلال ساعات العمل عبر الهاتف وخارجها
                        عبر البريد الإلكتروني. نحن نسعى جاهدين للرد في غضون 24
                        ساعة
                      </p>
                    </div>
                  </div>
                </b-col>
                <b-col lg="6" cols="12">
                  <div
                    class="card2 h-75 w-100 card-hover-shadow border aos last-card"
                    data-aos="fade-up"
                    data-aos-delay="40"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                  >
                    <div class="p-4">
                      <h6>تركز خدماتنا على العميل</h6>
                      <p tag="h6">
                        خدمتنا تركز على مصالحكم. لذلك، نحن متعاونون مع شركاء
                        مهمين في مجال خدمات القانون – تغذية راجعة من العملاء
                      </p>
                    </div>
                  </div>
                </b-col>
              </b-row>
              <b-card
                no-body
                style="
                  direction: rtl;
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
                <b-card-body class="pb-0">
                  <p style="color: #fff">
                    نقوم بجمع تقييمات منتظمة من عملائنا لتحسين خدماتنا
                    وممارساتنا المكتبية إذا لزم الأمر. فيما يلي بعض التعليقات من
                    عملائنا حول تجاربهم معنا
                  </p>
                  <p style="color: #fff">اتصال</p>
                  <p style="color: #fff" class="pb-7">
                    <router-link
                      @click="scrollToTop"
                      :to="{ name: 'contact-v2' }"
                      >انقر هنا</router-link
                    >
                    للاتصال بنا من خلال نموذج اتصال باللغة العربية.
                  </p>
                  <img
                    style="position: absolute; bottom: 0; left: 0"
                    src="@/assets/images/banner-shape.png"
                    alt="banner-shape"
                  />
                </b-card-body>
              </b-card>
            </b-accordion-item>
            <b-accordion-item
              bodyClass="mt-3 pb-0"
              headerTag="p"
              class="mb-3"
              button-class="fw-semibold rounded collapsed"
            >
              <template #title>Nederlands met gebarentaal (NMG)</template>
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
                  <h6 class="title-creative">NmG jurist nodig?</h6>
                  <p style="color: #fff">
                    Het is bij ons mogelijk om contact te hebben met een jurist
                    die de Nederlandse Gebarentaal machtig is. Indien gewenst
                    kan er dan ook contact plaatsvinden doormiddel van
                    Nederlands met Gebaren.
                  </p>
                  <p style="color: #fff">
                    De jurist die u in deze zaken bij zal staan is Violette, zij
                    is opgegroeid met een oudere dove zus waardoor zij als klein
                    meisje de gebarentaal eerder machtig was dan het gesproken
                    Nederlands. Violette beheerst dus zowel NGT evenals zij
                    bekend is met de dovencultuur in Nederland. Langere tijd
                    heeft Violette getwijfeld of zij tolk NGT wilde worden,
                    echter trok het recht haar op dat moment meer waardoor zij
                    ervoor heeft gekozen jurist te worden. Violette bleef zich
                    wel altijd verbonden voelen met NGT en zij vindt het
                    belangrijk dat dove en slechthorenden ook direct contact met
                    hun jurist moeten kunnen hebben zonder zich misschien
                    onbegrepen te voelen.
                  </p>
                  <p style="color: #fff" class="pb-7">
                    Doordat Violette gewend is NGT te gebruiken en zij in het
                    dagelijks leven Nederlands spreek maakt dit dat zij
                    effectief NmG kan toepassen.
                  </p>
                  <img
                    style="position: absolute; bottom: 0; left: 0"
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
                <h6 class="title-creative">Werkwijze</h6>
                <p>
                  Violette staat u gedurende het gehele proces bij in Nederlands
                  met Gebaren (NmG). Of het nu gaat om het bijwonen van
                  belangrijke afspraken, zittingen of het bespreken van
                  correspondentie en processtukken, zij zorgt ervoor dat u
                  volledig wordt ondersteund in een taal die voor u duidelijk en
                  toegankelijk is.
                </p>
                <p>
                  Bij afspraken met derden, zoals een zitting, kan het echter
                  nuttig zijn om een tolk NGT in te schakelen. Dit omdat andere
                  betrokken partijen vaak geen kennis hebben van NmG of NGT. In
                  dergelijke situaties zorgt Violette ervoor dat de communicatie
                  soepel en effectief verloopt, in samenwerking met een tolk
                  indien nodig.
                </p>
                <p>
                  Daarnaast houdt Violette u voortdurend op de hoogte van de
                  voortgang in uw dossier. Zij licht de stand van zaken helder
                  en persoonlijk toe, en bespreekt de belangrijkste zaken op een
                  manier die volledig is afgestemd op uw behoeften. Zo bent u
                  altijd goed geïnformeerd en verzekerd van duidelijke en
                  persoonlijke begeleiding.
                </p>
                <p>Hier zijn de voordelen van onze benadering op een rij:</p>
                <b-row>
                  <b-col cols="12" lg="6">
                    <div
                      class="card2 card-hover-shadow border aos"
                      data-aos="fade-up"
                      data-aos-delay="40"
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out"
                    >
                      <div class="p-3">
                        <h6>1. Transparantie</h6>
                        <p tag="h6">
                          Wij zijn helder over onze diensten, de aanpak, de
                          kosten en de voortgang van uw dossier, zodat u altijd
                          tijdig op de hoogte bent.
                        </p>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="12" lg="6">
                    <div
                      class="card2 card-hover-shadow border aos"
                      data-aos="fade-up"
                      data-aos-delay="40"
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out"
                    >
                      <div class="p-3">
                        <h6>2. Expertise</h6>
                        <p tag="h6">
                          Wij vinden het belangrijk om onze kennis up-to-date te
                          houden. Naast het volgen van bijscholingen en het
                          volgen van recente rechtspraak staan onze juristen met
                          beide benen op de grond waardoor zij verder kijken dan
                          hun neus lang is.
                        </p>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="12" lg="6">
                    <div
                      class="card2 card-hover-shadow border aos"
                      data-aos="fade-up"
                      data-aos-delay="40"
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out"
                    >
                      <div class="p-3">
                        <h6>3. Doelgerichtheid</h6>
                        <p tag="h6">
                          We hanteren efficiënte werkwijzen op basis van
                          ervaring en ad-hoc denken.
                        </p>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="12" lg="6">
                    <div
                      class="card2 card-hover-shadow border aos"
                      data-aos="fade-up"
                      data-aos-delay="40"
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out"
                    >
                      <div class="p-3">
                        <h6>4. Toegankelijkheid</h6>
                        <p tag="h6">
                          Ons eerste adviesgesprek kan in de meeste gevallen
                          kosteloos plaatsvinden. Deze intake kan zowel online
                          als telefonisch plaatsvinden zodat u niet hoeft te
                          reizen.
                        </p>
                      </div>
                    </div>
                  </b-col>
                  <b-col lg="6" cols="12">
                    <div
                      class="card3 w-100 card-hover-shadow border aos last-card"
                      data-aos="fade-up"
                      data-aos-delay="40"
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out"
                    >
                      <div class="p-4">
                        <h6>5. Beschikbaarheid</h6>
                        <p tag="h6">
                          Wij zijn 24/7 bereikbaar. In de praktijk betekent dit
                          vooral voor dat u dat u voor telefonische of online
                          afspraken korte tijd van tevoren een afspraak op het
                          voor u meest wenselijke tijdstip kunt afstemmen met uw
                          jurist. Schriftelijk contact kan direct verzonden
                          worden waarbij de juristen streven zo snel mogelijk te
                          reageren.
                        </p>
                      </div>
                    </div>
                  </b-col>
                  <b-col lg="6" cols="12">
                    <div
                      class="card3 w-100 card-hover-shadow border aos last-card"
                      data-aos="fade-up"
                      data-aos-delay="40"
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out"
                    >
                      <div class="p-4">
                        <h6>6. Klantgerichtheid</h6>
                        <p tag="h6">
                          Wij vinden het belangrijk dat u zich geen nummertje
                          voelt, maar dat u zich daadwerkelijk gehoord voelt.
                        </p>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-card>
            </b-accordion-item>
            <b-accordion-item
              bodyClass="mt-3 pb-0"
              headerTag="p"
              class="mb-3"
              button-class="fw-semibold rounded collapsed"
            >
              <template #title>Nederlandse Gebarentaal (NGT) </template>
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
                  <h6 class="title-creative">NGT-jurist nodig?</h6>
                  <p style="color: #fff">
                    Het is bij ons mogelijk om contact te hebben met een jurist
                    die de Nederlandse Gebarentaal machtig is.
                  </p>
                  <p style="color: #fff" class="pb-7">
                    De jurist die u in deze zaken bij zal staan is Violette, zij
                    is opgegroeid met een oudere dove zus waardoor zij als klein
                    meisje de gebarentaal eerder machtig was dan het gesproken
                    Nederlands. Violette beheerst dus zowel NGT evenals zij
                    bekend is met de dovencultuur in Nederland. Langere tijd
                    heeft Violette getwijfeld of zij tolk NGT wilde worden,
                    echter trok het recht haar op dat moment meer waardoor zij
                    ervoor heeft gekozen jurist te worden. Violette bleef zich
                    wel altijd verbonden voelen met NGT en zij vindt het
                    belangrijk dat dove en slechthorenden ook direct contact met
                    hun jurist moeten kunnen hebben zonder zich misschien
                    onbegrepen te voelen (zij zijn hierbij ook vaak afhankelijk
                    van de beschikbaarheid van een tolk). Doordat gebarentaal
                    een eigen taal met een eigen grammatica is kan het voorkomen
                    dat u als dove die als moedertaal NGT machtig is zich
                    onbegrepen voelt op schrift, ook hier heeft Violette
                    ervaring mee.
                  </p>
                  <img
                    style="position: absolute; bottom: 0; left: 0"
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
                <h6 class="title-creative">Werkwijze</h6>
                <p>
                  Violette staat u op alle momenten tijdens de behartiging van
                  uw belangen bij in NGT, of het nu gaat om het bijwonen van
                  belangrijke afspraken, zittingen of het bespreken van
                  correspondentie en processtukken.
                </p>
                <p>
                  Uiteraard adviseert zij wel om tijdens belangrijke afspraken
                  met derde (zoals het bijwonen van een zitting) alsnog een tolk
                  in te schakelen, door haar kennis in zowel het juridische als
                  NGT zal kan zij tijdens deze momenten accuraat inspelen op
                  eventuele vragen die spelen.
                </p>
                <p>
                  Zij zorgt ervoor dat u altijd duidelijk inzicht heeft in de
                  stand van zaken in uw dossier door deze persoonlijk of
                  toegespitst op de kern toe te lichten en te bespreken.
                </p>
                <p>Hier zijn de voordelen van onze benadering op een rij:</p>
                <b-row>
                  <b-col cols="12" lg="6">
                    <div
                      class="card2 card-hover-shadow border aos"
                      data-aos="fade-up"
                      data-aos-delay="40"
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out"
                    >
                      <div class="p-3">
                        <h6>1. Transparantie</h6>
                        <p tag="h6">
                          Wij zijn helder over onze diensten, de aanpak, de
                          kosten en de voortgang van uw dossier, zodat u altijd
                          tijdig op de hoogte bent.
                        </p>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="12" lg="6">
                    <div
                      class="card2 card-hover-shadow border aos"
                      data-aos="fade-up"
                      data-aos-delay="40"
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out"
                    >
                      <div class="p-3">
                        <h6>2. Expertise</h6>
                        <p tag="h6">
                          Wij vinden het belangrijk om onze kennis up-to-date te
                          houden. Naast het volgen van bijscholingen en het
                          volgen van recente rechtspraak staan onze juristen met
                          beide benen op de grond waardoor zij verder kijken dan
                          hun neus lang is.
                        </p>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="12" lg="6">
                    <div
                      class="card2 card-hover-shadow border aos"
                      data-aos="fade-up"
                      data-aos-delay="40"
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out"
                    >
                      <div class="p-3">
                        <h6>3. Doelgerichtheid</h6>
                        <p tag="h6">
                          We hanteren efficiënte werkwijzen op basis van
                          ervaring en ad-hoc denken.
                        </p>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="12" lg="6">
                    <div
                      class="card2 card-hover-shadow border aos"
                      data-aos="fade-up"
                      data-aos-delay="40"
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out"
                    >
                      <div class="p-3">
                        <h6>4. Toegankelijkheid</h6>
                        <p tag="h6">
                          Ons eerste adviesgesprek kan in de meeste gevallen
                          kosteloos plaatsvinden. Deze intake kan zowel online
                          als telefonisch plaatsvinden zodat u niet hoeft te
                          reizen.
                        </p>
                      </div>
                    </div>
                  </b-col>
                  <b-col lg="6" cols="12">
                    <div
                      class="card3 w-100 card-hover-shadow border aos last-card"
                      data-aos="fade-up"
                      data-aos-delay="40"
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out"
                    >
                      <div class="p-4">
                        <h6>5. Beschikbaarheid</h6>
                        <p tag="h6">
                          Wij zijn 24/7 bereikbaar. In de praktijk betekent dit
                          vooral voor dat u dat u voor telefonische of online
                          afspraken korte tijd van te voren een afspraak op het
                          voor u meest wenselijke tijdstip kunt afstemmen met uw
                          jurist. Schriftelijk contact kan direct verzonden
                          worden waarbij de juristen streven zo snel mogelijk te
                          reageren.
                        </p>
                      </div>
                    </div>
                  </b-col>
                  <b-col lg="6" cols="12">
                    <div
                      class="card3 w-100 card-hover-shadow border aos last-card"
                      data-aos="fade-up"
                      data-aos-delay="40"
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out"
                    >
                      <div class="p-4">
                        <h6>6. Klantgerichtheid</h6>
                        <p tag="h6">
                          Wij vinden het belangrijk dat u zich geen nummertje
                          voelt, maar dat u zich daadwerkelijk gehoord voelt.
                        </p>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </b-card>
            </b-accordion-item>
          </b-accordion>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup lang="ts">
import bg9Img from "@/assets/images/NmG.NGT.hero.jpg";

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
  height: 210px;
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
.card2 h6,
.card2 p,
.card3 h6,
.card3 p {
  color: #f8f8f8;
}
h6 {
  color: #ffa102;
  font-family: Tajawal !important;
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
  .card2,
  .card3 {
    height: 90%;
    margin: 10px 0;
  }
}
</style>
