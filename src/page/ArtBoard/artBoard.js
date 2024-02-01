import React from 'react';
import "./artBoard.scss";
import DD from "../../assests/images/DDD.jpg"
import Message from "../Home/Message/message";
import Slider from "../../component/Slider/slider";
import PDF from "../../assests/images/ДОГОВОР_ОКАЗАНИЯ_УСЛУГ.pdf"
function ArtBoard(props) {
    return (
        <>
            <div className="board">
                <div className="row">
                    <div className="board_preis">
                        <img className="board_preis_d" src={DD} alt=""/>
                        <a target="_blank" href={PDF}  rel="noreferrer"  className="board_preis_but">Price</a>
                    </div>
                </div>
            </div>
            <Message/>
            <Slider/>
        </>
    );
}

export default ArtBoard;