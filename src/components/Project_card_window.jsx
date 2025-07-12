import React from 'react'
import Icons from './Icons'
import { Link } from 'react-router-dom'
function Project_card_window({project_heading, project_image, codebase_link, live_link, project_id, live_button_value}) {
    /**
     * 
     * this is the component of the card of the project
     * 
     * when this function is called by other components it will return the card of the project
     * 
     * need to pass some props
     * 
     * project_heading
     * project_image
     * codebase_link
     * live_link
     * project_id
     * Live_button_value : this value need to pass because some projects not deployed.
     */
    return (
        <>
            <div>
                <div className='flex justify-center items-center'>
                    {/* For heading purpose  */}
                    <span className='text-xl md:text-3xl bold-font'>{project_heading}</span>
                </div>

                <div className='flex justify-center items-center mt-2'>
                    {/* For image purpose */}
                    <img src={project_image} alt="project image" className='w-80 h-40 md:w-[35rem] md:h-[20rem] shadow-md rounded-2xl border md:border-1  border-gray-700' />
                </div>

                <div className='flex justify-evenly md:justify-center md:gap-10 mt-5'>
                    {/* For buttons purpose */}
                    <a href={codebase_link} >
                        <button className='border-1 rounded-full flex hover:cursor-pointer  justify-center items-center gap-2 p-2 px-5'>
                            <span>Codebase</span>
                            <Icons value='codebase' />
                        </button>
                    </a>

                    <a href={live_link}>
                        <button className='border-1 rounded-full flex hover:cursor-pointer  justify-center items-center gap-2 p-2 px-5'>
                            <span >{live_button_value}</span>
                            <Icons value='live' />
                        </button>
                    </a>

                    <Link to={`/window-view-project-detail/${project_id}`}>
                        <button className='hidden not-only:md border-1 rounded-full md:flex hover:cursor-pointer  justify-center items-center gap-2 p-2 px-5'>
                            <span>Details</span>
                            {/* <IconsForProject value='right' /> */}
                            <Icons value='right' />
                        </button>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Project_card_window