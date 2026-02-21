import type {RootState} from "../../../app/store";

export const getUser = (state: RootState) => state.user.user;
export const getIsAuth = (state: RootState) => state.user.isAuth;