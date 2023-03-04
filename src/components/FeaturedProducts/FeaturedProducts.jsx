import React from 'react'

import Card from '../../components/Card/Card'

import "./FeaturedProducts.scss"

const FeaturedProducts = ({ type }) => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/5762463/pexels-photo-5762463.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/5762457/pexels-photo-5762457.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Skirt",
            isNew: true,
            oldPrice: 21,
            price: 19
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/5762490/pexels-photo-5762490.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/5762487/pexels-photo-5762487.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Flower Print Suit",
            isNew: false,
            oldPrice: 17,
            price: 15
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/5762460/pexels-photo-5762460.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/5762462/pexels-photo-5762462.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Swimsuit",
            isNew: true,
            oldPrice: 15,
            price: 13
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/5762489/pexels-photo-5762489.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/5762485/pexels-photo-5762485.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Flower Print Dress",
            isNew: false,
            oldPrice: 13,
            price: 11
        },

    ];

    return (
        <div className="featured">
            <div className="top">
                <h1>{type} Products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto molestias a delectus laboriosam non voluptate, saepe fugit, repellat quaerat ducimus deleniti magni quis in dolorum eveniet, quod iste officia tempora.</p>
            </div>
            <div className="bottom">
                {data.map(item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts