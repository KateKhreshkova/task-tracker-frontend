import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "./routes.ts";
import {useAppSelector} from "../../shared/lib/hooks/useAppSelector.ts";
import {getIsAuth} from "../../entities/user";
import {Main} from "../../pages/main";

const AppRouter = () => {
    const isAuth: boolean = useAppSelector(getIsAuth);
    console.log(isAuth);
    return (
        <Routes>
            { isAuth ? authRoutes.map(({path, component: Component}) => {
                return <Route key={path} path={path} element={<Component/>}/>
            }) : null }
            {
                publicRoutes.map(({path, component: Component}) => {
                    return <Route key={path} path={path} element={<Component/>}/>
                })
            }
            <Route
                path="*"
                element={<Main/>}
            />
        </Routes>
    );
};

export default AppRouter;