import React from 'react'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'


function PageContent() {
    return (
        <>
            {/* Page content */}
            <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
                <Projects />
                <About />
                <Contact />
            </div>
        </>

    )
}

export default PageContent