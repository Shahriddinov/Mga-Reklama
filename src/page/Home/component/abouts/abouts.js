import React from 'react';
import "./abourts.scss"
import image4 from "../../../../assests/images/image 4.png"
import image5 from "../../../../assests/images/image 5.png"

function Abouts(props) {
    return (
        <div className="abouts">
            <div className="row">
                <div className="abouts_work">Все самое актуальное</div>
                <div style={{ marginTop: "10%"}} className=' abouts_d flexs'>
                    <div className="abouts_subox">
                        <div style={{display: "flex", justifyContent: "center", position: "relative"}}>
                            <div className="abouts_subox_Name">
                                Фрезерный Станок С Чпу
                                <span className="abouts_subox_Name_subs">3 Октября 2024</span>
                            </div>
                            <img width="100%" style={{marginTop: "20%"}} src={image4} alt=""/>
                        </div>
                        <h5 className="abouts_subox_describtion">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type.</h5>
                    </div>
                    <div className="abouts_subox">
                        <div style={{display: "flex", justifyContent: "center", position: "relative", }}>
                            <div className="abouts_subox_Name">
                                Лазерная резка
                                <span className="abouts_subox_Name_subs">3 Октября 2024</span>
                            </div>
                            <img width="100%" style={{marginTop: "20%"}} src={image5} alt=""/>
                        </div>
                        <h5 className="abouts_subox_describtion">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type.</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Abouts;