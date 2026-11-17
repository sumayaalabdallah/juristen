import type { ServiceType, BlogType } from '@/types'
import {
  BIconBinoculars,
  BIconBoxes,
  BIconBriefcase,
  BIconBullseye,
  BIconCircleSquare,
  BIconCodeSlash,
  BIconStack,
  BIconVectorPen
} from 'bootstrap-icons-vue';

export const services: ServiceType[] = [
  {
    title: 'Wat te doen na een verkeersongeval',
    description: 'Iedereen kan helaas een (verkeers-)ongeval overkomen. Vaak is het onbekend terrein en weet u niet direct waar u aan moet denke, zeker gelet op de letselschadezaak. Dit is dan ook de reden dat wij een beknopt stappenplan hebben uiteengezet dat doorlopen kan worden na een verkeersongeval. ',
    icon: BIconStack,
    route: { name: 'letselschade-wat-te-doen-na-een-verkeersongeval' }

  },
  {
    title: 'Het verloop van een letselschadezaak',
    description: 'Nadat u een ongeval bent overkomen wilt u de hiervoor verantwoordelijke partij aansprakelijk stellen. Een van onze juristen onderzoekt naar aanleiding van uw verhaal en de aangebrachte bewijsmiddelen de aansprakelijkheid. Onderstaand wordt stapsgewijs de verdere procedure in vogelvlucht omschreven',
    icon: BIconBoxes,
    route: { name: 'letselschade-het-verloop-van-een-letselschadezaak' }
  },
  {
    title: 'Afhandelings- en reactietermijnen',
    description: "Er kan geen specifieke termijn worden gekoppeld aan de duur van een letseldossier. Dit verschilt per dossier, ook is dit mede afhankelijk van het letsel en het daarbij behorende herstel",
    icon: BIconCircleSquare,
    route: { name: 'letselschade-afhandelings-en-reactietermijnen' }
  },
  {
    title: 'Hoogte van het schadebedrag',
    description: 'Ieder ongeval, iedere persoon en al de daaruit voortvloeiende schade is anders. Het ene slachtoffer hoopt dat zijn klachten spoedig zullen verdwijnen en gaat (wellicht tegen beter weten in) geruime tijd door met zijn normale leven. Het kan in dat geval voorkomen dat de klachten niet overgaan en de huidige leefwijze niet past bij het aanwezige klachtenpatroon, dit kan problematisch zijn omdat het bij deze groep slachtoffers voorkomt dat zij de veroorzaker van een verkeersongeval in eerste instantie niet willen ‘benadelen’',
    icon: BIconVectorPen,
    route: { name: 'letselschade-hoogte-van-het-schadebedrag' }
  },
  {
    title: 'Schadevergoeding bij ongevallen met doorrijdende of onverzekerde bestuurder',
    description: 'Bij een aanrijding waarbij de veroorzaker is doorgereden of wanneer de andere partij niet verzekerd is, is het in veel gevallen nog steeds mogelijk om schade te verhalen. In zulke situaties wordt de schade afgehandeld door het Waarborgfonds Motorverkeer (WM) in plaats van de verzekeringsmaatschappij van de betrokken auto. Het is echter belangrijk om te beseffen dat er strenge eisen aan deze procedure zijn verbonden',
    icon: BIconBinoculars,

    route: { name: 'letselschade-schadevergoeding-bij-ongevallen-met-doorrijdende-of-onverzekerde-bestuurder' }
  },
  {
    title: 'Verjaringstermijnen',
    description: 'Afhankelijk van het soort ongeval gelden er verjaringstermijnen waarbinnen een schadeclaim ingediend moet worden. Als een aansprakelijkstelling pas na deze termijn wordt verzonden aan de betrokken persoon of verzekeraar, is de kans groot dat de claim wordt afgewezen of niet in behandeling wordt genomen. ',
    icon: BIconBinoculars,
    route: { name: 'letselschade-verjaringstermijnen' }

  },

]
export const status: BlogType[] = [
    {
      title: 'Auto-ongeluk',
      route: { name: 'auto-ongeluk' }
    },
   {
    title: 'Scooter-/motorongeluk',
    route: { name: 'scooter-motorongeluk' }
  },
   {
    title: 'Fietsongeval',
    route: { name: 'fietsongeval' }
   },
   {
    title: 'Voetgangersongeluk',
    route: { name: 'voetgangersongeluk' }
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
    title: 'Ongeval op de werkvloer',
    route: { name: 'ongeval-op-de-werkvloer' }
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