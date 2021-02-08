import { useState, useEffect } from 'react'
import Launches from './comp/Launches'
import Select from './comp/Select'
import { GetLaunches , GetRockets } from './comp/Service'

const App = () => {

	const [ launches, setLaunches ]	= useState([])
	const [ select , setSelect] = useState('')

	useEffect(() => {
		GetLaunches().then((res) => setLaunches(res.data)) 
	}, [])

  return (
  <div>	
		 <Select launches={launches} setLaunches={setLaunches} setSelect={setSelect}></Select>
	  	<Launches launches={launches}></Launches>

  </div>
  )
}


export default App;