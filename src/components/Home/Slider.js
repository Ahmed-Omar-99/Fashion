import adidas from '../../img/adidas.jpg'
import et1 from '../../img/et1.jpg'

import { useState, useEffect } from 'react';

function Slider({ style }) {

    const [data, setData] = useState([
        { 'img': et1 },
        { 'img': adidas },
        { 'img': et1 },
    ])

    const [heightSlider, setHeightSlider] = useState('100vh')

    useEffect(() => {

        window.addEventListener('resize', () => {

            if (window.innerWidth > 844) {

                setHeightSlider(`${window.innerHeight - 65 - 73.64}px`)

            } else {

                setHeightSlider(`${window.innerHeight - 65}px`)

            }

        })

        if (window.innerWidth > 844) {

            setHeightSlider(`${window.innerHeight - 65 - 73.64}px`)

        } else {

            setHeightSlider(`${window.innerHeight - 65}px`)

        }

    }, [])

    return (
        <div id="carouselExampleControls" style={{ height: heightSlider }} className={`carousel slide ${style["carousel"]}`} data-bs-ride="carousel">
            <div className="carousel-indicators">

                {data.map((value, index) => {
                    return (
                        <>
                            <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to={`${index}`} className={`${index == 0 ? 'active' : null}`} aria-current="true" aria-label={`Slide ${index + 1}`}></button>
                        </>
                    );
                })}

            </div>
            <div className={`carousel-inner`}>

                <div className={`${style["item-container"]}`}></div>

                {data.map((data, index) => {
                    return (
                        <div className={`${style["carousel-item"]} carousel-item ${index == 0 ? 'active' : null}`} style={{ backgroundImage: `url(${data.img})`, height: heightSlider }}>
                            {/* <div className={`${style["carousel-caption-container"]}`}>
                            <div className={`${style["carousel-caption"]} carousel-caption`}>
                                <h1>%75 تخفيضات تصل إلي </h1>
                                <p>adidas إغتنم الفرصة في تخفيضات كبيرة تصل إلي 75% علي منتجات</p>
                            </div>
                        </div> */}
                        </div>
                    )
                })}


            </div>
            <button className={`carousel-control-prev`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className={`carousel-control-next`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <button className="btn btn-primary">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </button>
        </div>
    );
}

export default Slider;
