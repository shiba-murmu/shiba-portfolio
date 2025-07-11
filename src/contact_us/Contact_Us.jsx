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
                                        <div className='mb-3'>
                                            <span className='text-2xl bold-font'>Contact Us</span>
                                        </div>
                                        <form action="">
                                            <div className="mb-4">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    placeholder='Name'
                                                    className="w-full p-2 border border-gray-300 rounded"
                                                />
                                            </div>
                                            <div className="mb-4">

                                                <input
                                                    type="email"
                                                    id="email"
                                                    placeholder='Email address'
                                                    className="w-full p-2 border border-gray-300 rounded"
                                                />
                                            </div>
                                            <div className="mb-4">

                                                <textarea
                                                    id="message"
                                                    className="w-full h-50 p-2 border border-gray-300 rounded"
                                                ></textarea>
                                            </div>
                                            <div className='flex justify-center items-center gap-4'>

                                                <button
                                                    type="submit"
                                                    className="px-4 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                                                >
                                                    Get in Touch
                                                </button>
                                                <button
                                                    onClick={PopupClose}
                                                    className="px-4 py-1 bg-gray-500 text-white rounded-full hover:bg-red-600 transition"
                                                >
                                                    Close
                                                </button>
                                            </div>
                                        </form>
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