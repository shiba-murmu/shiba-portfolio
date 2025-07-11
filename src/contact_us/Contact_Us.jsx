import React from 'react'
import EmailIcon from '/src/assets/email.png'
import InstaIcon from '/src/assets/instagram.png'
import LinkedinIcon from '/src/assets/linked.png'
import Icons from '../components/Icons'
import { useState } from 'react'
import './background.css';
function ContactMethod({ value }) {
    const [isPopup, setPopup] = useState(false);

    const PopupOpen = () => setPopup(true);
    const PopupClose = () => setPopup(false);

    const ContactMethodIcon = (val) => {
        switch (val) {
            case 'email':
                return (
                    <>
                        <div>
                            <button onClick={PopupOpen}>
                                <div className='flex justify-center gap-3 items-center'>
                                    {/* <span className='' >Email</span> */}
                                    <img src={EmailIcon} alt="" className='w-12 h-12' />
                                </div>
                            </button>
                        </div>

                        {/* Content to show for the popup */}
                        {
                            isPopup && (
                                // <div className='h-screen w-screen fixed z-50'>
                                    <div className="fixed inset-0 background-design bg-opacity-50 flex items-center justify-center z-50">
                                        <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center relative">
                                            <h2 className="text-lg font-semibold mb-4">This is a popup!</h2>
                                            <p className="mb-4">You clicked the button, and this layer opened.</p>
                                            <button
                                                onClick={PopupClose}
                                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                // </div>
                            )
                        }
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