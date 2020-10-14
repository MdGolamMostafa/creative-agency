import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
const WorkSlides = () => {
    return (

            <Carousel>
                <Carousel.Item>
                    <img
                        style={{height: '323px', width: '223px'}}
                        className="d-block w-100 h-80"
                        src={'https://i.ibb.co/1f83FjF/carousel-one.png'}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        style={{height: '323px', width: '223px'}}
                        className="d-block w-100"
                        src={'https://i.ibb.co/QvcTtN4/carousel-two.png'}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        style={{height: '323px', width: '223px'}}
                        className="d-block w-100"
                        src={'https://i.ibb.co/vmNksY8/carousel-three.png'}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        style={{height: '323px', width: '223px'}}
                        className="d-block w-100"
                        src={'https://i.ibb.co/qx8SPSh/carousel-four.png'}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        style={{height: '323px', width: '223px'}}
                        className="d-block w-100"
                        src={'https://i.ibb.co/pPsKq6C/carousel-five.png'}
                        alt="Third slide"
                    />
                </Carousel.Item>
                
            </Carousel>
    );
};

export default WorkSlides;