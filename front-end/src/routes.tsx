import { Route, Routes as RDRoutes } from "react-router-dom";
import { HomeView } from "./views/Home";

export function Routes() {
    return (
    <RDRoutes>
        <Route path='/' element={<HomeView/>}/>
    </RDRoutes>   
    )
}
