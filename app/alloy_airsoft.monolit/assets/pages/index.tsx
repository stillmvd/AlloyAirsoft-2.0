import { FC, ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./HomePage/HomePage";
import Events from "./EventsPage/EventsPage";
import Gallery from "./GalleryPage/GalleryPage";
import UserAccessLog from "./UserAccessPage/ui/UserAccessLog";
import UserAccessReg from "./UserAccessPage/ui/UserAccessReg";

export const App: FC = (): ReactElement => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<UserAccessLog />} />
            <Route path="/registration" element={<UserAccessReg />} />
        </Routes>
    );
};
