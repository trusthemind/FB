import React, { useEffect,useLocation } from "react";
import { useGetAllArtistsQuery } from "../../api/artists.api";
import { connect } from "react-redux";
import { setArtisttoState } from "../../services/action"
import { artistsURL } from "../../services/constantUrl";
import { Card, Image, Tooltip } from "antd";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import PageEntry from "../../components/PageEntry";
import "./style.scss"

function TeamComponent({ setArtisttoState }) {
    const { data, isLoading } = useGetAllArtistsQuery();
    // const isHomePage = location.pathname === "/";  
    const isHomePage =useLocation;  
    console.log({location});

    useEffect(() => {
        setArtisttoState(data)
    }, [data]) 

    return (
        <>
        {!isHomePage && <PageEntry title={"Our team"}/>}
            <div className="container">
                {isLoading ? (
                    <div style={{ "color": "white" }}>Loading...</div>
                ) : (
                    <Card className="artist-grid">
                        {data.map((item, index) =>
                            <div className="item-container" key={index}>
                                <Card className="artist-item-card">
                                    {item?.profilepicture ?
                                        <Image className="artist-item-image"
                                            src={artistsURL + item?.profilepicture} preview={false} width={300} height={300} />
                                        : <></>
                                    }
                                    <h2 className="item-name">{item.name}
                                        {item.facebook ? <a href={item.facebook}><FacebookOutlined /></a> : <></>}
                                        {item.instagram ? <a href={item.instagram}><InstagramOutlined /></a> : <></>}
                                    </h2>
                                    {item.subtitle ? <h3 className="item-subtitle">{item.subtitle}</h3> : <></>}
                                    <p className="item-city">
                                        {item.address ? <Tooltip title={item.address}>{item.city}</Tooltip> : <>{item.city}</>}
                                    </p>
                                    {item.bio ? <p className="bio">{item.bio}</p> : <></>}
                                    {item.tags && item.tags.length > 0 ? <div className="tags">
                                        {item.tags.map((tag, index) =>
                                            <span className="tag-item" key={index}>#{tag.name}</span>
                                        )}
                                    </div> : <></>}
                                </Card>
                            </div>
                        )}
                    </Card>
                )}
            </div>
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