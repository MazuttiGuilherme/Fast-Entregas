import { Route, Routes as RDRoutes } from "react-router-dom";
import { HomeView } from "./views/Home";
import { NotFoundView } from "./views/NotFound";

export function Routes() {
    return (
    <RDRoutes>
        <Route path='/' element={<HomeView />}/>
        <Route path='*' element={<NotFoundView />}/>
    </RDRoutes>   
    )
}
