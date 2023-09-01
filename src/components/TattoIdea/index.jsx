import { useState, useEffect } from "react";
import { useLazyGetTattoIdeaAllQuery } from "../services/tattoidea.api";
import { setTattoIdeastoState } from "../services/action";
import { connect } from "react-redux";
import { Button } from "antd";


function IdeaGenerator({ setTattoIdeastoState, tattoideas }) {
    let [trigger, { data, isLoading }] = useLazyGetTattoIdeaAllQuery();


    useEffect(() => {
        setTattoIdeastoState(data)
    }, [data])


    useEffect(() => {
        console.log(isLoading)
    }, [data])

    

    const getIdeasHandler = () => {
        trigger();

    }
    return (
        <>
            <Button onClick={getIdeasHandler}>generate</Button>
            {isLoading && <h1>loading</h1>}
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
        setTattoIdeastoState: (val) => dispatch(setTattoIdeastoState(val))
    };
};

export default connect(mapState, mapDispatch)(IdeaGenerator);