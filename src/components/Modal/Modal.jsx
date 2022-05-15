import React from 'react';
import imgmodal from '../../img/sanpham1.png';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Checkbox } from '@mui/material';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './Modal.css';

const ModalSanPham = () => {
    const [size, setSize] = useState({ M: true, L: false });
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        Sum()
    }, [count, size]);
    const handleSizeChange = (e) => {
        setSize({ M: !size.M, L: !size.L });
    }
    const Sum = () => {
        let total = 0;
        if (size.L) {
            total = (count * 56000) + (5000 * count);
        } else {
            total = count * 56000;
        }
        setCalculation(total);
    }
    const styleCheckbox = { width: '20px', height: '20px', border: 'none', background: '#799dd9', color: 'white', margin: '0px 5px', cursor: 'pointer' }
    return (
        <div className="modalSanPham">
            <div className="box-modal">
                <div className="box-modal-img">
                    <img src={imgmodal} alt="" />
                </div>
                <div className="descriptionModal">

                    <div className="description1">
                        <p>Trà xoài bưởi hồng kem phomai</p>
                        <p>56.000</p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, libero? Nisi rem consectetur sunt explicabo animi saepe non fugit tenetur.</p>
                    </div>
                </div>
                <div className="close">
                    <CloseIcon />
                </div>
            </div>
        </div>
    )
}
export default ModalSanPham;