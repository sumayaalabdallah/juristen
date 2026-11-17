const setTitle = (pageName?: string) => {
  return pageName
    ? `${pageName} | Juristen`
    : 'Juristen'
}

const homeRoutes = [
  {
    path: '/',
    redirect: { name: 'home' },
    name: 'index'
  },

  {
    path: '/',
    name: 'home',
    meta: {
      title: setTitle('Home')
    },
    component: () => import('@/views/demos/DigitalAgency/index.vue')
  },

]

const pagesRoutes = [

  {
    path: '/contact',
    name: 'contact',
    meta: {
      title: setTitle('Contact')
    },
    component: () => import('@/views/pages/contact/ContactV1/index.vue')
  },
  {
    path: '/contact-v2',
    name: 'contact-v2',
    meta: {
      title: setTitle('Contact V2')
    },
    component: () => import('@/views/pages/contact/ContactV2/index.vue')
  },
  {
    path: '/rechtsgebieden',
    name: 'rechtsgebieden',
    meta: {
      title: setTitle('Rechtsgebieden')
    },
    component: () => import('@/views/pages/services2/index.vue')
  }
]




const aboutRoutes = [
  {
    path: '/kantoorvisie',
    name: 'kantoorvisie',
    meta: {
      title: setTitle('Kantoorvisie')
    },
    component: () => import('@/views/pages/about/kantoorvisie.vue')
  },
  {
    path: '/juristen',
    name: 'juristen',
    meta: {
      title: setTitle('Juristen')
    },
    component: () => import('@/views/pages/about/juristen.vue')
  },
  {
    path: '/juristen-V.E.Steijvers-van-Orselen',
    name: 'juristen-V.E.Steijvers-van-Orselen',
    meta: {
      title: setTitle('V.E. Steijvers van Orselen')
    },
    component: () => import('@/views/pages/about/About/components/V.E.SteijversVanOrselen.vue')
  },
  {
    path: '/juristen-T.Abu-Khalefa',
    name: 'juristen-T.Abu-Khalefa',
    meta: {
      title: setTitle('T. Abu Khalefa')
    },
    component: () => import('@/views/pages/about/About/components/T.AbuKhalefa.vue')
  },
  {
    path: '/letselschade',
    name: 'letselschade',
    meta: {
      title: setTitle('Letselschade')
    },
    component: () => import('@/views/pages/Letselschade/index.vue')
  },
  {
    path: '/letselschade-wat-te-doen-na-een-verkeersongeval',
    name: 'letselschade-wat-te-doen-na-een-verkeersongeval',
    meta: {
      title: setTitle('Wat te doen na een verkeersongeval')
    },
    component: () => import('@/views/pages/Letselschade/wat te doen na een verkeersongeva/index.vue')
  },
  {
    path: '/letselschade-het-verloop-van-een-letselschadezaak',
    name: 'letselschade-het-verloop-van-een-letselschadezaak',
    meta: {
      title: setTitle('Het verloop van een letselschadezaak')
    },
    component: () => import('@/views/pages/Letselschade/Het verloop van een letselschadezaak/index.vue')
  },
  {
    path: '/letselschade-afhandelings-en-reactietermijnen',
    name: 'letselschade-afhandelings-en-reactietermijnen',
    meta: {
      title: setTitle('Afhandelings- en reactietermijnen')
    },
    component: () => import('@/views/pages/Letselschade/Afhandelings- en reactietermijnen/index.vue')
  },
  {
    path: '/letselschade-hoogte-van-het-schadebedrag',
    name: 'letselschade-hoogte-van-het-schadebedrag',
    meta: {
      title: setTitle('Hoogte van het schadebedrag')
    },
    component: () => import('@/views/pages/Letselschade/Hoogte van het schadebedrag/index.vue')
  },
  {
    path: '/letselschade-schadevergoeding-bij-ongevallen-met-doorrijdende-of-onverzekerde-bestuurder',
    name: 'letselschade-schadevergoeding-bij-ongevallen-met-doorrijdende-of-onverzekerde-bestuurder',
    meta: {
      title: setTitle('Schadevergoeding bij ongevallen met doorrijdende of onverzekerde bestuurder')
    },
    component: () => import('@/views/pages/Letselschade/Schadevergoeding bij ongevallen met doorrijdende of onverzekerde bestuurder/index.vue')
  },
  {
    path: '/letselschade-verjaringstermijnen',
    name: 'letselschade-verjaringstermijnen',
    meta: {
      title: setTitle('Verjaringstermijnen')
    },
    component: () => import('@/views/pages/Letselschade/Verjaringstermijnen/index.vue')
  },
  {
    path: '/overige-letselschade',
    name: 'overige-letselschade',
    meta: {
      title: setTitle('Overige Letselschade')
    },
    component: () => import('@/views/pages/Overige Letselschade/index.vue')
  },
  {
    path: '/auto-ongeluk',
    name: 'auto-ongeluk',
    meta: {
      title: setTitle('Auto-ongeluk')
    },
    component: () => import('@/views/pages/Overige Letselschade/AutoOngeluk.vue')
  },
  {
    path: '/kop-staartbotsing',
    name: 'kop-staartbotsing',
    meta: {
      title: setTitle('Kop- staartbotsing')
    },
    component: () => import('@/views/pages/Overige Letselschade/kopStaartbotsing.vue')
  },
  {
    path: '/klachten-na-een-kop-staart-botsing',
    name: 'klachten-na-een-kop-staart-botsing',
    meta: {
      title: setTitle('Klachten na een kop-staart botsing')
    },
    component: () => import('@/views/pages/Overige Letselschade/klachtenNaEenkopStaartBotsing.vue')
  },
  {
    path: '/kettingbotsing',
    name: 'kettingbotsing',
    meta: {
      title: setTitle('Kettingbotsing')
    },
    component: () => import('@/views/pages/Overige Letselschade/Kettingbotsing.vue')
  },
  {
    path: '/parkeerongeluk-of-andere-bijzondere-manoeuvre',
    name: 'parkeerongeluk-of-andere-bijzondere-manoeuvre',
    meta: {
      title: setTitle('Parkeerongeluk of andere bijzondere manoeuvre')
    },
    component: () => import('@/views/pages/Overige Letselschade/ParkeerongelukOfAndereBijzondereManoeuvre.vue')
  },
  {
    path: '/klachten-na-een-parkeerongeluk-of-bijzondere-manoeuvre',
    name: 'klachten-na-een-parkeerongeluk-of-bijzondere-manoeuvre',
    meta: {
      title: setTitle('Klachten na een parkeerongeluk of bijzondere manoeuvre')
    },
    component: () => import('@/views/pages/Overige Letselschade/klachtenNaEenParkeerongelukOfBijzondereManoeuvre.vue')
  },
  {
    path: '/eenzijdig-ongeval(single-vehicle-accident)of-ongeval-door-eigenschuld',
    name: 'eenzijdig-ongeval(single-vehicle-accident)of-ongeval-door-eigenschuld',
    meta: {
      title: setTitle('Eenzijdig ongeval (single-vehicle accident) of ongeval door eigenschuld')
    },
    component: () => import('@/views/pages/Overige Letselschade/eenzijdigOngeval(single-vehicle accident)OfOngevalDoorEigenschuld.vue')
  },
  {
    path: '/klachten-na-een-eenzijdig-ongeval-of-ongeval-door-eigenschuld',
    name: 'klachten-na-een-eenzijdig-ongeval-of-ongeval-door-eigenschuld',
    meta: {
      title: setTitle('Klachten na een eenzijdig ongeval of ongeval door eigenschuld')
    },
    component: () => import('@/views/pages/Overige Letselschade/klachtenNaEenEenzijdigOngevalOfOngevalDoorEigenschuld.vue')
  },
  {
    path: '/passagier',
    name: 'passagier',
    meta: {
      title: setTitle('Passagier')
    },
    component: () => import('@/views/pages/Overige Letselschade/passagier.vue')
  },
  {
    path: '/meervoudig-ongeval,maar-geen-schuld(schuldloze derde)1',
    name: 'meervoudig-ongeval,maar-geen-schuld(schuldloze derde)1',
    meta: {
      title: setTitle('Meervoudig ongeval, maar geen schuld (schuldloze derde) 1')
    },
    component: () => import('@/views/pages/Overige Letselschade/meervoudigOngeval,maarGeenSchuld(schuldloze derde)1.vue')
  },
  {
    path: '/meervoudig-ongeval,maar-geen-schuld(schuldloze derde)2',
    name: 'meervoudig-ongeval,maar-geen-schuld(schuldloze derde)2',
    meta: {
      title: setTitle('Meervoudig ongeval, maar geen schuld (schuldloze derde) 2')
    },
    component: () => import('@/views/pages/Overige Letselschade/meervoudigOngeval,maarGeenSchuld(schuldloze derde)2.vue')
  },
  {
    path: '/scooter-motorongeluk',
    name: 'scooter-motorongeluk',
    meta: {
      title: setTitle('Scooter-/motorongeluk')
    },
    component: () => import('@/views/pages/Overige Letselschade/scooterMotorongeluk.vue')
  },
  {
    path: '/fietsongeval',
    name: 'fietsongeval',
    meta: {
      title: setTitle('Fietsongeval')
    },
    component: () => import('@/views/pages/Overige Letselschade/fietsongeval.vue')
  },
  {
    path: '/het-letsel',
    name: 'het-letsel',
    meta: {
      title: setTitle('Het letsel')
    },
    component: () => import('@/views/pages/Overige Letselschade/hetLetsel.vue')
  },
  {
    path: '/voetgangersongeluk',
    name: 'voetgangersongeluk',
    meta: {
      title: setTitle('Voetgangersongeluk')
    },
    component: () => import('@/views/pages/Overige Letselschade/voetgangersongeluk.vue')
  },
  {
    path: '/letsels-aan-de-onderste-ledematen',
    name: 'letsels-aan-de-onderste-ledematen',
    meta: {
      title: setTitle('Letsels aan de onderste ledematen')
    },
    component: () => import('@/views/pages/Overige Letselschade/letselsAanDeOndersteLedematen.vue')
  },
  {
    path: '/letsels-aan-de-bovenste-ledematen',
    name: 'letsels-aan-de-bovenste-ledematen',
    meta: {
      title: setTitle('Letsels aan de bovenste ledematen')
    },
    component: () => import('@/views/pages/Overige Letselschade/letselsAanDeBovensteLedematen.vue')
  },
  {
    path: '/letsels-aan-de-romp',
    name: 'letsels-aan-de-romp',
    meta: {
      title: setTitle('Letsels aan de romp')
    },
    component: () => import('@/views/pages/Overige Letselschade/letselsAanDeRomp.vue')
  },
  {
    path: '/psychische-klachten',
    name: 'psychische-klachten',
    meta: {
      title: setTitle('Psychische klachten')
    },
    component: () => import('@/views/pages/Overige Letselschade/psychischeKlachten.vue')
  },
  {
    path: '/letsel-door-een-gebrekkige-weg',
    name: 'letsel-door-een-gebrekkige-weg',
    meta: {
      title: setTitle('Letsel door een gebrekkige weg')
    },
    component: () => import('@/views/pages/Overige Letselschade/letselDoorEenGebrekkigeWeg.vue')
  },
  {
    path: '/letselschade-tijdens-het-reizen-met-het-openbaar-vervoer',
    name: 'letselschade-tijdens-het-reizen-met-het-openbaar-vervoer',
    meta: {
      title: setTitle('Letselschade tijdens het reizen met het openbaar vervoer')
    },
    component: () => import('@/views/pages/Overige Letselschade/letselschadeTijdensHetReizenMetHetOpenbaarVervoer.vue')
  },
  {
    path: '/een-ongeval-als-voetganger-of-fietser',
    name: 'een-ongeval-als-voetganger-of-fietser',
    meta: {
      title: setTitle('Een ongeval als voetganger of fietser')
    },
    component: () => import('@/views/pages/Overige Letselschade/eenOngevalAlsVoetgangerOfFietser.vue')
  },
  {
    path: '/ongeval-op-de-werkvloer',
    name: 'ongeval-op-de-werkvloer',
    meta: {
      title: setTitle('Ongeval op de werkvloer')
    },
    component: () => import('@/views/pages/Overige Letselschade/ongevalOpDeWerkvloer.vue')
  },
  {
    path: '/wat-te-doen-na-een-arbeidsongeval',
    name: 'wat-te-doen-na-een-arbeidsongeval',
    meta: {
      title: setTitle('Wat te doen na een arbeidsongeval?')
    },
    component: () => import('@/views/pages/Overige Letselschade/watTeDoenNaEenArbeidsongeval.vue')
  },
  {
    path: '/voorbeelden-van-arbeidsongevallen',
    name: 'voorbeelden-van-arbeidsongevallen',
    meta: {
      title: setTitle('Voorbeelden van arbeidsongevallen')
    },
    component: () => import('@/views/pages/Overige Letselschade/voorbeeldenVanArbeidsongevallen.vue')
  },
  {
    path: '/schadevergoeding-en-uw-rechten',
    name: 'schadevergoeding-en-uw-rechten',
    meta: {
      title: setTitle('Schadevergoeding en uw rechten')
    },
    component: () => import('@/views/pages/Overige Letselschade/schadevergoedingEnUwRechten.vue')
  },
  {
    path: '/letsel-door-een-dier',
    name: 'letsel-door-een-dier',
    meta: {
      title: setTitle('Letsel door een dier')
    },
    component: () => import('@/views/pages/Overige Letselschade/letselDoorEenDier.vue')
  },
  {
    path: '/medische-aansprakelijkheid',
    name: 'medische-aansprakelijkheid',
    meta: {
      title: setTitle('Medische aansprakelijkheid')
    },
    component: () => import('@/views/pages/Overige Letselschade/medischeAansprakelijkheid.vue')
  },
  {
    path: '/arbeidsrecht',
    name: 'arbeidsrecht',
    meta: {
      title: setTitle('Arbeidsrecht')
    },
    component: () => import('@/views/pages/Arbeidsrecht/arbeidsrecht.vue')
  },
  {
    path: '/vaststellingsovereenkomst',
    name: 'vaststellingsovereenkomst',
    meta: {
      title: setTitle('Vaststellingsovereenkomst: Wat is het en wat zijn de mogelijkheden?')
    },
    component: () => import('@/views/pages/Arbeidsrecht/vaststellingsovereenkomst.vue')
  }, 
  {
    path: '/loonvordering',
    name: 'loonvordering',
    meta: {
      title: setTitle('Loonvordering: Wat te doen als u loon niet ontvangt?')
    },
    component: () => import('@/views/pages/Arbeidsrecht/loonvordering.vue')
  },
  {
    path: '/bestuursrecht',
    name: 'bestuursrecht',
    meta: {
      title: setTitle('Bestuursrecht')
    },
    component: () => import('@/views/pages/Bestuursrecht/bestuursrecht.vue')
  },
  {
    path: '/overige-rechtsgebieden',
    name: 'overige-rechtsgebieden',
    meta: {
      title: setTitle('Overige rechtsgebieden')
    },
    component: () => import('@/views/pages/Overige rechtsgebieden/overigeRechtsgebieden.vue')
  },         
  {
    path: '/boetes-en-naheffingen',
    name: 'boetes-en-naheffingen',
    meta: {
      title: setTitle('Boetes en naheffingen: Wat te doen bij een boete of naheffing?')
    },
    component: () => import('@/views/pages/Bestuursrecht/boetesEnNaheffingen.vue')
  },
  {
    path: '/wat-te-doen-bij-een-boete-of-naheffing',
    name: 'wat-te-doen-bij-een-boete-of-naheffing',
    meta: {
      title: setTitle('Wat te doen bij een boete of naheffing?')
    },
    component: () => import('@/views/pages/Bestuursrecht/watTeDoenBijEenBoeteOfNaheffing.vue')
  }, 
  {
    path: '/wat-zijn-de-gevolgen-van-een-boete-of-naheffing',
    name: 'wat-zijn-de-gevolgen-van-een-boete-of-naheffing',
    meta: {
      title: setTitle('Wat zijn de gevolgen van een boete of naheffing?')
    },
    component: () => import('@/views/pages/Bestuursrecht/watZijnDeGevolgenVanEenBoeteOfNaheffing.vue')
  },
  {
    path: '/tarieven',
    name: 'tarieven',
    meta: {
      title: setTitle('Tarieven')
    },
    component: () => import('@/views/pages/Tarieven/tarieven.vue')
  },
  {
    path: '/NmG-NGT-عربي',
    name: 'NmG-NGT-عربي',
    meta: {
      title: setTitle('NmG/NGT/عربي')
    },
    component: () => import('@/views/pages/NmG-NGT-عربي/NmG-NGT.vue')
  },
  {
    path: '/kind-onder-de-14-jaar',
    name: 'kind-onder-de-14-jaar',
    meta: {
      title: setTitle('Kind onder de 14 jaar')
    },
    component: () => import('@/views/pages/Kind onder de 14 jaar/kindOnder.vue')
  },

]

export const allRoutes = [
  ...homeRoutes,
  ...pagesRoutes,
  ...aboutRoutes,

]
