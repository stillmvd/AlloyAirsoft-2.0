import HomePageAsync from "../../../pages/HomePage/HomePage.async";
import EventsPageAsync from "../../../pages/EventsPage/EventsPage.async";
import GalleryPageAsync from "../../../pages/GalleryPage/GalleryPage.async";

export enum AppRoutes {
    HOME = "",
    EVENTS = "events",
    GALLERY = "gallery",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.EVENTS]: "/events",
    [AppRoutes.GALLERY]: "/gallery",
};

export const routeConfig: Record<
    AppRoutes,
    { path: string; element: JSX.Element }
> = {
    [AppRoutes.HOME]: {
        path: RoutePath[""],
        element: <HomePageAsync />,
    },
    [AppRoutes.EVENTS]: {
        path: RoutePath.events,
        element: <EventsPageAsync />,
    },
    [AppRoutes.GALLERY]: {
        path: RoutePath.gallery,
        element: <GalleryPageAsync />,
    },
};
