"use client";
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Banner() {
    const onChange = (index) => {
        console.log("Slide changed to:", index);
    };

    const onClickItem = (index) => {
        console.log("Clicked on item:", index);
    };

    const onClickThumb = (index) => {
        console.log("Clicked on thumbnail:", index);
    };

    return (
        <div className=" w-11/12 mx-auto ">
            <Carousel
                showArrows={true}
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                onChange={onChange}
                onClickItem={onClickItem}
                onClickThumb={onClickThumb}
                className='h-[300px] '
            >
                <div>
                    <img src="/images/MART.png" alt="Slide 1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/images/a.png" alt="Slide 2" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/images/aa.png" alt="Slide 3" />
                    <p className="legend">Legend 3</p>
                </div>
              
            </Carousel>
        </div>
    );
}
