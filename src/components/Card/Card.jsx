import React from 'react';
import { useState, useEffect } from 'react';
import './Card.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Checkbox } from '@mui/material';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Modal from 'react-bootstrap/Modal'



const Card = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    return (
        <>
            <ExpandedCard params={props} setShow={() => setShow(true)} />
            <Modal show={show} onHide={handleClose}>
                <CompactCard params={props} setShow={() => setShow(false)} />
            </Modal>
        </>
    )
}

function ExpandedCard({ params, setShow }) {
    const [background, setBackground] = useState("");
    function handleBoxClick() {
        if (!background) {
            setBackground('red');
        } else {
            setBackground('');
        }
    }
    return (
        <div className="card"
        >
            <div className="card_heart">
                <FavoriteIcon
                    style={{ color: background }}
                    onClick={handleBoxClick}
                />
            </div>
            <div className="card_cart">
                <ShoppingCartIcon />
            </div>
            <div className="card_img"
                onClick={setShow}
            >
                <img src={params.img} alt="" />
            </div>
            <div className="card_title">
                {params.title}
            </div>
            <div className="card_price">
                {params.price}
            </div>
            <div className="card_action">
                <button onClick={setShow}>By Now</button>
                <button>Add Cart</button>
            </div>
        </div>
    );
}
//modal san pham mat sau
function CompactCard({ params, setShow }) {
    const [size, setSize] = useState({ M: true, L: false });
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    const price = params.price;
    useEffect(() => {
        Sum()
    }, [count, size]);
    const handleSizeChange = (e) => {
        setSize({ M: !size.M, L: !size.L });
    }
    const Sum = () => {
        let total = 0;
        if (size.L) {
            total = (count * price) + (5000 * count);
        } else {
            total = count * price;
        }
        setCalculation(total);
    }
    const styleCheckbox = { width: '20px', height: '20px', border: 'none', background: '#799dd9', color: 'white', margin: '0px 5px', cursor: 'pointer' }
    return (

        <div className='modalSanPham'>
            <div className="box-modal">
                <div className="box-modal-img">
                    <img src={params.img} alt="" />
                </div>
                <div className="descriptionModal">

                    <div className="description1">
                        <p>{params.title}</p>
                        <p>{params.price}</p>
                        <div className="soLuong">
                            <span>Số lượng: </span>
                            <HorizontalRuleIcon
                                onClick={() => setCount((c) => (c - 1) < 0 ? 0 : c - 1)}
                                style={styleCheckbox}
                            />
                            <span>{count}</span>
                            <AddIcon
                                onClick={() => setCount((c) => c + 1)}
                                style={styleCheckbox}
                            />
                        </div>
                        <div className="size">
                            <p>Chọn Size:</p>
                            <span>Size M:<Checkbox checked={size.M} onChange={handleSizeChange} /></span>
                            <span>Size L:<Checkbox checked={size.L} onChange={handleSizeChange} /></span>
                        </div>
                        <div className="ThanhToan">
                            <Button variant="outlined" style={{ marginRight: '10px' }}>Thanh Toán</Button>
                            <input type="text" value={calculation.toLocaleString('en-US') + " đ"} />
                        </div>
                    </div>
                    <div className="description1">
                        <p>Mô tả:</p>
                        <p>{params.description}</p>
                    </div>
                </div>
                <div className="close">
                    <CloseIcon onClick={setShow} />
                </div>
            </div>
        </div>

    )
}
export default Card;