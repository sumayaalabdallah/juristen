import type { BSIconType } from '@/types'
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
type FooterLinkType = {
  name: string
  link?: string
  badge?: string
  icon?: BSIconType
}

export const quickLinks: FooterLinkType[] = [
  {
    name: 'Startpagina',
    link: 'home'
  },
  {
    name: 'Juristen',
    link: 'juristen'
  },
  {
    name: 'Letselschade',
    link: 'letselschade',
  },
  {
    name: 'Rechtsgebieden',
    link: 'rechtsgebieden',
  },
  {
    name: 'NmG/NGT/عربي',
    link: 'NmG-NGT-عربي'
  },
  {
    name: 'Tarieven',
    link: 'tarieven'
  },
  {
    name: 'Neem Contact Op',
    link: 'contact'
  },
 
]



export const followOnIcons = [
  { icon: faFacebookF, variant: 'bg-facebook', href: "https://www.facebook.com/profile.php?id=61556720772843" },
  { icon: faInstagram, variant: 'bg-instagram', href: "https://www.instagram.com/s.en.a.juristen/" },
  // { icon: faLinkedinIn, variant: 'bg-linkedin' },
]

export const contactDetails = {
  address: 'Street : Lijnbaan , Office number : 30-D City , City : Zwolle , Post code:8011 AR , The Netherlands',
  number: '+31 6 17141869',
  email: 'info@oranje-fragrance.nl',
  open: 'Mon - Fri: 09:00 - 21:00',
  close: 'Sat - Sun: Closed'
}

