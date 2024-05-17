import React, { useContext, useState } from 'react'
import './signup.css'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Logincontext } from '../context/Contextprovider';


const Sign_in = () => {

    const [logdata, setData] = useState({
        email: "",
        password: ""
    });
    console.log(logdata);

    const { account, setAccount } = useContext(Logincontext);


    const addData = (e) => {
        const { name, value } = e.target;


        setData(() => {
            return {
                ...logdata,
                [name]: value
            }
        })
    }

    const senddata = async (e) => {
        e.preventDefault();

        const { email, password } = logdata;




        const res = await fetch("/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
            })
        });

        const data = await res.json();
        console.log(data)
        if (res.status === 400 || !data) {
            toast.warning("Please enter a valid credentials")
            console.log(data.error)
        }
        else {
            setAccount(data);
            toast.success("Logged in successfully")
            console.log("Logged in successfully")
            console.log(logdata)
            setData({ ...logdata, email: "", password: "", });
        }
    }

    return (

        <>
            <section>
                <div className="sign_container">
                    <div className="sign_header">
                        <img src="./blacklogoamazon.png" alt="amazonlogo" />
                    </div>
                    <div className="sign_form">
                        <form method='POST'>
                            <h1>Sign in</h1>
                            <div className="form_data">
                                <label htmlFor="email">Email</label>
                                <input
                                    onChange={addData}
                                    value={logdata.email}
                                    type="text" name='email' id='email' />
                            </div>
                            <div className="form_data">
                                <label htmlFor="password">Password</label>
                                <input
                                    onChange={addData}
                                    value={logdata.password}
                                    type="password" name='password' placeholder='At least 6 characters' id='password' />
                            </div>
                            <button className='signin_btn' onClick={senddata}>
                                Continue
                            </button>
                        </form>
                    </div>
                    <div className="create_accountinfo">
                        <p>New to Amazon</p>
                        <NavLink to={"/register"}><button>Create Your amazon Account</button></NavLink>
                    </div>
                </div>
                <ToastContainer />
            </section>
        </>
    )
}

export default Sign_in