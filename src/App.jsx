import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import Auth from "./pages/Auth.jsx";
import {QueryClient, QueryClientProvider} from "react-query";
import {Toaster} from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile.jsx";
import NotFound from "./pages/NotFound.jsx";
import OwnerDashboard from "./pages/OwnerDashboard.jsx";
import Projects from "./pages/Projects.jsx";
import Project from "./pages/Project.jsx";
import IndexPage from "./pages/IndexPage.jsx";
import {DarkModeProvider} from "./context/DarkModeContext.jsx";
import OwnerLayout from "./features/owner/OwnerLayout.jsx";
import FreelancerDashboard from "./pages/FreelancerDashboard.jsx";
import Proposals from "./pages/Proposals.jsx";
import SubmittedProjects from "./pages/SubmittedProjects.jsx";
import FreelancerLayout from "./features/freelancer/FreelancerLayout.jsx";
import {ReactQueryDevtools} from "react-query/devtools";
import ProtectedRoute from "./ui/ProtectedRoute.jsx";


function App() {
    const queryClient = new QueryClient()
    return (
        <DarkModeProvider>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false}/>
                <Toaster/>
                <Routes>
                    <Route path={'/'} element={<IndexPage/>}/>
                    <Route path={'/auth'} element={<Auth/>}/>
                    <Route path={'/complete-profile'} element={<CompleteProfile/>}/>
                    <Route path={'/owner'} element={
                        <ProtectedRoute>
                            <OwnerLayout/>
                        </ProtectedRoute>
                    }>
                        <Route index element={<Navigate to={'dashboard'} replace={true}/>}/>
                        <Route path={'dashboard'} element={<OwnerDashboard/>}/>
                        <Route path={'projects'} element={<Projects/>}/>
                        <Route path={'projects/:id'} element={<Project/>}/>
                    </Route>
                    <Route>
                        <Route path={`/freelancer`} element={
                            <ProtectedRoute>
                                <FreelancerLayout/>
                            </ProtectedRoute>
                        }>
                            <Route index element={<Navigate to={'dashboard'} replace={true}/>}/>
                            <Route path={`dashboard`} element={<FreelancerDashboard/>}/>
                            <Route path={`proposal`} element={<Proposals/>}/>
                            <Route path={`projects`} element={<SubmittedProjects/>}/>
                        </Route>
                    </Route>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>

            </QueryClientProvider>
        </DarkModeProvider>
    )
}

export default App
