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
        <div className='pb-5 md:mb-20 md:flex justify-center items-center flex-col'>
                <div className='flex justify-center items-center py-2'>
                    <span className='bold-font text-2xl md:text-6xl  '>
                        {project_heading}
                    </span>
                </div>

                <div className='flex justify-center items-center'>
                    <img src={project_image} alt="project image" className='w-80 h-40 md:w-[50rem] md:h-[27rem] shadow-md rounded-2xl border md:border-1  border-gray-700 ' />
                </div>

                <div className='flex justify-center items-center mt-3'>
                    <span className='bold-font text-xl md:text-3xl md: '>{project_sub_heading}</span>
                </div>
                <div className='md:w-2/3'>
                    <p className=' p-4 text-center'>{project_text}</p>
                </div>

                <div>
                    <div className='flex justify-center items-center'>
                        <span className='bold-font text-xl md:text-3xl border-b-2'>Technologies Used</span>
                    </div>
                    <div className='p-4'>
                        <dl className='md:p-4'>
                            {technologies_used.map((tech, index) => (
                                <div key={index}>
                                    <dt className="font-bold text-md 
                                    md:text-xl md:my-5 pl-4 md:pl-10">{tech.name}</dt>
                                    <dd className="ml-3 md:my-5 pl-4 md:pl-15 ">{tech.description}</dd>
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
                </div>
            </div>
    </>
  )
}

export default ProjectDetail_wraper;