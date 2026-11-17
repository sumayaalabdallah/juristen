import item1 from '@/assets/images/cards/Letselschade.jpg'
import item2 from '@/assets/images/cards/Arbeidsrecht.jpg'
import item3 from '@/assets/images/cards/Overige rechtsgebieden.jpg'
import BIconPerson from "@/assets/images/icon_man.svg"
import BIconHeart from "@/assets/images/team-svgrepo-com.svg"
import BIconTelephone from "@/assets/images/call.png"

import img1 from "@/assets/images/V.E. Steijvers van Orselen.jpg"
import img2 from "@/assets/images/V.E. Steijvers van Orselen.jpg"

import type {
 
  BlogType,
} from '@/types'


export const steps: BlogType[] = [
  {
    title: 'Persoonlijke benadering',
    description: 'Bij ons bent u meer dan slechts een nummer. Wij luisteren naar uw verhaal en streven ernaar een oplossing op maat te vinden.',
    icon: BIconPerson 
  },
  {
    title: 'Professioneel',
    description: 'Ons team bestaat uit gedreven juristen met ruime ervaring en vakkennis.',
    icon: BIconHeart 
  },
  {
    title: 'Flexibele contactmogelijkheden',
    description:'Wij zijn bereikbaar via Whatsapp, sociale media, telefoon en e-mail. Ook buiten kantoortijden.',
    icon: BIconTelephone 
  },
]
export const items: BlogType[] = [
  {
    title: 'Letselschade',
    description:"Heeft u letsel opgelopen? Onze specialisten staan klaar om u bij te staan.",
    image: item1,
    route: { name: 'letselschade' }
  },

  {
    title: 'Arbeidsrecht',
    description:"Ondersteuning bij geschillen met uw werkgever of werknemer.",
    image: item2,
    route: { name: 'arbeidsrecht' }
  },
 
  {
    title: 'Overige rechtsgebieden',
    description:"Wij bieden bijstand bij diverse juridische vraagstukken.",
    image: item3,
    route: { name: 'overige-rechtsgebieden' }
  }
]

export const lawyers: BlogType[] = [
  {
    title: 'V.E. Steijvers van Orselen',
    description: 'Expert in letselschade en arbeidsrecht, met een passie voor het ondersteunen van de zwakkere partij.',
    image:  img1,
    route: { name: 'juristen-V.E.Steijvers-van-Orselen' }

  },
  {
    title: 'T. Abu Khalefa',
    description: 'Meer informatie volgt binnenkort.',
    image: img2,
    route: { name: 'juristen-T.Abu-Khalefa' }

  },
 
]
