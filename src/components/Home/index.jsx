import React from 'react';
import { Card, Carousel } from 'antd';
import TomMap from '../Map';
import "./style.scss"

const Home = () => {

    return (
        <>
            <Card className='Entry'>
                <h1>Tatto Art Studio</h1>
                <p>designed and created by Felix Melnyk</p>
            </Card>
            <Card className='container'>
                <Card className='About'>
                    <h1>Welcome to Tattoo Art Studio - Where Creativity and Passion Fuse in Ink!</h1>
                    <p>
                        At our Tattoo Art Studio, we believe in transforming  <b>your ideas</b> and inspirations into <b>breathtaking works of art</b>.
                        Etched forever on your skin. We are not just a studio.
                        <br />We are a sanctuary for self-expression, a place where creativity and passion converge to craft masterpieces in <b>ink</b>.
                    </p>
                    {/*  */}
                </Card>
                <Card>
                    <Carousel autoplay
                        className='carousel'
                        dotPosition='left'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </Carousel>
                </Card>
                <TomMap/>
            </Card>
        </>
    );
}

export default Home;
