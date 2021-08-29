import React from 'react'
import Menu from "./Menu"

const Base = ({
        title ="My title",
        description = "My description",
        className = "bg-dark text-center text-white p-4",
        children
})=> {
    return (
        <div>
        <Menu/>
            <div className= "container-fluid ">
                <div className= "jumbotorn bg-dark text-white text-center">
                    <h2 className="display-4">{title}</h2>
                    <p className="lead">{description}</p>
                </div>
                 <p className={className}> {children}</p>
            </div>
           <footer className= "footer bg-dark mt-auto">
               <div className="container-fluid bg-success text-white text-center">
               <p> If You have any question feel free to reach out</p>
                   <button className="btn btn-warning ">Contact us </button>
               </div> 
               <div className="container">
                <span className="text-muted">
                    An amazing place to learn <span className="text-white">MERN</span>.
                </span>

               </div>

           </footer> 
        </div>
    )
}

export default Base; 
