import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { NavLink } from 'react-router-dom';
import { Card, Carousel } from 'antd';
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
                    <br/>We are a sanctuary for self-expression, a place where creativity and passion converge to craft masterpieces in <b>ink</b>.
                </p>
                {/* <p>TELL US ABOUT YOUR TATTOO
                    Each tattoo is unique, it tells a story, <b>YOURS!</b>
                    <br/><br/>Each tattoo carries with it many meanings, it goes beyond the design, in each of its representations it contains a message or an emotion or a state of mind.
                    <br/>For this reason, in our Tattoo Studios in Milan and Cinisello Balsamo, the tattoo artists express themselves through a design created just for you in order to give space to your idea and your choice.
                    <br/><br/>Every little stroke of your design deserves all our care in the realization and the utmost attention to hygiene and the materials used.
                    <br/>Tell us about yours, contact us for a meeting, we are waiting for you in our Tattoo Studios!
                </p> */}
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
        </Card>
        </>
    );
}

export default Home;
