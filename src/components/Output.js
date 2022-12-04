
const Output = ({ password, handleRefresh }) => {
  return (
    <>
      <div className="conatiner mb-3">
        <label className="form-label">Generated password</label>
        <div className="row">
          <div className="col-10">
            <input className="form-control mb-3" value={password} readOnly />
          </div>
          <div className="col-auto">
            <button type="button" className="btn btn-primary" onClick={handleRefresh}>Refresh</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Output;
