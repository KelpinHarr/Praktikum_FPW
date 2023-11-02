import { useState } from 'react'
import Biodata from './components/Biodata'
import Preview from './components/Preview'

function App() {
  const [mode, setMode] = useState(0)
  const [index, setIndex] = useState(0)
  const [checkedHS, setCheckedHS] = useState(false);
  const [checkedDiploma, setCheckedDiploma] = useState(false);
  const [checkedBachelor, setCheckedBachelor] = useState(false);
  const [checkedMaster, setCheckedMaster] = useState(false);
  const [id, setId] = useState(2)
  const [item, setItem] = useState([{
    "id" : 1,
    "titleExp" : '',
    "placeExp" : '',
    "descExp" : '',
    "startExp" : '',
    "endExp" : ''
  }])
  const [bio, setBio] = useState(null)

  return (
    <>
      <p className='text-3xl mt-10 text-center'><strong>CV Maker</strong></p>
      {
        mode == 0 ?
        <Biodata bio={bio} id={id} item={item} checkedHS={checkedHS} mode={mode} checkedDiploma={checkedDiploma} checkedBachelor={checkedBachelor} checkedMaster={checkedMaster} setBio={setBio} setId={setId} setCheckedHS={setCheckedHS} setCheckedDiploma={setCheckedDiploma} setCheckedBachelor={setCheckedBachelor} setCheckedMaster={setCheckedMaster} setItem={setItem} setMode={setMode}/>
        :
        <Preview bio={bio} mode={mode} setMode={setMode}/>
      }

    </>
  )
}

export default App
