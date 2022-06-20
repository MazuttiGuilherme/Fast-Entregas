import { Route, Routes as RDRoutes } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { PublicOnlyRoute } from "./components/PublicOnlyRoute";
import { HomeView } from "./views/Home";
import { LoginView } from "./views/Login";
import { NewOrderView } from "./views/NewOrder";
import { NewOrderSuccessView } from "./views/NewOrderSuccess";
import { NotFoundView } from "./views/NotFound";
import { RegisterView } from "./views/Register";

export function Routes() {
    return (
    <RDRoutes>
        <Route path='/' element={<HomeView />} />
        <Route path='/cadastro' element={
        <PublicOnlyRoute>
            <RegisterView />
        </PublicOnlyRoute>
        } />
          <Route path='/login' element={
        <PublicOnlyRoute>
            <LoginView />
        </PublicOnlyRoute>
        } />
        <Route 
            path='/novo-pedido' 
            element={
            <PrivateRoute>
                <NewOrderView/>
            </PrivateRoute>
        } 
    />
        <Route 
            path='/novo-pedido/sucesso' 
            element={
            <PrivateRoute>
                <NewOrderSuccessView />
            </PrivateRoute>
        } 
    />
        <Route path='*' element={<NotFoundView />} />
    </RDRoutes>   
    )
}
