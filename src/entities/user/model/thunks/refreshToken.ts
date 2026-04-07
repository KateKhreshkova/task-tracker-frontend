import { createAsyncThunk } from "@reduxjs/toolkit";
import {userApi} from "../../api/userApi.ts";
import { normalizeApiError } from "../../../../shared/lib/errors/normalizeApiError";

export const refresh = createAsyncThunk<
    string,
    void,
    { rejectValue: ReturnType<typeof normalizeApiError> }
>("user/refresh",
    async (_, thunkAPI) => {
        try {
            const res = await userApi.refresh();
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(normalizeApiError(err));
        }
    })
