import phone from '../assets/phone.png'
import email from '../assets/email.png'
import location from '../assets/location.png'

function Preview(props){
    const handlerBack = () => {
        props.setMode(0);
    }
    const handlePrint = () => {
        const printContents = document.getElementById('content').innerHTML;
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        // alert('p ingfo')
    }
    return(
        <>
            <div className="flex">
                <div className="w-full flex justify-around props.bios-center">
                    <button className="border rounded-lg bg-red-400 text-white w-24 h-9 mt-3" onClick={handlerBack}>Back</button>
                    <button className="border rounded-lg bg-green-400 text-white w-24 h-9 mt-3" onClick={handlePrint}>Print</button>
                </div>
            </div>
            <div className="flex justify-center">
                <div className='absolute border rounded-lg bg-white w-1/2 mt-7' id="content">
                    <div className="flex">
                        <div className="ml-28 mt-20">
                            <img src={props.bio.photo_url} alt="" className='rounded-full w-48 h-48 object-cover border-blue-800 border-4'/>
                        </div>
                        <div className="mt-24 ml-8">
                            <p className="text-5xl text-blue-400"><strong>{props.bio.nama}</strong></p>
                            <p className="text-4xl text-blue-500 ml-32 mt-7">{props.bio.title}</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-5/12 ml-2 mt-2">
                            <p className="text-2xl text-center">About Me</p>
                            <p className="text-xl text-center mt-3">{props.bio.about}</p>

                            <div className="flex">
                                <img src={phone} alt="" width={40} className='ml-16 mt-5'/>
                                <p className="text-xl ml-8 mt-6">{props.bio.phone_number}</p>
                            </div>
                            <div className="flex">
                                <img src={email} alt="" width={37} className='ml-16 mt-3'/>
                                <p className="text-xl ml-8 mt-4">{props.bio.email}</p>
                            </div>
                            <div className="flex">
                                <img src={location} alt="" width={35} className='ml-16 mt-3'/>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <p className="text-2xl text-center">Experience</p>
                        </div>
                    </div>
                    <p className="text-xl">{props.bio.email}</p>
                    <p className="text-xl">{props.bio.domicile}</p>
                    <p className="text-xl">{props.bio.linkedIn_id}</p>
                    <p className="text-xl">{props.bio.high_school}</p>
                    <p className="text-xl">{props.bio.diploma}</p>
                    <p className="text-xl">{props.bio.bachelor}</p>
                    <p className="text-xl">{props.bio.master}</p>
                    <p className="text-xl">{props.bio.start_hs}</p>
                    <p className="text-xl">{props.bio.end_hs}</p>
                    <p className="text-xl">{props.bio.start_diploma}</p>
                    <p className="text-xl">{props.bio.end_diploma}</p>
                    <p className="text-xl">{props.bio.start_bachelor}</p>
                    <p className="text-xl">{props.bio.end_bachelor}</p>
                    <p className="text-xl">{props.bio.start_master}</p>
                    <p className="text-xl">{props.bio.end_master}</p>
                    {
                        props.bio.experience.map((item, index) => {
                            <p className="text-xl">{item.title}</p>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Preview;