import React from 'react';
import chichat_image from '/src/assets/chichat.png';
import careerlift_image from '/src/assets/careerlift.png';
import calculator_image from '/src/assets/calculator.png';
import Icons from '../../components/Icons';
import buyme_image from '/src/assets/buyme.png';
import { Link } from 'react-router-dom';
import Project_card_window from '../../components/Project_card_window';
// import Icons from '../../components/Icons';

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

    /**
     * 
     * @param {In this function calling the card wraper component to render the same card} val 
     * Here just passing the value to the card wraper component.
     * @returns 
     * 
     * In future if more card to add then just simply call this component and pass the value.
     * 
     *
     */
    const SpecifiProject = (val) => {

        switch (val) {
            case 'chichat':
                return (
                    <>
                        <Project_card_window project_heading={'ChiChat'} project_image={chichat_image} codebase_link={'https://github.com/shiba-murmu/ChiChat'} live_link={'https://chi-chat-ivory.vercel.app/'} project_id={'chichat'} live_button_value={'Live'} />
                    </>
                )
            case 'careerlift':
                return (
                    <>
                        <Project_card_window project_heading={'Career Lift ( full-stack )'} project_image={careerlift_image} codebase_link={'https://github.com/shiba-murmu/career-lift-system-project'} live_link={'https://career-lift-system.vercel.app/'} project_id={'careerlift'} live_button_value={'Live'} />

                    </>
                )
            case 'calculator':
                return (
                    <>
                        <Project_card_window project_heading={'Simple calculator ( beginner level)'} project_image={calculator_image} codebase_link={'https://github.com/shiba-murmu/calculator'} live_link={'https://shiba-murmu.github.io/calculator/'} project_id={'calculator'} live_button_value={'Live'} />
                    </>
                )

            case 'buyme':
                return (
                    <>
                        <Project_card_window project_heading={'Ecommerce website (php)'} project_image={buyme_image} codebase_link={'https://github.com/shiba-murmu/buyme-project'} live_link={'#'} project_id={'buyme'} live_button_value={'Not deployed'} />
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
                    {/* This is the card of the project is only for mobile view and that will be 
                        hidden when the screen size is greater than 768px */}
                    <ProjectSpecific value='chichat' />
                </div>
                        
                <div className='hidden md:flex flex-wrap justify-center items-center gap-5 md:gap-20'>
                    {/* This is the card of the project is for the screen greater then 768px like windows. */}
                    {/* Here just passing the value to the component to render another card conditional based. */}
                    <ProjectSpecific value='chichat' />
                    <ProjectSpecific value='careerlift' />
                    <ProjectSpecific value='calculator' />
                    <ProjectSpecific value='buyme' />
                    {/* If in future more card to add then just simply call this component and pass the value. */}
                </div>
            </div>
        </>
    )
}

export default Project