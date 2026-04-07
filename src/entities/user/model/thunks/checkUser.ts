import {createAsyncThunk} from "@reduxjs/toolkit";
import type {CheckPayload} from "../types.ts";
import {userApi} from "../../api/userApi.ts";
import { normalizeApiError } from "../../../../shared/lib/errors/normalizeApiError";

export const checkUser = createAsyncThunk<
    CheckPayload,
    void,
    { rejectValue: ReturnType<typeof normalizeApiError> }
>("user/check",
    async (_, thunkAPI) => {
        try {
            const res = await userApi.check();
            console.log(res.data)
            return res.data
        } catch (err) {
            return thunkAPI.rejectWithValue(normalizeApiError(err));
        }
    })
