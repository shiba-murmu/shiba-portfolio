import React from 'react'
import EmailIcon from '/src/assets/email.png'
import InstaIcon from '/src/assets/instagram.png'
import LinkedinIcon from '/src/assets/linked.png'
import Icons from '../components/Icons'

function ContactMethod({ value }) {

    const ContactMethodIcon = (val) => {
        switch (val) {
            case 'email':
                return (
                    <>
                        <div>
                            <div className='flex justify-center gap-3 items-center'>
                                {/* <span className='' >Email</span> */}
                                <img src={EmailIcon} alt="" className='w-12 h-12' />
                            </div>
                        </div>
                    </>
                )

            case 'instagram':
                return (
                    <>
                        <div>
                            <a href="https://www.instagram.com/shibamrm/">
                                <div className='flex justify-center gap-3 items-center'>
                                    {/* <span className='' >Email</span> */}
                                    <img src={InstaIcon} alt="" className='w-10 h-10' />
                                </div>
                            </a>
                        </div>

                    </>
                )

            case 'linkedin':
                return (
                    <>
                        <div>
                            <a href="https://www.linkedin.com/in/shiba-murmu-664172327/">
                                <div className='flex justify-center gap-3 items-center'>
                                    {/* <span className='' >Email</span> */}
                                    <img src={LinkedinIcon} alt="" className='w-9 h-9' />
                                </div>
                            </a>
                        </div>
                    </>
                )
        }
    }
    return (
        <>
            {ContactMethodIcon(value)}
        </>
    )
}


function Contact_Us() {
    return (
        <>
            <div className='mt-10 pb-10'>
                <div className='flex justify-center items-center gap-4'>
                    <span className='text-xl pl-2 bold-font'>Get in Touch</span>
                    <span>
                        <Icons value='contact' />
                    </span>
                </div>
                <div className='flex mt-5 justify-center flex-wrap gap-3 items-center'>
                    <ContactMethod value='instagram' />
                    <ContactMethod value='email' />
                    <ContactMethod value='linkedin' />
                </div>
            </div>
        </>
    )
}

export default Contact_Us