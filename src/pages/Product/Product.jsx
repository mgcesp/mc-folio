import React from "react";
import { useState } from 'react'

// import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

import "./Product.scss"

const Product = () => {

    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] = useState(1);


    const images = [
        "https://images.pexels.com/photos/5762460/pexels-photo-5762460.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/5762462/pexels-photo-5762462.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/5762464/pexels-photo-5762464.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/5762465/pexels-photo-5762465.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
                    <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
                    <img src={images[2]} alt="" onClick={(e) => setSelectedImg(2)} />
                    <img src={images[3]} alt="" onClick={(e) => setSelectedImg(3)} />
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h3>Item name</h3>
                <h2 className="price">$19.99</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, debitis autem eos iste, asperiores saepe a quos minima quasi neque sunt ratione minus accusantium sequi ab! Corrupti aliquid totam rerum!</p>
                <div className="quantity">
                    <button onClick={(e) => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
                    {quantity}
                    <button onClick={(e) => setQuantity((prev) => prev + 1)}>+</button>
                </div>
                <button className="add">
                    <AddShoppingCartIcon /> Add to cart
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon /> Add to wishlist
                    </div>
                    <div className="item">
                        <BalanceIcon />Add to compare
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div >
    )
}

export default Product