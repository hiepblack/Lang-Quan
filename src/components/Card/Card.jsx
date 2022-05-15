import React from 'react';
import { useState } from 'react';
import './Card.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Card = (props) => {
    const [background, setBackground] = useState("");
    function handleBoxClick() {
        if (!background) {
            setBackground('red');
        } else {
            setBackground('');
        }
    }
    return (
        <div className="card">
            <div className="card_heart"
            >
                <FavoriteIcon
                    style={{ color: background }}
                    onClick={handleBoxClick}
                />
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
