import React from 'react'
import python_icon from '/src/assets/python.png';


function Skills({value}) {
    const SkillsIcons = (val) => {
        switch (val) {
            case 'python':
                return (
                    <>
                        <div className='flex rounded-full border p-3 justify-evenly items-center w-60'>
                            <div>
                                <span className='text-xl bold-font'>Python</span>
                            </div>
                            <div>
                                <img src={python_icon} alt="python skills" className='w-10 h-10' />
                            </div>
                        </div>
                    </>
                )
        }
    }

    return (
        <>
            {SkillsIcons(value)}
        </>
    )
}

function SkillDetails() {
    return (
        <>
            <div className='mt-10'>
                <div>
                    <section>
                        <span className='text-2xl introName pl-4'>Skills</span>
                    </section>
                    <section className='flex flex-col justify-center items-center py-5 gap-5'>
                        {/* This section is for skills... */}
                        <Skills value='python' />
                    </section>
                </div>
            </div>
        </>
    )
}

export default SkillDetails