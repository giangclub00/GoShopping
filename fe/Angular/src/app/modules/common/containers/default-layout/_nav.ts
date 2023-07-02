import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Landing Page',
    url: '/landing-page',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Products',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Product',
        url: '/product-management'
      },
      {
        name: 'Product Category',
        url: '/product-category-management'
      },
      {
        name: 'Category',
        url: '/category-management'
      }
    ]
  },
  {
    name: 'Permissions',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Role Management',
        url: '/role-management'
      },
      {
        name: 'Asign user\'s role',
        url: '/user-role-management'
      }
    ]
  },
  {
    name: 'Users',
    url: '/user-manament',
    iconComponent: { name: 'cil-puzzle' }
  },
];
