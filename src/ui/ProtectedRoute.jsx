import React, {useEffect} from 'react';
import useAuthorize from "../features/auth/useAuthorize.js";
import {useNavigate} from "react-router-dom";
import Loading from "./Loading.jsx";

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate()
    const {isAuthorized, isAuthenticated, isLoading, user} = useAuthorize()
    useEffect(() => {
        if (!isAuthenticated && !isLoading) navigate('/auth')
        if (!isAuthorized && !isLoading) navigate('/not-access', {replace: true})
    }, [isAuthorized, isAuthenticated, isLoading, navigate])

    if (isLoading) return <div className={`flex items-center justify-center h-screen bg-secondary-100`}>
        <Loading/>
    </div>
    if (isAuthenticated && isAuthorized) return children

};

export default ProtectedRoute;