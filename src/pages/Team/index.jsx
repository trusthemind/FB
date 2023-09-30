import React, { useEffect } from "react";
import { useGetAllArtistsQuery } from "../../services/artists.api";
import { connect } from "react-redux";
import { setArtisttoState, setTattoIdeastoState } from "../../services/action"


function TeamComponent() {
    const { data, isLoading } = useGetAllArtistsQuery();

    useEffect(() => {
        setTattoIdeastoState(data)
    }, [data])

    console.log(data, isLoading);
    return (<>
    </>);
}
const mapState = (state) => {
    return {
        tattoideas: state.tattoideas
    };
};

const mapDispatch = (dispatch) => {
    return {
        setTattoIdeastoState: (val) => dispatch(setArtisttoState(val))
    };
};

export default connect(mapState, mapDispatch)(TeamComponent);