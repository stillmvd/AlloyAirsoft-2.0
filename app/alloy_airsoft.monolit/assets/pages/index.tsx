import React, { FC, ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Events from "./events";
import Gallery from "./gallery";
import UserAccessLog from "./UserAccess/ui/UserAccessLog";
import UserAccessReg from "./UserAccess/ui/UserAccessReg";

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
