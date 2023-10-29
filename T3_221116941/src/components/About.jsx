import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

function About(props){
    const schema = Joi.object({
        about: Joi.string().required().messages({
            'string.empty' : 'Field harus diisi!'
        })
    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: joiResolver(schema)
    });

    
}

export default About;