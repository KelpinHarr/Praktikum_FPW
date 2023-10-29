import { useState } from 'react'
import Biodata from './components/Biodata'

function App() {
  const [mode, setMode] = useState(0)
  const [index, setIndex] = useState(0)
  const [checkedHS, setCheckedHS] = useState(false);
  const [checkedDiploma, setCheckedDiploma] = useState(false);
  const [checkedBachelor, setCheckedBachelor] = useState(false);
  const [checkedMaster, setCheckedMaster] = useState(false);
  const [id, setId] = useState(1)
  const [bio, setBio] = useState([{
    "id" : 0,
    "nama" : '',
    "title" : '',
    "phone_number" : '',
    "email" : '',
    "domicile" : '',
    "linkedIn_id" : '',
    "photo_url" : '',
    "about" : '',
    "high_school" : '',
    "diploma" : '',
    "bachelor" : '',
    "master" : ''
  }])

  return (
    <>
      <p className='text-3xl mt-10 text-center'><strong>CV Maker</strong></p>
      <button className='border rounded-lg bg-red-400 text-white w-24 h-9 mt-3 ml-20'>Clear</button>

      <Biodata bio={bio} id={id} checkedHS={checkedHS} checkedDiploma={checkedDiploma} checkedBachelor={checkedBachelor} checkedMaster={checkedMaster} setBio={setBio} setId={setId} setCheckedHS={setCheckedHS} setCheckedDiploma={setCheckedDiploma} setCheckedBachelor={setCheckedBachelor} setCheckedMaster={setCheckedMaster}/>
    </>
  )
}

export default App
