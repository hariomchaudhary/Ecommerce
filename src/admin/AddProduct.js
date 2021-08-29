import React,{useState,useEffect} from 'react'
import Base from "../core/Base";
import {Link} from "react-router-dom";
import { createProduct, getCategories } from './helper/adminapicall';
import { isAuthenticated } from '../auth/helper';

const AddProduct = ()=>{

    const {user,token}= isAuthenticated();
    const [values, setValues] = useState({
        name:"",
        description:"",
        price:"",
        stock:"",
        photo:"",
        categories:"",
        category:"",
        loading:false,
        error:"",
        createdProduct:"",
        getaRedirect: false,
        formData:"" //itsnot a regular html form we have to prepare all the data to convey all the information to backend
        //form data also preload before
    });
    
    const{name,description,price,stock,photo,categories,category,loading,error,createdProduct,getaRedirect,formData} = values;

     //preloading some data
     const preload = ()=>{
         getCategories().then(data=>{
            // console.log(data);
             if(data.error){
                 setValues({...values, error : data.error});
             }else{
                 setValues({...values,categories:data,formData:new FormData()});
                // console.log("CAT: ",categories);
             }
         });
     }  

     useEffect(() => {
        preload();
     }, []);


     const successMessage =()=>(
         <div className="alert alert-success mt-3" style={{display :createdProduct ? "": "none"}}>
          <h4>{createdProduct} created successfully</h4>
         </div>
     );
     const warningMessage = () => {
        if (error) {
          return <h4 className="text-warning">Failed to create Product</h4>;
        }
      };
     //back button
     const goBack = () => (
        <div className="mt-5">
          <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">
            Admin Home
          </Link>
        </div>
      );
     
      const handleChange = name => event =>{
          //
          const value = name === "photo" ? event.target.files[0] : event.target.value;
          formData.set(name,value);// all the things changing accordingly 
          setValues({...values,[name]:value});
      }
      const onSubmit = (event)=>{
          //
          event.preventDefault();
          setValues({...values,error:"",loading:true});
          createProduct(user._id,token,formData) // user id  and token is used for authentication in backend and formData has all the innformation

          .then(data=>{
              if(data.error){
                  setValues({...values,error:data.error});
              }else{
                  setValues({
                      ...values,
                      name:"",
                      description:"",
                      stock:"",
                      price:"",
                      photo:"",
                      categories:"",
                      category:"",
                      loading:false,
                      error:"",
                      createdProduct:data.name,
                      getaRedirect: true,
                      formData:""
                  })
              }
          })
      }
            
      const createProductForm = () => (
        <form >
          <span>Post photo</span>
          <div className="form-group">
            <label className="btn btn-block btn-success">
              <input
                onChange={handleChange("photo")}
                type="file"
                name="photo"
                accept="image"
                placeholder="choose a file"
              />
            </label>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("name")}
              name="photo"
              className="form-control"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={handleChange("description")}
              name="photo"
              className="form-control"
              placeholder="Description"
              value={description}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("price")}
              type="number"
              className="form-control"
              placeholder="Price"
              value={price}
            />
          </div>
          <div className="form-group">
            <select
              onChange={handleChange("category")}
              className="form-control"
              placeholder="Category"
            >
              <option>Select</option>
              {categories && categories.map((cate,index)=>(
                <option key={index} value={cate._id}>{cate.name}</option>
              ))
              }
            </select>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("stock")}
              type="number"
              className="form-control"
              placeholder="Quantity"
              value={stock}
            />
          </div>
          
          <button type="submit" onClick={onSubmit} className="btn btn-outline-success mt-3">
            Create Product
          </button>
        </form>
      );

    return (
       <Base title="Create a Product" description="Welcome to product creation page">
        <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
         {createProductForm()}
         {goBack()}
         {successMessage()}
         {warningMessage()}
        </div>
      </div>
       </Base>
    )
}

export default AddProduct;
