// import { useForm } from "react-hook-form";
// import Joi from "joi";
// import { joiResolver } from "@hookform/resolvers/joi";

//mending yg div putih jadiin relative, yg contentnya pake absolute

function Preview(props){
    return(
        <>
            {
                props.bio.map((item, index) => {
                    return (
                        <div key={index} className='absolute'>
                            <img src={item.photo_url} alt="" className='rounded-full w-28 h-28 object-cover'/>
                            <p className="text-xl">{item.nama}</p>
                            <p className="text-xl">{item.title}</p>
                            <p className="text-xl">{item.phone_number}</p>
                            <p className="text-xl">{item.email}</p>
                            <p className="text-xl">{item.domicile}</p>
                            <p className="text-xl">{item.linkedIn_id}</p>
    
                            <p className="text-xl">{item.about}</p>
                            <p className="text-xl">{item.high_school}</p>
                            <p className="text-xl">{item.diploma}</p>
                            <p className="text-xl">{item.bachelor}</p>
                            <p className="text-xl">{item.master}</p>
                            <p className="text-xl">{item.start_hs}</p>
                            <p className="text-xl">{item.end_hs}</p>
                            <p className="text-xl">{item.start_diploma}</p>
                            <p className="text-xl">{item.end_diploma}</p>
                            <p className="text-xl">{item.start_bachelor}</p>
                            <p className="text-xl">{item.end_bachelor}</p>
                            <p className="text-xl">{item.start_master}</p>
                            <p className="text-xl">{item.end_master}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Preview;