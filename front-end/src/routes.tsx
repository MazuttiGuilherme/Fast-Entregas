import { Route, Routes as RDRoutes } from "react-router-dom";
import { HomeView } from "./views/Home";
import { NotFoundView } from "./views/NotFound";
import { RegisterView } from "./views/Register";

export function Routes() {
    return (
    <RDRoutes>
        <Route path='/' element={<HomeView />}/>
        <Route path='/cadastro' element={<RegisterView />}/>
        <Route path='*' element={<NotFoundView />}/>
    </RDRoutes>   
    )
}
