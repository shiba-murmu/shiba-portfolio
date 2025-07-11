import React from 'react'
import Profile from './pages/Profile/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EduationDetails from './pages/Profile/Education/EduationDetails';
import SkillDetails from './pages/Skills/SkillDetails';
import Project from './pages/Projects/Project';
import Contact_Us from './contact_us/Contact_Us';
import ProjectDetails from './pages/Projects/ProjectDetails';

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
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/education" element={<EduationDetails />} />
                    <Route path='/projectdetails' element={<ProjectDetails />} key='ProjectDetails'></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App