import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import img2 from '../../img/slideshow1_2.jpg';
import img1 from '../../img/slide001.jpg';
import img3 from '../../img/_MG_4886.png';
import './Slide.css'
import Logo from "../../img/logo1.png";
import MenuBar from "../MenuBar/MenuBar.jsx"
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

const Slide = () => {
    return (
        <div className="slideshow">
            <div className="menu">
                <div className="menu1">
                    <div className="logo">
                        <div className="logo1">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="menubar">
                            <MenuBar />
                        </div>
                    </div>

                    <div className="search">
                        <SearchTwoToneIcon />
                    </div>
                </div>
            </div>
            <Carousel style={{ height: '100vh' }}>
                <Carousel.Item style={{ height: '100vh' }}>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <button className="btn">Đặt Hàng Ngay</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: '100vh' }}>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="btn">Đặt Hàng Ngay</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: '100vh' }}>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <button className="btn">Đặt Hàng Ngay</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Slide
