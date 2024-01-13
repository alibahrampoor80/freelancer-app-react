import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import Auth from "./pages/Auth.jsx";
import {QueryClient, QueryClientProvider} from "react-query";
import {Toaster} from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile.jsx";
import NotFound from "./pages/NotFound.jsx";
import OwnerDashboard from "./pages/OwnerDashboard.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import Projects from "./pages/Projects.jsx";
import Project from "./pages/Project.jsx";
import IndexPage from "./pages/IndexPage.jsx";
import {DarkModeProvider} from "./context/DarkModeContext.jsx";
import OwnerLayout from "./features/owner/OwnerLayout.jsx";

function App() {
    const queryClient = new QueryClient()
    return (
       <DarkModeProvider>
           <QueryClientProvider client={queryClient}>
               <Toaster/>
               <Routes>
                   <Route path={'/'} element={<IndexPage/>}/>
                   <Route path={'/auth'} element={<Auth/>}/>
                   <Route path={'/complete-profile'} element={<CompleteProfile/>}/>
                   <Route path={'/owner'} element={<OwnerLayout/>}>
                       <Route index element={<Navigate to={'dashboard'} replace={true}/>}/>
                       <Route path={'dashboard'} element={<OwnerDashboard/>}/>
                       <Route path={'projects'} element={<Projects/>}/>
                       <Route path={'projects/:id'} element={<Project/>}/>
                   </Route>
                   <Route path={'*'} element={<NotFound/>}/>
               </Routes>

           </QueryClientProvider>
       </DarkModeProvider>
    )
}

export default App
