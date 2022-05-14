import React from 'react';
import './Oder.css';
import Cards from '../Cards/Cards'
const Oder = () => {

    return (
        <div className="oderss">
            <div className="title">
                <h3>Sản phẩm nổi bật</h3>
            </div>
            <div className="oders">
                <Cards />
            </div>
        </div>

    )
};
export default Oder;