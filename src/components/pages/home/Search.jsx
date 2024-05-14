import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Search() {
    const [value, setValue] = useState(0);

    const handleRangeChange = (event) => {
      setValue(event.target.value);
    };
  return (
    <div className="row g-1">
    <div className="col-md-3">
      <div className="input-form">
        <img src="/fontistomapmarker.svg" alt="" />
        <input
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
          type="text"
          className="border-0"
          placeholder="Gäste"
          name="Location"
          id=""
        />
      </div>
    </div>
    <div className="col-lg-2 col-md-3">
      <Link
        className="sec-btn text-decoration-none"
        to="/Accommodation"
      >
        Jetzt finden
      </Link>
    </div>
  </div>
  )
}

export default Search