import React from 'react';
import chichat_image from '/src/assets/chichat.png';
import careerlift_image from '/src/assets/careerlift.png';
import calculator_image from '/src/assets/calculator.png';
import Icons from '../../components/Icons';
import buyme_image from '/src/assets/buyme.png';
import { Link } from 'react-router-dom';
function IconsForProject({ value }) {
    const Icons = (val) => {
        switch (val) {
            case 'codebase':
                return (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                        </svg>
                    </>
                )

            case 'live':
                return (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                    </>
                )
        }
    }

    return (
        <>
            {Icons(value)}
        </>
    )
}

function ProjectSpecific({ value }) {

    const SpecifiProject = (val) => {

        switch (val) {
            case 'chichat':
                return (
                    <>
                        <div>
                            <div className='flex justify-center items-center'>
                                {/* For heading purpose  */}
                                <span className='text-xl md:text-3xl bold-font'>ChiChat Web App ( full-stack )</span>
                            </div>

                            <div className='flex justify-center items-center mt-2'>
                                {/* For image purpose */}
                                <img src={chichat_image} alt="project image" className='w-80 h-40 md:w-[35rem] md:h-[20rem] shadow-md rounded-2xl border md:border-1  border-gray-700' />
                            </div>

                            <div className='flex justify-evenly md:justify-center md:gap-10 mt-5'>
                                {/* For buttons purpose */}
                                <a href="https://github.com/shiba-murmu/ChiChat" >
                                    <button className='border-1 rounded-full flex hover:cursor-pointer  justify-center items-center gap-2 p-2 px-5'>
                                        <span className='bold-font'>Codebase</span>
                                        <IconsForProject value='codebase' />
                                    </button>
                                </a>

                                <a href="https://chi-chat-ivory.vercel.app/">
                                    <button className='border-1 rounded-full flex hover:cursor-pointer  justify-center items-center gap-2 p-2 px-5'>
                                        <span className='bold-font'>Live</span>
                                        <IconsForProject value='live' />
                                    </button>
                                </a>

                                <Link to={'/window-view-project-detail/chichat'}>
                                    <button className='hidden not-only:md border-1 rounded-full md:flex hover:cursor-pointer  justify-center items-center gap-2 p-2 px-5'>
                                        <span className='bold-font'>Details</span>
                                        {/* <IconsForProject value='right' /> */}
                                        <Icons value='right' />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </>
                )
            case 'careerlift':
                return (
                    <>
                        <div>
                            <div className='flex justify-center items-center'>
                                {/* For heading purpose  */}
                                <span className='text-2xl md:text-3xl bold-font'>Career Lift ( full-stack )</span>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                {/* For image purpose */}
                                <img src={careerlift_image} alt="project image" className='w-80 h-40 md:w-[35rem] md:h-[20rem] shadow-md rounded-2xl border md:border-1  border-gray-700' />
                            </div>
                            <div className='flex justify-evenly md:justify-center md:gap-10 mt-5'>
                                {/* For buttons purpose */}
                                <a href="https://github.com/shiba-murmu/career-lift-system-project" className=''>
                                    <button className='border-1 hover:cursor-pointer rounded-full flex  justify-center items-center gap-2 p-2 px-5'>
                                        <span className='bold-font'>Codebase</span>
                                        <IconsForProject value='codebase' />
                                    </button>
                                </a>
                                <a href="https://career-lift-system.vercel.app/" className=''>
                                    <button className='border-1 hover:cursor-pointer  rounded-full flex  justify-center items-center gap-2 p-2 px-5'>
                                        <span className='bold-font'>Live</span>
                                        <IconsForProject value='live' />
                                    </button>
                                </a>

                                <Link to={'/window-view-project-detail/careerlift'}>
                                    <button className='hidden not-only:md border-1 rounded-full md:flex hover:cursor-pointer  justify-center items-center gap-2 p-2 px-5'>
                                        <span className='bold-font'>Details</span>
                                        {/* <IconsForProject value='right' /> */}
                                        <Icons value='right' />
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </>
                )
            case 'calculator':
                return (
                    <>
                        <div>
                            <div className='flex justify-center items-center'>
                                {/* For heading purpose  */}
                                <span className='text-2xl md:text-3xl bold-font'>Simple calculator ( beginner level)</span>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                {/* For image purpose */}
                                <img src={calculator_image} alt="project image" className='w-80 h-40 md:w-[35rem] md:h-[20rem] shadow-md rounded-2xl border md:border-1  border-gray-700' />
                            </div>
                            <div className='flex justify-evenly md:justify-center md:gap-10 mt-5'>
                                {/* For buttons purpose */}
                                <a href="https://github.com/shiba-murmu/calculator" className=''>
                                    <button className='border-1 hover:cursor-pointer rounded-full flex  justify-center items-center gap-2 p-2 px-5'>
                                        <span className='bold-font'>Codebase</span>
                                        <IconsForProject value='codebase' />
                                    </button>
                                </a>
                                <a href="https://shiba-murmu.github.io/calculator/" className=''>
                                    <button className='border-1 hover:cursor-pointer  rounded-full flex  justify-center items-center gap-2 p-2 px-5'>
                                        <span className='bold-font'>Live</span>
                                        <IconsForProject value='live' />
                                    </button>
                                </a>

                                <Link to={'/window-view-project-detail/calculator'}>
                                    <button className='hidden not-only:md border-1 rounded-full md:flex hover:cursor-pointer  justify-center items-center gap-2 p-2 px-5'>
                                        <span className='bold-font'>Details</span>
                                        {/* <IconsForProject value='right' /> */}
                                        <Icons value='right' />
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </>
                )

            case 'buyme':
                return (
                    <>
                        <div>
                            <div className='flex justify-center items-center'>
                                {/* For heading purpose  */}
                                <span className='text-2xl md:text-3xl bold-font'>Ecommerce website (php)</span>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                {/* For image purpose */}
                                <img src={buyme_image} alt="project image" className='w-80 h-40 md:w-[35rem] md:h-[20rem] shadow-md rounded-2xl border md:border-1  border-gray-700' />
                            </div>
                            <div className='flex justify-evenly md:justify-center md:gap-10 mt-5'>
                                {/* For buttons purpose */}
                                <a href="https://github.com/shiba-murmu/buyme-project" alt='Check the code' className=''>
                                    <button className='border-1 hover:cursor-pointer rounded-full flex  justify-center items-center gap-2 p-2 px-5'>
                                        <span className='bold-font'>Codebase</span>
                                        <IconsForProject value='codebase' />
                                    </button>
                                </a>
                                <a href="#" className=''>
                                    <button className='border-1 hover:cursor-pointer  rounded-full flex  justify-center items-center gap-2 p-2 px-5'>
                                        <span className='bold-font'>Not deployed</span>
                                        <IconsForProject value='live' />
                                    </button>
                                </a>
                                <Link to={'/window-view-project-detail/buyme'}>
                                    <button className='hidden not-only:md border-1 rounded-full md:flex hover:cursor-pointer  justify-center items-center gap-2 p-2 px-5'>
                                        <span className='bold-font'>Details</span>
                                        {/* <IconsForProject value='right' /> */}
                                        <Icons value='right' />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </>
                )
        }
    }
    return (
        <>
            {SpecifiProject(value)}
        </>
    )
}


function Project() {
    /**
     * Main function of this page . 
     */
    return (
        <>
            <div className='mt-10 flex flex-col justify-center items-center gap-5'>
                <Link to={'/projectdetails'} className='md:hidden'>
                    <div className='flex justify-center w-44 items-center border-1 rounded-full gap-3 p-2'>
                        <span className=''>Projects</span>
                        <span className='flex justify-center items-center'>
                            <Icons value='projectright' />
                        </span>
                    </div>
                </Link>
                <div className='hidden not-only:md md:flex justify-start w-full items-center gap-3 pl-35 mb-20'>
                    <span className=' introName text-4xl'>Projects</span>
                </div>

                {/* Mobile view purpose here.. */}
                <div className='md:hidden'>
                    <ProjectSpecific value='chichat' />
                </div>
                {/* Only to use here to implement the mobile view... */}

                <div className='hidden md:flex flex-wrap justify-center items-center gap-5 md:gap-20'>
                    <ProjectSpecific value='chichat' />
                    <ProjectSpecific value='careerlift' />
                    <ProjectSpecific value='calculator' />
                    <ProjectSpecific value='buyme' />
                </div>
            </div>
        </>
    )
}

export default Project