import { Carousel as Swipper } from 'antd'
import React, { useEffect, useState } from 'react'
import '../style.scss'
import { connect } from 'react-redux'
import { tattosURL } from '../../../services/constantUrl'

function Carousel({ tattos }) {
    const [tattoArray, setTattoArray] = useState([])

    useEffect(() => {
        //134 149
        setTattoArray(tattos?.slice(380))
    }, [tattos])

    if (tattoArray == []) {
        return <p>Loading</p>
    }

    return (
        <div className="carousel-card">
            <p>Our Work</p>
            <Swipper autoplay className="carousel" dotPosition="bottom">
                {tattoArray?.map((item, index) => {
                    return <img key={index} src={tattosURL + item?.url} />
                })}
            </Swipper>
        </div>
    )
}
const mapState = state => {
    return {
        tattos: state.reducer.tattoideas,
    }
}

export default connect(mapState)(Carousel)
