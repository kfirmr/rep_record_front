// Constants
import { ROUTES } from "./routes";

// External liberaries
import { ReactElement } from "react";

// Pages
import HomePage from "../pages/homePage/HomePage";

interface IRoute {
    path: string;
    element: ReactElement
}

export const ROUTER: IRoute[] = [
    {
        path: ROUTES.HOME,
        element: <HomePage />
    },
]