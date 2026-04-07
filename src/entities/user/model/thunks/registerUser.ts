import { createAsyncThunk } from "@reduxjs/toolkit";
import type {LoginPayload} from "../types.ts";
import {userApi} from "../../api/userApi.ts";
import { normalizeApiError } from "../../../../shared/lib/errors/normalizeApiError";

export const registerUser = createAsyncThunk<
    void,
    LoginPayload,
    { rejectValue: ReturnType<typeof normalizeApiError> }
>("user/register",
    async (payload: LoginPayload, thunkAPI) => {
        try {
            await userApi.register(payload);
        } catch (err) {
            return thunkAPI.rejectWithValue(normalizeApiError(err));
        }
    })
