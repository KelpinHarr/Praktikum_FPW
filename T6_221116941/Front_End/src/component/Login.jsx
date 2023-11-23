import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import {doLogin} from "../app/myakun";

function Login() {
    const dispatch = useDispatch();
    const myakun = useSelector((state)=> state.myakun.userLogin);
    const [text, setText] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [userLogin, setUserLogin] = useState([]);
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
    }, []);

    const handleLogin = async (e) => {
        console.log(e.email); 
        console.log(e.password); 
        try {
            const result = await axios.post("http://localhost:3000/login", {
                email: e.email,
                password: e.password
            })
            console.log(result); 
            var res = result.data; 
            console.log(res.message); 
            if(res.message == "Login success") {
                dispatch(
                    doLogin({
                        email: e.email
                    })
                ); 
                navigate('/stories')
            }
            else {
                setText(res.message);
            }
            // setUserLogin(e.email);
            // console.log(e.email);
            // navigate('/stories')
            // reset()
        }
        catch(err){
            console.log("error"); 
            console.log(err.response.data.message);
            setErrMsg(err.response.data.message);
            reset()
        }
    }

    return(
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white w-1/3 rounded-lg p-5">
                    <p className="text-2xl text-center"><strong>Login</strong></p>
                    <form>
                        <p className="text-xl text-center mt-12">Email</p>
                        <input type="text" className="w-full border border-1 border-black rounded-lg px-2 py-1 mt-3" placeholder="Email" {...register('email', {
                            required:{
                                value: true,
                                message: 'Email tidak boleh kosong'
                            }
                        })}/>

                        {errors.email && <span style={{
                            color: "red"
                        }} className="mt-1 text-center">{errors.email.message}</span>}

                        <p className="text-xl text-center mt-8">Password</p>
                        <input type="password" className="w-full border border-1 border-black rounded-lg px-2 py-1 mt-3" placeholder="Password" {...register('password', {
                            required: {
                                value: true,
                                message: 'Password tidak boleh kosong'
                            }
                        })}/>

                        {errors.password && <span style={{
                            color: "red"
                        }} className="mt-1 text-center">{errors.password.message}</span>}                                              
                    </form>
                    
                    <div className="flex justify-center mt-12 mb-3">
                        <button type="submit" className="w-1/2 border border-1 bg-green-500 rounded-lg py-1" onClick={handleSubmit(handleLogin)}><strong>Login</strong></button>
                    </div>
                    <Link to='/register'><p className="text-lg mt-5 text-center text-blue-700 underline">Don't have an account?</p></Link>
                    {
                        errMsg == '' ? 
                        <p className="text-xl text-center text-green-500"><strong>{text}</strong></p>
                        :
                        <p className="text-xl text-center text-red-500"><strong>{errMsg}</strong></p>
                    }
                </div>
            </div>
        </>
    )
}
export default Login