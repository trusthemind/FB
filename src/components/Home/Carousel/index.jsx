import { Carousel as Swipper } from "antd";
import athena from "./img/athena.webp"
import hecate from "./img/hecate.webp"
import medusa from "./img/medusa.webp"
import zeabf from "./img/zeabf.webp"
import japan_dragon from "./img/japan-dragon.webp"
import japanOni from "./img/japanoni.webp"
import "../style.scss"
import {Card} from "antd"

function Carousel() {
    return (
        <Card className="carousel-card">
        <p>Our Work</p>
        <Swipper autoplay
        className='carousel'
        dotPosition='bottom'>
        <img src={athena} alt="Tatto" />
        <img src={hecate} alt="Tatto" />
        <img src={japan_dragon} alt="Tatto" />
        <img src={japanOni} alt="Tatto" />
        <img src={zeabf} alt="Tatto" />
        <img src={medusa} alt="Tatto" />
        </Swipper>
        </Card>
    );
}

export default Carousel;