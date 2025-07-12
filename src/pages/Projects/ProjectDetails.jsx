import React from 'react'
import careerlift from '/src/assets/careerlift.png'
import chichat from '/src/assets/chichat.png';
import calculator from '/src/assets/calculator.png';
import buyme from '/src/assets/buyme.png';
import Project_List from '../../components/Project_List';

function ProjectDetails() {

    return (
        <>
            <div className='md:hidden flex flex-col justify-center items-center gap-5 py-4'>
                <div>
                    <Project_List project_heading={"ChiChat Web App"} project_image={chichat} codebase_link={"https://github.com/shiba-murmu/ChiChat"} live_link={"https://chi-chat-ivory.vercel.app/"} project_id={"chichat"} live_button_value={"Live"} />
                </div>
                <div>
                    <Project_List project_heading={"Career Lift"} project_image={careerlift} codebase_link={"https://github.com/shiba-murmu/Career-Lift"} live_link={"https://career-lift.vercel.app/"} project_id={"careerlift"} live_button_value={"Live"} />
                </div>
                <div>
                    <Project_List project_heading={"BuyMe"} project_image={buyme} codebase_link={"https://github.com/shiba-murmu/BuyMe"} live_link={"#"} project_id={"buyme"} live_button_value={'Not deployed'}/>
                </div>
                <div>
                    <Project_List project_heading={"Simple calculator (beginner level)"} project_image={calculator} codebase_link={"https://github.com/shiba-murmu/portfolio"} live_link={"https://shiba-murmu.vercel.app/"} project_id={"calculator"} live_button_value={"Live"} />
                </div>
            </div>
            <div className='hidden  md:flex flex-col justify-center items-center gap-5 py-4 h-screen'>
                <span className='text-4xl md:text-6xl introName'>Page not found !</span>
            </div>
        </>
    )
}

export default ProjectDetails