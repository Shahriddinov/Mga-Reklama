import React, {useEffect} from 'react';
import "./category.scss";
import img from "../../../../assests/images/image 3.png"
import img2 from "../../../../assests/images/image 2.png"
import img3 from "../../../../assests/images/price.png"
import img4 from "../../../../assests/images/image 1.png"
import Avatar from "../../../../assests/images/avatar.png"
import AvatarMan from "../../../../assests/images/manAvatar.png"
import {useDispatch, useSelector} from "react-redux";
import {getAbout} from "../../../../reduxToolkit/About/About";
import Spinner from "../../../../component/Spinner";
import {getCategory} from "../../../../reduxToolkit/Category/category";
import {baseUrlImg} from "../../../../serves/api/utils";

function Category(props) {
    const dispatch = useDispatch();
    const lan = useSelector((state) => state.language.language);
    const loading = useSelector((state) => state.categorySlider.loading);
    const categoryData = useSelector((state) => state.categorySlider.categoryData);


    useEffect(() => {
        dispatch(getCategory());
    }, [dispatch]);

    if (loading) {
        return <Spinner/>;
    }
    console.log(categoryData)

    return (
        <div className="category ">
            <div className="row">
                <div className="category_titleSub">Выберите категорию</div>
                <div className="category_textSub">Что ваc интересует?</div>
                <div className="category_colm">
                    {categoryData.map((item, index) => (
                        <div className="category_Box">
                            <div key={index} style={{marginBottom: "20px", position: "relative"}}>
                                <div className="category_Box_stil">{item.title}</div>
                                <img src={`${baseUrlImg}/${item.image}`} width="100%" alt=""/>
                                <div className="category_Box_infor">{item.subtitle}</div>
                            </div>


                            {/*<div style={{marginBottom: "20px", position: "relative"}}>*/}
                            {/*    <div className="category_Box_stil">Цена</div>*/}
                            {/*    <img src={img3} width="100%" alt=""/>*/}
                            {/*    <div className="category_Box_infor">Описание категории</div>*/}
                            {/*</div>*/}
                        </div>
                    ))}
                    {/*<div className="category_Box">*/}
                    {/*    <div style={{marginBottom: "20px", position: "relative"}}>*/}
                    {/*        <div className="category_Box_stil">Тип печати</div>*/}
                    {/*        <img src={img2} width="100%" alt=""/>*/}
                    {/*        <div className="category_Box_infor">Описание категории</div>*/}
                    {/*    </div>*/}
                    {/*    <div style={{marginBottom: "20px", position: "relative"}}>*/}
                    {/*        <div className="category_Box_stil">Станки</div>*/}
                    {/*        <img src={img4} width="100%" alt=""/>*/}
                    {/*        <div className="category_Box_infor">Описание категории</div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="category_Box">*/}
                    {/*    <div style={{marginBottom: "20px", position: "relative"}}>*/}
                    {/*        <div className="category_Box_stil">Все категории</div>*/}
                    {/*        <div style={{display:"flex"}}>*/}
                    {/*            <div className="category_Box_numbers">*/}
                    {/*                Наружная печать(32)*/}
                    {/*                Внутреняя печать (81)*/}
                    {/*                Лазерная Резка (73)*/}
                    {/*                Уф печать (44)*/}
                    {/*                Политика (22)*/}
                    {/*            </div>*/}
                    {/*            <div className="category_Box_numbers">*/}
                    {/*                Фрезарной станок  (53)*/}
                    {/*                Например (44) <br/>*/}
                    {/*                Плакаты(47) <br/>*/}
                    {/*                Брашуры (66)*/}
                    {/*            </div>*/}
                    {/*        </div>*/}

                    {/*    </div>*/}
                    {/*    <div style={{marginBottom: "20px", marginTop:"30%", position: "relative"}}>*/}
                    {/*        <div className="category_Box_stil">Отзовы наших клиентов</div>*/}
                    {/*       <div className="category_Box_avatars">*/}
                    {/*               <img className="category_Box_avatars_avatarImg" src={Avatar} alt=""/>*/}
                    {/*               <div>*/}
                    {/*                   <div className="category_Box_avatars_avatarName">Элина Арден</div>*/}
                    {/*                   <div className="category_Box_avatars_avatarTry">Всё класно, сделали быстро</div>*/}
                    {/*                   <button className="category_Box_avatars_clickInfo">Читать всё...</button>*/}
                    {/*               </div>*/}
                    {/*       </div>*/}
                    {/*        <div className="category_Box_avatars">*/}
                    {/*               <img className="category_Box_avatars_avatarImg" src={AvatarMan} alt=""/>*/}
                    {/*               <div>*/}
                    {/*                   <div className="category_Box_avatars_avatarName">Петр Ян</div>*/}
                    {/*                   <div className="category_Box_avatars_avatarTry">Все честно, и с хорошими </div>*/}
                    {/*                   <button className="category_Box_avatars_clickInfo">Читать всё...</button>*/}
                    {/*               </div>*/}
                    {/*       </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

            </div>

        </div>
    );
}

export default Category;