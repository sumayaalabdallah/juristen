

import webflowImg from '@/assets/images/Kantoorvisie/Bereikbaarheid en type contact.jpg'


import type {  ToolType } from '@/types'
import { BIconEnvelope, BIconGeoAlt, BIconTelephone } from 'bootstrap-icons-vue'

type AddreddType = {
  emailornum?: string
} & ToolType

export const address: AddreddType[] = [
  {
    icon: BIconGeoAlt,
    name: 'contactPage.address',
    image:webflowImg
   
  },
  {
    icon: BIconEnvelope,
    name: 'contactPage.emailUs',
    description: "contactPage.textForEmail",
    emailornum: 'info@oranje-fragrance.nl'
  },
  {
    icon: BIconTelephone,
    name: 'contactPage.callUs',
    description: "contactPage.textForCall",
    emailornum: '+31633407737'
  }
]

