import React,{useEffect,useState} from 'react'
import { Redirect } from 'react-router-dom';
import ImageHelper from './helper/ImageHelper';
import {addItemToCart, removeItemFromCart} from "./helper/CartHelper"
const Card = ({product,
              addtoCart=true,
              removeFromCart=false ,
              setReload = f=>f,// function(f){return f},
              reload= undefined}) => {
  

   const cardTitle = product ? product.name : "Photo from pexels"
   const cardDescription = product ? product.description : "default description"
   const cardPrice = product ? product.price : "Default"

   
   const [redirect, setRedirect] = useState(false);
   const [count, setCount] = useState(product.count);

   const addToCart =()=>{
     addItemToCart(product,  ()=> setRedirect(true))
   }

   const getaRedirect =(redirect)=>{
     if(redirect){
       return( <Redirect to= "/cart"/>);
     }
   }

    const showAddToCart = addtoCart=>{
      return(
          addtoCart && (
            <div className="col-12">
            
            <button
          onClick={addToCart}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
          </div>
          )
      );
    }

    const showRemoveFromCart = removeFromCart=>{
      return(
        removeFromCart &&(
          <div className="col-12">
              <button
                onClick={()=>{removeItemFromCart(product._id)
                  {setReload(!reload)};
                  }}
                className="btn btn-block btn-outline-danger mt-2 mb-2"
              >
                Remove from cart
              </button>
            </div>
        )
      );
    }

    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{cardTitle}</div>
        <div className="card-body">
          {getaRedirect(redirect)}
          <ImageHelper product={product}/>
          <p className="lead bg-success font-weight-normal text-wrap">
            {cardDescription}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">$ {cardPrice}</p>
          <div className="row">
                 {showAddToCart(addtoCart)}
                 {showRemoveFromCart(removeFromCart)}
          </div>
        </div>
      </div>
    );
  };
export default Card;
