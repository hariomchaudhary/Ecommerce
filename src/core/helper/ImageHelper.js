import React from 'react'
import { API } from '../../backend';

const ImageHelper  = ({product}) => {
     const imgurl = product ? `${API}/product/photo/${product._id}`: `https://images.pexels.com/photos/5419279/pexels-photo-5419279.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
    return (
        <div className="rounded border border-success p-2">
            <img
              src={imgurl}
              alt="photo"
              style={{ maxHeight: "100%", maxWidth: "100%" }}
              className="mb-3 rounded"
            />
          </div>
    )
}

export default ImageHelper;
