import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routes/AppRouter.tsx";
import {useAppDispatch} from "../shared/lib/hooks/useAppDispatch.ts";
import {useAppSelector} from "../shared/lib/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {checkUser} from "../entities/user/model/thunks/checkUser.ts";
import {Loader} from "lucide-react";
import {ErrorBoundary} from "../shared/ui/ErrorBoundary.tsx";

function App() {
    const dispatch = useAppDispatch();
    const isChecking = useAppSelector(state => state.user.isChecking);

    useEffect(() => {
        dispatch(checkUser());
    }, [dispatch]);
    if (isChecking) {
        return <Loader/>
    }
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <AppRouter/>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
