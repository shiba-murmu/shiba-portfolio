import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
function ScrollTop() {
    // This function will scroll the page to the top , when the routes changed...
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);  // Scroll to top-left corner
    }, [pathname]);

    return null; // No UI needed    
}

export default ScrollTop