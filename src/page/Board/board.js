import React from 'react';
import Message from "../Home/Message/message";
import Slider from "../../component/Slider/slider";
import DD from "../../assests/images/DDD.jpg"
import "./artBoard.scss"
import PDF from "../../assests/images/ДОГОВОР_ОКАЗАНИЯ_УСЛУГ BUXORO.docx"
function Board(props) {
    return (

        <div className="board">
            <div className="row">
                <div className="board_preis">
                    <img className="board_preis_d" src={DD} alt=""/>
                    <a target="_blank" href={PDF}  rel="noreferrer"  className="board_preis_but">Price</a>
                </div>
            </div>
        </div>

    );
}

export default Board;