import { useEffect } from "react";
import { useGetTattoIdeaAllQuery } from "../../api/tattoidea.api";
import { setTattoIdeastoState } from "../../services/action";
import { connect } from "react-redux";
import MapCard from "./mapCard";
import "./style.scss"

function ItemMap({ setTattoIdeastoState, tattoideas }) {
    const { data, isLoading } = useGetTattoIdeaAllQuery();

    useEffect(() => {
        setTattoIdeastoState(data)
    }, [data]) // eslint-disable-line react-hooks/exhaustive-deps
        

    return (
        <>
            {/* <Button onClick={getIdeasHandler}>generate Ideas</Button> */}
            {isLoading ? <h1>Loading</h1> : data && <MapCard array={data} />}

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

export default connect(mapState, mapDispatch)(ItemMap);