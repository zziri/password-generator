import { useState } from "react";

const Control = () => {
  const [rangeValue, setRangeValue] = useState(20);
  const handleRefresh = (event) => {
    event.preventDefault();
    console.log(event);
  }

  const handleRangeBar = (event) => {
    event.preventDefault();
    setRangeValue(event.target.value);
  }

  return (
    <>
      <div className="container">
        <button type="button" className="btn btn-primary" onClick={handleRefresh}>Refresh</button>
      </div>
      <div className="container">
        <label className="form-label">Example range</label>
        <input type="range" className="form-range" id="customRange1" onChange={handleRangeBar} value={rangeValue}></input>
        <p className="text-center">{rangeValue}</p>
      </div>
    </>
  )
};

export default Control;
