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
