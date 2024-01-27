import React, {useEffect} from 'react';
import "./product.scss"
import Car from "../../../../assests/images/car.png"
import Image from "../../../../assests/images/image.png"
import Image7 from "../../../../assests/images/image 7.png"
import {useDispatch, useSelector} from "react-redux";
import {getAbout} from "../../../../reduxToolkit/About/About";
import Spinner from "../../../../component/Spinner";
import {getMagazine} from "../../../../reduxToolkit/Magazine/magazine";
import {baseUrlImg} from "../../../../serves/api/utils";

function Product(props) {
    const dispatch = useDispatch();
    const lan = useSelector((state) => state.language.language);
    const loading = useSelector((state) => state.magazineSlider.loading);
    const magazinedata = useSelector((state) => state.magazineSlider.magazineData);


    useEffect(() => {
        dispatch(getMagazine());
    }, [dispatch]);

    if (loading) {
        return <Spinner />;
    }
    return (
        <div className="product ">
            {magazinedata.map((item, index)=>(
                <div key={index} className="row">
                    <div className="product_tit">
                        <h2 className="product_tit_jurnal">{item.title}</h2>
                        <h5 className="product_tit_catalog">{item.status}</h5>
                    </div>

                    <div className='flexs'>
                        <div className="product_picture">
                            <div>
                                <img className='product_picture_zero' width="100%" src={`${baseUrlImg}/${item.images[0]}`} alt=""/>
                                <img className='product_picture_one' width="100%" height="50%" src={`${baseUrlImg}/${item.images[2]}`} alt=""/>

                            </div>
                        </div>
                        <div className="product_picture">
                            <img className='product_picture_one' width="100%"  src={`${baseUrlImg}/${item.images[1]}`} alt=""/>
                        </div>
                    </div>
                    <div className="product_describtion" dangerouslySetInnerHTML={{
                        __html: item.info,
                    }}>

                    </div>

                </div>
            ))}

        </div>
    );
}

export default Product;