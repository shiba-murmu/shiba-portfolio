import React from 'react'
import './about.css';
// import Icons from '../components/Icons';
import Icons from '../../components/Icons';
import { Link } from 'react-router-dom';

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
            <div className='flex flex-col justify-center items-center mt-10'>
                <section className='flex flex-col justify-center items-center'>
                    {/* This section is for engineering details... */}
                    <Icons value='Engineering' />
                    <div>
                        <span className='bold-font introName'>Computer Science and Engineering</span>
                    </div>
                    <div>
                        <span>Jharkhand University And Technology</span>
                    </div>

                    <div>
                        <span className='text-gray-700 font-bold'>2021-2025</span>
                    </div>

                    {/* <div>
                        <span className='text-gray-700 font-bold'>CGPA: 7.45</span>
                    </div> */}
                    <div className='flex justify-center items-center mt-2'>
                        <Link to='/education'>
                            <Icons value='right' className='w-10 h-10' />
                        </Link>
                    </div>

                </section>
                <section>
                    {/* This section is for education details... */}
                    <Icons value='primary' />
                </section>
            </div>
        </>
    )
}

function DownloadResume() {
    return (
        <>
            <div className='flex justify-center items-center mt-10'>
                <div className='flex justify-center items-center gap-3 border-1 rounded-full p-3 w-40'>
                    {/* There is need to add a resume pdf for to working the download buttons here. */}
                    <a href="./resume.pdf" download={'shibamurmu_resume.pdf'} className='bold-font'>
                        Resume
                    </a>
                    <Icons value='download' className='w-10 h-10' />
                </div>
            </div>
        </>
    )
}
function About() {
    return (
        <>
            <ProfileIntroduction />
            <AboutEducation />
            <DownloadResume />
        </>
    )
}

export default About