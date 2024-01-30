import useUser from "./useUser.js";
import {useLocation} from "react-router-dom";

export default function useAuthorize() {
    const {isLoading, user} = useUser()
    const {pathname} = useLocation() //  /owner/projects
    let isAuthenticated = false
    if (user) isAuthenticated = true

    let isAuthorized = false

    const ROLES = {
        admin: "ADMIN",
        freelancer: "FREELANCER",
        owner: "OWNER"
    }
    const desiredRole = pathname.split("/").at(1)

    if (Object.keys(ROLES).includes(desiredRole)) {
        if (user && user.role === ROLES[desiredRole]) isAuthorized = true
    }
    //[admin,freelancer,owner]

    return {isLoading, isAuthorized, isAuthenticated, user}
}