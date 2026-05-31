import { Edit } from '../components/edit'
import { CVPage } from '../components/page'
import { useState } from 'react'
function App() {
      const dummyData = {
        generalInfo:
        {
        firstname:"John",
        lastname:"Doe",
        profession:"Senior Programmer",
        telephone:"012345678",
        email:"john.doe@jd.com",
        linkedin:"John Doe",
        location:"Texas"
      }
    }
    const [data , setData] = useState(dummyData)
function handleData(category, key, value) {
  setData(prev => ({
    ...prev,
    [category]: {
      ...prev[category],
      [key]: value
    }
  }));
}
  return <>
      <Edit editData={handleData}/>
    <CVPage data={data}/>
  </>
}

export default App
