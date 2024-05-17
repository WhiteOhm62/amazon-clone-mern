import React, { useContext, useEffect, useState } from 'react';
import "./cart.css";
// import { products } from '../home/productdata';
import { Divider } from '@mui/material';
import { NavLink, useNavigate, useParams } from 'react-router-dom'; // Updated import
import CircularProgress from '@mui/material/CircularProgress';
import { Logincontext } from "../context/Contextprovider";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../redux/actions/action";
import Slider from '../home/Slider';

const Cart = () => {


    const { products } = useSelector(state => state.getproductsdata);
    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const { account, setAccount } = useContext(Logincontext);
    const { id } = useParams();
    const navigate = useNavigate(); // Updated hook

    const [inddata, setIndedata] = useState("");

    const getinddata = async () => {
        const res = await fetch(`https://d-parinda-backend.onrender.com/getproductsone/${id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            // credentials: "include"
        });

        const data = await res.json();

        if (res.status !== 201) {
            alert("No data available");
        } else {
            setIndedata(data);
        }
    };

    useEffect(() => {
        setTimeout(getinddata, 1000);
    }, [id]);


    //cart functionality

    const addtocart = async (id) => {
        const check = await fetch(`https://d-parinda-backend.onrender.com/addcart/${id}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                inddata
            }),
            // credentials: "include"
        });

        const data1 = await check.json();
        console.log(data1);

        if (check.status === 401 || !data1) {
            console.log("user invalid")
            alert("user invalid");
        } else {
            alert("added to cart");
            setAccount(data1);
            navigate("/buynow"); // Updated navigation
        }
    }

    return (
        <div className="cart_section">
            {inddata && Object.keys(inddata).length ?
                <>
                    <div className="cart_container">
                        <div className="left_cart">
                            <img src={inddata.detailUrl} alt="cart" />
                            <div className="cart_btn">
                                <button className="cart_btn1" onClick={() => addtocart(inddata.id)}>Add to Cart</button>
                                <NavLink to="/"><button className="cart_btn2">Buy Now</button></NavLink>
                            </div>
                        </div>
                        <div className="right_cart">
                            <h3>{inddata.title.shortTitle}</h3>
                            <h4>{inddata.title.longTitle}</h4>
                            <Divider />
                            <p className="mrp">M.R.P. : <del>₹{inddata.price.mrp}</del></p>
                            <p>Deal of the Day : <span style={{ color: "#B12704" }}>₹{inddata.price.cost}.00</span></p>
                            <p>You save : <span style={{ color: "#B12704" }}> ₹{inddata.price.mrp - inddata.price.cost} ({inddata.price.discount}) </span></p>
                            <div className="discount_box">
                                <h5>Discount : <span style={{ color: "#111" }}>{inddata.discount}</span></h5>
                                <h4>FREE Delivery : <span style={{ color: "#111", fontWeight: "600" }}>Oct 8 - 21</span> Details</h4>
                                <p style={{ color: "#111" }}>Fastest delivery: <span style={{ color: "#111", fontWeight: "600" }}> Tomorrow 11AM</span></p>
                            </div>
                            <p className="description">About the Item : <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>{inddata.description}</span></p>
                        </div>
                    </div>
                    <Divider />
                    <div>
                        <Slider title="Related products" products={products} />
                    </div>
                </>
                :
                <div className="circle">
                    <CircularProgress />
                    <h2> Loading....</h2>
                </div>
            }
        </div>
    )
}

export default Cart;
