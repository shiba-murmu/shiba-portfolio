import React from 'react'
import Profile from './pages/Profile/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Main() {
    return (
        <>
            <div>
                <section>
                   <Profile />
                </section>
                <section>Skills</section>
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
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App