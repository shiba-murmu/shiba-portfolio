import React from 'react'
import CareerLiftProject_image from '/src/assets/Careerlift.png'
import Icons from '../../components/Icons'
import { Link } from 'react-router-dom'
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

function ProjectSpecific() {
    return (
        <>
            <div>
                <div className='flex justify-center items-center'>
                    {/* For heading purpose  */}
                    <span className='text-2xl bold-font introName'>Career Lift System</span>
                </div>
                <div className='flex justify-center items-center mt-2'>
                    {/* For image purpose */}
                    <img src={CareerLiftProject_image} alt="" className='w-80 h-40 shadow-md rounded-2xl' />
                </div>
                <div className='flex justify-evenly mt-5'>
                    {/* For buttons purpose */}
                    <a href="https://github.com/shiba-murmu/career-lift-system-project">
                        <button className='border-1 rounded-full flex  justify-center items-center gap-2 p-2 px-5'>
                            <span className='bold-font'>Codebase</span>
                            <IconsForProject value='codebase' />
                        </button>
                    </a>
                    <a href="https://career-lift-system.vercel.app/">
                        <button className='border-1 rounded-full flex  justify-center items-center gap-2 p-2 px-5'>
                            <span className='bold-font'>Live</span>
                            <IconsForProject value='live' />
                        </button>
                    </a>
                </div>
            </div>
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
                <Link to={'/projectdetails'}>

                    <div className='flex justify-center w-44 items-center border-1 rounded-full gap-3 p-4'>
                        <span className='bold-font'>Projects</span>
                        <span className='flex justify-center items-center'>
                            <Icons value='projectright' />
                        </span>
                    </div>
                </Link>
                <ProjectSpecific />
            </div>
        </>
    )
}

export default Project