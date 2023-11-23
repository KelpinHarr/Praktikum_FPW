import axios from "axios";

const loadRegister = async () => {
    return await axios.post("http://localhost:3000/register")
}

export default { loadRegister }