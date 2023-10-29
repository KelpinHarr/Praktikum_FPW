import { useState } from 'react'
import Biodata from './components/Biodata'

function App() {
  const [mode, setMode] = useState(0)
  const [index, setIndex] = useState(0)
  const [checked, setChecked] = useState(false);
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
    "about" : ''
  }])

  return (
    <>
      <p className='text-3xl mt-10 text-center'><strong>CV Maker</strong></p>
      <button className='border rounded-lg bg-red-400 text-white w-24 h-9 mt-3 ml-20'>Clear</button>

      <Biodata bio={bio} id={id} setBio={setBio} setId={setId} setChecked={setChecked}/>
    </>
  )
}

export default App
