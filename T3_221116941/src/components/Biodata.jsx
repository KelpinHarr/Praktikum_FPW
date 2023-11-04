import { useState } from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from '@hookform/resolvers/joi'
// import React, {useRef} from "react";

function Biodata(props){
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const addBio = data => {
        console.log(data)

        let newExp = [];
        for (let i = 0; i < data.titleExp.length; i++){
            newExp.push({
                "titleExp" : data.titleExp[i],
                "placeExp" : data.placeExp[i],
                "descExp" : data.descExp[i],
                "startExp" : data.startExp[i],
                "endExp" : data.endExp[i],
            })
        }
        const newBio = {
            nama: data.nama,
            title: data.title,
            phone_number: data.phone_number,
            email: data.email,
            domicile: data.domicile,
            linkedIn_id: data.linkedIn_id,
            photo_url: data.photo_url,
            about: data.about,
            high_school: data.high_school,
            diploma: data.diploma,
            bachelor: data.bachelor,
            master: data.master,
            start_hs: data.start_hs,
            end_hs: data.end_hs,
            start_diploma: data.start_diploma,
            end_diploma: data.end_diploma,
            start_bachelor: data.start_bachelor,
            end_bachelor: data.end_bachelor,
            start_master: data.start_master,
            end_master: data.end_master,
            experience: newExp
        }
        props.setBio(newBio)
        reset()
        props.setMode(1);
    }
    function handlerMenu(){
        props.setId(props.id+1)
        const kode = props.item[props.item.length-1].id + 1;
        const newItem = {
            id: kode,
            titleExp: '',
            placeExp: '',
            descExp: '',
            startExp: '',
            endExp: ''
        }
        props.setItem([...props.item, newItem]);
    }
    function delMenu(id){
        props.setItem(props.item.filter((items) => items.id != id))
    }

    const [isCheckedHS, setIsCheckedHS] = useState(props.checkedHS)
    const [isCheckedDiploma, setIsCheckedDiploma] = useState(props.checkedDiploma)
    const [isCheckedBachelor, setIsCheckedBachelor] = useState(props.checkedBachelor)
    const [isCheckedMaster, setIsCheckedMaster] = useState(props.isCheckedMaster)
    const [title, setTitle] = useState('');
    const [place, setPlace] = useState('');
    const [desc, setDesc] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const cbxHS = (e) => {
        const checked = e.target.checked;
        setIsCheckedHS(checked);

        props.setCheckedHS(checked)
    }

    const cbxDip = (e) => {
        const checked = e.target.checked;
        setIsCheckedDiploma(checked);
        
        props.setCheckedDiploma(checked)
    }

    const cbxBachelor = (e) => {
        const checked = e.target.checked;
        setIsCheckedBachelor(checked);

        props.setCheckedBachelor(checked);
    }

    const cbxMaster = (e) => {
        const checked = e.target.checked;
        setIsCheckedMaster(checked);

        props.setCheckedMaster(checked);
    }

    const handlerClear = () => {
        reset({
            nama: '',
            title: '',
            phone_number: '',
            email: '',
            domicile: '',
            linkedIn_id: '',
            photo_url:'',
            about: '',
            high_school: '',
            start_hs: '',
            end_hs: '',
            diploma: '',
            start_diploma: '',
            end_diploma: '',
            bachelor: '',
            start_bachelor: '',
            end_bachelor: '',
            master: '',
            start_master: '',
            end_master: '',
            titleExp: '',
            placeExp: '',
            descExp: '',
            startExp: '',
            endExp: ''
        });
        
    }

    return(
        <>
            <button className='border rounded-lg bg-red-400 text-white w-24 h-9 mt-3 ml-20' onClick={handlerClear}>Clear</button>
            <div className='border rounded-lg bg-white w-11/12 ml-20 mt-7' >
                <form>
                    <div className="flex px-5">
                            <div className="w-1/2 px-3">
                                <input type="text" placeholder="Nama" className="border rounded-lg border-1 border-black w-full mt-8 mb-3 pt-1 pl-2 pb-1" {...register('nama', {
                                    required:{
                                        value: true,
                                        message: 'Nama tidak boleh kosong'
                                    }
                                })}/>

                                {errors.nama && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.nama.message}</span>}
                            </div>
                            <div className="w-1/2 px-3">
                                <input type="text" placeholder="Title" className="border rounded-lg border-1 border-black w-full mt-8 mb-3 pt-1 pl-2 pb-1" {...register('title', {
                                    required: {
                                        value: true,
                                        message: "Title tidak boleh kosong"
                                    }
                                })}/>   

                                {errors.title && <span style={{
                                color: "red"
                                }} className="ml-1">{errors.title.message}<br/></span>} 
                            </div>
                    </div>
                    <div className="flex px-5">
                            <div className="w-1/2 px-3">
                                <input type="text" placeholder="Phone Number" className="border rounded-lg border-1 border-black w-full mt-3 mb-3 pt-1 pl-2 pb-1" {...register('phone_number', {
                                    required:{
                                        value: true,
                                        message: 'Phone number harus diisi'
                                    },
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: 'Format salah'
                                    }
                                })}/>

                                {errors.phone_number && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.phone_number.message}</span>}
                            </div>
                            <div className="w-1/2 px-3">
                                <input type="text" placeholder="Email" className="border rounded-lg border-1 border-black w-full mt-3 mb-3 pt-1 pl-2 pb-1" {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Email harus diisi'
                                    }
                                })}/>

                                {errors.email && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.email.message}</span>}
                            </div>
                    </div>
                    <div className="flex px-5">
                            <div className="w-1/2 px-3">
                                <input type="text" placeholder="Domicile" className="border rounded-lg border-1 border-black w-full mt-3 mb-3 pt-1 pl-2 pb-1" {...register('domicile', {
                                    required: {
                                        value: true,
                                        message: 'Domicile harus diisi'
                                    }
                                })}/>

                                {errors.domicile && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.domicile.message}</span>}
                            </div>
                            <div className="w-1/2 px-3">
                                <input type="text" placeholder="LinkedIn ID" className="border rounded-lg border-1 border-black w-full mt-3 mb-3 pt-1 pl-2 pb-1" {...register('linkedIn_id', {
                                    required: {
                                        value: true,
                                        message: 'LinkedIn ID harus diisi'
                                    }
                                })}/>

                                {errors.linkedIn_id && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.linkedIn_id.message}</span>}
                            </div>
                    </div>
                    <div className="flex px-5">
                        <div className="w-full px-3 mb-6">
                            <input type="text" placeholder="Photo URL" className="border rounded-lg border-1 border-black w-full mt-3 mb-3 pt-1 pl-2 pb-1" {...register('photo_url', {
                                required: {
                                    value: true,
                                    message: 'Photo url harus diisi'
                                }
                            })}/>

                            {errors.photo_url && <span style={{
                                color: "red"
                            }} className="ml-1">{errors.photo_url.message}</span>}
                        </div>
                    </div>
                </form>
            </div>    
            <div className="border rounded-lg bg-white w-11/12 ml-20 mt-3">
                <p className="text-xl m-8"><strong>About myself</strong></p>
                <div className="flex px-5">
                    <div className="w-full px-3 mb-5">
                        <form action="">
                            <textarea name="" id="" cols="30" rows="10" className="border rounded-lg border-1 border-black w-full mb-3 pt-1 pl-2 pb-1 h-48" {...register('about', {
                                required: {
                                    value: true,
                                    message: 'Field harus diisi'
                                },
                                max: {
                                    value: 100,
                                    
                                }
                            })} />

                            {errors.about && <span style={{
                                color: "red"
                            }} className="ml-1">{errors.about.message}</span>}
                        </form>
                        
                    </div>
                </div>
            </div> 
            <div className="border rounded-lg bg-white w-11/12 ml-20 mt-3">
                <p className="text-xl ml-8 mt-8"><strong>Education</strong></p>

                {/* High School */}
                <div className="flex">
                    <div className="ml-8 mt-6">
                        <input type="checkbox" checked={isCheckedHS} onChange={cbxHS}/>
                    </div>
                    <p className="text-lg ml-3 mt-5">High School</p>
                </div>
                {
                    props.checkedHS ?
                    <form>
                        <div className="flex px-5">
                            <div className="w-5/6 px-3">
                                <input type="text" placeholder="Place" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('high_school', {
                                    required: {
                                        value: props.checkedHS ? true : false,
                                        message: 'Place wajib diisi'
                                    }
                                })}/>
                                {errors.high_school && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.high_school.message}</span>}
                            </div>

                            <div className="w-1/12 px-3">
                                <input type="text" placeholder="Start" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('start_hs', {
                                    required: {
                                        value: props.checkedHS ? true : false,
                                        message: 'Start harus diisi'
                                    }
                                })}/>
                                {errors.start_hs && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.start_hs.message}</span>}
                            </div>

                            <div className="w-1/12 px-3">
                                <input type="text" placeholder="End" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('end_hs', {
                                    required: {
                                        value: props.checkedHS ? true : false,
                                        message: 'End harus diisi'
                                    }
                                })}/>
                                {errors.end_hs && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.end_hs.message}</span>}
                            </div>
                        </div>
                    </form>
                    :
                    <form>
                        <div className="flex px-5">
                            <div className="w-5/6 px-3">
                                <input type="text" placeholder="Place" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" disabled />
                            </div>
                            <div className="w-1/12 px-3">
                                <input type="text" placeholder="Start" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" disabled />
                            </div>
                            <div className="w-1/12 px-3">
                                <input type="text" placeholder="End" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" disabled />
                            </div>
                        </div>
                    </form>
                }

                {/* Diploma */}
                <div className="flex">
                    <div className="ml-8 mt-6">
                        <input type="checkbox" checked={isCheckedDiploma} onChange={cbxDip}/>
                    </div>
                    <p className="text-lg ml-3 mt-5">Diploma Degree (D3)</p>
                </div>
                {
                    props.checkedDiploma ?
                    <form>
                        <div className="flex px-5">
                            <div className="w-5/6 px-3">
                                <input type="text" placeholder="Place" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('diploma', {
                                    required: {
                                        value: props.checkedDiploma ? true : false,
                                        message: 'Place harus diisi'
                                    }
                                })}/>
                                {errors.diploma && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.diploma.message}</span>}
                            </div>

                            <div className="w-1/12 px-3">
                                <input type="text" placeholder="Start" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('start_diploma', {
                                    required: {
                                        value: props.checkedDiploma ? true : false,
                                        message: 'Start harus diisi'
                                    }
                                })}/>
                                {errors.start_diploma && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.start_diploma.message}</span>}
                            </div>

                            <div className="w-1/12 px-3">
                                <input type="text" placeholder="End" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('end_diploma', {
                                    required: {
                                        value: props.checkedDiploma ? true : false,
                                        message: 'End harus diisi'
                                    }
                                })}/>
                                {errors.end_diploma && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.end_diploma.message}</span>}
                            </div>
                        </div>
                    </form>
                    :
                    <form>
                        <div className="flex px-5">
                            <div className="w-5/6 px-3">
                                <input type="text" placeholder="Place" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" disabled />
                            </div>
                            <div className="w-1/12 px-3">
                                <input type="text" placeholder="Start" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" disabled />
                            </div>
                            <div className="w-1/12 px-3">
                                <input type="text" placeholder="End" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" disabled />
                            </div>
                        </div>
                    </form>
                }

                {/* Bachelor */}
                <div className="flex">
                    <div className="ml-8 mt-6">
                        <input type="checkbox" className="" checked={isCheckedBachelor} onChange={cbxBachelor}/>
                    </div>
                    <p className="text-lg ml-3 mt-5">Bachelor Degree (S1)</p>
                </div>
                {
                    props.checkedBachelor ?
                    <form>
                        <div className="flex px-5">
                            <div className="w-5/6 px-3">
                                <input type="text" placeholder="Place" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('bachelor', {
                                    required: {
                                        value: props.checkedBachelor ? true : false,
                                        message: 'Place harus diisi'
                                    }
                                })}/>
                                {errors.bachelor && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.bachelor.message}</span>}
                            </div>

                            <div className="w-1/12 px-3">
                                <input type="text" placeholder="Start" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('start_bachelor', {
                                    required: {
                                        value: props.checkedBachelor ? true : false,
                                        message: 'Start harus diisi'
                                    }
                                })}/>
                                {errors.start_bachelor && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.start_bachelor.message}</span>}
                            </div>

                            <div className="w-1/12 px-3">
                                <input type="text" placeholder="End" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('end_bachelor', {
                                    required: {
                                        value: props.checkedBachelor ? true : false,
                                        message: 'End harus diisi'
                                    }
                                })}/>
                                {errors.end_bachelor && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.end_bachelor.message}</span>}
                            </div>
                        </div>
                    </form>
                    :
                    <form>
                        <div className="flex px-5">
                            <div className="w-5/6 px-3">
                                <input type="text" placeholder="Place" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" disabled />
                            </div>
                            <div className="w-1/12 px-3">
                                <input type="text" placeholder="Start" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" disabled />
                            </div>
                            <div className="w-1/12 px-3">
                                <input type="text" placeholder="End" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" disabled />
                            </div>
                        </div>
                    </form>
                }

                {/* Master */}
                <div className="flex">
                    <div className="ml-8 mt-6">
                        <input type="checkbox" className="" checked={isCheckedMaster} onChange={cbxMaster}/>
                    </div>
                    <p className="text-lg ml-3 mt-5">Master Degree (S2)</p>
                </div>
                {
                    props.checkedMaster ?
                    <form>
                        <div className="flex px-5">
                            <div className="w-5/6 px-3">
                                <input type="text" placeholder="Place" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('master', {
                                    required: {
                                        value: props.checkedMaster ? true : false,
                                        message: 'Place harus diisi'
                                    }
                                })}/>
                                {errors.master && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.master.message}</span>}
                            </div>

                            <div className="w-1/12 px-3">
                                <input type="text" placeholder="Start" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('start_master', {
                                    required: {
                                        value: props.checkedMaster ? true : false,
                                        message: 'Start harus diisi'
                                    }
                                })}/>
                                {errors.start_master && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.start_master.message}</span>}
                            </div>

                            <div className="w-1/12 px-3 mb-8">
                                <input type="text" placeholder="End" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('end_master', {
                                    required: {
                                        value: props.checkedMaster ? true : false,
                                        message: 'End harus diisi'
                                    }
                                })}/>
                                {errors.end_master && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.end_master.message}</span>}
                            </div>
                        </div>
                    </form>
                    :
                    <form>
                        <div className="flex px-5">
                            <div className="w-5/6 px-3">
                                <input type="text" placeholder="Place" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" disabled />
                            </div>
                            <div className="w-1/12 px-3">
                                <input type="text" placeholder="Start" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" disabled />
                            </div>
                            <div className="w-1/12 px-3 mb-8">
                                <input type="text" placeholder="End" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" disabled />
                            </div>
                        </div>
                    </form>                   
                }
            </div>
            <div className="border rounded-lg bg-white w-11/12 ml-20 mt-3">
                <p className="text-xl ml-8 mt-8"><strong>Experiences</strong></p>
                {
                    props.item.map((items, index) => {
                        return(
                            <>
                                <form action="">
                                    <div className="flex px-5" key={index}>
                                        <div className="w-11/12 px-3">
                                            <input type="text" placeholder="Title" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register(`titleExp.${items.id - 1}`, {
                                                required: {
                                                    value: true,
                                                    message: 'Title harus diisi'
                                                }
                                            })}/>
                                            {errors.titleExp && 
                                                errors.titleExp[items.id - 1] && <span style={{
                                                color: "red"
                                            }} className="ml-1">{errors.titleExp[items.id - 1].message}</span>}
                                        </div>
                                        <div className="w-5/6 px-3">
                                            <input type="text" placeholder="Place" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register(`placeExp.${items.id - 1}`, {
                                                required: {
                                                    value: true,
                                                    message: 'Place harus diisi'
                                                }
                                            })}/>
                                            {errors.placeExp && 
                                                errors.placeExp[items.id - 1] && <span style={{
                                                color: "red"
                                            }} className="ml-1">{errors.placeExp[items.id - 1].message}</span>}
                                        </div>
                                        <div className="w-1/4 px-3">
                                            <button onClick={() => delMenu(items.id)}><p className="w-full mt-4 text-2xl">❌</p></button>
                                        </div>
                                    </div>
                                    <div className="flex px-5">
                                        <div className="w-3/4 px-3">
                                            <input type="text" placeholder="Description" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register(`descExp.${items.id - 1}`, {
                                                required: {
                                                    value: true,
                                                    message: 'Description harus diisi'
                                                }
                                            })}/>
                                           {errors.descExp && 
                                                errors.descExp[items.id - 1] && <span style={{
                                                color: "red"
                                            }} className="ml-1">{errors.descExp[items.id - 1].message}</span>}
                                        </div>
                                        <div className="w-1/12 px-3">
                                            <input type="text" placeholder="Start" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register(`startExp.${items.id - 1}`, {
                                                required: {
                                                    value: true,
                                                    message: 'Start harus diisi'
                                                }
                                            })}/>
                                           {errors.startExp && 
                                                errors.startExp[items.id - 1] && <span style={{
                                                color: "red"
                                            }} className="ml-1">{errors.startExp[items.id - 1].message}</span>}
                                        </div>
                                        <div className="w-1/12 px-3">
                                            <input type="text" placeholder="End" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register(`endExp.${items.id - 1}`, {
                                                required: {
                                                    value: true,
                                                    message: 'End harus diisi'
                                                }
                                            })}/>
                                           {errors.endExp && 
                                                errors.endExp[items.id - 1] && <span style={{
                                                color: "red"
                                            }} className="ml-1">{errors.endExp[items.id - 1].message}</span>}
                                        </div>
                                    </div>
                                </form>
                            </>
                        )
                    })
                }
                <div className="flex justify-end">
                    <button className="border rounded-lg bg-blue-400 text-white w-24 h-9 mt-5 mr-44 mb-6" onClick={handlerMenu}>Add</button>
                </div>
            </div>
            <div className="flex justify-center mb-8">
                <button className='border rounded-lg bg-green-500 text-white w-64 h-12 mt-3 ml-20' onClick={handleSubmit(addBio)}>Generate</button>
            </div>
        </>
    )
}

export default Biodata