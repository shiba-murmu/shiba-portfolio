import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetail_wraper from '../../components/ProjectDetail_wraper';
import chichat from '/src/assets/chichat.png'
import careerlift from '/src/assets/careerlift.png'
import calculator from '/src/assets/calculator.png'
import buyme from '/src/assets/buyme.png'


function Window_view_project_details() {

    const { id } = useParams();

    /**
    * In this function, we're defining two arrays of objects that represent the technologies used for the Career Lift and ChiChat projects, respectively.
    * In future if more card to add then just simply call this component and pass the value. And describe their used technologies as arrays.
    */
    const technologyUsedForCareerLift = [
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
            name: "PostgreSQL",
            description: "Open-source relational database system for storing structured data like user details, job listings, and more."
        },
        {
            name: "Monorepo Structure",
            description: "Project architecture where both frontend and backend are managed in the same repository for streamlined development."
        },
    ]

    const technologyUsedForChiChat = [
        {
            name: 'React.js',
            description: 'For building a single-page, component-based user interface.',
        },
        {
            name: 'Tailwind CSS',
            description: 'Utility-first CSS framework for responsive and fast UI styling across all devices.',
        },
        {
            name: 'React Router',
            description: 'Library for declarative routing in React applications.',
        },
        {
            name: 'Axios',
            description: 'Promise-based HTTP client for making HTTP requests in React applications.',
        },
        {
            name: 'React Toastify (or Custom Toasts)',
            description: 'Library for creating customizable toast notifications in React applications.',
        },
        {
            name: 'Django',
            description: 'High-level Python web framework for building the backend, handling routing, authentication, and database integration.',
        },
        {
            name: 'JWT (JSON Web Tokens)',
            description: 'Used for secure user authentication and maintaining sessions across the frontend and backend.',
        },
        {
            name: 'Django REST Framework (DRF)',
            description: 'Framework for building APIs in Django.',
        },
        {
            name: 'PostgreSQL',
            description: 'Open-source relational database system for storing structured data like user details, job listings, and more.',
        },
        {
            name: 'Django Channels (planned)',
            description: 'A framework for building real-time applications using Django and WebSockets.',
        },
        {
            name: 'WebSockets (planned)',
            description: 'A protocol for real-time communication between clients and a server.',
        },
        {
            name: 'Monorepo Structure',
            description: 'Project architecture where both frontend and backend are managed in the same repository for streamlined development.',
        }
    ]



    const ConditionalRendering = (val) => {
        /**
         * In this function, we're using a switch statement to dynamically render different project details based on the value of the 'id' variable.
         * 
         * If in future anyone wants to add a new project, they can add a new case in the switch statement and add the new project details.
         * Pass the values to the ProjectDetail_wraper component.
         */
        switch (val) {
            case 'chichat':
                return (
                    <>
                        <ProjectDetail_wraper project_heading={'ChiChat'} project_image={chichat} project_sub_heading={"Real-time Chat"} project_text={`ChiChat is a real-time chat web application designed to provide users with a smooth and responsive messaging experience across all devices. Built using React.js for the frontend and Django for the backend, ChiChat leverages a modern tech stack to deliver high performance and interactivity. The application features a clean and user-friendly interface styled with Tailwind CSS, ensuring mobile responsiveness and cross-platform compatibility. Secure user authentication is handled using JWT (JSON Web Tokens), allowing users to register, log in, and access protected routes securely. ChiChat includes message sending and receiving functionality with a real-time-like experience, and efforts are underway to integrate technologies such as WebSockets or Django Channels for true real-time communication.

                        The UI includes features such as auto-scrolling to the latest message, responsive input boxes, and user profile picture support. While designing for mobile, special attention is being given to resolving layout shifts and keyboard behavior when typing. The project is structured to be scalable, with the potential to expand into group chats, media sharing, or smart message suggestions in the future. Overall, ChiChat is a promising and practical chat solution that demonstrates strong frontend-backend integration, real-time system design, and responsive UI development skills.`} project_technology={"Technology used to designed the project."} technologies_used={technologyUsedForChiChat} codebase_link={"https://github.com/shiba-murmu/new-version-chichat"} live_link={"https://new-version-chichat.vercel.app/"} live_button_value={"Developing"} />
                    </>
                )

            case 'careerlift':
                return (
                    <>
                        <ProjectDetail_wraper project_heading={"Career Lift"}  project_image={careerlift} project_text={`The Career Lift System is a student-centric web application designed to guide users—especially those who have completed their 10th, 12th, or graduation—toward suitable career paths and job opportunities based on their interests, qualifications, and location. The platform is built using React for the frontend, Django for the backend, and Tailwind CSS for responsive design. It offers stream-wise career options, personalized job suggestions, and nearby educational institution search.
                        Secure user authentication is implemented using JWT and Email OTP verification. The app also includes GSAP ScrollTrigger animations for an engaging user interface, and a dark/light theme powered by Tailwind and Material UI. A monorepo structure streamlines development, while a real-time chat feature called ChiChat enhances user interaction. Overall, Career Lift provides a complete and accessible platform for students to explore future paths and connect with opportunities effectively`} project_technology={"Technology used to designed the project."}
                            project_sub_heading={"Educational Platform"} technologies_used={technologyUsedForCareerLift} codebase_link={"https://github.com/shiba-murmu/career-lift-system-project"} live_link={"https://career-lift-system.vercel.app/"} live_button_value={"Live"} />

                    </>
                )
            case 'calculator':
                return (
                    <>
                        <div className='text-2xl flex justify-center items-center h-screen'>
                            Details not found !
                        </div>
                    </>
                )
            case 'buyme':
                return (
                    <>
                        <div className='text-2xl flex justify-center items-center h-screen'>
                            Details not found !
                        </div>
                    </>
                )
            default:
                return (
                    <>

                    </>
                )
        }
    }
    
    return (
        <>
            {ConditionalRendering(id)}
        </>
    )
}

export default Window_view_project_details;