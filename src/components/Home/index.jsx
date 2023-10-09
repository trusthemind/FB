import React from 'react';
import PageEntry from '../PageEntry';
import Carousel from './Carousel';
import { Card } from 'antd';
import TomMap from '../Map';
import "./style.scss"
import ItemMap from '../TattoIdea';
import TestimonialsComponent from '../Testimonials';
import TeamComponent from '../../pages/Team';

const Home = () => {

    return (
        <>
            <PageEntry title={"Tatto Art Studio"} text={"designed and created by Felix Melnyk"} />
            <div className='container'>
                <Card className='card-container'>
                    <div className='About'>
                        <h1>Welcome to Tattoo Art Studio - Where Creativity and Passion Fuse in Ink!</h1>
                        <p>
                            At our Tattoo Art Studio, we believe in transforming  <b>your ideas</b> and inspirations into <b>breathtaking works of art</b>.
                            Etched forever on your skin. We are not just a studio.
                            <br />We are a sanctuary for self-expression, a place where creativity and passion converge to craft masterpieces in <b>ink</b>.
                        </p>
                    </div>
                    <Carousel />
                    <TomMap />
                    <ItemMap />
                    <TestimonialsComponent />
                    <TeamComponent />
                </Card>
            </div>
        </>
    );
}

export default Home;
