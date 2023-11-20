import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

function Login(){
    let [text, setText] = useState('');
    let [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleLogin = async (e) => {
        try {
            await axios.post("http://localhost:3000/login", {
                email: e.email,
                password: e.password
            })
            setText("Login Success");
            navigate('/stories')
            reset()
        }
        catch(err){
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