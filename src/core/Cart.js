import React,{useState,useEffect} from 'react'
import "../styles.css";
import {API} from "../backend";
import Base from "./Base";
import Card from './Card';
//import { getProducts } from './helper/coreapicalls';
import {loadCart} from "./helper/CartHelper"
import Paymentb from './Paymentb';
const Cart = ()=>{

    const [reload, setReload] = useState(false)
    const [products, setProducts] = useState([]);//it will call the products here we load our method fill these values
 
    //load before page load
    useEffect(() => {
        setProducts(loadCart());
    }, [reload]);//forcefully loading things update and then forcefully
    const loadAllProducts = (products)=>{
        return(
        <div>
            <h2>Load all product here</h2>
            {products.map((product,index)=>(
                <Card
                    key= {index}// foe to identify that we are itreating on diff values REACT me imp
                    product= {product}
                    removeFromCart= {true}
                    addtoCart= {false}
                    setReload={setReload}
                    reload={reload}
                />
            ))
        }
        </div>
        );}
    // const loadCheckOut= ()=>{
    //     <div>
    //         <h2>checkout all product here</h2>
    //     </div>
    // }

    return (
        <Base title="Cart Page" description="Ready to checkout"> 
            <div className="row text-center">
                <div className="col-6">{products.length>0 ? loadAllProducts(products):(<h3>No Products in Cart</h3>)} </div>
                <div className="col-6">
                <Paymentb products = {products} setReload={setReload}/> 
                 </div>
            </div>
        </Base>
    );
}
 export default Cart;