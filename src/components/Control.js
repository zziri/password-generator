const Control = ({ rangeValue, handleRange, handleRefresh }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <label className="form-label">Length</label>
            <input
              type="range"
              className="form-range"
              id="customRange1"
              onChange={handleRange}
              value={rangeValue}
              min="1"
            />
            <p className="text-center">{rangeValue}</p>
          </div>
          <div className="col-5"></div>
        </div>
      </div>
    </>
  )
};

export default Control;
