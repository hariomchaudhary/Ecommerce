import React from 'react'
import { isAuthenticated } from '../auth/helper';
import Base from "../core/Base";
import {Link} from "react-router-dom";



const AdminDashBoard = ()=> {

  const {user:{name,email,role}} = isAuthenticated();

  const adminLeftSide = ()=>{
    return(
      <div className= "card">
          <h4 className="card-header bg-dark text-white"> Admin Navigation</h4>
          <ul className="list-group">
            <li className="list-group-item">
                <Link className="nav-link  text-success" to="/admin/create/category">Create Categories</Link>
            </li>
            <li className="list-group-item">
                <Link className="nav-link  text-success" to="/admin/categories">Manage Categories</Link>
            </li>
            <li className="list-group-item">
                <Link className="nav-link text-success" to="/admin/create/product"> Create Products </Link>
            </li>
            <li className="list-group-item">
                <Link className="nav-link  text-success" to="/admin/products">Mangae products</Link>
            </li>
            <li className="list-group-item">
                <Link className="nav-link  text-success" to="/admin/orders">Mangae orders</Link>
            </li>
          </ul>
      </div>
  
    );
  };
  
  const adminRightSide =()=>{
    return(
      <div className="card mb-4">
          <h4 className="card-header">Admin Information</h4>
          <ul className="list-group">
          <li className="list-group-item">
              <span className="label label-success mr-2 text-success">Name:</span> {name}
              
            </li> 
            <li className="list-group-item">
              <span  className="label label-info mr-2 text-success">email:</span> {email}
            </li>
            <li className="list-group-item">
              <span className="label-danger text-danger" >Admin Privilage</span>
            </li>
          </ul>

      </div>

    );
  }
   

    return (
        <Base 
          title="Welcome to Admin area"
          description="manage all your  products here "
          className=" container bg-success padding-4 ">
        <div className="row">
           <div className="col-3">
                {adminLeftSide()}
           </div>

           <div className="col-9">
               {adminRightSide()}
           </div>
        </div>
          
           
        </Base>
    );
};

export default AdminDashBoard;
