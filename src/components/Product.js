import React from "react";
import { Link } from "react-router-dom";
import logo from "./Images/logo_s.jpg";

export default function Product({ product }) {
  const stringify = JSON.stringify(product.get("prod_img"));
  const imageURL = stringify.split('url":"').pop().slice(0, -2);

  return (
    <div className="col-md-2 m-5 card p-2">
      <div>
        <Link
          to="/pages/productDescription"
          state={{
            productname: product.get("product_name"),
            sellername: product.get("product_uploader"),
            imgURL: imageURL,}}>
          <img src={imageURL} className="img-fluid" />
          <p>Name: {product.get("product_name")}</p>
          <p>Description: {product.get("product_des")}</p>
          <p>Tags: {product.get("product_tag")}</p>
        </Link>
      </div>
    </div>
  );
}
