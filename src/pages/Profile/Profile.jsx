import React from 'react'
import ProfilePhoto from './ProfilePhoto'
import Name from './Name'
import About from './About'

function ProfilePictureSetting() {
    return (
        <>

            <section>
                <ProfilePhoto />
            </section>
        </>
    )
}


function ProfileNaming() {
    return (
        <>

            <section>
                <Name />
            </section>
        </>
    )
}
function Profile() {
    return (
        <>
            <div>
                <ProfilePictureSetting />
                <ProfileNaming />
                <About />
            </div>
        </>
    )
}

export default Profile