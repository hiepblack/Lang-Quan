import React from 'react';
import { dataSanpham } from '../../data';
import Card from "../Card/Card";
import './Cards.css'

const Cards = () => {
    return (
        <>
            {dataSanpham.map((item) => {
                return (
                    <Card
                        img={item.img}
                        title={item.title}
                        price={item.price}
                    />
                )
            })}
        </>
    )
}
export default Cards;