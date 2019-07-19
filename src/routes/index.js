import Loadable from 'react-loadable';
import loadingSpinner from './loading.js';


export const LandingPage = Loadable({
  loader: () => import('../containers/LandingPage'),
  loading: loadingSpinner
})


export const HomePage = Loadable({
  loader: () => import("../containers/Home"),
  loading: loadingSpinner
})

export const Dashboard = Loadable({
  loader: () => import("../containers/Dashboard"),
  loading: loadingSpinner
})

export const Economy = Loadable({
  loader: () => import("../containers/Economy"),
  loading: loadingSpinner
})

export const Labour = Loadable({
  loader: () => import("../containers/Labour"),
  loading: loadingSpinner
})

export const Social = Loadable({
  loader: () => import("../containers/Social"),
  loading: loadingSpinner
})
