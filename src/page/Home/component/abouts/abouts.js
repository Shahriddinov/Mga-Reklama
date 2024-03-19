import React, {useEffect, useRef} from 'react';
import "./abourts.scss"
import {useDispatch, useSelector} from "react-redux";
import {getYou} from "../../../../reduxToolkit/youTube/youTube";

function Abouts(props) {
    const dispatch = useDispatch();
    const lan = useSelector((state) => state.language.language);
    const loading = useSelector((state) => state.youTubeSlice.loading);
    const youTubeData = useSelector((state) => state.youTubeSlice.youTubeData);


    useEffect(() => {
        dispatch(getYou());
    }, [dispatch,lan]);


    return (
        <div className="abouts">
            <div className="row">


                <iframe
                        className="abouts_video"

                        src={`https://www.youtube.com/embed/${youTubeData[0]?.url}`}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>

            </div>
        </div>
    );
}

export default Abouts;