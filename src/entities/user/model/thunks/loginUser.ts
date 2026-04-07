import { createAsyncThunk } from "@reduxjs/toolkit";
import type { LoginPayload } from "../types";
import { userApi } from "../../api/userApi";
import { normalizeApiError } from "../../../../shared/lib/errors/normalizeApiError";

export const loginUser = createAsyncThunk<
    { accessToken: string; email: string },
    LoginPayload,
    { rejectValue: ReturnType<typeof normalizeApiError> }
>("user/login",
    async (payload, thunkAPI) => {
        try {
            const res = await userApi.login(payload);
            const {accessToken} = res.data
            localStorage.setItem("accessToken", accessToken);
            return { accessToken, email: payload.email };
        } catch (err) {
            return thunkAPI.rejectWithValue(normalizeApiError(err));
        }
    })
