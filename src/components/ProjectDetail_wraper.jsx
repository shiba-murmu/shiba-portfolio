import React from 'react'
import { Link } from 'react-router-dom'
import Icons from './Icons'
function ProjectDetail_wraper({ project_heading, project_image, project_text, technologies_used, project_sub_heading , codebase_link , live_link , live_button_value}) {
    /**
     * This function is the wrapper for the project details
     * 
     * project_heading : heading of the project
     * project_image : image of the project
     * project_text : text of the project
     * technologies_used : technologies used in the project
     * project_sub_heading : sub heading of the project
     * codebase_link : link to the codebase of the project
     * live_link : link to the live of the project
     */
  return (
    <>
        <div className='pb-5'>
                <div className='flex justify-center items-center py-2'>
                    <span className='bold-font text-2xl md:text-6xl  '>
                        {project_heading}
                    </span>
                </div>

                <div className='flex justify-center items-center'>
                    <img src={project_image} alt="project image" className='w-80 h-40 md:w-[50rem] md:h-[27rem] shadow-md rounded-2xl border md:border-1  border-gray-700 ' />
                </div>

                <div className='flex justify-center items-center mt-3'>
                    <span className='bold-font text-lg md:text-xl '>{project_sub_heading}</span>
                </div>
                <div>
                    <p className=' p-4 text-center'>{project_text}</p>
                </div>

                <div>
                    <div className='flex justify-center items-center'>
                        <span className='bold-font text-lg border-b-2'>Technologies Used</span>
                    </div>
                    <div className='p-4'>
                        <dl>
                            {technologies_used.map((tech, index) => (
                                <div key={index}>
                                    <dt className="font-bold text-lg text-blue-600">{tech.name}</dt>
                                    <dd className="ml-4 text-gray-700">{tech.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
                <div className='flex justify-evenly md:justify-center md:gap-10 mt-5'>
                    {/* For buttons purpose */}
                    <a href={codebase_link} >
                        <button className='border-1 hover:cursor-pointer rounded-full flex  justify-center items-center gap-2 p-1 px-5'>
                            <span className=''>Codebase</span>
                            <Icons value='codebase' />
                        </button>
                    </a>
                    <a href={live_link} className=''>
                        <button className='border-1 hover:cursor-pointer  rounded-full flex  justify-center items-center gap-2 p-1 px-5'>
                            <span className=''>{live_button_value}</span>
                            <Icons value='live' />
                        </button>
                    </a>

                    {/* <Link to={'/window-view-project-detail/careerlift'}>
                        <button className='hidden not-only:md border-1 rounded-full md:flex hover:cursor-pointer  justify-center items-center gap-2 p-2 px-5'>
                            <span className='bold-font'>Details</span>
                            <Icons value='right' />
                        </button>
                    </Link> */}
                </div>
            </div>
    </>
  )
}

export default ProjectDetail_wraper;