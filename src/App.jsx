import {useState} from 'react'

import './App.css'
import {Route, Routes} from "react-router-dom";
import Auth from "./pages/Auth.jsx";


function App() {

    return (
        <div className={'container xl:max-w-screen-xl'}>
            <Routes>
                <Route path={'/'} element={<p>index page</p>}/>
                <Route path={'/auth'} element={<Auth/>}/>
            </Routes>
        </div>
    )
}

export default App
