import React from 'react'

function ProfileIntroduction() {
    return (
        <>
            <div className='text-center'>
                <span>
                    Shiba Murmu – Software Engineer.
                </span>
                <br />
                <p>
                    Specializing in full-stack web development, problem-solving, and clean, maintainable code.
                </p>
            </div>
        </>
    )
}

function AboutEducation() {
    return (
        <>
            <div>About my educations here....</div>
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