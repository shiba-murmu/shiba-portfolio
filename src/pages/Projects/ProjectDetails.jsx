import React from 'react'
import { Link } from 'react-router-dom'
import Icons from '../../components/Icons'
import careerlift from '/src/assets/careerlift.png'
import chichat from '/src/assets/chichat.png';
import calculator from '/src/assets/calculator.png';
import buyme from '/src/assets/buyme.png';

function ProjectDetailsFormat({ project_heading, project_image, project_text, technologies_used, project_sub_heading, codebase_link, live_link }) {
    return (
        <>
            <div className='pb-5'>
                <div className='flex justify-center items-center py-2'>
                    <span className='bold-font text-2xl '>
                        {project_heading}
                    </span>
                </div>

                <div className='flex justify-center items-center'>
                    <img src={project_image} alt="project image" className='w-80 h-40 md:w-[35rem] md:h-[20rem] shadow-md rounded-2xl border md:border-1  border-gray-700 ' />
                </div>

                <div className='flex justify-center items-center mt-3'>
                    <span className='bold-font text-lg '>{project_sub_heading}</span>
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
                        <button className='border-1 hover:cursor-pointer rounded-full flex  justify-center items-center gap-2 p-2 px-5'>
                            <span className='bold-font'>Codebase</span>
                            <Icons value='codebase' />
                        </button>
                    </a>
                    <a href={live_link} className=''>
                        <button className='border-1 hover:cursor-pointer  rounded-full flex  justify-center items-center gap-2 p-2 px-5'>
                            <span className='bold-font'>Live</span>
                            <Icons value='live' />
                        </button>
                    </a>

                    <Link to={'/window-view-project-detail/careerlift'}>
                        <button className='hidden not-only:md border-1 rounded-full md:flex hover:cursor-pointer  justify-center items-center gap-2 p-2 px-5'>
                            <span className='bold-font'>Details</span>
                            <Icons value='right' />
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
function Project_List({ project_heading, project_image, codebase_link, live_link, project_id }) {
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
                        <span>Live</span>
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

function ProjectDetails() {

    const technologyUsed = [
        {
            name: "React.js",
            description: "Used for building a dynamic, component-based frontend. Supports real-time updates and smooth user navigation."
        },
        {
            name: "Tailwind CSS",
            description: "Utility-first CSS framework used for responsive and fast UI styling across all devices."
        },
        {
            name: "GSAP (ScrollTrigger)",
            description: "Animation library used to create scroll-based interactive animations in the Explore Career section."
        },
        {
            name: "Material UI",
            description: "Component library for React. Used alongside Tailwind CSS to manage themed components like buttons, cards, and modals."
        },
        {
            name: "Django",
            description: "High-level Python web framework used for building the backend, handling routing, authentication, and database integration."
        },
        {
            name: "JWT (JSON Web Tokens)",
            description: "Used for secure user authentication and maintaining sessions across the frontend and backend."
        },
        {
            name: "Email OTP Verification",
            description: "Security feature added during user registration to verify and validate users via email."
        },
        {
            name: "PostgreSQL",
            description: "Open-source relational database system for storing structured data like user details, job listings, and more."
        },
        {
            name: "Monorepo Structure",
            description: "Project architecture where both frontend and backend are managed in the same repository for streamlined development."
        },
        {
            name: "ChiChat (Real-Time Chat)",
            description: "A chat feature built using React and Django for user interaction and real-time communication within the platform."
        },
    ]
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-5 py-4'>
                <div>
                    <Project_List project_heading={"ChiChat Web App"} project_image={chichat} codebase_link={"https://github.com/shiba-murmu/ChiChat"} live_link={"https://chi-chat-ivory.vercel.app/"} project_id={"chichat"} />
                </div>
                <div>
                    <Project_List project_heading={"Career Lift"} project_image={careerlift} codebase_link={"https://github.com/shiba-murmu/Career-Lift"} live_link={"https://career-lift.vercel.app/"} project_id={"careerlift"} />
                </div>
                <div>
                    <Project_List project_heading={"BuyMe"} project_image={buyme} codebase_link={"https://github.com/shiba-murmu/BuyMe"} live_link={"#"} project_id={"buyme"} />
                </div>
                <div>
                    <Project_List project_heading={"Simple calculator (beginner level)"} project_image={calculator} codebase_link={"https://github.com/shiba-murmu/portfolio"} live_link={"https://shiba-murmu.vercel.app/"} project_id={"calculator"} />
                </div>



            </div>

            {/* <div>
                <ProjectDetailsFormat project_heading={"Career Lift"} project_image={careerlift} project_text={`The Career Lift System is a student-centric web application designed to guide users—especially those who have completed their 10th, 12th, or graduation—toward suitable career paths and job opportunities based on their interests, qualifications, and location. The platform is built using React for the frontend, Django for the backend, and Tailwind CSS for responsive design. It offers stream-wise career options, personalized job suggestions, and nearby educational institution search.
                Secure user authentication is implemented using JWT and Email OTP verification. The app also includes GSAP ScrollTrigger animations for an engaging user interface, and a dark/light theme powered by Tailwind and Material UI. A monorepo structure streamlines development, while a real-time chat feature called ChiChat enhances user interaction. Overall, Career Lift provides a complete and accessible platform for students to explore future paths and connect with opportunities effectively`} project_technology={"Technology used to designed the project."}
                    project_sub_heading={"Educational Platform"} technologies_used={technologyUsed} codebase_link={"https://github.com/shiba-murmu/career-lift-system-project"} live_link={"https://career-lift-system.vercel.app/"} />
            </div> */}
        </>
    )
}

export default ProjectDetails