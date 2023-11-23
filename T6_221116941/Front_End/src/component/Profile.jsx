import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";

function Profile(){
    const myakun = useSelector((state)=> state.myakun.userLogin);
    const [userLogin, setUserLogin] = useState([]);
    const [mode, setMode] = useState(0)

    useEffect(() => {
        getUserByEmail()
    }, [])

    async function getUserByEmail(){
        const result = await axios.get(`http://localhost:3000/user/${myakun.email}`)
        setUserLogin(result.data[0]);
    }

    function handlerChange(){
        setMode(1)
    }

    return (
        <>
            <Navbar/>
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
                        <button type="submit" className="w-40 border border-1 bg-gray-400 rounded-lg py-1 justify-self-end mt-4"><strong>Change Password</strong></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile