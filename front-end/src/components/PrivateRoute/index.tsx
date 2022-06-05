import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectIsLoadingUser, selectIsUserLoggedIn } from "../../store/slices/userSlice"
import { Loading } from "../Loading"

type Props = {
    children: JSX.Element
}


export function PrivateRoute ({ children }: Props) {
    const isUserLoggedIn = useSelector(selectIsUserLoggedIn)
    const isLoadingUser = useSelector(selectIsLoadingUser)
    if (isLoadingUser) {
        return <Loading />
    }
    if(!isUserLoggedIn) {
        return <Navigate to='/login'/>
    }
    return children
}