import { useState } from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from '@hookform/resolvers/joi'
// import React, {useRef} from "react";

function Biodata(props){
    const schema = Joi.object({
        nama: Joi.string().required().messages({
            'string.empty' : 'Nama tidak boleh kosong!'
        }),
        title: Joi.string().required().messages({
            'string.empty' : 'Judul harus diisi!'
        }),
        phone_number: Joi.string().min(8).max(12).regex(/^[0-9]+$/).required().messages({
            'string.empty' : 'Nomor telpon tidak boleh kosong',
            'string.pattern.base' : "Invalid format",
            'string.min' : 'Minimal 8 angka',
            'string.max' : 'Maksimal 12 angka'
        }),
        email: Joi.string().required().messages({
            'string.empty' : 'Email tidak boleh kosong'
        }),
        domicile: Joi.string().required().messages({
            'string.empty' : 'Domisili tidak boleh kosong'
        }),
        linkedIn_id: Joi.string().required().messages({
            'string.empty' : 'LinkedIn ID tidak boleh kosong'
        }),
        photo_url: Joi.string().required().messages({
            'string.empty' : 'URL Foto tidak boleh kosong'
        }),
        about: Joi.string().max(100).required().messages({
            'string.empty' : 'Field tidak boleh kosong',
            'string.max' : 'Maksimal 100 kata'
        }),
        high_school: Joi.string().required().messages({
            'string.empty' : 'Place harus diisi'
        }),
        diploma: Joi.string().required().messages({
            'string.empty' : 'Place harus diisi'
        }),
        bachelor: Joi.string().required().messages({
            'string.empty' : 'Place harus diisi'
        }),
        master: Joi.string().required().messages({
            'string.empty' : 'Place harus diisi'
        }),
        start_hs: Joi.string().required().messages({
            'string.empty' : 'Start harus diisi'
        }),
        end_hs: Joi.string().required().messages({
            'string.empty' : 'End harus diisi'
        }),
        start_diploma: Joi.string().required().messages({
            'string.empty' : 'Start harus diisi'
        }),
        end_diploma: Joi.string().required().messages({
            'string.empty' : 'End harus diisi'
        }),
        start_bachelor: Joi.string().required().messages({
            'string.empty' : 'Start harus diisi'
        }),
        end_bachelor: Joi.string().required().messages({
            'string.empty' : 'End harus diisi'
        }),
        start_master: Joi.string().required().messages({
            'string.empty' : 'Start harus diisi'
        }),
        end_master: Joi.string().required().messages({
            'string.empty' : 'End harus diisi'
        }),
        titleExp: Joi.string().required().messages({
            'string.empty' : 'Title harus diisi'
        }),
        placeExp: Joi.string().required().messages({
            'string.empty' : 'Place harus diisi'
        }),
        descExp: Joi.string().required().messages({
            'string.empty' : 'Description harus diisi'
        }),
        startExp: Joi.string().required().messages({
            'string.empty' : 'Start harus diisi'
        }),
        endExp: Joi.string().required().messages({
            'string.empty' : 'End harus diisi'
        }),
    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: joiResolver(schema)
    });


    const handlePrint = () => {
        const printContents = document.getElementById('content').innerHTML;
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }

    const addBio = data => {
        console.log(data)
        const kode = props.bio[props.bio.length-1].id + 1;
        const newBio = {
            kode,
            ...data
        }
        props.setBio([...props.bio, newBio])
        reset()
        props.setMode(1);
    }
    function handlerMenu(){
        const kode = props.item[props.item.length-1].id + 1;
        const newItem = {
            id: kode,
            title: title,
            place: place,
            desc: desc,
            startExp: start,
            endExp: end
        }
        props.setItem([...props.item, newItem]);
    }
    function delMenu(id){
        list.props.setItem(list.props.item.filter((items) => items.id != id))
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
        reset();
    }

    return(
        <>
            <button className='border rounded-lg bg-red-400 text-white w-24 h-9 mt-3 ml-20' onClick={handlerClear}>Clear</button>
            <div className='border rounded-lg bg-white w-11/12 ml-20 mt-7' >
                <form>
                    <div className="flex px-5">
                            <div className="w-1/2 px-3">
                                <input type="text" placeholder="Nama" className="border rounded-lg border-1 border-black w-full mt-8 mb-3 pt-1 pl-2 pb-1" {...register('nama')}/>

                                {errors.nama && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.nama.message}</span>}
                            </div>
                            <div className="w-1/2 px-3">
                                <input type="text" placeholder="Title" className="border rounded-lg border-1 border-black w-full mt-8 mb-3 pt-1 pl-2 pb-1" {...register('title')}/>   

                                {errors.title && <span style={{
                                color: "red"
                                }} className="ml-1">{errors.title.message}<br/></span>} 
                            </div>
                    </div>
                    <div className="flex px-5">
                            <div className="w-1/2 px-3">
                                <input type="text" placeholder="Phone Number" className="border rounded-lg border-1 border-black w-full mt-3 mb-3 pt-1 pl-2 pb-1" {...register('phone_number')}/>

                                {errors.phone_number && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.phone_number.message}</span>}
                            </div>
                            <div className="w-1/2 px-3">
                                <input type="text" placeholder="Email" className="border rounded-lg border-1 border-black w-full mt-3 mb-3 pt-1 pl-2 pb-1" {...register('email')}/>

                                {errors.email && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.email.message}</span>}
                            </div>
                    </div>
                    <div className="flex px-5">
                            <div className="w-1/2 px-3">
                                <input type="text" placeholder="Domicile" className="border rounded-lg border-1 border-black w-full mt-3 mb-3 pt-1 pl-2 pb-1" {...register('domicile')}/>

                                {errors.domicile && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.domicile.message}</span>}
                            </div>
                            <div className="w-1/2 px-3">
                                <input type="text" placeholder="LinkedIn ID" className="border rounded-lg border-1 border-black w-full mt-3 mb-3 pt-1 pl-2 pb-1" {...register('linkedIn_id')}/>

                                {errors.linkedIn_id && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.linkedIn_id.message}</span>}
                            </div>
                    </div>
                    <div className="flex px-5">
                        <div className="w-full px-3 mb-6">
                            <input type="text" placeholder="Photo URL" className="border rounded-lg border-1 border-black w-full mt-3 mb-3 pt-1 pl-2 pb-1" {...register('photo_url')}/>

                            {errors.photo_url && <span style={{
                                color: "red"
                            }} className="ml-1">{errors.photo_url.message}</span>}
                        </div>
                    </div>
                </form>
            </div>    
            <div className="border rounded-lg bg-white w-11/12 ml-20 mt-3" id="content">
                <p className="text-xl m-8"><strong>About myself</strong></p>
                <div className="flex px-5">
                    <div className="w-full px-3 mb-5">
                        <form action="">
                            <textarea name="" id="" cols="30" rows="10" className="border rounded-lg border-1 border-black w-full mb-3 pt-1 pl-2 pb-1 h-48" {...register('about')} />

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
                                <input type="text" placeholder="Place" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('high_school')}/>
                                {errors.high_school && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.high_school.message}</span>}
                            </div>

                            <div className="w-1/12 px-3">
                                <input type="text" placeholder="Start" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('start_hs')}/>
                                {errors.start_hs && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.start_hs.message}</span>}
                            </div>

                            <div className="w-1/12 px-3">
                                <input type="text" placeholder="End" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('end_hs')}/>
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
                                <input type="text" placeholder="Place" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('diploma')}/>
                                {errors.diploma && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.diploma.message}</span>}
                            </div>

                            <div className="w-1/12 px-3">
                                <input type="text" placeholder="Start" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('start_diploma')}/>
                                {errors.start_diploma && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.start_diploma.message}</span>}
                            </div>

                            <div className="w-1/12 px-3">
                                <input type="text" placeholder="End" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('end_diploma')}/>
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
                                <input type="text" placeholder="Place" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('bachelor')}/>
                                {errors.bachelor && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.bachelor.message}</span>}
                            </div>

                            <div className="w-1/12 px-3">
                                <input type="text" placeholder="Start" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('start_bachelor')}/>
                                {errors.start_bachelor && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.start_bachelor.message}</span>}
                            </div>

                            <div className="w-1/12 px-3">
                                <input type="text" placeholder="End" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('end_bachelor')}/>
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
                                <input type="text" placeholder="Place" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('master')}/>
                                {errors.master && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.master.message}</span>}
                            </div>

                            <div className="w-1/12 px-3">
                                <input type="text" placeholder="Start" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('start_master')}/>
                                {errors.start_master && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.start_master.message}</span>}
                            </div>

                            <div className="w-1/12 px-3 mb-8">
                                <input type="text" placeholder="End" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('end_master')}/>
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
                                            <input type="text" placeholder="Title" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('titleExp')}/>
                                            {errors.titleExp && <span style={{
                                                color: "red"
                                            }} className="ml-1">{errors.titleExp.message}</span>}
                                        </div>
                                        <div className="w-5/6 px-3">
                                            <input type="text" placeholder="Place" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('placeExp')}/>
                                            {errors.placeExp && <span style={{
                                                color: "red"
                                            }} className="ml-1">{errors.placeExp.message}</span>}
                                        </div>
                                        <div className="w-1/4 px-3">
                                            <button onClick={() => delMenu(items.id)}><p className="w-full mt-4 text-2xl">❌</p></button>
                                        </div>
                                    </div>
                                    <div className="flex px-5">
                                        <div className="w-3/4 px-3">
                                            <input type="text" placeholder="Description" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('descExp')}/>
                                            {errors.descExp && <span style={{
                                                color: "red"
                                            }} className="ml-1">{errors.descExp.message}</span>}
                                        </div>
                                        <div className="w-1/12 px-3">
                                            <input type="text" placeholder="Start" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('startExp')}/>
                                            {errors.startExp && <span style={{
                                                color: "red"
                                            }} className="ml-1">{errors.startExp.message}</span>}
                                        </div>
                                        <div className="w-1/12 px-3">
                                            <input type="text" placeholder="End" className="border rounded-lg border-1 border-black w-full pt-1 pl-2 pb-1 mt-4" {...register('endExp')}/>
                                            {errors.endExp && <span style={{
                                                color: "red"
                                            }} className="ml-1">{errors.endExp.message}</span>}
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