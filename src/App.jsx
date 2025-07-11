import React from 'react'
import Profile from './pages/Profile/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EduationDetails from './pages/Profile/Education/EduationDetails';
import SkillDetails from './pages/Skills/SkillDetails';
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
                <section>Projects</section>
                <section>Contactus</section>
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
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App