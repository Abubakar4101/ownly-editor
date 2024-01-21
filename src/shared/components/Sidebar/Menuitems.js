import { AppPaths } from '../../../modules/types';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Overview',
    icon: 'mdi mdi-dots-horizontal',
    href: 'Overview',
  },
  {
    title: 'Menus',
    icon: 'hard-drive',
    href: AppPaths.RESTAURANT_MENUS,
  },
  {
    title: 'Translations',
    icon: 'pie-chart',
    href: AppPaths.RESTAURANT_TRANSLATIONS,
  },
  {
    title: 'Feedback',
    icon: 'shopping-bag',
    href: AppPaths.RESTAURANT_FEEDBACK,
  },
  {
    navlabel: true,
    subheader: 'Settings',
    icon: 'mdi mdi-dots-horizontal',
    href: 'Settings',
  },
  {
    title: 'Settings',
    icon: 'message-square',
    href: AppPaths.RESTAURANT_SETTINGS,
  },
  {
    title: 'QR Codes',
    icon: 'clipboard',
    href: AppPaths.RESTAURANT_QRCODES,
  },
  // {
  //   title: 'Customers',
  //   icon: 'users',
  //   href: '/customers',
  //   collapse: true,
  //   children: [
  //     {
  //       title: 'Lists',
  //       icon: 'list',
  //       href: '/customers/lists',
  //     },
  //     {
  //       title: 'Edit',
  //       icon: 'edit',
  //       href: '/customers/edit',
  //     },
  //   ],
  // },
];

export default Menuitems;
