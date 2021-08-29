import React,{useState,useEffect} from 'react'
import "../styles.css";
import {API} from "../backend";
import Base from "./Base";
import Card from './Card';
import { getProducts } from './helper/coreapicalls';

const Home = ()=>{

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    //we have to create a method to load all the products
    const loadAllProduct = ()=>{
        getProducts().then(data=>{
            if(data.error){
                setError(data.error);
            }else{
                setProducts(data);
            }
        });
    };

    //useEfeect for perloading
    useEffect(() => {
         loadAllProduct()

    }, [])

    return (
        <Base title="HomePage"> 
            <div className="row text-center">
                <h1 className="text-white text-center">All tshirt products</h1>
                 <div className="row">
                    {products.map((product,index)=>{
                       // console.log("hey");
                        return(
                            <div key={index} className="col-4 mb-4">
                                <Card product={product}/>
                            </div>
                        );
                    })}
                </div> 
            </div>
        </Base>
    );
}
 export default Home;