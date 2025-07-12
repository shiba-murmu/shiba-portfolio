import React from 'react'

import careerlift from '/src/assets/careerlift.png'

function ProjectDetailsFormat({ project_heading, project_image, project_text, project_technology }) {
    return (
        <>
            <div>
                <div className='flex justify-center items-center py-2'>
                    <span className='bold-font text-2xl '>
                        {project_heading}
                    </span>
                </div>

                <div className='flex justify-center items-center'>
                    <img src={project_image} alt="project image" className='w-80 h-40 md:w-[35rem] md:h-[20rem] shadow-md rounded-2xl border md:border-1  border-gray-700' />
                </div>

                <div>
                    {project_text}
                </div>

                <div>
                    {project_technology}
                </div>

            </div>
        </>
    )
}


function ProjectDetails() {
    return (
        <>
            <div>
                <ProjectDetailsFormat project_heading={"Career Lift"} project_image={careerlift} project_text={"Some text about the project"} project_technology={"Technology used to designed the project."} />
            </div>
        </>
    )
}

export default ProjectDetails