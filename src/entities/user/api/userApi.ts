import {$authHost, $host } from "../../../shared/config/api";
import type { LoginPayload } from "../model/types";

const API_URL : string= "/auth";
export const userApi = {
    register: (data: LoginPayload) => $host.post( API_URL + "/register", data),
    login: (data: LoginPayload) => $host.post( API_URL + "/login", data),
    logout: () => $authHost.post( API_URL + "/logout"),
    check: () => $authHost.post( API_URL + "/check"),
    refresh: () => $authHost.post( API_URL + "/refresh"),
};