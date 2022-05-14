import React from 'react';
import img from '../../img/sanpham1.png'
import './Card.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card_heart">
                <FavoriteBorderIcon />
            </div>
            <div className="card_cart">
                <ShoppingCartIcon />
            </div>
            <div className="card_img">
                <img src={props.img} alt="" />
            </div>
            <div className="card_title">
                {props.title}
            </div>
            <div className="card_price">
                {props.price}
            </div>
            <div className="card_action">
                <button>By Now</button>
                <button>Add Cart</button>
            </div>
        </div>
    );
}
export default Card;
