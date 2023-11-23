import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";

function Profile(){
    const myakun = useSelector((state)=> state.myakun.userLogin);
    const [userLogin, setUserLogin] = useState([]);
    const [mode, setMode] = useState(0);
    const [text, setText] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        getUserByEmail()
    }, [mode])

    async function getUserByEmail(){
        const result = await axios.get(`http://localhost:3000/user/${myakun.email}`)
        setUserLogin(result.data[0]);
    }

    async function updateUser(e){
        try{
            if (e.password == e.confirm_password){
                const result = await axios.put(`http://localhost:3000/user/${myakun.email}`, {
                    first_name: e.first_name,
                    last_name: e.last_name,
                    password: e.password
                })
                setText("Data updated!")
            }
            else {
                setErrMsg("Password tidak sama!")
            }
        }
        catch(err){
            console.log(err.response.data.message);
            setErrMsg(err.response.data.message)
        }
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    function handlerChange(){
        setMode(1)
    }

    return (
        <>
            <Navbar/>
            {
                mode == 0 ?
                <div className="flex justify-center items-center h-screen">
                    <div className="bg-white w-1/3 rounded-lg p-5">
                        <p className="text-2xl"><strong>Profile</strong></p>
                        <form action="">
                            <div className="flex w-full">
                                <div className="w-1/2">
                                    <input type="text" className="w-full border border-1 border-black rounded-lg px-2 py-1 mt-3" value={userLogin.first_name} disabled/>
                                </div>
                                <div className="w-1/2 ml-5">
                                    <input type="text" className="w-full border border-1 border-black rounded-lg px-2 py-1 mt-3" value={userLogin.last_name} disabled/>
                                </div>
                            </div>
                            <div className="w-full">
                                <input type="text" className="w-full border border-1 border-black rounded-lg px-2 py-1 mt-3" value={userLogin.email} disabled/>
                            </div>
                            <div className="w-full">
                                <input type="password" className="w-full border border-1 border-black rounded-lg px-2 py-1 mt-3" value={userLogin.password} disabled/>
                            </div>
                        </form>
                        <div className="grid justify-items-stretch">
                            <button type="submit" className="w-40 border border-1 bg-gray-400 rounded-lg py-1 justify-self-end mt-4" onClick={handlerChange}><strong>Change Password</strong></button>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="w-1/2 border border-1 bg-green-500 rounded-lg py-1 mt-3"><strong>Save Changes</strong></button>
                        </div>
                    </div>
                </div>
                :
                <div className="flex justify-center items-center h-screen">
                    <div className="bg-white w-1/3 rounded-lg p-5">
                        <p className="text-2xl"><strong>Profile</strong></p>
                        <form action="">
                            <div className="flex w-full">
                                <div className="w-1/2">
                                    <input type="text" className="w-full border border-1 border-black rounded-lg px-2 py-1 mt-3" value={userLogin.first_name} {...register('first_name', {
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
                                    <input type="text" className="w-full border border-1 border-black rounded-lg px-2 py-1 mt-3" value={userLogin.last_name} {...register('last_name', {
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
                            <div className="w-full">
                                <input type="text" className="w-full border border-1 border-black rounded-lg px-2 py-1 mt-3" value={userLogin.email} disabled/>
                            </div>
                            <div className="w-full">
                                <input type="password" className="w-full border border-1 border-black rounded-lg px-2 py-1 mt-3" value={userLogin.password} {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'Password tidak boleh kosong'
                                    }
                                })}/>

                                {errors.password && <span style={{
                                    color: "red"
                                }} className="mt-1 text-center">{errors.password.message}</span>}
                            </div>
                            <div className="w-full">
                                <input type="password" className="w-full border border-1 border-black rounded-lg px-2 py-1 mt-3" placeholder="Confirm Password" {...register('confirm_password', {
                                    required: {
                                        value: true,
                                        message: 'Confirm Password tidak boleh kosong'
                                    }
                                })}/>
                                {errors.confirm_password && <span style={{
                                    color: "red"
                                }} className="mt-1 text-center">{errors.confirm_password.message}</span>}
                            </div>
                        </form>
                        <div className="flex justify-center">
                            <button type="submit" className="w-1/2 border border-1 bg-green-500 rounded-lg py-1 mt-3" onClick={handleSubmit(updateUser())}><strong>Save Changes</strong></button>
                        </div>
                    </div>
                    {
                    errMsg == '' ? 
                        <p className="text-xl text-center text-green-500"><strong>{text}</strong></p>
                        :
                        <p className="text-xl text-center text-red-500"><strong>{errMsg}</strong></p>
                    }
                </div>
            }
        </>
    )
}

export default Profile