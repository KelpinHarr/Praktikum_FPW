import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";

function Character(){
    const detailStory = useSelector((state) => state.story.detailStory);
    const [story, setStory] = useState([]);
    const [char, setChar] = useState([]);
    const [text, setText] = useState('');
    const [input_title, setInputTitle] = useState('Main Character');
    const [errMsg, setErrMsg] = useState('');
    const [mode, setMode] = useState(-1);
    const [valueChar, setValueChar] = useState({});
    // const [valueChar, setValueChar] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        getStory();
        getCharacter();
    }, []);

    function handlerChange (e) {
        setInputTitle(e.target.value)
    }

    async function saveCharacter(e){
        if(mode == -1) {
            try {
                const result = await axios.post("http://localhost:3000/registercharacter", {
                    storyid: detailStory.story_id,
                    name: e.input_name,
                    title: input_title,
                    age: e.input_age,
                    characteristic: e.input_characteristic,
                    background: e.input_background,
                })
                setText("Character Success");
                getCharacter();
                reset()
            }
            catch(err){
                console.log(err.response.data.message);
                setErrMsg(err.response.data.message);
                reset()
            }    
        }
        else {
            try {
                const result = await axios.post("http://localhost:3000/updatecharacter", {
                    id: mode,
                    storyid: detailStory.story_id,
                    name: e.input_name,
                    title: input_title,
                    age: e.input_age,
                    characteristic: e.input_characteristic,
                    background: e.input_background,
                })
                setText("Character Success");
                getCharacter();
                reset()
            }
            catch(err){
                console.log(err.response.data.message);
                setErrMsg(err.response.data.message);
                reset()
            }    
        }
        setValueChar({
            input_name: "", 
            input_age: "", 
            input_characteristic: "",
            input_background: "",
          });
        setMode(-1);
    }

    async function getStory(){
        const result = await axios.get(`http://localhost:3000/stories/${detailStory.story_id}/overview`)
        setStory(result.data)
    }

    async function getCharacter(){
        const result = await axios.get(`http://localhost:3000/characters/${detailStory.story_id}`)
        console.log(result.data); 
        setChar(result.data)
    }

    function handleOverview() {
        navigate(`/stories/${detailStory.story_id}/overview`); 
    }

    function handleCharacter() {
        navigate(`/stories/${detailStory.story_id}/character`); 
    }

    function editCharacter(index) {
        setMode(char[index].id); // mode update
        setInputTitle(char[index].title);
        setValueChar({
            input_name: char[index].name, 
            input_age: char[index].age, 
            input_characteristic: char[index].characteristic,
            input_background: char[index].background,
          });
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
                                <>
                                    <p className="text-2xl">{story.title}</p>
                                </>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                {
                                    char.map((item, index) => {
                                        return ( 
                                            <>
                                                <div className="bg-white pt-5 pr-5 pl-5 rounded-lg shadow-md w-96 ml-8 mt-7" onClick={() => editCharacter(index)}>
                                                    <div>
                                                        <p className="text-xl mt-5 mb-5"><strong>{ item.name }</strong></p>
                                                        <p className="text-sm mt-5 mb-5"><strong>{ item.title }</strong></p>
                                                    </div>
                                                </div>
                                            </>
                                        )                                        
                                    })
                                }                                    
                            </div>
                            <div>
                                <input type="text" placeholder="Name" className="w-full border border-1 border-black rounded-lg px-2 py-1 mt-3" {...register('input_name', {required: {value: true,message: 'URL tidak boleh kosong'}
                                })} />
                                {errors.input_name && <span style={{
                                    color: "red"
                                }} className="mt-1 text-center">{errors.input_name.message}</span>}     

                                <input type="radio" name="input_title" value="Main Character" 
                                    checked={input_title === "Main Character"}
                                    onChange={handlerChange} />&nbsp;
                                <label htmlFor="regular">Main Character</label>&nbsp;&nbsp;
                                <input type="radio" name="input_title" value="Side Character" 
                                    checked={input_title === "Side Character"}
                                    onChange={handlerChange} />&nbsp;
                                <label htmlFor="regular">Side Character</label>

                                {/* <input type="text" className="w-full border border-1 border-black rounded-lg px-2 py-1 mt-3" {...register('input_title', {required: {value: true,message: 'URL tidak boleh kosong'}
                                })} />
                                {errors.input_title && <span style={{
                                    color: "red"
                                }} className="mt-1 text-center">{errors.input_title.message}</span>}                                   */}

                                <input type="text" placeholder="Age" className="w-full border border-1 border-black rounded-lg px-2 py-1 mt-3" {...register('input_age', {required: {value: true,message: 'URL tidak boleh kosong'}
                                })} />
                                {errors.input_age && <span style={{
                                    color: "red"
                                }} className="mt-1 text-center">{errors.input_age.message}</span>}                                  

                                <input type="text" placeholder="Characteristic" className="w-full border border-1 border-black rounded-lg px-2 py-1 mt-3" {...register('input_characteristic', {required: {value: true,message: 'URL tidak boleh kosong'}
                                })} />
                                {errors.input_characteristic && <span style={{
                                    color: "red"
                                }} className="mt-1 text-center">{errors.input_characteristic.message}</span>}                                  

                                <input type="text" placeholder="Background" className="w-full border border-1 border-black rounded-lg px-2 py-1 mt-3" {...register('input_background', {required: {value: true,message: 'URL tidak boleh kosong'}
                                })} />
                                {errors.input_background && <span style={{
                                    color: "red"
                                }} className="mt-1 text-center">{errors.input_background.message}</span>}                                  

                                <div className="flex justify-center">
                                    <button type="submit" className="w-40 border border-1 bg-green-500 rounded-lg py-1 mr-10 text-white mt-3" onClick={handleSubmit(saveCharacter)}>Save</button>
                                </div>
                            </div>
                        </div>
                    </form>

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
export default Character;