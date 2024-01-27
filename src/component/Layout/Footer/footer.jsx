import React, {useEffect} from 'react'
import icon from "../../../assests/images/SVG.svg"
import youtube from "../../../assests/images/youtube.svg"
import web from "../../../assests/images/web.svg"
import twettir from "../../../assests/images/twettir.svg"
import snap from "../../../assests/images/snap.svg"
import picture from "../../../assests/images/picture.svg"
import {Link} from "react-router-dom";
import Spinner from "../../Spinner";
import {getSocial} from "../../../reduxToolkit/Social/social";
import {useDispatch, useSelector} from "react-redux";
import {getMagazine} from "../../../reduxToolkit/Magazine/magazine";
import {baseUrlImg} from "../../../serves/api/utils";

const Footer = () => {
    const dispatch = useDispatch();
    const lan = useSelector((state) => state.language.language);
    const loading = useSelector((state) => state.socialSlice.loading);
    const socialData = useSelector((state) => state.socialSlice.socialData);


    useEffect(() => {
        dispatch(getSocial());
    }, [dispatch]);

    if (loading) {
        return <Spinner />;
    }
    console.log(socialData)
    return (
        <div className="footer">
            <div className="row">
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Link to="#">
                        <img className='footer_brandIcon' src={icon} alt=""/>
                        <div className='footer_brand'>MGAREKLAMA</div>
                    </Link>
                </div>
                <ul className="footer_link">
                    <li>Главная</li>
                    <li>О компании</li>
                    <li>Наши услуги</li>
                    <li>Контакты</li>
                </ul>
                {socialData.map((item, index)=>(
                    <ul key={index} className="footer_links">
                        <li><a target="_blank" href={item.url}> <img src={`${baseUrlImg}/${item.icon}`} alt=""/></a></li>
                    </ul>
                ))}

            </div>
        </div>
    )
}
export default  Footer
