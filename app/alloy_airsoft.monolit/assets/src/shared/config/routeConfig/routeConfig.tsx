import React from "react";
import HomePageAsync from "../../../pages/homePage/ui/HomePage.async";
import EventsPageAsync from "../../../pages/eventsPage/ui/EventsPage.async";
import GalleryPageAsync from "../../../pages/galleryPage/ui/GalleryPage.async";

export enum AppRoutes {
    HOME = "",
    EVENTS = "events",
    GALLERY = "gallery",
}

//Разобраться с этим типом
export const RoutePath: { [AppRoutes.HOME]: string; [AppRoutes.EVENTS]: string; [AppRoutes.GALLERY]: string } = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.EVENTS]: "/events",
    [AppRoutes.GALLERY]: "/gallery",
};

export const routeConfig: {
    [AppRoutes.HOME]: { path: string; element: JSX.Element };
    [AppRoutes.EVENTS]: { path: string; element: JSX.Element };
    [AppRoutes.GALLERY]: { path: string; element: JSX.Element }
} = {
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
