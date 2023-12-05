import {useState} from 'react'

import './App.css'
import {Route, Routes} from "react-router-dom";
import Auth from "./pages/Auth.jsx";
import {QueryClient, QueryClientProvider} from "react-query";
import {Toaster} from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile.jsx";


function App() {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <Toaster/>
            <div className={'container xl:max-w-screen-xl'}>
                <Routes>
                    <Route path={'/'} element={<p>index page</p>}/>
                    <Route path={'/auth'} element={<Auth/>}/>
                    <Route path={'/complete-profile'} element={<CompleteProfile/>}/>
                </Routes>
            </div>
        </QueryClientProvider>
    )
}

export default App
