import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

function Register(){
    let [text, setText] = useState('');
    let [errMsg, setErrMsg] = useState('');
    let [user, setUser] = useState([])

    useEffect(() => {
        getUser()
    }, [])

    async function getUser(){
        const result  = await axios.get('http://localhost:3000/')
        setUser(result.data);
        console.log(user);
    }

    const handleRegister = async (e) => {
        try {
            if (e.password == e.confirm_password){
                const result = await axios.post("http://localhost:3000/register", {
                    email: e.email,
                    first_name: e.first_name,
                    last_name: e.last_name,
                    password: e.password,
                })
                setText("Register Success");
                console.log(user);
                
                reset()
            }
            else {
                setErrMsg("Password tidak sama");
            }
        }
        catch(err){
            console.log(err.response.data.message);
            setErrMsg(err.response.data.message);
            reset()
        }
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    return(
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white w-1/3 rounded-lg p-5">
                    <p className="text-2xl text-center"><strong>REGISTER</strong></p>
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

                        <p className="text-xl text-center mt-8">Nama</p>
                        <div className="flex w-full">
                            <div className="w-1/2">
                                <input type="text" className="w-full border border-1 border-black rounded-lg px-2 py-1 mt-3" placeholder="First Name" {...register('first_name', {
                                    required: {
                                        value: true,
                                        message: 'First name tidak boleh kosong'
                                    }
                                })}/>

                                {errors.first_name && <span style={{
                                    color: "red"
                                }} className="mt-1 text-center">{errors.first_name.message}</span>}
                            </div>
                            <div className="w-1/2 ml-5">
                                <input type="text" className="w-full border border-1 border-black rounded-lg px-2 py-1 mt-3" placeholder="Last Name" {...register('last_name', {
                                    required: {
                                        value: true,
                                        message: 'Last name tidak boleh kosong'
                                    }
                                })}/>

                                {errors.last_name && <span style={{
                                    color: "red"
                                }} className="mt-1 text-center">{errors.last_name.message}</span>}
                            </div>
                        </div>

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

                        <p className="text-xl text-center mt-8">Confirm Password</p>
                        <input type="password" className="w-full border border-1 border-black rounded-lg px-2 py-1 mt-3" placeholder="Confirm Password" {...register('confirm_password', {
                            required: {
                                value: true,
                                message: 'Confirm Password tidak boleh kosong'
                            }
                        })}/>

                        {errors.confirm_password && <span style={{
                            color: "red"
                        }} className="mt-1 text-center">{errors.confirm_password.message}</span>}                          

                    </form>
                    
                    <div className="flex justify-center mt-12 mb-3">
                        <button type="submit" className="w-1/2 border border-1 bg-green-500 rounded-lg py-1" onClick={handleSubmit(handleRegister)}><strong>Register</strong></button>
                    </div>
                    <Link to='/login'><p className="text-lg mt-5 text-center text-blue-700 underline">Already have an account?</p></Link>
                    {
                        errMsg == '' ? 
                        <p className="text-xl text-center text-green-500"><strong>{text}</strong></p>
                        :
                        <p className="text-xl text-center text-red-500"><strong>{errMsg}</strong></p>
                    }
                </div>
            </div>
            {/* {
                user.map((u) => {
                    return(
                        <>
                            <p>{u.email}</p>
                        </>
                    )
                })
            } */}
        </>
    )
}
export default Register