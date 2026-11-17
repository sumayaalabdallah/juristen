
import type {
    BlogType,
  } from '@/types'
  import BIconAnalysis from "@/assets/images/analysis-left-svgrepo-com.svg"
  import BIconProtocol from "@/assets/images/protocol-svgrepo-com.svg"
  import BIconSearch from "@/assets/images/search-alt-2-svgrepo-com.svg"

export const status: BlogType[] = [
    {
      title: 'Auto-ongeluk',
      route: { name: 'auto-ongeluk' }
    },
    // {
    //   title: 'Kop-staartbotsing',
    //   route: { name: 'kop-staartbotsing' }
    // },
    {
      title: 'Klachten na een kop-staart botsing',
      route: { name: 'klachten-na-een-kop-staart-botsing' }
    },
    // {
    //   title: 'Kettingbotsing',
    //   route: { name: 'kettingbotsing' }
    // },
    // {
    //   title: 'Parkeerongeluk of andere bijzondere manoeuvre',
    //   route: { name: 'parkeerongeluk-of-andere-bijzondere-manoeuvre' }
    // },
    {
        title: 'Klachten na een parkeerongeluk of bijzondere manoeuvre',
        route: { name: 'klachten-na-een-parkeerongeluk-of-bijzondere-manoeuvre' }
    }, 
    // {
    //     title: 'Eenzijdig ongeval (single-vehicle accident) of ongeval door eigenschuld ',
    //     route: { name: 'eenzijdig-ongeval(single-vehicle-accident)of-ongeval-door-eigenschuld' }
    // },
    {
        title: 'Klachten na een eenzijdig ongeval of ongeval door eigenschuld ',
        route: { name: 'klachten-na-een-eenzijdig-ongeval-of-ongeval-door-eigenschuld' }
    },
    // {
    //     title: 'Passagier',
    //     route: { name: 'passagier' }
    // },
  //   {
  //       title: 'Meervoudig ongeval, maar geen schuld (schuldloze derde)1',
  //       route: { name: 'meervoudig-ongeval,maar-geen-schuld(schuldloze derde)1' }
  //   },
  //  {
  //   title: 'Meervoudig ongeval, maar geen schuld (schuldloze derde)2',
  //   route: { name: 'meervoudig-ongeval,maar-geen-schuld(schuldloze derde)2' }
  //  },
   {
    title: 'Scooter-/ motorongeluk',
    route: { name: 'scooter-motorongeluk' }
  },
   {
    title: 'Fietsongeval',
    route: { name: 'fietsongeval' }
   },
  //  {
  //   title: 'Het letsel',
  //   route: { name: 'het-letsel' }
  //  },
   {
    title: 'Voetgangersongeluk',
    route: { name: 'voetgangersongeluk' }
   },
   {
    title: 'Letsels aan de onderste ledematen',
    route: { name: 'letsels-aan-de-onderste-ledematen' }
   },
   {
    title: 'Letsels aan de bovenste ledematen',
    route: { name: 'letsels-aan-de-bovenste-ledematen' }
   },
   {
    title: 'Letsels aan de romp',
    route: { name: 'letsels-aan-de-romp' }
   },
   {
    title: 'Psychische klachten',
    route: { name: 'psychische-klachten' }
   },
   {
    title: 'Letsel door een gebrekkige weg',
    route: { name: 'letsel-door-een-gebrekkige-weg' }
   },
   {
    title: 'Letselschade tijdens het reizen met het openbaar vervoer',
    route: { name: 'letselschade-tijdens-het-reizen-met-het-openbaar-vervoer' }
   },
   {
    title: 'Een ongeval als voetganger of fietser',
    route: { name: 'een-ongeval-als-voetganger-of-fietser' }
   },
   {
    title: 'Ongeval op de werkvloer',
    route: { name: 'ongeval-op-de-werkvloer' }
   },
   {
    title: 'Wat te doen na een arbeidsongeval?',
    route: { name: 'wat-te-doen-na-een-arbeidsongeval' }
   },
   {
    title: 'Voorbeelden van arbeidsongevallen',
    route: { name: 'voorbeelden-van-arbeidsongevallen' }
   },
   {
    title: 'Schadevergoeding en uw rechten',
    route: { name: 'schadevergoeding-en-uw-rechten' }
   },
   {
    title: 'Letsel door een dier',
    route: { name: 'letsel-door-een-dier' }
   },
   {
    title: 'Medische aansprakelijkheid',
    route: { name: 'medische-aansprakelijkheid' }
   },
  ]
  export const onderste: BlogType[] = [
    {
      title: 'Enkelfracturen/blessures',
      description:"Breuken of blessures aan de enkel, vaak als gevolg van een verzwikte enkel of een val.",
    },
    {
      title: 'Heupblessures',
      description:"Heupfracturen of kneuzingen komen veel voor, vooral bij oudere voetgangers.",
    },
    {
      title: 'Knieblessures',
      description:"Verstijvingen, meniscusbeschadigingen of beschadigingen aan de ligamenten door een val of ongecontroleerde beweging van de knie.",
    },
    {
      title: 'Beenblessures',
      description:" Botbreuken, kneuzingen of verrekkingen door een val of botsing met een object.",
    },
    {
      title: 'Scheenbeenblessures',
      description:"Fracturen of kneuzingen van het scheenbeen door een harde impact met de grond of een object.",
    },
    {
      title: 'Enkelverstuikingen',
      description:"Verstuikingen van de enkelbanden, vaak door een verkeerde draaiing van de voet tijdens het vallen.",
    }
  ]
  export const bovenste: BlogType[] = [
    {
      title: 'Armfracturen/blessures',
      description:"Breuken van de arm, zoals elleboog- of polsbreuken, vaak doordat de handen uitgestoken worden om de val te breken.",
    },
    {
      title: 'Elleboogblessures',
      description:"Verstijvingen, breuken of kneuzingen van de elleboog door de impact bij de val.",
    },
    {
      title: 'Vingerblessures',
      description:"Breuken, dislocaties of kneuzingen van de vingers, bijvoorbeeld als iemand zich probeert vast te houden of de handen gebruikt om de val op te vangen.", 
    },
    {

      title: 'Handblessures',
      description:"Breuken, verstuikingen of snijwonden aan de hand, vaak door het afweren van de val.",
    },
    {
      title: 'Polsblessures',
      description:"Breuken van de polsbotten of verstuikingen door de handen uit te steken om de val te breken.",
    },
    {
      title: 'Schouderblessures',
      description:"Schouderluxaties, rotator cuff blessures of botbreuken door de impact op de schouder tijdens een val.",
    },
    {
    title: 'Fracturen van de onderarm',
    description:"Fracturen van de radius of ulna, vaak door het breken van de val of de impact van een voorwerp.",
  }
  ]
  export const romp: BlogType[] = [
    {
      title: 'Rugletsel',
      description:"Herhaaldelijke verstijving of blessures zoals een hernia, spierverrekkingen of wervelfracturen door een val of harde impact.",
    },
    {
      title: 'Nekblessures',
      description:"Whiplash, spierverrekkingen of wervelfracturen door een plotselinge draaiing of schok bij de val.",
    },
    {
      title: 'Schouderblessures',
      description:"Schouderluxaties of breuken bij de impact van de val of door het gebruiken van de schouder om de val af te weren.",
    },
    {
      title: 'Ribfracturen',
      description:" Breuken van de ribben door een val op de zij of een botsing met een object.",
    },
    {
      title: 'Spierblessures',
      description:"Verrekkingen of scheuringen van rug- of buikspieren door een plotselinge beweging of overbelasting tijdens de val.",
    }
  ]
  export const psychische: BlogType[] = [
    {
      title: 'Angststoornissen',
      description:" Angst, zoals rijangst of traumagerelateerde angst, kan ontstaan na het ongeval.",
    },
    {
      title: 'Posttraumatische stressstoornis (PTSS)',
      description:"Dit kan zich ontwikkelen na een ernstig letsel of traumatisch incident, waarbij de herinneringen aan het ongeval steeds weer naar boven komen.",
    },
    {
      title: 'Depressie',
      description:"Langdurige pijn of beperkingen door het ongeval kunnen leiden tot gevoelens van verdriet en hopeloosheid.",
    },
    {
      title: 'Angst en stress',
      description:"Angst over langdurig herstel of zorgen over de toekomst kunnen psychische klachten veroorzaken.",
    },
    {
      title: 'Slaapproblemen',
      description:"Door de pijn van het letsel of de psychische gevolgen van het ongeval kunnen slaapproblemen optreden.",
    },
    {
      title: 'Verlies van zelfvertrouwen',
      description:" Het verlies van fysieke capaciteit of de angst voor een herhaling van het ongeval kan het zelfvertrouwen van de voetganger verminderen.",
    }
  ]
  export const wat: BlogType[] = [
    {
      title:'1. Meld het ongeval bij de',
      description:"werkgever en zorg dat dit officieel wordt vastgelegd.",
    },
    {
      title: '2. Stel bewijs veilig',
      description:"zoals foto’s, getuigenverklaringen of e-mails.",
    },
    {
      title: '3. Maak een overzicht van de oorzaak en toedracht',
      description:"van het incident.",
    },
    {
      title: '4. Controleer of de arbeidsinspectie is ingelicht',
      description:"zeker bij ernstig letsel.",
    },
    {
      title: '5. Houd alle schadeposten bij',
      description:"zoals medische kosten en verlies van inkomen.",
    },
    {
      title: '6. Schakel een letselschadespecialist in',
      description:"om u bij te staan bij het indienen van een schadeclaim.",
    }
  ]
  export const voorbeelden: BlogType[] = [
    {
      title: '',
      description:"Letsel door een defecte machine of gereedschap;",
    },
  
    {
      title: '',
      description:"Uitglijden op een gladde werkvloer zonder waarschuwing;",
    },
    {
      title: '',
      description:"Burn-outklachten door overmatige werkdruk die niet tijdig is aangepakt.",
    }
  ]
  export const procedureverloop: BlogType[] = [
    {
      title:'Analyse',
      description:"De medische behandeling wordt geanalyseerd",
      icon: BIconAnalysis 
    },
    {
      title:'Protocollen',
      description:"Er wordt gecontroleerd of de medische protocollen correct zijn gevolgd.",
      icon: BIconProtocol

    },
    {
      title:'Oorzaakonderzoek',
      description:"De oorzaak van het letsel wordt vastgesteld.",
      icon: BIconSearch 

    }
  ]
  export const basis: BlogType[] = [
    {
      description:"Ga een gesprek aan met de arts om samen tot een oplossing te komen. Vraag tijdens dit gesprek een kopie van uw volledige medisch dossier op.",
    },
    {
      description:"Komt u er niet uit en bent u van mening dat de arts aansprakelijk is? Dien een schriftelijke klacht in bij de geschilleninstantie waarbij de arts is aangesloten. Een onafhankelijke klachtencommissie beoordeelt de klacht en beslist of deze gegrond is.",
    },
    {
      description:"Stel de arts of zijn verzekeraar formeel aansprakelijk om schadevergoeding te eisen.",
    },
    {
      description:"Verder kunt u nog overwegen om een klacht in te dienen bij het tuchtcollege. Dit college beoordeelt of de arts een verwijtbare fout heeft gemaakt en kan een sanctie opleggen. Dit staat los van een letselschadeprocedure en kan overwogen worden bij ernstige fouten/vergrijpen.",
    }
  ]
  export const Auto: BlogType[] = [
   
    {
      title: 'Kop-staartbotsing',
      route: { name: 'kop-staartbotsing' }
    },
   
    {
      title: 'Kettingbotsing',
      route: { name: 'kettingbotsing' }
    },
    {
      title: 'Parkeerongeluk of andere bijzondere manoeuvre',
      route: { name: 'parkeerongeluk-of-andere-bijzondere-manoeuvre' }
    },
   
    {
        title: 'Eenzijdig ongeval (single-vehicle accident) of ongeval door eigenschuld ',
        route: { name: 'eenzijdig-ongeval(single-vehicle-accident)of-ongeval-door-eigenschuld' }
    },
    {
        title: 'Passagier',
        route: { name: 'passagier' }
    },
    {
        title: 'Meervoudig ongeval, maar geen schuld (schuldloze derde)',
        route: { name: 'meervoudig-ongeval,maar-geen-schuld(schuldloze derde)1' }
    }
  
  ]
  export const Scooter: BlogType[] = [
    {
      title: 'Parkeerongeluk of andere bijzondere manoeuvre',
      route: { name: 'parkeerongeluk-of-andere-bijzondere-manoeuvre' }
    },
    {
        title: 'Eenzijdig ongeval (single-vehicle accident) of ongeval door eigenschuld ',
        route: { name: 'eenzijdig-ongeval(single-vehicle-accident)of-ongeval-door-eigenschuld' }
    },
    {
        title: 'Passagier',
        route: { name: 'passagier' }
    },
    {
    title: 'Meervoudig ongeval, maar geen schuld (schuldloze derde)',
    route: { name: 'meervoudig-ongeval,maar-geen-schuld(schuldloze derde)2' }
    },
  ]
  export const Fietsongeval: BlogType[] = [
  {
    title: 'Meer informatie over het opgelopen letsel.',
    route: { name: 'het-letsel' }
   },
  ]
  
  export const arbeidsongeval: BlogType[] = [
    {
      description:"Meld het ongeval bij de werkgever en zorg dat dit officieel wordt vastgelegd.",
    },
    {
      description:"Stel bewijs veilig, zoals foto’s, getuigenverklaringen of e-mails.",
    },
    {
      description:"Maak een overzicht van de oorzaak en toedracht van het incident.",
    },
    {
      description:"Controleer of de arbeidsinspectie is ingelicht, zeker bij ernstig letsel.",
    },
    {
      description:"Houd alle schadeposten bij, zoals medische kosten en verlies van inkomen.",
    },
    {
      description:"Schakel een letselschadespecialist in om u bij te staan bij het indienen van een schadeclaim.",
    }
  ]