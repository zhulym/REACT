// components
import Login from '../components/Layouts/Login/index.jsx'
import Products from '../components/Layouts/Main/Products/index.jsx'
import Cart from '../components/Layouts/Main/Cart/index.jsx'
import Account from '../components/Layouts/Main/Account/index.jsx'
import Admin from '../components/Layouts/Main/Admin/index.jsx'

export const LOGIN_PAGE = {
  id: 'LOGIN_PAGE',
  component: Login,
  path: '/login'
}
export const PRODUCTS_PAGE = {
  id: 'PRODUCTS_PAGE',
  component: Products,
  isExact: true,
  path: '/'
}

export const CART_PAGE = {
  id: 'CART_PAGE',
  component: Cart,
  path: '/cart'
}

export const ACCOUNT_PAGE = {
  id: 'ACCOUNT_PAGE',
  component: Account,
  path: '/account'
}

export const ADMIN_PAGE = {
  id: 'ADMIN_PAGE',
  component: Admin,
  path: '/admin'
}

export const PROTECTED_ROUTES = [PRODUCTS_PAGE, CART_PAGE, ACCOUNT_PAGE, ADMIN_PAGE]

