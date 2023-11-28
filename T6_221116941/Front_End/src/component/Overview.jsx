import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";

function Overview(){
    const detailStory = useSelector((state) => state.story.detailStory);
    const [story, setStory] = useState([]);
    const [text, setText] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [mode, setMode] = useState(0);
    const navigate = useNavigate()
    const [valueChar, setValueChar] = useState({});

    useEffect(() => {
        getStory()
    }, []);

    async function getStory(){
        const result = await axios.get(`http://localhost:3000/stories/${detailStory.story_id}/overview`)
        console.log(result.data);
        setStory(result.data)
        setValueChar(result.data);
    }

    async function updateStory(e){
        try{
            const result = await axios.put(`http://localhost:3000/stories/${detailStory.story_id}/overview`, {
                title: e.title,
                thumb: e.thumb_url
            })
            setText('Story updated!')
        }
        catch(err){
            console.log(err.response.data.message);
            setErrMsg(err.response.data.message);
        }
    }

    async function deleteStory(){
        try{
            const result = await axios.delete(`http://localhost:3000/stories/${detailStory.story_id}/overview`)
            setText("Story deleted!")
            navigate('/stories')
        }
        catch(err){
            console.log(err.response.data.message);
            setErrMsg(err.response.data.message);
        }
    }

    function handlerEdit(){
        setMode(1)
    }

    function handleOverview() {
        navigate(`/stories/${detailStory.story_id}/overview`); 
    }

    function handleCharacter() {
        navigate(`/stories/${detailStory.story_id}/character`); 
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm({values: valueChar});

    return (
        <>  
            <Navbar />
            <div className="flex justify-between">
                <p className="text-4xl ml-20 mt-5"><strong>{story.title}</strong></p>
                <div className="flex">
                    <button onClick={() => handleOverview()} className="w-40 border border-1 bg-green-500 rounded-lg py-1 mr-20 mt-5"><strong>Overview</strong></button>
                    <button onClick={() => handleCharacter()} className="w-40 border border-1 bg-green-500 rounded-lg py-1 mr-20 mt-5">Character</button>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="bg-white pt-5 pr-5 pl-5 rounded-lg shadow-md w-1/2 mt-7">
                    <form action="">
                        <div className="flex justify-between">
                            <div className="flex">
                                {
                                    mode == 0 ?
                                    <>
                                        <p className="text-2xl">{story.title}</p>
                                        <button type= 'button' className="mt-2 ml-4" onClick={handlerEdit}>Edit</button>
                                    </>
                                    :
                                    <>
                                        <input type="text" className='text-2xl' {...register('title', {
                                            required:{
                                                value: true,
                                                message: "Title tidak boleh kosong"
                                            }
                                        })}/>

                                    {errors.title && <span style={{
                                        color: "red"
                                    }} className="mt-1 text-center">{errors.title.message}</span>}
                                        <button type='button' className="mt-2" onClick={handlerEdit}>Edit</button>
                                    </>
                                }
                                    {/* {errors.title && <span style={{
                                        color: "red"
                                    }} className="mt-1 text-center">{errors.title.message}</span>}          */}
                                
                            </div>
                            <button type='button' className="w-40 border border-1 bg-red-400 rounded-lg py-1 mr-10 text-white" onClick={deleteStory}>Delete</button>
                        </div>
                        <div className="flex justify-center">
                            <img src={story.thumb} alt="" className="mt-8"/>
                        </div>

                        <input type="text" className="w-full border border-1 border-black rounded-lg px-2 py-1 mt-3" {...register('thumb_url', {
                            required: {
                                value: true,
                                message: 'URL tidak boleh kosong'
                            }
                        })}/>

                        {errors.thumb_url && <span style={{
                            color: "red"
                        }} className="mt-1 text-center">{errors.thumb_url.message}</span>}  

                    </form>
                    <div className="flex justify-center">
                        <button type="submit" className="w-40 border border-1 bg-green-500 rounded-lg py-1 mr-10 text-white mt-3" onClick={handleSubmit(updateStory)}>Change Image</button>
                    </div>
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
export default Overview;