import Home from '../../../pages/home';
import Events from '../../../pages/events';
import Gallery from '../../../pages/gallery';

export enum AppRoutes {
    HOME = '',
    EVENTS = 'events',
    GALLERY = 'gallery'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.EVENTS]: '/events',
    [AppRoutes.GALLERY]: '/gallery',
}

export const routeConfig: Record<AppRoutes, { path: string; element: JSX.Element }> = {
    [AppRoutes.HOME]: {
        path: RoutePath[""],
        element: <Home />,
    },
    [AppRoutes.EVENTS]: {
        path: RoutePath.events,
        element: <Events />,
    },
    [AppRoutes.GALLERY]: {
        path: RoutePath.gallery,
        element: <Gallery />,
    }
}