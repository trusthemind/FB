import { Carousel as Swipper, Card } from "antd";
import "../style.scss"
import { connect } from "react-redux";
import { tattosURL } from "../../../services/constantUrl";

function Carousel({ tattos }) {
    console.log(tattos.slice(134, 149));
    // todo fix carousel
    return (
        <Card className="carousel-card">
            <p>Our Work</p>
            <Swipper autoplay
                className='carousel'
                dotPosition='bottom'>
                {tattos?.slice(134, 149).map((item) => {
                    <img src={tattosURL + item?.url} alt="Tatto" />
                })}
            </Swipper>
        </Card>
    );
}
const mapState = (state) => {
    return {
        tattos: state.reducer.tattoideas,
    };
};

const mapDispatch = (dispatch) => {
    return {

    };
};

export default connect(mapState, mapDispatch)(Carousel);