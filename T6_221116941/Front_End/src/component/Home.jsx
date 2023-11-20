import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import foto from '../assets/foto.gif'
import axios from "axios";

function Home(){
    const navigate = useNavigate();
    // const [isHome, setIsHome] = useState(true);
    const [isHome, setIsHome] = useState(() => {
        const storedIsHome = localStorage.getItem('isHome');
        return storedIsHome ? JSON.parse(storedIsHome) : true;
    });
    const [user, setUser] = useState([]);

    const handleLogin = () => {
        navigate('/login');
        setIsHome(false)
        localStorage.setItem('isHome', JSON.stringify(false));
    }

    const handleRegister = () => {
        navigate('/register');
        setIsHome(false)
        localStorage.setItem('isHome', JSON.stringify(false));
    }

    if (isHome === undefined){
        return null
    }

    return (
        <>
            {isHome ? (
                <>
                    <div className="flex justify-center items-center mt-5">
                        <img src={foto} alt="" />                
                    </div>
                    <div className="flex justify-center items-center mt-10">
                        <button className="border rounded-lg px-6 py-1 bg-green-500 ml-6 font-bold" onClick={handleLogin}>Login</button>
                        <button className="border rounded-lg px-6 py-1 bg-blue-500 ml-5 font-bold" onClick={handleRegister}>Register</button>
                    </div>
                </>
            ) : null}
            <Outlet />
        </>
    )
}
export default Home