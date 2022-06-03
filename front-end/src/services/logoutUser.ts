import { signOut } from "firebase/auth"
import { auth } from "./firebase"

export const logoutUser = async () => {
    await signOut(auth)
}