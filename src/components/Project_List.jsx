import React from "react"
import Icons from "./Icons"
import { Link } from "react-router-dom";
function Project_List({ project_heading, project_image, codebase_link, live_link, project_id , live_button_value}) {
    /**
     * This function shows the list of project in mobile views.
     */
    return (
        <>
            <div className='flex justify-center items-center'>
                {/* For heading purpose  */}
                <span className='text-lg md:text-3xl bold-font'>{project_heading}</span>
            </div>
            <div className='flex justify-center items-center mt-2'>
                {/* For image purpose */}
                <img src={project_image} alt="project image" className='w-80 h-40 md:w-[35rem] md:h-[20rem] shadow-md rounded-2xl border md:border-1  border-gray-700' />
            </div>
            <div className='flex justify-evenly md:justify-center md:gap-10 mt-5'>
                {/* For buttons purpose */}
                <a href={codebase_link} >
                    <button className='border-1 rounded-full flex hover:cursor-pointer  justify-center items-center gap-2 p-1 px-5'>
                        <span>Codebase</span>
                        <Icons value='codebase' />
                    </button>
                </a>

                <a href={live_link}>
                    <button className='border-1 rounded-full flex hover:cursor-pointer  justify-center items-center gap-2 p-1 px-5'>
                        <span>{live_button_value}</span>
                        <Icons value='live' />
                    </button>
                </a>


            </div>
            <div className='flex justify-center items-center my-2'>
                <Link to={`/mobile-view-project-detail/${project_id}`}>
                    <button className='border-1 rounded-full flex hover:cursor-pointer  justify-center items-center gap-2 p-1 px-5'>
                        <span>Details</span>
                        <Icons value='right' />
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Project_List;