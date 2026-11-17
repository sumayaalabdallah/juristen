import blogImg1 from '@/assets/images/Kantoorvisie/Over ons.jpg'
import blogImg2 from '@/assets/images/Kantoorvisie/Onze werkwijze.jpg'
import blogImg3 from '@/assets/images/Kantoorvisie/Verschil reguliere kantoren.jpg'
import blogImg4 from '@/assets/images/Kantoorvisie/Verschil jurist of advocaat.jpg'
import blogImg5 from '@/assets/images/Kantoorvisie/Bereikbaarheid en type contact.jpg'

import item1 from '@/assets/images/cards/Letselschade.jpg'
import item2 from '@/assets/images/cards/Overige letselschade.jpg'
import item3 from '@/assets/images/cards/Arbeidsrecht.jpg'
import item4 from '@/assets/images/cards/Bestuursrecht card.jpg'
import item5 from '@/assets/images/cards/Overige rechtsgebieden.jpg'

import card1 from '@/assets/images/V.E. Steijvers van Orselen.jpg'
import card2 from '@/assets/images/Vaststellingsovereenkomst Card.jpg'

import type {
  BlogType
} from '@/types'


  // export const blogs: BlogType[] = [
  //   {
  //     title: 'Over ons',
  //     image: blogImg1,
  //     route: { name: 'kantoorvisie-over-ons' }
  //   },
  //   {
  //     title: 'Onze werkwijze',
  //     image: blogImg2,
  //     route: { name: 'kantoorvisie-onze-werkwijze' }
  //   },
  //   {
  //     title: 'Verschil reguliere kantoren',
  //     image: blogImg3,
  //     route: { name: 'kantoorvisie-verschil-reguliere-kantoren' }
  //   },
  //   {
  //     title: 'Verschil jurist of advocaat',
  //     image: blogImg4,
  //     route: { name: 'kantoorvisie-verschil-jurist-of-advocaat' }
  //   },
  //   {
  //     title: 'Bereikbaarheid en type contact',
  //     image: blogImg5,
  //     route: { name: 'kantoorvisie-bereikbaarheid-en-type-contact' }
  //   }
  // ]
  export const cards: BlogType[] = [
    {
      title: 'Mw. mr. V.E. Steijvers van Orselen',
      image: card1,
      route: { name: 'juristen-V.E.Steijvers-van-Orselen' }
    },
    {
      title: 'Dhr. T. Abu Khalefa',
      image: card2,
      route: { name: 'juristen-T.Abu-Khalefa' }
    }
  ]
  export const items: BlogType[] = [
    {
      title: 'Letselschade',
      image: item1,
      route: { name: 'letselschade' }
    },
    {
      title: 'Overige letselschade',
      image: item2,
      route: { name: 'overige-letselschade' }
    },
    {
      title: 'Arbeidsrecht',
      image: item3,
      route: { name: 'arbeidsrecht' }
    },
    {
      title: 'Bestuursrecht',
      image: item4,
      route: { name: 'bestuursrecht' }
    },
    {
      title: 'Overige rechtsgebieden',
      image: item5,
      route: { name: 'overige-rechtsgebieden' }
    }
  ]