import React, { useEffect } from "react";
import { useGetAllArtistsQuery } from "../../services/artists.api";
import { connect } from "react-redux";
import { setArtisttoState } from "../../services/action"
import { Card, Image } from "antd";
import "./style.scss"
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";

function TeamComponent({ setArtisttoState }) {
    const { data, isLoading } = useGetAllArtistsQuery();

    useEffect(() => {
        setArtisttoState(data)
    }, [data])// eslint-disable-line react-hooks/exhaustive-deps

    console.log(data);
    return (
        <>
            {isLoading ? (
                <div style={{ "color": "white" }}>Loading...</div>
            ) : (
                <Card className="artist-grid">
                    {data.map((item, index) =>
                        <div className="item-container" key={index}>
                            <Card className="artist-item-card">
                                {item?.profilepicture ?
                                    <Image className="artist-item-image"
                                        src={"https://mijntattoo.nl/images/artists/" + item?.profilepicture} preview={false} width={300} height={300} />
                                    : <></>
                                }
                                <h2 className="item-name">{item.name}
                                        {item.facebook ? <a href={item.facebook}><FacebookOutlined /></a> : <></>}
                                        {item.instagram ? <a href={item.instagram}><InstagramOutlined /></a> : <></>}
                                </h2>
                                {item.subtitle ? <h3 className="item-subtitle">{item.subtitle}</h3> : <></>}
                                <p className="item-city">{item.city}</p>
                                {item.bio ? <p className="bio">{item.bio}</p> : <></>}
                            </Card>
                        </div>
                    )}
                </Card>
            )}
        </>
    );
}
const mapState = (state) => {
    return {
        artists: state.artists
    };
};

const mapDispatch = (dispatch) => {
    return {
        setArtisttoState: (val) => dispatch(setArtisttoState(val))
    };
};

export default connect(mapState, mapDispatch)(TeamComponent);