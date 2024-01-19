// External liberaries
import { ReactElement } from "react";

// Pages
import HomePage from "../pages/homePage/HomePage";

interface IRoute {
    path: string;
    element: ReactElement
}

export const ROUTES: IRoute[] = [
    {
        path: "/",
        element: <HomePage />
    },
]