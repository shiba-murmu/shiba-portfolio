import React from 'react'
import Profile from './pages/Profile/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EduationDetails from './pages/Profile/Education/EduationDetails';
import SkillDetails from './pages/Skills/SkillDetails';
import Project from './pages/Projects/Project';
import Contact_Us from './contact_us/Contact_Us';
import ProjectDetails from './pages/Projects/ProjectDetails';
import Window_view_project_details from './pages/Projects/Window_view_project_details';
import Mobile_view_details from './pages/Projects/Mobile_view_details';
import { ToastContainer } from 'react-toastify';
function Main() {
    return (
        <>
            <div>
                <section>
                   <Profile />
                </section>
                <section>
                    <SkillDetails />
                </section>
                <section>
                    <Project />
                </section>
                <section>
                    <Contact_Us />
                </section>
            </div>
        </>
    )
}
function App() {
    return (
        <>
            <BrowserRouter>
                <ToastContainer />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/education" element={<EduationDetails />} />
                    <Route path='/projectdetails' element={<ProjectDetails />} key='ProjectDetails'></Route>
                    <Route path='/window-view-project-detail/:id' element={<Window_view_project_details />}></Route>
                    <Route path='/mobile-view-project-detail/:id' element={<Mobile_view_details />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App