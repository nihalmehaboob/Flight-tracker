import '../styles/mian.css'
import { useState } from "react";


const Main=()=>{
const [origin,setOrigin]=useState("");
const [destination, setDestination]=useState("");

const handleOriginChange = (e) => {
    setOrigin(e.target.value);
    console.log(origin);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
    console.log(destination);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the data to the backend or display it
    console.log('Origin:', origin);
    console.log('Destination:', destination);
  };

    return(
        <>
       <div className="main_dev">
       <h1 >Fly WORLD</h1>
       <p className='text-sm-start'>When once you have tasted flight, you will forever walk the earth with your eyes turned skyward,</p>
       <p className='text-sm-start'> for there you have been, and there you will always long to return.</p>
       <div className='box1'>
        <form onSubmit={handleSubmit}>
        <label className='form-label'>Enter your origin:
        <input type="text" value={origin} onChange={handleOriginChange}/>
      </label>
        <label className='form-label' value={destination} onChange={handleDestinationChange}>Enter your Destination:
        <input type="text" />
      </label>
      <button type="submit" className="btn btn-primary">Submit</button>
        </form>
       </div>
       </div>
        </>
    );
};

export default Main ;