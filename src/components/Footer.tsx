import React from 'react'

const Footer = () => {
    return (

    <footer className="flex flex-col justify-center items-center text-center text-white">
    
        <div className="container pt-4 ">
            <section className="mb-2 flex flex-row justify-center items-center">
                <a
                className="btn btn-link btn-floating btn-lg"
                href="https://www.linkedin.com/in/ylerox/"
                target="_blank" rel="noopener noreferrer"
                role="button" 
                ><img src='/linkedin.png'/></a>
            
                <a
                    className="btn btn-link btn-floating btn-lg"
                    href="https://github.com/roxyle"
                    target="_blank" rel="noopener noreferrer"
                    role="button"
                    ><img src='/github.png'/></a>
            </section>
        </div>

        <div className="text-center">
            Remote Worker based in: Bologna (40138) - Italy
            
        </div>
    </footer>
    )
}

export default Footer