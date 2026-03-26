import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routes/AppRouter.tsx";
import {useAppDispatch} from "../shared/lib/hooks/useAppDispatch.ts";
import {useAppSelector} from "../shared/lib/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {checkUser} from "../entities/user/model/thunks/checkUser.ts";
import {Loader} from "lucide-react";

function App() {
    const dispatch = useAppDispatch();
    const isChecking = useAppSelector(state => state.user.isChecking);

    useEffect(() => {
        dispatch(checkUser());
    })
    if (isChecking) {
        return <Loader/>
    }
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App
