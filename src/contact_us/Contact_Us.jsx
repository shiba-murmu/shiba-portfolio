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
                                <img src={EmailIcon} alt="" className='w-5 h-5' />
                            </div>
                        </div>
                    </>
                )

            case 'instagram':
                return (
                    <>
                        <div>
                            <div className='flex justify-center gap-3 items-center'>
                                {/* <span className='' >Email</span> */}
                                <img src={InstaIcon} alt="" className='w-10 h-10' />
                            </div>
                        </div>

                    </>
                )

            case 'linkedin':
                return (
                    <>
                        <div>
                            <div className='flex justify-center gap-3 items-center'>
                                {/* <span className='' >Email</span> */}
                                <img src={LinkedinIcon} alt="" className='w-5 h-5' />
                            </div>
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