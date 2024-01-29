import useUser from "./useUser.js";
import {useLocation} from "react-router-dom";

export default function useAuthorize() {
    const {isLoading, user} = useUser()
    const {pathname} = useLocation() //  /owner/projects
    let isAuthenticated = false
    if (user) isAuthenticated = true

    let isAuthorized = false

    // if (pathname.includes("owner")) {
    //     if (user && user.role === "OWNER") isAuthorized = true
    // }
    // if (pathname.includes("freelancer")) {
    //     if (user && user.role === "FREELANCER") isAuthorized = true
    // }
    // if (pathname.includes("admin")) {
    //     if (user && user.role === "ADMIN") isAuthorized = true
    // }
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