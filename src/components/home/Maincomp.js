import React, { useEffect } from 'react'
import "./home.css"
import Banner from './Banner'
import Slider from './Slider'
import Footer from '../footer/Footer';
import { getProducts } from "../redux/actions/action";
import { useDispatch, useSelector } from 'react-redux';



const Maincomp = () => {

    const { products } = useSelector(state => state.getproductsdata);
    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);


    return (
        <div className='home_section'>
            <div className="banner_part">
                <Banner />
            </div>

            <div className="slide_part">
                <div className="left_slide">
                    <Slider title="Deals of the Day" products={products}/>
                </div>
                <div className="right_slide">
                    <h4>Festive latest launches</h4>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg" />
                    <a href="#">see more</a>
                </div>
            </div>


            <Slider title="Today's Deals"  products={products} />


            <div className="center_img">
                <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="" />
            </div>

            <Slider title="Best Sellers" products={products}/>


            <div className="center_img">
                <img src="https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg" alt="" style={{ height: 300, width: 1300 }} />
            </div>
            <Slider title="Upto 80% Off" products={products}/>

            <Footer />
        </div>
    )
}

export default Maincomp