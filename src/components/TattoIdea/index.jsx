/* eslint-disable jsx-a11y/alt-text */
import "./style.scss"
import { useEffect } from "react";
import { useLazyGetTattoIdeaAllQuery } from "../../api/tattoidea.api";
import { setTattoIdeastoState } from "../../services/action";
import { connect } from "react-redux";
import { tattosURL } from "../../services/constantUrl";
import { Button, Image, Card } from "antd";

export function MapCard({ array }) {
    return (
        <Card className="photoCard">
            {array?.slice(0, 21).map((item) =>
                <Image
                    className="card-item"
                    src={tattosURL + item?.url}
                />
            )}
        </Card>
    )
}

function IdeaGenerator({ setTattoIdeastoState, tattoideas }) {
    let [trigger, { data, isLoading }] = useLazyGetTattoIdeaAllQuery();

    useEffect(() => {
        setTattoIdeastoState(data)
    }, [data]) // eslint-disable-line react-hooks/exhaustive-deps

    const getIdeasHandler = () => {
        trigger();
    }

    return (
        <>
            <Button onClick={getIdeasHandler}>generate Ideas</Button>
            {isLoading ? <h1>Loading</h1> : <MapCard array={data} />}

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