import React from 'react'
import './about.css';
function ProfileIntroduction() {
    return (
        <>
            <div className='text-center m-3'>
                <span className='introName'>
                    Shiba Murmu – Software Engineer.
                </span>
                <br />
                <p>
                    Specializing in full-stack web <br /> development, problem-solving, <br /> and clean, maintainable code.
                </p>
            </div>
        </>
    )
}

function AboutEducation() {
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <secton>Engineering</secton>
                <secton>Secondary school</secton>
                <secton>primary school</secton>
            </div>
        </>
    )
}
function About() {
    return (
        <>
            <ProfileIntroduction />
            <AboutEducation />
            <section>Resume download.</section>
        </>
    )
}

export default About