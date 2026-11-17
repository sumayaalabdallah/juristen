import type { MenuItemType} from '@/helpers/menu'

export const APP_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'demos',
    label: 'Demos',
    children: [
      {
        key: 'demos-agency-digital',
        label: 'demos',
        route: { name: 'home' },
        parentKey: 'demos'
      }
    ]
          
  },
  {
    key: 'ddd',
    label: 'ddd',
    children: [
    
     {
        key: 'contact',
        label: 'contact',
        children: [
          {
            key: 'contact',
            label: 'contact',
            route: { name: 'contact' },
            parentKey: 'contact'
          }
        ]
        },
        // {
        //   key: 'rechtsgebieden',
        //   label: 'rechtsgebieden',
        //   children: [
        //     {
        //       key: 'rechtsgebieden',
        //       label: 'rechtsgebieden',
        //       route: { name: 'rechtsgebieden' },
        //       parentKey: 'rechtsgebieden'
        //     },
        //   ]
        //   },
        {
          key: 'tarieven',
          label: 'tarieven',
           children: [
            {
              key: 'tarieven',
              label: 'tarieven',
              route: { name: 'rechtsgebieden' },
              parentKey: 'tarieven'
            },
          ]
           
      },
    ]
    },
    {
      key: 'about',
      label: 'About',
      children: [
       
        {
          key: 'about-contact-1',
          label: 'Kantoorvisie',
          route: { name: 'kantoorvisie' },
          parentKey: 'about'
        },
        {
          key: 'about-contact-2',
          label: 'Juristen',
          route: { name: 'juristen' },
          parentKey: 'about'
        },
      
          ]
        },
  {
      key: 'rechtsgebieden',
      label: 'rechtsgebieden',
      // route: { name: 'rechtsgebieden' },
        children: [
      {
        key: 'rechtsgebieden-letselschade',
        label: 'Letselschade',
        route: { name: 'letselschade' },
        parentKey: 'rechtsgebieden'
      },
      {
        key: 'rechtsgebieden-overige-letselschade',
        label: 'Overige Letselschade',
        route: { name: 'overige-letselschade' },
        parentKey: 'rechtsgebieden'
      },
      {
        key: 'rechtsgebieden-arbeidsrecht',
        label: 'Arbeidsrecht',
        route: { name: 'arbeidsrecht' },
        parentKey: 'rechtsgebieden'
      },
      {
        key: 'rechtsgebieden-bestuursrecht',
        label: 'Bestuursrecht',
        route: { name: 'bestuursrecht' },
        parentKey: 'rechtsgebieden'
      },  
      {
        key: 'rechtsgebieden-overige-rechtsgebieden',
        label: 'Overige rechtsgebieden',
        route: { name: 'overige-rechtsgebieden' },
        parentKey: 'rechtsgebieden'
      },   
    ]
  },
  
]


