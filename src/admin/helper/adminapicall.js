// import { API } from "../../backend";

//  export const  createCategory = (userId,token,category) =>{
// return fetch(`${API}/category/create/${userId}`,{
//     method:"POST",
//     header:{
//         Accept: "application/json",
//         "Content-Type" : "application/json",
//         Authorization : `Bearer ${token}`
//     },
//     body: JSON.stringify(category)
// })
// .then(response =>{
//   return  response.json();
// })
// .catch(err=>console.log(err))
// };
// //export default createCategory;

import { API } from "../../backend";

export const createCategory = (userId, token, category) => {
  return fetch(`${API}/category/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(category)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//get all categories //READ
export const getCategories = ()=>{
  return fetch(`${API}/categories`,{
    method:"GET"
  }).then(response=>{
    return response.json();
  }).catch(err=>console.log(err));
};

//productcalls 
//CREATE
export const createProduct = (userId,token,product) => {
  return fetch(`${API}/product/create/${userId}`,{
    method:"POST",
    headers:{
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body:product //we don't to covert it  
  })
  .then(response =>{
    return response.json();
  })
  .catch(err=>(console.log(err)))

}

//get all products //READ

// export const getProducts = ()=>{
//   return fetch(`${API}/products`,{
//     method:"GET"
//   }).then(response=>{
//     return response.json();
//   }).catch(err=>console.log(err));
// };


//delete A product
export const getProducts = () => {
  return fetch(`${API}/products`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const deleteProduct = (productId,userId,token) => {
  return fetch(`${API}/product/${productId}/${userId}`,{
    method:"DELETE",
    headers:{
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(response =>{
    return response.json();
  })
  .catch(err=>(console.log(err)))

}

//get A product
export const getProduct = productId=>{
  return fetch(`${API}/product/${productId}`,{
    method:"GET"
  })
  .then(response=>{
    return response.json;
  })
  .catch(err=>console.log(err));
}

//update a product
export const updateProduct = (productId,userId,token,product) => {
  return fetch(`${API}/product/${productId}/${userId}`,{
    method:"PUT",
    headers:{
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body:product // this is the new product information which replaced the infornmation of product which has this  productID
  })
  .then(response =>{
    return response.json();
  })
  .catch(err=>(console.log(err)))

}