import React, { FC, ReactElement } from 'react';
import {AppRouter} from "./providers/router";

export const App: FC = (): ReactElement => {
    return (
        <AppRouter/>
    )
}