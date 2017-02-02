import {
    isAuthenticated
} from 'src/core/auth';
import App from './app';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import RoastDetail from './pages/RoastDetail';
import BeanDetail from './pages/BeanDetail';
import NewRoast from './pages/NewRoast';
import BeanForm from './pages/BeanForm';


export const paths = {
    ROOT: '/',
    SIGN_IN: '/sign-in',
    DASHBOARD: '/',
    BEAN_DETAIL: '/bean/:id',
    ROAST_DETAIL: '/roast/:id',
    NEW_ROAST: '/new/roast',
    NEW_BEAN: '/new/bean',
    EDIT_BEAN: '/edit/bean'
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
        if (isAuthenticated(getState())) {
            replace(paths.DASHBOARD)
        }
    }
}


export const getRoutes = getState => {
    return {
        path: paths.ROOT,
        component: App,
        childRoutes: [{
                indexRoute: {
                    component: Dashboard,
                    onEnter: requireAuth(getState)
                }
            }, {
                path: paths.SIGN_IN,
                component: SignIn,
                onEnter: requireUnauth(getState)
            }, {
                path: paths.BEAN_DETAIL,
                component: BeanDetail
            }, {
                path: paths.ROAST_DETAIL,
                component: RoastDetail
            }, {
                path: paths.NEW_ROAST,
                component: NewRoast
            }, {
                path: paths.NEW_BEAN,
                component: BeanForm
            }, {
                path: paths.EDIT_BEAN,
                component: BeanForm
            },
            //   {
            //     path: paths.ROAST_DETAIL,
            //     component: RoastDetail
            //   }
        ]
    }
}
