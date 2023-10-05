    import React, { useEffect } from "react";
    import { useGetAllArtistsQuery } from "../../services/artists.api";
    import { connect } from "react-redux";
    import { setArtisttoState } from "../../services/action"


    function TeamComponent({ setArtisttoState }) {
        const { data, isLoading } = useGetAllArtistsQuery();

        useEffect(() => {
            setArtisttoState(data)
        }, [data])

        console.log(data);
        return (
            <>
                <h1 style={{ "color": "white" }}>Artist page </h1>
            </>
        );
    }
    const mapState = (state) => {
        return {
            artirst: state.artirst
        };
    };

    const mapDispatch = (dispatch) => {
        return {
            setArtisttoState: (val) => dispatch(setArtisttoState(val))
        };
    };

    export default connect(mapState, mapDispatch)(TeamComponent);