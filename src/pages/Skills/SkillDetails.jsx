import React from 'react'
import python_icon from '/src/assets/python.png';
import javascript_icon from '/src/assets/javascript.png';
import react_icon from '/src/assets/react.png';
import Icons from '../../components/Icons';
import Git from '/src/assets/Git.png';

function Skills({ value }) {
    const SkillsIcons = (val) => {
        switch (val) {
            case 'python':
                return (
                    <>
                        <div className='flex rounded-full shadow-md md:shadow-none  hover:cursor-pointer p-3 justify-evenly items-center animate-pulse hover:animate-none md:animate-none'>
                            <div>
                                <img src={python_icon} alt="python skills" className='w-9 h-9 md:w-30 md:h-30' />
                            </div>
                        </div>
                    </>
                )

            case 'django':
                return (
                    <>
                        <div className='flex rounded-full shadow-md md:shadow-none p-2 hover:cursor-pointer justify-evenly items-center animate-pulse hover:animate-none md:animate-none'>
                            <div>
                                <Icons value='django' />
                            </div>
                        </div>
                    </>
                )

            case 'react':
                return (
                    <>
                        <div className='flex rounded-full md:shadow-none shadow-md  p-3 hover:cursor-pointer justify-evenly items-center animate-pulse hover:animate-none md:animate-none'>
                            <div>
                                <img src={react_icon} alt="react skills" className='w-9 h-9 md:w-30 md:h-30' />
                            </div>
                        </div>
                    </>
                )

            case 'javascript':
                return (
                    <>
                        <div className='flex rounded-full shadow-md md:shadow-none hover:cursor-pointer p-3 justify-evenly items-center animate-pulse hover:animate-none md:animate-none'>
                            <div>
                                <img src={javascript_icon} alt="javascript skills" className='w-10 h-10 md:w-30 md:h-30' />
                            </div>
                        </div>
                    </>
                )
            case 'tailwind':
                return (
                    <>
                        <div className='flex rounded-full shadow-md  md:shadow-none hover:cursor-pointer p-3 justify-evenly items-center hover:animate-none md:animate-none'>
                            <div>
                                <Icons value='tailwind' />
                            </div>
                        </div>
                    </>
                )

            case 'Git':
                return (
                    <>
                        <div className='flex rounded-full shadow-md md:shadow-none hover:cursor-pointer p-3 justify-evenly items-center animate-pulse hover:animate-none md:animate-none'>
                            <div>
                                <img src={Git} alt="Git skills" className='w-10 h-10 md:w-30 md:h-30' />
                            </div>
                        </div>
                    </>
                )
            default:
                return null
        }
    }

    return (
        <>
            <div className='md:hidden'>
                {SkillsIcons(value)}
            </div>
            <div className='hidden md:block'>
                {SkillsIcons(value)}

            </div>
        </>
    )
}

function SkillDetails() {
    return (
        <>
            <div className='mt-10'>
                <div>
                    <section>
                        <span className='text-xl md:text-4xl md:pl-35 introName pl-2'>Skills</span>
                    </section>
                    <section className='flex flex-wrap justify-center items-center py-5 gap-5'>
                        {/* This section is for skills... */}
                        <Skills value='python' />
                        <Skills value='django' />
                        <Skills value='react' />
                        <Skills value='javascript' />
                        <Skills value='tailwind' />
                        <Skills value='Git' />
                    </section>
                </div>
            </div>
        </>
    )
}

export default SkillDetails