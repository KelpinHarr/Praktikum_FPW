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
        linkedIn_ID: Joi.string().required().messages({
            'string.empty' : 'LinkedIn ID tidak boleh kosong'
        }),
        photo_url: Joi.string().required().messages({
            'string.empty' : 'URL Foto tidak boleh kosong'
        }),
        about: Joi.string().max(100).required().messages({
            'string.empty' : 'Field tidak boleh kosong',
            'string.max' : 'Maksimal 100 kata'
        })
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
        const newBook = {
            kode,
            ...data
        }
        props.setBio([...props.bio, newBook])
        reset()
    }

    return(
        <>
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
                                <input type="text" placeholder="LinkedIn ID" className="border rounded-lg border-1 border-black w-full mt-3 mb-3 pt-1 pl-2 pb-1" {...register('LinkedIn_ID')}/>

                                {errors.linkedIn_ID && <span style={{
                                    color: "red"
                                }} className="ml-1">{errors.linkedIn_ID.message}</span>}
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
                        <textarea name="" id="" cols="30" rows="10" className="border rounded-lg border-1 border-black w-full mb-3 pt-1 pl-2 pb-1" {...register('about')}></textarea>
                    </div>
                </div>
            </div> 
            <div className="border rounded-lg bg-white w-11/12 ml-20 mt-3">
                <p className="text-xl m-8"><strong>Education</strong></p>
                <div className="flex">
                    <div className="ml-8">
                        <input type="checkbox" className="" defaultChecked={props.checked} onChange={(e) => props.setChecked(e.target.value)}/>
                    </div>
                    <p className="text-lg ml-3">High School</p>
                </div>
                <form>
                    <div className="flex px-5">
                        <div className="w-full px-3">
                            <input type="text" placeholder="Place" className="border rounded-lg border-1 border-black w-1/2 pt-1 pl-2 pb-1" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Biodata