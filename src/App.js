import React,{useState} from 'react'
import SearchBar from './Components/SearchBar'
import Display from './Components/Display'
import "../src/App.css"

const App = () => {
  const [searchresult, setsearchresult] = useState([]);
  return (
    <div>
      <p>Bharat Snaps</p>
      <SearchBar searchresultOut={setsearchresult}/>
      <Display searchresultIn={searchresult}/>
      <p className='footer'>Made with ❤️ by Subhadeep Hazra</p>

    </div>
  )
}

export default App