import React from 'react'

const Footer = () => {
    return (

    <footer className="flex flex-col text-center text-white background-color: #f1f1f1;">
    
        <div className="container pt-4">
            <section className="mb-4 flex flex-row justify-center items-center">
                <a
                className="btn btn-link btn-floating btn-lg m-1"
                href="https://www.linkedin.com/in/ylerox/"
                target="_blank" rel="noopener noreferrer"
                role="button" 
                ><img src='/linkedin.png'/></a>
            
                <a
                    className="btn btn-link btn-floating btn-lg m-1"
                    href="https://github.com/roxyle"
                    target="_blank" rel="noopener noreferrer"
                    role="button"
                    ><img src='/github.png'/></a>
            </section>
        </div>

        <div className="text-center text-dark p-3 background-color: rgba(0, 0, 0, 0.2);">
            Remote Worker based in: Bologna - Italy
            
        </div>
    </footer>
    )
}

export default Footer