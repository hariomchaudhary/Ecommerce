//import React from 'react';
import { API } from '../../backend';
export const createOrder = (userId,token, orderData)=> {
    return fetch(`${API}/order/create/${userId}`,{
        method:"POST",
        headers:{
        Accept :"application/json",
        "Content-Type":"application.json",
        Authorixation:`Bearer ${token}`
        },
        body:JSON.stringify({order:orderData})
    }).then(response=>{
        return response.json();
    }).catch(err=>console.log(err));
};
//export default createOrder;
