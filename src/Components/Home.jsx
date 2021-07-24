import React from 'react'
import SearchField  from './Search'
import DisplayCard from './DisplayCard'
import './Home.css'
function Home(){
    return(
       <div className='Home'>
          <div className='Search-Container'><SearchField/></div>
         
        </div>
        
    )
}
export default Home