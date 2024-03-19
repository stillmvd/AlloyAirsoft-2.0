import React from "react";
import { Link } from "react-router-dom";
import { ListPointsMenu, PointMenu } from "../types/types";

const loginKey: PointMenu = 1;
const regKey: PointMenu = 2;

export const items: ListPointsMenu = [
    {
        key: loginKey,
        label: <Link to="/login">Sign in</Link>,
    },
    {
        key: regKey,
        label: <Link to="/registration">Sign up</Link>,
    },
];
