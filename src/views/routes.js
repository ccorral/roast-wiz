import { isAuthenticated } from 'src/core/auth';
import App from './app';
import SignIn from './pages/sign-in';
import Dashboard from './pages/Dashboard';


export const paths = {
  ROOT: '/',
  SIGN_IN: '/sign-in',
  DASHBOARD: '/'
}


const requireAuth = getState => {
  return (nextState, replace) => {
    if (!isAuthenticated(getState())) {
      replace(paths.SIGN_IN)
    }
  }
}

const requireUnauth = getState => {
  return (nextState, replace) => {
    console.log(isAuthenticated(getState()));
    if (isAuthenticated(getState())) {
      replace(paths.DASHBOARD)
    }
  }
}


export const getRoutes = getState => {
  return {
    path: paths.ROOT,
    component: App,
    childRoutes: [
      {
        indexRoute: {
          component: Dashboard,
          onEnter: requireAuth(getState)
        }
      },
      {
        path: paths.SIGN_IN,
        component: SignIn,
        onEnter: requireUnauth(getState)
      }
    ]
  }
}
