/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { useGetTattoIdeaAllQuery } from "../services/tattoidea.api";
import { getTattoIdeas } from "../services/action";
import { connect } from "react-redux";
import { Button } from "antd";


function IdeaGenerator({ getTattoIdeas, tattoideas }) {
    const [tattos, setTattoideas] = useState([])

    let {data, isloading} = useGetTattoIdeaAllQuery();

    const getIdeasHandler = () => {

        getTattoIdeas("")

    }
    return (
        <>
            <Button onClick={getIdeasHandler}>generate</Button>
        </>
    )
}

const mapState = (state) => {
    return {
        tattoideas: state.tattoideas
    };
};

const mapDispatch = (dispatch) => {
    return {
        getTattoIdeas: (val) => dispatch(getTattoIdeas(val))
    };
};


export default connect(mapState, mapDispatch)(IdeaGenerator);