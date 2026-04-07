import type {ComponentType} from "react";
import {ABOUT_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTER_ROUTE, TASKS_ROUTE} from "../../shared/config/consts.ts";
import {Login, Register} from "../../pages/auth";
import {Tasks} from "../../pages/task";
import {Main} from "../../pages/main";
import {About} from "../../pages/about";

export interface IRoute {
    path: string;
    component: ComponentType;
}

export const publicRoutes: IRoute[] = [
    {
        path: LOGIN_ROUTE,
        component: Login
    },
    {
        path: REGISTER_ROUTE,
        component: Register
    },
    {
        path: MAIN_ROUTE,
        component: Main
    },
    {
        path: ABOUT_ROUTE,
        component: About
    }

]
export const authRoutes: IRoute[] = [
    {
        path: TASKS_ROUTE,
        component: Tasks
    }

]
