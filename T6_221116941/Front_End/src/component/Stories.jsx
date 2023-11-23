import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import { doOverview } from "../app/story";

function Stories(){
    const myakun = useSelector((state)=> state.myakun.userLogin);
    const [text, setText] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [userLogin, setUserLogin] = useState([]);
    const [story, setStory] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        getStory()
    }, []);

    async function getStory(){
        const result = await axios.get("http://localhost:3000/stories");
        console.log(result.data);
        setStory(result.data);
    }

    async function handleOverview(id){
        dispatch(
            doOverview({
                story_id: id
            })
        );
        navigate(`/stories/${id}/overview`);
        // try{
        //     const result = await axios.get(`http://localhost:3000/stories/${id}/overview`)
        // }
        // catch(err){

        // }
    }

    return(
        <>  
            <Navbar />
            <div className="flex flex-wrap mt-7 justify-center ml-3 mr-3">
                {
                    story.map((item, index) => {
                        return(
                            <>
                                <div className="bg-white pt-5 pr-5 pl-5 rounded-lg shadow-md w-96 ml-8 mt-7" key={index} onClick={() => handleOverview(item.id)}>
                                    <div className="flex justify-center">
                                        <img src={item.thumb} alt="" className="rounded-lg"/>
                                    </div>
                                    <div>
                                        <p className="text-xl mt-5 mb-5"><strong>{item.title}</strong></p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Stories