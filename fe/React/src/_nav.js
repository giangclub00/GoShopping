import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilPuzzle, cilSpeedometer } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Product',
    to: '/product',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Product',
        to: '/product/product-management',
      },
      {
        component: CNavItem,
        name: 'Product Category',
        to: '/product/product-category-management',
      },
      {
        component: CNavItem,
        name: 'Category',
        to: '/product/category-management',
      },
      {
        component: CNavItem,
        name: 'Slider',
        to: '/product/slider',
      },
    ],
  },
]

export default _nav
