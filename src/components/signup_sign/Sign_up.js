import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Sign_up = () => {
    const [udata, setUdata] = useState({
        fname: '',
        email: '',
        mobile: '',
        password: '',
        cpassword: ''
    });

    console.log(udata);

    const addData = (e) => {
        const { name, value } = e.target;

        setUdata((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const senddata = async (e) => {
        e.preventDefault();
        const { fname, email, mobile, password, cpassword } = udata;

        if (fname === "") {
            toast.warning("Please enter a genuine name", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
            });
        }
        else if (mobile >= 11) {
            toast.warning("Please enter a valid phone no.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
            });
        }
        else if (password !== cpassword) {
            toast.warning("Passwords dont match !!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
            });
        }
        else if (password === "") {
            toast.warning("Please choose a password", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
            });
        } else {

        }


        const res = await fetch("register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fname,
                email,
                mobile,
                password,
                cpassword
            })
        });


        const data = await res.json();
        // console.log(data);

        if (res.status === 422 || !data) {
            // alert("no data passed");
            toast.warning("Invalid credentials", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
            });
        } else {
            // alert("user successfully Registered");
            toast.success("user Registered  successfully ", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
            });
            setUdata({
                fname: '',
                email: '',
                mobile: '',
                password: '',
                cpassword: ''
            });
            Navigate('/login');
        }
    }
    const Navigate = useNavigate();

    return (
        <>
            <section>
                <div className="sign_container">
                    <div className="sign_header">
                        <img src="./blacklogoamazon.png" alt="amazonlogo" />
                    </div>
                    <div className="sign_form">
                        <form method='POST'>
                            <h2>Create a New Account</h2>
                            <div className="form_data">
                                <label htmlFor="fname">Your Name</label>
                                <input onChange={addData} value={udata.fname} type="text" name='fname' id='fname' />
                            </div>
                            <div className="form_data">
                                <label htmlFor="email">Email</label>
                                <input onChange={addData} value={udata.email} type="text" name='email' id='email' />
                            </div>
                            <div className="form_data">
                                <label htmlFor="mobile">Mobile</label>
                                <input onChange={addData} value={udata.mobile} type="text" name='mobile' id='mobile' />
                            </div>
                            <div className="form_data">
                                <label htmlFor="password">Password</label>
                                <input onChange={addData} value={udata.password} type="password" name='password' id='password' />
                            </div>
                            <div className="form_data">
                                <label htmlFor="cpassword">Confirm Password</label>
                                <input onChange={addData} value={udata.cpassword} type="password" name='cpassword' placeholder='confirm your password' id='cpassword' />
                            </div>
                            <button className='signin_btn' onClick={senddata}>
                                Continue
                            </button>

                            <div className="signin_info">
                                <p>Already have an account?</p>
                                <NavLink to="/login">Sign in</NavLink>
                            </div>
                        </form>
                    </div>
                    <ToastContainer />
                </div>
            </section>
        </>
    );
};

export default Sign_up;
