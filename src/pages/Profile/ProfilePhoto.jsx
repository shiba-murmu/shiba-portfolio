import React from 'react'
import profilePicture from '/src/assets/profile_picture.png'; // works fine
function ProfilePhoto() {
  return (
    <>
        <div>
            {/* Main container */}
            <div className=' bg-white flex justify-center items-center'>
                {/* sub-container */}
                {/* mask-b-from-10% mask-b-to-90%   For the mask the image */}
                <img src={profilePicture} alt="Profile image" className='h-60   rounded-full'/>
            </div>
        </div>
    </>
  )
}

export default ProfilePhoto