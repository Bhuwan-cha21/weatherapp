import React, { useRef } from 'react'
import './DisplayCard.css'
function DisplayCard({data}){
   console.log(data)
   return(
        <div className='DisplayCard'>
            <div className='Name-Container'><h1 className='Name'>{data.name}</h1></div>
            <div className='Type-conatiner'>
                <img src='cloud.jpg'></img>
                <h1 className='type'>Cloudy</h1>
             </div>
             <div className='Rise-Set'>
                 <div className='Rise'>
                     <h1 className='rise-time'>5:34 AM</h1>
                     <h1 className='rise-name'>Sunrise</h1>
                 </div>
                 <div className='current-time'>
                     <h1 className='time'>12:34 AM</h1>
                     <h1  className='time-name'>Current Time</h1>
                 </div>
                 <div className='Set'>
                     <h1 className='set-time'>6:34 PM</h1>
                     <h1 className='set-name'>Sunset</h1>
                 </div>
             </div>
             <div className='wind'>
                 <div className='current-humadity'>
                     <h1 className='humadity'>82</h1>
                    <h1 className='humadity-name'>Humidity</h1>
                 </div>
                 <div className='current-visibility'>
                    <h1  className='visibility'>{data.visibility}</h1>
                    <h1 className='visibility-name'>Visibility</h1>
                 </div>
             </div>
             <div className='temp'>
                 <div className='max-temp'>
                     <h1 className='max-value'>36</h1>
                    <h1 className='max-name'>Max-Temp</h1>
                 </div>
                 <div className='Current-temp'>
                     <h1 className='Current-value'>81</h1>
                    <h1 className='Current-name'>Current-Temp</h1>
                 </div>
                 <div className='Min-temp'>
                     <h1 className='Min-value'>27</h1>
                    <h1 className='Min-name'>Min-Temp</h1>
                 </div>
             </div>
        </div>
    )
    
}
export default DisplayCard