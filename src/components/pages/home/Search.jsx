import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { acttractionActionSearch } from '../../../redux/actions/attractions';

function Search(props) {
    const [value, setValue] = useState(0);
    const [location,setLocation]=useState();
    const [range,setRange]=useState();

    const handleRangeChange = (event) => {
      setValue(event.target.value);
    };

const dispatch =useDispatch();
const navigate =useNavigate()


const handelSubmit = () =>{
  if(props?.name === "attractions"){
    const payload ={
        location: location,
        radius: value,
        guests:range
    }
    dispatch(acttractionActionSearch(payload)).then((res)=>{
      console.log(res.payload)
      localStorage.setItem("search",res.payload)
      navigate(`/attractions?search=${location}&radius=${value}&guest=range`)
    })
  }
}

  return (
    <div className="row g-1">
    <div className="col-md-3">
      <div className="input-form">
        <img src="/fontistomapmarker.svg" alt="" />
        <input
          onChange={(e)=>setLocation(e.target.value)}
          type="text"
          className="border-0"
          placeholder="Location..."
          name="Location"
          id=""
        />
      </div>
    </div>
    <div className="col-md-3">
      <div className="input-form align-items-center d-flex position-relative">
        <div className="d-flex align-items-center gap-2 ">
        <img src="https://demogswebtech.com/mallorca/public/images/custom-img/ant-design_compass-filled.svg" alt="" />
        <div
          id="rangeValue"
          className="range-value"
          style={{ width: "30px", marginRight:"10px" }}
        >
          {value}KM{" "}
        </div>
        </div>

        <div className="range-container range-form">
          <input
            type="range"
            id="datepicker"
            min="0"
            max="15"
            className="border-0 range-input form-control-range range-slider"
            name="Location"
            value={value}
            onChange={handleRangeChange}
          />
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="input-form">
        <img src=" /bipeoplefill.svg" alt="" />
        <input
         onChange={(e)=>setRange(e.target.value)}
          type="text"
          className="border-0"
          placeholder="Gäste"
          name="Location"
          id=""
        />
      </div>
    </div>
    <div className="col-lg-2 col-md-3">
      <button
      onClick={handelSubmit}
        className="sec-btn text-decoration-none"
        // to={props?.name === "hotels" ? `/hotels` : "/attractions"}
      >
        Jetzt finden
      </button>
    </div>
  </div>
  )
}

export default Search