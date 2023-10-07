import React from 'react';
import Carousel from './Carousel';
import { Card } from 'antd';
import TomMap from '../Map';
import "./style.scss"
import IdeaGenerator from '../TattoIdea';
import TestimonialsComponent from '../Testimonials';
import TeamComponent from '../../pages/Team';

const Home = () => {

    return (
        <>
            <div className='Entry'>
                <h1>Tatto Art Studio</h1>
                <p>designed and created by Felix Melnyk</p>
            </div>
            <div className='container'>
                <div className='About'>
                    <h1>Welcome to Tattoo Art Studio - Where Creativity and Passion Fuse in Ink!</h1>
                    <p>
                        At our Tattoo Art Studio, we believe in transforming  <b>your ideas</b> and inspirations into <b>breathtaking works of art</b>.
                        Etched forever on your skin. We are not just a studio.
                        <br />We are a sanctuary for self-expression, a place where creativity and passion converge to craft masterpieces in <b>ink</b>.
                    </p>
                </div>
                <Card className='carousel-card'><Carousel /></Card>
                <TomMap />
                <IdeaGenerator/>
                <TestimonialsComponent/>
                <TeamComponent/>
            </div>
        </>
    );
}

export default Home;
