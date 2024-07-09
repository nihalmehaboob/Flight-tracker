import '../styles/mian.css'
const Main=()=>{
    return(
        <>
       <div className="main_dev">
       <h1 >Fly WORLD</h1>
       <p className='text-sm-start'>When once you have tasted flight, you will forever walk the earth with your eyes turned skyward,</p>
       <p className='text-sm-start'> for there you have been, and there you will always long to return.</p>
       <div className='box1'>
        <form >
        <label className='form-label'>Enter your origin:
        <input type="text" />
      </label>
        <label className='form-label'>Enter your Destination:
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