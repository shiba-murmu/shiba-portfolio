import React from 'react'
import './about.css';
// import Icons from '../components/Icons';
import Icons from '../../components/Icons';
import { Link } from 'react-router-dom';
function ProfileIntroduction() {
    return (
        <>
            <div className='text-center m-3 md:w-5/6 md:mx-auto'>
                <span className='md:text-3xl introName'>
                    Shiba Murmu – Software Engineer.
                </span>
                <br />
                <p className='px-3 pt-1 flex justify-center items-center'>
                    Hi, I'm Shiba Murmu, a passionate and results-driven Full Stack Developer with a strong foundation in web and software development. I specialize in building efficient, scalable, and user-friendly applications using technologies like React, JavaScript, Python, Django, and Tailwind CSS. With a problem-solving mindset and a love for clean code, I transform ideas into working solutions. I’m continuously learning and exploring new technologies to stay ahead in the fast-paced tech world. Whether it’s developing dynamic frontend experiences or crafting robust backend systems, I bring a blend of creativity, logic, and dedication to every project.
                </p>
            </div>
        </>
    )
}

function AboutEducation() {
    return (
        <>
            <div className='flex flex-col md:flex-row justify-center md:justify-evenly items-center mt-10 md:my-30'>
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
                    <div className='flex md:hidden justify-center items-center mt-2'>
                        <Link to='/education'>
                            <Icons value='right' className='w-10 h-10' />
                        </Link>
                    </div>
                </section>
                
                <section className='hidden not-only:md md:flex flex-col justify-center items-center '>
                    {/* This section is for engineering details... */}
                    <Icons value='Engineering' />
                    <div>
                        <span className='bold-font introName'>Intermediate +2</span>
                    </div>
                    <div>
                        <span>Central Board Of Secondary Eduation</span>
                    </div>

                    <div>
                        <span className='text-gray-700 font-bold'>2019-2021</span>
                    </div>

                    {/* <div>
                        <span className='text-gray-700 font-bold'>CGPA: 7.45</span>
                    </div> */}
                    {/* <div className='flex justify-center items-center mt-2'>
                        <Link to='/education'>
                            <Icons value='right' className='w-10 h-10' />
                        </Link>
                    </div> */}
                </section>

                <section className='hidden not-only:md md:flex flex-col justify-center items-center'>
                    {/* This section is for engineering details... */}
                    <Icons value='Engineering' />
                    <div>
                        <span className='bold-font introName'>Matriculation</span>
                    </div>
                    <div>
                        <span>BM D.A.V Public School</span>
                    </div>

                    <div>
                        <span className='text-gray-700 font-bold'>2009-2019</span>
                    </div>

                    {/* <div>
                        <span className='text-gray-700 font-bold'>CGPA: 7.45</span>
                    </div> */}
                    {/* <div className='flex justify-center items-center mt-2'>
                        <Link to='/education'>
                            <Icons value='right' className='w-10 h-10' />
                        </Link>
                    </div> */}
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