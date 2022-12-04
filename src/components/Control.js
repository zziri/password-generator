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
      {/* 이것도 컴포넌트로 나누면 좋을듯...? */}
      <div className="container">
        <button type="button" className="btn btn-primary" onClick={handleRefresh}>Refresh</button>
      </div>
      {/* 요 부분 따로 컴포넌트로 나눌 필요가 있지 않을까 */}
      <div className="container">
        <label className="form-label">Length</label>
        <input
          type="range"
          className="form-range"
          id="customRange1"
          onChange={handleRangeBar}
          value={rangeValue}
          min="1"
        />
        <p className="text-center">{rangeValue}</p>
      </div>
    </>
  )
};

export default Control;
