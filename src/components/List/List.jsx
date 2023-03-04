import React from 'react'

import Card from "../Card/Card"

import "./List.scss"

const List = () => {

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
        {
            id: 5,
            img: "https://images.pexels.com/photos/5762522/pexels-photo-5762522.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/5762517/pexels-photo-5762517.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Flower Print Dress",
            isNew: false,
            oldPrice: 13,
            price: 11
        },
        {
            id: 6,
            img: "https://images.pexels.com/photos/5762488/pexels-photo-5762488.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/5762478/pexels-photo-5762478.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Flower Print Dress",
            isNew: false,
            oldPrice: 13,
            price: 11
        },
        {
            id: 7,
            img: "https://images.pexels.com/photos/5762511/pexels-photo-5762511.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/5762515/pexels-photo-5762515.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Flower Print Dress",
            isNew: false,
            oldPrice: 13,
            price: 11
        },
        {
            id: 8,
            img: "https://images.pexels.com/photos/5762458/pexels-photo-5762458.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/5762469/pexels-photo-5762469.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Flower Print Dress",
            isNew: false,
            oldPrice: 13,
            price: 11
        },



    ];

    return (
        <div className="list">
            {data?.map(item => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    )
}

export default List