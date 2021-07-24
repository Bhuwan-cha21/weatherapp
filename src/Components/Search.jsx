import React, { useCallback, useEffect, useState }  from 'react'
import DisplayCard from './DisplayCard'
import {Switch,Route,Path,Link} from 'react-router-dom'
import  './search.css'
function SearchField(){
    const[city,setCity] = useState()
    const[searchCity,setSearchCity] = useState()
    const[cityData,setCityData] = useState()
        
    function handelChange(){
        setSearchCity(city)
        console.log('clickesd')
        
    }
   
       useEffect(() =>{
        const fetchData = async () =>{
             fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=59a0db4983af7514ceccfaa37492262c`)
            .then(res => res.json())
            .then(resu => setCityData(resu))

                }
         fetchData()
       },[searchCity]);
    
    return(
       
            <div className='main'>
                <div className='SearchField'>
                    <input  type='search' className='City-Input-field' 
                    onChange={(e) =>{
                        setCity(e.target.value)
                    }} 
                    placeholder='Search Your City'>
                        
                    </input>
                    <button onClick={handelChange}><Link to='/card'>Show Weather</Link></button>
            
                </div>
                <Switch>
                    <Route path='/card'><DisplayCard data={cityData}/></Route>
                </Switch>  
            </div>
           
    
        
    )
    
}
export default SearchField